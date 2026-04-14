import fs from 'fs';
import yaml from 'js-yaml';

const portals = yaml.load(fs.readFileSync('portals.yml', 'utf8'));
const today = new Date().toISOString().split('T')[0];

// Load existing scan history and dedup sources
const scanHistory = new Set(
  fs.readFileSync('data/scan-history.tsv', 'utf8')
    .split('\n')
    .slice(1)
    .filter(l => l.trim())
    .map(l => l.split('\t')[1])
);

const pipelineUrls = new Set(
  fs.readFileSync('data/pipeline.md', 'utf8')
    .split('\n')
    .filter(l => l.includes('https://'))
    .map(l => l.split('|')[0].replace('- [ ]', '').trim())
);

const applicationsContent = fs.readFileSync('data/applications.md', 'utf8');

// Companies with Greenhouse API
const greenhouseCompanies = [
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'Scale AI', slug: 'scaleai' },
  { name: 'dbt Labs', slug: 'dbtlabsinc' },
  { name: 'Together AI', slug: 'togetherai' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'Loop', slug: 'loop' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Figure', slug: 'figureai' },
  { name: 'Palantir', slug: 'palantir' },
  { name: 'Sigma Computing', slug: 'sigmacomputing' },
];

// Title filter from portals.yml
const titleFilter = portals.title_filter;

function matchesTitleFilter(title) {
  const titleLower = title.toLowerCase();
  
  // Check negative keywords first
  for (const neg of titleFilter.negative) {
    if (titleLower.includes(neg.toLowerCase())) {
      return false;
    }
  }
  
  // Must have at least one positive keyword
  for (const pos of titleFilter.positive) {
    if (titleLower.includes(pos.toLowerCase())) {
      return true;
    }
  }
  
  return false;
}

async function scanGreenhouseAPI(company) {
  try {
    const url = `https://boards-api.greenhouse.io/v1/boards/${company.slug}/jobs`;
    const response = await fetch(url, { timeout: 10000 });
    if (!response.ok) return [];
    
    const data = await response.json();
    if (!data.jobs) return [];
    
    return data.jobs.map(job => ({
      title: job.title,
      url: job.absolute_url || `https://boards.greenhouse.io/${company.slug}/jobs/${job.id}`,
      company: company.name,
    }));
  } catch (e) {
    console.error(`API error for ${company.name}: ${e.message}`);
    return [];
  }
}

async function runScan() {
  console.log(`Portal Scan — ${today}`);
  console.log('━'.repeat(50));
  
  const newOffers = [];
  const filteredByTitle = [];
  const duplicates = [];
  const addedToHistory = [];
  
  // Level 2: Greenhouse APIs
  console.log('\nLevel 2: Greenhouse APIs...');
  for (const company of greenhouseCompanies) {
    const jobs = await scanGreenhouseAPI(company);
    
    for (const job of jobs) {
      if (scanHistory.has(job.url)) {
        duplicates.push({ ...job, source: 'api-dup' });
        continue;
      }
      
      if (pipelineUrls.has(job.url)) {
        duplicates.push({ ...job, source: 'pipeline-dup' });
        continue;
      }
      
      if (!matchesTitleFilter(job.title)) {
        filteredByTitle.push(job);
        addedToHistory.push({
          date: today,
          url: job.url,
          company: job.company,
          role: job.title,
          status: 'skipped_title'
        });
        continue;
      }
      
      // Check applications.md for company+role dedup
      const normalizedRole = job.title.toLowerCase().replace(/\s+/g, ' ');
      if (applicationsContent.toLowerCase().includes(job.company.toLowerCase()) && 
          applicationsContent.toLowerCase().includes(normalizedRole)) {
        duplicates.push({ ...job, source: 'app-dup' });
        continue;
      }
      
      newOffers.push({
        date: today,
        url: job.url,
        company: job.company,
        role: job.title,
        status: 'added'
      });
      scanHistory.add(job.url);
      addedToHistory.push({
        date: today,
        url: job.url,
        company: job.company,
        role: job.title,
        status: 'added'
      });
    }
    
    console.log(`  ${company.name}: ${jobs.length} jobs`);
  }
  
  console.log(`\nResults:`);
  console.log(`  New offers: ${newOffers.length}`);
  console.log(`  Filtered by title: ${filteredByTitle.length}`);
  console.log(`  Duplicates: ${duplicates.length}`);
  
  if (newOffers.length > 0) {
    console.log(`\nNew offers to add to pipeline:`);
    newOffers.forEach(o => {
      console.log(`  + ${o.company} | ${o.role}`);
    });
  }
  
  // Append to scan history
  if (addedToHistory.length > 0) {
    const historyLines = addedToHistory.map(h => 
      `${h.date}\t${h.url}\t${h.company}\t${h.role}\t${h.status}`
    ).join('\n');
    
    fs.appendFileSync('data/scan-history.tsv', '\n' + historyLines);
    console.log(`\nUpdated scan-history.tsv with ${addedToHistory.length} entries`);
  }
  
  // Append to pipeline if new offers
  if (newOffers.length > 0) {
    const pipelineAdditions = newOffers.map(o =>
      `- [ ] ${o.url} | ${o.company} | ${o.role}`
    ).join('\n');
    
    fs.appendFileSync('data/pipeline.md', '\n' + pipelineAdditions + '\n');
    console.log(`Added ${newOffers.length} new offers to pipeline.md`);
  }
  
  console.log('\nScan complete.');
}

runScan().catch(console.error);
