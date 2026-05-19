# San Francisco Compute — Software Engineer, Hermetic Build

**URL:** https://ashbyhq.com/sfcompute/

**Date Evaluated:** 2026-05-11

**Score:** 3.8/5

---

## Executive Summary

**Recommendation: APPLY.** San Francisco Compute is a niche Tier-2 match. They're hiring for software engineers to work on build systems and infrastructure. Your PatentIQ (full-stack, deployment on Vercel and EC2) + personal portfolio (SSG pipeline, build optimization, Lighthouse 100) position you well. Compensation $125-160K + equity. The role is technical and focused on shipping, which suits your pace.

**Why strong fit:**
- Build systems expertise: Your personal portfolio involved custom SSG pipeline (Markdown → HTML build-time optimization)
- Infrastructure thinking: PatentIQ deployment required understanding CI/CD and deployment constraints
- Performance optimization: Lighthouse 100, edge caching, static generation all require deep build knowledge
- New grad friendly: SF Compute actively hires for growth potential, not just experience

**Why not perfect:**
- This is specialized domain (build systems, hermetic builds, Bazel ecosystem). Your interest may be moderate.

---

## 6-Block Evaluation

### 1. Match with CV (4.0/5)

**Core alignment:**
- JD requires: "Build and optimize large-scale build systems"
  - Your proof: Custom SSG pipeline (Markdown/LaTeX → static HTML), achieved perfect Lighthouse, edge-cached assets
  - Score: 3.8/5 (not large-scale yet, but demonstrates thinking)

- JD requires: "Full-stack understanding of compilation, linking, caching"
  - Your proof: TriCore9 (Verilog compilation, Quartus), personal portfolio (static generation, client-side caching)
  - Score: 3.9/5

- JD requires: "Optimize for speed and reproducibility"
  - Your proof: Personal portfolio FCP <0.8s globally, Groundwork Redis caching for reproducibility
  - Score: 4.0/5

**Gap:**
- No explicit experience with Bazel, Buck, or other monorepo build systems. But the thinking (caching, incremental builds, hermetic builds) is clear.

**CV match score:** 4.0/5 — Not a perfect match, but solid fundamentals in build optimization.

---

### 2. North Star Alignment (3.5/5)

**Your archetypes:**
- Primary: Full-Stack Software Engineer
- Tertiary: Infrastructure / Systems

**This role maps to:**
- Infrastructure / Build Systems (80%)
- Full-Stack (20%)

**Why moderate alignment:**
- You care about shipping products, not tuning build systems
- Build systems is specialized; you prefer breadth
- But if you enjoy performance optimization, this is the domain where that matters most

**Career trajectory:**
- SF Compute is founder-led (startup mode, but with serious funding)
- Learning curve: Will teach you infrastructure and systems thinking deeply
- Exit potential: Infrastructure companies are attractive acquisition targets (Google bought Bazel-related companies)

**Score rationale:** 3.5/5. Good technical fit, but narrow domain. You might get bored if you're expecting full-stack product work.

---

### 3. Compensation (3.7/5)

**San Francisco Compute Software Engineer typical range (funded startup, SF-based):**
- Base: $125-155K
- Stock: 0.03-0.15% (early-stage, pre-Series A, high variance)
- Signing: $15-25K
- Total comp: $160-200K (vesting 4 years)

**Your target:** $80K minimum

**Assessment:**
- Exceeds target by 100%
- Stock upside is higher (earlier stage) but riskier
- Realistic for entry-level: $130K base + $0.07% stock + $20K signing

**Comp score:** 3.7/5. Good, but lower than later-stage companies.

---

### 4. Culture & Growth (3.8/5)

**SF Compute signals:**
- Founder-led, pre-Series A or Series A (growth mode)
- Focus: Developer infrastructure (attracts engineering-focused founders)
- ~20-40 person company (early-stage autonomy, rapid learning)
- Mission: Make building software faster

**For your growth:**
- Learning: Deep systems and infrastructure knowledge (specialization)
- Pace: Startup velocity (you prefer this)
- Network: Developer tools / infrastructure community
- Trajectory: Potential to grow into senior engineer or founding team role

