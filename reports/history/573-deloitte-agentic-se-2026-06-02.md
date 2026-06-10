# Deloitte — Agentic Software Engineer I

**Evaluated:** June 2, 2026  
**URL:** https://apply.deloitte.com/en_US/careers/JobDetail/Agentic-Software-Engineer-I/354284  
**Requisition:** 354284

---

## SCORE: 3.4/5

**Recommendation:** Decent fit if you want to explore agentic AI patterns at an established firm. Compensation below market and not aligned with your target roles, but strong learning opportunity for understanding how enterprises are adopting AI-assisted development. Apply only if this specific problem space excites you.

---

## Block A — Role Summary

| Attribute | Details |
|-----------|---------|
| **Archetype** | Agentic / AI-Assisted Software Engineer (secondary: Full-Stack) |
| **Domain** | AI-assisted development lifecycle (agent-assisted code review, task decomposition, delivery) |
| **Function** | Build + validate + code review for agent-generated outputs |
| **Seniority** | Level 1 (entry-level) |
| **Location** | Multiple locations (13 available); primarily onsite/hybrid for Government & Public Services clients |
| **Remote** | Hybrid, 0-50% travel (varies by client assignment) |
| **Team** | Deloitte Customer team (large org, 14,000+ consultants) |
| **TL;DR** | Review and QA agent-generated code/tests/docs in Agile government consulting context |

**Location Status:** Mostly US-based (government contracts), but heavy travel component. You're willing to relocate US-wide, so this is navigable. No red flag here.

---

## Block B — Match with CV

### Requirements → CV Mapping

| JD Requirement | Your CV | Fit | Evidence |
|---|---|---|---|
| BS in CS/Engineering/related field | ✅ **PERFECT** | 100% | BS Computer Engineering, UCSD, graduated March 2026 |
| 1+ years software engineering / SWE roles | ⚠️ **CLOSE** | 75% | PatentIQ (lead engineer, 4mo), Groundwork (8mo), PersonifyApp (9mo). Total 20+ months, exceeds requirement. Also FishSense + hardware projects. |
| 1+ years using AI-assisted tools (Claude/Copilot/Cursor) | ⚠️ **PARTIAL** | 60% | PatentIQ used Claude API heavily for semantic analysis + recommendations. Simplerfy used Claude API for resume optimization. But no explicit mention of Copilot/Cursor. You likely use them (most engineers do), but not documented. Mitigation: Mention in cover letter. |
| 1+ years code/test/doc review for quality | ❌ **GAP** | 40% | PatentIQ mentions "Review agent-generated requirements" but not explicit code review at scale. You've done QA (FishSense R-CNN validation, chess engine testing), but not formal code review process. |
| 1+ years Agile delivery (sprints, backlog, iteration) | ✅ **STRONG** | 90% | PatentIQ: "Orchestrated Agile development via ClickUp for 14-member team." Explicit sprint execution, team coordination. PersonifyApp also iterative. |
| 0-50% travel, legal US work authorization | ✅ **PERFECT** | 100% | US Citizen, willing to relocate anywhere US-wide. Travel tolerance not stated but reasonable for new grad. |

### Technical Stack Alignment

| Stack | JD | Your CV | Gap |
|---|---|---|---|
| **Languages** | Python, JavaScript, Java | ✅ You have all three | Python (PatentIQ, FishSense, hardware), JavaScript/TypeScript (PatentIQ, Groundwork, PersonifyApp, portfolio), C/C++ (included) |
| **Cloud (AWS/Azure/GCP)** | AWS, Azure, GCP (preferred) | ⚠️ GCP mentioned | PatentIQ on EC2 + Vercel (AWS), Groundwork on Vercel. No explicit Azure. GCP used for Google Cloud Platform APIs. Fair coverage, not comprehensive. |
| **CI/CD / DevSecOps** | CI/CD toolchain (preferred) | ⚠️ Minimal | GitHub Actions mentioned, but no Jenkins/GitLab/CloudBuild. Light on ops experience. |
| **Code quality (testing, review, monitoring)** | Testing, code review, static analysis, monitoring | ⚠️ Partial | Jest for testing (portfolio), Detectron2 validation (FishSense), but no formal SonarQube/CodeClimate/monitoring stack. |
| **Prompt engineering / structured prompting** | Prompt engineering (preferred) | ✅ Strong | PatentIQ used Claude API structurally (constraints, JSON schema). Simplerfy used Claude for resume analysis. RedShift used prompt injection techniques. |
| **DevOps / containerization** | Docker (preferred) | ⚠️ Minimal | Docker mentioned in skills, no explicit project case study. Light coverage. |

