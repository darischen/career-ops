# Federal Reserve Financial Services Software Engineer I

**URL:** https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Atlanta-GA/Federal-Reserve-Financial-Services-Software-Engineer-I_R-0000032219-1?utm_source=Simplify&ref=Simplify

**Score:** 2.1/5

**PDF:** ❌ No PDF generated

---

## Block A: Role Summary

| Attribute | Value |
|-----------|-------|
| **Archetype** | DevOps / Infrastructure Automation |
| **Domain** | Financial Operations Automation |
| **Function** | Build automation scripts, operational processes |
| **Seniority** | Junior (0-2 years) |
| **Location** | Minneapolis, MN / New York, NY / Kansas City, MO (onsite required) |
| **Remote** | Hybrid-onsite (3+ days/week on-site mandatory) |
| **Team** | Part of larger FRFS automation team |
| **TL;DR** | Entry-level automation developer for Federal Reserve payments system ops using Ansible, Splunk, and Python. Onsite required. |

**Location Flag:** ⚠️ **Onsite requirement in Atlanta/Minneapolis/Kansas City.** You're San Diego-based, willing to relocate anywhere in US. This is relocatable but requires permanent move (not remote). Remote-first candidates should flag this as a friction point.

---

## Block B: Match with CV

### Mapping JD Requirements to CV

| JD Requirement | Your CV | Match | Confidence |
|----------------|---------|-------|------------|
| **0-2 years experience** | You have 1.5 years (PatentIQ Jan 2026 - present + prior internships). **Exact fit for junior level.** | ✅ Perfect fit | 100% |
| **Python experience** | Listed in Technical Skills. Used in FishSense (Detectron2), FlipperZillow (GPU pipelines), RedShift (batch processing), TriCore9 assembler. | ✅ Strong | 100% |
| **Ansible/infrastructure** | **NOT on CV.** No Ansible, Terraform, Infrastructure-as-Code, or DevOps work shown. | ❌ Missing | 0% |
| **Splunk** | **NOT on CV.** No log aggregation, monitoring, observability tooling mentioned. | ❌ Missing | 0% |
| **Dynatrace** | **NOT on CV.** No APM (Application Performance Monitoring) or observability platform work. | ❌ Missing | 0% |
| **Git / SDLC** | ✅ "Git, GitHub Actions" in Tools. Used in all production projects (PatentIQ, Groundwork, Simplerfy). | ✅ Strong | 100% |
| **Scrum** | "ClickUp" used in PatentIQ for agile workflows. Not explicit Scrum, but agile methodology present. | ⚠️ Adjacent | 60% |
| **AWS** | ✅ "EC2" in Tools. PatentIQ hosted on EC2 + Vercel. | ⚠️ Some exposure | 50% |
| **Associate's Degree in IT** | Bachelor's in Computer Engineering (exceeds requirement). | ✅ Exceeds | 100% |
| **Automation scripting** | Python used for TriCore9 Assembler (translating mnemonics to machine code). Not the same as infrastructure automation. | ⚠️ Adjacent | 40% |

### Gaps Analysis

**Critical Gap 1: Ansible/Infrastructure Automation (0% coverage)**
- **Is it a blocker?** Yes, but partially. JD emphasizes "automation scripts using Ansible" as primary work.
- **Mitigation:** Ansible is a scripting tool you can learn quickly (you learned ROCm + DepthAnythingV2 + DFormerV2 in 24 hours during FlipperZillow). You have Python foundations. Ansible is Python + YAML under the hood.
- **Plan:** In cover letter, reference your learning velocity story (FlipperZillow 24-hour GPU pipeline). Emphasize: "Rapidly acquired unfamiliar tech stacks (ROCm, depth models, 3D pipelines) in 24-hour hackathon. Ansible + Splunk are similar learning curves—scripting + tooling I can own in first sprint."

**Critical Gap 2: Splunk / Observability (0% coverage)**
- **Is it a blocker?** Moderate. JD says "Splunk" explicitly.
- **Mitigation:** You have no observability or log aggregation work. This is a new domain for you. However, you've built monitoring/profiling work (FishSense error rates, PatentIQ latency tracking via LRU cache, Mini-Stockfish leaf node profiling with Cython optimization).
- **Plan:** Frame as: "I've profiled and optimized systems (77% latency reduction on chess engine, 90% API latency reduction on Square integration). Splunk is a tool for the same mental model—observing performance, finding bottlenecks, automating responses."

