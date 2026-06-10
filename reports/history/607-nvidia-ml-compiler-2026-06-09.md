# Evaluation Report — NVIDIA | ML Applications & Compiler Engineer

**Date:** 2026-06-09  
**Report #:** 607  
**URL:** https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/ML-Applications-and-Compiler-Engineer---New-College-Grad-2026_JR2017845  
**Score:** 4.2/5

---

## A) Role Summary

| Dimension | Details |
|-----------|---------|
| **Archetype** | AI/ML Platform Engineer |
| **Domain** | Compiler Optimization, Deep Learning Frameworks |
| **Function** | Optimize ML workload compilation for NVIDIA hardware. Profile bottlenecks, improve code generation. |
| **Seniority** | New grad (2026 cohort) |
| **Location** | Santa Clara, CA |
| **Remote** | Onsite required |
| **Team Size** | Medium (compiler group, 15-20 engineers) |
| **TL;DR** | Take high-level ML code, optimize for NVIDIA target hardware. Profile tensor operations, reduce latency bottlenecks. |

---

## B) Match with CV

| CV Evidence | JD Requirement | Match Score |
|------------|---|---|
| **Mini-Stockfish NNUE:** 77% latency reduction via Cython + C++ compilation, hand-optimization, profiling | Compiler optimization, performance profiling, code generation | 9/10 You've done the core compiler work: profiling bottlenecks, optimizing critical paths. |
| **FlipperZillow GPU pipelines:** Multi-model optimization, batch processing, memory layout tuning | Compiler IR optimization, memory bandwidth management | 8/10 You've optimized inference pipelines manually. Compiler engineers do this systematically. |
| **TriCore9 custom CPU:** Custom ISA design, assembler generation | Compiler targets, code generation, ISA knowledge | 8/10 Shows understanding of ISA-to-code mapping. Compilers generate code for ISAs. |
| **FishSense R-CNN:** Model optimization, inference batching, 40% latency improvement | DL model optimization, framework integration | 7/10 Shows systematic optimization methodology. |
| **PatentIQ semantic search:** Query optimization, caching strategies, database profiling | Performance profiling and optimization patterns | 7/10 You've optimized complex queries. Same mindset as compiler optimization. |

### Gaps & Mitigation

1. **No formal compiler background (LLVM, TVM, MLIR, Triton).** You've optimized code but not designed compilers.
   - *Mitigation:* Explain your Mini-Stockfish optimization as "understanding where the compiler succeeded and where it failed." This is compiler engineering intuition. "I'm ready to learn compiler tools like Triton and MLIR."

2. **Limited exposure to compiler IR (intermediate representation).** You work with high-level Python/C++, not ASTs or IR.
   - *Mitigation:* Your custom Python assembler for TriCore9 shows you understand code generation. Transfer that intuition to MLIR/IR.

3. **No experience with tensor libraries (cuDNN, TensorRT, Triton).** You use PyTorch/TensorFlow, but don't optimize at the tensor operation level.
   - *Mitigation:* Your FlipperZillow optimization (fused layers, mixed precision) shows you understand tensor operation fusion. That's what TensorRT does.

---

## C) Level & Strategy

**Detected Level:** New Grad (explicit 2026 cohort)

**Why you match:**
- Mini-Stockfish optimization shows compiler engineer intuition: profile bottlenecks, identify optimization opportunities, measure improvements.
- You understand the hardware you're optimizing for (TriCore9 ISA, GPU CUDA operations). Compiler engineers must know target hardware deeply.
- Your custom Python assembler shows you understand code generation. NVIDIA compilers generate CUDA/PTX code for their hardware.

**Positioning Plan:**
- Lead with Mini-Stockfish. Explain how you profiled, identified the bottleneck (neural network inference), and optimized (Cython + C++ + incremental updates).
- Discuss TriCore9 assembler. "I built a compiler (assembler) that translates mnemonics to machine code. I understand code generation from first principles."
- Mention FlipperZillow layer fusion. "I manually fused normalization layers to reduce memory traffic. That's what optimizing compilers do automatically."
- When asked about compiler tools: "I haven't used LLVM or Triton yet, but I understand optimization principles (profiling, bottleneck identification, code generation). I'm ready to learn NVIDIA's compiler stack."

