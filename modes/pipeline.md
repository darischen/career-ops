# Mode: pipeline — Job Inbox (Second Brain)

Processes job offer URLs accumulated in `data/pipeline.md`. You add URLs whenever you want, then run `/career-ops pipeline` to evaluate them all.

## Workflow

1. **Read** `data/pipeline.md` → find items `- [ ]` in "Pending" section
2. **For each pending URL**:
   a. Calculate next `REPORT_NUM` sequentially (read `reports/`, take highest number + 1)
   b. **Extract JD** using Playwright (browser_navigate + browser_snapshot) → WebFetch → WebSearch
   c. If URL is inaccessible → mark as `- [!]` with note and continue
   d. **Run full auto-pipeline** (MANDATORY all steps):
      - i. A-F evaluation (read `modes/_shared.md` for scoring framework)
      - ii. Save report .md (ALWAYS, even for scores < 3.0) to `reports/{REPORT_NUM}-{company-slug}-{DATE}.md`
      - iii. Register in tracker (TSV format to `batch/tracker-additions/`)
   e. **Move from "Pending" to "Processed"**: `- [x] #NNN | URL | Company | Role | Score/5 | PDF ✅/❌`
3. **If 3+ pending URLs**, launch agents in parallel (Agent tool with `run_in_background`) to maximize speed
4. **When done**, show summary table:

```
| # | Company | Role | Score | PDF | Action |
```

## Format of pipeline.md

```markdown
## Pending
- [ ] https://jobs.example.com/posting/123
- [ ] https://boards.greenhouse.io/company/jobs/456 | Company Inc | Senior PM
- [!] https://private.url/job — Error: login required

## Processed
- [x] #143 | https://jobs.example.com/posting/789 | Acme Corp | AI PM | 4.2/5 | PDF ✅
- [x] #144 | https://boards.greenhouse.io/xyz/jobs/012 | BigCo | SA | 2.1/5 | PDF ❌
```

## Smart JD detection from URL

1. **Playwright (preferred):** `browser_navigate` + `browser_snapshot`. Works with all SPAs.
2. **WebFetch (fallback):** For static pages or when Playwright unavailable.
3. **WebSearch (last resort):** Search secondary portals that index the JD.

**Special cases:**
- **LinkedIn**: May require login → mark `[!]` and ask user to paste text
- **PDF**: If URL points to PDF, read directly with Read tool
- **`local:` prefix**: Read local file. Example: `local:jds/linkedin-pm-ai.md` → read `jds/linkedin-pm-ai.md`

## Auto-numbering

1. List all files in `reports/`
2. Extract prefix number (e.g., `142-medispend...` → 142)
3. New number = max found + 1

## Sync verification

Before processing any URL, verify sync:
```bash
node cv-sync-check.mjs
```
If out of sync, warn user before continuing.
