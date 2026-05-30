# Stability AI — Generative AI Inference Engineer

**URL:** http://stability.ai/careers?gh_jid=4712826101

**Date Evaluated:** 2026-05-29

**Candidate:** Daris Chen (New Grad, March 2026)

---

## Score Summary

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Match with CV | 3.2/5 | GPU optimization experience exists (FlipperZillow, Mini-Stockfish); lacks 7+ YOE production inference requirement |
| North Star Alignment | 3.0/5 | AI/ML archetype fit, but role is senior-focused; new grad mismatch |
| Compensation | 4.0/5 | Stable company, likely $100-130K range for mid-level (but posting requires seniority) |
| Cultural Signals | 4.5/5 | Stability AI well-funded, strong product-market fit, remote-friendly, AI innovation focus |
| Red Flags | 2.0/5 | **BLOCKER: 7+ YOE requirement. You have 0 YOE (new grad, March 2026). This is a resume-screen gate.** |
| **Global Score** | **2.8/5** | Strong company, great fit technologically, but credential blocker is disqualifying. |

---

## Detailed Evaluation

### Match with CV

**Relevant Experience:**
- FlipperZillow (Feb-Mar 2026): GPU-accelerated inference pipeline with DepthAnythingV2, DFormerV2, SAM3D. Debugged ROCm/CUDA compatibility issues under time pressure. This directly demonstrates inference system work.
- Mini-Stockfish (Jan-Mar 2026): NNUE neural network inference optimization. Reduced latency 77.2% via Cython + C++ optimizations. Shows inference tuning mindset.
- FishSense (Feb-Mar 2026): Custom Detectron2 pipeline for embedded inference. Optimized for inference speed (40% setup reduction).

**Missing Experience:**
- **Production inference at scale:** You've built 1-off inference pipelines, not 24/7 production systems serving thousands of concurrent requests
- **7+ years productionizing ML systems:** You graduated 2 months ago (0 YOE)
- **High-performance frameworks:** You know PyTorch, but haven't shipped with Triton or TensorRT at production scale
- **Cloud deployment ops:** You've used Vercel and AWS for web apps, not managed inference clusters in Kubernetes

**Verdict:** Strong inference foundation. Would be an exceptional candidate in 3-5 years. Not hireable today at this level.

---

### North Star Alignment

**AI/ML Engineer Archetype — Partial Fit:**
- Role explicitly asks for "substantial experience developing and running inference for multi-modal models"
- You have multi-modal inference projects (FlipperZillow spans image + depth + semantic models)
- But the seniority expectation (7+ YOE) doesn't match your stage

This role would be ideal if you had 5+ years of production inference work. At present, it's outside your hire-ability range.

---

### Compensation

**Expected Range:** $120-150K (mid-level inference engineer at well-funded AI company)
- Stability AI Series A/B funded, $100M+ valuation
- Machine learning engineers in San Francisco typically earn $100-160K depending on seniority
- This posting targets mid-level (7+ YOE), so likely top of range for new grad

**Rating:** 4.0/5 — Strong comp potential, but won't reach dialog with credential gate.

---

### Cultural Signals

**Positive:**
- Stability AI is a legitimate AI company (built Stable Diffusion, 350M+ downloads)
- Recently appointed strong leadership (Sean Parker as Executive Chairman, Prem Akkaraju as CEO, James Cameron on board)
- Remote-friendly (posted as USA-only remote)
- Fast growth + innovation culture
- Partnered with major cloud providers (AWS, GCP, Azure)

**Neutral:**
- Recent leadership transition could mean restructuring ahead
- Heavily dependent on generative AI market (good now, but regulatory risk)

**Verdict:** Excellent company culture and opportunity. **But not for you at this stage.**

---

## Red Flags / Blockers

### BLOCKER: Experience Requirement Gate

**The Problem:**
```
Required: 7+ years productionizing machine learning systems 
Your background: 0 years (new grad, March 2026)
```

This is a **hard resume-screen filter.** The company explicitly requires this to pass the ATS. You will be filtered out before human review.

**Proof:** The posting states:
- "7+ years productionizing machine learning systems and inference pipelines"
- "Expert-level Python services development at scale"
- "5+ years with PyTorch and high-performance inference frameworks"

You don't have the resume-matching keywords. Apply anyway? **No. Your time is better spent on new grad programs and entry-level roles that evaluate on demonstrated capability.**

---

## Recommendation

**Status:** SKIP — Do Not Apply

**Reasoning:**
1. You lack the required 7+ YOE (new grad, 0 YOE)
2. ATS will filter you out before human review
3. Your time and Stability AI recruiter's time are both valuable
4. Stronger opportunities exist in new grad-specific roles

**Alternative Path:**
- **Now:** Apply to new grad roles at Series A-B startups focused on AI (e.g., Perplexity, Anduril, Scout AI, Together AI)
- **In 2-3 years:** Revisit Stability AI as a mid-level inference engineer

**Callback:** Your FlipperZillow project and Mini-Stockfish work are genuinely impressive. These projects put you in the top 10% of new grads in terms of ML infrastructure knowledge. Channel this into roles like:
- "ML Infrastructure Engineer (New Grad)" at AI startups
- "AI Systems Engineer (New Grad)" at companies building inference platforms
- "ML Engineer (Inferenc Focus, Entry-Level)" at AI infrastructure companies

---

## Interview Prep (If You Override & Apply)

Not recommended. But if you decide to apply anyway:

### Story: FlipperZillow GPU Pipeline Under Pressure

**Q: Tell me about a time you optimized inference performance.**

**A:** "At FlipperZillow, I needed to process Realtor.com images through three deep models (DepthAnythingV2, DFormerV2, SAM3D) in a 24-hour hackathon. The initial AMD ROCm setup broke on SAM3D dependencies.

Instead of debugging forever, I pivoted to Nvidia cloud with CUDA, unblocking the pipeline. We shipped a working 3D house tour generation system within the deadline. This forced me to learn GPU scheduling, dependency management, and pragmatism under time pressure—all skills an inference engineer needs."

**Why it works:** Shows GPU troubleshooting, pragmatism, and ability to ship. But won't overcome the 7+ YOE gate.

---

## PDF Generation

**Recommendation:** Do not generate. Below apply threshold (2.8/5 < 3.0).

---

## Files & Tracking

- **Report:** `527-stability-ai-inference-engineer-2026-05-29.md`
- **Tracker Entry:** See `batch/tracker-additions/527-stability-ai-inference-engineer.tsv`
