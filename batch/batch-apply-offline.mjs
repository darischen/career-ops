#!/usr/bin/env node

/**
 * Batch apply processor with prompt caching
 *
 * Uses prompt caching to cache the user's CV as a stable prefix.
 * Each job application reuses the cached CV (90% cheaper tokens).
 * Cache stays warm for 5 minutes, so rapid-fire applications benefit heavily.
 *
 * Usage:
 *   node batch-apply.mjs [batch_input.tsv]
 *
 * Expected input format (TSV):
 *   id  company  role  jd_file  form_file
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

const client = new Anthropic();
const today = new Date().toISOString().split("T")[0];

// Read user's CV once (stable content for caching)
function readCV() {
  const cvPath = path.join(projectRoot, "cv.md");
  if (!fs.existsSync(cvPath)) {
    throw new Error(`CV not found at ${cvPath}`);
  }
  return fs.readFileSync(cvPath, "utf-8");
}

// Read profile for context
function readProfile() {
  const profilePath = path.join(projectRoot, "config", "profile.yml");
  if (!fs.existsSync(profilePath)) {
    return {};
  }
  return fs.readFileSync(profilePath, "utf-8");
}

// Read job description
function readJD(jdFile) {
  if (!fs.existsSync(jdFile)) {
    throw new Error(`JD file not found: ${jdFile}`);
  }
  return fs.readFileSync(jdFile, "utf-8");
}

// Read application form (essay questions, etc.)
function readForm(formFile) {
  if (!formFile || !fs.existsSync(formFile)) {
    return null;
  }
  return fs.readFileSync(formFile, "utf-8");
}

// Generate application materials with caching
async function generateApplication(jobData, cvContent, profileContent) {
  const { id, company, role, jd_file, form_file } = jobData;

  console.log(`\n[${id}] Generating application for ${company} — ${role}...`);

  try {
    const jdContent = readJD(jd_file);
    const formContent = readForm(form_file);

    // Build the system prompt with CV as cached prefix
    // The cache_control parameter tells Claude to cache this block
    const systemPrompt = [
      {
        type: "text",
        text: `You are an expert application strategist. Your role is to generate personalized, compelling application materials for the user based on their CV and the job description.

RULES:
- Match the CV exactly to the job requirements
- Generate native, direct English: short sentences, action verbs, no fluff
- Tailor every statement to the specific company and role
- Never invent experience or skills not in the CV
- Be specific and quantified where possible`,
      },
      {
        type: "text",
        text: `# USER'S CV

${cvContent}

# USER'S PROFILE

${profileContent}`,
        cache_control: { type: "ephemeral" },
      },
    ];

    // Build the user message with volatile content (not cached)
    let userMessage = `# Job Application Task

**Company:** ${company}
**Role:** ${role}

## Job Description
${jdContent}`;

    if (formContent) {
      userMessage += `

## Application Form Questions
${formContent}`;
    }

    userMessage += `

## Your Task

Generate application materials:

1. **Cover Letter** (3-4 paragraphs, 150-200 words)
   - Opening: Why this company/role
   - Body: Top 3 CV matches + how you'd add value
   - Closing: Next steps

2. **Essay Answers** (if form has questions)
   - One answer per question, 100-150 words each
   - Use specific CV examples
   - Match the tone of the form

3. **LinkedIn Summary Update** (3-4 bullet points)
   - Tailored to this role's archetype
   - Use job-specific language
   - Include 1-2 metrics from your CV

4. **Key Talking Points** (5 bullet points)
   - What to emphasize in interviews
   - How your background matches their needs
   - Potential questions they'll ask + answers

Output as markdown with clear sections.`;

    // Make the request with caching enabled
    // Cache hits come 90% cheaper than regular tokens
    const response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 2048,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    // Extract usage info to show caching benefit
    const usage = response.usage;
    const cacheCreationTokens = usage.cache_creation_input_tokens || 0;
    const cacheReadTokens = usage.cache_read_input_tokens || 0;
    const regularInputTokens = usage.input_tokens || 0;

    // Calculate actual cost
    const regularCost = regularInputTokens * 0.005 / 1000; // $5 per 1M input tokens for Opus
    const cacheCost = cacheReadTokens * 0.0005 / 1000; // $0.50 per 1M cached input tokens (90% cheaper)
    const outputCost = usage.output_tokens * 0.025 / 1000; // $25 per 1M output tokens for Opus

    console.log(`   ✓ Generated application materials`);
    console.log(`   Cache stats:`);
    if (cacheCreationTokens > 0) {
      console.log(`     - Created cache: ${cacheCreationTokens} tokens (CV + profile)`);
    }
    if (cacheReadTokens > 0) {
      console.log(`     - Hit cache: ${cacheReadTokens} tokens (90% savings: $${(regularInputTokens * 0.005 - cacheCost * 1000).toFixed(4)})`);
    } else {
      console.log(`     - Regular input: ${regularInputTokens} tokens`);
    }
    console.log(`     - Output: ${usage.output_tokens} tokens`);

    // Save application materials to output
    const outputDir = path.join(projectRoot, "output", `application-${id}-${company.toLowerCase()}`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const materialsFile = path.join(outputDir, `application-${today}.md`);
    const header = `# Application Materials

**Company:** ${company}
**Role:** ${role}
**Date:** ${today}
**Cost Estimate:** Regular $${(regularCost + outputCost).toFixed(2)} | With Cache $${(cacheCost + outputCost).toFixed(2)}

---

`;

    fs.writeFileSync(materialsFile, header + response.content[0].text);

    return {
      id,
      company,
      role,
      status: "generated",
      materials: materialsFile,
      tokens: {
        cache_created: cacheCreationTokens,
        cache_read: cacheReadTokens,
        regular_input: regularInputTokens,
        output: usage.output_tokens,
      },
      cost: {
        regular: regularCost + outputCost,
        with_cache: cacheCost + outputCost,
        savings: (regularCost - cacheCost).toFixed(2),
      },
    };
  } catch (error) {
    console.error(`   ✗ Error: ${error.message}`);
    return {
      id,
      company,
      role,
      status: "failed",
      error: error.message,
    };
  }
}

// Parse batch input TSV
function parseBatchInput(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Batch input not found: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.trim().split("\n");

  const jobs = [];
  for (const line of lines) {
    if (line.startsWith("#") || !line.trim()) continue;

    const [id, company, role, jd_file, form_file] = line.split("\t");
    if (!id || !company || !role || !jd_file) continue;

    // Resolve paths relative to batch directory
    const resolvedJD = path.isAbsolute(jd_file)
      ? jd_file
      : path.join(__dirname, jd_file);
    const resolvedForm = form_file
      ? path.isAbsolute(form_file)
        ? form_file
        : path.join(__dirname, form_file)
      : null;

    jobs.push({
      id,
      company,
      role,
      jd_file: resolvedJD,
      form_file: resolvedForm,
    });
  }

  return jobs;
}

// Main
async function main() {
  const batchFile = process.argv[2] || path.join(__dirname, "batch-apply-input.tsv");

  console.log("Career-Ops Batch Apply Processor (with Prompt Caching)");
  console.log(`Processing batch: ${batchFile}\n`);

  try {
    const cvContent = readCV();
    const profileContent = readProfile();
    const jobs = parseBatchInput(batchFile);

    if (jobs.length === 0) {
      console.log("No jobs to process.");
      return;
    }

    console.log(`Found ${jobs.length} job applications to generate\n`);
    console.log("Prompt Caching Strategy:");
    console.log("- First application: Full CV cost (will create cache)");
    console.log("- Applications 2+: 90% cheaper due to cache hits\n");

    const results = [];
    for (let i = 0; i < jobs.length; i++) {
      const result = await generateApplication(jobs[i], cvContent, profileContent);
      results.push(result);

      // Small delay between requests to stay within rate limits
      if (i < jobs.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    // Summary
    console.log("\n\n=== SUMMARY ===\n");
    let totalSavings = 0;
    let successCount = 0;

    for (const result of results) {
      if (result.status === "generated") {
        successCount++;
        const savings = parseFloat(result.cost.savings);
        totalSavings += savings;
        console.log(
          `✓ ${result.company} — ${result.role}`
        );
        console.log(
          `  Tokens: Cache created ${result.tokens.cache_created}, Read ${result.tokens.cache_read}, Output ${result.tokens.output}`
        );
        console.log(
          `  Cost: $${result.cost.with_cache} (saved $${savings})`
        );
      } else {
        console.log(`✗ ${result.company} — ${result.role}: ${result.error}`);
      }
    }

    console.log(`\nProcessed: ${successCount}/${results.length}`);
    console.log(`Total savings from caching: $${totalSavings.toFixed(2)}`);
    console.log(`\nNext: Review materials in output/ directory, then apply manually`);
  } catch (error) {
    console.error(`Fatal error: ${error.message}`);
    process.exit(1);
  }
}

main().catch(console.error);
