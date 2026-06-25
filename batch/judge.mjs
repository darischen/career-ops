#!/usr/bin/env node

/**
 * Judge for Batch Apply
 * Validates worker outputs sequentially and consolidates to batch.txt
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);
const pendingDir = path.join(__dirname, "pending");
const outputDir = path.join(projectRoot, "output");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Ensure batch.txt and essay.txt exist
const batchTxtPath = path.join(outputDir, "batch.txt");
const essayTxtPath = path.join(outputDir, "essay.txt");
const failuresTxtPath = path.join(outputDir, "batch-failures.txt");

// Safety bounds so a dead/non-polling worker can't hang the batch forever.
const MAX_ATTEMPTS = 3; // give up on a job after this many rejects
const TIMEOUT_MS = 5 * 60 * 1000; // hard wall-clock cap on the judge loop

if (!fs.existsSync(batchTxtPath)) {
  fs.writeFileSync(batchTxtPath, "");
}
if (!fs.existsSync(essayTxtPath)) {
  fs.writeFileSync(essayTxtPath, "");
}

// ═══════════════════════════════════════════════════════════════
// VALIDATION
// ═══════════════════════════════════════════════════════════════

function validateRecommendationBlock(block) {
  const issues = [];

  // Check for header separator
  if (!block.includes("━━━")) {
    issues.push("Missing header separator (━━━)");
  }

  // Check for title
  if (!block.includes("📄 RESUME RECOMMENDATION")) {
    issues.push("Missing or incorrect title format");
  }

  // Check for company | role pattern.
  // Company may be multi-word ("Bank of America", "Career Ops"), so match
  // any non-pipe text between the em dash and the "|" role separator.
  if (!block.match(/RECOMMENDATION\s*—\s*[^|\n]+\|\s*\S/)) {
    issues.push("Title must match format: 📄 RESUME RECOMMENDATION — Company | Role");
  }

  // Check for keyword scores line
  if (!block.match(/Keyword Scores/i)) {
    issues.push("Missing 'Keyword Scores' line");
  }

  // Check for recommended resume line
  if (!block.match(/Recommended\s*:/i) && !block.match(/Resume:\s*(AI|SWE|EE|WD)/i)) {
    issues.push("Missing 'Recommended: [AI|SWE|EE|WD]' line");
  }

  // Check for confidence score
  if (!block.match(/Confidence\s*:\s*\d+\/100/i)) {
    issues.push("Missing 'Confidence: XX/100' line");
  }

  // Check for top signals section
  if (!block.match(/Top 3 Signals/i)) {
    issues.push("Missing 'Top 3 Signals' section");
  }

  // Check for why this resume section
  if (!block.match(/Why This Resume/i)) {
    issues.push("Missing 'Why This Resume' explanation");
  }

  // Check for footer separator
  const lines = block.split("\n");
  if (!lines[lines.length - 1].includes("━━━") && !lines[lines.length - 2].includes("━━━")) {
    issues.push("Missing footer separator (━━━)");
  }

  return issues;
}

function validateCsvLine(csvLine, recommendedResume) {
  const issues = [];
  const line = csvLine.trim();

  // The CSV is Company,Title,Career Ops,,,,CODE.
  // Company and Title may legitimately contain commas (e.g. "Engineer, Backend"),
  // in which case the producer wraps them in double quotes. Counting commas or
  // banning ", " would falsely reject those, so validate the fixed structural
  // suffix instead: ,Career Ops,,,,CODE
  const suffixMatch = line.match(/,Career Ops,,,,(AI|SWE|EE|WD)$/);
  if (!suffixMatch) {
    issues.push('CSV must end with ",Career Ops,,,,CODE" where CODE is AI|SWE|EE|WD');
    return issues;
  }

  const csvCode = suffixMatch[1];

  // There must be a Company and Title before the suffix
  const prefix = line.slice(0, suffixMatch.index);
  if (!prefix.includes(",")) {
    issues.push("CSV missing Company,Title before ',Career Ops'");
  }

  // Resume code in CSV must match the recommendation block
  const codeMatch = recommendedResume.match(/Recommended\s*:\s*(AI|SWE|EE|WD)|Resume:\s*(AI|SWE|EE|WD)/i);
  const blockCode = codeMatch ? (codeMatch[1] || codeMatch[2]) : null;

  if (blockCode && csvCode !== blockCode) {
    issues.push(`Resume code mismatch: CSV has '${csvCode}', recommendation block has '${blockCode}'`);
  }

  return issues;
}

function validateOutput(jobId, data) {
  const issues = [];

  // Check required fields
  if (!data.job_id) issues.push("Missing job_id");
  if (!data.company) issues.push("Missing company");
  if (!data.role) issues.push("Missing role");
  if (!data.recommendation_block) issues.push("Missing recommendation_block");
  if (!data.csv_line) issues.push("Missing csv_line");
  if (data.resume_code === undefined) issues.push("Missing resume_code");

  if (issues.length > 0) {
    return issues;
  }

  // Validate recommendation block
  const blockIssues = validateRecommendationBlock(data.recommendation_block);
  issues.push(...blockIssues);

  // Validate CSV line
  const csvIssues = validateCsvLine(data.csv_line, data.recommendation_block);
  issues.push(...csvIssues);

  return issues;
}

// ═══════════════════════════════════════════════════════════════
// FILE OPERATIONS
// ═══════════════════════════════════════════════════════════════

const BATCH_SEPARATOR = "─".repeat(80);

function appendToBatch(recommendation_block, csv_line) {
  let content = fs.readFileSync(batchTxtPath, "utf-8");
  content += recommendation_block + "\n\n" + csv_line + "\n" + BATCH_SEPARATOR + "\n";
  fs.writeFileSync(batchTxtPath, content);
}

function appendToEssay(company, role, essay_answers) {
  if (!essay_answers || essay_answers.trim() === "") {
    return; // Skip if empty
  }
  let content = fs.readFileSync(essayTxtPath, "utf-8");
  content += `## ${company} — ${role}\n\n${essay_answers}\n\n`;
  fs.writeFileSync(essayTxtPath, content);
}

function writeFeedback(jobId, issues) {
  const feedbackPath = path.join(pendingDir, `${jobId}-feedback.json`);
  fs.writeFileSync(
    feedbackPath,
    JSON.stringify(
      {
        job_id: jobId,
        timestamp: new Date().toISOString(),
        issues: issues,
        message: `Please fix the following issues and rewrite ${jobId}-output.json`,
      },
      null,
      2
    )
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN JUDGE LOOP
// ═══════════════════════════════════════════════════════════════

async function runJudge() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("Judge: Batch Apply Validator");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  // Job count is discovered dynamically from *-output.json files in pending/.
  // The loop exits when the conductor signals done and no outputs/feedbacks
  // remain, so there is no fixed cap on batch size.
  let processedCount = 0;
  let approvedCount = 0;
  let rejectedCount = 0;
  let failedCount = 0;
  let timedOut = false;

  const startedAt = Date.now();
  const attempts = new Map(); // jobId -> reject count

  // Reject a job. After MAX_ATTEMPTS rejects, give up: log the failure and
  // remove the job's files so the loop's exit condition can be reached instead
  // of spinning forever on output a worker is never going to fix.
  function handleReject(jobId, issues, data) {
    const n = (attempts.get(jobId) || 0) + 1;
    attempts.set(jobId, n);

    if (n >= MAX_ATTEMPTS) {
      const who = data ? `${data.company || "?"} — ${data.role || "?"}` : jobId;
      fs.appendFileSync(
        failuresTxtPath,
        `[${jobId}] ${who} — FAILED after ${n} attempts: ${issues.join("; ")}\n`,
      );
      const outPath = path.join(pendingDir, `${jobId}-output.json`);
      const fbPath = path.join(pendingDir, `${jobId}-feedback.json`);
      if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
      if (fs.existsSync(fbPath)) fs.unlinkSync(fbPath);
      console.log(`[${jobId}] ✗ FAILED (gave up after ${n} attempts) → batch-failures.txt`);
      failedCount++;
    } else {
      writeFeedback(jobId, issues);
      console.log(`[${jobId}] ✗ REJECTED (attempt ${n}/${MAX_ATTEMPTS}) → feedback sent`);
      console.log(`     Issues: ${issues.join("; ")}`);
      rejectedCount++;
    }
  }

  // Main loop
  while (true) {
    // Get all output.json files
    const files = fs.readdirSync(pendingDir);
    const outputFiles = files.filter((f) => f.endsWith("-output.json")).sort();

    for (const file of outputFiles) {
      const jobId = file.replace("-output.json", "");
      const outputPath = path.join(pendingDir, file);

      try {
        const content = fs.readFileSync(outputPath, "utf-8");
        const data = JSON.parse(content);

        // Validate
        const issues = validateOutput(jobId, data);

        if (issues.length === 0) {
          // APPROVE
          appendToBatch(data.recommendation_block, data.csv_line);
          if (data.essay_answers && data.essay_answers.trim()) {
            appendToEssay(data.company, data.role, data.essay_answers);
          }
          fs.unlinkSync(outputPath);
          // Clear any stale feedback from a prior rejection so the exit
          // condition (no remaining feedback files) can be reached.
          const feedbackPath = path.join(pendingDir, `${jobId}-feedback.json`);
          if (fs.existsSync(feedbackPath)) fs.unlinkSync(feedbackPath);
          console.log(`[${jobId}] ✓ APPROVED → batch.txt`);
          approvedCount++;
        } else {
          // REJECT (with attempt cap)
          handleReject(jobId, issues, data);
        }
        processedCount++;
      } catch (err) {
        // Parse errors also count against the attempt cap so a permanently
        // malformed file can't spin the loop forever.
        handleReject(jobId, [`Parse error: ${err.message}`], null);
        console.log(`[${jobId}] ✗ ERROR: ${err.message}`);
      }
    }

    // Check exit condition
    const conductorDone = fs.existsSync(path.join(pendingDir, "conductor-done.txt"));
    const remainingOutputs = fs.readdirSync(pendingDir).filter((f) => f.endsWith("-output.json")).length;
    const remainingFeedbacks = fs.readdirSync(pendingDir).filter((f) => f.endsWith("-feedback.json")).length;

    if (conductorDone && remainingOutputs === 0 && remainingFeedbacks === 0) {
      console.log("\n✓ Judge complete.");
      console.log(`  Approved: ${approvedCount}`);
      console.log(`  Rejected: ${rejectedCount}`);
      console.log(`  Failed (gave up): ${failedCount}`);
      console.log(`  Total processed: ${processedCount}\n`);
      break;
    }

    // Hard timeout: a worker that never resubmits can't hang the run forever.
    if (Date.now() - startedAt > TIMEOUT_MS) {
      timedOut = true;
      const stuck = fs
        .readdirSync(pendingDir)
        .filter((f) => f.endsWith("-output.json"));
      console.error(
        `\n⏱  Judge timed out after ${TIMEOUT_MS / 60000} min. Unresolved outputs: ${stuck.join(", ") || "none"}`,
      );
      console.error(`  Approved: ${approvedCount} | Failed: ${failedCount}`);
      break;
    }

    // Wait before next poll
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  if (timedOut) process.exitCode = 2;
}

// Run
runJudge().catch((err) => {
  console.error("❌ Judge error:", err);
  process.exit(1);
});
