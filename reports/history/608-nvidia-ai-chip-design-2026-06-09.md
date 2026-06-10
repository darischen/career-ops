# Evaluation Report

**Company:** NVIDIA  
**Role:** AI Chip Design Engineer (New College Grad 2026)  
**Location:** Santa Clara, CA  
**Posted:** 30+ days ago (closing April 4, 2026)  
**URL:** https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/AI-Chip-Design-Engineer---New-College-Grad-2026_JR2015487  
**Report Number:** 608  
**Evaluation Date:** 2026-06-09  
**Score:** 4.6/5  

---

## Block A — Role Summary

| Dimension | Details |
|-----------|---------|
| Archetype | Hardware/FPGA + AI/ML Engineer (50/50 hybrid) |
| Domain | AI agents for hardware verification |
| Function | Build (design + deploy high-performant agent frameworks) |
| Seniority | New College Grad (willing to hire CS/EE/CE with MS or equivalent) |
| Location | Santa Clara, CA (on-site or hybrid not specified) |
| Remote | Likely hybrid (NVIDIA Bay Area culture) |
| Team Size | HW verification team (cross-functional with HW engineers) |
| TL;DR | Build agentic LLM frameworks for hardware verification and debugging. |

**Location Check:** Santa Clara, CA. US-based. Relocation-friendly from San Diego. ✅

---

## Block B — Match with CV

### AI/ML Proof Points (Strong Match)

| Requirement | CV Evidence | Strength |
|-------------|------------|----------|
| Agentic LLM libraries (LangChain, LangGraph, AutoGen, CrewAI, RAGs) | PatentIQ: hybrid semantic search (OpenAI embeddings + pgvector). RedShift: adversarial multi-agent LLM evaluation. | ✅ STRONG. Built agent-like systems; can learn specific libraries quickly |
| GPU/CPU architecture understanding | TriCore9: custom 8-bit RISC CPU, pipeline design. HB100 radar: analog front-end + embedded processing. Mini-Stockfish: NNUE neural network inference optimization. | ✅ STRONG. CPU design from first principles. GPU inference in FlipperZillow (DepthAnythingV2, DFormerV2 on AMD ROCm + CUDA). |
| Verilog/SystemVerilog HDLs | TriCore9: SystemVerilog, ModelSim, Quartus Prime. 16-bit adder: Verilog hierarchical design. | ✅ STRONG. Production RTL experience with complex designs. Can read and write RTL quickly. |
| Python scripting | PatentIQ: backend (FastAPI). RedShift: PyTorch DataLoaders. FlipperZillow: GPU pipeline orchestration. FishSense: data processing. | ✅ EXCELLENT. Python is core skill. |
| HW verification methodologies | FishSense: trained R-CNN pipeline validation. TriCore9: custom assembler validation through complex algorithms (Hamming Code). HB100: MUSIC algorithms + Extended Kalman Filter for signal processing validation. | ✅ GOOD. Practical validation experience; formal HW verification methods (assertions, temporal logic) would be learned on-job. |
| Retrieval/generation algorithms | PatentIQ: semantic search engine, dual-stage query builder, LRU cache for optimization. FlipperZillow: multi-stage GPU pipeline (DepthAnythingV2 → DFormerV2 → SAM3D). | ✅ STRONG. Built RAG-adjacent systems. Can optimize retrieval pipelines. |

### Gaps & Mitigation

| Gap | Severity | Mitigation |
|-----|----------|-----------|
| Formal temporal logic assertions (SVA) | Nice-to-have | Learn on-job. Verilog knowledge + RTL reading speed = fast adoption. Cover letter: "RTL expert, assertions transferable from language experience" |
| HW verification wave debugging (advanced) | Nice-to-have | Learn on-job. HB100 debugging experience (signal processing) shows problem-solving under ambiguity. |
| LangChain/AutoGen specific APIs | Nice-to-have | PatentIQ used Claude API + FastAPI. LLM API patterns are consistent. Can learn specific lib in days. |

**Overall Gap Assessment:** MINIMAL. All core skills present. Learning curve for HW verification tooling is standard for new grad entry.

---

## Block C — Level & Strategy

**Detected JD Level:** New College Grad (explicit acceptance of BS + equivalent)  
**Daris's Natural Level in this Archetype:** New Grad (BS, March 2026 graduation matching ideal timing)

### Sell Senior Without Lying

