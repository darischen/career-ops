# Mode: apply — Live Application Assistant

Interactive mode for when you're filling out a job application form in Chrome. Reads what's on screen, loads previous offer context, and generates personalized answers for each form question.

## Requirements

- **Better with Playwright visible**: You see the browser and Claude can interact with the page
- **Without Playwright**: Share a screenshot or paste questions manually

## Workflow

```
1. DETECT    → Read active Chrome tab (screenshot/URL/title)
2. IDENTIFY  → Extract company + role from page
3. SEARCH    → Match against existing reports in reports/
4. LOAD      → Read full report + Section F (if exists)
5. COMPARE   → Does on-screen role match evaluated role? If changed → warn
6. ANALYZE   → Identify ALL form questions visible
7. GENERATE  → For each question, generate personalized answer
8. PRESENT   → Show formatted answers for copy-paste
```

## Step 1 — Detect the Offer

**With Playwright:** Take snapshot of active page. Read title, URL, and visible content.

**Without Playwright:** Ask you to:
- Share a screenshot of the form (Read tool can see images)
- Or paste the form questions as text
- Or say company + role so we look it up

## Step 2 — Identify and Load Context

1. Extract company name and job title from page
2. Search `reports/` for company name (case-insensitive grep)
3. If match found → load full report
4. If Section F exists → load draft answers as base
5. If NO match → warn and offer to run quick evaluation

## Step 3 — Detect Role Changes

If on-screen role differs from evaluated role:
- **Warn**: "Role changed from [X] to [Y]. Re-evaluate or adapt answers?"
- **If adapt**: Adjust answers to new role without re-evaluating
- **If re-evaluate**: Run full A-F evaluation, update report, regenerate Section F
- **Update tracker**: Change role title in applications.md if needed

## Step 4 — Analyze Form Questions

Identify ALL visible questions:
- Multi-part questions (e.g., "Why this company? Why this role?") → treat as separate
- Optional vs. required fields
- Text length limits (if visible)
- Any custom questions beyond standard ATS

## Step 5 — Generate Answers

**Tone framework: "I'm choosing you"**

You have options and are choosing this company for concrete reasons.

**Rules:**
- **Confident without arrogance**: "I've spent the past year building production AI agent systems — your role is where I want to apply that next"
- **Selective without snobbery**: "I've been intentional about finding a team where I can contribute from day one"
- **Specific and concrete**: Always reference something REAL from the JD AND something REAL from your experience
- **Direct, no fluff**: 2-4 sentences max per answer. No "I'm passionate about..." or "I would love the opportunity to..."
- **Hook is the proof, not the claim**: Instead of "I'm great at X", say "I built X that does Y"

**Framework by question:**

| Question | Framework |
|----------|-----------|
| Why this role? | "Your [specific thing] maps directly to [specific thing I built]" |
| Why this company? | Something concrete. "I've been using [product] for [time/purpose]" |
| Relevant experience? | One quantified proof point. "Built [X] that [metric]" |
| Good fit? | "I sit at the intersection of [A] and [B], which is exactly where this role lives" |
| How did you hear? | Honest. "Found through [portal], evaluated against my criteria, scored highest" |

## Step 6 — Present Answers

Format for copy-paste:
- Clear question labels
- Answer text (bold key phrases)
- Character count if there's a limit
- Optional: Justification (why this approach)

## Special Cases

**LinkedIn applications:** May require login. If blocked → ask you to paste the JD text or screenshot.

**Custom questions:** If form has questions beyond standard ATS, generate context-specific answers using the evaluation report.

**Role changed mid-application:** If you started with Role A, form shows Role B → confirm which one to apply for before generating answers.
