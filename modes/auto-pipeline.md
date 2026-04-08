# Mode: auto-pipeline — Full Automatic Pipeline

When you paste a JD (text or URL) without an explicit sub-command, run the ENTIRE pipeline sequentially:

## Step 0 — Extract JD

If input is a **URL** (not JD text pasted), follow this strategy:

**Priority order:**

1. **Playwright (preferred):** Most job portals (Lever, Ashby, Greenhouse, Workday) are SPAs. Use `browser_navigate` + `browser_snapshot` to render and read the JD.
2. **WebFetch (fallback):** For static pages (ZipRecruiter, company career pages).
3. **WebSearch (last resort):** Search for role title + company on secondary portals that index JD in static HTML.

**If nothing works:** Ask you to paste the JD manually or share a screenshot.

**If input is JD text** (not URL): Use directly, no fetch needed.

## Step 1 — A-F Evaluation
Run exactly like the `offer` mode (read `modes/offer.md` for all blocks A-F).

## Step 2 — Save Report .md
Save full evaluation to `reports/{###}-{company-slug}-{YYYY-MM-DD}.md` (format in `modes/offer.md`).

## Step 3 — Generate PDF
Run full pipeline from `pdf` mode (read `modes/pdf.md`).

## Step 4 — Draft Application Answers (only if score >= 4.5)

If final score is >= 4.5, generate draft answers for application form:

1. **Extract form questions**: Use Playwright to navigate form and take snapshot. If can't extract, use generic questions.
2. **Generate answers** following tone guidelines (see below).
3. **Save in report** as section `## F) Draft Application Answers`.

### Generic questions (use if can't extract from form)

- Why are you interested in this role?
- Why do you want to work at [Company]?
- Tell us about a relevant project or achievement
- What makes you a good fit for this position?
- How did you hear about this role?

### Tone for Form Answers

**Position: "I'm choosing you."** — You have options and are choosing this company for concrete reasons.

**Tone rules:**
- **Confident without arrogance**: "I've spent the past year building production AI agent systems — your role is where I want to apply that experience next"
- **Selective without snobbery**: "I've been intentional about finding a team where I can contribute meaningfully from day one"
- **Specific and concrete**: Always reference something REAL from the JD AND something REAL from your experience
- **Direct, no fluff**: 2-4 sentences per answer. No "I'm passionate about..." or "I would love the opportunity to..."
- **Hook is proof, not claim**: Instead of "I'm great at X", say "I built X that does Y"

**Framework by question:**
- **Why this role?** → "Your [specific thing] maps directly to [specific thing I built]."
- **Why this company?** → Something concrete. "I've been using [product] for [time/purpose]."
- **Relevant experience?** → One quantified proof point. "Built [X] that [metric]. Sold the company in 2025."
- **Good fit?** → "I sit at the intersection of [A] and [B], which is exactly where this role lives."
- **How did you hear?** → Honest. "Found through [portal/scan], evaluated against my criteria, and it scored highest."

**Language**: Always in JD language (EN default).

## Step 5 — Update Tracker
Register in `data/applications.md` with all columns including Report and PDF ✅.

**If any step fails**, continue with next steps and mark failed step as pending in tracker.

---

## Output

After completion:
```
✅ COMPLETE EVALUATION — {Company} | {Role}

Score: {X}/5.0
Fit: {Archetype match}
PDF: {path or pending}
Report: {path}

Next: Apply → /career-ops apply
```
