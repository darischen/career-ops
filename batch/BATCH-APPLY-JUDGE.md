# Batch Apply with Judge Pattern

## Overview

Quality control for batch applications using a persistent **Judge Haiku** agent that validates all outputs before they're committed to `output/batch.txt`.

### Architecture

```
┌──────────────────────────────────────────────────────────┐
│                    Judge Haiku (Persistent)              │
│  - Reads from: batch/temp/{id}-recommendation.txt        │
│  - Reads from: batch/temp/{id}-csv.txt                   │
│  - Validates format, completeness, consistency           │
│  - Writes to: batch/temp/{id}-approved.txt OR            │
│  - Writes to: batch/temp/{id}-rejected.txt (w/ feedback) │
│  - Exits when all subagents signal completion            │
└──────────────────────────────────────────────────────────┘
  ▲                    ▲                    ▲
  │                    │                    │
  └─────────┬──────────┴─────────┬──────────┘
            │                    │
     ┌──────▼──────┐     ┌──────▼──────┐
     │ Subagent 1  │     │ Subagent 2  │  ...
     │ (Anthropic) │     │ (Vercel)    │
     │ Haiku       │     │ Haiku       │
     └─────────────┘     └─────────────┘

Flow:
1. Subagent generates recommendation + CSV
2. Writes to batch/temp/{id}-recommendation.txt and batch/temp/{id}-csv.txt
3. Judge reads and validates
4. Judge writes approval/rejection to batch/temp/{id}
5. If approved: subagent signals done, judge moves to next
6. If rejected: subagent fixes and retries
7. Judge exits when all subagents done
```

## Job Flow

### Subagent Lifecycle

```
START
  ↓
Generate Resume Recommendation
  ↓
Generate CSV Line
  ↓
Write to batch/temp/{id}-recommendation.txt
Write to batch/temp/{id}-csv.txt
  ↓
WAIT FOR JUDGE FEEDBACK
  ├─ batch/temp/{id}-approved.txt exists? → DONE
  └─ batch/temp/{id}-rejected.txt exists? → READ FEEDBACK → RETRY
  
IF REJECTED: Read feedback, fix issues, repeat from "Generate"
IF APPROVED: Write batch/temp/{id}-done.txt, EXIT
```

### Judge Lifecycle

```
START (persistent, run_in_background)
  ↓
LOOP:
  1. Check batch/temp/ for pending outputs
  2. For each {id}-recommendation.txt + {id}-csv.txt pair:
     - Validate format
     - Validate completeness
     - Validate consistency (CSV resume matches recommendation)
  3. Write result:
     - If valid: batch/temp/{id}-approved.txt (with ✓)
     - If invalid: batch/temp/{id}-rejected.txt (with ✗ + feedback)
  4. Once approved, move to output/batch.txt
  5. Check if all subagents done (all batch/temp/{id}-done.txt exist)
  6. If all done: EXIT
  7. Otherwise: sleep 2 seconds, repeat

VALIDATION CHECKLIST:
✓ Recommendation has header (━━━)
✓ Recommendation has title (📄 RESUME RECOMMENDATION — Company)
✓ Recommendation has keyword scores (AI/SWE/EE/WD pts)
✓ Recommendation has recommended resume (AI|SWE|EE|WD)
✓ Recommendation has confidence (XX/100)
✓ Recommendation has top 3 signals
✓ Recommendation has explanation
✓ Recommendation has footer (━━━)
✓ CSV format: Company,Title,Career Ops,,,,CODE
✓ CSV resume code matches recommendation
✓ CSV is exactly formatted (copy-paste ready)
```

## Temp File Format

Subagents write to `batch/temp/{id}-*`:

### batch/temp/001-recommendation.txt
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 RESUME RECOMMENDATION — Anthropic
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
Your background in building production agent systems directly matches
their need for someone who can architect agent workflows at scale.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### batch/temp/001-csv.txt
```
Anthropic,Software Engineer - Agent Architecture,Career Ops,,,,AI
```

### batch/temp/001-approved.txt (Judge writes)
```
✓ APPROVED

All validation checks passed:
- Recommendation format complete
- CSV format correct
- Resume code matches (AI)
- Ready to commit to output/batch.txt
```

### batch/temp/001-rejected.txt (Judge writes)
```
✗ REJECTED

Issues found:
1. CSV format incorrect: "Anthropic,Software Engineer,..." has extra space after comma
   Fix: Remove space after commas

2. Keyword Scores header missing punctuation
   Current: "AI: 45 pts | SWE: 22 pts"
   Expected: "AI: 45 pts | SWE: 22 pts | EE: 5 pts | WD: 3 pts"
   Fix: Include all 4 resume types

Retry and resubmit to batch/temp/001-recommendation.txt + batch/temp/001-csv.txt
```

### batch/temp/001-done.txt (Subagent writes when approved)
```
COMPLETED
Subagent 001 finished successfully
```

## Advantages

**Quality Control:**
- Every output validated before commit
- Format consistency guaranteed
- CSV exactly copy-paste ready
- No malformed data in batch.txt

