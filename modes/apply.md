# Mode: apply — Live Application Assistant

Interactive mode for when you're filling out a job application form in Chrome. Reads what's on screen, loads previous offer context, and generates personalized answers for each form question.

## Requirements

- **Better with Playwright visible**: You see the browser and Claude can interact with the page
- **Without Playwright**: Share a screenshot or paste questions manually

## Workflow

```
1. DETECT    → Read active Chrome tab (screenshot/URL/title)
2. IDENTIFY  → Extract company + role from page
3. SELECT    → Analyze JD keywords, recommend best resume (AI|SWE|EE|WD)
4. SEARCH    → Match against existing reports in reports/
5. LOAD      → Read full report + Section F (if exists)
6. COMPARE   → Does on-screen role match evaluated role? If changed → warn
7. ANALYZE   → Identify ALL form questions visible
8. GENERATE  → For each question, generate personalized answer
9. PRESENT   → Show formatted answers for copy-paste
```

## Step 1 — Detect the Offer

**With Playwright (ideal):** Take snapshot of active page. Read title, URL, and visible content.

**If Playwright fails:** This can happen if:
- Browser closes unexpectedly
- Page navigates away during capture
- Long pause between operations
- System is slow to respond

**Graceful fallback:** Ask you to provide info manually:
- Share a screenshot of the form (Read tool can see images)
- Or paste the form questions as text
- Or just say company + role so we look it up

**Don't let Playwright failure block you.** If the browser closes, we pivot to manual input immediately and keep moving.

## Step 2 — Identify and Load Context

1. Extract company name and job title from page
2. Search `reports/` for company name (case-insensitive grep)
3. If match found → load full report
4. If Section F exists → load draft answers as base
5. If NO match → warn and offer to run quick evaluation

## Step 3 — Resume Selector (Intelligent Matching)

**Two-phase matching: keyword-first scoring, then selective PDF reading for close calls.**

### Phase 1: Keyword Scoring (Fast, no PDFs)

Extract keywords from the job title, summary, and requirements. Score each resume type:

### Scoring Categories

**AI Resume** (DarisChenResumeAI.pdf)
- Keywords: ML, machine learning, AI, neural network, deep learning, PyTorch, TensorFlow, CUDA, computer vision, NLP, LLM, transformer, embeddings, semantic search, research, agents, RAG
- Strong signals: "Machine Learning Engineer", "AI Engineer", "Research", "Model Training", specific ML frameworks, LLM/agent focus

**SWE Resume** (DarisChenResumeSWE.pdf)
- Keywords: backend, full-stack, distributed systems, scalability, architecture, databases, APIs, microservices, PostgreSQL, Redis, Docker, system design, performance, optimization
- Strong signals: "Full-Stack Engineer", "Backend Engineer", "Software Engineer", architecture/design focus, infrastructure

**EE Resume** (DarisChenResumeEE.pdf)
- Keywords: hardware, embedded, FPGA, Verilog, SystemVerilog, circuits, microcontroller, DSP, signal processing, RF, analog, firmware, bare metal, assembly
- Strong signals: "Hardware Engineer", "Embedded Engineer", "FPGA", "Verilog", low-level system design

**WD Resume** (DarisChenResumeWD.pdf)
- Keywords: frontend, web, React, Next.js, TypeScript, JavaScript, CSS, UI/UX, performance, Lighthouse, accessibility, bundle size, design systems
- Strong signals: "Frontend Engineer", "Web Developer", React/Next.js emphasis, performance metrics (Lighthouse), design

**Scoring method:**
- Count keyword matches for each archetype (each keyword = 1 point)
- Strong signals boost by +3 points
- Rank resumes by score

### Phase 2: Selective PDF Reading (Only if Needed)

**IF the top two resumes are within 10 points of each other:**
- Read the top 2 PDFs to disambiguate
- Cross-check actual experience against job requirements
- Make final recommendation

**IF one resume leads by 10+ points:**
- Skip PDF reading entirely
- Proceed directly with recommendation

**PDF paths (read only if needed):**
- "C:\Users\daris\Downloads\DarisChenResumeAI.pdf"
- "C:\Users\daris\Downloads\DarisChenResumeSWE.pdf"
- "C:\Users\daris\Downloads\DarisChenResumeEE.pdf"
- "C:\Users\daris\Downloads\DarisChenResumeWD.pdf"

### Output Format