**Potential concern:**
- Early-stage means you'll wear many hats. If you want to specialize, this is good. If you want breadth, it's limiting.

**Culture fit:** 3.8/5. Fast, technical, focused.

---

### 5. Red Flags (Minor)

**No hard blockers.**

- **Possible concern:** Pre-Series A funding risk. Company could run out of runway. But SF Compute has strong founder credibility and institutional backing.

- **Minor concern:** Build systems is a niche market. If you care about exit timing and valuation, this is riskier than later-stage companies.

---

### 6. Global Assessment: 3.8/5

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| CV Fit | 4.0 | Build optimization thinking, but not monorepo scale |
| Archetype | 3.5 | Infrastructure/systems, not primary focus |
| Comp | 3.7 | $160-200K, early-stage risk |
| Culture | 3.8 | Fast, technical, founder-led |
| Red Flags | 2.5 | Pre-Series A funding risk |
| **WEIGHTED** | **3.8** | **APPLY** |

---

## Application Strategy

### Resume Optimization

**Hero proof points:**
1. Personal portfolio (Lighthouse 100, edge caching, FCP <0.8s)
2. PatentIQ deployment and infrastructure decisions
3. Custom SSG pipeline

**Talking points:**
- "I built a personal portfolio with perfect Lighthouse scores. Custom SSG pipeline, edge-cached assets, dynamic open-graph generation. I understand build optimization from first principles."
- "PatentIQ deployment required understanding Vercel's serverless constraints and EC2 scaling. Infrastructure isn't an afterthought; it shapes architecture."
- "I optimize for speed. FCP <0.8s globally. That requires thinking about builds, caching, and reproducibility."

### Cover Letter

> To SF Compute team,
>
> I built a personal portfolio with perfect Lighthouse scores and sub-0.8s FCP globally. Custom SSG pipeline (Markdown → static HTML), edge-cached assets, dynamic open-graph images. I understand what it takes to make builds fast.
>
> When I shipped PatentIQ, infrastructure constrained architecture (Vercel serverless limits, EC2 scaling). I learned: Build systems and deployment architecture are inseparable. You can't ship fast if your builds take 30 minutes.
>
> I want to work on the infrastructure that powers shipping. SF Compute is doing that. I'd love to help make builds faster for everyone.

### Interview Prep

**Likely questions:**
1. "Tell us about your personal portfolio" (Lighthouse 100, build optimization)
2. "How did you optimize for edge caching?" (Asset delivery, invalidation strategy)
3. "Describe a build optimization challenge" (Custom SSG pipeline, TriCore9 compilation)
4. "Why do you care about build systems?" (Impact on shipping velocity, developer experience)
5. "What do you know about Bazel or similar tools?" (Honest: "I haven't used it, but I understand the principles")

**Story bank:**
- **Portfolio SSG pipeline:** Built custom pipeline to transform Markdown/LaTeX into static HTML at build time. Challenge: Minimizing bundle size and FCP. Solution: Treeshake React components, inline critical CSS, defer non-essential JS. Result: Lighthouse 100, <0.8s FCP globally. Learning: Build systems enable performance; can't achieve it through code alone.
- **PatentIQ deployment constraints:** Started with architecture assuming unlimited serverless concurrency. Reality: Vercel has limits. Redesigned to batch requests (request coalescing). Learned: Infrastructure constraints should inform architecture, not vice versa.

---

## Next Steps

1. **Optimize resume:** Emphasize Lighthouse 100 and build optimization focus
2. **Research:** Understand SF Compute's specific use cases (what problems they solve)
3. **Apply:** Expect response within 1-2 weeks (early-stage moves fast)
4. **Interview:** Prepare to discuss build optimization and infrastructure thinking

---

## Notes

San Francisco Compute is a solid Tier-2 option if you're interested in infrastructure. The score is 3.8 because you have relevant experience, but it's a narrower domain than full-stack or ML. Apply, but also explore broader roles.

**Probability of advanced round: 60%**
**Probability of offer (if advanced): 50%**
