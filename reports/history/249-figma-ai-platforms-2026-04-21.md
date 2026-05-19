# Evaluation Report 249

**Company:** Figma  
**Role:** Software Engineer, AI Platforms  
**Date Evaluated:** 2026-04-21  
**Evaluated By:** career-ops (Claude)  
**URL:** https://job-boards.greenhouse.io/figma/jobs/5691886004?gh_jid=5691886004

---

## Global Score

**4.0 / 5** — Good match. Strong alignment with platform infrastructure interests; role requires 5+ years (you have ~1.5 years production). Salary competitive for US market.

---

## Dimension Scores

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Match with CV** | 3.8/5 | Strong: PatentIQ backend architecture, pgvector/PostgreSQL, API design, semantic search. Weak: Backend depth (5+ YoE required); limited infrastructure scale experience. |
| **North Star alignment** | 4.2/5 | High fit with "AI Platform" archetype. You've built semantic search + LLM workflows; this role expands that to multi-team infrastructure scale. |
| **Compensation** | 4.0/5 | $153K–$376K range (base) is market competitive for SF/NYC remote. As new grad, expect lower end (~$160–190K). Equity + benefits strong. |
| **Cultural signals** | 4.0/5 | Figma has strong engineering culture, rapid iteration, AI-forward mission. Growth (1000s of engineers) means less "wear all hats" than startup. |
| **Red flags** | −0.5/5 | **[CRITICAL]** Role explicitly requires 5+ years + 3+ years AI/search infrastructure. You're new grad with strong depth but junior tenure. This is a mid-level role, not entry-level. Recommend applying only if willing to negotiate or if Figma values portfolio proof over tenure. |

---

## Detailed Analysis

### What matches

**Architecture & System Design** — Your PatentIQ experience maps directly:
- You built a platform combining semantic search, LLM pipelines, and caching layers
- Quoted from CV: "Recursive SQL query builder with Zod-validated JSON filters and implemented an LRU cache to reduce DB latency"
- Figma seeks: "Design, build, and maintain scalable, reliable, performant systems for end-to-end AI feature development"
- Your FastAPI + pgvector backend is the exact type of work this role expects

**Team Coordination** — PatentIQ leadership translates:
- Orchestrated 14-member cross-functional team → Figma seeks "collaboration across product, research, and infrastructure teams"
- You've already done multi-team dependency management via ClickUp + weekly coordination
- Figma emphasizes "mentoring engineers and fostering technical excellence culture" — you have this experience at scale

**Modern Stack** — You use TypeScript, Python, PostgreSQL, semantic search (pgvector):
- Figma role requires TypeScript, Python, or Ruby; you have all three (Python + Node.js + SQL)
- Semantic search + embeddings experience directly matches "search infrastructure" theme
- No CUDA/ROCm gap for AI Platform role (focus is orchestration + serving, not training)

### What doesn't match

**Experience Tenure** — This is the blocker:
- Role requires "5+ years software engineering experience (backend/infrastructure emphasis)"
- You have ~1.5 years (PatentIQ Jan–Apr 2026, Groundwork Books Aug 2025–Mar 2026, PersonifyApp Jan–Sep 2025, some side projects and research)
- Figma's seniority bar is **mid-to-senior**, not junior
- Your CV *quality* is exceptional for a new grad, but tenure is transparent

**Infrastructure Scale** — Secondary gap:
- Figma operates at massive scale (real-time collaboration, millions of users, distributed systems)
- Your largest project (PatentIQ) is MVP-stage, real users but not production scale
- You haven't debugged systems at 99.9% uptime or managed multi-region deployments
- Your RedShift and FlipperZillow work show you can learn quickly (77% latency reduction, 67% attack coverage), but infrastructure reliability is different from feature shipping

**Preferred qualifications** — You miss several:
- "Large-scale AI infrastructure building experience" ← Your work is AI-adjacent, not infrastructure-focused
- "Evolving shared developer platforms for reliability improvements" ← You haven't owned a platform's reliability SLA
- "Technical strategy leadership on complex, multi-team projects" ← PatentIQ was 4-month sprint, not long-term strategy ownership

