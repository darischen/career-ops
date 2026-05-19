# Batch Apply Orchestration — How to Run

## Quick Start

```bash
node batch/batch-apply-interactive.mjs https://anthropic.com/careers/... https://vercel.com/careers/... https://huggingface.co/jobs/...
```

This prints out the Agent spawn commands you need to copy/paste.

## Architecture Overview

```
┌─────────────────────────────┐
│  batch-apply-interactive    │  ← You run this once
│  .mjs                       │
└──────────────┬──────────────┘
               │ prints spawn commands
               ▼
┌─────────────────────────────────────────────┐
│ You manually spawn these agents:            │
│                                             │
│ 1. Agent with Judge Haiku (persistent)     │
│ 2. Agent with Subagent 001 Haiku (worker) │
│ 3. Agent with Subagent 002 Haiku (worker) │
│ 4. Agent with Subagent 003 Haiku (worker) │
│ ... (one per job)                          │
└────────────────┬────────────────────────────┘
                 │ all run in background
                 ▼
         Temp file communication:
         
         Subagents write:
         ├─ batch/temp/001-recommendation.txt
         ├─ batch/temp/001-csv.txt
         ├─ batch/temp/002-recommendation.txt
         ├─ batch/temp/002-csv.txt
         └─ ...
         
         Judge reads, validates, writes:
         ├─ batch/temp/001-approved.txt (or -rejected.txt)
         ├─ batch/temp/002-approved.txt (or -rejected.txt)
         └─ ...
         
         Subagents read feedback, retry if needed:
         └─ Once approved, write batch/temp/{id}-done.txt
         
         Judge moves approved outputs to:
         └─ output/batch.txt
         
         Judge exits when all subagents done
```

## Step-by-Step Execution

### Step 1: Generate Orchestration Plan

```bash
$ node batch/batch-apply-interactive.mjs batch-apply-interactive-input.txt
```

Output:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Career-Ops Batch Apply Interactive (with Judge Pattern)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Loaded CV (2847 chars)
✓ Found 3 job links
✓ Spawning: 1 Judge Haiku + 3 Subagent Haikus

Planned Execution:

  [001] Anthropic
       URL: https://anthropic.com/careers/...
  [002] Vercel
       URL: https://vercel.com/careers/...
  [003] Hugging Face
       URL: https://huggingface.co/jobs/...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
READY: Spawn with Agent tool (run_in_background)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example spawn pattern:

// Judge agent (persistent, validates all)
Agent({
  description: "Judge for batch apply outputs",
  subagent_type: "judge-haiku",
  prompt: "[full judge prompt]",
  run_in_background: true
});

// Subagent haikus (parallel, one per job)
Agent({
  description: "Apply to Anthropic — 001",
  subagent_type: "apply-worker-haiku",
  prompt: "[generates outputs, submits to judge, retries if rejected]",
  run_in_background: true
});

... (more subagents)
```

### Step 2: Spawn Judge Agent

Copy the judge spawn command and run it in Claude Code:

```javascript
Agent({
  description: "Judge for batch apply outputs",
  subagent_type: "judge-haiku",
  prompt: `You are a quality judge for batch job applications...
  
VALIDATION RULES:

Resume Recommendation block MUST have:
1. Header: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
2. Title: "📄 RESUME RECOMMENDATION — [Company Name]"
3. Keyword Scores: "AI: XX pts | SWE: XX pts | EE: XX pts | WD: XX pts"
4. Recommended: "[AI|SWE|EE|WD] Resume"
5. Confidence: "XX/100"
6. Top 3 Signals: 3 concrete signals from JD
7. Why This Resume: 2-3 sentence explanation
8. Footer: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

CSV Line MUST have:
- Format: Company,Title,Site Found,Date,Tag,Notes,Resume Used
- Company: actual company name
- Title: actual job title
- Site Found: "Career Ops" (always)
- Date: blank
- Tag: blank
- Notes: blank
- Resume Used: AI/SWE/EE/WD code (must match recommendation)

VALIDATION PROCESS:
1. Read subagent output from batch/temp/{id}-recommendation.txt and batch/temp/{id}-csv.txt
2. Check each requirement above
3. If ALL requirements met: write ✓ to batch/temp/{id}-approved.txt
4. If ANY requirement missing: write ✗ + reason to batch/temp/{id}-rejected.txt
5. Track completion: when you see batch/temp/{id}-done.txt for all 3 IDs, exit

LOOP until all subagents done...`,
  run_in_background: true
});
```

Judge starts immediately and waits for subagent outputs in batch/temp/.

### Step 3: Spawn Subagent Haikus (in parallel)

Copy each subagent spawn command:

```javascript
// Subagent 1
Agent({
  description: "Apply to Anthropic — 001",
  subagent_type: "apply-worker-haiku",
  prompt: `CRITICAL: Follow apply.md EXACTLY...
  
URL: https://anthropic.com/careers/...

You will write your outputs to:
- batch/temp/001-recommendation.txt (resume block)
- batch/temp/001-csv.txt (CSV line)
- Then wait for judge feedback...

WORKFLOW:
1. Extract job description from URL
2. Identify company and role
3. Score resume matches (AI/SWE/EE/WD)
4. Generate recommendation block
5. Generate CSV line
6. Write both to temp files
7. Wait for judge validation
8. If rejected, read feedback and retry
9. If approved, signal completion`,
  run_in_background: true
});