**Critical Gap 3: Dynatrace / APM (0% coverage)**
- **Is it a blocker?** Lower priority than Ansible/Splunk.
- **Mitigation:** Similar to Splunk—you understand performance optimization conceptually.
- **Plan:** Same framing as Splunk. Not a blocker if you're hired for your learning velocity.

**Minor Gap 4: No DevOps/Infrastructure work**
- You've built high-scale systems (PatentIQ with pgvector, Groundwork with 4000+ SKUs real-time, Mini-Stockfish with 316M training examples), but all from the **product/application side**, not infrastructure/operations.
- This role is **opposite direction**: starting from infrastructure automation, moving toward operational reliability. Your experience is bottom-up (build a system, optimize it). This role is top-down (given systems, automate their management).
- **Mitigation:** Not insurmountable. The learning direction (product → ops) is easier than ops → product, but it's still a pivot.

### Overall Assessment

**You have 50% of the hard skills.** You can learn Ansible/Splunk/Dynatrace (you've proven this with GPU stacks), but they're NOT on your resume and the role is designed for someone who already has them. This is a **junior role** (0-2 years required) and you meet that bar in terms of experience level, but **the tech mismatch is real**.

**Whether this is fatal depends on Federal Reserve's hiring bar:**
- **If they want true beginners in infrastructure:** High risk. The gaps are obvious.
- **If they want junior devs willing to learn:** Medium risk. Your learning velocity story is strong.
- **If they want someone to be productive in month 1:** High risk. Ramp-up on Ansible + Splunk will eat Q1.

---

## Block C: Level & Strategy

**Detected JD Level:** Junior (explicitly "0-2 years" for this level; "3+ years for Software Engineer II")

**Your Natural Level in This Archetype:** You're a new grad (March 2026), so you ARE the target level. However, your CV reads **mid-level** due to the scope and impact of your projects (lead engineer on 14-person team, 316M-example neural network, multi-GPU pipelines). You risk over-qualifying on experience but under-qualifying on domain expertise.

### Positioning Strategy

**"Sell breadth, not depth"** — your advantage is you can learn anything quickly, not that you already know infrastructure.

**Phrases for cover letter:**
- "I've spent my career learning unfamiliar stacks on deadline. Ansible and Splunk are my next sprint."
- "I understand the operational automation mindset because I've optimized systems at scale (90% latency reduction, 316M-example training pipelines)."
- "I'm eager to move from building systems to automating their operations."

**Concrete achievements to highlight:**
- PatentIQ: Lead engineer coordinating 14-person team + setting technical standards → signals you can own automation roadmaps and document standards.
- FishSense + FlipperZillow: Learned unfamiliar ML frameworks and GPU environments under deadline → signals you won't panic when Ansible breaks.
- Mini-Stockfish: Optimized leaf node evaluation 77% faster → signals you understand performance bottlenecks and automation.

### If They Downlevel

Federal Reserve might offer you an "entry-level" title with junior pay (~$70-80k range for junior in Atlanta/Minneapolis). **Accept if comp is fair and there's a clear 6-month review.**

**Negotiation points:**
- "My experience is breadth (full-stack, ML, hardware). I'm new to infrastructure automation. A 6-month review ensures we're aligned on learning curve and impact."
- "Can we revisit level + comp after Q2 once I've shipped X automations?"

---

## Block D: Compensation & Market

**JD says:** Nothing. No salary listed.

### Market Research

| Metric | Range | Notes |
|--------|-------|-------|
| **Junior Automation Engineer (0-2 yrs)** | $65-85K | Glassdoor: Federal Reserve Bank of Atlanta, junior IT roles |
| **Ansible Developer (junior)** | $65-80K | Below: Senior Ansible engineers $110-140K |
| **DevOps Engineer I (no experience)** | $70-90K | Levels.fyi: Entry-level DevOps in major metros |
| **Federal Reserve premium** | +10-15% | Central bank + government benefits + stability |
| **Atlanta/Minneapolis adjustment** | -5% vs NYC | Cost of living slightly lower; NYC +$5-10K |

**Estimated offer:** $70-85K base + Federal Reserve pension + benefits

**Fed benefits are strong:** FERS pension (government retirement), health insurance, stability, professional development budget. Not tradable for higher cash salary, but valuable.

**Against your target ($80K minimum):** This is **lower end of your target**. As new grad with tech chops, you could command $80-90K at a startup. Federal Reserve pays for stability, not upside.

### Verdict

**Comp: 2.5/5** — Fair for stability and benefits, below what you could get at Series A tech company.

---

## Block E: Red Flags & Wins

### 🚩 Red Flags

**Red Flag 1: Onsite requirement. Non-negotiable.** (HIGH IMPACT)
- "Onsite work is an essential function of this position."
- "You are required to be onsite according to the schedule set by your management."
- You're San Diego-based. This requires permanent relocation to Minneapolis/Atlanta/Kansas City. Not a deal-breaker (you're willing), but it's friction and cost.
- **Cost estimate:** Moving + COL adjustment ≈ $5-10K + higher housing costs. Not offset by comp.

