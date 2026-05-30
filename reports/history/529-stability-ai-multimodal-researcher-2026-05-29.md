# Stability AI — Multimodal Generative AI Researcher

**URL:** http://stability.ai/careers?gh_jid=4770256101

**Date Evaluated:** 2026-05-29

**Candidate:** Daris Chen (New Grad, March 2026)

---

## Score Summary

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Match with CV | 3.5/5 | Multi-model training (Mini-Stockfish NNUE), CV work (Detectron2), adversarial research (RedShift); but no VLM/LLM training experience |
| North Star Alignment | 2.0/5 | Research archetype (not a core target). PhD requirement is blocker for new grad. |
| Compensation | 4.0/5 | Research roles at Stability AI likely $120-150K+, but credential gate prevents dialog |
| Cultural Signals | 4.5/5 | Stability AI research team is prestigious; publication expectations are high |
| Red Flags | 1.5/5 | **BLOCKER: PhD requirement.** Posting explicitly requires "PhD (or equivalent experience)." You have BS in Computer Engineering. |
| **Global Score** | **2.2/5** | Strong research foundation, but PhD gate is disqualifying. Do not apply. |

---

## Detailed Evaluation

### Match with CV

**Research Experience (Positive):**
- **RedShift (Jan-Mar 2025):** Adversarial attack framework for LLMs. Implemented Chain-of-Thought injection techniques. Built scalable PyTorch evaluation pipeline. This is genuine research.
- **Mini-Stockfish (Mar 2025-Present):** Trained NNUE on 316M chess positions. Neural network design + training + optimization. Shows large-scale training thinking.
- **FishSense (Feb-Mar 2026):** R-CNN training pipeline with Detectron2. Custom photogrammetry algorithm. Sub-5% error metrics. Shows CV research rigor.
- **FlipperZillow (Feb-Mar 2026):** Multi-modal pipeline (image + depth + semantic). Integrated DepthAnythingV2, DFormerV2, SAM3D. Shows multi-modal systems thinking.

**Missing Experience:**
- **Vision-Language Model (VLM) training:** You've used pre-trained VLMs (in FlipperZillow, RedShift), not trained them from scratch
- **Large-scale fine-tuning:** Your largest training was NNUE on 316M positions (chess-specific). VLM fine-tuning at Stability typically involves billions of parameters on internet-scale data
- **Distributed training infrastructure:** You've used PyTorch DataLoaders, not managed multi-GPU distributed training with DeepSpeed/Ray
- **LLM training:** No LLM training experience on your CV

**Credential Blocker:**
- **Posting requires:** "PhD (or equivalent experience) in ML, CV, NLP, Robotics, Graphics"
- **You have:** BS in Computer Engineering (no advanced degree)
- **Equivalent experience qualifier:** Could mean "5+ years of research publications in peer-reviewed venues." You have 0 peer-reviewed publications.

---

### North Star Alignment

**Research Archetype — Weak Match:**
Your target roles are **Full-Stack SWE, AI/ML Engineer, Hardware/Embedded Engineer, Full-Stack Web Developer.** Research is not listed as a primary archetype.

Why? Because:
1. You prefer shipping products to writing papers
2. Your projects are pragmatic (PatentIQ MVP, FlipperZillow end-to-end product) not research-focused
3. You're drawn to learning velocity and iteration, not deep single-problem focus

**This role is outside your stated career goals.**

---

### Compensation

**Expected Range:** $140-180K (research scientist at Series A/B AI company)
- Stability AI well-funded
- Research scientists earn premium (more than software engineers at same company)
- But credential gate prevents reaching this dialog

**Rating:** 4.0/5 — Great comp, won't reach offer stage.

---

## Red Flags / Blockers

### BLOCKER 1: PhD Requirement

**The Problem:**
```
Posting: "PhD (or equivalent experience) in ML, CV, NLP, Robotics, Graphics"
Your qualification: BS in Computer Engineering
```

**Equivalent Experience Interpretation:**
The posting says "or equivalent experience." What does that mean?
- Typically: 5+ years of published research in peer-reviewed venues (ICML, NeurIPS, CVPR, etc.)
- You have: 0 peer-reviewed publications

**The Hard Truth:**
You can submit your CV, but you will be filtered at the credential stage. Stability AI receives thousands of applications. Filtering by "PhD or 5+ years research publications" is a first-pass gate.

**Can you override this?**
Not realistically. The role explicitly targets research scientists, not junior researchers. And Stability AI's research teams are competitive—they're hiring from top labs (OpenAI, DeepMind, Meta FAIR, Stanford, Berkeley).

---

### BLOCKER 2: Research Publication Expectations

**The Problem:**
Research roles expect publications. Your CV has none. Even if you applied:
- "How many papers have you published?" → "Zero, I graduated 2 months ago"
- "What's your research trajectory?" → "I've built projects, not submitted to conferences"

---

## Recommendation

**Status:** SKIP — Do Not Apply

**Why:**
1. PhD gate is disqualifying (BS ≠ PhD, no published research)
2. Research is not your stated career goal
3. Your time is better spent on roles aligned with your shipping-focused mindset
4. There are 20+ better-fit roles for you right now

**Alternative Path (If You Want Research):**

If you become interested in research later:
1. **Start publishing:** Work at an AI company (Perplexity, Together, Scout AI) and contribute to open-source research projects
2. **Build a research portfolio:** Implement papers from NeurIPS / ICML, publish to arXiv, contribute to Hugging Face research projects
3. **Revisit in 3-5 years:** With 2-3 publications + 3 years of shipping experience, Stability AI research might be reachable

But that's not your path right now. Focus on becoming an exceptional ML engineer first (through shipping products). Research comes later if you want it.

---

## Strengths & Positioning (If You Change Course)

Your research foundation is genuinely strong:
- **Multi-modal thinking:** FlipperZillow (image + depth + 3D)
- **Large-scale training:** 316M-example NNUE
- **Adversarial red teaming:** RedShift (7 model architectures)
- **Rigorous evaluation:** FishSense (sub-5% error metrics)

If you wanted to pivot to research:
1. Start at a product-focused AI company (Vercel, Perplexity, Scout AI)
2. Contribute to open-source ML projects (Hugging Face, vLLM, etc.)
3. Publish 1-2 papers on inference optimization or multi-modal systems
4. Then move to research roles at top labs

But again: **Not recommended for now. You're too early in your career, and shipping products is your superpower.**

---

## Files & Tracking

- **Report:** `529-stability-ai-multimodal-researcher-2026-05-29.md`
- **Tracker Entry:** See `batch/tracker-additions/529-stability-ai-multimodal-researcher.tsv`
