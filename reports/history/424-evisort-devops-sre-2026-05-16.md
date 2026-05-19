# Workday (Evisort AI) — Software Development Engineer, DevOps/SRE

**URL:** https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/USA-GA-Atlanta/Software-Engineer_JR-0106716

**Score: 3.9/5** — Good stretch fit if infrastructure interests you. Evisort is product-focused AI/ML company. Role requires 5+ years DevOps but looks for strong engineering fundamentals.

---

## Match with CV (4.0/5)

**Strengths:**
- **Multi-stage distributed pipelines.** FlipperZillow: designed GPU pipeline across AMD ROCm + Nvidia CUDA environments. That's real multi-cloud orchestration under time pressure. You understand cascade design, failure modes, and cloud vendor navigation.
- **Python + Bash scripting.** Core skill across all projects. Can automate and build tooling.
- **AWS familiarity.** PatentIQ hosted on EC2. You've deployed to cloud, understand IAM/security basics, worked with cloud provider SDKs.
- **Docker understanding.** You've used Docker in development and deployment contexts (PatentIQ deployment pipeline, GPU pipeline setup).
- **Performance optimization.** "Trace performance bottlenecks and identify optimizations" — Mini-Stockfish (77.2% latency reduction), Groundwork (90% API latency reduction). You have this skill.
- **Distributed systems thinking.** PatentIQ's semantic search + caching layer. You understand high-traffic patterns, caching strategies, query optimization at scale.

**Gaps:**
- **5+ years DevOps / Kubernetes at scale.** You're a new grad. You haven't managed EKS clusters in production or architected multi-region Kubernetes deployments. This is the 800-lb gorilla.
- **Infrastructure as Code (Terraform, Ansible).** Limited evidence. You've written deployment scripts but not IaC frameworks at scale.
- **Observability / monitoring.** JD requires "full-stack monitoring using Prometheus, Grafana, and ELK." You've debugged systems, but no production monitoring architecture design.
- **Security-first design.** "Security-first approach to designing IaC and microservice pipelines." You haven't designed security-first infrastructure from the ground up.

**Why this is less bad than JR-0105395:**
- Evisort is a *product AI company* (contract intelligence, document automation). That's closer to your archetype (ship products).
- JD emphasizes *software development* skills ("Proven ability to build automation tooling and services in Go, Python, Bash, or TypeScript") + infrastructure, not pure DevOps.
- Role is in *Atlanta, flex* — not federal, not as constrained.

---

## North Star Alignment (4.1/5)

**Archetype:** DevOps + Full-Stack SWE hybrid.

**Fit:** Evisort's mission (making contract management intelligent) aligns with your "end-to-end product" focus. The team values "automation of manual processes and reducing operational overhead" — that's builder-oriented.

This role is more about building *tools* for developers than pure infrastructure gating. You'd design systems that enable other engineers to move fast. That resonates with you.

---

## Compensation (4.2/5)

**Primary:** $130,400-$195,600 (Atlanta, GA)
**Additional US locations:** $123,900-$222,000

Slightly lower floor than Workday Federal ($130.4K vs $137K), but still excellent for a new grad. Mid-range ~$160K.

---

## Cultural Signals (4.2/5)

**Strengths:**
- **Product-focused.** "Reimagining legal documents" — goal is business impact, not compliance-first.
- **Scaling story.** "Maintaining highly available web and backend systems that serve millions of users, and 1000's of requests per second." Real scale challenges. You'd be shipping impact.
- **Collaboration emphasis.** "Closely collaborating with Developers" — engineers valued, cross-functional culture.
- **Flex in Atlanta.** Easier than federal DMV onsite. Willing to relocate = match.

**Cautions:**
- **5+ years filter again.** Evisort is under Workday now but operates independently. Their JD also has "5+ years DevOps experience" as basic qualification. You'll likely get filtered.
- **Mature platform.** Evisort is a grown product (Series C+ acquired by Workday). Not a startup hustle, but not as chaotic as PatentIQ either.

---

## Red Flags (3.5/5)

1. **5+ years DevOps experience is a stated requirement.** You're a new grad. However, Evisort's JD is slightly more engineering-focused than pure DevOps-focused. You might have a shot if you frame it as "I've shipped distributed systems, debugged at scale, optimized performance, and architected pipelines."

2. **Kubernetes at scale is implied.** JD mentions "managing EKS clusters" and "Kubernetes ecosystem" as core. You'd be learning on the job.

3. **Operational overhead.** This is an infrastructure + on-call team. You'd be on the hook for system stability, not just shipping features. Different mental model than PatentIQ.

---

## Recommendation (3.9/5 = APPLY WITH CAVEATS)

**Apply, but with low expectations on the initial screen.**

**Why:** Evisort is a better culture fit than Workday Federal (product company, not government contractor). If you can somehow get past the 5+ years filter, this role could be a great stretch. But that's a big "if."

**If you apply:**
- **Lead with:** "I've architected and deployed multi-stage distributed systems (FlipperZillow GPU pipeline across AMD + Nvidia clouds), optimized performance at critical paths (Mini-Stockfish: 77.2% latency, Groundwork: 90% API latency), and shipped production systems at scale (PatentIQ to millions of patent queries)."
- **Address years gap:** "I'm a recent grad with focused experience in high-scale systems. I've debugged at the infrastructure level, optimized queries and caches, and shipped products that serve real users. I learn fast and take ownership end-to-end."
- **Learn Kubernetes basics.** If they call, you'll need to talk EKS, service mesh, observability. Spend 2 weeks on this before phone screen.

**Alternative:** If DevOps is your interest, apply to this role AND a few earlier-stage companies' DevOps roles (Series A/B startups have more flexibility on years if you show depth).

---

## Next Steps

1. **If infrastructure is interesting to you:** Apply. Expect to be filtered on experience, but worth the shot.
2. **If unsure on infrastructure vs. product:** Clarify your interest before applying. Infrastructure is a different skill tree than product engineering.
3. **Skill ramp:** Kubernetes basics (2-3 weeks), Terraform fundamentals (1 week), Prometheus/Grafana monitoring (1 week). Then apply.