**Red Flag 2: Tech stack mismatch. No Ansible/Splunk/Dynatrace on resume.** (MEDIUM IMPACT)
- This isn't a dealbreaker per your preferences (not legacy tech), but it IS unfamiliar territory.
- You're betting on fast learning. That's worked before, but ops/infra is harder to learn than frontend/ML (longer feedback loops, production risk).
- If they expect someone productive in month 1, you'll disappoint.

**Red Flag 3: Federal Reserve = bureaucracy & process-heavy.** (MEDIUM IMPACT)
- Central bank. Regulations, compliance, change management slow.
- You thrive in "fast iteration" environments (FlipperZillow 24h, PatentIQ 4-month sprint).
- Fed probably has architecture reviews, security sign-offs, deployment windows. Your learning velocity may be wasted.

**Red Flag 4: Automation team, not platform/product team.** (LOW-MEDIUM IMPACT)
- You're a product-oriented engineer (you've shipped to users: PatentIQ, Groundwork, Simplerfy).
- This role is internal ops. Impact is less visible. Less exciting than "democratize patent research" or "real-time bookstore inventory."
- Long-term: ops experience is valuable, but short-term: may feel invisible.

**Red Flag 5: Hybrid schedule enforcement.** (LOW)
- "Must be able to work a hybrid schedule on-site."
- Once/week in office is fine. But "according to the schedule set by your management" = management can change it.
- Risk: post-hire, manager increases onsite to 4-5 days/week.

### ✅ Wins (Few)

**Win 1: Explicit junior pathway.** (MEDIUM)
- JD is clear: 0-2 years for this level. You fit exactly.
- No ambiguity about "we're hiring senior, actually."
- Low bar to clear for initial interviews.

**Win 2: Federal Reserve name + stability.** (LOW-MEDIUM)
- Strong brand. Prestigious employer. No startup risk.
- Pension + health is genuinely valuable (worth ~$15K/year in benefits).
- Good for resume.

**Win 3: Learning opportunity (if real).** (LOW)
- Infrastructure automation is a transferable skill (DevOps is in-demand).
- Ansible, Splunk, Dynatrace are all industry-standard tools.
- If they mentor well, you could own these by end of Q3.
- BUT: Will they actually mentor, or just throw you at a codebase?

**Win 4: Payments domain prestige.** (LOW)
- Federal Reserve payments system (Fedwire, FedACH, FedNow) is critical infrastructure.
- Building automations for this is high-stakes, high-responsibility work.
- Looks good on resume: "Automated operational processes for Federal Reserve Financial Services."

### Summary

**Wins are real but modest. Red flags outweigh wins.**

- Onsite + relocation cost.
- Tech mismatch (Ansible/Splunk not on resume).
- Bureaucratic environment vs. your preference for fast iteration.
- Internal ops work vs. external product visibility.
- Below your comp target.

This is a **"safe but boring"** option. Good safety net, weak upside.

---

## Block F: Interview Prep (Conditional)

Score is 2.1, below 3.0. Skip interview prep. But if you decide to apply anyway (Federal Reserve name is valuable), here are the stories you'd prepare:

### Story 1: Learning Unfamiliar Stacks Fast
**Applied to:** Ansible/Splunk/Dynatrace learning curve

**Situation:** FlipperZillow 24-hour hackathon. Had to build AI-powered 3D house tours on an AMD cloud platform I'd never used before.

**Task:** Integrate DepthAnythingV2, DFormerV2, SAM3D, and Claude API to generate real estate tours—zero prior experience with any of these models or AMD ROCm.

**Action:**
- Spent first 3 hours just getting the GPU environment working (ROCm vs. CUDA toolchain differences).
- Read Hugging Face documentation for each model architecture (not the papers, the actual API).
- Wrote basic inference scripts for each model independently, then chained them.
- Hit blocker: SAM3D broke on ROCm. Spent 30 minutes debugging, then pivoted to Nvidia cloud with CUDA.
- Shipped end-to-end: property images → depth maps → semantic segmentation → 3D point clouds → Claude narration.

