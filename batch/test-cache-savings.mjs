#!/usr/bin/env node
/**
 * test-cache-savings.mjs — Empirical prompt-cache A/B/C for batch-apply.
 *
 * Measures REAL token usage (cache_creation / cache_read / input) from the
 * Anthropic API across three cache strategies, using the same payload the
 * batch-apply workers see: apply.md + cv.md + 4 resume PDFs + a JD.
 *
 *   NONE     — no caching at all (worst case / no-prime baseline)
 *   CV-ONLY  — current code: cv.md + PDFs cached, apply.md read fresh per worker
 *   APPLY-CV — new code:     apply.md + cv.md + PDFs all cached
 *
 * For each cached variant it runs ONE prime call (cache write) then N worker
 * calls (cache read + per-job JD). It prints per-call usage, the cache_read
 * assertion, and a cost table at Haiku 4.5 rates.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node batch/test-cache-savings.mjs [jd.txt] [N]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

const MODEL = "claude-haiku-4-5";
// Haiku 4.5 rates, $ per 1M tokens
const RATE = { input: 1.0, output: 5.0, cacheWrite5m: 1.25, cacheRead: 0.1 };

const JD_PATH = process.argv[2] || path.join(__dirname, "neurocrine-jd.txt");
const N = parseInt(process.argv[3] || "5", 10);

const PDFS = [
  "C:\\Users\\daris\\Downloads\\DarisChenResumeAI.pdf",
  "C:\\Users\\daris\\Downloads\\DarisChenResumeSWE.pdf",
  "C:\\Users\\daris\\Downloads\\DarisChenResumeEE.pdf",
  "C:\\Users\\daris\\Downloads\\DarisChenResumeWD.pdf",
];

function read(p) {
  if (!fs.existsSync(p)) throw new Error(`missing file: ${p}`);
  return fs.readFileSync(p, "utf-8");
}

function pdfBlocks() {
  return PDFS.map((p) => {
    if (!fs.existsSync(p)) {
      console.warn(`⚠️  missing PDF: ${p}`);
      return null;
    }
    return {
      type: "document",
      source: {
        type: "base64",
        media_type: "application/pdf",
        data: fs.readFileSync(p).toString("base64"),
      },
    };
  }).filter(Boolean);
}

const PRIMER = "You are a resume-matching agent. Pick the best resume for a JD.";
const INSTRUCTION =
  "\n\nBased on the JD below, reply with ONLY one code: AI, SWE, EE, or WD. No other text.\n\nJOB DESCRIPTION:\n";

// Build a {system, messages} request for a given variant.
function buildRequest(variant, cv, applyMd, pdfs, jdText, isPrime) {
  const userTail = isPrime ? "ok" : INSTRUCTION + jdText;

  if (variant === "none") {
    return {
      system: [
        { type: "text", text: PRIMER },
        { type: "text", text: `# apply.md\n${applyMd}\n\n# cv.md\n${cv}` },
      ],
      messages: [{ role: "user", content: [...pdfs, { type: "text", text: userTail }] }],
    };
  }

  if (variant === "cv-only") {
    // cv + PDFs cached; apply.md sits AFTER the breakpoint => full price per call
    const pdfsC = pdfs.map((b, i) =>
      i === pdfs.length - 1 ? { ...b, cache_control: { type: "ephemeral" } } : b,
    );
    const tail = isPrime ? "ok" : `# apply.md\n${applyMd}${INSTRUCTION}${jdText}`;
    return {
      system: [
        { type: "text", text: PRIMER },
        { type: "text", text: `# cv.md\n${cv}`, cache_control: { type: "ephemeral" } },
      ],
      messages: [{ role: "user", content: [...pdfsC, { type: "text", text: tail }] }],
    };
  }

  // apply-cv: apply.md + cv + PDFs all cached
  const pdfsC = pdfs.map((b, i) =>
    i === pdfs.length - 1 ? { ...b, cache_control: { type: "ephemeral" } } : b,
  );
  return {
    system: [
      { type: "text", text: PRIMER },
      {
        type: "text",
        text: `# apply.md\n${applyMd}\n\n# cv.md\n${cv}`,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: [...pdfsC, { type: "text", text: userTail }] }],
  };
}

const u = (r) => ({
  input: r.usage.input_tokens || 0,
  write: r.usage.cache_creation_input_tokens || 0,
  read: r.usage.cache_read_input_tokens || 0,
  output: r.usage.output_tokens || 0,
});

const cost = (t) =>
  (t.input * RATE.input +
    t.write * RATE.cacheWrite5m +
    t.read * RATE.cacheRead +
    t.output * RATE.output) /
  1e6;

async function runVariant(client, label, variant, cv, applyMd, pdfs, jd) {
  const calls = [];
  if (variant !== "none") {
    const req = buildRequest(variant, cv, applyMd, pdfs, jd, true);
    const r = await client.messages.create({ model: MODEL, max_tokens: 16, ...req });
    calls.push({ kind: "prime", ...u(r) });
  }
  for (let i = 0; i < N; i++) {
    const req = buildRequest(variant, cv, applyMd, pdfs, jd, false);
    const r = await client.messages.create({ model: MODEL, max_tokens: 16, ...req });
    calls.push({ kind: `work${i + 1}`, ...u(r) });
  }
  const tot = calls.reduce(
    (a, c) => ({
      input: a.input + c.input,
      write: a.write + c.write,
      read: a.read + c.read,
      output: a.output + c.output,
    }),
    { input: 0, write: 0, read: 0, output: 0 },
  );
  return { label, variant, calls, tot, cost: cost(tot) };
}

async function main() {
  let Anthropic, client;
  try {
    Anthropic = (await import("@anthropic-ai/sdk")).default;
    client = new Anthropic();
  } catch (e) {
    console.error("❌ Could not init Anthropic client. Set ANTHROPIC_API_KEY.");
    console.error("   ", e.message);
    process.exit(1);
  }

  const cv = read(path.join(projectRoot, "cv.md"));
  const applyMd = read(path.join(projectRoot, "modes", "apply.md"));
  const jd = read(JD_PATH);
  const pdfs = pdfBlocks();

  console.log("━".repeat(70));
  console.log(`Cache-savings test  |  model=${MODEL}  |  workers=${N}`);
  console.log(`JD: ${JD_PATH}`);
  console.log("━".repeat(70));

  // Component token counts (count_tokens, exact, server-side).
  const ct = async (content) =>
    (await client.messages.countTokens({ model: MODEL, messages: [{ role: "user", content }] }))
      .input_tokens;
  const jdTok = await ct(jd);
  const cvTok = await ct(cv);
  const applyTok = await ct(applyMd);
  const pdfTok = await ct([...pdfs, { type: "text", text: "." }]);
  console.log("\nComponent sizes (count_tokens):");
  console.log(`  JD (1 copy, = conductor payload per job): ${jdTok} tok`);
  console.log(`  cv.md:    ${cvTok} tok`);
  console.log(`  apply.md: ${applyTok} tok`);
  console.log(`  4 PDFs:   ${pdfTok} tok (as base64 document blocks)`);

  const results = [];
  for (const [label, variant] of [
    ["NONE     (no caching)", "none"],
    ["CV-ONLY  (current code)", "cv-only"],
    ["APPLY-CV (new code)", "apply-cv"],
  ]) {
    process.stdout.write(`\nRunning ${label} ... `);
    const res = await runVariant(client, label, variant, cv, applyMd, pdfs, jd);
    console.log("done");
    for (const c of res.calls) {
      const hit = c.kind.startsWith("work") && variant !== "none";
      const flag = hit ? (c.read > 0 ? "✓cache-read" : "✗NO-READ") : "";
      console.log(
        `    ${c.kind.padEnd(6)} in=${String(c.input).padStart(6)} write=${String(c.write).padStart(6)} read=${String(c.read).padStart(6)} out=${c.output}  ${flag}`,
      );
    }
    results.push(res);
  }

  // Assertion: in cached variants every worker call must show cache_read > 0.
  console.log("\n" + "━".repeat(70));
  console.log("ASSERTION — every worker in a cached variant hits the cache:");
  let ok = true;
  for (const r of results.filter((x) => x.variant !== "none")) {
    const workers = r.calls.filter((c) => c.kind.startsWith("work"));
    const miss = workers.filter((c) => c.read === 0).length;
    const verdict = miss === 0 ? "PASS" : `FAIL (${miss}/${workers.length} missed)`;
    if (miss !== 0) ok = false;
    console.log(`  ${r.label.padEnd(26)} ${verdict}`);
  }

  console.log("\n" + "━".repeat(70));
  console.log("TOTAL billed tokens + cost (Haiku 4.5):");
  console.log(
    "  variant                    input   write    read   output     $cost",
  );
  for (const r of results) {
    console.log(
      `  ${r.label.padEnd(24)} ${String(r.tot.input).padStart(6)} ${String(r.tot.write).padStart(6)} ${String(r.tot.read).padStart(6)} ${String(r.tot.output).padStart(6)}   $${r.cost.toFixed(5)}`,
    );
  }
  const none = results[0].cost;
  console.log("\nSavings vs NONE:");
  for (const r of results.slice(1)) {
    console.log(
      `  ${r.label.padEnd(24)} $${(none - r.cost).toFixed(5)}  (${(((none - r.cost) / none) * 100).toFixed(1)}% cheaper)`,
    );
  }
  const cvOnly = results[1].cost;
  const applyCv = results[2].cost;
  console.log(
    `\nIncremental gain from caching apply.md (CV-ONLY → APPLY-CV): $${(cvOnly - applyCv).toFixed(5)} per ${N}-job batch`,
  );
  console.log("━".repeat(70));
  process.exit(ok ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
