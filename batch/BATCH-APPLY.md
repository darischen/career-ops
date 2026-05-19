# Batch Apply Interactive — Parallel Applications with Cached Resume

## Overview

Apply to 2-5 jobs **in parallel** while leveraging **prompt caching** for 90% cheaper tokens. Each job gets full resume matching + form extraction + personalized answers, but they all share a cached resume in the system prompt.

### Key Difference from `batch-apply.mjs`

| Feature | `batch-apply.mjs` | `batch-apply-interactive` |
|---------|---|---|
| **Resume matching** | Generic template | Full AI/SWE/EE/WD scoring |
| **Form extraction** | Requires pre-saved form files | Reads live from page |
| **Parallelization** | Sequential | Parallel (subagents) |
| **Interactivity** | Offline (generate, review, apply) | Interactive (live form) |
| **Best for** | Bulk prep (20+ jobs) | Active applying (5 jobs now) |

**When to use batch-apply-interactive:**
- You're actively applying right now
- You have 2-5 jobs to apply to
- You want live form extraction + resume matching
- You want it all done in parallel

## Architecture

```
┌─────────────────────────────────────┐
│   System Prompt (Cached Prefix)     │
│  ┌────────────────────────────────┐ │
│  │ Apply Instructions             │ │
│  │ CV content    ← Cache Control  │ │
│  │ Profile       ← 5-min TTL      │ │
│  └────────────────────────────────┘ │
└──────────────┬──────────────────────┘
               │ (Shared across all subagents)
       ┌───────┴────────┬────────────┬────────────┐
       │                │            │            │
   Subagent 1       Subagent 2   Subagent 3   Subagent 4
   (Anthropic)      (Vercel)     (HuggingFace) (OpenAI)
   
   Each subagent:
   - Gets cached resume (90% cheaper)
   - Runs apply workflow independently
   - Saves to output/
   - Reports cache stats
   
   All run in PARALLEL (finish in ~5-10 min instead of 20-30)
```

## Setup

### 1. Create Input File

Option A: `batch/batch-apply-interactive-input.txt`
```
https://anthropic.com/careers/software-engineer-agent-architecture
https://vercel.com/careers/software-engineer-ai-sdk
https://huggingface.co/jobs/ml-engineer
```

Option B: Pass links directly to command

### 2. Ensure CV exists

Make sure `cv.md` is current in project root (this gets cached).

## Usage

### Via CLI

```bash
node batch/batch-apply-interactive.mjs batch-apply-interactive-input.txt
```

Or directly with links:

```bash
node batch/batch-apply-interactive.mjs \
  https://anthropic.com/careers/... \
  https://vercel.com/careers/... \
  https://huggingface.co/jobs/...
```

### Via Career-Ops Skill

Future: `/career-ops batch-apply-interactive` (or `/career-ops apply [link1] [link2] [link3]` with auto-detection)

## How It Works

### Phase 1: Setup (10 seconds)
- Parse input links
- Read and cache your CV + profile
- Build system prompt with cache_control

### Phase 2: Parallel Execution (~5-10 minutes)
- Spawn 1 subagent per job
- All run simultaneously
- Each subagent:
  1. Navigates to job URL
  2. Extracts job description (Playwright)
  3. Identifies company + role
  4. Finds existing evaluation (if any)
  5. Scores resume matches (AI/SWE/EE/WD)
  6. Extracts form questions
  7. Generates personalized answers
  8. Saves to output/

### Phase 3: Cache Benefits
- **Subagent 1**: Creates cache, full cost (~$0.15)
- **Subagent 2-5**: Hit cache, 90% cheaper (~$0.015 each)
- **Total cost**: ~$0.21 vs $0.75 without caching = **$0.54 saved**

### Phase 4: Aggregation (Real-time)
- As subagents complete, results stream in
- Print summary with cache stats
- User reviews outputs in `output/`

## Output Format

Each subagent saves to `output/application-{company}.md`:

