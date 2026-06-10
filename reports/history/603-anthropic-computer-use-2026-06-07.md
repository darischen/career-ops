# Anthropic — Product Engineer, Computer Use

**URL:** https://job-boards.greenhouse.io/anthropic/jobs/5238637008

**Score:** 4.5/5

**Status:** Evaluated — Apply Recommended

---

## A. Role Summary

| Dimension | Assessment |
|-----------|------------|
| **Archetype** | Full-Stack AI Engineer / Product Engineer |
| **Domain** | AI Agent Infrastructure (Computer Use, Browser Control) |
| **Function** | End-to-end product development, agent runtime, system reliability |
| **Seniority** | Early-career / Senior new grad (explicit "founding/early engineer" language) |
| **Location** | SF or Seattle |
| **Remote** | Hybrid (25% in-office) |
| **Team Size** | Medium (computer-use team, works with researchers + Claude cowork team) |
| **TL;DR** | Build end-to-end product surfaces for Claude's computer use capability. Full-stack, AI-native, high autonomy. Exceptional new grad match. |

---

## B. Match with CV

**Strong Alignment:**

1. **Zero-to-one shipping** (Requirement: "Experience building and shipping a product from zero to one with end-to-end ownership")
   - PatentIQ MVP: End-to-end ownership as lead architect + primary contributor. Shipped AI-powered patent search + drafting assistant in 6 weeks. Team lead for 14-person cross-functional group.
   - Groundwork Books: Architectural migration + real-time inventory sync + semantic search layer (Pinecone + embeddings).
   - CV evidence: "Orchestrated Agile development workflows via ClickUp for a 14-member cross-functional team while serving as lead architect and primary contributor."

2. **Full-stack engineering** (Requirement: "Strong full-stack engineering skills, including production web frontend and backend development")
   - PatentIQ: Next.js frontend (Vercel) + FastAPI backend (EC2) + Supabase database + Auth0.
   - Groundwork Books: Next.js + Square API integration + Redis caching + semantic search.
   - CV evidence: "Constructed an AI-powered patent search...hosted on Vercel, EC2, and Supabase using Next.js, Auth0, and FastAPI."

3. **LLM API hands-on experience** (Requirement: "Hands-on experience building with LLM APIs, prompting, or agent frameworks")
   - PatentIQ: "Constructed an AI-powered patent search...using...OpenAI text-embeddings."
   - FlipperZillow: "Claude for semantic search, piping DFormerV2 spatial analysis into Claude Sonnet 4.6 to generate property scripts."
   - Simplerfy: "Programmed an AI optimization engine using the Claude API."
   - RedShift: "Engineered an automated adversarial attack framework for LLMs...implementing Chain-of-Thought injection techniques to bypass safety filters."

4. **Shipping to external users** (Requirement: "A track record of shipping to external users and iterating based on their feedback")
   - PatentIQ: "MVP...to deliver...PatentIQ AI technical MVP." Shipped to real users (early-stage founders in accelerator).
   - Groundwork Books: Production e-commerce, real users buying products.
   - Simplerfy: Job application management platform with browser extension, shipped.

**Perfect Fit on Preferred Qualifications:**

1. **Strong product design instincts** (Preferred): Personal portfolio site with Lighthouse 100/100, Groundwork Books UI redesign, form auto-detection in Simplerfy.

2. **Browser automation** (Preferred): Simplerfy uses Chrome Extension API for form auto-filling. Custom automation logic.

3. **Agent loops and tool integrations** (Preferred): PatentIQ semantic search ranking (tool integration with embeddings). FlipperZillow multi-stage pipeline (agent-like flow). RedShift adversarial prompt orchestration.

4. **LLM system design**: Full understanding of inference, embeddings, retrieval, safety considerations (RedShift red teaming).

**Minimal Gaps:**

1. "Evals or quality harnesses for ML systems" (Preferred): RedShift has batch evaluation pipeline using PyTorch DataLoaders, but not formal eval framework. Easily learnable on job.

2. SQL/data analysis: Some exposure (PatentIQ pgvector queries, Groundwork Books inventory SQL), but not deep. Minor gap.

---

## C. Level & Strategy

**Detected Level:** Early-career engineer, "founding/early engineer at startup or equivalent ownership inside a larger company."

**Your Level:** New grad with exceptional ownership + shipping track record.

**Positioning Strategy:**

1. **Lead with PatentIQ**: This is your proof point. 14-person team. Shipped MVP. Lead architect. Real users. Real impact.
2. **Emphasize full-stack + LLM experience**: They need someone who can own browser-control surfaces end-to-end (UI + agent runtime + backend).
3. **Highlight pragmatism**: FlipperZillow story (cut SAM3D when it broke, shipped working product). Shows you understand trade-offs under deadline.
4. **Mention learning velocity**: 24-hour ROCm + DepthAnythingV2 + DFormerV2 ramp. Shows you can pick up unfamiliar tech fast (important for agent harness work).

**Downlevel Plan:** Not needed. You're the target profile.

---

## D. Comp & Market

