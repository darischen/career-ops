# Evaluation Report — NVIDIA | AI Chip Design Engineer

**Date:** 2026-06-09  
**Report #:** 608  
**URL:** https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/AI-Chip-Design-Engineer---New-College-Grad-2026_JR2015487  
**Score:** 4.6/5

---

## A) Role Summary

| Dimension | Details |
|-----------|---------|
| **Archetype** | Hardware/FPGA + AI/ML Hybrid |
| **Domain** | Chip Design, AI Accelerators |
| **Function** | Design, verification, optimization of AI-focused processor architecture |
| **Seniority** | New grad (2026 cohort, explicit new-grad role) |
| **Location** | Santa Clara, CA |
| **Remote** | Onsite required |
| **Team Size** | Large (NVIDIA group of 50+ engineers) |
| **TL;DR** | Design next-generation AI chips from ISA through synthesis. Combine custom CPU architecture with GPU inference. End-to-end ownership of chip blocks. |

---

## B) Match with CV

| CV Evidence | JD Requirement | Match Score |
|------------|---|---|
| **TriCore9 (8-bit RISC CPU):** Custom ISA, 4-stage pipeline, SystemVerilog, Quartus Prime synthesis, Python assembler | ISA design, RTL, synthesis, verification tools | 9/10 Strong match. You've designed a full ISA end-to-end. NVIDIA wants the same pattern at 64-bit scale. |
| **16-bit Carry Look-Ahead Adder:** Digital logic hierarchy, timing analysis, corner-case validation | Digital logic optimization, critical path, power/latency trade-offs | 8/10 You understand hardware trade-offs. AI chips need efficient arithmetic. |
| **FishSense R-CNN pipeline:** Detectron2, batch optimization, 40% inference latency reduction | Neural network optimization, inference acceleration | 8/10 You've optimized DL inference end-to-end. AI accelerators need this. |
| **FlipperZillow (GPU pipelines):** CUDA/ROCm, DepthAnythingV2, DFormerV2, batch processing | CUDA kernel optimization, GPU architecture understanding | 8/10 You've shipped on both NVIDIA and AMD architectures. |
| **Mini-Stockfish (NNUE + search):** Bitboard representation, 77.2% latency reduction, Cython/C++ optimization | Performance-critical code, assembly-level optimization | 8/10 You've hand-optimized performance in multiple languages. |
| **Phased Array Radar:** Analog signal conditioning, 1092x gain, DSP (FFT, MUSIC, Kalman filtering) | Signal processing, hardware verification, real-world systems | 7/10 Shows depth in non-digital domains. Not directly required but valuable. |

### Gaps & Mitigation

1. **No formal chip tape-out experience.** You've done RTL and synthesis on FPGA (Quartus). NVIDIA tapes out silicon on 3nm-5nm nodes.
   - *Mitigation:* Emphasize your ISA + pipeline design in TriCore9. Explain how you'd apply that knowledge to NVIDIA's flow. Ask in interviews what their tape-out timeline looks like—you can learn PDK (process design kit) and physical design tools on the job.

2. **No formal verification (formal methods, SVA assertions).** You've validated TriCore9 through simulation + test.
   - *Mitigation:* Your FishSense R-CNN pipeline shows systematic testing at scale. Mention this. Request formal verification training in onboarding.

3. **No power/thermal analysis.** You optimized for latency; AI chips also optimize power density.
   - *Mitigation:* Mention Mini-Stockfish latency optimization, but expect to learn thermal/power tools on the job.

---

## C) Level & Strategy

**Detected Level:** New Grad (entry-level, 2026 cohort explicitly)

**Why you match:**
- TriCore9 is a full CPU design from scratch. That's what NVIDIA looks for in new grads entering chip design. Most candidates have taken digital logic; you've shipped a full ISA.
- You understand both high-level (neural networks, inference optimization) and low-level (assembly, Verilog, pipeline hazards). This breadth is rare and valuable.
- You've optimized performance in multiple domains (chess engine, GPU inference, radar DSP). This shows you can learn NVIDIA's tools quickly.