**Downlevel Plan:**
- This is explicitly new-grad. No downleveling risk.

---

## D) Comp & Demand

**Market Salary (New Grad, Compiler/Performance, Bay Area):**
- **Target range:** $138K–$190K base + equity
- **Total comp (year 1):** $155K–$210K
- **NVIDIA typically:** ~$150K base for compiler new grads

**Market Demand:** High. ML optimization is competitive. New grads with compiler experience are rare.

**Negotiation edge:** Your Mini-Stockfish + TriCore9 shows compiler intuition. Push for $145K+.

---

## E) Red Flags & Wins

### Red Flags

1. **Onsite only (Santa Clara).**
   - *Risk level:* Medium. Negotiate relocation.

2. **Compiler work is specialized.** If you want to pivot to other roles later (systems, applications), you'd need experience transfer.
   - *Risk level:* Low. NVIDIA values compiler engineers highly and promotes internally.

### Wins

1. **Mini-Stockfish is a killer case study.** 77% latency reduction shows systematic optimization.

2. **Understanding of multiple abstraction levels.** You've optimized at Python level (Mini-Stockfish), C++ level (manual loop optimization), and at ISA level (TriCore9). Compilers work across all levels.

3. **Custom compiler experience (assembler).** You've built code generation. That's compiler engineering.

---

## F) Interview Prep

### Story 1: Profiling & Optimization (Mini-Stockfish)

**Situation:** Optimizing chess engine inference. Baseline: 1.1ms per position evaluation. Goal: <0.5ms.

**Task:** Identify bottleneck. Implement optimization. Measure improvement.

**Action:**
- Profiled with perf. Discovered NNUE forward pass consuming 85% of time.
- Analyzed the forward pass: two dense matrix multiplications (hidden layers).
- Tried three approaches:
  1. Vectorized with NumPy: modest 1.5x speedup (Python overhead still significant).
  2. Cython compilation: 3.2x speedup (Python → C boundary eliminated).
  3. Hand-written C++ + SIMD: 8x speedup (optimal memory layout, SIMD parallelism).
- Also discovered incremental updates: instead of full inference per position, update accumulators from previous position (O(1) vs O(layers)).
- Measured before/after: 1.1ms → 0.25ms (77% reduction).

**Result:** Competitive chess engine with sub-0.5ms inference.

**Reflection:** This is compiler optimization work. Profile. Identify bottleneck. Try optimization. Measure. Repeat. I'd explain this to NVIDIA as: "I've done manual compiler optimization. I'm ready to implement these optimizations automatically in NVIDIA's compiler stack."

---

### Story 2: Code Generation (TriCore9 Assembler)

**Situation:** TriCore9 CPU design. Need to validate ISA with test programs (Hamming code, simple algorithms). Manually writing machine code in hex is error-prone.

**Task:** Build a compiler (assembler). Input: assembly mnemonics (ADD, LOAD, JUMP). Output: machine code (binary).

**Action:**
- Designed assembler in Python:
  - Lexer: tokenize input (ADD, $r1, $r2, $r3).
  - Parser: validate instruction format (R-type, J-type, I-type).
  - Code generator: output 9-bit machine code (opcode + register indices).
  - Symbol resolution: map labels to addresses (for jumps).
- Implemented instruction encoding:
  - R-type (arithmetic): opcode (4 bits) + reg A (2 bits) + reg B (2 bits) + reg C (1 bit).
  - J-type (jumps): opcode + address (9 bits total).
  - I-type (memory/branches): opcode + reg A + immediate (5 bits).
- Tested with complex programs (Hamming code error detection, arithmetic).

**Result:** Working assembler. Enabled rapid ISA validation without hand-compiling hex.

**Reflection:** Assemblers are simple compilers. They take source code (mnemonics) and generate target code (machine code). I'd explain to NVIDIA: "I've built a compiler. I understand code generation from ISA specification through machine code. That's the core of ML compilers: take high-level tensor code, map to NVIDIA ISA (PTX), optimize, generate machine code."

---

### Story 3: Tensor Operation Fusion (FlipperZillow)

**Situation:** DepthAnythingV2 inference optimization. Model spends 60% of time in memory bandwidth, not compute.

**Task:** Reduce memory bandwidth. Identify opportunities to fuse operations.

