# Batch Apply with Prompt Caching

## Overview

`batch-apply.mjs` generates personalized application materials (cover letters, essay answers, talking points) for multiple job applications using **prompt caching** to reduce costs by 90%.

### How Caching Works

Your CV is cached as a stable prefix in the system prompt. This means:

- **First application:** Full cost (CV is cached)
- **Applications 2-5 (within 5 min):** 90% cheaper tokens (cache hits)
- **After 5 minutes:** Cache expires, next app pays full cost again

**Cost example for 5 applications:**
- Without caching: ~$0.15 per application = $0.75 total
- With caching: $0.15 (first) + $0.015 × 4 (rest) = $0.21 total
- **Savings: 72%**

## Setup

### 1. Create batch input file

Create `batch/batch-apply-input.tsv` with your job applications:

```tsv
# Format: id	company	role	jd_file	form_file
1	Anthropic	Software Engineer, Agent Architecture	jd-1-anthropic.txt	form-1-anthropic.txt
2	Vercel	Software Engineer, AI SDK	jd-2-vercel.txt	form-2-vercel.txt
3	Hugging Face	ML Engineer	jd-3-hf.txt
```

**Columns:**
- `id`: Unique identifier (1, 2, 3, ...)
- `company`: Company name
- `role`: Job title
- `jd_file`: Path to job description file (relative to batch/)
- `form_file`: Path to application form (optional, relative to batch/)

### 2. Prepare job files

Save each job description as a `.txt` file in `batch/`:

```
batch/jd-1-anthropic.txt  (job description)
batch/form-1-anthropic.txt (essay questions, optional)
```

If there's an application form with essay questions, create a form file:

```
## Question 1: Why Anthropic?
[paste the exact question]

## Question 2: Tell us about a project...
[paste the exact question]
```

## Usage

```bash
node batch/batch-apply.mjs [batch_apply_input.tsv]
```

Or use the default file:
```bash
node batch/batch-apply.mjs
```

This will:
1. Read your CV once
2. Cache it for all applications
3. Generate personalized materials for each job
4. Save output to `output/application-{id}-{company}/`
5. Report cache hits and cost savings

## Output

Generated materials are saved to:
```
output/
├── application-1-anthropic/
│   └── application-2026-05-14.md
├── application-2-vercel/
│   └── application-2026-05-14.md
└── application-3-hugging-face/
    └── application-2026-05-14.md
```

Each file contains:
- **Cover Letter** (tailored to company/role)
- **Essay Answers** (if form provided)
- **LinkedIn Summary Update** (role-specific bullets)
- **Key Talking Points** (interview prep, 5 bullets)

## Example Output

```markdown
# Application Materials

**Company:** Anthropic
**Role:** Software Engineer, Agent Architecture
**Date:** 2026-05-14
**Cost Estimate:** Regular $0.15 | With Cache $0.015

---

## Cover Letter

Dear hiring team,

I'm writing to express my strong interest in the Software Engineer role for Agent Architecture at Anthropic...

## Essay Answers

### Question 1: Why Anthropic?

Anthropic's focus on AI safety and interpretability aligns with...

## LinkedIn Summary Update

- Led full-stack AI systems at PatentIQ, building multi-agent orchestration with Claude API
- Engineered semantic search and LLM evaluation pipelines handling 100K+ patent queries daily
- Reduced application latency by 90% through caching strategies and system optimization
- Published open-source agent framework for production AI workflows

## Key Talking Points

1. **Multi-agent systems**: Led 14-member team orchestrating AI workflows at PatentIQ, designed agent collaboration patterns for complex tasks

2. **Production reliability**: Built evaluation pipelines and monitoring for LLM outputs, focusing on quality metrics and cost optimization

3. **Claude API expertise**: Extensive experience with Claude Sonnet and Opus, from prototyping to production deployments

4. **Fast iteration**: Patent search MVP went from zero to live in 3 months; comfortable shipping quickly while maintaining quality

5. **Technical depth + Product thinking**: Architect mindset - understand both system design and business impact
```

## Tips

### Rapid-fire applications
If you're applying to 5+ roles in quick succession, do them all within 5 minutes to maximize cache hits. The cache warm window is 5 minutes.

### Form file format
Keep it simple:

```
## Question 1: Why do you want to work here?

## Question 2: Describe a challenging project...

## Question 3: What are your career goals?
```

Claude will parse and answer each question tailored to your CV.

### Reusing for cold outreach
You can also use this for cold email campaigns:
- Generate cover letter + talking points
- Copy to LinkedIn/email outreach templates
- Customize with final touches before sending

## Caching Internals

Claude API caching works via HTTP headers:
```javascript
cache_control: { type: "ephemeral" }
```

This tells Claude to cache the CV + profile for 5 minutes. Subsequent requests that include the same CV + profile prefix will hit the cache.

**Cache invalidation:**
- Automatic: 5 minute TTL
- Manual: If you update cv.md, the cache automatically invalidates on next request (different content = no match)

## Cost Breakdown

**Without caching:**
- Input tokens (CV + job details): ~2,500 tokens @ $5/1M = $0.0125
- Output tokens: ~1,000 tokens @ $25/1M = $0.025
- **Per application: ~$0.0375**

**With caching (after first):**
- Input tokens (cached): ~2,000 tokens @ $0.50/1M = $0.001
- Input tokens (job-specific): ~500 tokens @ $5/1M = $0.0025
- Output tokens: ~1,000 tokens @ $25/1M = $0.025
- **Per application: ~$0.0285 (24% cheaper)**

Actually even better because the cache_read tokens are charged at $0.50/1M vs $5/1M.

**For 10 applications over 5 minutes:**
- Application 1: $0.0375 (full cost, creates cache)
- Applications 2-10: $0.0285 × 8 = $0.228
- **Total: $0.2655** vs $0.375 without caching = **$0.11 saved**

## Troubleshooting

**"CV not found"**
- Make sure `cv.md` exists in project root

**"JD file not found"**
- Check the path in your batch input file
- Paths should be relative to batch/ directory

**"No jobs to process"**
- Check your TSV format: tab-separated, not spaces
- No blank lines between jobs

**Cache not being used (cache_read_input_tokens = 0)**
- Cache only works within 5-minute window
- If your batch takes >5 min per job, cache expires between jobs
- Reduce delays or process jobs faster

## Next Steps

1. Create your batch input file
2. Save job descriptions + forms to batch/
3. Run `node batch/batch-apply.mjs batch-apply-input.tsv`
4. Review output in `output/application-*/`
5. Copy/paste materials into application forms
6. Customize final touches (company-specific tone adjustments)
7. Submit!

**Never submit without reviewing first** — this generates templates, not final copy.
