# Mode: batch-apply — Conductor + Workers + Judge

**Auto-triggered when `/career-ops apply` detects 2+ job links.**

Three-phase parallel apply with bulletproof Playwright safety, judge validation, and guaranteed temp file cleanup.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  PHASE 1 — Conductor (Sequential, ~30s per URL)            │
│  ──────────────────────────────────────────                │
│  Single agent uses Playwright ONE URL AT A TIME             │
│  Extracts JD + form questions → batch/pending/{id}-jd.txt  │
│  NO PROMPT CACHING YET (would expire during this phase)     │
│                                                             │
│              ↓ all JDs extracted                            │
│                                                             │
│  PHASE 1.5 — Cache Prime (Instant)                          │
│  ──────────────────────────────────────────                │
│  Make a tiny priming call with cv.md + 4 resume PDFs        │
│  marked cache_control: ephemeral. This starts the           │
│  5-minute Anthropic cache TTL clock fresh, RIGHT BEFORE     │
│  subagents need it.                                         │
│                                                             │
│              ↓ cache warm (T+0 of 5-min window)             │
│                                                             │
│  PHASE 2 — Worker Subagents (Parallel)        ┐            │
│  ──────────────────────────────────────────    │            │
│  N haiku subagents run simultaneously          │   PHASE 3  │
│  All hit the warm cache (90% cheaper)          │            │
│  Each reads its own jd.txt (text only)         │   Judge    │
│  Generate recommendation + CSV + essays        │            │
│  Write batch/pending/{id}-output.json          │  Validates │
│  Wait for judge feedback                       │  one at a  │
│                                                │   time     │
│              ↑                                  │            │
│              ↓ feedback loop                    │            │
│                                                │            │
│  Judge reads outputs sequentially              │            │
│  Validates → appends to batch.txt              │            │
│  Deletes approved output.json immediately      │            │
│  Or sends feedback.json → subagent retries     │            │
│                                                ┘            │
└─────────────────────────────────────────────────────────────┘
```

## Cache Timing — Why Phase 1.5 Matters

Anthropic's prompt cache TTL is **5 minutes**. If we cached cv.md + PDFs during Phase 1:
- Conductor takes ~30s × N URLs (3 URLs = 90s, 5 URLs = 150s)
- By the time workers start, 30-50% of cache window already burned
- Worst case (10 URLs): conductor exceeds 5 min, cache expires before workers start

**Solution:** Cache AFTER conductor, BEFORE workers spawn. Full 5-minute window available for parallel worker execution.

## Why This Architecture

**Problem 1: Playwright is shared.** Multiple subagents calling `browser_navigate` simultaneously corrupt each other's tabs.
- **Solution:** Only the conductor touches Playwright. Workers get text files.

**Problem 2: Concurrent writes to batch.txt corrupt the file.**
- **Solution:** Only the judge writes. Workers write isolated `{id}-output.json` files.

**Problem 3: Temp file bloat if process crashes.**
- **Solution:** Triple-redundant cleanup (immediate delete + exit hooks + startup sweep).

## Phase 1 — Conductor (SKIP if JDs already provided)

**Skip condition:** If apply-router routed here with pre-extracted JD text (Case E from apply-router.md), skip Phase 1 entirely. Write each pasted JD directly to `batch/pending/{id}-jd.txt` using this format:

```
---COMPANY---
[parse from JD or ask user]
---ROLE---
[parse from JD or ask user]
---JD---
[full pasted JD text]
---FORM---
NO_FORM_DETECTED
```

Then write `batch/pending/conductor-done.txt` immediately and proceed to Phase 2.

**Otherwise (URL-based batch):** Spawn **one** agent (foreground, blocks until done):

```javascript
Agent({
  description: "Conductor: extract JDs sequentially",
  subagent_type: "general-purpose",
  prompt: `[from batch/pending-plan.json]`,
  run_in_background: false  // Wait for all JDs extracted
});
```

Conductor processes URLs **sequentially**:
1. `browser_navigate` to URL
2. `browser_snapshot` to read page
3. Extract: company, role, JD text, form questions
4. Write `batch/pending/{id}-jd.txt`:
   ```
   ---COMPANY---
   Anthropic
   ---ROLE---
   Software Engineer - Agent Architecture
   ---JD---
   [full job description text]
   ---FORM---
   [essay questions, or "NO_FORM_DETECTED"]
   ```
5. Move to next URL

When done: writes `batch/pending/conductor-done.txt` (signal to judge).

## Phase 1.5 — Cache Prime

**Run IMMEDIATELY after conductor finishes, IMMEDIATELY before spawning workers.**

Make a single lightweight Haiku call that includes cv.md + all 4 resume PDFs in the system prompt with `cache_control: { type: "ephemeral" }`. This populates the cache so workers in Phase 2 hit it for 90% cheaper input tokens.

```javascript
// Pseudocode for the priming call
await client.messages.create({
  model: "claude-haiku-4-5",
  max_tokens: 50,  // Trivial response — we just want the cache write
  system: [
    { type: "text", text: "You are a cache-priming agent." },
    {
      type: "text",
      text: cvContent + "\n\n" + pdf1 + "\n\n" + pdf2 + "\n\n" + pdf3 + "\n\n" + pdf4,
      cache_control: { type: "ephemeral" }
    }
  ],
  messages: [{ role: "user", content: "Acknowledge cache prime." }]
});
```

After this returns: cache is warm, 5-minute TTL clock starts. Spawn workers IMMEDIATELY.

**Cost:** ~$0.001 (one tiny call). **Savings:** ~$0.30 per batch of 5 jobs.

**Files cached:**
- `cv.md` (project root)
- `C:\Users\daris\Downloads\DarisChenResumeAI.pdf`
- `C:\Users\daris\Downloads\DarisChenResumeSWE.pdf`
- `C:\Users\daris\Downloads\DarisChenResumeEE.pdf`
- `C:\Users\daris\Downloads\DarisChenResumeWD.pdf`

---

## Phase 2 — Worker Subagents

### MANDATORY Subagent Prompt Prefix

**Every worker subagent MUST receive this exact prefix at the start of its prompt:**

```
When using the apply command, you must follow all instructions in apply.md exactly.

