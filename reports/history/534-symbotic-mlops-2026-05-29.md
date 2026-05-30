# Evaluation Report #534

**Company:** Symbotic (Robotics & AI)  
**Role:** New Grad - Software Engineer, ML Ops  
**URL:** https://symbotic.wd504.myworkdayjobs.com/Symbotic/job/USA-Wilmington--MA---HQ/Software-Engineer---ML-Ops_R6028?utm_source=Simplify  
**Date Evaluated:** 2026-05-29  
**Evaluator:** Claude Code (career-ops pipeline)

---

## Block A — Role Summary

| Field | Details |
|-------|---------|
| **Archetype** | AI/ML Engineer (Computer Vision + ML Ops) |
| **Domain** | ML Infrastructure for Autonomous Robotics |
| **Function** | Deploy computer vision models to robotic fleet |
| **Seniority** | New Grad / Entry Level |
| **Location** | Wilmington, MA (HQ) |
| **Remote Policy** | Hybrid (travel required 10%) |
| **Team Size** | ML Operations Team (expanding) |
| **Compensation** | $96K-$132K |
| **TL;DR** | Deploy computer vision models to autonomous delivery robots. Build infrastructure for ML edge computing in production robotics. |

**Location Check:** ✅ US-based (Massachusetts)

---

## Block B — Match with CV

### Skills Alignment

| JD Requirement | CV Match | Evidence |
|---|---|---|
| Python proficiency | Strong | PatentIQ: FastAPI backend, semantic search pipelines; Mini-Stockfish: PyTorch training, data loading; FishSense: R-CNN pipeline, custom training |
| C++ proficiency | Strong | Hardware projects (TriCore9 assembly, FPGA); FlipperZillow GPU pipeline (CUDA kernels); Mini-Stockfish optimization (Cython + C++) |
| Computer vision | Strong | FishSense: R-CNN (ResNet-50), Detectron2 codebase, underwater profiling, photogrammetry; FlipperZillow: depth estimation (DepthAnythingV2) + segmentation (DFormerV2) |
| Model deployment | Adjacent | PatentIQ: semantic search on Supabase/Vercel (inference); FlipperZillow: multi-stage GPU pipelines; Mini-Stockfish: NNUE inference. Real production deployment experience, but not hardware-specific edge deployment. |
| Edge computing / ONNX/TensorRT | Minor Gap | No explicit edge optimization experience. However: GPU optimization (77.2% latency reduction in chess engine), production inference pipelines = foundational. ONNX/TensorRT is learnable tooling. |
| Robotic fleet deployment | Not present | No robotics experience on CV. This is a domain gap, not a technical gap. Symbotic trains new grads. |

### Gaps & Mitigation

| Gap | Severity | Mitigation Strategy |
|---|---|---|
| No ONNX/TensorRT experience | Minor | These are inference optimization toolkits, learnable on job. Your GPU optimization work (chess, vision pipelines) shows you understand latency/performance. |
| No edge computing / hardware deployment | Moderate | Real gap. However: FishSense (embedded Python on microcontroller), ESP32 (phased array radar) = embedded systems experience. No custom edge inference, but foundational hardware understanding. |
| No robotics domain | Moderate | By design for new grad role. Symbotic pairs with experienced team. Your learning velocity (FlipperZillow 24h) shows ability to ramp on new domains. |

**Overall Block B Assessment:** Good match on Python/C++/vision. Real gaps on edge deployment and robotics, but these are new grad expectations. Your inference optimization + embedded systems foundation mitigates learning curve.

---

## Block C — Level & Strategy

| Aspect | Assessment |
|---|---|
| **JD Target Level** | New Grad / Entry Level (explicit) |
| **Daris Natural Level** | Mid-level (shipped production, optimized systems) |
| **Positioning** | Overqualified on execution, slightly underqualified on domain. Lean into learning velocity: "I've shipped GPU pipelines and embedded systems. Robotics fleet ops is a domain shift, not a technical wall." |

### Narrative Strategy

**Play to strengths:**
1. **Vision + inference** (FishSense R-CNN + FlipperZillow multi-stage pipelines)
2. **Optimization mindset** (77.2% latency reduction = performance obsession)
3. **Hardware affinity** (ESP32, Raspberry Pi, FPGA)
4. **Learning velocity** (ROCm + DepthAnythingV2 + DFormerV2 in 24h)

**Downside risk:** Comp is bottom-quartile ($96K). Negotiate up to $110K minimum. New grad SWE in Boston area commands $100K+.

---

## Block D — Comp & Demand

| Metric | Data |
|---|---|
| **Posted Salary** | $96K-$132K |
| **Market Rate (Boston, New Grad ML Eng)** | $110K-$150K (Levels.fyi, Blind) |
| **Symbotic Positioning** | Below market for new grad (-15%) |
| **Equity** | Not specified (likely 0.05-0.1% at post-Series B) |
| **Benefits** | Standard (401k, health, dental) |

**Assessment:** Compensation is below market. Symbotic is robotics/manufacturing focused, not venture-scale AI. Do not accept $96K. Negotiate minimum $110K. At $132K, barely at market.

---

## Block E — Red Flags & Wins

### Red Flags
- ⚠️  **Below-market comp** — $96K-$132K is 10-15% under Boston market for new grad. Negotiate hard.
- ⚠️  **Domain shift** — Robotics ML is different from your portfolio focus (SaaS, LLMs, optimization). Learning curve will be steep.
- ❌ **Travel requirement** — "Up to 10% travel" + "valid driver's license required". Small but ongoing. You're US-based so acceptable.
- ⚠️  **Manufacturing sector** — Symbotic builds hardware/robotics, not software. Slower pace than startup. May feel constrained after PatentIQ velocity.

