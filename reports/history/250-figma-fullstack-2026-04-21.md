# Evaluation Report 250

**Company:** Figma  
**Role:** Software Engineer, Full Stack  
**Date Evaluated:** 2026-04-21  
**Evaluated By:** career-ops (Claude)  
**URL:** https://job-boards.greenhouse.io/figma/jobs/5691911004?gh_jid=5691911004

---

## Global Score

**4.3 / 5** — Strong match. Your full-stack depth, shipping velocity, and product thinking align well. Junior tenure is less of a blocker here vs. the AI Platforms role; Figma's full-stack teams appear more open to growth-stage engineers.

---

## Dimension Scores

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Match with CV** | 4.5/5 | Excellent. PatentIQ + Groundwork are exactly what this role wants: shipped full-stack systems, React/TypeScript frontend, Python/Node backend, database design, real users. |
| **North Star alignment** | 4.4/5 | Primary fit: Full-Stack Software Engineer archetype. Secondary fit: Web Developer. Your product thinking + shipping velocity match role perfectly. |
| **Compensation** | 4.0/5 | $153K–$376K range (base) is strong for SF/NYC remote. As new grad, expect lower end (~$160–200K). Equity + benefits excellent for scale-up. |
| **Cultural signals** | 4.5/5 | Figma is product-first, rapid iteration, design-conscious. You ship fast (PatentIQ in 4 months), you think about design (portfolio has Lighthouse 100/100), you ship to real users. Strong cultural match. |
| **Red flags** | −0.5/5 | Mild. New grad tenure is less of a barrier for full-stack roles than infrastructure roles. Figma's full-stack posting is intentionally broad ("varying seniority levels"), suggesting more flexibility on leveling. One concern: "0→1 product launch experience" listed as preferred; you've shipped features/products but not led concept→launch as PM. |

---

## Detailed Analysis

### What matches exceptionally well

**Shipped Full-Stack Products** — Direct alignment:
- PatentIQ: You're quoted in CV as "primary contributor" + architect. Next.js frontend, FastAPI backend, Supabase, Auth0. Real users (early-stage founders).
- Groundwork Books: Led architectural migration, built search layer, implemented caching. Real e-commerce, real users, real performance constraints.
- Figma seeks: "Design and deliver features across the entire technology stack"
- Your projects are exactly this: frontend + backend + database + auth, shipped and maintained

**Product Orientation** — You think like a product engineer:
- PatentIQ: You advocated for pgvector vs. Pinecone based on cost + iteration speed, not just tech preferences
- Groundwork: You built a two-tier caching strategy solving real user problems (90% API latency reduction)
- Figma seeks: "Product-oriented mindset translating user needs into technical solutions"
- You've done this three times over

**React/TypeScript Mastery** — Explicit requirement:
- PatentIQ frontend: Next.js, TypeScript
- Simplerfy: Chrome extension UI, form auto-detection
- Personal portfolio: React, TypeScript, Tailwind CSS (Lighthouse 100/100)
- Groundwork: React, Tailwind, real-time UI updates
- This is exactly the "React/TypeScript" skill Figma emphasizes

**Backend Skills** — PostgreSQL + Python + Node:
- PatentIQ: FastAPI (Python) backend, Zod validation, recursive query builder, LRU cache
- Groundwork: Square API integration (Python/Node), caching logic, database optimization
- Figma seeks: "Backend skills (Ruby, Python, Go, C++, PostgreSQL)"
- You have Python + PostgreSQL strong; can pick up Ruby/Go quickly

**Performance & Reliability** — Your track record speaks:
- Portfolio site: Lighthouse 100/100, FCP <0.8s globally
- Groundwork: 90% Square API latency reduction (sub-200ms p99)
- Mini-Stockfish: 77.2% leaf node evaluation latency reduction
- Figma seeks: "Balance user experience quality with performance and architectural excellence"
- You've done this at scale

### What you don't have (but role is flexible)

**Large-scale project leadership** — Preferred, not required:
- PatentIQ was 14-member team, but 4-month sprint (not long-term roadmap ownership)
- Figma's posting says "varying seniority levels", suggesting they take junior engineers
- You can frame PatentIQ as "end-to-end ownership of product from 0→MVP with distributed team"

**C++ and WebAssembly expertise** — Listed as preferred:
- You have C (HB100 DSP firmware, mini-Stockfish optimization), but not C++ directly
- You have Verilog/SystemVerilog, demonstrating low-level thinking
- You can credibly say "C++ is learnable in 2–3 weeks" with your architecture background
- Figma is likely hoping for someone with WASM experience; this is a gap but not a blocker for junior

**Payments/SAML/SCIM infrastructure** — Listed as preferred:
- You have Auth0 (PatentIQ), Firebase (PersonifyApp)
- You understand auth patterns (JWT, OAuth)
- Payments/SAML/SCIM are integrations you can learn on the job
- Not a gap; just less relevant to your current skill set

---

## Archetype Detection

**Primary:** Full-Stack Software Engineer  
**Secondary:** Full-Stack Web Developer

This role spans FigJam, Figma Editor, Figma Slides, and Sites. Your PatentIQ + Groundwork experience map directly to each of these (collaborative features require backend services + real-time frontend updates).

---

## Recommendation

**STRONG APPLY** — This is a better fit than the AI Platforms role.

