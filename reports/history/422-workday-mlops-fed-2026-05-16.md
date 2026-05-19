# Workday — SDE ML Ops (US Federal)

**URL:** https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/USAVAReston/Software-Development-Engineer---ML-Ops--US-Federal-_JR-0105395

**Score: 3.8/5** — Good foundational match but requires 3+ years dedicated DevOps experience which is a gap. Workday is strong; role has depth.

---

## Match with CV (3.8/5)

**Strengths:**
- **Docker/Kubernetes/microservices.** PatentIQ relied on Vercel + EC2 + Supabase with Auth0 (distributed auth). You understand cloud orchestration concepts.
- **Python proficiency.** Core skill across all projects; ML Runtime team uses Python. You've shipped Python in production systems.
- **Distributed systems thinking.** FlipperZillow GPU pipeline across multiple cloud environments (AMD ROCm + Nvidia CUDA), managing complex async workflows. That's multi-stage orchestration.
- **Infrastructure as code.** Limited evidence, but you designed scalable backends (PatentIQ, Groundwork) with thought toward deployment and scaling.

**Gaps:**
- **3+ years dedicated DevOps.** You have ~1 year backend/infrastructure experience (PatentIQ lead engineer). The JD specifically requires "3 or more years of DevOps experience including Infrastructure automation, building CI/CD pipelines." You're a new grad with strong backend chops, not a DevOps specialist.
- **Kubernetes/Docker at scale.** No production Kubernetes deployment. You understand the concepts (the JD mentions orchestrating ML Runtime inference at scale).
- **CI/CD pipeline design.** Limited evidence. You've used GitHub Actions and Docker, but not architected enterprise-grade pipelines.

---

## North Star Alignment (3.8/5)

**Archetype fit:** Full-Stack SWE with infrastructure inclination.

You're strongest as an end-to-end builder (PatentIQ: architect + contributor + team lead). This role is infrastructure-heavy and team-light, which is sideways from your superpower. You'd excel at building ML Runtime developer tools and automation, but you'd be underleveled as a pure DevOps engineer.

**Red flag:** The role also mentions "on-call support on a rotational basis." You've shipped products under deadline, but on-call operational work is different from shipping features. This could be a culture fit misalignment if you're looking for product velocity over operational rigor.

---

## Compensation (4.5/5)

**Primary:** $137,000-$205,400 (Reston, VA)
**Additional US locations:** $123,900-$222,000

Strong for a new grad. $137K floor is above market for recent grads (typically $100-130K). Mid-range $170-180K is excellent.

---

## Cultural Signals (4.0/5)

**Strengths:**
- Workday Government (Fortune 500 subsidiary) with clear mission (federal modernization).
- "Integrity, empathy, shared enthusiasm" culture messaging. Team emphasis on collaboration and long-term investment.
- Onsite in DC/MD/VA (DMV) with 50% flex (50% in-office/field required per quarter). You're willing to relocate anywhere.

**Cautions:**
- **Federal security clearance required.** TS/SCI w/CI Poly preferred. As a new grad, you'd need to qualify (US Citizen: yes. Criminal history: likely no issue). But clearance investigations take 3-6 months and add friction.
- **Onsite expectation.** Role is "Employees may be required to be on site at client locations in the DC, MD, and VA (DMV) area." Not fully remote. You relocate easily, so not a dealbreaker, but operationally heavier than Groundwork Books or PatentIQ.

---

## Red Flags (3.5/5)

1. **Experience mismatch.** JD explicitly asks for "3+ years DevOps." You're a new grad with 1 year backend experience. It's a junior/mid gap. Workday *might* hire for potential, but "3+ years" is usually a hard requirement in government contracts (FedRamp compliance often requires documented experience levels).

2. **Operational culture vs. product culture.** This team "focuses on outcomes that serve a larger mission" (federal agencies). The framing is mission-first, not innovation-first. If you're drawn to solving hard problems with novel approaches (your strength), government infrastructure can feel rigid.

3. **Kubernetes scope.** JD lists "orchestrating containers in production environments, including... Containers, Kubernetes, Service Mesh, ArgoCD and related tools." You'd need to self-teach these at pace.

---

## Recommendation (3.8/5 = APPLY IF STRATEGIC)

**Apply.** But this is a *reach* for you.

**Why:** Workday is a top-tier company. The role aligns with your "rapid learning" archetype (you learned ROCm + DepthAnythingV2 in 24 hours). If you're willing to invest 2-3 months learning Kubernetes/Terraform/ArgoCD deeply before or after offer, this could accelerate your infrastructure skills.

**If you apply:**
- **Lead with:** PatentIQ full-stack ownership (architect + primary contributor + team lead). Emphasize distributed systems thinking (FlipperZillow multi-cloud GPU pipeline). Highlight Python production code (FastAPI, Supabase queries, semantic search).
- **Address experience gap head-on:** "I'm a new grad with 1 year of backend/infrastructure experience. I learn fast (FlipperZillow case study: 4 frameworks in 24 hours). I understand distributed systems at a deep level (architected PatentIQ's semantic search + caching layer). I'm ready to go deep on Kubernetes and infrastructure tooling."
- **Don't oversell DevOps experience.** Be honest. Workday values integrity (culture statement). Overplaying DevOps years will hurt you in the screening.

**Alternative:** If DevOps is truly your path, this role might be better after 1-2 years of dedicated infrastructure work elsewhere (earlier, smaller companies that need DevOps at scale). Right now you're a full-stack engineer learning infrastructure.

---

## Next Steps (if interested)

1. **Validate interest.** Do you want to go deep on infrastructure (Kubernetes, Terraform, observability) or stay product-focused (shipping features)?
2. **If infrastructure is the move:** Apply to this role + 2-3 other DevOps/SRE roles at similar tiers (Stripe, Notion, Figma infrastructure teams). See who moves fastest past the experience filter.
3. **If product focus:** Skip this, apply to "Software Development Engineer (US Federal)" (JR-0105089) instead—that's a better product-engineering fit.
4. **Skill gap:** Spend 2-3 weeks on Kubernetes tutorial (Kelsey Hightower's "Kubernetes the Hard Way") + Terraform basics before applying if you go this route.
