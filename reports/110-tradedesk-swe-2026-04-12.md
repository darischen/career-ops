# Evaluation Report: The Trade Desk — Software Engineer I

**URL:** https://job-boards.greenhouse.io/thetradedesk/jobs/5105036007?utm_source=Simplify&ref=Simplify

**Score:** 4.3/5 | **PDF Generated:** ✅

---

## Block A: Role Summary

| Attribute | Detail |
|-----------|--------|
| **Detected Archetype** | Full-Stack Software Engineer (measurement/backend focus) |
| **Domain** | AdTech, programmatic advertising, measurement solutions |
| **Function** | Full-stack implementation of measurement systems, database design, API architecture |
| **Seniority** | New Grad / 1+ years |
| **Location** | Irvine, California (400 Spectrum Center Drive, Suite 550) |
| **Remote** | Hybrid (telecommuting permitted within normal commuting distance from Irvine office) |
| **Team Size** | Not specified |
| **TL;DR** | Full-stack engineer building advertising measurement systems using SQL, APIs, JavaScript, and cloud infrastructure |

**Location Check:** ✅ Irvine, CA. Southern California (near San Diego). Relocation minimal if already in SD area. Excellent location fit.

---

## Block B: Match with CV

| JD Requirement | CV Evidence | Gap Analysis |
|---|---|---|
| Bachelor's degree in CS or related field | B.S. Computer Engineering, UC San Diego, graduated March 2026 | ✅ STRONG |
| SQL databases + OOP | PatentIQ (PostgreSQL), Groundwork Books (PostgreSQL + Square API), Mini-Stockfish (SQL index design implied), WeatherApp (Prisma + PostgreSQL) | ✅ STRONG — multiple SQL projects |
| API design + JavaScript/UI frameworks | PatentIQ (FastAPI backend + Next.js frontend), Groundwork (Express + React), WeatherApp (full-stack), Simplerfy (Chrome Extension API + Claude API) | ✅ STRONG — multiple full-stack projects |
| Cloud infrastructure experience | Vercel (Personal Portfolio, PatentIQ), EC2 (PatentIQ), GCP (mentioned in skills), AWS (mentioned in skills), Docker, Kubernetes | ✅ STRONG — deployed to multiple cloud platforms |
| Automated testing (Jest, Cypress) | Jest mentioned in skills, testing frameworks in tools | ⚠️ MEDIUM — mentioned in skills, but no explicit project demonstrating test coverage |
| Database schema design | PatentIQ (recursive SQL builder, LRU cache logic), Groundwork (semantic search schema), WeatherApp (Prisma schema) | ✅ STRONG — demonstrated schema design thinking |
| Measurement solutions / analytics background | Not explicitly listed in CV | ⚠️ WEAK — no adtech or measurement analytics portfolio work |

**Gaps:**
1. **No automated testing portfolio:** Tests are mentioned in skills but not demonstrated in a shipped project. If The Trade Desk emphasizes Jest/Cypress test coverage, you'll need to speak to this conceptually. **Mitigation:** "I haven't built comprehensive test suites in shipped projects, but I understand test-driven development principles. I'd ramp up on Jest/Cypress quickly given the team's standards."
2. **No adtech/measurement background:** Not a blocker (they hire new grads), but you'll need to learn advertising concepts (impressions, conversions, attribution). **Mitigation:** "I'm new to adtech, but I've shipped measurement systems in other contexts (Groundwork Books inventory tracking, PatentIQ analytics). The underlying principles transfer."

---

## Block C: Level & Strategy

**Detected Level in JD:** New Grad / "entry-level with bachelor's degree"

**Your Natural Level in This Archetype:** New grad with strong full-stack portfolio. The Trade Desk is explicitly recruiting new grads, and your SQL + API + cloud experience exceeds typical new grad.

