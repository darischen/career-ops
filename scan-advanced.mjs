import fs from 'fs';
import yaml from 'js-yaml';

const portals = yaml.load(fs.readFileSync('portals.yml', 'utf8'));
const today = new Date().toISOString().split('T')[0];

// Load existing scan history, pipeline, and applications
const scanHistory = fs.readFileSync('data/scan-history.tsv', 'utf8').split('\n');
const seenUrls = new Set(scanHistory.slice(1).filter(l => l.trim()).map(l => l.split('\t')[1]));

const pipelineUrls = new Set(
  fs.readFileSync('data/pipeline.md', 'utf8')
    .split('\n')
    .filter(l => l.includes('https://'))
    .map(l => l.split('|')[0].replace('- [ ]', '').trim())
);

const applicationsContent = fs.readFileSync('data/applications.md', 'utf8');

// Lever.co and Ashby.hq companies
const leverCompanies = [
  { name: 'Palantir', slug: 'palantir' },
  { name: 'Mistral AI', slug: 'mistral' },
  { name: 'Whoop', slug: 'whoop' },
  { name: 'WeRide', slug: 'weride' },
];

const ashbyCompanies = [
  { name: 'Decagon', slug: 'decagon' },
  { name: 'Harvey', slug: 'harvey' },
  { name: 'Quora', slug: 'quora' },
  { name: 'Perplexity', slug: 'perplexity' },
  { name: 'Brain Co', slug: 'brainco' },
  { name: 'fastino.ai', slug: 'fastino-ai' },
  { name: 'Mercor', slug: 'mercor' },
  { name: 'Artemis', slug: 'artemis' },
  { name: 'Enode', slug: 'enode' },
  { name: 'Empirical Security', slug: 'empirical-security' },
  { name: 'GigaML', slug: 'GigaML' },
  { name: 'Numeric', slug: 'numeric' },
  { name: 'Mirage', slug: 'mirage' },
  { name: 'BRM', slug: 'brm.ai' },
  { name: 'Trading212', slug: 'trading212' },
];

const titleFilter = portals.title_filter;

function matchesTitleFilter(title) {
  const titleLower = title.toLowerCase();
  for (const neg of titleFilter.negative) {
    if (titleLower.includes(neg.toLowerCase())) return false;
  }
  for (const pos of titleFilter.positive) {
    if (titleLower.includes(pos.toLowerCase())) return true;
  }
  return false;
}

function isDuplicate(url, company, role) {
  if (seenUrls.has(url) || pipelineUrls.has(url)) return true;
  
  // Check applications.md for company+role match
  const companyMatch = applicationsContent.includes(company);
  if (companyMatch) {
    const normalizedRole = role.toLowerCase().replace(/\s+/g, ' ');
    const normalizedContent = applicationsContent.toLowerCase();
    if (normalizedContent.includes(normalizedRole)) {
      return true;
    }
  }
  return false;
}

async function scanLeverJobs(slug, company) {
  try {
    const url = `https://api.lever.co/v0/postings/companies/${slug}`;
    const response = await fetch(url, { timeout: 10000 });
    if (!response.ok) return [];
    const data = await response.json();
    return (data.postings || []).map(job => ({
      title: job.text,
      url: job.hostedUrl,
      company,
    }));
  } catch (e) {
    console.error(`Lever error for ${company}: ${e.message}`);
    return [];
  }
}

async function scanAshbyJobs(slug, company) {
  try {
    // Ashby doesn't have a public API, so this would need Playwright
    // For now, returning empty - would need browser automation
    return [];
  } catch (e) {
    return [];
  }
}

async function runAdvancedScan() {
  console.log(`\nAdvanced Scan — Lever & Ashby (${today})`);
  console.log('━'.repeat(50));
  
  let newCount = 0;
  let skipCount = 0;
  const additions = [];
  const skipHistory = [];
  
  // Scan Lever companies
  console.log('\nLevel 2B: Lever.co API...');
  for (const company of leverCompanies) {
    const jobs = await scanLeverJobs(company.slug, company.name);
    
    for (const job of jobs) {
      if (isDuplicate(job.url, job.company, job.title)) {
        skipCount++;
        continue;
      }
      
      if (!matchesTitleFilter(job.title)) {
        skipHistory.push({
          date: today,
          url: job.url,
          company: job.company,
          role: job.title,
          status: 'skipped_title'
        });
        skipCount++;
        continue;
      }
      
      newCount++;
      seenUrls.add(job.url);
      additions.push({
        date: today,
        url: job.url,
        company: job.company,
        role: job.title,
        status: 'added'
      });
      console.log(`  ✓ ${job.company} | ${job.title}`);
    }
    
    console.log(`  ${company.name}: ${jobs.length} jobs scanned`);
  }
  
  console.log(`\nResults: ${newCount} new, ${skipCount} filtered/dups`);
  
  // Update files
  if (additions.length > 0 || skipHistory.length > 0) {
    const allUpdates = [...additions, ...skipHistory]
      .map(h => `${h.date}\t${h.url}\t${h.company}\t${h.role}\t${h.status}`)
      .join('\n');
    
    fs.appendFileSync('data/scan-history.tsv', '\n' + allUpdates);
    console.log(`Updated scan-history.tsv with ${allUpdates.split('\n').length} entries`);
  }
  
  if (additions.length > 0) {
    const pipeline = additions
      .map(o => `- [ ] ${o.url} | ${o.company} | ${o.role}`)
      .join('\n');
    
    fs.appendFileSync('data/pipeline.md', '\n' + pipeline + '\n');
    console.log(`Added ${additions.length} offers to pipeline.md`);
  }
}

runAdvancedScan().catch(console.error);