**Posted Range:** $300,000 - $320,000 USD

**Market Context:** This is strong new grad comp for AI/product engineering roles at Tier-1 companies. Anthropic is paying at the top of market. Your target is $80K+; this exceeds it significantly.

**Benchmark:** 
- Typical new grad SWE: $150-200K (Google, Meta, Apple)
- AI-native startups (Series B-C): $120-180K
- Anthropic (world-class AI company): $300-320K

**Assessment:** Exceptional. This is "land and forget about comp" territory. Focus on fit and learning, not negotiation.

---

## E. Red Flags & Wins

**Red Flags:**

1. **Hybrid 25% requirement**: You're in San Diego, willing to relocate. SF/Seattle are both feasible, but this requires relocation commitment. Not a blocker, but flag it.

2. **High ambiguity**: "This is a dynamic role in which priorities evolve frequently." You have experience (PatentIQ priorities shifted constantly), but worth being aware.

3. **Requires technical depth + product sense**: You have both, but this is a high-bar role. They're hiring someone to directly partner with researchers and Claude Cowork team on agent infrastructure. No managers between you and the work.

**Wins:**

1. **World-class company culture**: Anthropic's mission is AI safety and steerable systems. You care deeply about this (RedShift red teaming, safety alignment themes).

2. **Computer Use is frontier research**: Claude's computer-use capability is groundbreaking. You'll be working on something that matters at the frontier of AI.

3. **Full technical autonomy**: You'll own end-to-end delivery of product surfaces. No layers between you and the work. This matches your style (PatentIQ lead architect role).

4. **Research org environment**: You value learning. Being in Anthropic's research org means exposure to frontier capabilities and bleeding-edge LLM progress.

5. **Comp is exceptional**: $300-320K as a new grad is the top tier. Offset any early-career gap with impact and learning opportunity.

6. **Team composition**: You'll work alongside researchers building agent harness + Claude Cowork team on knowledge-worker workflows. This is high-leverage mentorship opportunity.

**Critical Win:** The job description explicitly says "founding/early engineer at startup or equivalent ownership inside a larger company." PatentIQ is exactly this: you led architecture and shipping of the MVP. This is the exact profile they're hiring.

---

## F. Interview Prep

**If you get an interview, be ready for:**

1. **"Walk us through PatentIQ from zero to one"**
   - Situation: Led 14-member team, shipped AI-powered patent search MVP in 6 weeks.
   - Task: Build full-stack MVP with semantic search, auth, hosting.
   - Action: Owned architecture decisions (PostgreSQL + pgvector vs. Pinecone), delegated work to data scientist (ML pipeline), backend engineer (server), frontend dev (UI). Tracked dependencies with PMs weekly.
   - Result: Shipped MVP with clear ownership, real users in accelerator using it.
   - Why it matters: Shows you can own end-to-end delivery and manage technical teams.

2. **"You'll be responsible for browser-control product surfaces and agent runtime reliability. How would you approach this?"**
   - Use Groundwork Books semantic search layer as proxy (built search + ranking, measured p99 latency reduction).
   - Talk about instrumentation: PatentIQ uses Firebase analytics, Groundwork uses Square API metrics. You understand the instrumentation loop.
   - Talk about reliability: Redis caching reduced Square API latency from N/A to sub-200ms p99 (optimized critical path).
   - Emphasize: You'd profile reliability issues in the agent harness, identify bottlenecks, optimize the critical path.

3. **"How would you balance shipping speed with robustness in an agent system?"**
   - FlipperZillow story (24-hour hackathon, cut SAM3D when it broke on ROCm, shipped working product). Shows pragmatism.
   - PatentIQ approach: Iterated on schema and indexing based on researcher feedback. Shipped working MVP first, optimized later.
   - Key insight: In early-stage work, demonstrating something working beats perfect optimization.

4. **"What's your experience with evals and quality harnesses?"**
   - RedShift: Batch evaluation pipeline using PyTorch DataLoaders to scale adversarial prompts across 7 model architectures.
   - Be honest: You haven't built formal eval frameworks (like RewardBench or LM Eval), but the patterns are familiar. Learning this on job is straightforward.

5. **"Why Anthropic? Why this role?"**
   - AI safety mission: RedShift red teaming was your way of exploring safety. You care about building trustworthy systems.
   - Computer use is frontier work: This capability will power the next generation of agent-based products. You want to be part of that.
   - Learning culture: Anthropic publishes research. You want to learn from the frontier AI team.
   - Full ownership: PatentIQ taught you that full-stack + full-ownership is how you work best. This role gives you that.

---

## Summary

**This is your best Anthropic opportunity.** The job description reads like it was written for someone with PatentIQ experience: shipping a product zero-to-one as the lead engineer, full-stack skills, LLM hands-on experience, and pragmatism under deadline.

The Computer Use team is frontier research (Claude's computer-use capability is groundbreaking). Comp is exceptional ($300-320K). Culture is world-class. And you'll have direct technical autonomy with no layers between you and the work.

**Recommend applying immediately.** This is a strong fit and a once-in-a-career opportunity.
