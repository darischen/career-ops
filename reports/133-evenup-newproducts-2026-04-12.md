# Evaluation Report: EvenUp — Software Engineer (New Grad), New Products

**URL:** https://jobs.ashbyhq.com/evenup/f99c74b7-1015-45f2-8f9a-51badf5c1e84/application?utm_source=Simplify&ref=Simplify

**Score:** 4.2/5 | **PDF Generated:** ✅

---

## Block A: Role Summary

| Attribute | Detail |
|-----------|--------|
| **Detected Archetype** | Full-Stack Software Engineer |
| **Domain** | Legal Tech SaaS, new product development |
| **Function** | Build and launch brand new products, foundational architecture |
| **Seniority** | New Grad (1 year equivalent) |
| **Location** | San Francisco, CA |
| **Remote** | Hybrid (minimum 3 days/week onsite) |
| **Team Size** | Not specified |
| **TL;DR** | Full-stack engineer building brand new products for legal tech SaaS using Python/TypeScript/React |

**Location Check:** ✅ San Francisco, CA. Your preferred location (willing to relocate anywhere in US). No visa friction.

---

## Block B: Match with CV

| JD Requirement | CV Evidence | Gap Analysis |
|---|---|---|
| Internship or 1+ years professional dev | PatentIQ (Jan-Apr 2026), Groundwork Books (Aug 2025-Mar 2026), PersonifyApp intern | ✅ STRONG — 15+ months professional experience |
| Team mentorship experience | PatentIQ: "Orchestrated Agile workflows for 14-member cross-functional team," led frontend developer onboarding (mentioned in _profile.md) | ✅ STRONG — led 14-person team during accelerator |
| Cross-functional collaboration | PatentIQ: coordinated data scientist, backend engineer, PMs, designers | ✅ STRONG — weekly dependency tracking, clear ownership matching |
| Technical communication | PatentIQ team structure demonstrates ability to clarify roles and scope | ✅ STRONG |
| Project ownership capability | PatentIQ: "End-to-end ownership of AI patent search MVP. I architected the entire system, served as primary contributor, and led a team" | ✅ STRONG — exactly what they're asking for |
| Python, TypeScript, React, PostgreSQL, Kubernetes, Elasticsearch | Python (multiple projects), TypeScript (PatentIQ Next.js, Personal Portfolio, Groundwork), React (all web projects), PostgreSQL + pgvector (PatentIQ, Groundwork), Kubernetes (mentioned in skills), Elasticsearch (not explicitly listed, but similar data indexing via pgvector) | ⚠️ MINOR GAP — Elasticsearch not in CV, but pgvector + PostgreSQL is more modern semantic search alternative |