```markdown
# Application Materials

**Company:** Anthropic
**Role:** Software Engineer, Agent Architecture
**URL:** https://anthropic.com/careers/...
**Date:** 2026-05-14

---

## Resume Recommendation

Keyword Scores:
  AI: 45 pts | SWE: 22 pts | EE: 5 pts | WD: 3 pts

**Recommended:** AI Resume (Confidence: 95/100)

**Why:** Strong signals in agent architecture, LLM orchestration,
multi-agent systems, evaluations.

---

## Cover Letter

Dear hiring team,

I'm writing to express my strong interest in the Software Engineer
role for Agent Architecture at Anthropic...

[Full cover letter]

---

## Essay Answers

### Question 1: Why are you interested in this role?

I've spent the past year building production agent systems at PatentIQ,
orchestrating multi-agent workflows with Claude. Your role is where I
want to deepen that expertise...

[Full answers]

---

## LinkedIn Summary Update

- Led multi-agent orchestration at PatentIQ using Claude API
- Built evaluation pipelines for LLM output quality
- Designed agent collaboration patterns for complex tasks
- Experienced with system design at scale

---

## Interview Talking Points

1. **Multi-agent systems expertise**: Orchestrated 14-member team building agent workflows, designed patterns for agent collaboration and state management

2. **Production reliability**: Built observability and evaluation frameworks for LLM outputs, focused on metrics and cost optimization

3. **Claude ecosystem**: Deep experience with Claude Sonnet and Opus from prototyping to production, familiar with latest APIs and best practices

4. **Fast shipping**: Patent search MVP from zero to live in 3 months, comfortable iterating quickly without sacrificing quality

5. **Technical breadth**: Full-stack engineer, comfortable architecting systems and thinking about business impact

---

**Cost Breakdown:**
- Regular cost: $0.15
- With cache: $0.015 (90% savings)
```

## Cache Mechanics

**Token Savings:**
```
Regular input cost:    2,500 tokens × ($5 / 1M)  = $0.0125
Cached input cost:     2,000 tokens × ($0.50/1M) = $0.001
                       500 tokens   × ($5/1M)    = $0.0025
                       ────────────────────────
                       Difference: $0.010 per job (90% savings)

Output always costs:   1,000 tokens × ($25/1M)   = $0.025

Total per job:
  Regular: $0.0375
  Cached:  $0.035 + $0.0025 = $0.0285 (24% cheaper)

Actually even better because cached tokens are $0.50/1M not $5/1M.
```

**Real Example: 5 jobs in 5 minutes**
```
Job 1 (3:00 PM): Creates cache, full cost             $0.15
Job 2 (3:02 PM): Cache hit, 90% cheaper              $0.015
Job 3 (3:04 PM): Cache hit, 90% cheaper              $0.015
Job 4 (3:06 PM): Cache expired, full cost again      $0.15
Job 5 (3:08 PM): Cache miss, full cost               $0.15

Total: $0.585 vs $0.75 without caching = $0.165 saved (22%)
```

If all 5 jobs finish within 5 minutes:
```
Total: $0.195 vs $0.75 without caching = $0.555 saved (74%)
```

## Timing & Cache Window

Cache TTL: **5 minutes** from creation

**Scenario 1: Fast parallel execution**
```
Start: 3:00 PM
Spawn all subagents: 3:00 PM
Subagent 1 finishes: 3:02 PM (cache created)
Subagent 2 finishes: 3:03 PM (cache hit ✓)
Subagent 3 finishes: 3:04 PM (cache hit ✓)
Subagent 4 finishes: 3:05 PM (cache hit ✓)
All within 5 min → ALL benefit from cache
```

**Scenario 2: Slow sequential-ish**
```
Start: 3:00 PM
Subagent 1: 3:02 PM (cache created)
Subagent 2: 3:03 PM (cache hit ✓)
Subagent 3: 3:05 PM (still within 5 min, hit ✓)
Subagent 4: 3:06 PM (cache expired ✗)
Subagent 5: 3:07 PM (cache expired ✗)
Only first 3 benefit
```

