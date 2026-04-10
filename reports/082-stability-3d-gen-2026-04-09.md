# Stability AI — Research Scientist – Controlled 3D Generation

**URL:** https://stability.ai/careers?gh_jid=4711065101

**Score (A-F blocks):**
- A (Match with CV): 3.5/5
- B (North Star): 2.9/5
- C (Compensation): 3.5/5
- D (Culture): 3.0/5
- E (Red Flags): 3.2/5

**Global Score: 3.0/5 — Evaluated**

---

## Role Summary

Stability AI is hiring a Research Scientist focused on 3D generation—building models that can generate or manipulate 3D content (meshes, voxels, implicit functions). This is a pure research role emphasizing novel architectures for 3D understanding and generation, advancing the frontier of generative 3D models. Requires research background and publication record.

---

## A: Match with CV

**Fit: 3.5/5** — You have some 3D experience but it's hobbyist, not research-grade.

**Strengths:**
- FlipperZillow: You worked with 3D reconstruction (SAM3D, DFormerV2 for depth-to-3D), integrated WebSpatial for Vision Pro 3D experiences, used Three.js for 3D rendering. You've touched the full 3D pipeline.
- FishSense: Photogrammetry algorithm (3D metric extraction from 2D video)—this shows understanding of 3D geometry and camera models
- TriCore9 FPGA project: Shows you can work with complex spatial representations and optimize them

**Gaps:**
- No 3D generative modeling (you integrated existing 3D pipelines, didn't design novel generation models)
- No neural 3D representations (no NeRF, Gaussian splatting, or implicit function experience)
- No mesh generation or optimization experience
- No published 3D research (papers, preprints, benchmarks)
- 3D experience is incidental to other projects, not your focus

---

## B: North Star (Archetype Fit)

**Fit: 2.9/5** — You're a full-stack engineer interested in 3D; they want a 3D research specialist.

**Mismatch:**
- They want someone who's spent 2+ years on 3D generation specifically (architecture design, training large models, ablations)
- You're broader: "I can build anything, including 3D pipelines" vs. "I'm the 3D expert"
- Your learning story (FlipperZillow: 48 hours of new tech) is impressive but opposite of what research wants (sustained expertise)

---

## C: Compensation

**Fit: 3.5/5** — Research scientist comp is solid, but degree requirement is uncertain.

**Estimate:** Stability AI research scientist (3D):
- Base: $180K–$220K
- Equity: 0.10–0.25%
- Total comp: ~$220K–$280K annualized

**Reality:** You're a new grad. Role likely requires M.S. or Ph.D. They won't consider you for this level.

---

## D: Culture

**Fit: 3.0/5** — Research culture with distributed teams.

**Concerns:**
- Stability is cutting-edge on 3D (Stable 3D models), but very research-driven
- Heavy publication pressure
- Distributed teams (UK/SF) create async communication overhead
- You'd need to be productive with minimal hand-holding

---

## E: Red Flags

**Concerns: 3.2/5**

1. **No 3D Domain Depth:** FlipperZillow is impressive but tangential. They want someone who's read 50+ 3D generation papers.
2. **Degree Gap:** B.S. in Computer Engineering vs. M.S./Ph.D. in CS
3. **No Research Track Record:** No papers, no benchmarks, no open-source 3D libraries
4. **Generalist vs. Specialist:** You've done 3D as one of 4 projects; they want it as your life's work

---

## Global Score & Recommendation

**3.0/5 — Evaluated: Pass**

You're genuinely interested in 3D and have touched the space. But Stability wants research depth you don't have yet. This isn't a beginner role.

---

## Interview Prep: STAR Stories

**Story 1: 3D Reconstruction at Scale (FlipperZillow)**

- **Situation:** Building 3D house tours with Vision Pro integration. Needed to extract 3D geometry from 2D property images.
- **Task:** Integrate DepthAnythingV2 (depth estimation) into a pipeline that creates WebSpatial-compatible 3D objects.
- **Action:**
  - Evaluated 3D reconstruction approaches: NeRF (too slow), Gaussian splatting (experimental), DFormerV2 (semantic depth)
  - Chose DFormerV2 for robustness; integrated with SAM3D for object segmentation
  - When SAM3D broke on ROCm, pivoted to standard depth + semantic layers
  - Implemented Three.js rendering for fallback (non-Vision Pro)
- **Result:** Created 3D property visualizations; worked on Vision Pro and web browsers
- **Why it matters:** Shows practical 3D pipeline building. Demonstrates you can debug spatial geometry issues.

**Story 2: 3D Geometry in FishSense**

- **Situation:** Extracting biological metrics (length, mass) from 2D video of underwater fish using dual-laser photogrammetry.
- **Task:** Convert 2D bounding boxes + laser points → precise 3D measurements
- **Action:**
  - Implemented photogrammetry calibration: dual lasers in each frame define a known distance
  - Derived pixel-to-world coordinate transformation matrix
  - Applied to fish detections: pixel dimensions → real-world centimeters
  - Validated against ground truth (manual measurement); achieved sub-5% error
- **Result:** Reproducible 3D measurement pipeline; researchers could deploy it immediately
- **Why it matters:** Shows you understand 3D geometry, camera models, and validation. Practical but not novel-architecture research.

