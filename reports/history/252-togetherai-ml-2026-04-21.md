# Evaluation Report 252
**Company:** Together AI  
**Role:** Machine Learning Engineer  
**Location:** San Francisco  
**URL:** https://job-boards.greenhouse.io/togetherai/jobs/4626694007  
**Date Evaluated:** 2026-04-21  
**Score:** 2.8/5

---

## Quick Summary

Strong AI mission. Together AI is building LLM inference infrastructure (vLLM, SGLang, cost-optimized). Your FlipperZillow (multi-GPU pipelines) + RedShift (LLM safety evals) + Mini-Stockfish (neural network inference) are **directly relevant**. Comp is solid ($160-220k base). **BUT 5+ years requirement disqualifies you as new grad.** They're hiring experienced ML engineers who've shipped production inference systems. You have the archetype fit + technical depth, but missing the years. This is a "reach but worth a try if you reframe" offer.

---

## Scoring Breakdown

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Match with CV** | 4.0/5 | **Excellent archetype alignment.** FlipperZillow: multi-GPU pipeline design (DepthAnythingV2, DFormerV2, SAM3D) + ROCm optimization. RedShift: LLM evaluation + adversarial testing + batch processing. Mini-Stockfish: NNUE neural network inference optimization (77.2% latency reduction). These are inference systems at scale. |
| **North Star Alignment** | 4.2/5 | **Direct hit:** AI/ML Engineer archetype. You want end-to-end shipping + rapid learning. Together AI = LLM inference systems + research-backed. Perfect domain for your abstraction mastery. |
| **Comp & Benefits** | 4.5/5 | **Excellent:** $160-220k base (midpoint ~$190k) is strong for new grad / junior. Equity in Series C+ startup (real value). Health insurance explicit. SF CoL is high (~$180k base needed for parity with $90k midwest), but you're near San Diego anyway. |
| **Cultural Signals** | 3.8/5 | Together AI = open-source, research-backed (FlashAttention, RedPajama), cost-focused hardware+software co-design. Learning culture implicit. On-call rotation standard for ML infra. Fast iteration likely. Team is legit but intense. |
| **Red Flags** | -1.5 | **5+ years requirement is a screen.** You're new grad. BUT this is an ML role (not backend), so hiring bar might be different — they may value research output + demo projects over years. |
| **Global Score** | 2.8/5 | **Worth a careful application** if you can frame it. Lower experience requirement ceiling than backend role. Use projects (FlipperZillow, RedShift) to show you've built what they're hiring for. |

---

## Detailed Analysis

### Why This Role Fits You

**Project Alignment:**

1. **FlipperZillow = Exactly What They Build**
   - You designed multi-GPU pipeline: DepthAnythingV2 (depth estimation) → DFormerV2 (semantic segmentation) → SAM3D (3D reconstruction)
   - Inference optimization: Handled AMD ROCm compatibility (you know the pain of GPU frameworks)
   - They build vLLM, SGLang, TensorRT — inference engines optimized for cost + speed
   - **Your story:** "I shipped a 3-model inference pipeline under 24hr deadline, navigating GPU framework incompatibilities and choosing pragmatic trade-offs over perfection."

2. **RedShift = LLM Inference + Safety**
   - You built: multi-agent evaluation framework, batch processing, 7 model architectures tested
   - They need: engineers who understand how LLM inference actually works at scale
   - **Your story:** "I implemented batch evaluation across multiple LLMs, scaling adversarial tests from single-prompt to 67% coverage improvement via parallel processing."

3. **Mini-Stockfish = Inference Optimization**
   - 77.2% latency reduction (1.1ms → 0.25ms) via Cython + C++ profiling
   - NNUE neural network trained on 316M examples, optimized for real-time inference
   - They optimize inference latency for cost. This is your demo of that thinking.

**Language Fit:**
- They want Python, Go, Rust, C/C++
- You have: Python (primary), Go (tools), C++ (FlipperZillow SAM3D pipeline)
- Missing: Rust (fine, not hard to pick up)

### Experience Gap (Less Severe Than Backend Role)

