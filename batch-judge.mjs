#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const PENDING_DIR = 'batch/pending';
const OUTPUT_DIR = 'output';
const EXPECTED_IDS = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010'];

// Ensure output dir exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function validateRecommendationBlock(block) {
  if (!block) return { valid: false, issues: ['No recommendation_block provided'] };

  const lines = block.trim().split('\n');
  const issues = [];

  // Check title line (most important - must contain the required format)
  const titleLine = lines.find(l => l.includes('📄 RESUME RECOMMENDATION'));
  if (!titleLine) {
    issues.push('Missing title line with 📄 RESUME RECOMMENDATION');
  }

  // Check keyword scores line
  const keywordLine = lines.find(l => l.includes('Keyword Scores'));
  if (!keywordLine) {
    issues.push('Missing Keyword Scores line');
  }

  // Check Recommended line
  const recommendedLine = lines.find(l => l.includes('Recommended:'));
  if (!recommendedLine) {
    issues.push('Missing Recommended line');
  } else if (!['AI', 'SWE', 'EE', 'WD'].some(code => recommendedLine.includes(code))) {
    issues.push('Recommended resume code not one of: AI, SWE, EE, WD');
  }

  // Check Confidence line
  const confidenceLine = lines.find(l => l.includes('Confidence:'));
  if (!confidenceLine) {
    issues.push('Missing Confidence line');
  } else if (!/\d+\/100/.test(confidenceLine)) {
    issues.push('Confidence not in XX/100 format');
  }

  // Check Top 3 Signals section - must have at least 3 numbered/bulleted items
  const signalsIdx = lines.findIndex(l => l.includes('Top 3 Signals'));
  if (signalsIdx === -1) {
    issues.push('Missing Top 3 Signals section');
  } else {
    // Look for signal items (numbered like "1.", "2.", "3." or bulleted)
    const signalsContent = lines.slice(signalsIdx + 1).join('\n');
    const signalMatches = signalsContent.match(/(\d+\.|•|-)\s+/g) || [];
    if (signalMatches.length < 3) {
      issues.push('Top 3 Signals should have at least 3 items');
    }
  }

  // Check Why This Resume section
  const whyIdx = lines.findIndex(l => l.includes('Why This Resume'));
  if (whyIdx === -1) {
    issues.push('Missing Why This Resume section');
  }

  return {
    valid: issues.length === 0,
    issues
  };
}

function validateCSVLine(csvLine) {
  if (!csvLine) return { valid: false, issues: ['No csv_line provided'] };

  const issues = [];

  // Check format: Company,Title,Career Ops,,,,CODE
  const parts = csvLine.split(',');
  if (parts.length !== 7) {
    issues.push(`CSV line should have 7 comma-separated parts, got ${parts.length}`);
  }

  // Check for spaces after commas
  if (/ ,|, /.test(csvLine)) {
    issues.push('CSV line has spaces after commas');
  }

  // Check resume code
  const lastPart = parts[6]?.trim();
  if (!['AI', 'SWE', 'EE', 'WD'].includes(lastPart)) {
    issues.push(`Resume code '${lastPart}' not one of: AI, SWE, EE, WD`);
  }

  return {
    valid: issues.length === 0,
    issues
  };
}

