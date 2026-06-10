#!/usr/bin/env node

/**
 * Batch Apply — Conductor + Workers + Judge Architecture
 *
 * Solves Playwright race conditions by serializing browser access:
 *   - Conductor: Sequential Playwright calls to extract JDs
 *   - Workers: Parallel haiku subagents (text-only, no browser)
 *   - Judge: Sequential validator that writes to batch.txt
 *
 * Triple-redundant cleanup guarantees no temp file bloat.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const pendingDir = path.join(__dirname, "pending");

// ═══════════════════════════════════════════════════════════════
// CLEANUP — Triple-redundant temp file deletion
// ═══════════════════════════════════════════════════════════════

function cleanupPending() {
  if (fs.existsSync(pendingDir)) {
    fs.rmSync(pendingDir, { recursive: true, force: true });
  }
}

function ensurePendingDir() {
  cleanupPending(); // Wipe stale files from any previous run
  fs.mkdirSync(pendingDir, { recursive: true });
}

// Register cleanup hooks (fire on every exit path)
process.on("exit", cleanupPending);
process.on("SIGINT", () => { cleanupPending(); process.exit(130); });
process.on("SIGTERM", () => { cleanupPending(); process.exit(143); });
process.on("uncaughtException", (e) => {
  cleanupPending();
  console.error(e);
  process.exit(1);
});

// ═══════════════════════════════════════════════════════════════
// INPUT PARSING
// ═══════════════════════════════════════════════════════════════

function parseInput(args) {
  if (args.length === 1 && args[0].endsWith(".txt")) {
    const filePath = path.isAbsolute(args[0])
      ? args[0]
      : path.join(__dirname, args[0]);

    if (fs.existsSync(filePath)) {
      const content = readFileSync(filePath, "utf-8");
      return content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && line.startsWith("http"));
    }
  }
  return args.filter((arg) => arg.startsWith("http"));
}

function extractCompanyFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace("www.", "").split(".")[0];
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch {
    return "Unknown";
  }
}

function readCV() {
  const cvPath = path.join(projectRoot, "cv.md");
  if (!fs.existsSync(cvPath)) {
    throw new Error(`CV not found at ${cvPath}`);
  }
  return readFileSync(cvPath, "utf-8");
}

// ═══════════════════════════════════════════════════════════════
// CACHE PRIME — Run after conductor, before workers
// ═══════════════════════════════════════════════════════════════

/**
 * Prime Anthropic prompt cache with cv.md + 4 resume PDFs.
 * Call this AFTER conductor finishes, IMMEDIATELY before spawning workers.
 * Cache TTL is 5 minutes — start the clock when workers actually need it.
 */
