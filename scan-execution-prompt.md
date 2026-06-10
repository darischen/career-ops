# Portal Scan Execution — 2026-06-01

## Configuration Files (Read These First)

- portals.yml: Scan configuration, tracked companies, search queries, title filters
- data/scan-history.tsv: URLs already scanned (for deduplication)
- data/applications.md: Already-evaluated offers (for deduplication)
- data/pipeline.md: Pending URLs (for deduplication)

## Task: Execute Portal Scan Workflow

Run a comprehensive scan using Level 1, Level 2, and Level 3 discovery:

### Level 1: Playwright Direct Crawl
- Start with 5-10 tracked companies with careers_url
- Navigate to each careers_url
- Extract all visible job titles and URLs
- Look for "New Grad", "Junior", "Entry", "Engineer", "AI", "ML", "Software" keywords
- Exclude roles with "Senior", "Staff", "Lead", "PhD", "Master's", "Japan", "London", "Europe"

### Level 2: Job Board APIs
- Query Greenhouse, Ashby, Lever APIs for configured companies
- Extract structured job data (title, URL, compensation where available)
- Parallel execution allowed

### Level 3: WebSearch Broad Discovery
- Execute WebSearch queries with site: filters
- Extract results with company and role title
- Deduplicate against Level 1 and 2
- Verify liveness of each result before adding to pipeline

## Deduplication Strategy

Check each offer against:
1. scan-history.tsv — Exact URL match
2. applications.md — Company + role name normalization
3. pipeline.md — Exact URL match

## Output Format

```
Portal Scan — 2026-06-01
━━━━━━━━━━━━━━━━━━━━━━━━━━
Queries executed: N
Offers found: N total
Filtered by title: N relevant
Duplicates: N (already evaluated or in pipeline)
Expired discarded: N (dead links, Level 3)
New added to pipeline.md: N

  + {company} | {title} | {source}
  ...

→ Run /career-ops pipeline to evaluate new offers.
```

Update pipeline.md and scan-history.tsv with results.