function processOutputFile(filePath) {
  const id = path.basename(filePath).replace('-output.json', '');

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let data;
    try {
      data = JSON.parse(content);
    } catch (parseErr) {
      // JSON parse error - send feedback
      const feedbackPath = path.join(PENDING_DIR, `${id}-feedback.json`);
      fs.writeFileSync(feedbackPath, JSON.stringify({
        id,
        timestamp: new Date().toISOString(),
        status: 'rejected',
        issues: [`JSON parse error: ${parseErr.message}`]
      }, null, 2));

      console.log(`[${id}] REJECTED → feedback.json (JSON parse error)`);
      return { status: 'rejected', id, issueCount: 1 };
    }

    // Validate recommendation_block
    const recValidation = validateRecommendationBlock(data.recommendation_block);

    // Validate csv_line
    const csvValidation = validateCSVLine(data.csv_line);

    if (recValidation.valid && csvValidation.valid) {
      // APPROVED: Append to output files
      const batchPath = path.join(OUTPUT_DIR, 'batch.txt');
      const essayPath = path.join(OUTPUT_DIR, 'essay.txt');

      // Append recommendation and CSV to batch.txt
      const batchContent = data.recommendation_block + '\n' + data.csv_line + '\n' + '─'.repeat(80) + '\n';
      fs.appendFileSync(batchPath, batchContent);

      // Append essay answers if non-empty
      if (data.essay_answers && Object.keys(data.essay_answers).length > 0) {
        const essayContent = `[${id}] Essay Answers:\n${JSON.stringify(data.essay_answers, null, 2)}\n\n`;
        fs.appendFileSync(essayPath, essayContent);
      }

      // Delete output.json
      fs.unlinkSync(filePath);

      console.log(`[${id}] APPROVED → batch.txt`);
      return { status: 'approved', id };
    } else {
      // REJECTED: Write feedback.json
      const issues = [...recValidation.issues, ...csvValidation.issues];
      const feedbackPath = path.join(PENDING_DIR, `${id}-feedback.json`);
      fs.writeFileSync(feedbackPath, JSON.stringify({
        id,
        timestamp: new Date().toISOString(),
        status: 'rejected',
        issues
      }, null, 2));

      console.log(`[${id}] REJECTED → feedback.json (${issues.length} issues)`);
      return { status: 'rejected', id, issueCount: issues.length };
    }
  } catch (err) {
    console.error(`[${id}] ERROR: ${err.message}`);
    return { status: 'error', id, error: err.message };
  }
}

async function judge() {
  console.log('Batch Judge initialized. Waiting for output files...\n');

  let processed = [];
  let rejectedCount = 0;
  let idleCount = 0;

  while (true) {
    // Check if conductor is done
    const conductorDone = fs.existsSync(path.join(PENDING_DIR, 'conductor-done.txt'));

    // Find all output.json files
    const outputFiles = fs.readdirSync(PENDING_DIR)
      .filter(f => f.endsWith('-output.json'))
      .sort();

    // Process each file
    if (outputFiles.length > 0) {
      idleCount = 0; // Reset idle counter when work is found
      for (const file of outputFiles) {
        const id = file.replace('-output.json', '');
        if (processed.includes(id)) continue;

        const result = processOutputFile(path.join(PENDING_DIR, file));
        processed.push(id);
        if (result.status === 'rejected') rejectedCount++;
      }
    } else if (conductorDone) {
      idleCount++;
    }

    // Check exit conditions: conductor done + all expected IDs processed + no pending feedback
    if (conductorDone) {
      const pendingFeedback = fs.readdirSync(PENDING_DIR)
        .filter(f => f.endsWith('-feedback.json'));

      const remainingOutput = fs.readdirSync(PENDING_DIR)
        .filter(f => f.endsWith('-output.json'));

      // Exit only if all expected IDs are processed and no output/feedback pending
      const allExpectedProcessed = EXPECTED_IDS.every(id => processed.includes(id));

      if (allExpectedProcessed && remainingOutput.length === 0 && pendingFeedback.length === 0) {
        console.log('\n✓ All conditions met:');
        console.log(`  - conductor-done.txt exists`);
        console.log(`  - All ${processed.length} output.json files processed`);
        console.log(`  - ${rejectedCount} rejections sent feedback`);
        console.log(`  - No pending feedback files`);
        process.exit(0);
      } else if (idleCount > 40) {
        // After 2 minutes of idle (40 * 3s), warn and exit
        console.log('\n⚠ Timeout: conductor done but not all files processed');
        console.log(`  Processed: ${processed.join(', ')}`);
        console.log(`  Remaining: ${EXPECTED_IDS.filter(id => !processed.includes(id)).join(', ')}`);
        process.exit(1);
      }
    }

    // Sleep before next check
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}

judge().catch(err => {
  console.error('Judge error:', err);
  process.exit(1);
});
