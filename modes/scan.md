# Mode: scan — Portal Scanner (Job Discovery)

Scans configured job portals, filters by title relevance, and adds new offers to the pipeline for evaluation.

## Recommended execution

Run as a subagent to avoid consuming main context:

```
Agent(
    subagent_type="general-purpose",
    prompt="[contents of this file + specific data]",
    run_in_background=True
)
```

**One browser at a time.** Scan drives Playwright. Concurrent `browser_navigate`
calls corrupt each other's tabs. So:
- Do NOT run scan while another Playwright command is active (`apply`, the
  `batch-apply` conductor, or another scan). Wait for it to finish.
- Inside scan, all Playwright navigations are sequential (one company at a
  time), never parallel. Levels 2 (APIs) and 3 differ: API fetches can run in
  parallel since they use no browser, and Level 3 verification is sequential.

## Configuration

Read `portals.yml` which contains:
- `search_queries`: List of `site:`-filtered search strings, executed by navigating a search results page with Playwright and scraping the hits (broad discovery)
- `tracked_companies`: Specific companies with `careers_url` for direct navigation
- `title_filter`: Positive/negative/seniority_boost keywords for title filtering

## Discovery strategy (3 levels)

### Level 1 — Direct Playwright (PRIMARY)

**For each company in `tracked_companies`:** Navigate to its `careers_url` with Playwright (`browser_navigate` + `browser_snapshot`), read ALL visible job listings, and extract title + URL from each. This is the most reliable method because:
- Sees the page in real-time (not cached Google results)
- Works with SPAs (Ashby, Lever, Workday)
- Detects new offers instantly
- Doesn't depend on Google indexing

**Every company MUST have `careers_url` in portals.yml.** If it doesn't, find it once, save it, and use in future scans.

### Level 2 — Job Board APIs (COMPLEMENTARY)

For companies using Greenhouse, Ashby, or Lever, public JSON APIs return clean structured data. Use as a fast complement to Level 1 — faster than Playwright and real-time.

**Greenhouse API:**
- Endpoint: `https://boards-api.greenhouse.io/v1/boards/{slug}/jobs`
- Public, no auth required
- Returns full job listings + apply URLs

**Ashby API:**
- Endpoint: `https://api.ashbyhq.com/posting-api/job-board/{slug}?includeCompensation=true`
- Public, no auth required
- Returns full job listings + apply URLs + compensation

**Lever API:**
- Endpoint: `https://api.lever.co/v0/postings/{slug}?mode=json`
- Public, no auth required
- Returns full job listings + apply URLs + categories

### Level 3 — Browser search scrape (BROAD DISCOVERY)

The `search_queries` with `site:` filters cover portals transversely (all Ashby, all Greenhouse, etc.). Run each by navigating a search results page with Playwright (`browser_navigate`) and scraping the result list (`browser_snapshot`). Useful for discovering NEW companies not yet in `tracked_companies`, but scraped results may point to stale postings, so verify liveness (step 9).

**Execution priority:**
1. Level 1: Playwright → all `tracked_companies` with `careers_url`
2. Level 2: API → all `tracked_companies` with `api:`
3. Level 3: Browser search scrape → all `search_queries` with `enabled: true`

Levels are additive — all run, results are merged and deduplicated.

## Workflow

1. **Read config**: `portals.yml`
2. **Read history**: `data/scan-history.tsv` → URLs already seen
3. **Read dedup sources**: `data/applications.md` + `data/pipeline.md`

4. **Level 1 — Playwright scan** (sequential, one company at a time — NEVER parallel Playwright):
   For each company in `tracked_companies` with `enabled: true` and `careers_url` defined:
   a. `browser_navigate` to the `careers_url`
   b. `browser_snapshot` to read all job listings
   c. If page has filters/departments, navigate relevant sections
   d. For each job listing extract: `{title, url, company}`
   e. If page has pagination, navigate additional pages
   f. Accumulate in candidate list
   g. If `careers_url` fails (404, redirect), try `scan_query` as fallback and annotate for URL update

5. **Level 2 — Job Board APIs** (parallel):
   For each company in `tracked_companies` with `api:` defined and `enabled: true`:
   a. WebFetch the API URL → JSON with job list
   b. For each job extract: `{title, url, company}`
   c. Accumulate in candidate list (dedup with Level 1)
   
   Supported platforms: Greenhouse, Ashby, Lever (all public, no auth required)

6. **Level 3 — Browser search scrape** (sequential — NEVER parallel Playwright):
   For each query in `search_queries` with `enabled: true`:
   a. Navigate the search results page for the `query` with Playwright, then snapshot and scrape the results
   b. From each result extract: `{title, url, company}`
      - **title**: from result title (before " @ " or " | ")
      - **url**: result URL
      - **company**: after " @ " in title, or extract from domain/path
   c. Accumulate in candidate list (dedup with Level 1+2)

7. **Filter by title** using `title_filter` from `portals.yml`:
   - At least 1 keyword from `positive` must appear in title (case-insensitive)
   - 0 keywords from `negative` must appear
   - `seniority_boost` keywords give priority but are not required

