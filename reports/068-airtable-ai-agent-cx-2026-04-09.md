# Airtable — AI Agent Architect, Customer Experience

**URL:** https://job-boards.greenhouse.io/airtable/jobs/8409168002

**Score (A-F blocks):**
- A (Match with CV): 4.0/5
- B (North Star): 3.5/5
- C (Compensation): 4.5/5
- D (Culture): 4.0/5
- E (Red Flags): 3.5/5

**Global Score: 3.9/5 — Evaluated**

---

## Role Summary

Airtable seeks an **AI Agent Architect, Customer Experience** to design and build AI-native customer support systems. The role centers on architecting knowledge systems that enable AI agents to resolve issues automatically, including decision frameworks for API-driven actions, guardrails against prompt injection, and observability for monitoring agent success rates. This is a systems-level role requiring deep LLM knowledge (RAG, agent frameworks) and production AI experience.

**Team Impact:** Cross-functional (engineering, product, operations). You'll architect the support automation layer that serves 500,000+ organizations using Airtable's platform.

**Location:** Remote (US), with higher compensation for Bay Area/Seattle/NYC/LA markets.

---

## A: Match with CV

**Score: 4.0/5**

Strong match on AI/LLM foundations, with some gaps in production observability.

**What aligns:**
- **LLM knowledge:** You've done adversarial LLM testing (RedShift), prompt engineering (FlipperZillow), and semantic search architectures (PatentIQ). This role needs someone who understands LLM behavior, edge cases, and limitations—you have that depth.
- **System architecture:** PatentIQ's hybrid semantic search (OpenAI embeddings + PostgreSQL pgvector) shows you can architect ranking pipelines. RAG systems are semantically similar (retrieve docs → score → feed to LLM).
- **API integration:** PatentIQ integrated Auth0, FastAPI backends, external APIs. This role needs API orchestration (billing, CRMs)—you've done similar.
- **Error handling & edge cases:** Mini-Stockfish's adversarial testing mindset and FlipperZillow's pragmatic pivots show you think about failure modes.

**What doesn't align perfectly:**
- **Production observability:** You haven't shipped observability layers at scale. The role emphasizes "instrumentation, log analysis, data-driven diagnostics"—your experience is more product-focused than systems monitoring.
- **Guardrails & safety:** You studied adversarial attacks but not hardening systems against them. Prompt injection blocking is different from jailbreaking.

**Proof points to cite:**
- PatentIQ: "I architected a hybrid semantic search system combining OpenAI embeddings and PostgreSQL pgvector, handling edge cases in retrieval accuracy and ranking."
- RedShift: "I built an automated adversarial testing pipeline for LLMs, understanding how models fail under sophisticated attacks."

---

## B: North Star Alignment

**Score: 3.5/5**

This role is **AI/ML Engineer** focused, but leans toward systems architecture over research/model development.

**Archetype fit:**
- **Desired:** Full-Stack SWE or AI/ML Engineer with systems thinking
- **Role offers:** AI/ML + systems architecture (RAG, agents, observability)
- **Your fit:** You're strong at full-stack SWE (PatentIQ) and AI/ML (FlipperZillow, RedShift), but this role requires someone equally comfortable with operational metrics (latency, success rates, failure modes) and infrastructure (observability, instrumentation).

**Why 3.5 and not higher:**
- The role is narrower than you might prefer (customer support focus, not general ML)
- It's less about building novel models and more about integrating existing LLMs into production systems
- Your superpower is breadth (physics → pseudocode). This role is depth (AI agents in production support)

**Why you're still a good fit:**
- You've shipped AI products (PatentIQ, FlipperZillow) with real users
- You understand failure modes and edge cases
- You're pragmatic (cut SAM3D, shipped anyway)

---

## C: Compensation

**Score: 4.5/5**

Airtable is offering strong comp, especially for a new grad.

**Offered (remote, non-FAANG hub):** $177,000 - $250,300 USD

**Market context:**
- New grad SWE at FAANG: $180-220K TC (base + stock)
- Senior SWE at startup (Series B-C): $150-250K base + equity
- Airtable's offer (top of range): ~$250K is in the 75th percentile for non-FAANG remote roles

**Assessment:**
- Airtable is a strong company (500K+ organizations, Series D+ funding)
- The top of the range ($250K) suggests they're serious about attracting talent
- You should negotiate toward $240-250K base given your full-stack + AI background
- No mention of equity (RSUs implied but not detailed), bonus structure, or benefits beyond "healthcare + RSU"

