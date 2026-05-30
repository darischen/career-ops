#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const PENDING_DIR = './batch/pending';
const OUTPUT_DIR = './output';
const JOB_IDS = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015'];

function validateRecommendationBlock(block) {
  if (!block) return { valid: false, issues: ['Missing recommendation_block'] };
  if (!block.trim()) return { valid: false, issues: ['Empty recommendation_block'] };

  const issues = [];

  // Check for either box-drawing format OR markdown format
  const hasBoxDrawing = block.includes('━');
  const hasMarkdown = block.includes('##') || block.includes('**');

  if (!hasBoxDrawing && !hasMarkdown) {
    issues.push('Missing proper formatting (no box-drawing or markdown)');
    return { valid: false, issues };
  }

  // If box-drawing format, check structure
  if (hasBoxDrawing) {
    // Check for header line
    if (!block.split('\n')[0].includes('━')) {
      issues.push('Missing box-drawing header');
    }

    // Check for recommended resume mention
    if (!block.includes('Recommended:')) {
      issues.push('Missing "Recommended:" line');
    } else {
      const recLine = block.split('\n').find(l => l.includes('Recommended:'));
      const validResumes = ['AI', 'SWE', 'EE', 'WD'];
      const hasValidResume = validResumes.some(r => recLine.includes(r));
      if (!hasValidResume) {
        issues.push(`Recommended resume must be one of: ${validResumes.join(', ')}`);
      }
    }

    // Check for confidence
    if (!block.includes('Confidence:')) {
      issues.push('Missing "Confidence:" line');
    }

    // Check for top signals
    if (!block.includes('Top 3 Signals')) {
      issues.push('Missing "Top 3 Signals" section');
    }

    // Check for footer
    const lines = block.split('\n');
    if (!lines[lines.length - 1].includes('━') && !lines[lines.length - 2].includes('━')) {
      issues.push('Missing box-drawing footer');
    }
  }

  // If markdown format, check for key sections
  if (hasMarkdown) {
    // Must have Selected/Recommended/Resume indication
    if (!block.includes('Selected:') && !block.includes('Recommended:') && !block.includes('Match:') && !block.includes('Resume')) {
      issues.push('Missing resume selection indication');
    }

    // Must have valid resume code somewhere (check multiple patterns)
    const validResumes = ['AI', 'SWE', 'EE', 'WD'];
    // Check case-insensitively to catch more variations
    const blockUpper = block.toUpperCase();
    const hasValidResume = validResumes.some(r => {
      const rUpper = r.toUpperCase();
      return (
        blockUpper.includes(rUpper + ' RESUME') ||
        blockUpper.includes('RESUME: ' + rUpper) ||
        blockUpper.includes('RECOMMENDATION: ' + rUpper) ||
        blockUpper.includes('SELECTED: ' + rUpper) ||
        blockUpper.includes('MATCH: ' + rUpper) ||
        blockUpper.includes(rUpper) // Just check if it appears anywhere
      );
    });
    if (!hasValidResume) {
      issues.push(`Recommendation must mention a valid resume: ${validResumes.join(', ')}`);
    }
  }

  return { valid: issues.length === 0, issues };
}

function validateCSVLine(csvLine) {
  if (!csvLine) return { valid: false, issues: ['Missing csv_line'] };
  if (!csvLine.trim()) return { valid: false, issues: ['Empty csv_line'] };

  const issues = [];

  // Should be: Company,Title,Career Ops,,,,CODE
  const parts = csvLine.split(',');

  if (parts.length !== 7) {
    issues.push(`CSV should have 7 comma-separated fields, found ${parts.length}`);
  }

  // Check for spaces after commas (should not have any)
  if (csvLine.match(/,\s/)) {
    issues.push('CSV should not have spaces after commas');
  }

  // Check resume code (last field)
  const resumeCode = parts[6]?.trim();
  const validCodes = ['AI', 'SWE', 'EE', 'WD'];
  if (!validCodes.includes(resumeCode)) {
    issues.push(`Resume code should be one of ${validCodes.join(', ')}, found: ${resumeCode}`);
  }

  return { valid: issues.length === 0, issues };
}

