# SandDisk: System Product Engineer (New or Recent Graduate)

**URL:** https://jobs.smartrecruiters.com/Sandisk/744000131987189?utm_source=Simplify&ref=Simplify

**Date Evaluated:** 2026-06-12

**Evaluation:** 4.1/5 — **Apply. Strong technical fit with AI-forward infrastructure focus.**

---

## Overview

SandDisk is seeking a System Product Engineer to build AI-native validation and test infrastructure for memory/storage systems. Role spans AI workload modeling, QEMU-based simulation, Python/C++ infrastructure, and data pipeline development. Small team, high impact, opportunity to shape test development culture.

---

## Scoring Breakdown

### Match with CV: 4.2/5

**Strong matches:**
- **PatentIQ (FastAPI + pgvector semantic search)** directly transfers: Python infrastructure, data pipelines, large-scale system design
- **Mini-Stockfish (NNUE neural network on 316M examples)** shows: Large-scale data handling, batch processing, inference optimization, performance thinking
- **RedShift (adversarial LLM evaluation)** demonstrates: Multi-model evaluation frameworks, batch evaluation infrastructure, AI system testing
- **TriCore9 (custom CPU with pipeline + ISA)** shows: System architecture thinking, simulation modeling (similar to QEMU work), low-level design

**Moderate matches:**
- **FlipperZillow (GPU inference pipelines)**: GPU-accelerated workload execution, multi-stage model integration, performance profiling
- **HB100 Radar (DSP + signal processing)**: Real-time data collection, filtering algorithms, system correlation (radar→memory subsystems analogy)
- **Groundwork Books (caching + performance)**: Performance optimization, systems thinking (applicable to memory behavior analysis)

**Gaps:**
- No direct QEMU or hardware simulation tool experience (TriCore9 used Quartus/ModelSim, not QEMU)
- No prior system test/validation framework work (but infrastructure/automation experience is strong)
- Memory workload analysis is domain-new (but AI workload analysis directly transfers)

**Assessment:** Daris can ship the Python/C++ infrastructure on day one. AI workload modeling and system correlation require domain learning, but his RedShift + Mini-Stockfish background shows the right mental model for "understand behavior → extract patterns → build automated evaluation."

---

### North Star Alignment: 3.8/5

This role bridges three of Daris's archetypes:

**AI/ML Engineer (4.0 fit):**
- AI workload modeling and characterization (neural network inference patterns, memory access traces)
- Adversarial evaluation mindset from RedShift transfers directly
- Data pipeline building and ML pattern detection