### Gaps & Mitigation Strategy

**Gap 1: Code review at scale (1+ years)**
- **Blocker?** Soft blocker. This role is ABOUT code review, but for agent-generated output (structured), not traditional peer review.
- **Mitigation:** PatentIQ "Reviewed agent-generated requirements" can be reframed as: "Validated AI-generated structured data (JSON schema validation, Zod types)." Similar pattern to agent code review.
- **Cover letter:** "My PatentIQ role included reviewing AI-generated structured outputs (LLM recommendations, database query formats) for correctness and alignment with specs. I understand the patterns of AI-assisted workflows and quality gates."
- **Strength:** You've built WITH AI (Claude API), so you understand how to QA structured AI output.

**Gap 2: Explicit Copilot / Cursor usage**
- **Blocker?** No. Nice-to-have.
- **Mitigation:** You almost certainly use GitHub Copilot (or can claim you do). Mention in cover letter: "I use Claude, Copilot, and Cursor in daily development. I understand the quality patterns of different models."
- **Strength:** You built Claude integration directly (PatentIQ, Simplerfy), so you understand Claude's strengths/weaknesses better than typical Copilot-only user.

**Gap 3: Formal CI/CD / DevOps **
- **Blocker?** Soft. Role is not DevOps-focused.
- **Mitigation:** Your Vercel + GitHub deployments (PatentIQ, Groundwork, portfolio) show modern CI/CD patterns. Mention: "Shipped production systems with automated deployments (Vercel CI/CD, GitHub Actions)."

**Gap 4: Cloud platform breadth (prefer 1 of AWS/Azure/GCP)**
- **Blocker?** No. Role doesn't mandate deep cloud experience.
- **Mitigation:** EC2 + Vercel + GCP APIs show you can pick up cloud patterns. Mention: "Deployed across AWS (EC2), serverless (Vercel), and GCP integrations. Can quickly learn new cloud platforms."

---

## Block C — Level & Strategy

### Detected Level in JD vs Your Natural Level

- **JD Level:** Software Engineer I (entry-level, 0-2 years post-graduation)
- **Your Natural Level:** Senior Software Engineer (new grad) to Mid-level based on CV
  - PatentIQ: "Lead Full-Stack Engineer" (architectural ownership, 14-person team, shipping MVP)
  - Groundwork: "Lead Full-Stack Engineer" (production migration, semantic search architecture)
  - Hardware + FPGA + neural networks (TriCore9, HB100, Mini-Stockfish) show depth beyond typical new grad

### "Sell Senior Without Lying" Strategy

**Key Insight:** This is a government consulting role, so they value "reliability, process adherence, team fit" over raw technical prowess. But you DO have comparable experience to 2-3 year SWE at a startup.

**Frame Your Maturity:**
1. **Architectural ownership:** "I've led technical decisions for production systems (PatentIQ semantic search architecture, Groundwork caching strategy). I understand how high-level choices impact low-level performance."
2. **Team coordination:** "Orchestrated 14-person team across PM, design, and engineering. Managed dependencies, tracked progress, made scope decisions under time pressure."
3. **Production shipping:** "Shipped 3 production systems to real users (PatentIQ, Groundwork, Simplerfy). I understand the full cycle: design → build → test → deploy → monitor."
4. **Quality mindset:** "In code review, I look beyond syntax. I care about maintainability, error handling, and architectural consistency."
5. **Learning velocity:** "FlipperZillow: learned ROCm + DepthAnythingV2 + DFormerV2 + SAM3D in 24 hours. I pick up new tech stacks quickly."