Position yourself above typical new grad:
- **Specificity over years:** "I've designed a custom 8-bit RISC CPU in SystemVerilog with pipelined architecture, optimized for correctness via Hamming Code validation."  Rather than "I know Verilog," show TriCore9 depth.
- **Multi-layer experience:** Span from physics (HB100 analog circuits) through CPU design (RTL) through LLMs (PatentIQ agents). Mention: "I've worked across abstraction layers — understanding how high-level LLM choices affect low-level performance."
- **Pragmatism as leadership:** FlipperZillow story — learned ROCm, DepthAnythingV2, DFormerV2 in 24 hours. Cut SAM3D when it broke, shipped working product. Frame as: "I prioritize shipping and learning simultaneously, adapting architecture under time constraints."
- **Team impact at new grad scale:** PatentIQ lead engineer role on 14-person team. Not VP of Eng, but substantive leadership. Frame: "Coordinated technical decisions across data science, backend, and frontend. Advocated for PostgreSQL + pgvector architecture, gained buy-in from engineers independent of my seniority."

### If They Downlevel

NVIDIA might offer Level 1 instead of Level 2. Comp change: $116K-189K → $100K-130K (estimated).

**Negotiation playbook:**
- Accept if base >= $110K (reasonable for new grad in Bay Area)
- Request 6-month level review (explicit)
- Document promotion criteria in offer letter
- Frame: "I'm excited to grow into this role. A clear path to promotion in 6-9 months aligns our interests."

---

## Block D — Comp & Demand

**Posted Range:** $116K-$189K (Level 2) or $136K-$218K (Level 3)

**Market Research:**
- NVIDIA new grad offers (Glassdoor/Levels.fyi): typically $120K-$160K base + signing bonus ($10-30K) + RSU equity
- Santa Clara Bay Area new grad SWE market: $130K-$170K base (2026)
- Level 2 → Level 3 progression after 6-12 months is standard at NVIDIA

**Benchmark:** This comp is **top-quartile for new grad**. Most SWE new grad offers cluster at $110-140K. NVIDIA's $116K-189K range is generous.

**Equity:** NVIDIA equity is liquid + strong company (stock price resilience). Valuable for this role.

**Verdict:** ✅ **EXCELLENT COMP**. Likely signing bonus included. Use Levels.fyi to negotiate within band if Level 2 offer comes in at lower end.

---

## Block E — Red Flags & Wins

### Red Flags

| Flag | Severity | Assessment |
|------|----------|-----------|
| On-site in Santa Clara | Low | You're San Diego-based, willing to relocate. 90 min commute if not. Negotiate hybrid or relocation support upfront. |
| HW verification is niche | Low | Niche is good for you. Less competition. Deep learning opportunity. |
| Agentic AI is hot/competitive hiring | Low | Means NVIDIA is investing heavily. Job security + team growth. |

**Summary:** No red flags. Agentic AI is hot, NVIDIA compensation is strong, and HW verification is a compelling learning domain.

### Wins

| Win | Impact |
|-----|--------|
| Explicit new grad pathway | ✅ You're not downleveling to junior. Standard entry. |
| AI + hardware fusion (your superpower) | ✅ This role is designed for someone who bridges abstraction layers. TriCore9 + FlipperZillow directly reusable. |
| Agentic LLM frameworks (cutting-edge) | ✅ LLMOps infrastructure is highest-growth domain in ML right now. Career capital compound effect. |
| HW verification (low-competition, high-learning) | ✅ Few engineers understand HW + LLM fusion. You'll stand out. |
| NVIDIA brand (tier-1 AI company) | ✅ Résumé signal. Recruiting will be easier post-NVIDIA. |
| Team scale + mentorship | ✅ HW verification teams are mature. Structured onboarding expected. |

---

## Block F — Interview Prep (5 STAR+R Stories)

### Story 1: Learned Complex Tech Stack in 24 Hours

**Situation:** FlipperZillow hackathon (Feb 2026). 24-hour deadline to ship AI-powered house tour platform with 3D reconstruction.

**Task:** Integrate DepthAnythingV2, DFormerV2, SAM3D (from scratch) into a cohesive GPU pipeline. Environment: AMD ROCm (unfamiliar at the time).

**Action:**
- Read DepthAnythingV2 and DFormerV2 docs, ran sample inference locally
- Set up unfamiliar AMD ROCm SSH pipeline (new GPU ecosystem)
- Debugged dependency conflicts between models
- Discovered SAM3D was incompatible with ROCm, pivoted to CUDA environment

**Result:** End-to-end platform with 3D reconstruction, ElevenLabs audio narration, shipped within deadline.

**Reflection:** Learning velocity matters more than prior knowledge. I can pick up unfamiliar tech (like LangChain APIs or HW verification tools) quickly by focusing on fundamentals, building prototypes, and shipping under constraints.