**Result:** Deployed working 3D house tours with professional AI narration in under 24 hours. Product is live.

**Reflection:** Speed matters more than deep understanding. I read docs, not papers. I tested locally, failed fast, pivoted. That's how I'd approach Ansible and Splunk—get the basics working, then iterate.

**Why this works for Fed:** Shows you won't freeze when you don't know something. You'll ship *something* in week 1, then improve it.

---

### Story 2: Performance Optimization Under Constraints
**Applied to:** Infrastructure automation = making systems more efficient

**Situation:** Mini-Stockfish neural network training. Dataset grew from 13M to 316M training examples. Original pipeline loaded all data into RAM, which broke on the larger dataset.

**Task:** Redesign data pipeline to handle 316M examples without OOM errors.

**Action:**
- Identified bottleneck: `torch.load()` reading entire dataset into memory upfront.
- Switched to PyTorch DataLoaders with memory-mapped files and async batch loading.
- Profiled: verified new pipeline sustained 8-10x throughput without hitting memory ceiling.
- Trained competitive NNUE on full 316M example set.

**Result:** Scaled training 24x without rewriting the core ML code. Same neural network, better plumbing.

**Reflection:** Good infrastructure (data pipeline) multiplies the impact of good code (the model). That's what automation does—good ops multiplies product reliability.

**Why this works for Fed:** Shows you think in terms of scaling and efficiency. Automation is exactly this: multiply system reliability without multiplying human effort.

---

### Story 3: Technical Leadership + Documentation
**Applied to:** "Maintaining automation documentation on standards, templates"

**Situation:** PatentIQ. 14-person team across 4-month accelerator. As lead architect, I had to set standards for code quality, API design, and database schema.

**Task:** Set up team structure so different engineers (backend, frontend, data scientist) could work in parallel without colliding.

**Action:**
- Created API contract document (request/response schemas) before anyone wrote code.
- Set up database schema review process (all migrations reviewed by me before merge).
- Documented backend patterns: "When to use FastAPI routes vs. background jobs," "When to query Postgres directly vs. pgvector semantic search."
- These docs were living—updated every week as we learned what worked.

**Result:** Team shipped without major rework. Dependencies were clear. Onboarding new engineers took 1 day instead of 1 week.

**Reflection:** Good documentation is infrastructure. It's less visible than code, but multiplies team velocity.

**Why this works for Fed:** You understand that ops documentation is not busywork—it's the foundation of reliable systems.

---

## Final Recommendation

**Score: 2.1/5** — Do not apply unless:
1. You're specifically interested in Federal Reserve (unlikely).
2. You're very risk-averse and value stability + pension over growth.
3. You're willing to relocate to Minneapolis/Atlanta permanently.
4. You want infrastructure experience as a career pivot (it's not).

**Better options:** Target Series A-B startups in San Diego or remote-first. You'll find:
- Modern tech stacks (FastAPI, React, PostgreSQL—not Ansible).
- Faster iteration (weeks, not quarters).
- Higher comp ($90-120K for your level).
- Remote or flexible onsite.
- More visible impact.

**Why Federal Reserve scores low:**
- 🚩 Onsite + relocation (cost + friction)
- 🚩 Tech mismatch (not a dealbreaker, but clear gap)
- 🚩 Bureaucratic environment (misaligned with your learning velocity)
- 🚩 Below comp target ($70-85K vs. $80K minimum)
- ✅ Stability, pension, prestige, explicit junior pathway

**This is a "safety school" — fine if you strike out elsewhere, not your first choice.**

If you do decide to apply:
- Emphasize learning velocity (FlipperZillow story).
- Offer to take Ansible/Splunk online course before start date.
- Negotiate onsite timing (can we do hybrid for first 3 months?).
- Confirm 6-month review with clear level/comp adjustments.

---

## CSV Output

```csv
Company,Role,Website Found,Score,Notes,Resume Used
Federal Reserve Bank of Atlanta,Financial Services Software Engineer I,Indeed / Workday,2.1/5,Onsite Minneapolis/Atlanta required. Ansible/Splunk gap. Low comp. Bureaucratic environment. Safety option only.,SWE (Full-Stack)
```

---

**Report Date:** 2026-05-09  
**Evaluator:** career-ops system  
**Status:** Evaluated (not recommended)
