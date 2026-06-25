# career-ops (Daris Chen fork)

> **This is an independent fork (cloned with full history), not a GitHub fork.** The original project is **[santifer/career-ops](https://github.com/santifer/career-ops)** by [Santiago](https://santifer.io), the AI job search command center that turns any AI coding CLI into an offer-evaluation, CV-tailoring, portal-scanning, application-tracking pipeline. This repo shares the upstream's entire commit history but is a standalone repository (GitHub does not link it as a fork). All credit for the core system, archetypes, scoring logic, and negotiation playbooks goes to the upstream author.
>
> This fork ([darischen/career-ops](https://github.com/darischen/career-ops)) is a personalized, Claude-Code-first version. For the full feature tour, setup guide, and multi-CLI support, read the [upstream README](https://github.com/santifer/career-ops/blob/main/README.md). This file documents only what differs here.

## Relationship to upstream

| | Repo |
|---|---|
| **Original** | [santifer/career-ops](https://github.com/santifer/career-ops) |
| **This fork** | [darischen/career-ops](https://github.com/darischen/career-ops) |

To pull future upstream changes:

```bash
git remote add upstream https://github.com/santifer/career-ops.git
git fetch upstream
git merge upstream/main   # resolve conflicts in the customized files below
```

## What this fork changes

Four substantive changes on top of upstream, plus trimming.

### 1. `modes/apply.md` rewritten (the biggest change)

`apply.md` is the most heavily modified file in the fork (250 insertions, 87 deletions). The single live-application mode was rebuilt around a personal four-resume setup and a stricter, token-cheaper workflow.

- **No subagent.** The mode now runs directly (`DO NOT USE A SUBAGENT FOR THIS MODE`) so you review at every step instead of handing off to a background agent.
- **New resume selector (Step 3).** A two-phase matcher: first score the JD keywords against four resume variants (`AI` / `SWE` / `EE` / `WD`) with per-archetype keyword lists and `+3` strong-signal boosts, then **only read the actual PDFs when the top two scores land within 10 points** of each other. A clear lead skips PDF reading entirely. Reduces token cost on the common case.
- **Fixed recommendation block.** A `📄 RESUME RECOMMENDATION` box (keyword scores, recommended variant, confidence /100, top 3 signals, why) printed to the **terminal every run**, even when the form has no essay questions.
- **Skip boilerplate.** Name, email, EEO/demographics, work authorization, relocation, and other profile fields are explicitly skipped instead of getting generated answers. Only essay and company-specific prompts get drafted.
- **Enforced anti-AI-detection writing rules.** No em dashes, no colons in prose, no "it's not X, it's Y" framing, in all generated text, with the structural batch header token kept as the only exception.
- **Output routing.** Multi-sentence essays go to `output/essay.txt` (never the terminal); short answers and the tracker CSV print to the terminal.
- **CSV tracker line (Step 9).** Always emits a `Company,Title,Site Found,Date,Tag,Notes,Resume Used` line for Google Sheets, with comma-quoting, even when no questions exist.
- **Playwright resilience.** Browser-closed errors fall back to manual screenshot/paste instead of failing the run.
- **Tradeoff / removed from upstream:** the upstream apply mode's preflight posting-liveness gate, the structured field contract (`field_type`/`required`/`limit`/`needs_candidate_confirmation`), and the "never invent answers for legal/demographic/visa/salary fields" safety block were dropped in favor of this workflow. Those guardrails are gone here. The skip-boilerplate rule covers demographics in practice, but verify sensitive fields yourself.

### 2. SKILL.md is a real router, not a symlink

Upstream ships `.claude/skills/career-ops/SKILL.md` as a **symlink** (git mode `120000`) into `.agents/skills/career-ops/SKILL.md`, so one canonical skill definition serves every CLI wrapper (Claude Code, OpenCode, Gemini, Qwen).

This fork **replaces that symlink with a standalone Claude-Code skill file**. The benefits and tradeoffs:

- **Strict mode execution.** Added a "Modes in `modes/*.md` are specifications, not guidelines" contract. Follow steps in order, match output format exactly, output to the specified destination, do not improvise. Ambiguity gets flagged to the user instead of guessed.
- **`apply` routes by link count.** The `apply` sub-command now maps to an `apply-router` that counts links and dispatches: 0-1 link → single `apply`, 2+ links → `batch-apply` (the parallel judge pipeline below).
- **Pipeline never generates PDFs** (see change 3).
- **Personalized apply rules** baked in: four local resume variants (`AI` / `EE` / `SWE` / `WD`) with scoring, a "read the actual PDF if scores are within 10 points" tiebreak rule, enforced writing rules (no em dashes, no colons in prose, no "it's not X, it's Y" framing), and a fixed CSV output format for the tracker.
- **Tradeoff:** because it is no longer a symlink, this skill no longer auto-shares with the OpenCode / Gemini / Qwen wrappers, and upstream edits to the canonical skill will not flow in automatically. This is deliberate. The router is Claude-Code-specific and machine-specific.

### 3. No PDF generation in automated flows

Upstream auto-generates an ATS-optimized PDF as part of the pipeline. This fork **removes CV/PDF generation from every automated flow** (pipeline, scan, batch, apply). The skill explicitly instructs: do not load `modes/pdf.md`, do not run `generate-pdf.mjs`, do not produce a CV PDF for any offer.

What stays: reading existing local resume PDFs to *select* which variant to recommend (`apply` mode still opens the files in `Downloads/` when two variants score within 10 points of each other). The system recommends a resume, it does not manufacture one.

Rationale: the four resume variants are maintained by hand for quality. Auto-generated PDFs added cost and noise without improving fit.

### 4. Batch-apply multi-agent pipeline (conductor / worker / judge)

The largest addition. A parallel application pipeline under `batch/` built on a **conductor / worker / judge** split, communicating through files in `batch/pending/`.

```
        ┌─────────────────────────────┐
        │  batch-apply.mjs            │   node batch/batch-apply.mjs <urls>
        │  prints the spawn plan      │   wipes pending/, writes pending-plan.json
        └──────────────┬──────────────┘
                       │
   ┌───────────────────┼───────────────────────────┐
   │                   │                            │
┌──▼──────────┐   (cache prime)              ┌──────▼───────────────┐
│ CONDUCTOR   │   apply.md + cv.md + 4 PDFs  │ JUDGE                │
│ (1 agent,   │   → ephemeral cache          │ batch/judge.mjs      │
│  serial     │                              │ DETERMINISTIC script │
│  Playwright)│   ┌────────┐ ┌────────┐      │ (0 tokens, regex)    │
└──┬──────────┘   │WORKER 1│ │WORKER N│ ...  └──────┬───────────────┘
   │  {id}-jd.txt │(Haiku) │ │(Haiku) │             │
   └──────────────┴────────┴─────── batch/pending/*.json ──────────┘
                       file-based message bus
```

**Roles:**

- **`batch-apply.mjs`** (orchestrator): wipes stale `batch/pending/`, parses the links, prints the 4-phase spawn plan, and writes full prompts to `batch/pending-plan.json`. `primeCache()` warms the ephemeral cache with `apply.md + cv.md + 4 PDFs` between the conductor and the workers.
- **Conductor** (1 agent, `general-purpose`): the only agent that touches Playwright, navigating each URL **sequentially** to avoid tab races. Writes `batch/pending/{id}-jd.txt`, then `conductor-done.txt`.
- **Workers** (one per job, Haiku, `run_in_background`, no browser): read their `{id}-jd.txt`, read the cached PDFs, score the four resume variants, and write `batch/pending/{id}-output.json`. They poll `{id}-feedback.json` and retry on reject; deletion of their `output.json` means the judge approved it.
- **Judge** (`batch/judge.mjs`, a **deterministic Node script — not an LLM agent**): polls `batch/pending/*-output.json`, validates each with regex (8 recommendation sections, the fixed CSV suffix, resume-code consistency), appends approved blocks to `output/batch.txt`, writes `{id}-feedback.json` for rejects, and exits when the conductor is done and nothing is pending.

**Why this design:** agents spawned with `run_in_background` share no memory, so the filesystem is the message bus. Serializing Playwright in the conductor avoids the tab-race that parallel browser access causes; routing all `batch.txt` writes through the judge avoids concurrent-write corruption. The judge is a script because format validation is mechanical — that makes it reproducible and **zero-token**. Workers run on Haiku, so a small batch costs cents and finishes in 5-10 minutes instead of ~25 sequentially. Measure real cache savings with `node batch/test-cache-savings.mjs`.

Docs for this pipeline:

| File | Purpose |
|---|---|
| `modes/batch-apply.md` | **Canonical spec** (4-phase conductor/worker/judge) |
| `batch/BATCH-APPLY.md` | Overview and orientation |
| `batch/BATCH-APPLY-RUN.md` | Step-by-step orchestration and monitoring |
| `batch/BATCH-APPLY-JUDGE.md` | The deterministic judge (`judge.mjs`) and its rules |
| `batch/BATCH-APPLY-CACHING.md` | Prompt-cache mechanics and the test harness |
| `batch/APPLY-ROUTING.md` | How `apply` routes to single vs batch |
| `batch/batch-apply.mjs`, `batch/judge.mjs` | Implementation |
| `batch/test-cache-savings.mjs` | Empirical NONE/CV-ONLY/APPLY-CV cache A/B/C |

### Other trimming

To keep the fork focused on a single user on Claude Code, the non-English mode translations (`modes/de`, `fr`, `ru`, `tr`, `ua`, ...), the standalone ATS provider modules, the scaffolder, and the upstream test suite were removed. Pull them back from `upstream/main` if you need them.

## Personalization note

This fork hard-codes one person's data and machine paths (resume files in `C:\Users\daris\Downloads\`, archetypes, writing rules). It is not meant to be used as-is. If you want the general-purpose system, start from [santifer/career-ops](https://github.com/santifer/career-ops) and let it onboard you. If you want a Claude-Code-first layout with the judge pipeline, fork *this* and replace the personalized files (`cv.md`, `config/profile.yml`, `modes/_profile.md`, the resume paths in `.claude/skills/career-ops/SKILL.md`).

## License

Inherits the upstream [MIT License](LICENSE). The "career-ops" name and brand are governed by the upstream [Trademark Policy](https://github.com/santifer/career-ops/blob/main/TRADEMARK.md).