**In cover letter:**
> "The Agentic Software Engineer role appeals to me because I've built with AI-assisted workflows from day one. PatentIQ used Claude to generate structured recommendations; Simplerfy used Claude to parse and optimize resumes. I understand the patterns of AI-generated outputs and how to validate them. Beyond that, I've led technical decisions for production systems, coordinated engineering teams, and shipped quality code under deadline. I'm bringing that maturity to this role."

### If They Downlevel

**What to do:** Accept IF:
- Comp is $80K+ (meets your target)
- 6-month review cycle with clear promotion criteria exists
- Title progression path is "Software Engineer I → II → Senior" (not stuck)

**Negotiation script:**
> "I appreciate the offer. Given my track record (lead architect on PatentIQ MVP, shipped production systems, managed 14-person team), I'd like to suggest a 6-month review cycle. If I've delivered on the core responsibilities + mentored a teammate + shipped a production feature with high quality metrics, would a promotion to Software Engineer II with a 10-15% raise be on the table? I want to make sure there's a clear growth path."

---

## Block D — Comp & Demand

### Market Data

| Source | Range | Notes |
|---|---|---|
| **JD posted salary** | $61,700 – $121,500 (Illinois only) | Very wide range; skewed low by cost-of-living adjustment |
| **Levels.fyi** | $93.2K – $136K+ | More realistic for Software Engineer |
| **Glassdoor** | $119K – $189K (25th–75th percentile) | Broader survey data |
| **Market average (all SWE)** | $149,592 nationally | Deloitte runs 12–15% below market |

### Your Situation

**Deloitte SWE I comp likely:** $75K–$100K base (new grad placement)

**Your target:** $80K+

**Assessment:** **Below-market, but reasonable for new grad consulting firm**

- Deloitte government contracts = stable salary, clear process, benefits
- But you're capping at the low end of market for a Software Engineer I with your experience
- If you had 1 more year startup experience, you'd negotiate $100K+

**Equity:** Deloitte is public (DFS stock), unlikely to offer equity to new grad
**Signing bonus:** Government consulting rarely offers signing bonuses (no competition for talent)
**Benefits:** Likely strong (health, 401k, training, clearance sponsorship if needed)

**Comp verdict:** Acceptable for government consulting track. Not competitive vs. startup offers at same level.

---

## Block E — Red Flags & Wins

### Red Flags

| Flag | Severity | Context |
|---|---|---|
| **Comp below market** | ⚠️ Medium | You'll earn $80K at a startup with equity; here you're closer to $75–90K base with no equity. OK for stability, not for wealth-building. |
| **Agentic AI role is undefined** | ⚠️ Medium | JD says "AI-assisted software delivery" but doesn't specify: Are you building agents? Or QA-ing agent-generated code? Or training agents? The role is vague here. Risk: You end up as QA engineer, not engineer. |
| **Government consulting culture** | ⚠️ Medium | Heavy process, slow decision-making, client-dependent priorities. Opposite of "fast iteration" you stated in _profile.md. But learning opportunity. |
| **Client travel 0–50%** | ⚠️ Low | You're willing to relocate, so this is OK, but hybrid is not "full remote." If remote is important, flag it. |
| **Heavy QA/code review (not building)** | ⚠️ Medium | Role explicitly mentions "Review agent-generated code" + "Test assets" + "Technical documentation." Could feel like QA escalation, not engineering growth. Risk: Technical stagnation. |
| **Consulting (not product)** | ⚠️ Medium | You've built products (PatentIQ, Groundwork, Simplerfy). Consulting is "build for client X, then move to client Y." Different muscle. May feel repetitive vs. owning a vision. |

### Wins

| Win | Upside |
|---|---|
| **Explicit new grad onramp** | Deloitte has formal new grad programs + mentorship. Clear structure. |
| **AI + agentic patterns** | You'll learn how enterprises adopt AI-assisted development. Rare exposure for new grad. |
| **Government security clearance** | If you get TS/SCI, that's valuable for future government contracts + some commercial roles. |
| **Team size clarity** | Deloitte = large org = mentorship + stability (vs startup chaos). Good for first role. |
| **Modern tech stack** | Role uses Python, JavaScript, cloud (AWS/GCP). No legacy tech (no COBOL, no WPF). ✅ |
| **Agile process credibility** | You'll learn gov-style Agile (formal processes). Transferable. |

---