function tryParseJSON(content) {
  try {
    return JSON.parse(content);
  } catch (e) {
    // Try to repair common JSON issues
    let repaired = content;

    // Fix unescaped newlines in strings
    repaired = repaired.replace(/"\n(?=[^}])/g, '\\n');

    try {
      return JSON.parse(repaired);
    } catch (e2) {
      return null;
    }
  }
}

function processOutput(jobId) {
  const outputPath = path.join(PENDING_DIR, `${jobId}-output.json`);

  if (!fs.existsSync(outputPath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(outputPath, 'utf-8');
    const data = tryParseJSON(content);

    if (!data) {
      // REJECTED - invalid JSON
      const feedback = {
        job_id: jobId,
        timestamp: new Date().toISOString(),
        recommendation_issues: [],
        csv_issues: ['Invalid JSON format - unable to parse']
      };
      const feedbackPath = path.join(PENDING_DIR, `${jobId}-feedback.json`);
      fs.writeFileSync(feedbackPath, JSON.stringify(feedback, null, 2));
      console.log(`[${jobId}] REJECTED (invalid JSON) → feedback sent`);
      return false;
    }

    // Validate recommendation_block
    const recValidation = validateRecommendationBlock(data.recommendation_block);

    // Validate csv_line
    const csvValidation = validateCSVLine(data.csv_line);

    if (recValidation.valid && csvValidation.valid) {
      // APPROVED
      appendToOutput(data.recommendation_block, data.csv_line);
      if (data.essay_answers && data.essay_answers.trim()) {
        appendToEssay(data.essay_answers);
      }
      fs.unlinkSync(outputPath);
      console.log(`[${jobId}] APPROVED → batch.txt`);
      return true;
    } else {
      // REJECTED
      const feedback = {
        job_id: jobId,
        timestamp: new Date().toISOString(),
        recommendation_issues: recValidation.issues,
        csv_issues: csvValidation.issues
      };
      const feedbackPath = path.join(PENDING_DIR, `${jobId}-feedback.json`);
      fs.writeFileSync(feedbackPath, JSON.stringify(feedback, null, 2));
      console.log(`[${jobId}] REJECTED → feedback sent`);
      return false;
    }
  } catch (err) {
    console.error(`[${jobId}] ERROR reading output:`, err.message);
    return null;
  }
}

function appendToOutput(recommendation, csvLine) {
  const batchPath = path.join(OUTPUT_DIR, 'batch.txt');
  const content = `${recommendation}\n\n${csvLine}\n\n────────────────────────────────────────────────────────────────────────────────\n\n`;
  fs.appendFileSync(batchPath, content);
}

function appendToEssay(essays) {
  const essayPath = path.join(OUTPUT_DIR, 'essay.txt');
  fs.appendFileSync(essayPath, essays + '\n\n');
}

async function main() {
  console.log('Judge validation system v3 started...');
  console.log(`Monitoring IDs: ${JOB_IDS.join(', ')}`);

  let processedCount = 0;
  let rejectedCount = 0;
  let checkCount = 0;

  while (true) {
    checkCount++;

    // Check for conductor-done.txt
    const doneFile = path.join(PENDING_DIR, 'conductor-done.txt');
    const conductorDone = fs.existsSync(doneFile);

    // Process each job ID
    for (const jobId of JOB_IDS) {
      const result = processOutput(jobId);
      if (result === true) {
        processedCount++;
      } else if (result === false) {
        rejectedCount++;
      }
    }

    // Check exit condition
    const outputFiles = JOB_IDS.filter(id => fs.existsSync(path.join(PENDING_DIR, `${id}-output.json`)));
    const feedbackFiles = JOB_IDS.filter(id => fs.existsSync(path.join(PENDING_DIR, `${id}-feedback.json`)));

    if (checkCount % 20 === 0) {
      console.log(`[Check #${checkCount}] Processed: ${processedCount}, Rejected: ${rejectedCount}, Pending output: ${outputFiles.length}, Feedback: ${feedbackFiles.length}`);
    }

    if (conductorDone && outputFiles.length === 0 && feedbackFiles.length === 0) {
      console.log(`\nValidation complete!`);
      console.log(`  Total Approved: ${processedCount}`);
      console.log(`  Total Rejected: ${rejectedCount}`);
      break;
    }

    // Sleep 3 seconds before next check
    await new Promise(r => setTimeout(r, 3000));
  }
}

main().catch(console.error);