**Present to user immediately in terminal, YOU MUST MATCH THIS EXACT FORMAT, DO NOT WRITE THIS TO output/essay.txt:**

YOU MUST PRINT THIS EVERY SINGLE TIME EVEN WHEN THERE ARE NO ESSAY QUESTIONS. THIS IS CRITICAL FOR CONSISTENCY AND USER EXPERIENCE.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 RESUME RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keyword Scores:
  AI:  XX pts  |  SWE: XX pts  |  EE: XX pts  |  WD: XX pts

Recommended: [AI | SWE | EE | WD] Resume
Confidence: X/100

Top 3 Signals:
  1. [Keyword from JD]
  2. [Keyword from JD]
  3. [Keyword from JD]

Why This Resume:
[2-3 sentence explanation of strategic fit]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

If keyword scores are within 10 points of leader, append:
```
[PDF Analysis] Read [Resume1] and [Resume2] to verify experience match...
→ Confirmed: [Resume] is best fit based on actual background.
```

**Then proceed to Step 4.**

## Step 5 — Detect Role Changes

If on-screen role differs from evaluated role:
- **Warn**: "Role changed from [X] to [Y]. Re-evaluate or adapt answers?"
- **If adapt**: Adjust answers to new role without re-evaluating
- **If re-evaluate**: Run full A-F evaluation, update report, regenerate Section F
- **Update tracker**: Change role title in applications.md if needed

## Step 6 — Analyze Form Questions

Identify ALL visible questions:
- Multi-part questions (e.g., "Why this company? Why this role?") → treat as separate
- Optional vs. required fields
- Text length limits (if visible)
- Any custom questions beyond standard ATS

**CRITICAL:** If NO questions are detected on the page:
- **STOP immediately and move on to the next step**
- **DO NOT generate blind answers** (wastes tokens)

Only generate answers if you have actual questions to answer.

## Step 7 — Generate Answers

**⚡ SKIP BOILERPLATE FIELDS — Don't waste tokens on these:**

These fields are in your profile. Don't generate answers:
- Name, Email, Phone
- LinkedIn URL, GitHub, Portfolio, Personal Website
- Location, City, State
- Work Authorization, Visa Sponsorship
- Years of Experience
- Willing to Relocate / Relocation Preferences
- Birth Date, Age
- Pronouns
- EEO/Demographics questions (disability, veteran status, race, gender, sexual orientation)

**ONLY generate answers for:**
- Essay/open-ended questions (Why this role? Why this company? Relevant experience?)
- Custom/company-specific prompts
- Anything that requires thoughtful reasoning and connects you to the role/company
- Short questions where you have something interesting to say

**When you see a boilerplate field:** Skip it completely. Don't output a table row, don't generate an answer. Just move to the next question.

---

**Tone framework: "I'm choosing you"**

You have options and are choosing this company for concrete reasons.

**Rules:**
- **Confident without arrogance**: "I've spent the past year building production AI agent systems. Your role is where I want to apply that next" (no em dash)
- **Selective without snobbery**: "I've been intentional about finding a team where I can contribute from day one"
- **Specific and concrete**: Always reference something REAL from the JD AND something REAL from your experience
- **Direct, no fluff**: 2-4 sentences max per answer. No "I'm passionate about..." or "I would love the opportunity to..."
- **Hook is the proof, not the claim**: Instead of "I'm great at X", say "I built X that does Y"
- **NO EM DASHES (—) OR COLONS (:) in any generated text.** Replace "X: Y" with "X. Y" or restructure. Replace "X — Y" with "X. Y" or "X, so Y". YOU MUST NEVER USE EM DASHES OR COLONS IN GENERATED TEXT. THIS IS A COMMON SIGN OF AI-GENERATED CONTENT AND CAN BE DETECTED BY ATS OR HUMAN REVIEWERS. ALWAYS RESTRUCTURE TO AVOID THESE PUNCTUATION MARKS.
- **NO "it's not X, it's Y" structure.** Reframe to positive: Instead of "It's not just building models, it's deploying them", write "My strength is building models that actually deploy and scale." YOU MUST NEVER DO THIS SENTENCE STRUCTURE. THIS IS A POPULAR WAY TO IDENTIFY AI GENERATED TEXT.

**Framework by question:**