**Retry Logic:**
- Subagents retry on rejection with feedback
- Judge provides specific guidance
- Reduces manual cleanup

**Cost Efficiency:**
- Both judge and subagents use Haiku (lightweight)
- Judge runs once, validates all outputs
- Parallelization: subagents run while judge validates

**Observability:**
- Temp files show exact validation state
- Easy to debug specific rejections
- Clear completion tracking

## Error Scenarios

### Scenario 1: Format Issue
```
Subagent writes CSV: "Anthropic, Software Engineer, Career Ops"
Judge rejects: "Extra space after company name"
Subagent reads feedback, rewrites: "Anthropic,Software Engineer,Career Ops"
Judge approves, moves to output/batch.txt
```

### Scenario 2: Incomplete Recommendation
```
Subagent writes: Missing "Why This Resume" section
Judge rejects: "Section 'Why This Resume' missing, need 2-3 sentence explanation"
Subagent reads feedback, adds section
Judge approves
```

### Scenario 3: Resume Code Mismatch
```
Subagent writes:
  Recommendation: "Recommended: AI Resume"
  CSV: "...,,SWE"
Judge rejects: "Resume code in CSV (SWE) doesn't match recommendation (AI)"
Subagent fixes CSV to match
Judge approves
```

## Judge Validation Rules

### Resume Recommendation (8 sections required)

1. **Header** — `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
2. **Title** — `📄 RESUME RECOMMENDATION — [Company Name]`
3. **Keyword Scores** — `AI: XX pts | SWE: XX pts | EE: XX pts | WD: XX pts`
4. **Recommended** — `[AI|SWE|EE|WD] Resume` (must be one of these 4)
5. **Confidence** — `XX/100` (0-100 integer)
6. **Top 3 Signals** — 3 concrete points from job description
7. **Why This Resume** — 2-3 sentence explanation with actual reasoning
8. **Footer** — `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

### CSV Line (exact format required)

```
Company,Title,Site Found,Date,Tag,Notes,Resume Used
```

Rules:
- Company: actual company name (no special chars)
- Title: actual job title (no commas)
- Site Found: **always** `Career Ops`
- Date: **always** blank
- Tag: **always** blank
- Notes: **always** blank
- Resume Used: **exactly** AI/SWE/EE/WD (must match recommendation)
- No spaces after commas
- No extra punctuation
- Copy-paste ready

### Consistency Check

- CSV Resume code (last column) must match recommended resume type
- Example: If recommendation says "AI Resume", CSV must end with `,AI`

## Usage

When running batch-apply-interactive.mjs, it shows the execution plan:

```bash
node batch/batch-apply-interactive.mjs https://link1 https://link2 https://link3
```

This prints:
1. Judge agent setup (to spawn with Agent tool, run_in_background)
2. Subagent setups (one per job link, run_in_background)
3. Temp file structure for inter-agent communication
4. Final output location: output/batch.txt

**In practice:**
```javascript
// Spawn the judge (persistent)
Agent({
  description: "Judge for batch apply outputs",
  subagent_type: "haiku",  // Use smallest model
  prompt: buildJudgePrompt(3),  // 3 subagents
  run_in_background: true
});

// Spawn subagents (parallel)
for (let i = 1; i <= 3; i++) {
  Agent({
    description: `Apply to job ${i}`,
    subagent_type: "haiku",  // Use smallest model
    prompt: buildSubagentPrompt(i, company, url),
    run_in_background: true
  });
}

// Judge will validate all outputs and exit when done
```

## Cost Analysis

**3 jobs with judge pattern:**

```
Judge Haiku:     ~2,000 tokens (validates all 3)       = $0.003
Subagent 1:      ~1,500 tokens (generates + validate) = $0.002
Subagent 2:      ~1,500 tokens (hit cache, cheaper)  = $0.001
Subagent 3:      ~1,500 tokens (hit cache, cheaper)  = $0.001
─────────────────────────────────────────────
Total:                                               ≈ $0.007

Without judge:   ~$0.10 (no validation, possible retries needed)
With judge:      ~$0.015 (validated first time, no manual cleanup)
```

Judge cost is negligible but saves manual validation work.

## Troubleshooting

**"All subagents stuck waiting for judge"**
- Check if judge agent is running
- Check batch/temp/ exists and is readable
- Judge may need more time (increase validation loop sleep)

**"Judge exits before all subagents done"**
- Subagents may be slower than judge expects
- Increase judge timeout or add delay before exit check
- Judge should wait ~1 min after last completion before exiting

**"CSV rejected repeatedly"**
- Check for spaces after commas: `Company, Title` → `Company,Title`
- Ensure resume code is exactly AI/SWE/EE/WD
- Run example CSV through judge's validation logic

**"Recommendation rejected for missing section"**
- All 8 sections required (header, title, scores, recommended, confidence, signals, why, footer)
- Check template in BATCH-APPLY-JUDGE-PATTERN.md
- Each section must be on separate lines

## Next Steps

1. Spawn judge with Agent tool + run_in_background
2. Spawn subagents with Agent tool + run_in_background
3. Monitor batch/temp/ for validation state
4. Check output/batch.txt for final results once judge exits
