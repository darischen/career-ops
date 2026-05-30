#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jobs = [
  { id: '001', url: 'https://job-boards.greenhouse.io/silvus/jobs/5233544008?gh_src=Simplify&utm_source=Simplify' },
  { id: '002', url: 'https://q2ebanking.wd5.myworkdayjobs.com/Q2/job/Cary-North-Carolina/Machine-Learning-Engineer_REQ-12359?utm_source=Simplify' },
  { id: '003', url: 'https://fa-esgu-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/22447?utm_source=Simplify' },
  { id: '004', url: 'https://job-boards.eu.greenhouse.io/physicsx/jobs/4849382101?gh_src=Simplify&utm_source=Simplify' },
  { id: '005', url: 'https://neurocrine.wd5.myworkdayjobs.com/en-US/Neurocrinecareers/job/US-CA-San-Diego/AI-Engineer---Onsite-San-Diego-HQ_R6822?utm_source=Simplify' },
  { id: '006', url: 'https://apply.workable.com/datavisor-jobs/j/5F7109B03C' },
  { id: '007', url: 'https://job-boards.greenhouse.io/thenuclearcompany/jobs/5227257008?gh_src=Simplify&utm_source=Simplify' },
];

const pendingDir = path.join(__dirname, 'batch', 'pending');

async function extractJD(job) {
  console.log(`[${job.id}] Processing ${job.url}`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(job.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Extract text content
    const text = await page.textContent('body');

    // Try to get company name from various sources
    let company = '';
    let role = '';

    // Get title from page
    const pageTitle = await page.title();
    console.log(`  Page title: ${pageTitle}`);

    // Try to extract company from common selectors
    const companyElem = await page.$('[data-company], [class*="company"], h1, .job-title');
    if (companyElem) {
      company = await companyElem.textContent();
      company = company?.trim() || '';
    }

    // If no company found, extract from URL or page structure
    if (!company) {
      try {
        const h1Text = await page.textContent('h1');
        if (h1Text) role = h1Text.trim();
      } catch (e) {}

      try {
        const h2Text = await page.textContent('h2');
        if (h2Text && !company) company = h2Text.trim();
      } catch (e) {}
    }

    // Get full HTML for better parsing
    const html = await page.content();

    // Try to extract form questions
    let formQuestions = 'NO_FORM_DETECTED';
    const formLabels = await page.$$eval('label', labels =>
      labels.map(l => l.textContent?.trim()).filter(t => t && t.length > 5)
    ).catch(() => []);

    if (formLabels && formLabels.length > 0) {
      formQuestions = formLabels.join('\n');
    }

    // Save to file
    const output = `---COMPANY---
${company || 'Not extracted'}
---ROLE---
${role || pageTitle || 'Not extracted'}
---JD---
${text || 'Content not available'}
---FORM---
${formQuestions}`;

    const fileName = path.join(pendingDir, `${job.id}-jd.txt`);
    fs.writeFileSync(fileName, output, 'utf-8');
    console.log(`  ✓ Saved to ${job.id}-jd.txt`);

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    const errorOutput = `---COMPANY---
Error extracting
---ROLE---
Error
---JD---
Error: ${error.message}
---FORM---
NO_FORM_DETECTED`;

    const fileName = path.join(pendingDir, `${job.id}-jd.txt`);
    fs.writeFileSync(fileName, errorOutput, 'utf-8');
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('Starting JD extraction...\n');

  // Process sequentially
  for (const job of jobs) {
    await extractJD(job);
    console.log('');
  }

  // Write completion signal
  fs.writeFileSync(path.join(pendingDir, 'conductor-done.txt'), 'All jobs processed', 'utf-8');
  console.log('Completion signal written to conductor-done.txt');
}

main().catch(console.error);