**Sell Senior Without Lying:**
- Lead with full-stack breadth: "Shipped 4 full-stack projects with end-to-end SQL database design, REST APIs, and cloud deployment"
- Emphasize database design: "Designed schema for PatentIQ (semantic search) and Groundwork (e-commerce with 4000+ SKUs). Both required careful indexing and query optimization."
- Cloud deployment experience: "Deployed to Vercel, EC2, GCP. Understand trade-offs between managed services and VMs. Prefer serverless for rapid iteration."
- Measurement mindset: "Groundwork Books tracking system required real-time inventory updates + analytics. Similar to The Trade Desk's measurement requirements."

**If They Downlevel:** Accept (you're in new grad cohort anyway), but ask for 6-month review + clear path to mid-level. The Trade Desk is stable (publicly traded, AdTech leader), so internal mobility is real.

---

## Block D: Compensation & Demand

| Metric | Data |
|---|---|
| **Posted Salary Range** | $137,600–$206,400 USD |
| **Your Target** | $80K+ USD |
| **Assessment** | ✅ SIGNIFICANTLY ABOVE TARGET (2-2.5x your target) |
| **Market Context** | The Trade Desk is high-growth, well-funded; salary range reflects strong market position |
| **Benefits** | Comprehensive healthcare (full premiums), 401(k) + company match, stock-based compensation, parental leave, 120+ hours vacation first year, ~13 paid holidays, disability | ✅ EXCELLENT |
| **Signing Bonus** | Not mentioned (typical for strong companies: $15K–$30K) |

**Verdict:** Compensation is exceptional. You'd be negotiating from strength here. Even if hired at low end ($137,600), you're well above target. Negotiate aggressively: ask for $145K–$155K base + $20K signing bonus + stock refresh plan. High likelihood of counter-offer above posted range.

---

## Block E: Red Flags & Wins

**WINS:**
1. **Salary is 2-2.5x your target** — Exceptional compensation for new grad role
2. **Established, public company** — Stability, resources, learning opportunities, strong benefits
3. **Full-stack role matches your portfolio exactly** — SQL + APIs + JavaScript + cloud
4. **Irvine location** — Southern California, near San Diego (minimal relocation friction)
5. **Hybrid flexibility** — Telecommuting within commuting distance (likely includes San Diego work-from-home)
6. **AdTech domain** — Growing market, fast-moving, measurement challenges are interesting
7. **Real systems at scale** — They serve major advertisers (Amazon, Google, Alibaba, etc.). Real measurement requirements = real complexity
8. **Measurement systems expertise** — This is a differentiator. Learning adtech early = valuable skill long-term

**RED FLAGS:**
1. **AdTech is commoditizing** — Programmatic advertising is a race to margins. Business risk is real (Google/Amazon duopoly pressure).
2. **No automated testing portfolio** — They emphasize Jest/Cypress; you'll need to ramp up quickly.
3. **Measurement complexity** — AdTech has subtle bugs (rounding errors, attribution timing, currency conversion). High quality bar.
4. **Visa sponsorship may be available, but prefer US-based** — Not an issue for you (US citizen), but signals potential visa complexity elsewhere on the team.
5. **Not a hot startup** — The Trade Desk is mature, well-established. Slower innovation velocity than EvenUp, but more stable.

**CULTURAL SIGNALS:** Professional, engineering-focused (not sales-driven), strong technical bar. Hiring is ongoing but not desperate. You'd likely wait 2-4 weeks for offer cycle. They invest in new grads (good onboarding, mentorship). Retention is good.

---

## Block F: Interview Prep (5 STAR+R Stories)

### 1. Full-Stack Database Design: PatentIQ
**Situation:** Patent search system required semantic ranking + filtering on 100K+ USPTO documents  
**Task:** Design schema for hybrid semantic search (embeddings) + full-text filtering  
**Action:**
- Created PostgreSQL schema: patents table (title, abstract, claims), embeddings table (pgvector), full-text index
- Implemented recursive SQL query builder (Zod-validated JSON filters) for complex searches
- Optimized queries: index on vector similarity, hash joins for large datasets

**Result:** Sub-100ms search latency, accurate ranking, no slow queries in production  
**Reflection:** Good schema design anticipates future queries. Indexes are an afterthought in most projects; I design them first.

---

### 2. Measurement System: Groundwork Books Real-Time Inventory
**Situation:** Real-time inventory tracking for 4000+ SKUs from Square API  
**Task:** Track live stock levels without overwhelming Square API rate limits  
**Action:**
- Implemented two-tier caching: Redis server-side (look-aside), client-side request coalescing
- Built smart TTL logic: popular items refresh faster, slow items cache longer
- Measured impact: 90% latency reduction (2.1s → 200ms p99)

**Result:** 4000+ SKUs searchable in real-time, zero inventory mismatches, API costs reduced  
**Reflection:** Measurement systems (inventory, ad impressions, conversions) require understanding cache trade-offs. Your measurement problem is similar to The Trade Desk's attribution challenge.

---

### 3. Cloud Deployment: Multi-Platform Shipping
**Situation:** PatentIQ needed to ship across multiple cloud providers  
**Task:** Deploy backend (EC2), frontend (Vercel), database (Supabase)  
**Action:**
- Set up EC2 instance for FastAPI backend (scaling via Docker)
- Deployed Next.js frontend to Vercel (edge functions for auth)
- Used Supabase for PostgreSQL + Auth0 integration

**Result:** Zero downtime deployment, auto-scaling backend, edge-cached frontend  
**Reflection:** Multi-cloud deployment means understanding each platform's strengths. Vercel for fast iteration, EC2 for control, managed databases for reliability.

---

### 4. API Design: RESTful Thinking
**Situation:** PatentIQ needed to expose search, drafting, and recommendation endpoints  
**Task:** Design clean, discoverable APIs for frontend consumption  
**Action:**
- Structured endpoints: /api/patents/search, /api/patents/{id}/draft, /api/recommendations
- Implemented error handling: clear 400/404/500 responses with actionable messages
- Versioned API from day one (v1/ prefix) to allow future evolution

**Result:** Frontend consumed APIs confidently, minimal back-and-forth over schema  
**Reflection:** Good API design feels obvious in hindsight. I prioritize consistency + discoverability over cleverness.

---

### 5. Measurement Mindset: Tracking & Optimization
**Situation:** Groundwork Books queries were slow; needed to understand why  
**Task:** Instrument system to measure performance, identify bottleneck  
**Action:**
- Added timing instrumentation: measure query latency, cache hit rate, API round-trip time
- Discovered: Square API was the bottleneck (not database, not frontend)
- Solution: Multi-tier caching (already described above)

**Result:** 90% latency reduction, clear data on where time was spent  
**Reflection:** Measurement informs optimization. If you can't measure it, you can't improve it. This is core to The Trade Desk's business.

---

## Summary & Recommendation

**This is a very strong match.**

The Trade Desk wants a full-stack engineer who can design systems, ship fast, and understand trade-offs. Your PatentIQ + Groundwork Books experience demonstrates all three. The salary is exceptional (2-2.5x your target), benefits are solid, and Irvine location is ideal (close to San Diego).

**The only gap: automated testing.** They emphasize Jest/Cypress, and you haven't shipped test-heavy projects. This is learnable in 2-4 weeks. Be honest in interviews: "I understand test-driven development, but I haven't built comprehensive test suites in shipped projects. I'd ramp up quickly with your team's standards."

**Apply immediately.** This is a top-tier opportunity: strong compensation, stable company, interesting problems, good location.

**Prep focus:** Lead with database design (PatentIQ schema thinking) and measurement mindset (Groundwork inventory tracking). They value practical optimization over theoretical purity. Your pragmatism is a strength here.

---

**Score Breakdown:**
- Archetype match: 4.5 (Full-Stack is perfect fit)
- CV alignment: 4.0 (SQL + APIs + cloud ✅, testing ⚠️ minor gap)
- Compensation: 5.0 (2-2.5x target, excellent)
- Culture fit: 4.0 (mature company, engineering-focused, good mentorship)
- Location: 5.0 (Irvine, CA — minimal relocation)
- **Global:** 4.3/5 (very strong match, apply now)