| Question | Framework |
|----------|-----------|
| Why this role? | "Your [specific thing] maps directly to [specific thing I built]" |
| Why this company? | Something concrete. "I've been using [product] for [time/purpose]" |
| Relevant experience? | One quantified proof point. "Built [X] that [metric]" |
| Good fit? | "I sit at the intersection of [A] and [B], which is exactly where this role lives" |
| How did you hear? | Honest. "Found through [portal], evaluated against my criteria, scored highest" |

## Step 8 — Present Answers

**For essay answers (2+ sentences):**
- Write to `output/essay.txt` with clear formatting YOU MUST WRITE TO THIS FILE EXACTLY. CREATE THIS FILE IF IT DOES NOT EXIST. DO NOT PRINT ESSAY ANSWERS TO THE TERMINAL.
- Question label + answer text + character count
- User opens file, reviews, copies into form as needed

Format for copy-paste:
- Clear question labels
- Answer text (bold key phrases)
- Character count if there's a limit
- Optional: Justification (why this approach)

**For short answers (1 sentence or callouts):**
- Print to terminal for quick reference
- Fast to copy-paste directly

**Output file location:** `C:\Users\daris\Desktop\Job\career-ops\output\essay.txt`

## Special Cases

**LinkedIn applications:** May require login. If blocked → ask you to paste the JD text or screenshot.

**Custom questions:** If form has questions beyond standard ATS, generate context-specific answers using the evaluation report.

**Role changed mid-application:** If you started with Role A, form shows Role B → confirm which one to apply for before generating answers.

## Output Destinations

**Essay/Long Answers: WRITE INTO THIS EXACT FILE AND NOT THE TERMINAL `output/essay.txt`**
- All multi-sentence answers (2+ sentences) go to a file
- Format: Clear question label + answer + character count
- User reviews in editor, then copy-paste into form
- File is overwritten each run (no accumulation)

**Short Answers + CSV → Terminal**
- Single-sentence answers or quick callouts print to terminal
- CSV output (for Google Sheets) prints to terminal for immediate copy-paste
- Keeps terminal output focused and scannable

---

## Playwright Error Handling

If you get "Target page, context or browser has been closed" or similar Playwright errors:

1. **Don't retry the same operation** — it will fail again
2. **Immediately fall back to manual input:**
   - "Playwright couldn't capture the page. Can you paste the form questions or share a screenshot instead?"
   - Or ask for company + role so we can work from existing evaluation context
3. **Continue the full workflow** — resume selection, context loading, answer generation all work fine without Playwright

The apply command is resilient. Browser failures don't kill the whole process.

---

## Step 9 — CSV Output for Google Sheets (PRINT AT END)

**ALWAYS output this AFTER all interview prep, cover letter, and compensation strategy.**

After generating answers for one or multiple offers, output a CSV line (or lines for batch) that you can copy directly into your Google Sheets tracker.

**Format:** `Company,Title,Site Found,Date,Tag,Notes,Resume Used`

**Example (single):**
```
CoreStory,AI Engineer,Career Ops,,,,AI
```

**Example (batch apply, multiple offers):**
```
Perplexity,AI Software Engineer - Agents,Career Ops,,,,AI
CoreStory,AI Engineer,Career Ops,,,,AI
Ramp,Software Engineer Frontend,Career Ops,,,,WD
```

**Resume type detection:**

Use the resume type already selected in **Step 3**. This should match:
- **AI**: Keywords = "agent", "llm", "model", "ml", "ai", "neural", "deep learning", "multimodal", "reinforcement learning", "rag"
- **EE**: Keywords = "hardware", "fpga", "circuit", "verilog", "systemverilog", "embedded", "iot"
- **WD**: Keywords = "react", "frontend", "web", "next.js", "javascript", "typescript", "css", "ui/ux", "html"
- **SWE**: Default (no clear keyword match)

Output the CSV line(s) at the very end with the 2-letter code from Step 3 in the last column. YOU MUST FOLLOW THE CSV FORMAT EXACTLY. KEEP THE DATE BLANK. KEEP THE TAG BLANK. KEEP THE NOTES BLANK. ONLY FILL IN COMPANY, TITLE, SITE FOUND (Career Ops), AND RESUME USED (should match Step 3 recommendation). DO NOT OUTPUT ANY EXPLANATORY TEXT OR ADDITIONAL COLUMNS. THIS MUST BE COPY-PASTE READY FOR GOOGLE SHEETS.

**Output location:** Print CSV to terminal (not to file). It's one line, copy-paste ready for Google Sheets. Easy to grab and paste immediately.
