# Evaluation Report: Unity Technologies — ML Engineer, Offline Infrastructure

**Date:** 2026-06-05  
**Score:** 4.5/5  
**URL:** https://job-boards.greenhouse.io/embed/job_app?for=unity3d&gh_src=Simplify&token=7906593&utm_source=Simplify  
**PDF:** ❌ (Offered during apply)

---

## Position Summary

**Role:** Machine Learning Engineer, Offline Infrastructure (Entry-Level / New Grad)  
**Company:** Unity Technologies  
**Location:** Bellevue, WA, USA  
**Salary:** $112,700 - $169,100  
**Archetype Detected:** AI/ML Engineer (Primary)

---

## Evaluation Dimensions

### A. Match with CV (4.5/5)

**Strong alignment.** Your ML systems and data pipeline experience directly transfers.

**Matching proof points:**
- **Data pipelines & PyTorch:** PatentIQ semantic search uses hybrid ranking (OpenAI embeddings + pgvector). This role focuses on building data pipelines that generate training datasets and support distributed training workflows (PyTorch, Ray).
- **Large-scale training:** Mini-Stockfish trained on 316M Stockfish positions using PyTorch DataLoaders and batch processing. This experience directly applies to building infrastructure for distributed training at scale.
- **ML systems thinking:** FlipperZillow dual parallel GPU pipelines (DepthAnythingV2, DFormerV2, SAM3D) show ability to design high-throughput inference systems.
- **Optimization under constraints:** Mini-Stockfish: reduced leaf node latency by 77.2% via Cython + C++ optimization. This mindset (profiling, identifying bottlenecks, iterating) is exactly what ML infrastructure roles need.

**Why this role wants you:**
- Bachelor's in CS or related field (you have BS Computer Engineering, March 2026).
- ML systems experience (you have it across multiple projects).
- Python proficiency (Core language across your stack).
- Problem-solving under performance constraints (demonstrated in Mini-Stockfish, FlipperZillow).

**Concerns:**
- None. You've done everything this role requires. The only unknown is depth of distributed systems (Ray, Airflow, Flyte), but those are learnable during onboarding.

---

### B. North Star Alignment (4.8/5)

**Exceptional fit to your primary archetype.**

This role is **pure AI/ML infrastructure** — it's not trying to do something else. You're building:
- Data pipelines for training datasets
- Distributed training orchestration (PyTorch, Ray)
- Workflow orchestration tools (Airflow, Flyte)
- Dataset validation and monitoring (your strength from PatentIQ and Mini-Stockfish)

This is your **preferred role type.** You want to work on the platform, not just applications. Unity's ML infrastructure team is where that happens.

**Why it matters:**
- High learning velocity: You'll master distributed systems in 6 months.
- Compounding skills: Airflow, Ray, Flyte are transferable to any startup or big tech. Not proprietary.
- Career trajectory: ML infrastructure engineers command premium salaries. This is a strong step.

---

### C. Compensation (4.5/5)

**$112,700 - $169,100 is top quartile for new grad roles.**

Breakdown:
- Your target minimum: $80K
- Market rate for entry-level ML engineer: $90-130K
- This range: $112.7K - $169.1K (above market)
- Effective new grad offer likely: $120-140K + standard equity

**Recommendation:** Accept the offer if offered at ≥$120K. Don't negotiate below $110K.

---

### D. Cultural Signals (4.0/5)

**Strengths:**
- **Company:** Unity is a major tech player (game engine + enterprise AI). Stable, well-funded, serious ML infrastructure.
- **ML focus:** This is a dedicated ML systems team, not an afterthought. Real infrastructure work.
- **Location:** Bellevue, WA (Seattle metro). Tech hub, good market, cost of living reasonable.
- **Growth:** You'll learn distributed systems from talented engineers. This is a real career move.

**Concerns:**
- **Startup velocity:** Unity is large (1000+ employees). Iteration cycles are measured in weeks/months, not days.
- **Organizational complexity:** Larger orgs mean more meetings, slower decisions. Tradeoff for stability.
- **Relocation cost:** You're in San Diego; Bellevue is ~1,300 miles. Relocation package should cover this (verify in offer).

---

### E. Red Flags (4.0/5, minimal concerns)

**None major. This is a clean offer.**

Minor flags:
- None identified. Standard large-tech risks (slow iteration, less equity upside than startup), but you knew that.

---

### F. Global Score: 4.5/5

**STRONG MATCH. Apply immediately.**

**Decision framework:**
- If you want AI/ML + infrastructure growth: **APPLY NOW**
- If you want to stay in San Diego or avoid relocation: **Still apply; relocation is your long-term plan**
- If you're comparing to other AI/ML offers: This is tier-1 (alongside TEL Entry-Level AI Research at 4.6/5)

---

## Interview Prep Angles

### 1. Why Unity (Company Research)
- Unity is shipping ML infrastructure for game development (neural rendering, procedural generation) and enterprise AI applications
- Offline infrastructure = compute efficiency, edge deployment, model optimization
- Relevant: FlipperZillow's GPU pipeline optimization, Mini-Stockfish's latency reduction

### 2. Your Relevant Story
Use the **Mini-Stockfish 77% latency reduction story:**
- "I trained a 316M-example neural network and hit a wall on inference speed."
- "Profiled the bottleneck: neural network evaluation was taking 1.1ms per leaf node."
- "Rewrote the hot path in Cython + C++, dropped it to 0.25ms. That's 77% faster."
- "Key lesson: understanding how high-level choices (data structures, batch sizing) affect low-level performance is critical."

Unity will ask: "How do you think about performance in ML systems?" This story demonstrates that you think about infrastructure, not just high-level APIs.

### 3. Distributed Systems Questions (They Will Ask)
Expect questions like:
- "How would you design a data pipeline for 100TB of training data?"
- "What are the tradeoffs between PyTorch DataLoaders and Ray Data?"
- "How do you monitor training pipeline health?"

**Your preparation:**
- PatentIQ: You built hybrid ranking (semantic + keyword). Talk about how you chose pgvector over Pinecone (infrastructure decision).
- FlipperZillow: You orchestrated dual parallel pipelines (DepthAnythingV2 + DFormerV2) on AMD ROCm. Talk about GPU orchestration.

---

## Next Steps

1. **Apply immediately.** This is tier-1 for AI/ML.
2. **During screening call:** Ask about:
   - Typical project scope (what does success look like in first 6 months?)
   - Mentorship from senior ML engineers
   - Relocation package details
3. **During technical interview:** Bring Mini-Stockfish latency story + be ready to discuss distributed systems thinking
4. **Salary negotiation:** If offered, target ≥$120K. These roles often have ≥$150K for strong candidates.

---

## Summary

This role is an exceptional match. You have the skills, the archetype alignment, and the compensation is market-beating. Bellevue relocation is a non-issue (you're willing to relocate anywhere). Apply immediately and prioritize this alongside tier-1 AI/ML roles.

**Confidence: 4.5/5 — APPLY IMMEDIATELY**
