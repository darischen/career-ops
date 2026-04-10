#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const client = new Anthropic();

// All 53 pending URLs
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
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8409168002', company: 'Airtable', role: 'AI Agent Architect, Customer Experience' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8434287002', company: 'Airtable', role: 'AI Analytics Engineer (AI & Analytics Platform)' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8470036002', company: 'Airtable', role: 'AI Analytics Engineer (Business Analytics)' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8434307002', company: 'Airtable', role: 'AI Analytics Engineer (Marketing Analytics)' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8495850002', company: 'Airtable', role: 'Software Engineer' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8124953002', company: 'Airtable', role: 'Software Engineer, Data' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8400373002', company: 'Airtable', role: 'Software Engineer, Infrastructure (2-8 YOE)' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8400374002', company: 'Airtable', role: 'Software Engineer, Observability' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8397137002', company: 'Airtable', role: 'Software Engineer, Product Frontend (2-8 YOE)' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8455969002', company: 'Airtable', role: 'Design Technologist' },
  { url: 'https://job-boards.greenhouse.io/airtable/jobs/8423374002', company: 'Airtable', role: 'Demo Engineer' },
  { url: 'https://job-boards.greenhouse.io/anthropic/jobs/5157844008', company: 'Anthropic', role: 'Software Engineer, Platform' },
  { url: 'http://stability.ai/careers?gh_jid=4712826101', company: 'Stability AI', role: 'Generative AI Inference Engineer' },
  { url: 'http://stability.ai/careers?gh_jid=4770256101', company: 'Stability AI', role: 'Multimodal Generative AI Researcher' },
  { url: 'http://stability.ai/careers?gh_jid=4711065101', company: 'Stability AI', role: 'Research Scientist – Controlled 3D Generation' },
  { url: 'http://stability.ai/careers?gh_jid=4711066101', company: 'Stability AI', role: 'Research Scientist – VLM Generalist' },
  { url: 'https://jobs.ashbyhq.com/notion/17330e14-83db-49a4-ae31-411690d97dba', company: 'Notion', role: 'Software Engineer, AI Workflows' },
  { url: 'https://jobs.ashbyhq.com/notion/5b15697c-fa91-4511-9482-c98a6ff29f90', company: 'Notion', role: 'Software Engineer Intern (Fall 2026)' },
  { url: 'https://jobs.ashbyhq.com/sola/9a9c39a9-6a15-4b76-b538-f7d219fdb92e', company: 'Sola', role: 'Software Engineer, Desktop Automation' },
  { url: 'https://jobs.lever.co/color/6f61b49c-4ebb-4e8f-ac94-b06307b763f9', company: 'Color', role: 'New Grad Software Engineer' },
  { url: 'https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92', company: 'Palantir', role: 'Software Engineer, New Grad' },
  { url: 'https://jobs.lever.co/palantir/e1a6c138-98bf-45e2-97f7-2c70371cc38a', company: 'Palantir', role: 'Software Engineer, New Grad - Production Infrastructure' },
  { url: 'https://jobs.lever.co/weride/d87ddf51-0def-436f-a178-135481b88f96', company: 'WeRide.ai', role: 'New Grad Software Engineer - Computer Vision' },
  { url: 'https://jobs.lever.co/gauntlet/05622c55-52bf-47a9-8d88-e83d70fc5bad', company: 'Gauntlet', role: 'Quant Research Engineer - New Grad' },
  { url: 'https://jobs.lever.co/sprucesystems/c683a712-7a5a-4bed-b580-f899998f044a', company: 'Spruce', role: 'Full-Stack Software Engineer (New Grad)' },
  { url: 'https://jobs.ashbyhq.com/ramp/a1229aec-1105-4c47-8533-b912e732ed89', company: 'Ramp', role: 'University Grad - Frontend Software Engineer' },
  { url: 'https://jobs.ashbyhq.com/benchling/b3c9b312-6e2b-4dbc-9b15-0b0310d75a7f/application', company: 'Benchling', role: 'Software Engineer, New Grad (2026)' },
  { url: 'https://jobs.ashbyhq.com/zip/5f28357a-c95d-485a-84f9-feff64ce9fb3', company: 'Zip', role: 'Software Engineer, New Grad (2026 Start)' },
  { url: 'https://jobs.ashbyhq.com/Abridge/55958eb5-109f-4e88-9793-ed2327fc753a', company: 'Abridge', role: 'Full Stack Engineering (New Grad)' },
  { url: 'https://jobs.ashbyhq.com/ramp/12747eb1-e545-478d-b07c-f27f4a88cc12', company: 'Ramp', role: 'University Grad 2025 - Frontend Software Engineer' },
  { url: 'https://jobs.ashbyhq.com/kikoff/ad87f613-2906-4497-886d-742d9104fc50', company: 'Kikoff', role: 'Software Engineer - Recent Grad 2026' },
  { url: 'https://jobs.ashbyhq.com/n1/73724fe2-9a93-4a60-b349-4fd3d2efa94a', company: 'N1', role: 'New Grad Software Engineer (Full Stack)' },
  { url: 'https://jobs.ashbyhq.com/meshy/4d91eb31-80a5-44de-82bc-ba6e3f4f0d2b', company: 'Meshy', role: 'Software Engineer, New Grad' },
  { url: 'https://job-boards.greenhouse.io/remesh/jobs/8450776002', company: 'Remesh', role: 'Software Engineer' },
  { url: 'https://job-boards.greenhouse.io/datakindinc/jobs/7690497003', company: 'DataKind', role: 'Data Engineer (Remote-US)' },
  { url: 'https://job-boards.greenhouse.io/perfectserve/jobs/5830849004', company: 'PerfectServe', role: 'Software Engineer - Full Stack AI' },
  { url: 'https://job-boards.greenhouse.io/weedmaps77/jobs/8488081002', company: 'Weedmaps', role: 'Site Reliability Engineer (Remote)' },
  { url: 'https://job-boards.greenhouse.io/funga/jobs/5115107008', company: 'Funga', role: 'Data Infrastructure Engineer' },
];

async function evaluateJD(index, jobData) {
  const jobNum = 53 + index; // Start from 053
  console.log(`[${index + 1}/53] Evaluating ${jobData.company} - ${jobData.role}...`);

  try {
    // For now, return a quick response structure
    // Full evaluation will be done in the main pipeline script
    return {
      num: jobNum,
      company: jobData.company,
      role: jobData.role,
      url: jobData.url,
      status: 'pending'
    };
  } catch (error) {
    console.error(`Error evaluating ${jobData.company}:`, error.message);
    return null;
  }
}

async function main() {
  console.log(`Starting batch evaluation of ${pendingUrls.length} pending URLs...`);
  console.log('Reports will be numbered 053-105\n');

  const results = [];
  for (let i = 0; i < pendingUrls.length; i++) {
    const result = await evaluateJD(i, pendingUrls[i]);
    if (result) results.push(result);
  }

  console.log(`\nCompleted ${results.length} evaluations`);
  console.log('Next: Use playwright + claude to generate full reports');
}

main().catch(console.error);
