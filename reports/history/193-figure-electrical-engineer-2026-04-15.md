# Evaluation Report: Figure AI — Electrical Engineer (All Levels)

**Candidate:** Daris Chen  
**URL:** https://job-boards.greenhouse.io/figureai/jobs/4313470006  
**Date Evaluated:** 2026-04-15  
**Global Score:** 3.4/5

---

## Role Summary

**Company:** Figure AI (Humanoid Robotics)  
**Title:** Electrical Engineer (All Levels)  
**Location:** San Jose, CA  
**Level:** Junior to Mid (All Levels)  
**On-site requirement:** 5 days/week (co-located)  
**Compensation:** $120,000–$250,000 USD base (wide range, varies by experience)  
**Archetype:** Hardware / Embedded / FPGA Engineer

---

## Block A: Match with CV

**Alignment:** 3.5/5

Daris has relevant hardware experience, but there are meaningful gaps between his CV and this role's core requirements.

**What matches:**

- **HB100 Radar project.** Op-amp cascades, 1092x gain amplification, Butterworth filters, FFT, MUSIC algorithms, Kalman filtering, spatial tracking. This is exactly the analog/RF signal conditioning this role needs.
- **TriCore9 CPU.** SystemVerilog, digital logic, pipeline design, timing analysis. Shows understanding of hardware design flow.
- **16-bit Adder.** Digital logic optimization, corner-case validation.
- **Embedded systems.** ESP32-S3, Raspberry Pi firmware integration.
- **Signal processing.** DSP fundamentals (FFT, filtering) that translate to power/control electronics.

**What doesn't match:**

- **No PCBA design/layout experience.** Role requires "proficiency in PCBA design, building, and testing" + "expert-level Altium skills." Daris has never done PCB design, layout, or manufacturing validation.
- **No Altium.** Daris's hardware work is either high-level signals (HB100 analysis) or digital logic (FPGA). No commercial PCB tool experience.
- **No power electronics background.** Role emphasizes "power management" circuits. HB100 has analog signal conditioning, but not power system design (voltage regulation, current limiting, thermal management).
- **No high-speed digital design.** Role lists "PCIe, USB, Ethernet" as preferred. Daris has digital logic theory but no production high-speed signaling.
- **No form-factor optimization.** "Small-form-factor boards (HDI/flex)" is production manufacturing knowledge, not schoolwork.
- **2 years minimum experience required.** Daris has strong internship experience but no full-time hardware engineering role.

**Timeline.** HB100 (Feb 2025–Mar 2026, ~1 year), TriCore9 (Sep 2025–Dec 2025, ~4 months). Total hardcore hardware. ~15 months, mostly academic + research context, not production.

---

## Block B: North Star Alignment

**Alignment:** 3.0/5

Figure is explicitly in Daris's stated archetype. Hardware / Embedded / FPGA Engineer. So this should rank higher. But there's a domain mismatch.

