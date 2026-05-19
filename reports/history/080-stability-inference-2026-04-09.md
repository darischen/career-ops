# Stability AI — Generative AI Inference Engineer

**URL:** https://stability.ai/careers?gh_jid=4712826101

**Score (A-F blocks):**
- A (Match with CV): 3.0/5
- B (North Star): 3.0/5
- C (Compensation): 3.5/5
- D (Culture): 3.5/5
- E (Red Flags): 3.0/5

**Global Score: 3.1/5 — Evaluated**

---

## Role Summary

Stability AI is hiring for a Generative AI Inference Engineer role focused on optimizing and deploying large language and generative models at scale. The position targets experience with low-level inference optimization, CUDA programming, and distributed systems. This is a production-focused role emphasizing performance, cost efficiency, and system reliability rather than research.

---

## A: Match with CV

**Fit: 3.0/5** — You have some relevant pieces but gaps in production inference work.

**Strengths:**
- Mini-Stockfish NNUE: You trained a 316M-example neural network and optimized inference latency by 77.2% using Cython and C++ code, reducing eval time from 1.1ms to 0.25ms. This shows understanding of inference optimization and performance profiling.
- FlipperZillow: You integrated multiple pre-trained models (DepthAnythingV2, DFormerV2, SAM3D) into a GPU pipeline using ROCm and CUDA. You debugged GPU compatibility issues and optimized throughput.
- FishSense: R-CNN training pipeline (Detectron2) with standardized inference setup for repeatability.

**Gaps:**
- No production inference serving experience (vLLM, TensorRT, TorchServe, Triton, etc.)
- Limited CUDA kernel development (you used existing libraries, didn't write custom kernels)
- No distributed inference across multiple GPUs/nodes
- No experience with model quantization, distillation, or other compression techniques
- The Stability AI role likely requires 3+ years of this specific domain

---

## B: North Star (Archetype Fit)

**Fit: 3.0/5** — You're a full-stack engineer interested in ML, not a specialized ML systems engineer.

**Mismatch:**
- Your superpower is *breadth across abstraction layers*, not depth in one. Inference optimization requires sustained focus on one domain.
- Your projects show opportunistic learning (ROCm in 48 hours) but not the 2-3 year specialization inference systems demand.
- Stability AI wants someone who's spent years on inference; you've spent weeks on inference as part of broader projects.

**Why it matters:** This role is for a specialist. You're a generalist. Different categories of ambition.

---

## C: Compensation

**Fit: 3.5/5** — Market rate is reasonable but uncertain for new grad.

**Estimate:** Stability AI (post-Series C, ~$1B valuation) likely offers:
- Base: $160K–$200K (inference engineer is mid-tier role)
- Equity: 0.05–0.15% vest over 4 years
- Total comp: ~$200K–$250K annualized

**Reality check:** You're a new grad. Their posting likely targets 3+ years experience. They may offer you **$120K–$150K** base as an entry-level option, or pass entirely.

---

## D: Culture

**Fit: 3.5/5** — Good company, but research-oriented culture.

**Strengths:**
- Stability AI values rapid iteration (open-source Stable Diffusion releases)
- You can work on customer-facing optimization problems (real impact)
- Hybrid/remote-friendly for core teams
- Large enough to have tooling/infrastructure investment (Kubernetes, GPUs, etc.)

**Concerns:**
- Academic research culture; papers matter more than shipping at many research labs
- Fast-moving org; you'd need to ramp quickly without hand-holding
- Inference isn't the "sexy" part of generative AI (research bias favors model innovation over serving)

---

## E: Red Flags

**Concerns: 3.0/5**

1. **Seniority Mismatch:** Role requires 3+ years; you have zero. They likely won't consider you.
2. **Specialization vs. Generalization:** You're broad; they want narrow. Your CV shows "learned 5 techs in 4 months", not "mastered one for 3 years."
3. **No Serving Experience:** You've optimized inference in isolation (Mini-Stockfish). Production serving involves: model versioning, A/B testing, canary deployments, fallback strategies, cost per token, latency SLAs, etc. You haven't done any of this.
4. **Geography:** Based in San Diego, willing to relocate. Stability is London-based with SF office. Timezone/culture shift.

---

## Global Score & Recommendation

**3.1/5 — Evaluated: Pass (not a good fit right now)**

**Why you should NOT apply:**
- You're overqualified in breadth but underqualified in depth. They want depth.
- Your 3 years of generalist experience doesn't match their 3 years of inference specialization.
- They'll likely screen you out on the "required 3+ years" bar.

**If you really wanted to apply:**
- Lead with Mini-Stockfish performance optimization (77.2% latency reduction)
- Emphasize GPU debugging skills (ROCm/CUDA)
- Pitch learning velocity: "I can specialize quickly if given the context"
- Acknowledge the gap: "I'm more generalist than you typically want, but I've proven I can go deep fast"

---

## Interview Prep: STAR Stories

**Story 1: Inference Optimization at Scale (Mini-Stockfish)**

- **Situation:** Building a chess engine (Mini-Stockfish) with a NNUE neural network trained on 316M positions, I needed sub-millisecond inference on commodity CPU hardware for real-time game play.
- **Task:** Optimize the neural network evaluation pipeline; initial performance was 1.1ms per evaluation, too slow for competitive play.
- **Action:**
  - Profiled the bottleneck: neural network forward pass was the critical path
  - Rewrote hot loops in Cython and C++ for SIMD vectorization
  - Implemented Zobrist hashing to cache board positions
  - Used TorchScript compilation to eliminate Python interpreter overhead
  - Benchmarked each optimization independently
- **Result:** Reduced eval latency from 1.1ms to 0.25ms (77.2% improvement), enabling real-time 1000+ node search trees.
- **Why it matters:** Shows you can profile, identify bottlenecks, and optimize systems end-to-end. You understand the trade-off between algorithmic optimization and low-level code optimization.

**Story 2: Debugging GPU Incompatibility Under Pressure (FlipperZillow)**

- **Situation:** 24-hour hackathon to build 3D house tour platform. GPU pipeline needed DepthAnythingV2 (depth estimation) → DFormerV2 (semantic analysis) → SAM3D (3D object extraction). Started on AMD ROCm cloud.
- **Task:** SAM3D had a breaking dependency conflict with AMD's ROCm stack. Had one GPU VM at a time (expensive context switching).
- **Action:**
  - Spent 2 hours debugging ROCm compatibility (kernel version mismatches, ROCR runtime issues)
  - Realized: migration cost < debugging cost. Switched to Nvidia cloud with CUDA
  - Re-tested DepthAnythingV2 and DFormerV2 on Nvidia (both worked out of box)
  - SAM3D worked on CUDA. Dropped SAM3D from the final pipeline to reduce complexity cost
  - Shipped working depth + semantic inference pipeline
- **Result:** Working 3D reconstruction pipeline shipped on time, processed Realtor.com images in <5s end-to-end.
- **Why it matters:** Shows pragmatism and GPU systems knowledge. You know when to fight and when to pivot. You understand GPU runtime stacks and can debug toolchain issues.


