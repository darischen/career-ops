# Evaluation: Empirical Security — Forward Deployed Data Scientist

**Date:** 2026-04-14
**Archetype:** AI Forward Deployed Engineer / Data Infrastructure Engineer (hybrid)
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/empirical-security/99125a1c-ea07-499e-a056-5ae0848f58b7
**PDF:** output/cv-candidate-empirical-security-2026-04-14.pdf
**Status:** Evaluated

---

## A. Role Summary

| Dimension | Details |
|-----------|---------|
| **Archetype** | Forward Deployed Data Scientist with infrastructure/systems focus |
| **Domain** | Enterprise security, vulnerability/exposure management, data integration |
| **Function** | Operationalize security data pipelines. Bridge customer security systems to internal analytics platform |
| **Seniority** | Mid-level IC (no management). New grads explicitly encouraged to apply |
| **Remote** | Yes — fully remote |
| **Team Size** | Unknown, embedded with customer + engineering teams |
| **TL;DR** | Design and validate security data pipelines; lead customer discovery; perform analysis; create documentation |

---

## B. CV Match

### Core Strengths
Candidate brings **strong data pipeline and Python/SQL fundamentals** that directly match the role:

| JD Requirement | CV Evidence | Match |
|---|---|---|
| Python/SQL proficiency | PatentIQ: FastAPI backend, PostgreSQL pgvector semantic search. Groundwork: inventory APIs with Redis. PersonifyApp: data ingestion pipeline, deduplication, NLP extraction. | ✅ Strong |
| API knowledge | PatentIQ: Auth0, Vercel, EC2, Supabase APIs. Groundwork: Square API integration + cache-aware patterns. WeatherApp: Google Places + OpenAI API. | ✅ Strong |
| Git version control | GitHub profile active (github.com/darischen). Projects span Feb 2025 - Apr 2026 with version control. | ✅ Strong |
| Reliability/observability | PatentIQ: LRU cache, recursive query builder. Groundwork: 90% latency reduction via Redis, two-tier caching. FishSense: pipeline optimization (40% reduction). | ✅ Strong |
| Secure data handling | PatentIQ: Auth0 integration, JWT. Groundwork Books: user authentication, data isolation. | ✅ Moderate |
| Data source evaluation | PersonifyApp: data ingestion, deduplication, NLP-based extraction. PatentIQ: USPTO patent data handling, schema design. | ✅ Moderate |
| Basic statistics | Mini-Stockfish: Zobrist hashing, move statistics. FlipperZillow: multi-model analysis. RedShift: batch evaluation across 7 architectures. | ✅ Moderate |

### Critical Gaps

| JD Requirement | CV Evidence | Gap Level |
|---|---|---|
| Enterprise security architecture | None. Zero security domain background. | ❌ Hard gap |
| Exposure/vulnerability management | None. No mention of vulnerability scanners, CVSS, risk prioritization. | ❌ Hard gap |
| Customer-facing technical skills | PatentIQ/Groundwork roles are internal/product. No customer discovery, requirements workshops, or stakeholder management mentioned. | ❌ Hard gap |
| Vulnerability scanner knowledge | None. (Nessus, OpenVAS, Qualys, Tenable, etc. not mentioned). | ❌ Hard gap |
| EDR, IAM, CMDB, cloud security | None. Cloud: uses AWS/Vercel/GCP as platforms, not as security domains. | ❌ Hard gap |

### Mitigation Strategy

**Do not claim expertise.** Instead:
1. **Emphasize pattern transfer:** "My PatentIQ and Groundwork work validates I can learn new domains rapidly (patent law + e-commerce both unfamiliar at start)."
2. **Highlight systems thinking:** RedShift + FishSense show ability to operationalize complex external data sources and pipelines.
3. **Lead with eagerness:** Job posting explicitly says "we always look for great people" and discourages self-selection out. Emphasize willingness to learn security from first principles.
4. **Prove data integration chops:** PersonifyApp data ingestion pipeline is the strongest proxy. Lead with that in interviews.

---

## C. Level and Strategy

### Detected Level
**JD seniority:** Mid-level (3-5 YOE implied). Expects ownership of data pipeline design, customer discovery, technical documentation.

