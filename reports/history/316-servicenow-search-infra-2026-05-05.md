# Evaluation: ServiceNow Associate Software Engineer, Search Infrastructure (Moveworks)

**Company:** ServiceNow (Moveworks, acquired by ServiceNow)  
**Role:** Associate Software Engineer, Search Infrastructure - Moveworks  
**Location:** Mountain View, California (Required In Office)  
**Salary:** Not disclosed  
**URL:** https://jobs.smartrecruiters.com/ServiceNow/99c06c61-284f-4c2b-bd4d-1a7b53bf3fa4?utm_source=Simplify&ref=Simplify  
**Date Evaluated:** 2026-05-05  
**Evaluated By:** career-ops pipeline  

**Global Score:** 3.9/5  
**Recommendation:** SOLID MATCH, but lower priority than Viasat. Good for infrastructure/backend growth, less aligned with stated agentic AI interests.

---

## Evaluation Summary

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Match with CV** | 4.0 | Performance optimization, cloud infra, distributed systems (indirect). Gaps: Kafka/Elasticsearch operations, feature flag systems. |
| **North Star Alignment** | 3.5 | Backend infrastructure focus; weak AI/ML angle. Less aligned with agentic archetype; strong with full-stack backend archetype. |
| **Compensation** | 3.0 | Undisclosed (red flag). Likely $130K-$160K for new grad at ServiceNow, but no transparency is concerning. |
| **Cultural Signals** | 4.0 | Fortune 500 (ServiceNow), stable company, startup pace internally (Moveworks culture), but infrastructure-heavy vs AI-forward. |
| **Red Flags** | -0.6 | Salary undisclosed; no AI/ML work; infrastructure-focused (ops heavy); onsite required in Mountain View. |
| **Global Score** | 3.9 | Good technical fit, weaker strategic fit. |

---

## Dimension Breakdown

### 1. Match with CV (4.0/5)

**Why the fit is adequate:**
- **Performance Optimization:** You have direct experience. Mini-Stockfish: "77.2% latency reduction (1.1ms → 0.25ms)." Groundwork Books: "90% API latency reduction via Redis caching." This role asks for "solving for performance, optimization, scalability, latency, monitoring." You've done all of this.
- **Cloud Infrastructure:** EC2, GCP, Vercel in CV. Role requires AWS/GCP/Azure experience. You can learn Azure quickly.
- **Python/Java/C++:** You have Python, Java, and C++ in CV. Golang is absent, but Golang is easy for a Python/C++ developer (like TypeScript for JavaScript developers).
- **Distributed Systems (Indirect):** PatentIQ's Supabase + EC2 + Vercel setup touches distributed concepts. Groundwork's real-time inventory sync (multiple clients, single source of truth) shows you understand eventual consistency. But this is not your strength.
- **Problem-Solving at Speed:** FlipperZillow (24h hackathon), PatentIQ (intense 4-month accelerator). Moveworks (within ServiceNow) values "startup pace with high degree of ownership." You can deliver.

**Gaps (moderate):**
- **Kafka/Elasticsearch/Istio Operations:** You haven't worked at scale with message brokers or service mesh. This is learnable, but it's not in your background.
- **Feature Flags / A/B Testing Infrastructure:** No mention in CV. These are specific infrastructure concepts, not fundamental.
- **Vector DB at Scale:** You've used pgvector (PatentIQ) and Pinecone (Groundwork), but not operated Elasticsearch or OpenSearch. The role mentions "Vector DB, etc. at scale" — you can learn, but it's not native to you.

**Verdict:** You have 70% of the skills; 30% are learnable in first 3 months. This is a junior-level hire, so gaps are expected.

### 2. North Star Alignment (3.5/5)

**Why this is OK but not optimal:**

**Strengths:**
- **Full-Stack Backend Archetype:** If you want to go deep on backend infrastructure, this is a good path. Microservices, distributed systems, observability.
- **Moveworks Context:** Moveworks is an AI company (conversational AI for enterprise). Within ServiceNow, you're still working on AI infrastructure (search, feature flags, traffic replay for ML). There's an AI thread, but it's weak.
- **"Own features end-to-end":** Role promises ownership. PatentIQ prepared you for this (you led end-to-end).
- **Real Impact:** Moveworks processes billions of conversations. Your work affects millions of users.

**Weaknesses:**
- **Not Agentic AI:** This role is backend infrastructure, not agentic agents or LLM integration. You'd be building the *plumbing* for AI systems, not the AI itself.
- **No Prompt Engineering:** Viasat asks you to "design and test prompts for agentic workflows." ServiceNow asks you to "build feature flags and rate limiting." Different muscles.
- **Less Alignment with Your Stated Interest:** Your profile says: "No strong preference — all roles equally interesting." But then it details 4 archetypes: Full-Stack Software Engineer, AI/ML Engineer, Hardware/Embedded, Full-Stack Web Developer. This role is closest to "Full-Stack Software Engineer (Backend)," which is your 1st listed archetype. But Viasat is "AI/ML Engineer," your 2nd listed archetype.
- **Infrastructure Can Be Boring:** Some engineers love distributed systems. Others (like you, based on project choices) love *products* (PatentIQ, FlipperZillow, Groundwork). Kafka and Elasticsearch are means, not ends. Worth considering whether you want to spend 2+ years on infra.

**Verdict:** This is a good "backup" choice if you want backend infrastructure experience, but it's not your top archetype alignment. Viasat is better.

### 3. Compensation (3.0/5)

**The Problem:** Salary is not disclosed in the JD.

