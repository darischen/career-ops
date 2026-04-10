---
name: career-ops
description: AI job search command center -- evaluate offers, generate CVs, scan portals, track applications
user_invocable: true
args: mode
---

# career-ops -- Router

## Mode Routing

Determine the mode from `{{mode}}`:

| Input | Mode |
|-------|------|
| (empty / no args) | `discovery` -- Show command menu |
| JD text or URL (no sub-command) | **`auto-pipeline`** |
| `oferta` | `oferta` |
| `ofertas` | `ofertas` |
| `contacto` | `contacto` |
| `deep` | `deep` |
| `pdf` | `pdf` |
| `training` | `training` |
| `project` | `project` |
| `tracker` | `tracker` |
| `pipeline` | `pipeline` |
| `apply` | `apply` |
| `scan` | `scan` |
| `batch` | `batch` |
| `resume` | `resume` -- Smart resume selector |

**Auto-pipeline detection:** If `{{mode}}` is not a known sub-command AND contains JD text (keywords: "responsibilities", "requirements", "qualifications", "about the role", "we're looking for", company name + role) or a URL to a JD, execute `auto-pipeline`.

If `{{mode}}` is not a sub-command AND doesn't look like a JD, show discovery.

---

## Mode Execution — Strict Specification

**Modes in `modes/*.md` are specifications, not guidelines. Execute them exactly as written.**

- Follow steps in order. Do not reorder.
- Match output format precisely. Do not add context or explanations unless the mode explicitly asks.
- Output to the specified destination (terminal vs essay.txt vs file). Do not deviate.
- Do not interpret or assume what "would be helpful" — follow the spec.

This matters because the modes are optimized through experience. Deviations break the workflow, add noise, and undermine the system's predictability.

**Exception:** If a mode has ambiguity or conflicts with current state, flag it to the user instead of improvising.

---

## Discovery Mode (no arguments)

Show this menu:

```
career-ops -- Command Center

Available commands:
  /career-ops {JD}      → AUTO-PIPELINE: evaluate + report + PDF + tracker (paste text or URL)
  /career-ops pipeline  → Process pending URLs from inbox (data/pipeline.md)
  /career-ops oferta    → Evaluation only A-F (no auto PDF)
  /career-ops ofertas   → Compare and rank multiple offers
  /career-ops contacto  → LinkedIn power move: find contacts + draft message
  /career-ops deep      → Deep research prompt about company
  /career-ops pdf       → PDF only, ATS-optimized CV
  /career-ops training  → Evaluate course/cert against North Star
  /career-ops project   → Evaluate portfolio project idea
  /career-ops tracker   → Application status overview
  /career-ops apply     → Live application assistant (reads form + generates answers)
  /career-ops scan      → Scan portals and discover new offers
  /career-ops batch     → Batch processing with parallel workers

Inbox: add URLs to data/pipeline.md → /career-ops pipeline
Or paste a JD directly to run the full pipeline.
```

---

## Context Loading by Mode

After determining the mode, load the necessary files before executing:

### Modes that require `_shared.md` + their mode file:
Read `modes/_shared.md` + `modes/{mode}.md`

Applies to: `auto-pipeline`, `oferta`, `ofertas`, `pdf`, `contacto`, `apply`, `pipeline`, `scan`, `batch`

### Standalone modes (only their mode file):
Read `modes/{mode}.md`

Applies to: `tracker`, `deep`, `training`, `project`

### Modes delegated to subagent:
For `scan`, `apply` (with Playwright), and `pipeline` (3+ URLs): launch as Agent with the content of `_shared.md` + `modes/{mode}.md` injected into the subagent prompt.

```
Agent(
  subagent_type="general-purpose",
  prompt="[content of modes/_shared.md]\n\n[content of modes/{mode}.md]\n\n[invocation-specific data]",
  description="career-ops {mode}"
)
```

**IMPORTANT for pipeline mode:** Include `modes/pdf.md` content in the subagent prompt. For each evaluated offer with score >= 3.0, PDF generation is MANDATORY. The subagent must execute the complete PDF pipeline (extract keywords, rewrite summary, generate HTML, run generate-pdf.mjs) for each offer. Do not skip PDF generation.

**IMPORTANT for apply mode:** 

YOU MUST OUTPUT THE RESUME RECOMMENDATION IN THE EXACT FORMAT SPECIFIED IN modes/apply.md. This includes the "Why This Resume" section. Do not deviate from this format. YOU MUST ALSO OUTPUT THE SCORE FOR EACH RESUME RECOMMENDATION. The score should be based on the match between the JD and the content of the resume, with a focus on relevance to the role's responsibilities and requirements. YOU MUST ALSO SAY IF YOU HAD TO READ THE FILE IN DOWNLOADS TO MAKE THE RECOMMENDATION. If you had to read the file, include a note in the "Why This Resume" section explaining that the recommendation was based on the content of the resume file. IF SCORES ARE WITHIN 10 POINTS, YOU MUST READ THE FILE AND OPEN IT FOR THE ANALYSIS. If one resume has a score that is more than 10 points higher than the other, you can make the recommendation based on the content of the CVs without reading the file.
FIND THE FILES AT 
C:\Users\daris\Downloads\DarisChenResumeAI.pdf
C:\Users\daris\Downloads\DarisChenResumeEE.pdf
C:\Users\daris\Downloads\DarisChenResumeSWE.pdf
C:\Users\daris\Downloads\DarisChenResumeWD.pdf


WRITING RULES (ENFORCED):
1. **NO em dashes (—) anywhere.** Replace all "X — Y" with "X. Y" or "X, so Y". 
2. **NO colons (:) in essay prose.** Replace all "X: Y" with "X. Y" or restructure to "The Y that X" or similar.
3. **NO "it's not X, it's Y" structure.** Reframe positively. Instead of "It's not just research", write "My work drives impact by combining research and shipping."

These rules apply to ALL generated text (cover letters, form answers, additional info, interview prep).

At the end of the message, always output the CSV at the end. Format: `{Company},{Title},Career Ops,,,,{ResumType}`. ResumType is detected from JD keywords: AI (agent/llm/model/neural/multimodal/rag) | EE (hardware/fpga/circuit/verilog/embedded) | WD (react/frontend/web/next.js/typescript/css) | SWE (default). For batch (multiple offers), output one CSV line per offer.

Execute the instructions from the loaded mode file.
