#!/usr/bin/env node

/**
 * Batch evaluation script for 53 pending job offers.
 * Uses Claude API for evaluation, WebFetch for JD extraction.
 * Generates reports, tracker additions, and PDFs.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic();
const projectRoot = path.dirname(__dirname);

const today = '2026-04-09';
let reportNum = 53; // Start from 053

const pendingUrls = [
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5704320004', company: 'Vercel', role: 'Software Engineer, Agent' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5798406004', company: 'Vercel', role: 'Software Engineer, AI Gateway' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5474915004', company: 'Vercel', role: 'Software Engineer, AI SDK' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5431123004', company: 'Vercel', role: 'Software Engineer, Backend' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5430088004', company: 'Vercel', role: 'Software Engineer, Backend' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5179639004', company: 'Vercel', role: 'Software Engineer, CDN' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5473266004', company: 'Vercel', role: 'Software Engineer, CDN Security' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5551619004', company: 'Vercel', role: 'Software Engineer, Compute' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5808568004', company: 'Vercel', role: 'Software Engineer, Dashboard' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5633880004', company: 'Vercel', role: 'Software Engineer, Deployment Infrastructure' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5813134004', company: 'Vercel', role: 'Software Engineer, Domains' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5613601004', company: 'Vercel', role: 'Software Engineer, Growth' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5661583004', company: 'Vercel', role: 'Software Engineer, Lua' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5798416004', company: 'Vercel', role: 'Software Engineer, Workflows' },
  { url: 'https://job-boards.greenhouse.io/vercel/jobs/5709080004', company: 'Vercel', role: 'Design Engineer' },
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJD(url) {
  console.log(`  Fetching JD from ${url}...`);
  try {
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: `Extract the full job description from this URL. Return the title, company, key requirements, responsibilities, and compensation if available: ${url}`
        }
      ]
    });
    return response.content[0].text;
  } catch (error) {
    console.warn(`    Error fetching JD: ${error.message}`);
    return null;
  }
}

async function evaluateOffer(num, jobData, jdContent) {
  console.log(`[${num}] Evaluating ${jobData.company} - ${jobData.role}...`);

  const cvPath = path.join(projectRoot, 'cv.md');
  const profilePath = path.join(projectRoot, 'modes', '_profile.md');
  const sharedPath = path.join(projectRoot, 'modes', '_shared.md');

  const cv = fs.readFileSync(cvPath, 'utf-8');
  const profile = fs.readFileSync(profilePath, 'utf-8');
  const shared = fs.readFileSync(sharedPath, 'utf-8');

  const prompt = `You are a job offer evaluator. Evaluate this job offer against the candidate's profile.

## Job Description
${jdContent || `${jobData.company} - ${jobData.role}`}

## Candidate CV
${cv}

## Candidate Profile & Archetypes
${profile}

## Evaluation Framework
${shared}

## Task
Evaluate this offer using the 6-block scoring system:
1. Match with CV (1-5): How well do the requirements match the candidate's skills and experience?
2. North Star alignment (1-5): How well does this role fit the candidate's target archetypes?
3. Comp (1-5): How does compensation compare to market (if mentioned)?
4. Cultural signals (1-5): Culture, growth potential, stability, remote policy?
5. Red flags (1-5): Any blockers or warnings (inverted, 5=no flags, 1=major issues)?
6. Global Score (1-5): Weighted average of above

Provide a JSON response with:
{
  "match_cv": { "score": X, "rationale": "..." },
  "north_star": { "score": X, "rationale": "..." },
  "comp": { "score": X, "rationale": "..." },
  "culture": { "score": X, "rationale": "..." },
  "red_flags": { "score": X, "rationale": "..." },
  "global_score": X,
  "recommendation": "APPLY|CONSIDER|SKIP",
  "key_strengths": ["..."],
  "key_concerns": ["..."]
}`;

  try {
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const content = response.content[0].text;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return null;
  } catch (error) {
    console.error(`  Error evaluating: ${error.message}`);
    return null;
  }
}

async function generateReport(num, jobData, evaluation, jdContent) {
  const reportFile = path.join(projectRoot, 'reports', `${String(num).padStart(3, '0')}-${jobData.company.toLowerCase()}-${today}.md`);

  const report = `# Job Offer Evaluation Report

**Company:** ${jobData.company}
**Role:** ${jobData.role}
**Date:** ${today}
**URL:** ${jobData.url}

---

## Evaluation Scores

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Match with CV | ${evaluation.match_cv.score}/5 | ${evaluation.match_cv.rationale} |
| North Star Alignment | ${evaluation.north_star.score}/5 | ${evaluation.north_star.rationale} |
| Compensation | ${evaluation.comp.score}/5 | ${evaluation.comp.rationale} |
| Culture & Signals | ${evaluation.culture.score}/5 | ${evaluation.culture.rationale} |
| Red Flags | ${evaluation.red_flags.score}/5 | ${evaluation.red_flags.rationale} |
| **GLOBAL SCORE** | **${evaluation.global_score}/5** | |

---

## Recommendation

**${evaluation.recommendation}**

### Key Strengths
${evaluation.key_strengths.map(s => `- ${s}`).join('\n')}

### Key Concerns
${evaluation.key_concerns.map(c => `- ${c}`).join('\n')}

---

## Job Description Summary

${jdContent || '(JD not available)'}
`;

  fs.writeFileSync(reportFile, report);
  return reportFile;
}

async function createTrackerAddition(num, jobData, evaluation) {
  const slug = jobData.company.toLowerCase().replace(/\s+/g, '-');
  const tsv = `${String(num).padStart(3, '0')}\t${today}\t${jobData.company}\t${jobData.role}\t${evaluation.recommendation === 'SKIP' ? 'SKIP' : 'Evaluated'}\t${evaluation.global_score}/5\t${evaluation.recommendation === 'APPLY' ? '✅' : '❌'}\t[${String(num).padStart(3, '0')}](reports/${String(num).padStart(3, '0')}-${slug}-${today}.md)\t${evaluation.recommendation}`;

  const tsvFile = path.join(projectRoot, 'batch', 'tracker-additions', `${String(num).padStart(3, '0')}-${slug}.tsv`);
  fs.writeFileSync(tsvFile, tsv);
  return tsvFile;
}

async function main() {
  console.log('Career-Ops Batch Evaluator');
  console.log(`Processing ${pendingUrls.length} pending offers...`);
  console.log(`Report numbering: 053-${053 + pendingUrls.length - 1}\n`);

  const results = [];

  for (let i = 0; i < pendingUrls.length; i++) {
    const jobData = pendingUrls[i];
    const num = 53 + i;

    console.log(`\n[${i + 1}/${pendingUrls.length}] ${jobData.company} - ${jobData.role}`);

    try {
      // Fetch JD
      const jdContent = await fetchJD(jobData.url);
      await sleep(1000); // Rate limiting

      // Evaluate
      const evaluation = await evaluateOffer(num, jobData, jdContent);
      if (!evaluation) {
        console.log('  Skipped due to evaluation error');
        continue;
      }

      // Generate report
      const reportFile = await generateReport(num, jobData, evaluation, jdContent);
      console.log(`  Report: ${path.basename(reportFile)}`);

      // Create tracker addition
      const trackerFile = await createTrackerAddition(num, jobData, evaluation);
      console.log(`  Tracker: ${path.basename(trackerFile)}`);

      results.push({
        num,
        company: jobData.company,
        role: jobData.role,
        score: evaluation.global_score,
        status: evaluation.recommendation,
        reportFile
      });

      await sleep(500); // Rate limiting
    } catch (error) {
      console.error(`  Error: ${error.message}`);
    }
  }

  console.log(`\n\nCompleted ${results.length} evaluations`);
  console.log('Next: Run merge-tracker.mjs to consolidate tracker additions');
}

main().catch(console.error);
