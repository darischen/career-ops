# Renaissance Learning. Software Engineer I

**Score: 4.0/5**  
**URL:** https://job-boards.greenhouse.io/renaissancelearning-nam/jobs/5018110008  
**PDF:** ✅

---

## A. Role Summary

**Archetype:** Full-Stack Web Developer  
**Company:** Renaissance Learning (ed-tech, personalized learning platform)  
**Role:** Software Engineer I  
**Seniority:** Junior (1-2+ years)  
**Level detected vs natural:** Junior to entry-level. Good match for new grad.  
**Location:** Remote, US-based  
**Remote:** Fully remote  
**Team size:** Mid-sized startup

**TL;DR:** Remote junior engineer role in ed-tech stack. React, TypeScript, backend fundamentals. Ideal new grad positioning. No visa sponsorship (US work auth required). Strong culture, reasonable comp for remote new grad.

---

## B. Match with CV

**Strengths:**
- React + TypeScript + Next.js + Tailwind: Your full-stack portfolio directly maps to required "React or comparable SPA framework" and "TypeScript preferred".
- Personal Portfolio Site (100/100 Lighthouse): Demonstrates modern web dev best practices beyond job requirements.
- Groundwork Books (Next.js + real-time search + Square API): Shows full-stack ownership across frontend, backend, and third-party integrations.
- Simplerfy (Chrome Extension API + form management): Proves ability to handle complex DOM manipulation and browser APIs.
- SQL + database design: PostgreSQL + Supabase in PatentIQ proves "relational database" familiarity exceeds expectation.

**Gaps:**
- NodeJS: Job preferred. You have Express.js + Node.js in stack. Strong match.
- Functional programming (Haskell, Scala, Clojure): Not in your CV. Rare for junior hires anyway.
- Event-based architecture: Not demonstrated. This is "nice-to-have", not required. Can learn on job.

**Mitigation:** None needed. You exceed all required qualifications.

---

## C. Level Strategy

**Detected level:** Junior (1-2 years)  
**Your natural level:** New grad (0 years, but PatentIQ leadership + shipping = experienced new grad)  
**Recommendation:** This role is a perfect-fit junior hire for new grads.

Position story: "I shipped PatentIQ, a full-stack SaaS for patent search, leading 14 engineers. I built the Next.js frontend, FastAPI backend, and PostgreSQL schema. I also led architectural decisions (pgvector over Pinecone) that improved cost and iteration speed. I shipped fast in a startup, and I'm ready to solve harder problems at Renaissance."

---

## D. Comp & Market

**Offered:** Not publicly disclosed (implied $80K-110K for remote junior, based on industry data)  
**Market (new grad, remote, full-stack):** $90K-130K  
**Your target:** $80K+. This likely meets target.

---

## E. Red Flags & Wins

**🚨 Red Flags:**
1. **No visa sponsorship:** "Unable to sponsor or take over sponsorship of an employment Visa". You're a US citizen, so no issue.
2. **Ed-tech domain:** May not excite you as much as AI/robotics/fintech. But product is solid, team is good.

**✅ Wins:**
1. **Remote-first:** Aligns with your preference (though willing to relocate).
2. **Full-stack ownership:** You'll own features end-to-end across React, backend, and database.
3. **Modern tech stack:** React, TypeScript, PostgreSQL. No legacy or Java.
4. **Startup velocity:** Renaissance is venture-backed, growing. You'll ship fast.
5. **Mentorship potential:** 1-2 year junior role means senior engineers will mentor you intentionally.

---

## F. Interview Prep

**Role archetype:** Full-Stack Web Developer. Daris excels here. 5 recommended stories below.

### Story 1. Full-Stack Project Ship (PatentIQ)
**Situation:** Led team of 14 engineers (PMs, designers, full-stack devs) to ship patent search MVP in 4 months.
**Task:** Architect and build both frontend (Next.js) and backend (FastAPI + PostgreSQL) while managing team decisions.
**Action:** Designed hybrid semantic search (OpenAI embeddings + pgvector). Built recursive SQL filters with Zod validation. Decided on PostgreSQL+pgvector over MongoDB+Pinecone after cost-benefit analysis. Implemented LRU cache to reduce DB latency.
**Result:** Shipped authentication (Auth0), hosting (Vercel/EC2), analytics. Team shipped on time. Made architectural decisions that improved cost and velocity.
**Reflection:** Learned that shipping velocity beats perfection. When tools broke, we cut them and shipped working product instead of debugging forever.

### Story 2. Performance Optimization (Groundwork Books)
**Situation:** Real-time e-commerce platform needed fast inventory lookups. Square API had 90% latency.
**Task:** Architect and implement caching strategy to improve p99 latency below 200ms while maintaining accuracy.
**Action:** Built two-tier cache: Redis (look-aside) for hot data + client-side request coalescing hook (batching 50+ concurrent lookups into single API call with 2-minute TTL). Validated cache invalidation logic during inventory sync.
**Result:** p99 latency improved from 2.1s to 180ms. Cut Square API calls by 60%.
**Reflection:** Caching is a force multiplier. Understanding cache layers (application, CDN, database) improves every system.

### Story 3. React + TypeScript + Design System (Personal Portfolio)
**Situation:** Built personal portfolio site. Target: Lighthouse 100/100, global FCP <0.8s.
**Task:** Design and build responsive React components with TypeScript, optimize asset loading and rendering.
**Action:** Built custom SSG pipeline (Markdown to HTML at build time). Implemented dynamic OG image generation. Edge-cached asset delivery. Used lazy loading, code splitting, modern CSS.
**Result:** 100/100 Lighthouse on all metrics. FCP <0.8s globally.
**Reflection:** Performance is a feature. Measurable targets (Lighthouse score) guide decisions better than vague "make it fast".

### Story 4. Chrome Extension + DOM Manipulation (Simplerfy)
**Situation:** Job application fatigue. 15+ job boards had different form structures.
**Task:** Build browser extension to auto-detect form fields across platforms and fill them with candidate data.
**Action:** Used Chrome Extension API to detect and inject into job board iframes. Built form field parser (xpath + semantic HTML detection). Integrated Claude API to auto-generate tailored resume versions. Stored data in Chrome storage.
**Result:** Reduced application time from 10 minutes to 2 minutes per application.
**Reflection:** Browser extensions are underrated for productivity. They bridge the gap between websites and desktop tools.

### Story 5. Database Design Decision (PatentIQ)
**Situation:** Team wanted MongoDB + Pinecone for semantic search. Budget and iteration speed were concerns.
**Task:** Evaluate trade-offs between fully managed services (MongoDB + Pinecone, higher cost) vs open-source (PostgreSQL + pgvector, lower cost, more control).
**Action:** Built cost model. Ran benchmark on USPTO patent dataset (12k+ documents). Demonstrated that PostgreSQL+pgvector gave same query latency at 1/3 cost and faster iteration. Presented to product leads.
**Result:** Team adopted PostgreSQL+pgvector. Saved $2K/month on infrastructure. Faster iteration on search algorithms.
**Reflection:** Technical decisions are business decisions. Understanding comp, iteration speed, and operational overhead makes you a multiplier engineer.

---

## Recommendation

**APPLY.** This is a strong match. You exceed all requirements, the remote-first model fits your flexibility, and the full-stack ownership aligns with your superpower.

Next steps:
1. Check Glassdoor/Levels.fyi for typical comp (likely $90-110K for remote junior).
2. Research Renaissance culture (is it data-driven? Do engineers have autonomy?).
3. When you apply, lead with PatentIQ story + Lighthouse 100/100 portfolio.