**Full-Stack Software Engineer (4.0 fit):**
- Python/C++ infrastructure development (primary skill)
- Automation framework design and execution
- Spec-to-code pipelines using AI (similar to Simplerfy's auto-resume generation)

**Hardware/Embedded Engineer (3.5 fit):**
- System-level thinking, architecture understanding (TriCore9 precedent)
- Simulation environments (QEMU is lighter-weight than ModelSim, but same discipline)
- Performance correlation across subsystems (analog to radar signal→location mapping)

**Why 3.8 and not 4.0?**
- Not a pure AI/ML role (heavy infrastructure/testing focus)
- Not a pure hardware role (system simulation, not FPGA design)
- Hybrid positioning means it's a "best fit" across multiple strengths, not exceptional in one

---

### Compensation: 4.1/5

- **Base salary:** $99,852 - $165,393 (solid for new grad; target is $80K+)
- **Midpoint:** ~$132.6K (excellent)
- **STI (Short-Term Incentive):** Company + individual performance bonus
- **LTI (Long-Term Incentive):** Restricted Stock Units (RSUs) or cash (if eligible; unclear for new grad roles)
- **Benefits:** Comprehensive (medical/dental/vision, 401k, tuition reimbursement, ESPP, paid leave)

**Assessment:** Top of market for new grad roles. Western Digital is cash-strong, so STI payout is likely reliable. RSU eligibility is unclear but possible given new grad targeting.

---

### Cultural Signals: 4.0/5

**Positive:**
- Explicit "New or Recent Graduate" targeting shows realistic leveling expectations
- "Build foundational infrastructure" suggests autonomy and ownership (not busywork)
- "Small team, high impact" matches Daris's preference for breadth and visibility
- "Shape how system test development is done" = agency to influence culture
- AI-native validation is forward-thinking for a legacy memory company (not stuck in old practices)
- Milpitas location is relocation-friendly (Daris willing to relocate)

**Concerns:**
- SandDisk/Western Digital is a large, established corporation (not startup pace)
- System test/validation is critical but less customer-facing than product engineering
- Memory systems domain is specialized (requires ramp-up on memory hierarchies, storage protocols)
- "Senior/Staff" in role description is confusing given "new graduate" targeting (may be vestigial language)

**Assessment:** Strong cultural fit on autonomy and impact. Concerns about corporate pace are real but not dealbreakers — the "small team" framing suggests they've insulated themselves from org bloat. AI-native infrastructure is cutting-edge work, not legacy support.

---

### Red Flags: -0.3

- **Corporate pace:** Decisions in large companies move slower. Not a deal-breaker if team is agile.
- **Domain learning curve:** Memory workload characterization requires ramp-up. Mitigated by PatentIQ/Mini-Stockfish precedent.
- **Test/validation vs. product:** Some engineers find test work less fulfilling. Mitigated by "shape development" messaging.

Minor deductions; no deal-breakers.

---

## Archetype Framing (By Role)

**If pitching as AI/ML Engineer:**
- Frame PatentIQ + Mini-Stockfish + RedShift as evidence of AI infrastructure thinking
- Emphasize: "AI workload modeling is inference optimization at system scale"
- Proof: 316M-example training pipeline, multi-model evaluation frameworks

**If pitching as Full-Stack Software Engineer:**
- Lead with PatentIQ + Python + automation
- Emphasize: "End-to-end infrastructure ownership (spec → code → validation)"
- Proof: Built FastAPI backend, caching systems, real-time pipelines

**If pitching as Hardware/Embedded Engineer:**
- Lead with TriCore9 + HB100 Radar
- Emphasize: "System-level thinking (architecture → performance → correlation)"
- Proof: Custom CPU design, DSP/signal processing, real-time data analysis

**Recommended framing:** Lead with Full-Stack Software Engineer (Python/C++ infrastructure) + AI workload modeling skills. TriCore9 as supporting evidence of system design thinking.

---

## Proof Points to Highlight in Application

1. **PatentIQ MVP (lead architect + contributor + team lead)**
   - End-to-end ownership across full stack
   - 14-member team coordination
   - Shipped in 6 weeks

2. **Mini-Stockfish (316M-example neural network)**
   - Large-scale data pipeline design
   - Batch processing and streaming
   - Performance optimization (77% latency reduction)

3. **RedShift (adversarial LLM evaluation)**
   - Multi-model evaluation framework
   - Batch infrastructure for testing
   - PyTorch DataLoaders for large-scale evaluation

4. **TriCore9 (custom CPU with RISC architecture)**
   - System-level thinking
   - Simulation and validation mindset
   - ISA design and implementation

5. **FlipperZillow (24-hour learning)**
   - GPU-accelerated inference pipeline
   - Multi-stage model integration
   - Fast domain learning under pressure

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| No QEMU experience | Simulator tool is learnable; TriCore9 shows architectural thinking |
| No hardware test/validation background | Infrastructure/automation skills transfer; domain knowledge comes from team |
| Large company culture | Team explicitly frames as "small team, high impact" |
| Memory domain unfamiliar | PatentIQ required learning large datasets; similar learning curve |
| May want more product-facing work later | Frame this as 1-2 year opportunity to build tools that enable products |

---

## Interview Prep Angles

**"Why this role?"**
- Building infrastructure that shapes how engineers validate systems is more impactful than a single product feature
- AI-native test infrastructure is cutting-edge work in the memory industry
- Opportunity to influence a mature company's engineering culture

**"Why you?"**
- I've built Python + C++ infrastructure end-to-end (PatentIQ, Mini-Stockfish)
- I think about system behavior and performance correlation (TriCore9, HB100 Radar, Groundwork Books caching)
- I learn new domains quickly and work cross-functionally

**"What's your weakness?"**
- I haven't done hardware validation or QEMU before, but I've done similar simulation work (TriCore9 with ModelSim/Quartus). I learn tools quickly when I understand the underlying concepts.
- I overcommit (as mentioned in my profile), but I'm learning to time-box and pick what matters. This role appeals because it's singular focus — infrastructure — not scattered across multiple projects.

---

## Recommendation

**APPLY.** Strong technical fit across multiple dimensions. Compensation is solid, cultural signals are positive, and this is forward-thinking work in an established company. Relocation to Milpitas is manageable.

Priority: Tier 2 (after NVIDIA, Counsel Health, Anthropic roles, but strong secondary option).

---

## Next Steps

1. Prepare cover letter emphasizing infrastructure + AI + learning velocity
2. Highlight PatentIQ as primary proof point (end-to-end ownership + team impact)
3. If phone screen, be ready to discuss system-level thinking (why TriCore9 matters for this role)
4. Before final interview, research SandDisk memory roadmap and current test infrastructure challenges
