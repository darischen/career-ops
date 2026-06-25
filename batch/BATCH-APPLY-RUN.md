# Batch Apply — How to Run

> Reflects `batch/batch-apply.mjs`. The entry script is `batch-apply.mjs`
> (there is no `batch-apply-interactive.mjs`).

## 1. Generate the spawn plan

```bash
node batch/batch-apply.mjs https://url1 https://url2 https://url3
# or
node batch/batch-apply.mjs batch-apply-input.txt
```

This wipes any stale `batch/pending/`, builds the job list, prints the 4-phase
plan, and writes full prompts to `batch/pending-plan.json`.

## 2. Spawn the agents (in order)

**Step 1 — Conductor (foreground, blocks until done).**

```javascript
Agent({
  description: "Conductor: extract JDs sequentially",
  subagent_type: "general-purpose",
  prompt: `[conductor_prompt from batch/pending-plan.json]`,
  run_in_background: false
});
```

The conductor uses Playwright ONE url at a time and writes
`batch/pending/{id}-jd.txt`, then `conductor-done.txt`.

**Step 1.5 — Cache prime.** `primeCache()` (inside `batch-apply.mjs`) makes one
tiny Haiku call that caches `apply.md + cv.md + 4 PDFs`. It runs after the
conductor and right before workers. It logs `Cache write: N tokens` — if `N == 0`
the prefix did not cache.

**Step 2 — Judge (background, deterministic script — NOT an LLM agent).**

```javascript
Bash({ command: "node batch/judge.mjs", run_in_background: true });
```

`judge.mjs` polls `batch/pending/*-output.json`, validates format with regex,
appends approved blocks to `output/batch.txt`, writes `{id}-feedback.json` for
rejects, and exits when `conductor-done.txt` exists and no outputs/feedback
remain.

**Step 3 — Workers (background, parallel, Haiku).**

```javascript
for (const job of jobs) {
  Agent({
    description: `Worker: ${job.company} — [${job.id}]`,
    subagent_type: "haiku",
    prompt: `[subagent_prompt for this job from pending-plan.json]`,
    run_in_background: true
  });
}
```

Each worker (no browser): reads its `{id}-jd.txt`, reads the cached PDFs, scores
AI/SWE/EE/WD, writes `{id}-output.json`, then polls `{id}-feedback.json` and
retries on reject. When its `output.json` is deleted, the judge approved it.

## 3. Inter-agent files (`batch/pending/`)

| File | Writer | Reader |
|------|--------|--------|
| `{id}-jd.txt` | Conductor | Worker |
| `conductor-done.txt` | Conductor | Judge |
| `{id}-output.json` | Worker | Judge |
| `{id}-feedback.json` | Judge | Worker (retry) |

All of `batch/pending/` is deleted at the end (triple-redundant cleanup:
startup sweep, judge delete-on-approve, process exit hooks).

## 4. Results

```bash
cat output/batch.txt    # recommendation blocks + CSV lines
cat output/essay.txt    # essay answers (when forms were detected)
```

## Timing

Conductor is sequential (~30s/URL). Workers run in parallel and finish within the
5-minute cache window. Judge validates continuously and exits when all jobs are
approved.