**Gaps:** 
1. **Elasticsearch:** Not explicitly listed, but you have pgvector + PostgreSQL (semantic search) and Firebase (NoSQL). Elasticsearch is similar to Pinecone (full-text + vector search). **Mitigation:** Emphasize pgvector work and highlight full-text search concepts; Elasticsearch is learnable quickly (you've done similar with pgvector).

---

## Block C: Level & Strategy

**Detected Level in JD:** New grad with emphasis on "shipping within 2 weeks of joining," which suggests pragmatism > perfection.

**Your Natural Level in This Archetype:** New grad with founder/architect experience. This is your sweet spot. PatentIQ demonstrates exactly what they're asking for: ship production code fast, contribute to foundational architecture, help build team culture.

**Sell Senior Without Lying:**
- Lead with speed + architecture: "Shipped production code within two weeks of joining PatentIQ; architected entire system (FastAPI + Next.js + Supabase + Auth0)"
- Emphasize new product launch experience: "Built PatentIQ MVP from scratch in 4 months as primary contributor + team lead. No existing codebase to inherit."
- Cross-functional collaboration: "Structured 14-person team (data scientist, backend, frontend, PMs) with clear ownership; coordinated dependencies weekly. Each team member knows exactly what they own."

**If They Downlevel:** Accept (you're explicitly in new grad cohort anyway), but ask for 6-month review + clear promotion to mid-level if you hit performance metrics.

---

## Block D: Compensation & Demand

| Metric | Data |
|---|---|
| **Posted Salary** | SF: $130K USD / Toronto: $113K CAD |
| **Market Rate (SF, New Grad SWE)** | $120K–$160K USD |
| **Market Rate (Toronto, New Grad SWE)** | $100K–$130K CAD |
| **Your Target** | $80K+ USD |
| **Assessment** | ✅ AT-MARKET, ABOVE TARGET |
| **Equity** | "Equity offered" (amount TBD) |
| **Signing Bonus** | Not mentioned (typical for new grad: $10K–$20K) |

**Verdict:** Compensation is competitive for new grad. Equity terms are critical — ask for vesting schedule (typically 4-year vest with 1-year cliff) and if equity refreshes. Signing bonus worth negotiating ($15K–$25K for SF market).

---

## Block E: Red Flags & Wins

**WINS:**
- Explicit new grad pathway (no misrepresentation required)
- San Francisco location (tech hub, strong market, future optionality)
- Legal tech domain = high social impact (closing justice gap)
- Brand new products = greenfield opportunity (freedom to architect, less technical debt)
- Hybrid flexibility (3 days/week onsite = reasonable)
- Rapid company growth (Series A+ funding from top VCs)
- Modern tech stack: Python, TypeScript, React, PostgreSQL, Kubernetes (all learnable)
- VC-backed startup culture = speed + learning
- Emphasis on "foundational architecture" = you'll own something at company level, not just feature work

**RED FLAGS:**
- "Brand new products" = more uncertainty than Cases Product team (market fit unknown)
- Kubernetes requirement suggests some infrastructure complexity (you have it listed, but may need to refresh)
- Elasticsearch is new tech for your stack (pgvector is your baseline)
- Onsite requirement (3 days/week) may feel restrictive if you prefer remote
- Team size unknown (could signal headcount uncertainty or rapid scaling)

**CULTURAL SIGNALS:** Startup energy, product-driven (New Products team = entrepreneurial). Hiring is urgent (multiple open roles). You'd likely start within 2-3 weeks if offered.

---

## Block F: Interview Prep (5 STAR+R Stories)

### 1. Shipped Product From Zero to One
**Situation:** PatentIQ launch during 4-month accelerator (Jan-Apr 2026)  
**Task:** Build AI-powered patent search MVP from scratch; ship within 4 months  
**Action:**
- Architected end-to-end system: FastAPI backend (Python), Next.js frontend (React), Supabase database (PostgreSQL + Auth0)
- Shipped core features: semantic search (pgvector), patent ranking, UI, authentication
- Code to production within 2 weeks of starting

**Result:** Working MVP founders actively use for patent research; shipped faster than planned due to pragmatism (cut scope, prioritized core features)  
**Reflection:** New products require shipping fast. I prioritize working MVP over perfect architecture. That's what you value.

---

### 2. Led Foundational Architecture
**Situation:** PatentIQ team needed database + embedding strategy  
**Task:** Design retrieval system for 100K+ USPTO patents  
**Action:**
- Proposed PostgreSQL + pgvector instead of Pinecone/MongoDB
- Architected schema: patents table + embedding vectors + full-text index
- Designed ranking logic: hybrid semantic + title matching

**Result:** Clean, maintainable architecture; no vendor lock-in; fast iteration (could change schema in hours, not days)  
**Reflection:** Good architecture is about constraints, not complexity. Kubernetes scales systems; PostgreSQL scales teams.

---

### 3. Cross-Functional Collaboration at Scale
**Situation:** PatentIQ team coordination (14 people, 4 months)  
**Task:** Ship MVP with data scientist, backend engineer, frontend developer, multiple PMs  
**Action:**
- Structured team: each person owns one pillar (ML pipeline, server integration, UI)
- Weekly syncs: track dependencies, clarify blockers, adjust scope
- Served as architect + primary code contributor (not manager, not distant)

**Result:** Minimal rework, clear ownership, shipped on schedule  
**Reflection:** Collaboration means matching scope to skill and staying hands-on. New products need people who code, not just coordinate.

---

### 4. Technical Decision-Making Under Uncertainty
**Situation:** Multiple database options (Pinecone, Weaviate, MongoDB, PostgreSQL)  
**Task:** Choose the right tool for MVP with unknown scale  
**Action:**
- Researched trade-offs: cost, latency, iteration speed, vendor risk
- Proposed Postgres + pgvector to data scientist and engineer independently
- They researched and agreed (not dictatorial)

**Result:** Tool choice proved correct; zero migration pain during 4-month sprint  
**Reflection:** New products require decisions with incomplete info. I gather data, propose, listen, decide.

---

### 5. Shipping Under Scope Pressure
**Situation:** PatentIQ had feature creep during accelerator (PMs kept adding scope)  
**Task:** Maintain MVP quality while roadmap shifted weekly  
**Action:**
- Separated core from nice-to-have features in architecture
- Pushed back with metrics: "We can ship this in 2 weeks or add feature X in 3 weeks. Pick one."
- Shipped core search + drafting assistant; deferred polish features

**Result:** Shipped on time with core functionality that founders use daily  
**Reflection:** New products need pragmatism. Done + imperfect beats late + perfect.

---

## Summary & Recommendation

**This is a very strong match.**

This role is nearly identical to PatentIQ: new product, new grad cohort, full-stack shipping, cross-functional collaboration, rapid timeline. Your PatentIQ experience is *directly transferable*. EvenUp New Products team is explicitly looking for people like you: architect + contributor, not just engineer.

The only friction: Elasticsearch (you use pgvector instead). This is learnable in 1-2 weeks. Elasticsearch is architecturally similar to your pgvector work, just with full-text indexing added.

**Apply immediately.** This is one of your strongest opportunities. San Francisco location, VC-backed growth, high impact work, and direct match to your profile.

**Prep focus:** Lead with PatentIQ architecture decision and team coordination. They value pragmatism + shipping speed. Have concrete stories about trade-offs and scope discipline ready.

---

**Score Breakdown:**
- Archetype match: 4.5 (Full-Stack is primary fit, new product emphasis is ideal)
- CV alignment: 4.0 (Elasticsearch is minor gap, everything else maps perfectly)
- Compensation: 4.5 (at-market for SF, above your target)
- Culture fit: 4.5 (startup energy, product-driven, learning-focused)
- Location: 5.0 (San Francisco, US-based)
- **Global:** 4.2/5 (very strong match, apply now)
