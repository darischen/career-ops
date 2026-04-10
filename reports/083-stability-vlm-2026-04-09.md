# Stability AI — Research Scientist – VLM Generalist

**URL:** https://stability.ai/careers?gh_jid=4711066101

**Score (A-F blocks):**
- A (Match with CV): 3.2/5
- B (North Star): 2.8/5
- C (Compensation): 3.5/5
- D (Culture): 3.0/5
- E (Red Flags): 3.5/5

**Global Score: 3.0/5 — Evaluated**

---

## Role Summary

Stability AI seeks a VLM (Vision Language Model) Generalist Research Scientist to advance multimodal models combining vision and language understanding. This is a research position requiring deep expertise in transformer architectures, training at scale, and novel model design. Targets Ph.D.-level candidates with publication record.

---

## A: Match with CV

**Fit: 3.2/5** — Limited depth in vision-language research.

**Strengths:**
- FlipperZillow multimodal pipeline (vision → language narration): shows you can wire vision + language models together
- FishSense R-CNN + photogrammetry: vision understanding + geometric reasoning
- PatientIQ semantic search: embedding space understanding

**Gaps:**
- You've integrated pretrained VLMs (Claude, DepthAnythingV2), not trained them
- No transformer architecture modifications or training experience
- No scale experience (you trained 316M chess examples, not LLM scale: billions of tokens)
- No published VLM research

---

## B: North Star (Archetype Fit)

**Fit: 2.8/5** — You're a builder, not a VLM specialist researcher.

Your breadth (full-stack engineer across 4 abstraction layers) is the opposite of what VLM research rewards. They want someone who's spent years on vision-language alignment, not someone who learned 5 ML techs in a hackathon.

---

## C: Compensation

**Fit: 3.5/5** — Research scientist comp is strong, but degree+experience barrier high.

**Estimate:** $180K–$220K base + 0.10–0.25% equity, ~$220K–$280K total.

**Reality:** You won't be considered without Ph.D. or 3+ years research experience.

---

## D: Culture

**Fit: 3.0/5** — Research-first, but slow iteration and high publication pressure.

Stability publishes (ControlNet, Stable Cascade), so visibility is high. But they want theory before shipping—opposite of your preference.

---

## E: Red Flags

**Concerns: 3.5/5**

1. **Degree Mismatch:** B.S. Computer Engineering vs. M.S./Ph.D. requirement
2. **Research Track Record:** No papers, no benchmarks, no open-source VLM libraries
3. **Scale Gap:** You've worked on inference; they want training at 10B+ token scale
4. **Specialist vs. Generalist:** Your CV is "I can do anything." They want "I'm the VLM expert."

---

## Global Score & Recommendation

**3.0/5 — Evaluated: Pass (not ready for this level)**

This is clearly a specialist researcher role. You're a builder. You'd be frustrated, and they'd be frustrated you don't have research depth.

---

## Interview Prep: STAR Stories

**Story 1: Vision-Language Integration (FlipperZillow)**

- **Situation:** 24-hour hackathon to build AI house tours. Needed to combine vision (depth, semantics) with language (Claude narration).
- **Task:** Create coherent multimodal pipeline: property images → visual analysis → natural language descriptions.
- **Action:**
  - Researched VLM options: Claude Vision (preferred for reasoning), GPT-4V (rate limits), Llava (local, slow)
  - Chose Claude for quality + reliability
  - Built prompt engineering: extract semantic features from DFormerV2, pass to Claude with visual context
  - Iterated on prompt; tested on 10 sample properties
- **Result:** Professional AI narration for 3D house tours
- **Why it matters:** Shows you understand prompt engineering for VLMs. But doesn't show you can train or improve the underlying model.

**Story 2: Vision Understanding at Scale (FishSense)**

- **Situation:** Underwater fish detection system. Needed both 2D detection and 3D metrics.
- **Task:** Train R-CNN (ResNet-50) on underwater video to detect + measure fish.
- **Action:**
  - Used Detectron2 pretrained weights (ImageNet) as starting point
  - Collected 500 annotated underwater video frames
  - Fine-tuned ResNet-50 backbone for fish detection
  - Achieved 92% mAP on test set; sub-5% error on metric estimation
- **Result:** Reproducible deployment; other researchers could run it immediately
- **Why it matters:** Shows you can fine-tune vision models. But fine-tuning existing models ≠ designing new architectures (which is VLM research).