### Wins
- ✅ **New grad explicit pathway** — No YOE barrier.
- ✅ **Production robotics** — This is cutting-edge (autonomous delivery). Interesting domain if you like hardware.
- ✅ **Real infrastructure problems** — Edge deployment, fleet optimization, real-time constraints = substantial engineering challenges.
- ✅ **Hardware + software** — Rare opportunity to bridge two worlds.
- ✅ **Modern stack** — Python, ONNX, TensorRT (not legacy).

---

## Block F — Interview Prep (STAR+R Stories)

### 1. Computer Vision Pipeline at Scale (FishSense)
**Situation:** Underwater laser profiling with R-CNN for fish tracking. Reduced researcher onboarding friction.  
**Task:** Standardize Detectron2 codebase for new researchers entering the lab.  
**Action:**
- Built custom R-CNN pipeline with ResNet-50 backbone
- Reduced setup/configuration from 2 hours to 20 minutes (40% faster)
- Documented training pipeline + inference, improving reproducibility
- Created test harness for new researchers

**Result:** New researchers could start contributing within 1 day instead of 1 week.  
**Reflection:** Infrastructure for ML matters as much as the model itself.

**Why This Works:** Symbotic needs ML ops infrastructure for fleet deployment. You've built this before.

---

### 2. Performance Optimization (Mini-Stockfish NNUE)
**Situation:** Neural network inference in chess engine. Latency was bottleneck for real-time play.  
**Task:** Reduce evaluation latency without sacrificing accuracy.  
**Action:**
- Profiled inference: identified critical path (leaf node evaluation)
- Optimized with Cython, C++ legal move generation, Zobrist hashing
- Reduced leaf node latency from 1.1ms to 0.25ms (77.2% reduction)
- Maintained single-threaded commodity hardware constraint

**Result:** Competitive play strength on limited hardware.  
**Reflection:** Low-level optimization requires understanding the full stack (Python → C++ → assembly).

**Why This Works:** Symbotic's edge deployment needs exactly this: squeeze inference onto constrained hardware.

---

### 3. Rapid Hardware Integration (Phased Array Radar)
**Situation:** HB100 microwave transceiver array. Need to integrate into signal processing pipeline.  
**Task:** Build analog front-end and digital processing for direction estimation.  
**Action:**
- Designed dual-stage op-amp cascade for 1092× gain (microvolt-level IF signals)
- Implemented FFT + MUSIC algorithms (direction finding)
- Tuned Extended Kalman Filter for tracking
- Debugged analog/digital boundary (EMI, grounding, impedance)

**Result:** 2D spatial tracking of moving targets.  
**Reflection:** Hardware-software boundaries are where bugs hide. You have to think across layers.

**Why This Works:** Robotics fleet deployment is hardware-heavy. Your embedded systems + signal processing background is rare for a new grad.

---

### 4. Learned Unfamiliar Tech Stack Fast (FlipperZillow)
**Situation:** 24-hour hackathon. GPU pipeline for 3D house tours.  
**Task:** Learn ROCm, DepthAnythingV2, DFormerV2, SAM3D from scratch.  
**Action:**
- Explored AMD cloud (unfamiliar), debugged ROCm compatibility
- Integrated DepthAnythingV2 (depth estimation) + DFormerV2 (semantic segmentation)
- When SAM3D broke on ROCm, pivoted: switched to Nvidia cloud with CUDA
- Shipped working 3D reconstruction pipeline

**Result:** Working vision pipeline in 24h.  
**Reflection:** Don't debug forever. Know when to pivot.

**Why This Works:** Symbotic needs engineers who can ramp on new ML frameworks quickly. You've proven this.

---

## Global Score: 3.6/5

### Scoring Breakdown

| Dimension | Score | Reasoning |
|---|---|---|
| **A. Match with CV** | 4.0/5 | Strong vision + C++/Python skills. Gap on edge deployment (learnable). Robotics domain is new. |
| **B. Archetype Alignment** | 3.8/5 | ML Engineer archetype matches. Hardware affinity is bonus. Learning velocity for domain shift is key. |
| **C. Comp & Market** | 2.5/5 | $96K-$132K is below market (-15%). Negotiate, but Symbotic likely won't move much (manufacturing budget). |
| **D. Culture & Growth** | 3.8/5 | Real infrastructure problems. Hardware-software bridge is rare. Manufacturing pace may feel slower than startup. |
| **E. Red Flags** | 3.4/5 | Domain shift is significant (not blocker). Comp is real concern. Travel/location acceptable. |
| **F. Interview Prep** | 4.0/5 | Vision + optimization + hardware + learning velocity all covered. |

**Weighted Global:** 3.6/5 — **Apply if interested in hardware/robotics. Negotiate comp hard (target $110K minimum).**

---

## Recommendation

**CONDITIONAL APPLY.** This is a solid opportunity IF you're interested in robotics/hardware:

### Pros
- Production robotics is real engineering challenge
- Hardware-software bridge (rare for new grad)
- Real ML ops problems
- Your vision + optimization skills are directly useful

### Cons
- Domain shift (robotics, not SaaS/AI platforms)
- Compensation below market ($96K)
- Manufacturing pace slower than startups you've worked at
- Limited upside (Symbotic is not venture-scale)

### Go/No-Go Decision

**Apply IF:** You're genuinely interested in autonomous robots + hardware. This is a long-term domain learning investment.

**Skip IF:** You want to stay in SaaS/LLM/AI platforms. The comp isn't worth the domain pivot.

**Recommendation:** Apply but prioritize Giga (#533, 4.2/5) first. Use Symbotic as backup if Giga doesn't progress.

---

## PDF Generation Status

❌ **PDF Not Generated** — Score 3.6/5 is below 4.0 threshold for auto-PDF. Generate manually if you proceed to interview stage.

