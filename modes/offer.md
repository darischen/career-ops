# Mode: offer — Full A-F Evaluation

When user pastes an offer (text or URL), ALWAYS deliver all 6 blocks:

## Step 0 — Archetype Detection

Classify the offer into one of your 4 archetypes (see `_shared.md`). If hybrid, indicate the 2 closest. This determines:
- Which proof points to prioritize in Block B
- How to rewrite the summary in Block E
- Which STAR stories to prepare in Block F

## Block A — Role Summary

Table with:
- Detected archetype
- Domain (platform/agentic/LLMOps/ML/enterprise)
- Function (build/consult/manage/deploy)
- Seniority
- **Location** (city/country, remote/hybrid/onsite)
- Remote (full/hybrid/onsite)
- Team size (if mentioned)
- TL;DR in 1 sentence

**Location Check:**
- ✅ **US-based** or **Full Remote** → continue
- ❌ **Non-US onsite** (Tokyo, London, Berlin, etc.) → flag as RED FLAG
- ⚠️ **Relocation required outside US** → flag warning (you're willing to relocate within US only)

## Block B — Match with CV

Read `cv.md`. Create table mapping each JD requirement to exact CV lines.

**Adapted by archetype:**
- If Full-Stack → prioritize delivery speed, real-time systems, databases
- If AI/ML → prioritize neural networks, LLM work, computer vision
- If Hardware → prioritize FPGA, SystemVerilog, analog design
- If Web Dev → prioritize React, Next.js, performance optimization

**Gaps section** with mitigation strategy for each:
1. Is it a hard blocker or nice-to-have?
2. Can candidate demonstrate adjacent experience?
3. Is there a portfolio project that covers this gap?
4. Concrete mitigation plan (cover letter phrase, quick project, etc.)

## Block C — Level & Strategy

1. **Detected level** in JD vs **natural level for candidate in that archetype**
2. **"Sell senior without lying" plan**: Specific phrases adapted to archetype, concrete achievements to highlight, how to position founder experience as advantage
3. **"If they downlevel" plan**: Accept if comp is fair, negotiate 6-month review, clear promotion criteria

## Block D — Comp & Demand

Use WebSearch for:
- Current salaries for role (Glassdoor, Levels.fyi, Blind)
- Market rates for location + level
- Equity benchmarks if startup
- Signing bonuses typical for this level

## Block E — Red Flags & Wins

**Red flags:**
- Tech stack (legacy tech in your dealbreakers?)
- Compensation (below market?)
- Location/relocation support
- Hiring velocity (slow process?)
- Team size/headcount uncertainty
- Cultural signals (startup chaos vs. bureaucracy?)

**Wins:**
- Explicit new grad pathway
- Learning opportunity (mission-critical project type)
- High visibility work
- Strong mentorship signals
- Equity/bonus structure

## Block F — Interview Prep

If score >= 3.0, generate 5 STAR+R stories to prepare:

1. **Learned quickly under deadline** (FlipperZillow 48h)
2. **Advocated for technical approach** (PostgreSQL + pgvector over Pinecone)
3. **Shipped under constraints** (cut SAM3D, shipped working product)
4. **Team leadership** (PatentIQ 14-person team)
5. **Technical depth match** (story specific to this role's domain)

Format:
- **Situation**: Where? When? Team size?
- **Task**: What was the ask?
- **Action**: What did YOU do? (not the team)
- **Result**: What changed? Metrics?
- **Reflection**: What did you learn?

---

## Final Score: 1-5 Scale

**5 = Ideal fit** — Archetype match, strong comp, modern tech, aligned with goals
**4 = Strong fit** — Good match, minor gaps, solid opportunity
**3 = Apply if active** — Decent fit, some concerns, but worth exploring
**2 = Low fit** — Misaligned archetype, significant gaps, below-market comp
**1 = Pass** — Deal-breaker on tech, location, or culture

---

## CSV Output

After evaluation, output to CSV for your sheet:

```csv
Company,Role,Website Found,,,Notes,Resume Used
{company},{role},{website},,,{notes},{resume_type}
```

Where:
- `{website}`: Company Site, LinkedIn, Handshake, Email (or blank if not provided)
- `{resume_type}`: EE, AI, WD, or SWE