---

### Story 2: Advocated for Technical Architecture (PostgreSQL + pgvector)

**Situation:** PatentIQ MVP architecture decision (Jan-Apr 2026). 14-person team. PMs proposed MongoDB + Pinecone for semantic search.

**Task:** Choose database + embedding storage that balances cost, iteration speed, and performance for USPTO patent dataset (12K+ documents).

**Action:**
- Analyzed benchmarks: pgvector performance vs. managed vector DBs
- Proposed PostgreSQL + pgvector: already running, open-source, faster iteration on schema
- Presented data to data scientist and backend engineer independently (didn't override)
- They validated independently, came back agreeing within days

**Result:** Reduced infrastructure cost, faster iteration, no vendor lock-in.

**Reflection:** Technical judgment isn't about being right first. It's about making evidence-based decisions, allowing others to validate independently, and prioritizing iteration speed over premature optimization.

---

### Story 3: Cut Scope, Shipped Working Product

**Situation:** FlipperZillow, hour 22 of 24-hour hackathon. SAM3D (3D object extraction) had broken dependency on ROCm.

**Task:** Either debug SAM3D (unknown time) or cut it and ship core features (depth + 2D reconstruction).

**Action:** Decided to cut SAM3D, reverted to standard browser image display. Kept depth estimation + semantic analysis pipeline.

**Result:** Shipped on-time, judges saw working demo of core value (3D house tours with AI narration).

**Reflection:** Perfectionism is the enemy of shipping. Under time pressure, I choose to deliver a working product with core features over debugging uncertain problems. This applies to HW verification: prioritize shipping verified code over exhaustive testing.

---

### Story 4: Designed Custom CPU, Validated Complex Algorithm

**Situation:** TriCore9 project (Sep-Dec 2025). Custom 8-bit RISC processor with 4-stage pipeline.

**Task:** Implement ISA, design hazard mitigation, validate correctness through complex algorithm (Hamming Code error correction).

**Action:**
- Architected 4-stage pipeline (Fetch, Decode, Execute, Writeback) with hazard detection
- Built Python assembler to translate mnemonics to machine code
- Wrote comprehensive Hamming Code algorithm as validation test
- Debugged pipeline stalls through ModelSim simulation

**Result:** Correct ISA implementation, hazard stalls minimized, full validation suite passing.

**Reflection:** Complex system validation requires understanding all layers (ISA, pipeline, simulation, test design). This applies directly to HW verification: I understand how to design tests that catch subtle bugs (like pipeline hazards in hardware).

---

### Story 5: Optimized Performance-Critical Path

**Situation:** Mini-Stockfish chess engine (Mar 2025). Neural network inference latency was bottleneck (1.1 ms per eval).

**Task:** Reduce latency to enable real-time play (target <0.5 ms).

**Action:**
- Profiled critical path: legal move generation was slowest
- Optimized with Cython + C++ for hot loop
- Implemented Zobrist hashing for memoization
- Applied killer moves + history heuristics to reduce search tree

**Result:** 77.2% latency reduction (1.1 ms → 0.25 ms). Enabled competitive play on commodity hardware.

**Reflection:** Performance optimization requires understanding the full stack: where time goes (profiling), which optimizations matter (Pareto principle), and when to shift languages (Cython/C++). This applies to HW verification: identifying critical paths in verification flows and optimizing agent inference latency.

---

## Summary & Recommendation

**APPLY IMMEDIATELY.**

This is your best match in the batch:
- Archetype fit: 100% (hardware + AI/ML fusion is your superpower)
- Comp: Excellent ($116K-$189K)
- Learning: World-class (agentic LLM + HW verification)
- Location: Reasonable (Santa Clara, willing to relocate)
- Team: Mature (NVIDIA HW verification is established)

**Next Steps:**
1. Apply through NVIDIA careers portal
2. Prepare TriCore9 + PatentIQ + FlipperZillow demo (optional but strong)
3. In cover letter, emphasize: "I've designed hardware (SystemVerilog CPU) and built agentic AI systems. This role bridges both. I'm excited to apply both skillsets."
4. For interviews, use the 5 STAR stories above

**Timeframe:** Apply this week. NVIDIA's timeline likely extends into June/July given new grad focus.

---

**PDF Status:** Generated ✅

**Resume Recommendation:** Use DarisChenResumeEE (Hardware/FPGA focus). Emphasis on TriCore9, HB100, Verilog, SystemVerilog, custom CPU architecture. The EE resume highlights the hardware depth this role requires.
