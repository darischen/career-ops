# Batch Apply — The Judge

> The judge is a **deterministic Node script**, `batch/judge.mjs`. It is NOT an
> LLM agent. An earlier design used a persistent Haiku judge; it was replaced so
> format validation is reproducible and free.

## What it is

`judge.mjs` is a background process that gates writes to `output/batch.txt`. It
validates each worker output with regex, appends approved blocks, and sends
structured feedback for rejects. It costs **zero tokens**.

```bash
Bash({ command: "node batch/judge.mjs", run_in_background: true });
```

## Loop

```
while true:
  for each batch/pending/{id}-output.json:
    issues = validate(output)
    if issues empty:
      append recommendation_block + csv_line + separator → output/batch.txt
      append essay_answers → output/essay.txt   (if non-empty)
      delete {id}-output.json
      delete {id}-feedback.json                 (clear any stale reject)
      print "[id] APPROVED → batch.txt"
    else:
      write {id}-feedback.json with the issues  (worker re-reads and retries)
      print "[id] REJECTED → feedback sent"
  exit when conductor-done.txt exists AND no *-output.json AND no *-feedback.json
  sleep 3s
```

## Validation rules (`validateOutput`)

**Required JSON fields:** `job_id`, `company`, `role`, `recommendation_block`,
`csv_line`, `resume_code`.

**Recommendation block** (`validateRecommendationBlock`):
- has header separator `━━━`
- has title `📄 RESUME RECOMMENDATION`
- title matches `RECOMMENDATION — <Company> | <Role>` (company may be multi-word)
- has `Keyword Scores`
- has `Recommended:` (or `Resume: AI|SWE|EE|WD`)
- has `Confidence: NN/100`
- has `Top 3 Signals`
- has `Why This Resume`
- has a footer separator `━━━`

**CSV line** (`validateCsvLine`):
- ends with the fixed suffix `,Career Ops,,,,CODE` where CODE ∈ AI|SWE|EE|WD.
  Company/Title may contain commas if double-quoted (e.g.
  `Acme,"Engineer, Backend",Career Ops,,,,SWE`) — the suffix is validated, not
  the column count, so commas in titles do not cause false rejects.
- has a Company and Title before the suffix
- CODE matches the `Recommended:` code in the block (consistency check)

## Why a script instead of an LLM judge

- **Zero tokens** — format checking is mechanical.
- **Reproducible** — same input always gives the same verdict.
- **No "two judges" ambiguity** — one deterministic gate.

The em-dash in the header token `📄 RESUME RECOMMENDATION — Company | Role` is an
allowed structural label (the no-em-dash rule governs generated prose only); the
validator's title regex expects it.

## Feedback file shape

```json
{
  "job_id": "001",
  "timestamp": "2026-...",
  "issues": ["Missing 'Confidence: XX/100' line", "..."],
  "message": "Please fix the following issues and rewrite 001-output.json"
}
```