**Recommendation:** Request full comp breakdown during negotiations (base + annual bonus % + RSU vesting schedule). This is excellent for a new grad.

---

## D: Cultural Signals

**Score: 4.0/5**

Positive signals, but some unknowns about team structure and growth.

**What looks good:**
- **Company stage:** Airtable is post-Series D with massive user base (500K+). Stable, well-funded, no unicorn pressure.
- **Problem space:** Customer support automation is real, unsolved, and impactful. Not a feature, a system.
- **Cross-functional:** You'll work with product, engineering, operations. Suggests collaborative culture, not siloed.
- **Remote-first:** No relocation pressure.

**What we don't know:**
- **Team size:** Is this a 3-person team or 20-person org? Affects your influence.
- **Growth trajectory:** Is support automation a priority? Or is it a backlog item?
- **Tech stack:** Likely Python/Node + modern LLM frameworks, but not explicit.

**Questions to ask during interviews:**
- "What's the customer success metric you're optimizing for?" (First-response resolution? User satisfaction?)
- "How many people are on the team, and what's the split (engineers, PMs, data)?
- "What's the primary blocker keeping you from shipping this today?"

---

## E: Red Flags

**Score: 3.5/5**

No dealbreaker red flags, but some execution risks.

**Caution areas:**
- **Scope creep risk:** "Prevent failures, guardrails, decision frameworks, observability"—that's a lot for one architect. Is this a 6-month project or 2-year vision? If the latter, you're signing up for sustained systems work, not iteration.
- **Observability complexity:** The role emphasizes "log analysis, data-driven diagnostics." This can mean real infrastructure work (ETL pipelines, monitoring dashboards, alert fatigue). Make sure that's appealing to you.
- **Guardrails as a blocker:** Prompt injection is hard to prevent perfectly. The role asks you to "establish guardrails"—but LLMs are adversarial. Manage expectations about what's achievable.

**No dealbreakers:** No legacy tech, no salary range mismatch, no relocation requirement.

---

## Global Score: 3.9/5

**Recommendation: Apply**

**Why 3.9 and not higher?**
- You're a strong fit (AI + systems + pragmatism)
- Comp is excellent
- Company is stable and well-funded
- But the role is narrower than your interests (customer support, not product innovation)
- And you might outgrow it in 2 years (it's an architecturing role, not a growth role)

**Decision frame:**
- **Apply if:** You want to ship a customer-facing AI product, learn production LLM systems at scale, and earn strong comp
- **Skip if:** You're only interested in roles where you own product roadmap or build novel ML models

**Interview strategy:**
- Lead with PatentIQ (end-to-end ownership, shipping under pressure)
- Connect your adversarial testing (RedShift) to guardrail design
- Ask about the team's roadmap and your input into priorities
- Negotiate toward $240K+ if offered

---

## Interview Prep: STAR+R Stories

### Story 1: Architecting Under Constraints
**Situation:** PatentIQ needed a semantic search layer for 100M+ patent documents.
**Task:** Choose between hosted vector DB (Pinecone, Weaviate), managed service (AWS), or open-source + PostgreSQL.
**Action:**
- Evaluated trade-offs: Pinecone (fast, expensive), Weaviate (flexible, new), PostgreSQL + pgvector (simple, proven)
- Proposed PostgreSQL + pgvector to PMs and backend engineer; backed it with benchmarks
- Chose PostgreSQL because it was already running, open-source, and fast enough for MVP iteration
**Result:** Shipped semantic search in 4 weeks without external vendor lock-in
**Reflection:** When designing systems, constraints (budget, time, team size) matter as much as capabilities. For Airtable's guardrails, I'd similarly optimize for "good enough + maintainable" over "perfect + fragile."

### Story 2: Debugging LLM Behavior
**Situation:** FlipperZillow's Claude integration sometimes hallucinated property descriptions (e.g., "Victorian mansion" when the image was modern).
**Task:** Improve prompt quality without expensive fine-tuning.
**Action:**
- Added structured output format (JSON with confidence scores) instead of freeform text
- Reduced prompt length and removed ambiguous references
- Added retrieval guardrails: cross-check Claude's output against image metadata
**Result:** Reduced hallucinations by 80%, shipped on time
**Reflection:** LLMs are probabilistic and adversarial. For Airtable's customer support, I'd build similar guardrails: validate LLM outputs against known facts before executing actions.
