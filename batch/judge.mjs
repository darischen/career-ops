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

  // Check for company | role pattern
  if (!block.match(/RECOMMENDATION\s*—\s*\w+\s*\|\s*/)) {
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

  // Check format: Company,Title,Career Ops,,,,CODE
  const parts = csvLine.split(",");
  if (parts.length !== 7) {
    issues.push(`CSV line has ${parts.length} columns, expected 7`);
    return issues;
  }

  // Check for spaces after commas
  if (csvLine.includes(", ")) {
    issues.push("CSV line has spaces after commas (should be compact)");
  }

  // Check that last column (resume code) matches recommendation
  const csvCode = parts[6].trim();
  if (!["AI", "SWE", "EE", "WD"].includes(csvCode)) {
    issues.push(`CSV code '${csvCode}' must be AI|SWE|EE|WD`);
  }

  // Extract recommended code from recommendation block
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

function appendToBatch(recommendation_block, csv_line) {
  let content = fs.readFileSync(batchTxtPath, "utf-8");
  content += recommendation_block + "\n\n" + csv_line + "\n────\n";
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

  const expectedJobIds = [
    "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
    "011", "012", "013", "014", "015"
  ];

  let processedCount = 0;
  let approvedCount = 0;
  let rejectedCount = 0;

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
          console.log(`[${jobId}] ✓ APPROVED → batch.txt`);
          approvedCount++;
        } else {
          // REJECT
          writeFeedback(jobId, issues);
          console.log(`[${jobId}] ✗ REJECTED → feedback sent`);
          console.log(`     Issues: ${issues.join("; ")}`);
          rejectedCount++;
        }
        processedCount++;
      } catch (err) {
        // Write feedback for parse error
        writeFeedback(jobId, [`Parse error: ${err.message}`]);
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
      console.log(`  Total processed: ${processedCount}\n`);
      break;
    }

    // Wait before next poll
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

// Run
runJudge().catch((err) => {
  console.error("❌ Judge error:", err);
  process.exit(1);
});