8. **Deduplicate** against 3 sources:
   - `scan-history.tsv` → exact URL already seen
   - `applications.md` → company + normalized role already evaluated
   - `pipeline.md` → exact URL already pending or processed

9. **Verify result liveness (Level 3 only)** — BEFORE adding to pipeline:

   Scraped search results may be stale (search engines cache pages for weeks or months). To avoid evaluating expired offers, verify each new Level 3 URL with Playwright. Levels 1 and 2 are inherently real-time and don't require this verification.

   For each new Level 3 URL (sequential — NEVER parallel Playwright):
   a. `browser_navigate` to URL
   b. `browser_snapshot` to read content
   c. Classify:
      - **Active**: job title visible + role description + Apply/Submit button
      - **Expired** (any of these signals):
        - Final URL contains `?error=true` (Greenhouse redirect when offer closed)
        - Page contains: "job no longer available" / "no longer open" / "position has been filled" / "this job has expired" / "page not found"
        - Only navbar and footer visible, no JD content (content < ~300 chars)
   d. If expired: register in `scan-history.tsv` with status `skipped_expired` and discard
   e. If active: continue to step 10

   **Don't interrupt entire scan if one URL fails.** If `browser_navigate` errors (timeout, 403, etc.), mark as `skipped_expired` and continue to next.

10. **For each new verified offer that passes filters**:
    a. Add to `pipeline.md` "Pending" section: `- [ ] {url} | {company} | {title}`
    b. Register in `scan-history.tsv`: `{url}\t{date}\t{query_name}\t{title}\t{company}\tadded`

11. **Offers filtered by title**: register in `scan-history.tsv` with status `skipped_title`
12. **Duplicate offers**: register with status `skipped_dup`
13. **Expired offers (Level 3)**: register with status `skipped_expired`

## Extracting title and company from scraped results

Scraped search results come in format: `"Job Title @ Company"` or `"Job Title | Company"` or `"Job Title — Company"`.

Extraction patterns by portal:
- **Ashby**: `"Senior AI PM (Remote) @ EverAI"` → title: `Senior AI PM`, company: `EverAI`
- **Greenhouse**: `"AI Engineer at Anthropic"` → title: `AI Engineer`, company: `Anthropic`
- **Lever**: `"Product Manager - AI @ Temporal"` → title: `Product Manager - AI`, company: `Temporal`

Generic regex: `(.+?)(?:\s*[@|—–-]\s*|\s+at\s+)(.+?)$`

## Private URLs

If a non-publicly accessible URL is found:
1. Save the JD to `jds/{company}-{role-slug}.md`
2. Add to pipeline.md as: `- [ ] local:jds/{company}-{role-slug}.md | {company} | {title}`

## Scan History

`data/scan-history.tsv` tracks ALL URLs seen:

```
url	first_seen	portal	title	company	status
https://...	2026-02-10	Ashby — AI PM	PM AI	Acme	added
https://...	2026-02-10	Greenhouse — SA	Junior Dev	BigCo	skipped_title
https://...	2026-02-10	Ashby — AI PM	SA AI	OldCo	skipped_dup
https://...	2026-02-10	Search scrape — AI PM	PM AI	ClosedCo	skipped_expired
```

## Output summary

```
Portal Scan — {YYYY-MM-DD}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Queries executed: N
Offers found: N total
Filtered by title: N relevant
Duplicates: N (already evaluated or in pipeline)
Expired discarded: N (dead links, Level 3)
New added to pipeline.md: N

  + {company} | {title} | {query_name}
  ...

→ Run /career-ops pipeline to evaluate new offers.
```

## Managing careers_url

Every company in `tracked_companies` must have `careers_url` — the direct URL to their job listing page. This avoids looking it up each time.

**Known patterns by platform:**
- **Ashby:** `https://jobs.ashbyhq.com/{slug}`
- **Greenhouse:** `https://job-boards.greenhouse.io/{slug}` or `https://job-boards.eu.greenhouse.io/{slug}`
- **Lever:** `https://jobs.lever.co/{slug}`
- **Custom:** Company's own URL (e.g., `https://openai.com/careers`)

**If `careers_url` doesn't exist** for a company:
1. Try the known pattern for its platform
2. If that fails, scrape a quick search for `"{company}" careers jobs` (Playwright navigate + snapshot)
3. Navigate with Playwright to confirm it works
4. **Save the found URL in portals.yml** for future scans

**If `careers_url` returns 404 or redirect:**
1. Annotate in output summary
2. Try scan_query as fallback
3. Mark for manual update

## Maintaining portals.yml

- **ALWAYS save `careers_url`** when adding a new company
- Add new queries as you discover interesting portals or roles
- Disable queries with `enabled: false` if they generate too much noise
- Adjust filter keywords as target roles evolve
- Add companies to `tracked_companies` when you want to follow them closely
- Verify `careers_url` periodically — companies change ATS platforms