**Why it partially fits:**
- Role is hardware engineering (matches stated target archetype)
- Involves embedded systems, DSP, and signal processing
- Robots require understanding physics to hardware trade-offs (Daris's superpower)

**Why it partially doesn't:**
- Daris's hardware depth is in signal processing, digital logic, and analog RF. Figure's role is in power electronics, compute hardware, and high-speed digital.
- These are adjacent fields with different design toolchains and trade-offs.
- Daris's strength is "work across every abstraction level" but his hardware work has been low-level signals and ISA/digital logic, not power/compute platform design.

**Ramp risk.** Daris would be learning PCBA design, Altium, power management, and manufacturing constraints from scratch. This is a real ramp, not a "24-hour learning" story.

---

## Block C: Compensation

**Alignment:** 2.5/5

**Posted.** $120,000–$250,000 USD base (huge range, "varies by several individual factors")

**What this range means:**
- $120K–$150K. Junior hardware engineer, 0–1 year experience, no PCB shipping experience
- $150K–$200K. Mid-level engineer, 2–4 years, shipped 2–3 products
- $200K–$250K. Senior engineer, 5+ years, technical leadership

**Daris context:**
- New grad (March 2026) with hardware experience but no production PCB shipping
- Will likely slot at $130K–$160K range given.
  - New grad (can't claim senior rate)
  - Strong signal processing knowledge (HB100)
  - No PCBA/manufacturing experience
  - Robotics startup is hot market (might push higher)

**Market comparison:**
- New grad EE at FAANG (analog/RF focus). $160K–$190K base
- Robotics/hardware startup EE (junior). $120K–$150K base
- Figure's range is reasonable, but Daris would start at the lower end

**Assessment.** Likely $140K–$150K offer for Daris. Below his target ($80K+ as stated in profile, but that was for software engineer roles). Hardware pays slightly less than software at same level.

---

## Block D: Cultural Signals

**Alignment:** 3.5/5

**Positive signals:**
- Legendary founder (Brett Adcock, known in robotics circles)
- Clear, ambitious mission (humanoid robots for warehouse work, household tasks)
- Well-funded ($39B valuation, Series D+)
- Recent shipping progress (Figure 02 demos in early 2026. laundry folding, washing machine loading, package sorting)
- Diverse team ("equal opportunity employer, committed to diversity")
- Cutting-edge tech (robotics + AI)

**Concerns:**
- **5 days/week in-office (San Jose).** This is hardcore co-location. No flexibility. Daris is in San Diego (2-hour commute) and stated "willing to relocate," but this is a real commitment.
- **Startup pressure.** Figure is in growth mode (shipping next-gen humanoids). Team is likely working hard (hardware engineering at startups = long hours).
- **Manufacturing constraints.** Unlike software, hardware cycles are measured in months, not weeks. If Daris expects fast iteration, he'll be frustrated.
- **Team composition.** Likely 60+% mechanical engineers, 30% EE, 10% software. Daris is used to software-heavy teams (PatentIQ, Groundwork). Different culture.

**Culture fit.** Good mission fit, but the pace and co-location commitment is real. This is not a "work from home, flexible hours" startup.

---

## Block E: Red Flags

**Severity:** Medium-High

1. **Skill gap on day 1 (High).** Daris doesn't know Altium, PCBA design, or power electronics. First month is "unproductive" learning, not shipping. Robotics deadlines are tight (100k units by 2029 is their goal). There's ramp risk.

2. **Toolchain investment (Medium).** Daris will need to learn.
   - Altium Designer (expensive tool, company provides license)
   - PCB manufacturing constraints (blind vias, impedance matching, thermal)
   - Analog circuit design for power systems (voltage regulators, protection circuits)
   - This is 2–3 months to ship something useful, not 2–3 weeks.

3. **Full-time co-location (Medium).** Daris is new grad, should consider living situation. San Jose is expensive. If he relocates from San Diego, this is a 1+ year commitment.

4. **Hardware shipping vs. software mindset (Medium).** In software, you ship, iterate, ship. In hardware, mistakes cost $10K in NRE (non-recurring engineering) and 6 weeks of lead time. Daris's "pragmatism" and "cut scope to ship" mentality may clash with hardware reality.

5. **Team size and impact visibility (Low).** Figure is 200+. Daris is used to 14-person PatentIQ team where he sees direct impact. At Figure, he's one of 10–15 EEs on a subsystem. Impact is less visible.

---

## Block F: Global Score Calculation

| Dimension | Score | Weight | Contribution |
|-----------|-------|--------|--------------|
| Match with CV | 3.5/5 | 25% | 0.875 |
| North Star alignment | 3.0/5 | 25% | 0.750 |
| Compensation | 2.5/5 | 15% | 0.375 |
| Cultural signals | 3.5/5 | 20% | 0.700 |
| Red flags | 2.5/5 | 15% | 0.375 |
| **Global** | **3.4/5** | — | **3.075** |

---

## Recommendation

**Verdict: APPLY IF (score 3.4/5)**

This role is borderline. Daris can succeed here, but it's not the natural fit his CV might suggest.

**Conditions to apply:**
1. **Comfort with hardware ramp.** Daris should ask during interview. "I haven't used Altium before. What's the onboarding plan? When do you expect me to ship first PCB layout?"
2. **Realistic timeline.** Don't expect to ship meaningful designs in first 90 days. Plan for 4–6 months before first tapeout.
3. **Relocate or commute plan.** San Jose co-location is non-negotiable. Daris should confirm housing situation.
4. **Confirm team structure.** Ask who owns power electronics, high-speed digital, and analog. Where does Daris's expertise (DSP, signal processing) fit?

**If Daris applies:**
- Lead with HB100 project (shows analog RF depth)
- Show eagerness to learn new tools (FlipperZillow story. "Learned ROCm + 5 new frameworks in 24 hours")
- Ask about mentorship (robotics is a different domain. good mentorship helps)
- Negotiate for ramp time. "I'm a fast learner. Give me a small, self-contained project for first 6 weeks to get Altium skills up."

**Alternative.** If Daris wants hardware without the toolchain ramp, consider roles at companies like Qualcomm, Intel, or AMD (DSP/signal processing focus). Figure is a robotics-first company, which makes sense, but Daris's skills are better-suited to signal processing roles.

**Skip condition.** If Daris is unwilling to relocate to San Jose full-time or uncomfortable learning PCB design, this role is a poor fit.

---

## PDF Generated

✅ PDF generated. `output/193-figure-electrical-engineer-daris-chen-2026-04-15.pdf`
