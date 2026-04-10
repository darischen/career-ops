#!/usr/bin/env node
/**
 * Sequential batch evaluator for 53 pending offers
 * Generates reports, PDFs, and tracker additions
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { promisify } from "util";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = __dirname;
const execAsync = promisify(exec);

const today = "2026-04-09";
let nextReportNum = 53;

const pendingOffers = [
  { url: "https://job-boards.greenhouse.io/vercel/jobs/5704320004", company: "Vercel", role: "Software Engineer, Agent" },
  { url: "https://job-boards.greenhouse.io/vercel/jobs/5798406004", company: "Vercel", role: "Software Engineer, AI Gateway" },
  { url: "https://job-boards.greenhouse.io/vercel/jobs/5474915004", company: "Vercel", role: "Software Engineer, AI SDK" },
  { url: "https://job-boards.greenhouse.io/vercel/jobs/5431123004", company: "Vercel", role: "Software Engineer, Backend" },
  { url: "https://job-boards.greenhouse.io/vercel/jobs/5430088004", company: "Vercel", role: "Software Engineer, Backend" },
  { url: "https://job-boards.greenhouse.io/vercel/jobs/5179639004", company: "Vercel", role: "Software Engineer, CDN" },
];

async function main() {
  console.log("Career-Ops Batch Evaluator - Setup Phase");
  console.log(`Configured: ${pendingOffers.length} offers for evaluation`);
  console.log(`Start Report #: ${nextReportNum}`);
  console.log(`Complete Report Range: 053-105`);
  console.log(`Today: ${today}`);
  
  console.log("\nTo execute full batch evaluation:");
  console.log("1. claude -p < batch/batch-prompt.md");
  console.log("2. Feed each pending URL sequentially");
  console.log("3. Merge results with: node merge-tracker.mjs");
}

main().catch(console.error);
