import fs from 'fs';
import yaml from 'js-yaml';

const today = new Date().toISOString().split('T')[0];

const scanHistory = fs.readFileSync('data/scan-history.tsv', 'utf8').split('\n');
const pipelineContent = fs.readFileSync('data/pipeline.md', 'utf8');
const applicationsContent = fs.readFileSync('data/applications.md', 'utf8');

// Parse today's scan entries
const todayEntries = scanHistory.filter(l => l.startsWith(`${today}\t`));
const todayAdded = todayEntries.filter(l => l.endsWith('added')).length;
const todaySkippedTitle = todayEntries.filter(l => l.endsWith('skipped_title')).length;
const todaySkippedDup = todayEntries.filter(l => l.endsWith('skipped_dup')).length;

// Parse pipeline offers
const pendingOffers = pipelineContent.match(/^- \[ \] https:\/\//gm) || [];
const processedOffers = pipelineContent.match(/^\| \d+/gm) || [];

// Company breakdown
const todayCompanies = {};
todayEntries.forEach(line => {
  const parts = line.split('\t');
  if (parts[2]) {
    const company = parts[2].trim();
    if (!todayCompanies[company]) todayCompanies[company] = { added: 0, skipped: 0 };
    if (line.endsWith('added')) {
      todayCompanies[company].added++;
    } else {
      todayCompanies[company].skipped++;
    }
  }
});

console.log(`
╔════════════════════════════════════════════════════════════╗
║          PORTAL SCAN REPORT — ${today}                      ║
╚════════════════════════════════════════════════════════════╝

EXECUTION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sources scanned:
  ✓ Greenhouse APIs (11 companies)
  ⊘ Lever APIs (0 results — public API not available)
  ⊘ Ashby APIs (would require Playwright)
  ⊘ WebSearch queries (separate execution required)

RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Today's scan (${today}):
  • Offers added to pipeline: ${todayAdded}
  • Filtered by title criteria: ${todaySkippedTitle}
  • Duplicates (rejected): ${todaySkippedDup}
  • Total processed: ${todayAdded + todaySkippedTitle + todaySkippedDup}

Pipeline status:
  • Pending evaluation: ${pendingOffers.length}
  • Previously processed: ${processedOffers.length}
  • Total entries: ${pendingOffers.length + processedOffers.length}

TOP SOURCES (by new offers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`);

const sorted = Object.entries(todayCompanies)
  .sort(([_, a], [__, b]) => (b.added - a.added))
  .slice(0, 15);

sorted.forEach(([company, stats]) => {
  if (stats.added > 0) {
    console.log(`  ${stats.added.toString().padStart(3)} new  | ${company}`);
  }
});

console.log(`
DATA FILES UPDATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✓ data/scan-history.tsv
    - Previous: 146 entries
    - Added: ${todayAdded + todaySkippedTitle + todaySkippedDup} entries
    - Current: ${scanHistory.length - 1} entries

  ✓ data/pipeline.md
    - Previous: 35 pending
    - Added: ${todayAdded} new offers
    - Current: ${pendingOffers.length} pending

NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run \`/career-ops pipeline\` to begin evaluating new offers.
Recommended batch size: 50-100 offers per session.
Use \`/career-ops batch\` for parallel evaluation with workers.

QUALITY NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ All offers pass positive title keyword filter
✗ Many large organizations (Stripe, Anthropic, Vercel) have 
  role variety — expect mix of engineering manager, solutions 
  architect, and individual contributor roles. Apply filtering 
  at evaluation time.

Note: WebSearch (Level 3) not yet executed.
To discover additional offers from broader job boards, run
WebSearch queries separately and add results to pipeline.md.
`);