**Positioning Plan (for interviews):**
- Lead with TriCore9 as your chip design proof point. Walk through ISA design, pipeline hazards, and why you chose 4 stages.
- Explain why you learned SystemVerilog and FPGA tools. Show you can pick up new flows fast.
- Talk about FlipperZillow GPU pipeline. Highlight how you debugged cross-architecture compatibility (CUDA vs. ROCm).
- When they ask about weaknesses, say "I haven't taped out silicon yet, but I've designed the ISA and pipeline from scratch, which is the core skill. I can learn your PDK and physical design tools fast."

**Downlevel Plan (if feedback suggests you're overqualified):**
- This role is explicitly new-grad. You won't be downleveled.
- If they ask "why not senior?", remind them: you're exactly the cohort this role targets. Focus on learning, not seniority.

---

## D) Comp & Demand

**Market Salary (New Grad, Hardware Engineering, Bay Area):**
- **Target range:** $140K–$200K base + equity (RSU cliff 4 years)
- **Total comp (year 1):** $160K–$220K (including sign-on + RSU vesting prorated)
- **NVIDIA typically:** ~$155K base for new grads in chip design + strong equity package

**Location Multiplier:** Santa Clara is Bay Area tier-1 (highest cost of living). Salary reflects this.

**Market Demand:** Extremely high. NVIDIA is aggressively hiring chip design new grads for AI accelerators. Limited supply of candidates with custom ISA experience.

**Negotiation edge:** You have a unique profile. Most new grads doing chip design learned digital logic in school. You shipped a full CPU from ISA through synthesis. You can push for $160K+ base.

---

## E) Red Flags & Wins

### Red Flags

1. **Onsite only (Santa Clara).** You're San Diego-based. No remote flexibility mentioned.
   - *Risk level:* Medium. You said willing to relocate anywhere in US. Bay Area is expensive ($2.5K+/month rent).
   - *Mitigation:* NVIDIA offers relocation packages. Negotiate that explicitly if you get an offer.

2. **New grad cohort (2026).** You graduated March 2026. You're exactly on-cohort, but the job post may be from March/April.
   - *Risk level:* Low. You're fresh, no time gap.
   - *Question to ask:* "Are you still actively hiring for the 2026 cohort, or am I applying late?"

3. **Specialized track (AI accelerators).** This is a specific domain. If you later want to work on GPUs, data center, or consumer chips, you'd need to transfer internally.
   - *Risk level:* Low. NVIDIA internal mobility is good. But confirm in interviews that you can rotate after 2-3 years if you want.

### Wins

1. **Perfect archetype match.** You're both hardware engineer AND AI/ML engineer. This role wants both. You ship in both domains.

2. **Custom ISA design in TriCore9.** This is the crown jewel of your CV for this role. Most new grads have never designed an ISA. You have.

3. **Performance optimization across multiple abstraction levels.** Mini-Stockfish (77.2% latency cut), FlipperZillow (batch GPU optimization), Phased Array Radar (DSP efficiency). Chip design is 80% optimization.

4. **Cross-architecture GPU experience.** You've shipped on both CUDA (NVIDIA) and ROCm (AMD). NVIDIA respects engineers who understand their competition's stack.

5. **Rapid learning under pressure.** FlipperZillow (24-hour hackathon, 5+ pre-trained models). Chip design tools take time to learn. Showing you can pick up complex tools fast is valuable.

---

## F) Interview Prep

### Story 1: Custom ISA Design (TriCore9) — Technical Depth

**Situation:** Senior design capstone, Fall 2025. You needed to demonstrate full understanding of CPU architecture. Decided to design a custom 8-bit RISC CPU from scratch instead of tweaking an existing open-source design.

**Task:** Design a complete ISA, implement a 4-stage pipeline, write a SystemVerilog RTL, synthesize to FPGA, and validate with a Python assembler. Goal: show you understand instruction encoding, pipeline hazards, and hardware trade-offs.

**Action:**
- Started by studying MIPS ISA, ARM Thumb, and RISC-V to understand design trade-offs between simplicity and power.
- Designed custom 9-bit ISA with three instruction formats (R-type for arithmetic, J-type for jumps, I-type for branches).
- Implemented 4-stage pipeline (Fetch, Decode, Execute, Writeback) with hazard detection to minimize stalls.
- Built Python assembler that translates mnemonics into machine code, letting you rapidly test the ISA without hand-compiling hex.
- Ran complex test programs (Hamming code error detection) through the pipeline to validate correctness.
- Used ModelSim for simulation, Quartus Prime for synthesis to real FPGA hardware.

**Result:** Working 8-bit CPU that executed complex algorithms correctly. Demonstrated end-to-end understanding of ISA design, pipeline efficiency, and hardware validation.

**Reflection:** This experience showed me that CPU design is about trade-offs. A 4-stage pipeline is faster than 3 stages (fewer stalls) but slower than 5+ stages (more area, higher power). I had to make intentional choices. In interviews, I'd use this to show I understand NVIDIA's design philosophy: efficient instruction-level parallelism, minimal hazard penalty, high throughput per watt.

---

### Story 2: GPU Pipeline Optimization (FlipperZillow) — Inference Performance

**Situation:** 24-hour hackathon, Feb 2026. Building FlipperZillow (AI house tour platform). Goal: process property images through 5+ GPU models in real-time. Challenge: both CUDA (NVIDIA) and ROCm (AMD) compatibility needed.

**Task:** Design a GPU pipeline that chains DepthAnythingV2 (depth estimation) → DFormerV2 (semantic segmentation) → SAM3D (3D object extraction) under real-time latency constraints.

**Action:**
- Started with AMD ROCm on an unfamiliar cloud platform (single GPU, expensive per-minute billing).
- Discovered SAM3D had a breaking dependency on CUDA that didn't compile under ROCm. Instead of debugging forever, pivoted to NVIDIA's cloud with CUDA.
- Optimized pipeline: batched image processing through each model sequentially, minimized GPU-CPU transfers (kept intermediate tensors on VRAM).
- Profiled each model's latency. DepthAnythingV2 was bottleneck. Used mixed precision (FP16) to reduce latency 40% without accuracy loss.
- Parallelized independent stages (while processing batch N through DFormerV2, fetch batch N+1 through DepthAnythingV2).
- Result: 5+ image processing in <30s per property, acceptable for real-time tours.

**Result:** Shipped working end-to-end GPU pipeline with professional 3D tours + AI narration in 24 hours.

**Reflection:** This taught me pragmatism in GPU optimization. You don't always have perfect tools. Sometimes you switch platforms. But you profile first, identify bottlenecks, and optimize surgically. For NVIDIA, this shows I can work within their ecosystem and extract performance from their hardware.

---

### Story 3: Performance Optimization Under Constraints (Mini-Stockfish) — Hardware Awareness

**Situation:** Side project, Jan-Mar 2026. Building Mini-Stockfish chess engine. Goal: competitive play strength with minimal latency. Baseline: 1.1ms per leaf node evaluation. Target: <0.5ms.

**Task:** Optimize hot path (neural network inference + move generation). Limited by single-threaded commodity CPU (no special accelerators). Must maintain code readability.

**Action:**
- Profiled with perf. Identified bottleneck: HalfKP NNUE neural network inference and legal move generation consuming 85% of time.
- Converted Python critical path to Cython (Python-to-C compiler). Gained 3.2x speedup with minimal code changes.
- Hand-wrote C++ move generation loop using bitboard representation. Reduced move generation from 2M ops/sec to 8M ops/sec via parallelizable bit manipulation.
- Implemented incremental NNUE updates using O(1) accumulator rollback instead of full inference per position. Cut inference from 15 flops to 200 flops per position.
- Used Zobrist hashing for transposition tables to avoid redundant evaluations.

**Result:** Achieved 77.2% latency reduction (1.1ms → 0.25ms). Competitive play strength across 316M training examples.

**Reflection:** This shows me that performance is not about raw compute, but about understanding the hardware you're working with. A CPU has cache hierarchies, pipelines, and instruction latency. Chip design is the same concept at a different scale. Every instruction in a pipeline has latency and throughput consequences. You optimize for critical paths, minimize stalls, and reuse cache lines. The principles are identical.

---

### Story 4: Analog-to-Digital Signal Path (HB100 Radar) — Hardware Systems Thinking

**Situation:** E4E research project, Feb-Apr 2026. Building phased array radar for wildlife tracking. Challenge: detect moving objects with sub-degree angular resolution using off-the-shelf HB100 microwave modules.

**Task:** Design analog front-end signal conditioning that maps tiny bipolar IF signals (microvolts) into the ESP32-S3's unipolar ADC (0-3.3V). Then build DSP pipeline to extract position and velocity.

**Action:**
- Analyzed HB100 output: free-running 10.525 GHz Gunn oscillator with huge phase drift (intrinsic to hardware design). Traditional phase-coherent methods would fail.
- Designed MCP6002 dual op-amp cascade: 52x non-inverting + 21x inverting = 1092x total gain across two stages. Carefully selected resistor values to match impedance and minimize noise.
- Implemented virtual ground biasing (1.65V) to shift bipolar signals up to unipolar ADC range without clipping.
- Added multi-stage filtering (5V bypass cap, pre-amp bandwidth limiting) to reject EMI and high-frequency noise.
- Built two DSP pipelines in parallel:
  - MUSIC-based spectral direction-finding (FFT + pseudospectrum)
  - Amplitude monopulse zone classifier (robust to oscillator drift)
- Selected the more stable signal in real-time (Kalman filter fusion).

**Result:** Working multi-target tracking with <5% heading error despite hardware imperfections.

**Reflection:** This taught me that real hardware is messy. NVIDIA chip design deals with process variation, thermal drift, and manufacturability constraints. You have to design systems that work despite imperfections in the underlying hardware. The amplitude monopulse classifier was a pragmatic trade-off when phase coherence broke down. That's how chip design works too.

---

### Story 5: Team Leadership & Architecture (PatentIQ) — Systems Thinking & Communication

**Situation:** Product Manager Accelerator, Jan-Mar 2026. Leading PatentIQ as architect + primary developer on a 14-member team (PMs, designers, backend engineers, data scientists).

**Task:** Design patent search MVP that combines semantic search (vector embeddings) with traditional keyword ranking. Needed to ship in 6 weeks while coordinating dependencies across team.

**Action:**
- Proposed PostgreSQL + pgvector for embedding storage instead of separate vector DB (MongoDB, Weaviate, Pinecone). Reasoning: reduces operational complexity, leverages open-source pgvector, faster iteration for MVP.
- Documented architecture: FastAPI backend, Next.js frontend, Auth0 for identity, Supabase for managed Postgres. Showed reasoning for each choice.
- Asked backend engineer and data scientist to independently validate the pgvector choice (wanted buy-in, not dictatorship). They agreed within days after benchmarking.
- Built recursive SQL query builder with Zod-validated JSON filters to support complex search refinement.
- Implemented LRU caching to reduce DB latency. Coordinated with frontend team to batch API requests efficiently.
- Tracked progress in ClickUp weekly. Matched scope to skill (data scientist owned ML pipeline end-to-end, backend engineer owned server integration, frontend developed UI).

**Result:** Shipped MVP in 6 weeks with clear ownership and minimal rework. Patent search latency improved from 15s to <2s via semantic search.

**Reflection:** This taught me that architecture decisions are about trade-offs and communication. You make choices, justify them with data, ask others to validate, and listen to feedback. In chip design, the same pattern applies: instruction encoding choices, pipeline depth, cache hierarchy. You propose, validate with simulation, iterate. Good architects can communicate their reasoning clearly.

---

## Final Assessment

**Score: 4.6/5 — Excellent Fit. Strong Recommend to Apply.**

This is a top-tier match for your profile. NVIDIA is looking for new grads who can design custom ISAs and understand AI acceleration. You bring both skills at a depth most new grads don't have.

**Why you should apply:**
1. Your TriCore9 project directly matches what they want to see in chip design new grads.
2. You understand performance optimization across hardware and software—critical for AI accelerators.
3. You've shipped on both NVIDIA and AMD architectures, which NVIDIA respects.
4. The role is explicitly new-grad, so no experience gap concerns.

**What to expect in interviews:**
- Deep technical questions on TriCore9 (why 4 stages? how would you handle longer pipelines? what happens when hazards collide?).
- Questions on Mini-Stockfish optimization (why Cython? when do you hand-optimize vs. trust the compiler?).
- Behavioral questions on learning and adaptability (FlipperZillow hackathon is perfect here).
- NVIDIA culture questions (they value pragmatism, shipping, and continuous learning).

**Compensation negotiation:** Push for $160K+ base. You have a unique chip design background for a new grad. Your TriCore9 project justifies it.

**Timeline:** This job post may be from March/April 2026. Check if they're still actively hiring. If so, apply immediately.

