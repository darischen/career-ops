# Evaluation Report 251
**Company:** Together AI  
**Role:** Senior Backend Engineer / Distributed Systems  
**Location:** Amsterdam (hybrid, relocation expected)  
**URL:** https://job-boards.greenhouse.io/togetherai/jobs/5068767007  
**Date Evaluated:** 2026-04-21  
**Score:** 2.1/5

---

## Quick Summary

Strong infrastructure mission, modern tech stack (Golang, distributed systems, inference workloads). **However, requires 5+ years experience while you're a new grad — major experience gap.** The role is positioned for mid/senior engineers. You have the technical foundation (systems thinking, abstraction mastery, learning velocity) but not the years of production infrastructure battle-scars they're seeking. Unless Together AI has a junior track, this is a reach apply only if you want to negotiate level or propose a different entry point.

---

## Scoring Breakdown

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Match with CV** | 3.2/5 | Relevant: distributed systems thinking, PostgreSQL, caching (Groundwork), async pipelines (FlipperZillow). Gaps: no direct Golang/Rust production experience, no Kubernetes scale ops. |
| **North Star Alignment** | 2.5/5 | Infrastructure/systems archetype is interesting but not primary target. You prefer end-to-end ownership + ship-to-users narrative; this role is deeper infrastructure (less user-facing). |
| **Comp & Benefits** | 3.5/5 | "Competitive compensation, startup equity" is vague. Market rate for 5+ years in Amsterdam: €80-120k. As new grad: €45-55k is appropriate, but role targets 5+ years. Equity + tech stack offset missing comp transparency. |
| **Cultural Signals** | 3.0/5 | Together AI is legit (open-source, research-backed). On-call rotation is standard but demanding. Amsterdam hybrid is commutable if you relocate, but no relocation package mentioned. Startup stability unknown. |
| **Red Flags** | -2.0 | **5+ years requirement is disqualifying for new grad.** Even with strong fundamentals, you lack production battle-scars: multi-node debugging, incident post-mortems, schema evolution at scale, perf tuning under load. Hiring managers will filter you out immediately. |
| **Global Score** | 2.1/5 | **Don't apply unless** you want to negotiate: "I bring systems thinking + rapid learning. Can I start as backend engineer / IC and grow into senior role?" This requires sponsor + explicit conversation. |

---

## Detailed Analysis

### Experience Gap (CRITICAL)

You're a new grad, 3-4 months into PatentIQ leadership. They want 5+ years building production infrastructure. That's a 5-year delta.

**What you HAVE:**
- Distributed thinking: PatentIQ semantic search + caching (Groundwork 90% API latency reduction)
- Real-time sync: Square API integration, 4,000+ SKU inventory (you handled schema + perf)
- Fault tolerance concepts: you understand trade-offs (SAM3D pivot in FlipperZillow)
- System design: Redis + PostgreSQL dual-tier caching, query builder optimization

**What you DON'T have:**
- Kubernetes orchestration at scale (you've deployed Vercel/EC2, not multi-node infra)
- Production incident response (on-call rotations where YOU own the 3am debugging)
- Database scaling (no sharding, no schema migrations on live tables with 10M+ rows)
- Distributed consensus (no Raft, Paxos, CRDT experience)
- GHG/memory profiling in production (you optimize code, not whole systems)

They will screen out your resume in HR.

### Tech Stack Alignment

**Positive:**
- Golang: You've written Go (tools). They want production Go expertise, you have Python/TypeScript focus.
- PostgreSQL: You used it in PatentIQ + Groundwork. Direct hit.
- Redis: You optimized with it. Positive signal.
- Distributed systems thinking: You get trade-offs (CAP theorem implicitly in caching strategy).

**Negative:**
- Rust: Not on your CV. Preference, not requirement.
- Kubernetes: You haven't deployed multi-node clusters.
- Ceph, gVisor, Firecracker: Virtualization / storage edge tech. Nice-to-have for them, you won't have.

### Culture & On-Call

Together AI is legit — research-backed, open-source contributions (FlashAttention). **But on-call rotations are hard for new grads.** You're juggling PatentIQ (leadership role) + coursework until March 2026 + job search. Adding 3am incident response is unsustainable. Once you stabilize (late 2026), revisit.

### Location

Amsterdam hybrid = relocation required. You're willing. No relocation package mentioned (red flag). Cost: ~€20-30k moving, housing search, visa (US citizen, so Schengen visa needed, but no work visa complexity for EU). **Doable but adds friction.**

---

## What They're Looking For

> "We need someone who's architected multi-node systems, scaled a database from 10k to 100M rows, debugged Kubernetes issues at 3am, and can mentor junior engineers on system trade-offs."

They're hiring experience. You're offering potential + velocity.

---

## Recommendation

**SKIP** unless:
1. You have a sponsor inside Together AI who says "we have a junior track and want you"
2. You want to negotiate entry level: "I'll start as Backend Engineer II (not Senior) and grow into Senior within 18 months"
3. You're willing to apply, expect rejection, and use it as a networking opportunity

**IF YOU DECIDE TO APPLY:** Frame it as:
- "I've built distributed systems in Python/Next.js (PatentIQ, Groundwork). My superpower is rapid domain switching — I can learn Golang + Kubernetes infrastructure in 6-8 weeks under pressure (FlipperZillow precedent: learned ROCm + 5 GPU models in 24 hours)."
- "I don't have 5 years of prod ops, but I have systems thinking across abstractions (physics → CPU → LLMs). I'm looking for a role where you value learning velocity over seniority."

**BUT REALISTICALLY:** They'll pass. The job explicitly targets 5+ years. Use the energy on roles targeting junior/mid engineers, not senior levels.

---

## Next Steps

1. **Skip this one for now.** Revisit in 2-3 years when you hit 3-5 years production experience.
2. **If you want infrastructure,** search for "Backend Engineer" (not Senior), "Infrastructure Engineer" (not Senior), or "SRE" at earlier-stage startups (Series A, not Series C+).
3. **Talk to friends/network at Together AI** if you have them — internal referral + informal chat can override the 5+ years screen.

---

## Interview Prep (IF you get past HR)

If they surprise and interview you anyway:

**Q: "How would you design a system to handle 1M concurrent requests?"**
- Reference: PatentIQ semantic search scaling (4,000+ SKUs simultaneously), Groundwork Redis caching strategy
- **Show:** You think in layers (load balancing → stateless backend → database partitioning → cache warming)
- **Avoid:** "I'd just use Kubernetes lol"

**Q: "Tell me about a time you had a production incident."**
- **Story:** FlipperZillow SAM3D / ROCm incompatibility
  - **Situation:** GPU pipeline breaking during 24hr deadline
  - **Task:** Ship 3D reconstruction despite tool failure
  - **Action:** Evaluated 3 options (debug Ceph, switch cloud, drop feature), picked cloud switch (highest confidence, lowest risk), re-architected pipeline for Nvidia CUDA
  - **Result:** Shipped on time, lost 2 hours switching, kept core product
  - **Why:** Shows prioritization under time pressure, risk assessment, pragmatism

**Q: "How do you approach performance optimization?"**
- **Reference:** Mini-Stockfish 77.2% latency reduction (1.1ms → 0.25ms) via Cython + C++ profiling
- **Show:** Profile first (find bottleneck), then optimize the critical path (not premature optimization)

---

## Report Notes

- **Experience gap is insurmountable for this posting.** Don't waste energy unless you have insider sponsorship.
- Strong infrastructure mission, but timing is wrong. Target ~mid-2027 when you have 18 months prod experience.
- Location (Amsterdam) is doable but requires relocation without company support. Prioritize US-based roles first.