**What You Have:**
- Multi-GPU pipeline design + orchestration
- Inference optimization (latency, throughput, memory)
- Batch processing at scale (316M examples, 7 models)
- Production shipping (FlipperZillow shipped, RedShift evaluated)
- Rapid domain switching (learned ROCm + 5 GPU frameworks in 24 hours)

**What You Don't Have:**
- 5 years of production ML systems experience (you're 3-4 months into PatentIQ)
- Kubernetes ML workload orchestration (you've deployed, not orchestrated clusters)
- MLOps infrastructure (no Kubeflow, no model serving at scale)
- A/B testing ML models in production (no comparison experiments at >1M users)

**Mitigation:** ML hiring is different from backend. Hiring managers often prioritize **research output + demo quality** over years. Your FlipperZillow video/demo is worth more than 2 years of resume-padding.

### Compensation

**Strong signal:** $160-220k explicitly listed. This is NOT "we'll decide later." 

- New grad baseline: $100-130k tech industry
- Senior ML engineer (5 yrs): $200-300k + significant equity
- **Their range suggests:** They're targeting mid-level ($150-180k) but flexible on junior ($160k) if candidate has strong demo
- **Your position:** Apply as junior ML engineer, negotiate $160-170k base (they budgeted for it)

SF CoL is high, but you're San Diego-based → $160k in SF ≈ $110k in San Diego real purchasing power. Still strong offer.

### Culture

Together AI = shipping-focused, open-source foundation, research value. Not a VC-driven hype startup. 

**On-call rotation:** Standard for infra. You'll respond to inference pipeline failures, model serving issues. Manageable but demanding.

**Learning:** They value contributions to open-source (FlashAttention, RedPajama). If you're interested in model efficiency research, this is good.

---

## Why You Might Not Get This

1. **Screening:** HR filters for "5+ years experience" → resume rejected. **Mitigation:** Refer via friend, cold outreach to hiring manager, highlight demo projects in cover letter.
2. **Expectations:** They might expect you to own a sub-system independently on day 1. You'll need ramp-up time.
3. **Location:** You're in San Diego, they're in SF. Remote role not mentioned. Would need relocation (cost: ~$15-20k, moving + housing search). Company doesn't mention relocation package.

---

## The Application Strategy

### IF You Have a Network Contact
- Get intro to ML hiring manager
- Say: "I built FlipperZillow (multi-GPU inference pipeline). Shipped in 24hrs, handling ROCm + CUDA compatibility. Interested in Together AI's inference work — vLLM aligns perfectly with my work. Can we talk?"
- This bypasses the 5+ years screen.

### IF No Contact
- Apply directly with **strong cover letter** highlighting:
  - FlipperZillow: multi-model GPU pipeline, latency optimization, pragmatic trade-offs
  - RedShift: LLM evaluation, batch scaling, multi-architecture testing
  - Mini-Stockfish: neural network inference, 77% latency reduction
  - Frame as: "I don't have 5 years yet, but I've shipped 3 production inference systems and optimized latency by orders of magnitude. I learn fast (ROCm + 5 frameworks in 24hrs) and ship working code."

### Resume Changes (If You Apply)
Reorder projects:
```
Projects (by Together AI fit):
1. FlipperZillow (GPU pipelines, ROCm, inference optimization) — LEAD
2. RedShift (LLM evaluation, batch processing)
3. Mini-Stockfish (neural network inference, latency optimization)
4. PatentIQ (LLM API integration, production systems)
```

Move GPU + LLM work to the top, reduce emphasis on web work (Groundwork, Simplerfy).

---

## Interview Prep (IF You Get an Interview)

**Q: "Tell us about a time you optimized an ML system."**
- **Story:** Mini-Stockfish latency reduction
  - Situation: NNUE evaluation was bottleneck (1.1ms per position)
  - Task: Ship competitive chess engine under real-time constraints
  - Action: Profiled code, found accumulator updates were hot path, used Cython + C++ for critical functions, incremental accumulators for O(1) updates
  - Result: 77% latency reduction (0.25ms), played competitively on commodity hardware
  - **Why it matters:** Shows end-to-end optimization thinking (profile → identify → implement → validate)

**Q: "Describe a multi-GPU inference system you've built."**
- **Story:** FlipperZillow pipeline
  - Situation: Process property images through 3 deep learning models (DepthAnythingV2, DFormerV2, SAM3D) under 24hr deadline
  - Task: Orchestrate parallel GPU processing with 3 models, each with different framework requirements (PyTorch, OpenCV, open3d)
  - Action: Designed pipeline stages, used parallel async/await, navigated ROCm incompatibility with SAM3D (switched to Nvidia cloud), batched inference
  - Result: Shipped working 3D house tour platform with <30sec processing per property
  - **Why:** Shows architecture design, pragmatism under time pressure, framework knowledge

**Q: "How would you approach building LLM inference infrastructure?"**
- Reference RedShift: You built batch evaluation for 7 LLM architectures
- Show thinking: "I'd start with a single model (e.g., Llama 7B on A100), measure latency/throughput, then scale: batching → multi-GPU → multi-node. Together AI's cost focus means I'd also profile memory + compute efficiency, not just speed."

**Q: "What's your experience with Kubernetes / ML frameworks?"**
- **Honest answer:** "I haven't orchestrated production ML at Kubernetes scale, but I've shipped inference pipelines (FlipperZillow: multi-GPU, multi-framework). I learn frameworks quickly — picked up ROCm + SAM3D + DFormerV2 in 24 hours during FlipperZillow. Happy to ramp on vLLM + Kubernetes as part of the role."

---

## Recommendation

**CONSIDER APPLYING** with a caveat:

**High value application IF:**
- You have a network contact at Together AI → refer yourself, highlight projects
- You're willing to relocate to SF (or negotiate remote)
- You prepare a strong portfolio demo (FlipperZillow video, GitHub code)

**Skip IF:**
- You're not interested in ML infrastructure / inference optimization
- You want to stay in San Diego and no relocation package is offered
- You prefer roles with explicit junior/mid leveling (not 5+ years required)

**Realistic outcome:** 40-50% chance of interview if you have a referral. 10-15% chance if cold apply. They're hiring experienced ML engineers; you're a new grad. But the project alignment is strong enough to get a shot if you frame it right.

---

## Comparison to Report 251

| Dimension | Backend (Amsterdam) | ML (SF) |
|-----------|-------------------|---------|
| Archetype fit | 2.5/5 (infrastructure, not primary) | 4.2/5 (direct AI/ML archetype) |
| Technical match | 3.2/5 (systems thinking, gaps in scale) | 4.0/5 (GPU pipelines, inference, optimization) |
| Experience requirement | 5+ years (hard blocker for new grad) | 5+ years (softer, research value matters more) |
| Compensation | Vague "competitive" | Explicit $160-220k (strong) |
| Location fit | Europe (relocation, visa complexity) | US/SF (willing, relocation cost lower) |
| **Overall Score** | 2.1/5 (SKIP) | 2.8/5 (CONSIDER, with referral) |

**Bottom line:** ML role is strictly better for you. Still a reach, but your projects make a compelling case.

---

## Next Steps

1. **Check if you have network contacts** at Together AI (Ask on Slack, LinkedIn, friend groups)
2. **If yes:** Direct outreach to hiring manager with FlipperZillow demo
3. **If no:** Prepare strong cover letter + GitHub portfolio, apply cold (low odds, but worth it)
4. **Realistic timeline:** Expect rejection or ghosting. Use it as interview practice + networking.
5. **Long-term:** Target roles like "ML Engineer" (not 5+ years requirement) at Perplexity, Replit, or Series A AI startups where leveling is more flexible.

---

## Report Notes

- **Better fit than backend role**, but 5+ years requirement is still a challenge
- **Project quality is your strength.** Demo work > resume years for ML roles
- **Compensation transparency is a green flag.** They know what they'll pay
- **Relocation friction is real.** No package mentioned. Budget ~$20k for move if you decide to pursue
- **Culture seems solid.** Open-source + research-backed is good for learning