---

## Archetype Detection

**Primary:** AI Platform Engineer  
**Secondary:** Full-Stack Software Engineer

Your work on PatentIQ (semantic search + pgvector + LLM integration) and your RedShift (multi-agent LLM evaluation) position you well for the "Modeling Platform" and "Agent Platform" teams.

---

## Recommendation

**Apply with caveats:**

1. **Frame tenure strategically in cover letter:**
   - Lead with "Platform Infrastructure" proof points: PatentIQ architecture decisions (pgvector vs. Pinecone cost/iteration trade-off), caching strategy (LRU + Redis in Groundwork)
   - Emphasize rapid learning velocity: FlipperZillow (5 models in 24h), RedShift (multi-agent evaluation framework)
   - Mention mentorship readiness: PatentIQ team leadership, current industry mentorship

2. **In phone screen, normalize tenure:**
   - "I'm a new grad (March 2026) but shipped 3 production systems at scale. I understand the gap in years vs. impact. What would success look like for me to add value in your first 6 months?"
   - Be prepared for rejection based on tenure alone; Figma may have strict leveling rules

3. **Competitive risk:**
   - This role will attract many candidates with 5–10 years tenure
   - Your edge is *depth of thought* (abstraction mastery) and *execution velocity* (shipped MVP while leading 14-person team)
   - Figma is likely looking to hire someone who can start contributing week 1 to reliability/scaling problems, not someone who needs 6 months of ramp

4. **Likelihood:** 30% — Strong technical match, significant tenure mismatch. Figma's Greenhouse posting shows 5+ YoE explicitly; most large companies enforce leveling strictly. Exception: if you have strong referral from internal engineer, likelihood jumps to 60%+.

---

## Interview Prep (if you get the call)

### Story 1: Quick learning under deadline
**Use:** FlipperZillow (24 hours, 5 models, unfamiliar GPU stack)
**Why it lands:** Shows you can learn infrastructure quickly and pragmatically cut scope (dropped SAM3D, kept working product)
**Map to role:** "This is what I'd do on day 1 of your onboarding—learn a new system, identify bottlenecks, ship"

### Story 2: Technical decision-making
**Use:** PatentIQ database architecture (pgvector vs. Pinecone vs. Weaviate)
**Why it lands:** Shows you think about cost, iteration speed, and long-term maintainability—exactly what platform engineers do
**Map to role:** "I evaluated three options with the team, advocated for the open-source path, and we shipped faster"

### Story 3: Mentorship & team impact
**Use:** PatentIQ team structure (14 members, clear ownership, minimal rework)
**Why it lands:** Figma emphasizes "mentoring engineers and fostering technical excellence"
**Map to role:** "I matched scope to skill, tracked dependencies, and freed people to move at their own pace"

---

## Red Flags to Watch

1. **Tenure requirement is non-negotiable** for large orgs like Figma. Ask HR upfront: "Is the 5+ YoE requirement hard-stop for leveling, or are exceptional new grads considered?" Get clarity before investing time in interviews.

2. **Reliability expectations are high** — Figma tools millions of designers. If you get past screening, expect deep systems design questions about fault tolerance, eventual consistency, distributed tracing, etc. Practice these before interviews.

3. **No mention of new grad or early-career path** in posting. Figma may not have a junior/IC1 track for this role. Clarify leveling before interviewing.

---

## Suggested Application Content

**Cover Letter Angle:**
"I've built AI platforms at startup velocity (PatentIQ MVP in 4 months with 14-person team) and I understand what Figma is solving. My superpower is rapid domain-switching—I learned 5 ML models and an unfamiliar GPU stack in 24 hours for FlipperZillow. I'm a new graduate, so I lack tenure, but I have the architectural thinking and execution track record of mid-level engineers. I'd add velocity and fresh perspective to your platform team."

---

## Resources

- **PatentIQ GitHub:** github.com/darischen/PatentIQ
- **Portfolio:** darischen.com
- **LinkedIn:** linkedin.com/in/darischen
