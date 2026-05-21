# Mode: apply-router — Intelligent Apply Routing

**This is the entry point for `/career-ops apply`.** It detects whether the user is applying to one job or multiple, then routes to the appropriate mode.

## Workflow

```
User input: /career-ops apply [inputs]
             ↓
        STEP 1: Parse Input
        - Extract all URLs from input
        - Count links
             ↓
        STEP 2: Route Decision
        - 1 link OR no links (fill form now) → APPLY mode
        - 2+ links → BATCH-APPLY mode
             ↓
        STEP 3: Execute
        - Call apply.md (single) OR batch-apply.md (batch)
```

---

## Step 1 — Parse Input

Detect what the user provided:

**Case A: User gives multiple URLs**
```
/career-ops apply https://anthropic.com/careers/... https://vercel.com/careers/... https://huggingface.co/...
```
Count: 3 links detected → Route to **BATCH-APPLY**

**Case B: User gives 1 URL**
```
/career-ops apply https://anthropic.com/careers/...
```
Count: 1 link detected → Route to **APPLY**

**Case C: User is filling out a form right now (no URL)**
```
/career-ops apply
```
Count: 0 links, check if browser is open with job form → Route to **APPLY** (reads active tab)

**Case D: User pastes job description text (not URL)**
```
/career-ops apply
[pastes: "Senior Software Engineer at Anthropic..."]
```
Count: 0 links, 1 JD → Route to **APPLY** (uses pasted text as JD)

**Case E: User pastes multiple job descriptions**
```
/career-ops apply
[pastes JD 1]
---
[pastes JD 2]
---
[pastes JD 3]
```
Count: 0 links, 2+ JDs → Route to **BATCH-APPLY** (skip conductor phase)

**JD detection signals (use any combination):**
- Explicit delimiters: `---`, `===`, `###`, `***`, or repeated newlines
- Multiple role headers: "Senior X at Y", "Job Title — Company", etc.
- Multiple "About the role" / "Responsibilities" / "Requirements" sections
- User explicitly says: "here are N JDs" or "evaluate these N roles"

**Skip Playwright Conductor Phase:**
Since JDs are already pasted as text, the batch-apply conductor phase is skipped:
- No Playwright navigation needed
- Save each JD directly to `batch/pending/{id}-jd.txt`
- Spawn workers in parallel immediately
- Same judge validation as URL-based batch

---

## Step 2 — Count Links

Extract all `http(s)://` patterns from the input:

```
Pattern: /(https?:\/\/[^\s]+)/g
Count matches
```

**Link/JD count logic:**

| Links | JDs | Route | Reason |
|-------|-----|-------|--------|
| 0 | 0 | APPLY | Fill form on active tab |
| 0 | 1 | APPLY | Single pasted JD |
| 0 | 2+ | BATCH-APPLY (no conductor) | Multiple JDs already extracted |
| 1 | 0 | APPLY | Single live job |
| 2-5 | 0 | BATCH-APPLY (with conductor) | Multiple URLs, conductor extracts JDs |
| 6+ | 0 | BATCH-APPLY* (with conductor) | Warn about cache window |

*If 6+ links: suggest splitting into smaller batches for optimal cache reuse within the 5-min window.

---

## Step 3 — Route Decision

**If routing to APPLY:**
```
Continue with modes/apply.md
- Read active tab or process input
- Generate resume recommendation
- Extract form questions
- Generate answers
```

**If routing to BATCH-APPLY:**
```
Suggest: "Found N links. Using batch-apply with judge validation and prompt caching."

Then execute batch-apply.md
- Load CV (caches for all jobs)
- Spawn judge + N subagent haikus
- Validate all outputs before batch.txt
- Generate recommendations + CSV lines
```

---

## Implementation

When the skill calls `/career-ops apply`:

1. **Parse input** → `extractLinks(input)`
2. **Count links** → `links.length`
3. **Route:**
   ```javascript
   if (links.length === 0) {
     // No links: user filling form now or pasting JD
     return "apply.md";
   } else if (links.length === 1) {
     // Single link: interactive apply
     return "apply.md";
   } else {
     // Multiple links: batch apply
     return "batch-apply.md";
   }
   ```

---

## User Messaging

**When routing to APPLY:**
```
Single job detected. Running interactive apply mode.
→ Paste form screenshot or continue in browser...
```

**When routing to BATCH-APPLY:**
```
Found 3 job links. Using batch-apply mode (parallel + caching).

Architecture:
  - Judge Haiku: validates all outputs
  - 3 Subagent Haikus: apply to each job in parallel
  - Resume cached: first job full cost, rest 90% cheaper

Estimated time: 5-10 minutes
```

---

## Edge Cases

**User says: "/career-ops apply [link1] [link2]"**
- Count: 2 links
- Route: BATCH-APPLY
- Execute batch-apply.md

**User says: "/career-ops apply" (no input)**
- Count: 0 links
- Check: Is browser open with job form?
  - Yes → Route to APPLY (reads active tab)
  - No → Ask: "Paste job link(s), form screenshot, or job description?"

**User says: "/career-ops apply [link1] [link2] [link3] [link4] [link5] [link6]"**
- Count: 6 links
- Warn: "6 links may exceed 5-minute cache window. Split into smaller batches for optimal caching?"
- Option A: User confirms → Route to BATCH-APPLY (all 6)
- Option B: User splits → "Save links to batch-apply-input.txt and run batch manually for better control"

**User says: "/career-ops apply" then pastes: "Job description for Senior Engineer..."**
- Count: 0 links
- Check: Has form content? → Route to APPLY (process as JD text)

---

## No User Input Needed

Router detects automatically. No confirmation required unless:
- 6+ links detected (ask about cache window)
- No links and no open browser (ask for form/JD)

Otherwise: silently route and continue.

---

## Related Modes

- `apply.md` — Single job, interactive
- `batch-apply.md` — Multiple jobs, parallel + judge validation
- `auto-pipeline.md` — Full evaluation + PDF + answers

Router intelligently chooses between `apply` and `batch-apply`.