// Subagent 2 (similar, different URL + ID)
Agent({
  description: "Apply to Vercel — 002",
  subagent_type: "apply-worker-haiku",
  prompt: `[same structure, different URL and ID 002]`,
  run_in_background: true
});

// Subagent 3
Agent({
  description: "Apply to Hugging Face — 003",
  subagent_type: "apply-worker-haiku",
  prompt: `[same structure, different URL and ID 003]`,
  run_in_background: true
});
```

All subagents start in parallel.

### Step 4: Monitor Progress

Check `batch/temp/` directory in real-time:

**Early state (subagents working):**
```
batch/temp/
├── 001-recommendation.txt (subagent 1 generated)
├── 001-csv.txt (subagent 1 generated)
├── 002-recommendation.txt (subagent 2 generated)
├── 002-csv.txt (subagent 2 generated)
├── 003-recommendation.txt (subagent 3 generated)
└── 003-csv.txt (subagent 3 generated)
```

**Judge validating:**
```
batch/temp/
├── 001-approved.txt ✓ (judge validated)
├── 001-recommendation.txt
├── 001-csv.txt
├── 002-rejected.txt ✗ (judge found issues, subagent will retry)
├── 002-recommendation.txt
├── 002-csv.txt
├── 003-approved.txt ✓
├── 003-recommendation.txt
└── 003-csv.txt
```

**After rejections fixed:**
```
batch/temp/
├── 001-done.txt ✓ (subagent 1 completed)
├── 002-approved.txt ✓ (fixed and approved)
├── 002-done.txt ✓ (subagent 2 completed)
├── 003-done.txt ✓ (subagent 3 completed)
... (approved recommendations moved to output/batch.txt)
```

**Final state (judge exits):**
- All batch/temp/{id}-done.txt exist
- Judge sees all done, moves remaining approved to output/batch.txt, exits
- output/batch.txt contains all validated recommendations + CSV lines

### Step 5: Review Final Output

```bash
cat output/batch.txt
```

Shows:
```
BATCH APPLY SESSION - 2026-05-15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 RESUME RECOMMENDATION — Anthropic
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keyword Scores:
  AI: 45 pts | SWE: 22 pts | EE: 5 pts | WD: 3 pts

Recommended: AI Resume
Confidence: 95/100

...full recommendation...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Anthropic,Software Engineer - Agent Architecture,Career Ops,,,,AI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 RESUME RECOMMENDATION — Vercel
...
```

Copy relevant CSV lines into your tracker.

## Timing

- **Subagent 1 starts:** T+0 (creates cache)
- **Subagent 2 starts:** T+1 (hits cache, 90% cheaper)
- **Subagent 3 starts:** T+2 (hits cache, 90% cheaper)
- **Judge validates:** Continuously as outputs arrive
- **All done:** T+5-8 minutes (depends on job complexity)
- **Judge exits:** Once all 3 subagents signal done

Total time: ~5-10 minutes for 3 jobs vs. ~25 minutes sequentially.

## What Each Agent Does

**Judge Haiku:**
- 📋 Reads recommendations and CSV lines
- ✅ Validates format and completeness
- 📝 Writes approval/rejection feedback
- 📦 Moves approved outputs to output/batch.txt
- 🚪 Exits when all subagents done
- Cost: ~$0.003 (validates all 3 jobs)

**Subagent Haiku (per job):**
- 🌐 Navigates job URL
- 📄 Extracts job description
- 🧠 Scores resume matches
- ✍️ Generates recommendation + CSV
- 🔄 Retries if judge rejects
- 📤 Signals completion
- Cost: ~$0.002-0.003 (with caching benefit)

## Workflow Guarantees

1. **No duplicate outputs** — Each subagent writes once, judge approves once
2. **No format errors in batch.txt** — Judge validates all before commit
3. **Automatic retry** — Judge feedback guides subagent corrections
4. **Complete tracking** — Every job gets a CSV line (even without form)
5. **Cache reuse** — Resume cached, used by all subagents within 5-min window

## Troubleshooting

**Judge not validating?**
- Check if judge agent is still running
- Check batch/temp/ directory exists
- Judge may be waiting for subagents to write files

**Subagents stuck?**
- Check if they're waiting for judge approval
- Check batch/temp/{id}-rejected.txt for feedback
- Subagents should read feedback and retry

**Output not appearing in batch.txt?**
- Judge may not have moved approved files yet
- Wait a bit (judge loops every 2 seconds)
- Check batch/temp/{id}-approved.txt exists

**Wrong CSV format?**
- Check judge feedback in batch/temp/{id}-rejected.txt
- Most common: extra spaces after commas
- Subagent should fix and resubmit

## Next Steps

1. Run: `node batch/batch-apply-interactive.mjs [input-file]`
2. Copy judge spawn command → run in Claude Code
3. Copy subagent spawn commands → run all in Claude Code (will start in background)
4. Monitor batch/temp/ for progress
5. Once judge exits, review output/batch.txt
6. Copy CSV lines into your tracker
