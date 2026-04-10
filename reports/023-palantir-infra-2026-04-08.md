# Palantir — Software Engineer, New Grad - Production Infrastructure

**URL:** https://jobs.lever.co/palantir/e1a6c138-98bf-45e2-97f7-2c70371cc38a  
**Date Evaluated:** 2026-04-08  
**Score:** 3.5/5

---

## Block A: Role Summary

**Archetype:** Systems/Infrastructure Engineer (DevOps-adjacent)  
**Domain:** Distributed systems, reliability, deployment  
**Function:** Infrastructure, observability, reliability, tooling  
**Seniority:** New grad  
**Location:** Palo Alto, CA  
**Remote:** On-site or hybrid (Palantir model)

---

## Block B: CV Match

### Strengths

1. **Systems-level understanding:** TriCore9, Mini-Stockfish optimization, distributed thinking
   - Same as #022, applies here too

2. **Performance monitoring & optimization:** You track metrics (90% latency reduction, 77.2% optimization)
   - Evidence: Multiple projects cite specific performance improvements with measurements

3. **Cloud deployment experience:** PatentIQ on Vercel + EC2, Groundwork on production
   - Evidence: "Hosted on Vercel, EC2, and Supabase"

### Gaps (Significant)

1. **No explicit DevOps/SRE work:** No Kubernetes, Docker orchestration, CI/CD pipelines, monitoring (Prometheus, Datadog, New Relic)
   - Evidence: CV mentions Docker in Tools but not in projects

2. **No incident response or on-call experience** — infrastructure roles need this
   - Mitigation: New grad; can learn on the job

3. **No mention of system resilience, failover, or high-availability design** — infrastructure roles emphasize 99.9% uptime thinking
   - Mitigation: You have the fundamentals, just need applied experience

**Why this matters:** Infrastructure roles care more about "keeping things running" than "building new things." Your CV is all about shipping features. Infrastructure requires a different mindset (defensive, observability-first, incident-driven).

---

## Block C: Level & Strategy

**Seniority:** Good fit (new grad target), but different from general software engineering.

**Positioning challenge:** You're a generalist shipped-features engineer applying to a specialist reliability role. You need to reframe.

**Strategy:**
- Lead with performance work (that IS infrastructure thinking: you optimized things others left slow)
- Mention monitoring/observability needs you encountered (e.g., Redis latency tracking at Groundwork)
- Acknowledge the gap: "I haven't done on-call or incident response, but I understand why systems fail and how to prevent failure modes"

---

## Block D: Comp & Demand

**Typical Palantir new grad infrastructure:** $160K-$200K+ (same as general newgrad)  
**Market:** High demand for SRE/infrastructure, especially at top companies  
**Competition:** Likely competing against CS grads with explicit DevOps/SRE internships

---

## Block E: Red Flags & Wins

### Green flags
- Clear career path (infrastructure → staff engineer → management)
- Extremely high comp and equity

### Yellow flags
- **Not your archetype strength.** You're a builder (full-stack, AI, hardware). Infrastructure is different.
- **Competition is fierce** from SRE-track candidates
- **On-call rotations** — can be demanding as new grad (on-call 24/7 doesn't mix well with learning)

### Red flags
- **Seniority gap:** You can do this role, but you're overqualified for infrastructure and underqualified for specialization. Better to start in general software engineering track, then move to infrastructure if interested.

---

## Block F: Interview Prep

If pursuing, emphasize:

1. **Mini-Stockfish optimization story (infrastructure angle):**
   - Framed as: "I realized the critical path was leaf node evaluation. I went deep into profiling, Cython, memory access patterns."
   - Infrastructure angle: "Understanding where time is spent is the foundation of observability"

2. **Groundwork caching architecture:**
   - **Situation:** Real-time inventory sync was slow
   - **Task:** Reduce Square API latency
   - **Action:** Added Redis layer, client-side request coalescing
   - **Result:** 90% latency reduction
   - **Why it matters (infrastructure framing):** "I added observability (monitored cache hit rates), designed for failure (cache miss fallback to API), thought about reliability (TTL invalidation strategy)"

---

## Summary & Recommendation

**Fit:** Moderate (3.5/5). You have the fundamental skills but this role specializes in reliability/infrastructure, not feature development.

**Recommendation:** **APPLY, but as second choice.** 
- Better to apply to #022 (general software engineer) first
- If you're genuinely interested in infrastructure, pursue this, but expect the interview to probe DevOps/SRE knowledge
- If offered, take #022 over this — you'll learn more and grow faster in a generalist role

**Why 3.5 vs 4.2?** Same company, same new grad cohort, but this role requires specialization. You're a generalist. You can do this, but you'll shine more in a general software engineering role where you can ship features end-to-end.

---

## Go/No-go

**Apply:** Yes (but prioritize #022)  
**Generate PDF:** Yes (same as #022, emphasize performance work)  
**Interview prep:** Expect systems design with reliability focus (failover, scaling, observability)
