# Palantir — Software Engineer, New Grad - Production Infrastructure

**URL:** https://jobs.lever.co/palantir/e1a6c138-98bf-45e2-97f7-2c70371cc38a

**Score (A-F blocks):**
- A (Match with CV): 3.5/5
- B (North Star): 3.6/5
- C (Compensation): 3.9/5
- D (Culture): 3.9/5
- E (Red Flags): 3.5/5

**Global Score: 3.7/5 — APPLY (but choose 088 over 089)**

---

## Role Summary

Palantir production infrastructure role (new grad). Focus on building infrastructure systems: deployment, scaling, monitoring, reliability. Requires lower-level systems knowledge (Kubernetes, databases, observability). This is more specialist than general SWE (088).

---

## A: Match with CV

**Fit: 3.5/5** — Systems thinking is strong, but infrastructure operations experience is thin.

**Strengths:**
- Systems thinking: TriCore9, Mini-Stockfish show you understand low-level optimization
- Distributed systems: FlipperZillow (GPU coordination), PatentIQ (async workflows)

**Gaps:**
- No production infrastructure experience (you used managed services: Vercel, Supabase, EC2)
- No Kubernetes/Docker orchestration (you reference Docker but haven't managed clusters)
- No monitoring/observability (Prometheus, DataDog, Grafana)
- No on-call operations (infrastructure roles are on-call)

**Why it matters:** Infrastructure roles require sustained focus on reliability, not product features. Different skill set.

---

## B: North Star (Archetype Fit)

**Fit: 3.6/5** — Full-Stack + Hardware/Systems Engineer (you have hardware depth), but infrastructure is specialized.

---

## C: Compensation

**Fit: 3.9/5** — Same as 088: $170K–$200K base + equity, ~$200K–$240K total.

---

## D: Culture

**Fit: 3.9/5** — Same as 088: rigorous, intense, well-funded.

---

## E: Red Flags

**Concerns: 3.5/5**

1. **Infrastructure specialization:** You're a generalist; they want infrastructure specialists. Ramp-up is 6–12 months.
2. **On-call operations:** Infrastructure roles include on-call rotations. Are you comfortable with that?
3. **Less product impact:** Infrastructure is enabler, not user-facing. Different satisfaction profile.

---

## Global Score & Recommendation

**3.7/5 — APPLY (but choose 088 over 089)**

If you want infrastructure specialization, this is good. But if you prefer product work, choose 088 (general SWE) instead. Both pay the same; 088 is better fit for your skillset.

**Recommendation:** Apply to 088 (general SWE). If they reject you, apply to 089 as backup.

---

## Interview Prep: STAR Stories

**Story 1: Distributed System Coordination (FlipperZillow)**
- Orchestrated multi-stage GPU pipeline: image → DepthAnythingV2 → DFormerV2 → Claude → ElevenLabs
- Managed resource constraints (one GPU VM at a time), made routing decisions (ROCm vs. CUDA)
- **Why:** Shows you think about system resource allocation and reliability

**Story 2: Optimization Under Constraints (Mini-Stockfish)**
- Reduced critical path latency by 77.2% via profiling + targeted optimization
- **Why:** Infrastructure values engineers who optimize for performance under constraints

