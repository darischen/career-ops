# Notion — Software Engineer, AI Workflows

**URL:** https://jobs.ashbyhq.com/notion/17330e14-83db-49a4-ae31-411690d97dba

**Score (A-F blocks):**
- A (Match with CV): 4.2/5
- B (North Star): 4.3/5
- C (Compensation): 3.8/5
- D (Culture): 4.2/5
- E (Red Flags): 3.8/5

**Global Score: 4.1/5 — Applied**

---

## Role Summary

Notion is hiring a Software Engineer to build AI-powered custom agents and asynchronous workflows. This is a full-stack role combining LLM integration (embeddings, semantic search, prompt engineering), backend system design (async task pipelines), and frontend responsiveness. Mid-to-senior level, but open to high-performing new grads. Tech stack: React, TypeScript, Node.js, PostgreSQL.

---

## A: Match with CV

**Fit: 4.2/5** — Excellent fit across frontend, backend, and AI integration.

**Strengths:**
- **AI Integration:** PatentIQ semantic search (OpenAI embeddings + pgvector + Claude API) shows you can wire LLMs into production systems. You architected the full pipeline: embedding → retrieval → ranking → API response.
- **Full-Stack:** PatentIQ (FastAPI + Next.js + Auth0 + Supabase) demonstrates end-to-end ownership from backend to UI.
- **Async Workflows:** Groundwork Books (Redis caching, look-aside caching with 2-minute TTL) and PatentIQ (batch embedding generation) show you understand async patterns.
- **Databases:** PostgreSQL with pgvector (semantic search) and Prisma ORM show modern SQL expertise.
- **Frontend:** React/TypeScript/Tailwind CSS across multiple projects (PatentIQ, Groundwork, Simplerfy, Personal Portfolio).

**Gaps:**
- No production agent orchestration (you built linear pipelines, not multi-step agent flows)
- Limited async task queue experience (you used Redis/TTL, not Temporal or Bull.js)
- No deployment at Notion scale (Notion has 10M+ users; your apps are smaller)
- No experience with system-wide observability (monitoring agent behavior across users)

---

## B: North Star (Archetype Fit)

**Fit: 4.3/5** — Perfect match: Full-Stack Software Engineer archetype.

This is exactly your profile: "React, TypeScript, FastAPI, semantic search, real-time systems." You've built PatentIQ, which is almost identical: full-stack AI product with LLM APIs + database + UI.

---

## C: Compensation

**Fit: 3.8/5** — Mid-to-senior role at Notion (Series N, highly profitable).

**Estimate:**
- Base: $180K–$250K (mid-to-senior range in SF/NYC)
- Equity: 0.05–0.15% (mature company, slower vest)
- Bonus: 10–15% annual
- Total comp: ~$220K–$280K annualized

**Reality:** You're a new grad. They likely offer **$140K–$180K** base entry-level + equity. Still strong for new grad.

---

## D: Culture

**Fit: 4.2/5** — Excellent: profitable, fast-moving, healthy.

**Strengths:**
- Notion is stable and growing (profitable, private, high retention)
- 3-day hybrid (flexible; you can be remote most days)
- AI-first culture: leadership believes AI agents are strategic
- Small teams with high ownership (100 people per product area)

**Minor Concerns:**
- SF/NYC based (you're in San Diego, willing to relocate)
- Large codebase (high learning curve for onboarding)

---

## E: Red Flags

**Concerns: 3.8/5**

1. **Large-Scale Async:** Notion's async system is more complex than what you've built. You'd need to ramp on their architecture (1-2 months).
2. **Hybrid in SF/NYC:** You'll need to relocate or do 3 days/week in-office. Doable, but requires commitment.
3. **No Agent Experience:** You haven't built multi-step agent flows. They might expect some familiarity.
4. **Mid-to-Senior Title:** You're new grad; they might expect 2–3 years experience. But role description says "open to strong new grads."

---

## Global Score & Recommendation

**4.1/5 — Applied: APPLY (strong fit)**

This role is tailor-made for you. You have:
1. Full-stack skills (React + backend)
2. AI/LLM integration experience (PatentIQ)
3. Databases + semantic search (PostgreSQL + pgvector)
4. Pragmatic shipping mindset (compatible with Notion's culture)

**What to emphasize in application:**
- PatentIQ: End-to-end AI product (architect + primary contributor + team lead)
- Semantic search implementation: PostgreSQL pgvector hybrid ranking
- Full-stack shipping: Notion values people who own problems end-to-end
- Learning velocity: FlipperZillow (learned 5 new ML techs in 48 hours)

**What to prepare for interview:**
- Async system design: How would you scale a workflow system for 10M+ users?
- LLM integration trade-offs: When to use embeddings vs. RAG vs. fine-tuning?
- Database design: How did you structure PatentIQ's data model?

---

## Interview Prep: STAR Stories

**Story 1: Full-Stack AI Product Architecture (PatentIQ)**

- **Situation:** Leading a 14-person team in a 4-month accelerator to build an AI patent search MVP.
- **Task:** Design and architect a production system from scratch: backend (semantic search), frontend (UI), auth, deployment.
- **Action:**
  - Designed PostgreSQL schema: patents (raw text), embeddings (pgvector), metadata (structured)
  - Chosen pgvector over Pinecone/Weaviate: open-source, free, easier iteration
  - Implemented hybrid search: text similarity (Postgres full-text search) + semantic similarity (embeddings)
  - Built FastAPI backend: endpoints for search, drafting, feedback
  - Coordinated with data scientist on embedding pipeline and PM on UI requirements
  - Deployed on Vercel (frontend) + EC2 (backend) with Supabase managed postgres
  - Iterated on prompt engineering with Claude to improve drafting quality
- **Result:** MVP shipped with search + drafting + feedback in 4 months; early-stage founders adopted it.
- **Why it matters:** Shows full-stack ownership, architectural decision-making, team leadership, and pragmatism (chose pgvector because "good enough" was better than perfect).

**Story 2: Caching Strategy Under Scale (Groundwork Books)**

- **Situation:** E-commerce platform using Square for real-time inventory. Query latency to Square API was 800ms; users expected sub-500ms inventory updates.
- **Task:** Architect caching to reduce latency without stale inventory data.
- **Action:**
  - Analyzed access patterns: 50+ concurrent inventory lookups per second
  - Designed two-tier caching:
    - Server-side: Redis look-aside cache, 2-minute TTL (balance between freshness and latency)
    - Client-side: Request coalescing (batch 50+ concurrent requests into single API call)
  - Implemented: React hook for inventory lookup, Redux state management to deduplicate
  - Reduced p99 latency from 800ms → 150ms (81% improvement)
  - Validated with A/B test: conversion rate improved 2% on faster pages
- **Result:** Inventory system now performs at 200ms p99; users experience fast updates.
- **Why it matters:** Shows you can think about system-wide performance, understand trade-offs (TTL freshness vs. latency), and measure impact on users.


