# Apply Routing — How It Works

When you run `/career-ops apply`, the system automatically detects how many job links you provided and routes to the right mode.

## Quick Reference

| Input | Links | Routes To | Why |
|-------|-------|-----------|-----|
| `/career-ops apply` | 0 | `apply.md` | Fill form now (active tab) |
| `/career-ops apply [JD text]` | 0 | `apply.md` | Process pasted job description |
| `/career-ops apply https://link.com` | 1 | `apply.md` | Single job, interactive |
| `/career-ops apply https://link1.com https://link2.com` | 2+ | `batch-apply.md` | Multiple jobs, parallel + judge |

## Examples

### Example 1: Single Job (Interactive)

```bash
/career-ops apply https://anthropic.com/careers/software-engineer
```

**Detection:**
- Parse input
- Extract URLs: 1 found
- Route: `apply.md`

**Behavior:**
- Reads active browser tab (or extracts from URL)
- Scores resume (AI/SWE/EE/WD)
- Generates cover letter + answers
- Outputs CSV to terminal
- Saves essay.txt for copy-paste

---

### Example 2: Multiple Jobs (Batch)

```bash
/career-ops apply https://anthropic.com/careers/... https://vercel.com/careers/... https://huggingface.co/jobs/...
```

**Detection:**
- Parse input
- Extract URLs: 3 found
- Route: `batch-apply.md`

**System Message:**
```
Found 3 job links. Using batch-apply mode.

Architecture:
  - 1 Judge Haiku: validates all outputs
  - 3 Subagent Haikus: apply in parallel

Resume cached: first job full cost, rest 90% cheaper
Estimated time: 5-10 minutes
```

**Behavior:**
- Spawns judge + 3 subagent haikus
- Each subagent:
  - Scores resume
  - Extracts form questions
  - Generates answers
  - Writes recommendation + CSV to temp file
- Judge validates each output
- If valid: approved, moved to batch.txt
- If invalid: feedback, subagent retries
- Judge exits when all done

---

### Example 3: No Input (Fill Form Now)

```bash
/career-ops apply
```

**Detection:**
- Parse input
- Extract URLs: 0 found
- Check: Is browser open with job form?
- Route: `apply.md` (reads active tab)

**Behavior:**
- Takes snapshot of active tab
- Extracts company + role
- Generates answers for visible form fields
- Outputs to terminal + essay.txt

---

### Example 4: Pasted Job Description

```bash
/career-ops apply
[User pastes job description text]
```

**Detection:**
- Parse input
- Extract URLs: 0 found
- Check: Has form content?
- Route: `apply.md` (processes pasted text)

**Behavior:**
- Parses pasted text as JD
- Scores resume
- Generates cover letter + answers
- Outputs CSV + essay

---

## Routing Logic (Pseudocode)

```javascript
function routeApply(input) {
  // Extract all URLs
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const links = input.match(urlPattern) || [];
  
  // Decision tree
  if (links.length === 0) {
    // No links: check if user is filling form now
    if (hasActiveBrowserTab()) {
      return "apply.md";  // Read active tab
    } else {
      // User pasted JD or will paste form
      return "apply.md";  // Process pasted content
    }
  }
  
  if (links.length === 1) {
    // Single link: interactive apply
    return "apply.md";
  }
  
  if (links.length >= 2) {
    // Multiple links: batch apply
    if (links.length >= 6) {
      warn("6+ jobs may exceed 5-min cache window. Consider splitting batches.");
    }
    return "batch-apply.md";
  }
}
```

---

## Mode Comparison

### apply.md (Single)
- **Trigger:** 0 or 1 link
- **Execution:** Sequential, interactive
- **Time:** ~5 minutes per job
- **Cache:** No (single job)
- **Resume Matching:** Full (AI/SWE/EE/WD scoring)
- **Validation:** User reviews after
- **Best for:** One job right now, need live form reading

### batch-apply.md (Parallel)
- **Trigger:** 2+ links
- **Execution:** Parallel subagents + judge
- **Time:** ~5-10 minutes for 2-5 jobs
- **Cache:** Yes (90% cheaper after first)
- **Resume Matching:** Full (AI/SWE/EE/WD per job)
- **Validation:** Judge validates before batch.txt
- **Best for:** 2-5 jobs now, want speed + quality control

---

## When Routing Happens

The routing is automatic:
1. User invokes `/career-ops apply [input]`
2. System parses input
3. Counts links
4. Routes to `apply.md` or `batch-apply.md`
5. Selected mode runs

**No user confirmation needed** (unless 6+ links detected, then warn and ask).

---

## Cost Comparison

### Single Job (apply.md)
- Input tokens: ~2,500 @ $5/1M = $0.0125
- Output tokens: ~1,000 @ $25/1M = $0.025
- **Total: ~$0.038 per job**

### Batch 3 Jobs (batch-apply.md)
- Job 1: $0.038 (full cost, creates cache)
- Job 2: $0.015 (cache hit, 90% cheaper)
- Job 3: $0.015 (cache hit, 90% cheaper)
- Judge: $0.003 (validates all 3)
- **Total: ~$0.071 for 3 jobs ($0.024/job avg)**

**Savings: 37% cheaper with batch routing**

---

## FAQ

**Q: What if I want to force batch mode for a single job?**  
A: Just don't. Single apply is better for one job (faster feedback). But if you must: `/career-ops batch-apply https://link.com` (explicit mode call).

**Q: What if I have 10 links?**  
A: Router warns about cache window (>5 min). Option: split into two 5-job batches or run sequentially.

**Q: Can I mix links and form content?**  
A: No. Either pass links OR fill form now. Router detects one or the other, not both.

**Q: Does routing add latency?**  
A: No. Router detection is instant (<100ms). Transparent to user.

**Q: What if routing is wrong?**  
A: Unlikely, but if you want explicit control: call mode directly:
   - `/career-ops apply` (single, interactive)
   - `/career-ops batch-apply` (multiple, parallel + judge)

---

## Examples in the Wild

### Scenario 1: Candidate applies to dream role
```
/career-ops apply https://anthropic.com/careers/software-engineer-agent-architecture
```
→ Routed to `apply.md`  
→ Reads form live, generates personalized answers  
→ Takes ~5 min, user gets terminal output + essay.txt

### Scenario 2: Candidate preparing offers
```
/career-ops apply https://anthropic.com/... https://vercel.com/... https://huggingface.co/...
```
→ Routed to `batch-apply.md`  
→ Spawns judge + 3 subagents  
→ All run in parallel, judge validates outputs  
→ Takes ~8 min, all recommendations + CSV in batch.txt  
→ User reviews and applies with confidence

### Scenario 3: Candidate filling out form right now
```
/career-ops apply
```
→ Routed to `apply.md`  
→ Reads active browser tab (job form)  
→ Extracts form fields, generates answers  
→ Outputs to essay.txt for copy-paste

---

## Next Steps

1. Use `/career-ops apply` naturally
2. System automatically detects links
3. Routes to right mode (apply or batch-apply)
4. Done