**Red Flags:**
- When tech companies don't disclose salary, it usually means: (a) internal budget constraints, (b) they'll offer low-ball and negotiate, or (c) they want to gather info on candidates before committing. None of these are good signs.
- ServiceNow is a public company (profitable, $35B+ market cap). They can afford to post salary. The fact that they didn't is concerning.

**Market estimate for new grad at ServiceNow:**
- ServiceNow new grads typically: $130K-$160K base (2026 market)
- Moveworks historically paid premium for this role (acquired startup mentality)
- Likely: $140K-$160K

**But here's the issue:** You don't know until you interview. Viasat posted $95K-$150K upfront (transparency). This role hides it.

**Recommendation:** If you interview, ask directly: "What's the salary band for this role?" If they deflect, that's a yellow flag.

**Verdict:** 3.0 = acceptable but uncertain. Get clarity before committing time to interviews.

### 4. Cultural Signals (4.0/5)

**Strengths:**
- **ServiceNow is Fortune 500:** Profitable, stable, global. Not a startup risk.
- **Moveworks Culture Within ServiceNow:** Moveworks was acquired for its talent/culture. Internally, they still operate at "startup pace." This is a sweet spot: scale + speed.
- **Mountain View (Palo Alto area):** Hub of tech, talent density, great for network-building.
- **Explicit Ownership:** "Own features end-to-end, regularly influence infrastructure roadmap." You get agency.

**Cautions:**
- **Required In Office:** "Required in Office" in Mountain View. You'll relocate, so this is fine, but it's not flexible.
- **Large Organization:** ServiceNow has 15,000+ employees. Within Moveworks (maybe 200-300 people), you'll feel the startup vibe. But meetings with ServiceNow teams? Slower.
- **Infrastructure Focus:** If you're drawn to product design and user impact, infrastructure can feel abstract. Kafka doesn't ship to customers; the feature it enables does.
- **2-3 year trap:** Infrastructure roles can become specialized. After 2 years of "I'm the expert in our Kafka pipeline," it's hard to pivot back to full-stack product work. Worth considering your 5-year trajectory.

**Verdict:** Good culture, stable company, but infrastructure-focused and potentially limiting long-term.

### 5. Red Flags (−0.6/5)

**Critical red flag:**
- **Salary undisclosed:** This is your biggest concern. Don't interview without clarity on comp.

**Moderate red flags:**
- **Infrastructure work may not excite you:** Based on your project portfolio (PatentIQ = product; Mini-Stockfish = game playing; FlipperZillow = user experience), you seem drawn to *finished products*, not internal plumbing. Kafka and feature flags are plumbing.
- **Onsite required:** Not a deal-breaker (you'll relocate), but inflexible.
- **Limited AI/ML exposure:** If you want to stay in AI/ML, this role is a detour. You'll be building infrastructure *for* AI teams, not doing AI yourself.

**Minor red flags:**
- **Potential for over-specialization:** Kafka + feature flags can become a narrow niche. Viasat (broad AI/LLM integration) is more portable.

---

## Comparison: Viasat (315) vs ServiceNow (316)

| Factor | Viasat | ServiceNow |
|--------|--------|-----------|
| **Score** | 4.6/5 | 3.9/5 |
| **Archetype Fit** | Agentic AI (2nd priority) | Backend Infra (1st priority) |
| **Product vs Infra** | Product (agentic agents) | Infra (Kafka, feature flags) |
| **Excitement Level** | High (LLMs, agents, prompt design) | Medium (distributed systems) |
| **Comp Clarity** | Transparent: $95K-$150K | Undisclosed (red flag) |
| **New Grad Structure** | CAP program (explicit) | Moveworks mentorship (implicit) |
| **Growth Trajectory** | AI/LLM engineer → lead architect | Backend engineer → infrastructure expert |
| **Relocation** | Carlsbad, CA | Mountain View, CA |
| **Recommendation** | APPLY IMMEDIATELY | SOLID BACKUP; GET SALARY INFO FIRST |

---

## Recommendation: APPLY, BUT SECONDARY PRIORITY

**Why apply:**
1. **Solid technical fit:** You have the performance optimization, cloud platform, and problem-solving skills.
2. **Good company:** ServiceNow + Moveworks culture is solid.
3. **Real ownership:** End-to-end features, infrastructure roadmap influence.
4. **If infrastructure excites you:** This is a top-tier infrastructure role.

**Why it's secondary to Viasat:**
1. **Archetype mismatch:** Viasat targets your agentic AI interest; ServiceNow is backend infrastructure.
2. **Product vs Plumbing:** You seem drawn to products (PatentIQ, FlipperZillow); this role is plumbing.
3. **Comp is unclear:** Viasat posted transparency; ServiceNow hides it (concerning signal).
4. **Narrow specialization risk:** After 2 years, you become the "Kafka expert," harder to pivot.

**If you apply:**
1. **Ask about salary early:** "I'm interested in this role. What's the compensation band for new grads?" Get clarity before investing interview time.
2. **Ask about growth:** "After 2 years, what does a career path look like? Do people move into product, team leads, or stay specialized in infrastructure?"
3. **Highlight performance optimization:** Lead with Mini-Stockfish (latency) and Groundwork (API optimization). Downplay the AI/ML angle — they don't care.

**Confidence:** MEDIUM. Good backup, but Viasat is the play.

---

## Next Steps

1. **Priority 1: Viasat.** Apply immediately, prepare materials, interview.
2. **Priority 2: ServiceNow.** Apply, but confirm salary range before committing interview time. If comp is $130K+, interview. If $100K-$120K, pass.
3. **Strategy:** Interview at both if timelines align. Viasat is higher priority, but ServiceNow is a solid offer if things don't work out.

**Confidence on this role:** MEDIUM. Good company, solid technical fit, but not your top archetype and unclear comp. Viasat is higher priority.