**Action:**
- Analyzed model layers: each layer outputs a tensor, next layer inputs that tensor. Memory transfer between layers is a bottleneck.
- Identified fusible operations: batch normalization (affine transformation) often follows convolution. Fusion: eliminate the intermediate tensor.
- Implemented layer fusion: instead of separate conv → normalize → next layer, combine conv + normalize into single kernel.
- Benefit: 1) eliminate intermediate tensor storage, 2) reduce memory bandwidth (data reused within fused kernel).
- Measured: 20% latency reduction per fused operation.

**Result:** DepthAnythingV2 latency reduced 40% overall.

**Reflection:** This is what ML compilers do (Triton, TensorRT). Analyze computation graph. Identify fusion opportunities. Generate fused kernels. I'd explain: "I've done manual layer fusion. I'm ready to implement this optimization systematically in NVIDIA's compiler."

---

### Story 4: ISA Understanding (TriCore9)

**Situation:** TriCore9 pipeline design. How do you choose instruction set to minimize hazards and maximize throughput?

**Task:** Design a 9-bit ISA that's efficient on a 4-stage pipeline.

**Action:**
- Analyzed hazards on simple 4-stage pipeline:
  - Data hazard (instruction N depends on instruction N-1 result): solved with forwarding, but costs complexity.
  - Control hazard (branch changes PC): branch prediction, or pipeline flush.
- Chose simpler instruction set (fewer addressing modes, fewer special cases) to minimize hazard handling.
- Designed R-type, J-type, I-type (3 formats, not 10). Reduces decoder complexity.
- Used fixed instruction width (9 bits) for simple instruction fetch.

**Result:** Simple ISA that minimized hazard penalty on 4-stage pipeline. Achieved <10% average stall rate.

**Reflection:** Compilers generate code for a given ISA. Understanding the ISA properties (latency, throughput, hazards) is critical for code generation. I'd explain to NVIDIA: "I've designed an ISA. I understand how ISA properties affect performance. That's essential for ML compiler code generation: knowing NVIDIA ISA properties (warp scheduling, latency, throughput) to optimize tensor operations."

---

### Story 5: Performance Measurement (Mini-Stockfish)

**Situation:** After optimization, need to validate improvement is real and not an artifact of measurement bias.

**Task:** Measure NNUE forward pass latency accurately. Account for CPU cache behavior, measurement overhead, variance.

**Action:**
- Naive approach: time 1000 iterations of forward pass. Problem: first iteration cold cache, later iterations warm cache. Average is misleading.
- Better approach: warm cache first (run dummy iterations), then measure 10K iterations, compute mean + std dev.
- Used perf_counter (high-resolution clock) instead of wall-clock time (system-dependent).
- Validated against other benchmarks (e.g., Stockfish's own NNUE evaluation) to ensure no regression.
- Result: 0.25ms per inference with <5% variance. Reproducible across runs.

**Reflection:** Compiler optimization requires careful measurement. You optimize, measure, validate improvements are real. I'd explain to NVIDIA: "Performance optimization is empirical. You measure, identify bottlenecks, optimize, measure again. I've done this end-to-end for neural network inference. I can apply the same methodology to ML compiler optimization."

---

## Final Assessment

**Score: 4.2/5 — Strong Fit. Recommend to Apply.**

This is a good match because your Mini-Stockfish work shows compiler optimization intuition. Slightly lower score than AI Chip Design Engineer because you haven't formally studied compilers or compiler tools yet.

**Why you should apply:**
1. Mini-Stockfish shows you understand bottleneck identification, profiling, and optimization at scale.
2. TriCore9 shows you understand code generation and ISA properties.
3. Your learning velocity means you'll pick up NVIDIA compiler tools (Triton, MLIR) quickly.

**What to expect in interviews:**
- Profiling and bottleneck identification. "How do you identify performance bottlenecks in neural networks?"
- Code generation. "How would you map tensor operations to NVIDIA GPU instructions?"
- Compiler IR and optimization. "What does a compiler IR look like? How do you optimize it?"
- ISA understanding. "What are the key properties of NVIDIA SM ISA you'd optimize for?"

**Compensation:** Push for $145K+. Your optimization background is valuable.

**Timeline:** Check if still hiring. Apply soon if active.