The TWO MOST IMPORTANT parts of apply.md are:
  1. CSV output (Company,Title,Career Ops,,,,Code)
  2. Resume recommendation with selective PDF reading

If you are unable to see the form or any essay questions but have generated a
resume recommendation, output the CSV anyway.

CACHED CONTEXT (use these directly, do NOT re-read from disk):
- cv.md is in your prompt cache
- All four resume PDFs are in your prompt cache:
  - C:\Users\daris\Downloads\DarisChenResumeAI.pdf
  - C:\Users\daris\Downloads\DarisChenResumeSWE.pdf
  - C:\Users\daris\Downloads\DarisChenResumeEE.pdf
  - C:\Users\daris\Downloads\DarisChenResumeWD.pdf

Read each PDF FULLY from cache before generating the recommendation. If keyword
scores are within 10 points of each other, you MUST analyze both top PDFs to
disambiguate. Only skip PDF reading if one resume leads by 10+ points.

Do NOT use Playwright or any browser tool. The job description is already
extracted at batch/pending/{id}-jd.txt.
```

This prefix is concatenated with the per-job workflow below.

### Spawn N agents in parallel (background):

```javascript
for (const job of jobs) {
  Agent({
    description: `Worker: ${job.company} — [${job.id}]`,
    subagent_type: "haiku",
    prompt: `${MANDATORY_PREFIX}\n\n${perJobPrompt}`,  // prefix + workflow
    run_in_background: true
  });
}
```

Each worker (no browser access):
1. Read `batch/pending/{id}-jd.txt`
2. Score resume matches (AI/SWE/EE/WD)
3. If top 2 within 10 pts: read PDFs fully from cached system prompt
4. Generate recommendation block (8 sections):
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📄 RESUME RECOMMENDATION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   Keyword Scores:
     AI: XX pts | SWE: XX pts | EE: XX pts | WD: XX pts

   Recommended: [AI|SWE|EE|WD] Resume
   Confidence: XX/100

   Top 3 Signals:
     1. [signal from JD]
     2. [signal from JD]
     3. [signal from JD]

   Why This Resume:
   [2-3 sentence explanation]
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```
5. Generate CSV line: `Company,Role,Career Ops,,,,CODE`
6. Generate essay answers (only if FORM != "NO_FORM_DETECTED")
7. Write `batch/pending/{id}-output.json`:
   ```json
   {
     "job_id": "001",
     "company": "Anthropic",
     "role": "Software Engineer - Agent Architecture",
     "recommendation_block": "[full recommendation block text above, with all headers and separators]",
     "csv_line": "Anthropic,Software Engineer - Agent Architecture,Career Ops,,,,AI",
     "essay_answers": "[markdown formatted essay answers or empty string if no form questions]",
     "resume_code": "AI"
   }
   ```
   **CRITICAL**: `recommendation_block` must be the FULL text including the header separators (━), title, scores, and explanation.
8. Poll `batch/pending/{id}-feedback.json` every 3s
   - If exists: read feedback, fix output, rewrite output.json
   - If output.json was deleted: judge approved, exit

## Phase 3 — Judge

Spawn **one** agent (background, persistent):

```javascript
Agent({
  description: "Judge: validate outputs",
  subagent_type: "haiku",
  prompt: `[from batch/pending-plan.json]`,
  run_in_background: true
});
```

Judge loop (sequential, no concurrent processing):
1. Watch `batch/pending/*-output.json`
2. For each, validate:
   - Recommendation block has 8 sections
   - CSV format correct (Company,Role,Career Ops,,,,CODE)
   - Resume code matches recommendation
   - Header includes "Company | Role"