**Candidate level:** New grad (graduating March 2026 = ~0 YOE officially, but 1.5 years of project/internship experience). PatentIQ as "Lead" suggests initiative + responsibility, but not proven at scale in a business context.

**Mismatch:** Candidate is 2-3 levels below posted seniority. However, job posting explicitly encourages underrepresented candidates and those who "don't match every qualification."

### Plan A: "Emphasize Systems Thinking, Not Experience"
- **Lead with:** "My work operationalizing complex data pipelines (PatentIQ semantic search, PersonifyApp NLP extraction) gives me the foundation to learn security-specific data sources."
- **Anchor story:** PatentIQ. "I designed a hybrid search system integrating OpenAI embeddings with PostgreSQL. I owned data schema, API design, caching strategy, and team coordination. I can apply that same rigor to security data sources."
- **Ask for help:** "I don't have EDR/vulnerability domain knowledge yet, but I'm proven at learning unfamiliar domains quickly (patent law, e-commerce). I'd like to pair with your team to ramp on your specific threat model and data sources."

### Plan B: "If They Downlevel You"
- Accept a junior or "data engineer intern" framing if comp is fair ($60-80K, clear growth path).
- Negotiate: "I'll own data pipeline design independently; pair with a security domain expert for requirements gathering for the first 2-3 months."
- Set review criteria: "At 6 months, I should be leading customer discovery solo for 2-3 data sources. At 12 months, I own the pipeline design for a major new security system integration."

---

## D. Compensation and Demand

**No salary info provided in the JD.**

Estimated range based on similar FDD roles and new grad leveling:
- **Market for Mid-level FDD DS:** $110-150K (Levels.fyi, security startups)
- **Market for New Grad / Junior:** $70-100K
- **Empirical Security likely:** $85-125K for this level (Series B fintech-adjacent startup)

**Comp score:** 3/5 (likely below market for stated seniority, but fair for new grad level). Negotiate to $100K+ if possible.

**Demand:** High. Security data engineers in demand; Empirical Security is well-funded (backed by prominent VCs).

---

## E. Personalization Plan

### CV Changes (Top 5)
1. **Rename PatentIQ role:** "Lead Full-Stack Engineer → Lead Data Systems Engineer" (emphasize data, not just full-stack).
2. **Reorder experience bullets:** Move "Programmed hybrid semantic search engine" to position 1 in PatentIQ (strongest data pipeline work).
3. **Rename PersonifyApp project:** "Data Ingestion Pipeline" header to "Security Data Engineering Project" (conceptual alignment).
4. **Add security context:** In PersonifyApp bullets, insert "structured data from unstructured sources" framing (security data is also unstructured, needs normalization).
5. **New summary:** "Data systems engineer with 1.5 years operationalizing complex data pipelines (semantic search, inventory sync, ML evaluation). Proven ability to learn new domains rapidly and design systems for observability and reliability."

### LinkedIn Changes (Top 5)
1. Add "Security Data" as a skill (even though not practiced, shows intent).
2. Reorder headline: "Full-Stack Engineer" → "Data Systems Engineer | API Design | Python/SQL | Security Systems" (keywords).
3. In PatentIQ summary: Lead with "Designed hybrid semantic search pipeline integrating embeddings with PostgreSQL pgvector" (closest to security data work).
4. In PersonifyApp summary: Change "feature extraction" to "data normalization and structure extraction from unstructured sources" (security framing).
5. Add interest in roles: "Forward Deployed Engineer, Data Integration, Security Infrastructure" (signal intent).

---

## F. Interview Prep

### 6 STAR Stories (Tailored to Security/Data)

