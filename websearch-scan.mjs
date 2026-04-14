import fs from 'fs';
import yaml from 'js-yaml';

const portals = yaml.load(fs.readFileSync('portals.yml', 'utf8'));
const today = new Date().toISOString().split('T')[0];

// Load scan history
const seenUrls = new Set(
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

console.log(`\nWebSearch Scan Summary (${today})`);
console.log('━'.repeat(50));
console.log('\nNote: WebSearch scans would need execution via dedicated tool.');
console.log('Configured queries from portals.yml:');

const searchQueries = portals.search_queries.filter(q => q.enabled);
console.log(`\nTotal enabled queries: ${searchQueries.length}`);
searchQueries.slice(0, 5).forEach((q, i) => {
  console.log(`  ${i+1}. ${q.name}`);
  console.log(`     Query: ${q.query.substring(0, 60)}...`);
});

console.log('\nTo execute WebSearch scans:');
console.log('  1. Use WebSearch tool for each query');
console.log('  2. Parse results for job titles and URLs');
console.log('  3. Filter by title_filter (positive/negative keywords)');
console.log('  4. Verify URLs not in scan-history.tsv or pipeline.md');
console.log('  5. For new URLs, add to pipeline.md and scan-history.tsv');
console.log('\nWebSearch should be performed separately due to API rate limits.');