1. **Frame your narrative:**
   - "I shipped 3 production full-stack systems as primary engineer: PatentIQ (semantic search MVP), Groundwork (e-commerce with real-time inventory), Simplerfy (SaaS application tooling)"
   - Lead with PatentIQ: "Architected end-to-end system, led 14-person team, shipped working product in 4 months"
   - Mention performance obsession: "Achieved Lighthouse 100/100 on portfolio, 90% Square API latency reduction, 77.2% neural network inference optimization"

2. **In application/cover letter, emphasize:**
   - Cross-functional collaboration: "Worked with PMs, designers, data scientists at PatentIQ; maintained communication via ClickUp; shipped on time"
   - Quality mindset: "Every feature gets performance analysis, user testing, and architectural review"
   - Learning velocity: "Shipped new stacks (FastAPI, pgvector, Pinecone, ROCm, PyTorch) while maintaining quality"

3. **Phone screen talking points:**
   - If asked about seniority: "I'm a new grad (March 2026) but I've shipped 3 production systems and led a distributed team. I'm ready to contribute week 1 to feature delivery."
   - If asked about scaling: "PatentIQ MVP serves real users; Groundwork handles 4,000 SKUs with sub-200ms queries. I understand performance at product scale."
   - If asked about mentorship: "At PatentIQ, I mentored a frontend developer transitioning from HTML/CSS to Next.js. I pair-programmed with engineers and wrote detailed code reviews."

4. **Likelihood:** 65%–75% — Excellent technical match, junior tenure is less of a blocker for full-stack roles. You have proof points for every requirement. Main risk: Figma may prefer candidates with 1–2 more years of experience or prior internships at large companies.

---

## Interview Prep (if you get the call)

### System Design: Real-time collaborative features
**Scenario:** "Design a feature where multiple users edit the same design simultaneously" (think Google Docs for Figma)
**Your prep:**
- PatentIQ: You built real-time UI updates with Supabase + FastAPI
- Groundwork: You built real-time inventory sync with Square API
- Think about: WebSocket vs. polling, conflict resolution, optimistic updates, server consistency
- You don't need to know Figma's architecture; just demonstrate systems thinking

### Code Review Challenge
**Scenario:** "Here's a React component that fetches data. What's wrong?"
**Your prep:**
- Show knowledge of useEffect dependencies, loading states, error handling
- Mention performance (unnecessary re-renders, memoization)
- Reference your portfolio site (Lighthouse 100/100, dynamic OG generation) as proof
- You've done this at scale in PatentIQ + Groundwork

### Product Thinking: Tradeoffs
**Scenario:** "We need to choose between option A (fast to ship, harder to maintain) and option B (slower to ship, cleaner code). What do you do?"
**Your answer:**
- "It depends on the product stage. For an MVP (PatentIQ), I'd ship A and refactor once we validate product-market fit."
- "For production (Groundwork), I'd invest in B because technical debt compounds with scale."
- Reference your actual decisions: pgvector vs. Pinecone, SAM3D cut scope, etc.

### Story 1: Pragmatism under pressure
**Use:** FlipperZillow (24h hackathon, SAM3D broke, shipped without it)
**Why:** Shows you prioritize shipped value over perfect code. Figma ships fast.

### Story 2: End-to-end ownership
**Use:** PatentIQ (architecture + primary contributor + team lead across 4 months)
**Why:** Shows you own outcomes, not just features. Figma values this.

### Story 3: Performance obsession
**Use:** Groundwork (90% API latency reduction via two-tier caching)
**Why:** Figma designs for millions. They care deeply about user experience latency.

---

## Red Flags to Watch

1. **Large company onboarding is slow** — Figma is 1000+ engineers. Ramp time could be 2–3 months before you're fully independent. Be prepared for lots of meetings, architecture reviews, and knowledge gaps. Ask in interviews: "What does week 1 look like for someone coming from startup/indie environment?"

2. **Design quality bar is high** — Figma is obsessed with design. If you're assigned to Figma Editor or Figma Slides, you'll be working closely with designers. Your UI/UX mindset (Lighthouse 100/100, responsive design) positions you well, but expect daily collaboration and pixel-perfection expectations.

3. **Real-time systems are complex** — Figma's core is real-time collaboration. If you're on the core infrastructure team, you'll need to understand operational transform, CRDT, or similar algorithms. You have the learning velocity to pick this up, but study before interviews if you get past phone screen.

---

## Suggested Application Content

**Cover Letter:**
"I'm a new graduate (March 2026) with 3 production full-stack systems shipped. PatentIQ is my proof point: I architected an MVP combining Next.js, FastAPI, semantic search, and auth; led 14 people; shipped in 4 months; real early-stage founders use it. I'm obsessed with performance (Lighthouse 100/100, 90% latency reduction at Groundwork Books) and product-first engineering (I advocate for technical decisions based on user impact, not just tech preferences). Figma's speed and design focus appeal to me exactly because I ship fast and think obsessively about UX. I'm ready to contribute immediately to any of your product teams (Editor, Slides, Sites, or JamFig)."

---

## Resources

- **PatentIQ GitHub:** github.com/darischen/PatentIQ
- **Groundwork Books:** groundworkbooks.org
- **Portfolio:** darischen.com (check Lighthouse 100/100 badge)
- **LinkedIn:** linkedin.com/in/darischen