| # | JD Requirement | STAR Story | Situation | Task | Action | Result |
|---|---|---|---|---|---|---|
| 1 | "Design + validate data ingestion pipelines" | PersonifyApp NLP extraction pipeline | Unstructured text features; no structure | Build ingestion pipeline | Designed deduplication logic + NLP tokenization + validation rules | 50% reduced resolution time; data quality measurable |
| 2 | "Operationalize models" | PatentIQ semantic search MVP | USPTO patents + OpenAI embeddings; need real-time ranking | Operationalize hybrid search | Built pgvector indexing + LRU cache + recursive query builder | 200K patents searchable in <100ms |
| 3 | "Customer data source discovery" | Groundwork Books Square API integration | 4,000+ inventory SKUs; multiple APIs (Square, search, storage) | Rationalize data sources | Mapped Square API schema → DB schema; built Redis cache | 90% latency reduction; real-time sync |
| 4 | "Reliability + observability" | FishSense pipeline optimization | Detectron2 setup time blocking researchers | Optimize pipeline | Standardized codebase; added logging; reduced setup time | 40% faster inference; reproducibility improved |
| 5 | "Cross-team collaboration" | PatentIQ team leadership | 14-member team (PM, designers, engineers) | Coordinate dependencies | Architected API contracts upfront; weekly sync; clear ownership | Shipped MVP on time; team autonomy maintained |
| 6 | "Learn new domain quickly" | FlipperZillow (24h hackathon) | Unknown tech stack (ROCm, depth models, SAM3D) | Ship 3D house tours | Learned 5 new libraries in 24h; debugged GPU compat issues; shipped working product | Functional 3D tours + Claude narration |

### Recommended Case Study
**PatentIQ as primary case study for interviews.**
- Problem: Patent search is slow (Google for lawyers is painful)
- Solution: Hybrid semantic search (embeddings + database)
- Impact: 200K patents searchable in <100ms, team shipped MVP in 4 months
- Relevance: Maps directly to "design data pipelines for vulnerability data sources"

**Fallback:** PersonifyApp data pipeline (if interviewer focuses on data cleaning/normalization).

### Red Flags + Answers

| Red Flag | Answer |
|---|---|
| "You have no security background" | "Correct. But my PatentIQ and Groundwork work shows I'm proven at learning new domains. I didn't know patent law or e-commerce at the start either. I learn from first principles, ask good questions, and iterate. I'd pair with your security team to ramp on EDR/vulnerability concepts." |
| "You're a new grad for a mid-level role" | "Your posting explicitly invites people who don't match every qualification. My data pipeline work (PatentIQ, PersonifyApp) demonstrates the core skill. I'm ready to grow into the full scope with your team's guidance." |
| "Have you worked with real customers?" | "Not yet. PatentIQ was internal MVP. But I've managed 14-person teams and owned integration decisions that affected multiple stakeholders. I'm hungry to do real customer work." |
| "Why not a full backend/full-stack role?" | "I'm drawn to problems where data is the bottleneck. PatentIQ's search quality depended entirely on the embedding + indexing strategy. I want to keep working on that class of problem in a new domain." |

---

## Overall Score

| Dimension | Score | Notes |
|-----------|-------|-------|
| **CV Match** | 3/5 | Strong on data/Python/SQL/APIs. Zero security domain. |
| **North Star Alignment** | 3/5 | FDD matches systems-thinking archetype; security domain mismatch. |
| **Compensation** | 3/5 | Likely below-market for stated mid-level; fair for new grad. |
| **Cultural Signals** | 4/5 | Empirical values learning + inclusivity (explicit in posting). Candidate embodies learning velocity. |
| **Red Flags** | -0.5 | No security background is notable but not disqualifying given job posting's framing. |
| **Overall** | **3.4/5** | Borderline. Borderline fit. Apply if interested in learning security; skip if you need immediate domain expertise. |

### Recommendation
**CONDITIONAL APPLY.** This is a learning opportunity masked as a role. You'd be one of the few new grads in the org, but Empirical explicitly welcomes that. If you enjoy ramp-up challenges and have patience for domain learning, go for it. If you want to immediately apply existing expertise, pass.

**Key insight:** The job posting's tone matters. It's inclusive and growth-focused. That's signal that they're willing to invest in you despite the experience gap.

---

## Keywords Extracted (for PDF)

Data integration pipeline, Python, SQL, API design, secure data handling, reliability, observability, ETL, data validation, customer collaboration, technical documentation, PostgreSQL, cache optimization, semantic search, data normalization, schema design, ecosystem integration
