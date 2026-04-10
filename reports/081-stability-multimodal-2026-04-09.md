# Stability AI — Multimodal Generative AI Researcher

**URL:** https://stability.ai/careers?gh_jid=4770256101

**Score (A-F blocks):**
- A (Match with CV): 3.2/5
- B (North Star): 2.8/5
- C (Compensation): 3.5/5
- D (Culture): 3.0/5
- E (Red Flags): 3.5/5

**Global Score: 3.0/5 — Evaluated**

---

## Role Summary

Stability AI seeks a Multimodal Generative AI Researcher to advance models that combine vision, language, and other modalities. This is a research-focused role emphasizing novel architecture design, training methodologies, and pushing the frontier of what multimodal models can do. The position targets Ph.D.-level or equivalent research experience in computer vision + NLP.

---

## A: Match with CV

**Fit: 3.2/5** — You have some multimodal experience but lack research depth.

**Strengths:**
- FlipperZillow: You built a multimodal pipeline (vision + text): DepthAnythingV2 (vision) → DFormerV2 (semantic vision) → Claude Sonnet (language model) to generate AI narration from property images. This is multimodal integration, not research.
- FishSense: R-CNN for visual perception (fish detection) + photogrammetry (3D reconstruction from 2D). Combining vision modalities.
- PatentIQ: Semantic search using embeddings (text modality) + database retrieval (structured data modality). Multimodal retrieval, but limited.

**Gaps:**
- No novel architecture design (you integrated existing models, didn't invent new ones)
- No large-scale training experience (you trained a chess network on 316M examples, but training a multimodal foundation model is different: hyperparameter tuning, distributed training, convergence analysis, etc.)
- No published research (papers, preprints, open-source benchmark contributions)
- No Ph.D. in CS/ML (they likely want this)
- Multimodal experience is hobbyist level (24-hour hackathon + side project), not sustained research

---

## B: North Star (Archetype Fit)

**Fit: 2.8/5** — You're a builder, not a researcher. Fundamental mismatch.

**Key difference:**
- **Builder mindset:** "How do I integrate existing models to solve a user problem?" (PatentIQ, FlipperZillow, FishSense)
- **Researcher mindset:** "How do I design a new architecture that outperforms existing approaches?" (Stability's expectation)

You excel at (1) learning fast and (2) shipping. Researchers excel at (1) theoretical depth and (2) publishing. These are adjacent but different skills.

**Why it matters:** Even if you got the job, you'd spend 18 months frustrated that they want theory before shipping, or they'd be frustrated you want to ship before proving it in an ablation study.

---

## C: Compensation

**Fit: 3.5/5** — Research scientist roles pay well, but new grads are uncommon.

**Estimate:** Stability AI multimodal researcher:
- Base: $180K–$220K (research scientist level)
- Equity: 0.10–0.25% (depends on funding round)
- Total comp: ~$220K–$280K annualized

**Reality:** You're a new grad with no Ph.D. They likely don't hire at this level without advanced degree or 3+ years research industry experience. If they made an offer, it might be **$120K–$150K** in a different role (SWE, not researcher).

---

## D: Culture

**Fit: 3.0/5** — Research-heavy, fast-moving, but academic-aligned culture.

**Strengths:**
- Stability publishes (Stable Diffusion XL papers), so your work could have high visibility
- Research-first culture means time for experimentation and rigor
- Access to compute resources (GPU clusters, training budget)

**Concerns:**
- Pressure to publish (culture metric is papers, not users)
- Distributed team (UK-based), timezone challenges from San Diego
- Research culture can be slow (iterating on ablations for weeks)
- You'd need to learn deep theoretical foundations fast

---

## E: Red Flags

**Concerns: 3.5/5**

1. **Degree Mismatch:** Role likely requires M.S. or Ph.D. in CS/ML. You have B.S. in Computer Engineering (close but not identical).
2. **Research vs. Building:** Your CV screams "I ship products." This role wants "I advance the field." Different incentive structures.
3. **No Peer Review:** No published papers, no conference talks, no open-source research contributions. Researchers evaluate each other this way.
4. **PhD students are cheaper:** Stability AI might hire Ph.D. interns or postdocs for this work at lower cost. You'd compete against people with more research credibility.

---

## Global Score & Recommendation

**3.0/5 — Evaluated: Pass (not your type of role)**

**Why you should NOT apply:**
- You're underqualified on research depth (no papers, no Ph.D.)
- You're overqualified on shipping speed (you'd find their iteration cycle frustrating)
- This is a researcher role; you're a builder. Choose your path.

**If you felt strongly about it:**
- Publish something: release the Mini-Stockfish NNUE code on GitHub with a technical write-up
- Take a research ML course and prove depth in one area (transformers, vision models, etc.)
- Get a first-author conference paper (even workshop-level)

**Better path for you:** Look for roles at Anthropic, OpenAI, or Cohere where "research engineer" means "research + shipping", not just theory.

---

## Interview Prep: STAR Stories

**Story 1: Multimodal Integration Under Time Pressure (FlipperZillow)**

- **Situation:** 24-hour hackathon to build 3D house tour platform with AI narration. Needed to combine computer vision (depth estimation, semantic analysis) with natural language (Claude API) to generate property descriptions from raw images.
- **Task:** Integrate 5+ pre-trained models into a coherent multimodal pipeline: Realtor API → DepthAnythingV2 (depth) → DFormerV2 (semantics) → Claude Sonnet (language) → ElevenLabs (narration).
- **Action:**
  - Researched existing multimodal frameworks (HuggingFace transformers, LlamaIndex)
  - Decided to compose pre-trained models rather than train a new multimodal architecture (pragmatism)
  - Built data flow: image → depth map → semantic labels → prompt to Claude → audio
  - Debugged model compatibility issues (input/output shape mismatches)
  - Tested on 10 sample images; iterated on prompt engineering to improve narration quality
- **Result:** End-to-end pipeline generated professional 3D house tours with natural language narration in <5s per property.
- **Why it matters:** Shows you understand multimodal data flow and can integrate heterogeneous models. But also shows you prefer integration over innovation—important for self-awareness in interviews.

---

## Story 2: Handling Modality Gaps (FishSense R-CNN)**

- **Situation:** Building an underwater fish detection system (FishSense). Needed both 2D detection (R-CNN for localization) and 3D metrics (fish length, mass from video frames).
- **Task:** Combine two modalities: (1) 2D bounding box detection, (2) 3D laser photogrammetry for scale calibration.
- **Action:**
  - Used Detectron2 (ResNet-50 backbone) to detect fish in 2D video frames
  - Implemented photogrammetry algorithm: dual-laser calibration points in each frame → pixel-to-world coordinate mapping
  - Validated on 100+ video clips; achieved sub-5% error in length/mass estimation
  - Standardized the detectron2 codebase to reduce inference setup time for future researchers
- **Result:** Reproducible pipeline for biological metrics extraction; other researchers could run it in 40% less setup time.
- **Why it matters:** Shows you can combine modalities to solve real measurement problems. Also shows you invest in reproducibility, which research values.