**How to maximize cache hits:**
- Keep job count under 5-7 for safety
- Ensure all subagents start within same minute (parallel launch)
- If timing is tight, use `batch-apply.mjs` instead (sequential but guaranteed cache window)

## vs. Single Apply Mode

**Single Apply:**
```bash
/career-ops apply https://anthropic.com/careers/...
→ Interactive, live form reading
→ 1 job takes ~5 minutes
→ No cache (single job, not a batch)
```

**Batch Interactive:**
```bash
/career-ops batch-apply-interactive https://anthropic.com/... https://vercel.com/... https://huggingface.co/...
→ Interactive, live form reading for ALL jobs
→ 5 jobs take ~5-10 minutes (parallel)
→ Cache reuses resume across all
→ ~$0.50 savings
```

## Error Handling

**URL unreachable**
- Try WebFetch as fallback
- Ask user to paste JD or screenshot
- Mark as partial (save what was extracted)

**Form extraction fails**
- Use generic questions as fallback
- Note in output: "Form not fully extracted, used generic questions"
- User can add/modify answers manually

**Resume match unclear**
- Run full evaluation (A-F) if not cached
- Select best resume based on scoring
- Note if close call in output

## Tips

### 1. Batch Size
- **2-3 jobs**: Almost guaranteed all within cache window ✓
- **4-5 jobs**: Likely all within window if spawned together ✓
- **6-7 jobs**: Risky, some may miss cache
- **8+ jobs**: Use `batch-apply.mjs` instead

### 2. Link Format
Works with any job board:
- Greenhouse: `https://job-boards.greenhouse.io/...`
- Lever: `https://jobs.lever.co/...`
- Ashby: `https://jobs.ashbyhq.com/...`
- LinkedIn: `https://linkedin.com/jobs/view/...`
- Company careers page: `https://company.com/careers/...`

### 3. Review Before Submitting
Each output is a template. Before applying:
1. Copy from output/application-{company}.md
2. Read through for tone/accuracy
3. Customize final touches
4. Copy into application form
5. Submit

Never submit generated materials without review.

### 4. Resume Recommendations
Each application shows which resume to use (AI/SWE/EE/WD). If you have multiple resume versions saved locally, use the recommended one for each job.

## Comparison: All Apply Methods

| Method | Speed | Cost | Resume Match | Form Extraction | Best For |
|--------|-------|------|---|---|---|
| **Single apply** | 5 min/job | No cache | Full (AI/SWE/EE/WD) | Live | 1 job right now |
| **batch-apply.mjs** | Parallel (~10 min for 5) | 90% cheaper | Generic template | Pre-saved file | 20+ jobs, offline prep |
| **batch-apply-interactive** | Parallel (~5-10 min for 5) | 90% cheaper | Full (AI/SWE/EE/WD) | Live | 5 jobs right now |

## Troubleshooting

**"No valid links found"**
- Check file path
- Ensure links start with `https://` or `http://`
- No blank lines between links

**"Cache not working" (all jobs expensive)**
- Jobs may exceed 5-minute window
- Try smaller batches (2-3 jobs)
- Monitor: look for `cache_read_tokens > 0` in output

**"Resume matching is generic"**
- Make sure cv.md exists and is up-to-date
- batch-apply-interactive should do full scoring, not templates
- Check mode is batch-apply-interactive, not batch-apply.mjs

**"Form questions not extracted"**
- Some ATS systems block Playwright
- Fallback uses generic questions
- Manually review output and customize

## Next Steps

1. Create `batch-apply-interactive-input.txt` with your links
2. Run: `node batch/batch-apply-interactive.mjs batch-apply-interactive-input.txt`
3. Monitor progress (subagents run in background)
4. Review outputs in `output/`
5. Customize and submit

Or use directly:
```bash
/career-ops batch-apply-interactive https://link1 https://link2 https://link3
```

(When integrated into the skill system)

## Cost Summary

**Without caching:** 5 jobs × $0.15 = **$0.75**
**With batch-apply-interactive:** ~$0.20-0.30 = **~$0.50 saved**

Plus time savings from parallelization (finish 5 jobs in 5-10 min instead of 25 min).
