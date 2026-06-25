# Batch Apply — Overview

> **Canonical spec:** `modes/batch-apply.md`. This file is a short orientation.
> If anything here disagrees with `modes/batch-apply.md` or the code
> (`batch/batch-apply.mjs`, `batch/judge.mjs`), the code wins.

Apply to 2+ jobs in one pass. Auto-triggered when `/career-ops apply` detects 2+
job links. Resume matching + form extraction + personalized answers per job,
with a shared, cached resume context.

## Architecture (4 phases)

```
PHASE 1   Conductor (1 agent, SEQUENTIAL Playwright)
          Navigates each URL one at a time, extracts JD + form
          → batch/pending/{id}-jd.txt, then conductor-done.txt
          (No caching yet — would expire during this phase.)

PHASE 1.5 Cache Prime (1 tiny Haiku API call)
          apply.md + cv.md (cached system block) + 4 resume PDFs
          (cached document blocks). Starts the 5-min TTL clock
          right before workers need it.

PHASE 2   Workers (N Haiku subagents, PARALLEL, no browser)
          Each reads its own {id}-jd.txt, reads the cached PDFs,
          scores AI/SWE/EE/WD, writes {id}-output.json.

PHASE 3   Judge (batch/judge.mjs — DETERMINISTIC Node script, 0 tokens)
          Validates each output.json (regex), appends approved blocks
          to output/batch.txt, writes {id}-feedback.json for rejects.
```

## Key facts

- **Entry point:** `node batch/batch-apply.mjs <url1> <url2> ...` (or an input
  `.txt`). It prints the agent spawn plan and writes `batch/pending-plan.json`.
- **The judge is a script, not an LLM.** `batch/judge.mjs` validates format with
  regex. It costs zero tokens and is fully reproducible.
- **Only the conductor touches Playwright** (serial) — this avoids the tab-race
  that parallel browser access causes.
- **Only the judge writes `output/batch.txt`** — workers write isolated
  `{id}-output.json`, so concurrent writes never corrupt the tracker output.
- **Worker model is Haiku.** The task is matching + formatting, not heavy
  reasoning.

## Cost shape (Haiku 4.5)

The cache prime writes the shared prefix once (~1.25× input price). Each worker
then reads that prefix at ~0.1× instead of full price. The per-job JD is small
and billed at full price. Measure the real numbers on your own CV + PDFs:

```bash
ANTHROPIC_API_KEY=sk-... node batch/test-cache-savings.mjs
```

That harness runs NONE vs CV-ONLY vs APPLY-CV and prints actual
cache_creation / cache_read / input tokens plus a cost table.

## See also

- `modes/batch-apply.md` — full phase-by-phase spec (canonical)
- `batch/BATCH-APPLY-RUN.md` — how to spawn the agents
- `batch/BATCH-APPLY-JUDGE.md` — the deterministic judge
- `batch/BATCH-APPLY-CACHING.md` — caching mechanics + the test harness