async function primeCache(cvContent) {
  const Anthropic = (await import("@anthropic-ai/sdk")).default;
  const client = new Anthropic();

  const downloads = "C:\\Users\\daris\\Downloads";
  const pdfPaths = [
    `${downloads}\\DarisChenResumeAI.pdf`,
    `${downloads}\\DarisChenResumeSWE.pdf`,
    `${downloads}\\DarisChenResumeEE.pdf`,
    `${downloads}\\DarisChenResumeWD.pdf`,
  ];

  // Read PDFs as base64 for the API
  const pdfBlocks = pdfPaths.map((p) => {
    if (!fs.existsSync(p)) {
      console.warn(`⚠️  Missing PDF: ${p}`);
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

  const systemBlocks = [
    { type: "text", text: "You are a cache-priming agent. Acknowledge briefly." },
    {
      type: "text",
      text: `# CV (cv.md)\n\n${cvContent}`,
      cache_control: { type: "ephemeral" },
    },
  ];

  const userContent = [
    ...pdfBlocks,
    { type: "text", text: "Cache primed. Reply 'ok'." },
  ];

  // Mark the last user content block with cache_control to extend cache
  if (pdfBlocks.length > 0) {
    userContent[pdfBlocks.length - 1].cache_control = { type: "ephemeral" };
  }

  console.log("🔥 Priming cache (cv.md + 4 PDFs)...");
  const start = Date.now();

  const response = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 50,
    system: systemBlocks,
    messages: [{ role: "user", content: userContent }],
  });

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  const usage = response.usage;
  console.log(`✓ Cache primed in ${elapsed}s`);
  console.log(`  Cache write: ${usage.cache_creation_input_tokens || 0} tokens`);
  console.log(`  5-minute TTL clock starts NOW — spawn workers immediately\n`);

  return response;
}

// ═══════════════════════════════════════════════════════════════
// AGENT PROMPT BUILDERS
// ═══════════════════════════════════════════════════════════════

function buildConductorPlan(jobs) {
  return `You are the conductor for batch apply. Use Playwright SEQUENTIALLY to extract JDs.

Jobs to process:
${jobs.map((j) => `  [${j.id}] ${j.company} — ${j.url}`).join("\n")}

For EACH job, in order (one at a time, no parallelism):
  1. mcp__plugin_playwright_playwright__browser_navigate to the URL
  2. mcp__plugin_playwright_playwright__browser_snapshot to get page content
  3. Extract: job description text, exact job title, form questions (if visible)
  4. Write to batch/pending/{id}-jd.txt:
     ---COMPANY---
     [company name]
     ---ROLE---
     [exact job title]
     ---JD---
     [full job description]
     ---FORM---
     [form questions, or "NO_FORM_DETECTED"]
  5. Move to next job

When all jobs processed, signal completion by writing batch/pending/conductor-done.txt`;
}

function buildSubagentPrompt(jobId, company, url) {
  return `When using the apply command, you must follow all instructions in apply.md exactly.

The TWO MOST IMPORTANT parts of apply.md are:
  1. CSV output (Company,Title,Career Ops,,,,Code)
  2. Resume recommendation with selective PDF reading

If you are unable to see the form or any essay questions but have generated a
resume recommendation, output the CSV anyway.

CACHED CONTEXT (use these directly, do NOT re-read from disk):
- cv.md is in your prompt cache
- All four resume PDFs are in your prompt cache:
  - C:\\Users\\daris\\Downloads\\DarisChenResumeAI.pdf
  - C:\\Users\\daris\\Downloads\\DarisChenResumeSWE.pdf
  - C:\\Users\\daris\\Downloads\\DarisChenResumeEE.pdf
  - C:\\Users\\daris\\Downloads\\DarisChenResumeWD.pdf

Read each PDF FULLY from cache before generating the recommendation. If keyword
scores are within 10 points of each other, you MUST analyze both top PDFs to
disambiguate. Only skip PDF reading if one resume leads by 10+ points.

Do NOT use Playwright or any browser tool. The job description is already
extracted at batch/pending/${jobId}-jd.txt.

═══════════════════════════════════════════════════════════════

You are a batch apply subagent for job ${jobId}. NO BROWSER ACCESS — work from text files.

Your input: batch/pending/${jobId}-jd.txt (already extracted by conductor)

WORKFLOW:
1. Read batch/pending/${jobId}-jd.txt
2. Parse: COMPANY, ROLE, JD, FORM
3. Score resume matches (AI/SWE/EE/WD):
   - Count keywords from JD for each type
   - If top 2 within 10 points, READ both PDFs FULLY from cache
4. Generate recommendation block (8 sections)
5. Generate CSV line: COMPANY,ROLE,Career Ops,,,,RESUME_CODE
6. Generate essay answers ONLY if FORM != "NO_FORM_DETECTED"
7. Write output to batch/pending/${jobId}-output.json:

{
  "job_id": "${jobId}",
  "company": "${company}",
  "role": "[exact job title from JD file]",
  "url": "${url}",
  "recommendation_block": "[full text with all 8 sections, ready for batch.txt]",
  "csv_line": "[Company,Title,Career Ops,,,,CODE]",
  "essay_answers": "[markdown of essay answers, or empty string if no form]",
  "resume_code": "[AI|SWE|EE|WD]"
}

8. Wait for judge feedback:
   - Check batch/pending/${jobId}-feedback.json every 3 seconds
   - If feedback exists: read it, fix issues, rewrite output, repeat
   - If batch/pending/${jobId}-output.json is DELETED: judge approved, you're done

CRITICAL:
- Read apply.md for tone, PDF reading rules, and CSV format
- Recommendation header: "📄 RESUME RECOMMENDATION — ${company} | [JOB TITLE]"
- CSV format: Company,Title,Career Ops,,,,CODE (no spaces after the structural commas)
- If Company or Title contains a comma, wrap THAT field in double quotes,
  e.g. Acme,"Engineer, Backend",Career Ops,,,,SWE — this keeps the CSV valid
  for Google Sheets and for the judge
- Resume code in CSV must match recommendation
- All 8 recommendation sections required`;
}

// The judge is the deterministic script batch/judge.mjs (run in the background
// after the conductor finishes). It replaces the former LLM judge agent so
// format validation is reproducible. See modes/batch-apply.md Phase 3.

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage:");
    console.log("  node batch-apply.mjs batch-apply-input.txt");
    console.log("  node batch-apply.mjs https://link1.com https://link2.com\n");
    process.exit(1);
  }

  const links = parseInput(args);

  if (links.length === 0) {
    console.log("❌ No valid links found.");
    process.exit(1);
  }

  if (links.length === 1) {
    console.log("⚠️  Single link detected. Use /career-ops apply instead.");
    console.log("Continuing with batch mode anyway...\n");
  }

  if (links.length >= 10) {
    console.warn("⚠️  10+ jobs may exceed 5-minute cache window.\n");
  }

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("Career-Ops Batch Apply (Conductor + Workers + Judge)");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  try {
    const cvContent = readCV();
    ensurePendingDir(); // Cleans stale files + creates fresh pending/

    console.log(`✓ Loaded CV (${cvContent.length} chars)`);
    console.log(`✓ Found ${links.length} job link(s)`);
    console.log(`✓ Created clean batch/pending/ directory\n`);

    const jobs = links.map((link, index) => ({
      id: String(index + 1).padStart(3, "0"),
      company: extractCompanyFromUrl(link),
      url: link,
    }));

    console.log("Architecture (4 phases):\n");
    console.log("  PHASE 1 — Conductor (sequential, ~30s per URL)");
    console.log("    Single agent uses Playwright one URL at a time");
    console.log("    Writes JDs to batch/pending/{id}-jd.txt");
    console.log("    NO PROMPT CACHING YET (would expire during this phase)\n");

    console.log("  PHASE 1.5 — Cache Prime (~1s)");
    console.log("    Tiny haiku call with cv.md + 4 PDFs (cache_control: ephemeral)");
    console.log("    Starts the 5-minute TTL clock RIGHT BEFORE workers need it");
    console.log("    Cost: ~$0.001 | Saves: ~$0.30 across all workers\n");

    console.log("  PHASE 2 — Subagent Workers (parallel, all run together)");
    console.log("    N haiku subagents, one per job");
    console.log("    All hit the warm cache (90% cheaper input tokens)");
    console.log("    Each reads its own jd.txt (text only, no browser)");
    console.log("    Each writes batch/pending/{id}-output.json");
    console.log("    Wait for judge feedback (poll every 3s)\n");

    console.log("  PHASE 3 — Judge (sequential, validates one at a time)");
    console.log("    Watches batch/pending/*-output.json");
    console.log("    Validates → appends to batch.txt → deletes output.json");
    console.log("    Or sends feedback.json for retry");
    console.log("    Exits when conductor done + all outputs processed\n");

    console.log("Cleanup Guarantees:");
    console.log("  ✓ ensurePendingDir() wipes stale files at startup");
    console.log("  ✓ Judge deletes each output.json after approval");
    console.log("  ✓ process.on('exit') sweeps pending/ on normal exit");
    console.log("  ✓ SIGINT/SIGTERM handlers sweep on Ctrl+C / kill");
    console.log("  ✓ uncaughtException handler sweeps on crash\n");

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("AGENT SPAWN PLAN");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    console.log("Step 1: Spawn conductor (foreground, blocks until done)\n");
    console.log("Agent({");
    console.log('  description: "Conductor: extract JDs sequentially",');
    console.log('  subagent_type: "general-purpose",');
    console.log('  prompt: `[conductor plan with all URLs]`,');
    console.log("  run_in_background: false  // Wait for completion");
    console.log("});\n");

    console.log("Step 2: Once conductor done, start the judge (deterministic, background)\n");
    console.log("Run the judge script in the background (NOT an LLM agent):");
    console.log("  Bash({ command: \"node batch/judge.mjs\", run_in_background: true })\n");
    console.log("  The script polls batch/pending/*-output.json, validates format,");
    console.log("  appends approved blocks to output/batch.txt, and writes feedback.json");
    console.log("  for any rejects. It exits when conductor-done.txt exists and no");
    console.log("  outputs or feedbacks remain.\n");

    console.log("Step 3: Spawn subagent workers (background, all parallel)\n");
    jobs.forEach((j) => {
      console.log(`// [${j.id}] ${j.company}`);
      console.log("Agent({");
      console.log(`  description: "Worker: ${j.company} — [${j.id}]",`);
      console.log('  subagent_type: "haiku",');
      console.log('  prompt: `[subagent prompt for this job]`,');
      console.log("  run_in_background: true");
      console.log("});\n");
    });

    console.log("Expected Console Output:\n");
    console.log("  PHASE 1: Conductor extracting JDs...");
    jobs.forEach((j) => {
      console.log(`    [${j.id}] ${j.company} — JD extracted ✓`);
    });
    console.log("\n  PHASE 2 + 3: Workers + Judge running...");
    jobs.forEach((j) => {
      console.log(`    [${j.id}] ${j.company} — APPROVED → batch.txt`);
    });
    console.log("\n  ✓ All done. Pending/ swept clean.\n");

    console.log("Output Files:");
    console.log("  output/batch.txt    ← Recommendations + CSV lines");
    console.log("  output/essay.txt    ← Essay answers (if forms detected)");
    console.log("  batch/pending/      ← DELETED at end (no bloat)\n");

    // Save the spawn plan to a file the user can reference
    const planPath = path.join(__dirname, "pending-plan.json");
    fs.writeFileSync(
      planPath,
      JSON.stringify(
        {
          jobs,
          conductor_prompt: buildConductorPlan(jobs),
          subagent_prompts: jobs.map((j) => ({
            id: j.id,
            company: j.company,
            prompt: buildSubagentPrompt(j.id, j.company, j.url),
          })),
          judge_command: "node batch/judge.mjs",
        },
        null,
        2
      )
    );
    console.log(`📋 Full prompts saved to: batch/pending-plan.json`);
    console.log("   (Use this for spawning agents in Claude Code)\n");
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    cleanupPending();
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  cleanupPending();
  process.exit(1);
});