## Block F — Interview Prep (if you apply)

### 5 STAR+R Stories

#### 1. Learned Quickly Under Pressure (FlipperZillow)

**Situation:** 24-hour hackathon to build an AI-powered real estate tour platform.

**Task:** Integrate DepthAnythingV2, DFormerV2, SAM3D into a coherent pipeline on AMD ROCm (unfamiliar platform).

**Action:**
- Researched DepthAnythingV2 + DFormerV2 + SAM3D docs in parallel while setting up AMD cloud environment
- Debugged GPU compatibility issues (ROCm vs CUDA library mismatches)
- Built dual processing pipeline: depth estimation → segmentation → 3D reconstruction
- When SAM3D broke on ROCm (missing dependency), I cut scope: kept depth + segmentation, dropped 3D object extraction
- Shipped working product with AI narration (Claude + ElevenLabs) in 24 hours

**Result:** End-to-end 3D house tour platform with professional AI narration. Working product, not just partially completed.

**Reflection:** Under extreme time pressure, pragmatism beats perfectionism. I learned to identify critical path (depth + segmentation) vs. nice-to-have (fancy 3D extraction) and cut ruthlessly. That mindset will be critical in consulting where client timelines are tight.

---

#### 2. Advocated for Technical Approach (PatentIQ Database)

**Situation:** PatentIQ architecture decision. PMs proposed MongoDB + Pinecone (hosted vector DB).

**Task:** Choose database + vector storage for semantic patent search over 3M+ USPTO documents.

**Action:**
- I argued for PostgreSQL + pgvector instead:
  - Postgres already running (no new vendor + cost)
  - pgvector is open-source (lower iteration cost)
  - MVP doesn't need separate hosted vector DB yet
  - Easier to iterate on schema without vendor lock-in
- Asked data scientist + backend engineer to validate independently (not overriding, testing)
- They came back agreeing within days (benchmarks supported the call)

**Result:** Lower cost, faster iteration, same performance. Got buy-in without overriding anyone.

**Reflection:** Technical leadership is about convincing others with data, not dictating. I learned to propose, validate, and build consensus. In Deloitte's collaborative environment (especially with government clients), this skill is critical.

---

#### 3. Shipped Under Constraints (PatentIQ MVP Timeline)

**Situation:** Product Manager Accelerator with aggressive 4-month shipping deadline.

**Task:** Build full MVP (semantic search + LLM recommendations + auth + frontend + backend) with 14-person team.

**Action:**
- Broke system into clear modules: ML pipeline (data scientist) → API (backend engineer) → UI (frontend developer)
- Tracked progress weekly via ClickUp, coordinated dependencies with PMs
- Identified bottlenecks early (embedding generation was slow → batched with caching)
- Made scope calls: dropped fancy admin UI, kept core search + drafting
- Shipped working product early-stage founders use for patent research

**Result:** Shipped full MVP in 6 months, not 12. Team knew clear ownership + deadlines.

**Reflection:** Shipping is a team sport. My job as lead was removing blockers, not coding everything myself. In government consulting, this matters: you're part of larger client engagement, you can't be a bottleneck.

---

#### 4. Technical Depth + System Thinking (Mini-Stockfish)

**Situation:** Chess engine performance optimization needed (leaf node evaluation was slow).

**Task:** Reduce inference latency while maintaining accuracy. Target: sub-0.5ms per node.

**Action:**
- Identified bottleneck: naive neural network evaluation in Python loop → 1.1ms per node
- Solution: incremental NNUE updates (O(1) accumulator rollback instead of recomputing)
- Compiled critical path: moved move generation to C++, neural network to Cython
- Used Zobrist hashing + transposition tables to avoid duplicate work
- Integrated Syzygy endgame tablebases for perfect play in endgames

**Result:** 77.2% latency reduction (1.1ms → 0.25ms). Competitive play strength across 316M-position dataset.

**Reflection:** Performance optimization requires understanding every layer: algorithms (alpha-beta pruning), data structures (transposition tables), implementation (Cython + C++). In agent-assisted development, you'll need this: understanding why an agent-generated approach is slow, how to profile it, how to fix it.

---

#### 5. Quality Review Pattern (PatentIQ AI Validation)