3. **If valid (CRITICAL — append in exact order):**
   - **APPEND** (not overwrite) `recommendation_block` to `output/batch.txt`
   - **APPEND** blank line to `output/batch.txt`
   - **APPEND** `csv_line` to `output/batch.txt`
   - **APPEND** separator (`────────────────────────────────────────────────────────────────────────────────`) to `output/batch.txt`
   - **APPEND** (not overwrite) `essay_answers` to `output/essay.txt` (if non-empty)
     - **Format**: `## {Company} — {Role}\n\n{essay_answers}\n\n`
   - **Delete** `batch/pending/{id}-output.json`
   - Print: `[id] APPROVED → batch.txt`
4. **If invalid:**
   - Write `batch/pending/{id}-feedback.json` with specific issues
   - Print: `[id] REJECTED → feedback sent`
   - DON'T delete output.json (subagent overwrites after fix)

Exit when:
- `batch/pending/conductor-done.txt` exists
- All `*-output.json` files approved AND deleted
- No outstanding feedback files

## Cleanup Guarantees

```javascript
// Triple-redundant in batch-apply.mjs:

// 1. Startup sweep (kills stale files from prior crash)
ensurePendingDir();  // rmSync + mkdir

// 2. Judge deletes immediately on approval
fs.unlinkSync(`batch/pending/${id}-output.json`);

// 3. Process exit hooks (always fire)
process.on("exit", cleanupPending);
process.on("SIGINT", () => { cleanupPending(); process.exit(130); });
process.on("SIGTERM", () => { cleanupPending(); process.exit(143); });
process.on("uncaughtException", (e) => {
  cleanupPending();
  console.error(e);
  process.exit(1);
});
```

**Worst case (crash during execution):**
- Files left in `batch/pending/`
- Next run: `ensurePendingDir()` wipes them at startup
- No accumulation possible

## File Lifecycle

```
T+0    batch/pending/ (empty, freshly created)
T+1    Conductor writes:
         batch/pending/001-jd.txt
         batch/pending/002-jd.txt
         batch/pending/003-jd.txt
         batch/pending/conductor-done.txt
T+2    Workers write:
         batch/pending/001-output.json
         batch/pending/002-output.json
         batch/pending/003-output.json
T+3    Judge processes 001 → APPROVED:
         batch/pending/001-output.json (DELETED)
         output/batch.txt (appended)
T+4    Judge processes 002 → REJECTED:
         batch/pending/002-feedback.json (created)
         worker reads feedback, fixes 002-output.json
T+5    Judge re-processes 002 → APPROVED:
         batch/pending/002-output.json (DELETED)
         batch/pending/002-feedback.json (DELETED)
T+6    Judge processes 003 → APPROVED → DELETED
T+7    Judge exits (all done)
T+8    Orchestrator exit hook:
         batch/pending/ (DELETED entirely)
```

## Usage

Auto-routed from `/career-ops apply` when 2+ links detected:

```bash
/career-ops apply https://link1.com https://link2.com https://link3.com
```

Or run directly:
```bash
node batch/batch-apply.mjs https://link1.com https://link2.com https://link3.com
node batch/batch-apply.mjs batch-apply-input.txt
```

The script:
1. Validates input
2. Wipes any stale `batch/pending/`
3. Saves spawn plan to `batch/pending-plan.json`
4. Prints agent spawn commands

You then spawn:
1. Conductor (foreground, wait)
2. Judge (background, persistent)
3. N workers (background, parallel)

## Output Files

| File | Owner | Lifecycle |
|------|-------|-----------|
| `output/batch.txt` | Judge | Appended, persists |
| `output/essay.txt` | Judge | Appended, persists |
| `batch/pending/{id}-jd.txt` | Conductor | Deleted at end |
| `batch/pending/{id}-output.json` | Worker | Deleted on approval |
| `batch/pending/{id}-feedback.json` | Judge | Deleted on approval |
| `batch/pending/conductor-done.txt` | Conductor | Deleted at end |
| `batch/pending-plan.json` | Orchestrator | Deleted at end |

## batch.txt Format

Judge writes for each approved job:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 RESUME RECOMMENDATION — Anthropic | Software Engineer - Agent Architecture
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keyword Scores:
  AI: 45 pts | SWE: 22 pts | EE: 5 pts | WD: 3 pts

Recommended: AI Resume
Confidence: 95/100

Top 3 Signals:
  1. agent architecture
  2. multi-agent orchestration
  3. production reliability

Why This Resume:
[2-3 sentence explanation]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Anthropic,Software Engineer - Agent Architecture,Career Ops,,,,AI

────────────────────────────────────────────────────────────────────────────────
```

Each company clearly identified with **Company | Role** in header.

## Global Rules

1. **NEVER modify cv.md** — read-only
2. **NEVER modify apply.md** — read-only, all changes via subagent prompt
3. **NEVER allow concurrent Playwright** — conductor is the only browser user
4. **NEVER allow concurrent batch.txt writes** — only judge writes
5. **ALWAYS clean batch/pending/** — triple-redundant cleanup hooks
6. **ALWAYS use Haiku for workers + judge** — not reasoning-intensive
7. **ALWAYS validate before commit** — judge gates batch.txt writes