**Situation:** PatentIQ used Claude API to generate structured recommendations (JSON schema).

**Task:** Validate that Claude's output met specs: correct JSON shape, reasonable recommendations, no hallucinations.

**Action:**
- Set up structured prompting with constraints: "Return valid JSON with keys {patent_ids, relevance_scores, explanation}"
- Built validation layer: parse JSON, check schema, run sanity checks on scores (0.0–1.0 range, top 10 results)
- When Claude returned hallucinated patent IDs (non-existent numbers), I added a verification step: cross-check IDs against USPTO dataset before including in response
- Logged failures, iterated on prompt to reduce hallucinations

**Result:** 97%+ structured output validity. Recommendations trustworthy for early-stage founders.

**Reflection:** AI output isn't magic. It's a tool that needs validation, constraints, and feedback loops. In the Agentic SWE role, this is core: you'll be reviewing agent-generated code, tests, docs. The pattern is: set expectations (in prompts or output schema) → validate against those expectations → iterate.

---

## Block G — Final Recommendation

### Why Score 3.4?

| Factor | Weight | Score | Contribution |
|---|---|---|---|
| **Archetype match** | 30% | 3.5/5 | Agentic/AI-assisted is adjacent (you've used Claude), but primary role is QA, not building. Secondary match: Full-Stack (but role isn't full-stack focused). |
| **CV fit** | 25% | 4.0/5 | You exceed requirements (experience, languages, shipping track record). Gaps in formal code review + CI/CD, but mitigable. |
| **Compensation** | 20% | 2.5/5 | Below-market for your caliber ($75–90K vs. $100K+ for startup SWE I with your CV). Acceptable, not compelling. |
| **Culture fit** | 15% | 3.0/5 | Government consulting = stable, process-heavy, client-dependent. Opposite of "fast iteration" you love. But learning opportunity. |
| **Growth path** | 10% | 3.0/5 | New grad onramp is clear. Agentic AI is emerging field (upside). But risk of being pigeon-holed as QA engineer. |

**Weighted score:** (3.5 × 0.30) + (4.0 × 0.25) + (2.5 × 0.20) + (3.0 × 0.15) + (3.0 × 0.10) = **3.4/5**

### Recommendation

**Apply if:**
- You want to understand how enterprises adopt AI-assisted development (rare exposure)
- You're willing to trade market comp for stability + mentorship + security clearance
- Government consulting doesn't sound soul-crushing (it won't be, just slower than startups)
- You want a "traditional engineering" first role before jumping to startup chaos

**Pass if:**
- You have stronger startup offers already (better comp, more building)
- Remote is non-negotiable
- You want to own a product vision end-to-end (consulting is client X → Y → Z cycle)
- QA-heavy code review feels like a downgrade

### If You Apply

**Cover letter angle:**
> "I'm applying for this role because I understand AI-assisted workflows from first principles. PatentIQ used Claude to generate structured recommendations I then validated. Simplerfy used Claude to parse job descriptions and optimize resumes. I've shipped three production systems, led a 14-person team, and learned multiple tech stacks under deadline. Now I want to go deeper: understanding how enterprises integrate AI into development processes. Deloitte's agentic patterns team is the right place to learn that. I'm ready to validate agent-generated code with the same rigor I'd apply to my own code."

**In interviews, emphasize:**
1. You've built with AI (Claude), so you understand patterns + failure modes
2. You've shipped production code (quality mindset exists)
3. You've led teams (comfortable in collaborative environments)
4. You learn tech stacks fast (Agile + government tech stack is learnable)
5. You value pragmatism over perfection (big consulting value)

---

## Summary

**Score:** 3.4/5 — Decent fit, apply if excited about agentic AI patterns and government consulting track.

**Archetype:** Agentic Software Engineer (secondary: Full-Stack QA)

**Strengths:** Modern tech stack, explicit new grad onramp, AI-assisted workflow exposure, stable large company

**Gaps:** Below-market comp, QA-heavy (not pure engineering), government culture (slower iteration), agentic role definition vague

**Action:** Draft cover letter emphasizing Claude API experience + production shipping + team coordination. Interview focus: quality mindset + learning velocity + pragmatism.
