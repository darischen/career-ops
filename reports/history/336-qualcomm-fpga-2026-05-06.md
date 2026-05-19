# Evaluation: Qualcomm — FPGA Design Engineer (Global CAD)

**Date:** 2026-05-06  
**URL:** https://www.qualcomm.com/careers/job/3087104  
**Score:** 2.5/5  
**Recommendation:** Do not apply. Significant experience gap (12 months FPGA/embedded vs 2+ years required). This role is targeting mid-level engineers with deep hardware focus. You're overqualified in some areas (full-stack, AI/ML) but underqualified in the specific domain this job requires.

---

## Role Summary

| Dimension | Details |
|-----------|---------|
| **Archetype** | Hardware / Embedded / FPGA Engineer (primary) |
| **Domain** | FPGA design + embedded Linux + protocol implementation |
| **Function** | Design custom emulation hardware, verify RTL, implement embedded drivers |
| **Seniority** | Mid-level (2+ years ASIC/FPGA design + verification) |
| **Location** | Not specified (assume San Diego or remote) |
| **Remote** | Unknown (CAD roles often remote-friendly) |
| **Team Size** | Not specified (likely 8-15 person CAD team) |
| **TL;DR** | Mid-level FPGA engineer role focused on custom emulation hardware design, SystemVerilog RTL, embedded Linux, protocol stacks (AXI, PCIe, Ethernet). High technical depth, low visibility outside Qualcomm. |

---

## Block A — Match with CV

| JD Requirement | CV Evidence | Match | Notes |
|---|---|---|---|
| 2+ years ASIC/FPGA design | TriCore9 (4 months, academic) + 16-bit Adder (3 months, academic) + HB100 (2 months, recent) = ~9 months total | ❌ 9 months vs 2 years | All FPGA experience is academic/hobby projects. No production ASIC/FPGA tape-outs. |
| System Verilog | TriCore9 (SystemVerilog CPU design with pipeline) | ✅ Yes | Strong SystemVerilog foundation. Designed 4-stage pipeline with hazard detection. |
| RTL/HDL design | TriCore9 (full HDL design, simulation, synthesis) | ✅ Solid | Understand RTL fundamentals. No large-scale RTL projects (10K+ lines). |
| FPGA tools (Xilinx, Intel/Altera) | Quartus Prime (TriCore9 synthesis), ModelSim (simulation) | ⚠️ Partial | Used Quartus, not Xilinx. CAD roles often require both. ModelSim is industry standard. |
| C++ + Python | Python (extensive), C++ (academic projects only) | ⚠️ Partial | Python strong. C++ limited to simple projects, not systems-level firmware. |
| Linux / Embedded Linux | ESP32 (firmware), Raspberry Pi (GPIO + DSP), minimal Linux exposure | ⚠️ Weak | Embedded systems experience (ESP32/RPi) is not the same as Linux kernel, device drivers, bootloaders. |
| ARM designs + ARM Assembly | Embedded C on ESP32/RPi, not explicit ARM architecture knowledge | ⚠️ Weak | ARM Assembly not mentioned. ARM architecture understanding is implicit but not proven. |
| Embedded Linux + Linux Device Drivers | No explicit Linux kernel or driver development mentioned | ❌ No | This is a core requirement. You have not written Linux device drivers. |
| Protocols (AXI, PCIe, I2C, LVDS, Ethernet) | I2C via ESP32 (HB100 radar), Ethernet not mentioned | ⚠️ Very weak | HB100 uses basic SPI/UART, not high-speed protocols. No PCIe, LVDS, or AXI experience. |
| Git + JIRA | Git extensive, JIRA not mentioned (used ClickUp, Jira mentioned in CV but not emphasized) | ✅ Yes | Git strong. JIRA is learnable. |

**Gaps & Mitigation:**

1. **Experience level (9 months vs 2 years ASIC/FPGA)** — MAJOR
   - Hard blocker? YES. FPGA design is skill-by-doing, not learned from books.
   - You're asking to enter a field where 2 years is the minimum. You have 9 months, and all academic.
   - Mitigation: This is not realistic. Qualcomm will screen you out in 30 seconds.

2. **Embedded Linux + Linux Device Drivers** — BLOCKER
   - Hard blocker? YES. Core job responsibility.
   - You have not written a single Linux device driver. This is not a "nice to have," it's the technical foundation.
   - Mitigation: No realistic path here without 6-12 months of prior experience elsewhere.

3. **Protocol implementation (AXI, PCIe, LVDS, Ethernet)** — BLOCKER
   - Hard blocker? YES. These are day-to-day work in this role.
   - You have basic I2C (HB100). You need AXI/PCIe/Ethernet.
   - Mitigation: Not realistic for this role.

4. **FPGA tools specificity (Xilinx, Intel FPGA)** — MEDIUM
   - Hard blocker? No, but relevant.
   - You know Quartus (Intel). Xilinx tools are similar but have workflows you don't know.
   - Mitigation: This is learnable in 2 weeks with good documentation.

5. **C++ systems programming** — MEDIUM
   - Hard blocker? No. You have Python, can pick up C++.
   - But this role expects C++ firmware in embedded Linux context, which is different from Python ML code.
   - Mitigation: Strong Python background means you understand systems thinking. C++ syntax is learnable.

---

## Block B — Level & Strategy

**Detected level in JD:** Mid-level (2+ years specified, focus on "custom emulation hardware design" and protocol implementation suggests mid-career engineer).

**Your natural level in Hardware / Embedded archetype:** Early Junior (9 months experience, all academic). You understand RTL fundamentals but lack production depth.

**Why this role is not a fit:**

This role is not "you're too junior but we could backfill." It's "you don't have the specific skill foundation this job requires." The difference:

- **QSWAT role (Job 1):** "You haven't shipped in React professionally, but you clearly know React." Easily backfilled.
- **FPGA role (Job 2):** "You haven't written Linux device drivers, AXI protocols, or worked with Xilinx tools." Much harder to backfill.

FPGA/embedded Linux is not a "learn on the job" skill at Qualcomm's scale. They need someone who can implement device drivers from day one. You need 12-24 months of prior embedded Linux experience (at a startup, or via internship) before this role is realistic.

**Recommendation:** Do not apply to this role. Instead:

1. **If you're interested in hardware,** apply to Qualcomm roles that match your level:
   - "FPGA / Embedded Systems Intern" (if available)
   - "RTL Design Engineer" (if emphasis is on digital logic, not embedded Linux)
   - "CAD/Verification Engineer" (if focused on simulation/testing, not implementation)

2. **Path to this role in 24 months:**
   - Take a 6-12 month embedded Linux internship or junior role (focus: Linux kernel modules, device drivers, bootloaders)
   - Contribute to open-source embedded projects (Linux kernel, U-Boot, barebox)
   - Then apply to Qualcomm FPGA/embedded roles at mid-level

3. **Alternative full-stack direction:**
   - You have AI/ML + full-stack web + some hardware. This is a unique profile.
   - Consider roles at Nvidia, Tesla, or Apple that bridge software + hardware (ML accelerator drivers, systems optimization)
   - Or stay in full-stack/AI track (higher near-term ROI than switching to embedded Linux mid-career)

---

## Block C — Comp & Demand

**JD Posted Range:** $115,600 - $173,400

**Market Research (as of May 2026):**
- Qualcomm CAD/FPGA typical range: $110K-$170K for mid-level (Levels.fyi, Blind, Glassdoor)
- San Diego market: +5-10% above national average
- Seniority cliff: Huge gap between junior and mid-level FPGA roles. Entry-level typically $85K-$100K.

**Score: N/A (not recommended for application)**

Even if you were qualified, the comp is excellent. But experience gap is too large.

---

## Block D — Red Flags & Wins

**Red Flags:**

1. **Significant experience gap** — BLOCKER
   - JD assumes 2+ years of production FPGA/embedded Linux work
   - You have 9 months, all academic
   - Screening process will remove you quickly

2. **Linux device drivers as core responsibility** — BLOCKER
   - This is not something you pick up on the job
   - You would be unproductive for 3-6 months while learning
   - Qualcomm's pace doesn't allow for that ramp time

3. **No production tape-out experience** — YELLOW FLAG
   - Have you shipped silicon to manufacturing? No.
   - This matters less for "software side" FPGA work, but it's relevant context.

4. **CAD team = small, highly specialized** — YELLOW FLAG
   - CAD roles are niche. If there are only 8-10 people in the group, they can't afford to backfill a junior.
   - They need someone productive from day one.

5. **Emulation hardware focus** — INFO
   - This is specialized even within FPGA (not typical ASIC design)
   - Requires deep understanding of simulation, testbenches, verification
   - You have no verification experience (TriCore9 simulation in ModelSim is not production-level verification)

**Wins:**

1. **SystemVerilog fundamentals are solid** — Positive signal for technical depth
   - If you were at mid-level, hiring manager would see "this person understands RTL at a systems level"
   - Current context: you know the language, not the domain

2. **Custom CPU design (TriCore9)** — Tangentially relevant
   - Shows you understand pipelines, hazard detection, ISA design
   - Hiring manager might see this and think "strong candidate for hardware"
   - BUT it doesn't replace "shipped 2 Linux device drivers in production"

**Recommendation:** This is a "SKIP" opportunity. Do not apply unless you want to spend 3-6 months unproductive while learning embedded Linux from scratch on Qualcomm's clock.

---

## Interview Prep (Not Recommended, But If You Apply Anyway)

If you ignore this advice and interview, here's what will happen:

**Technical screening:**
- "Tell us about your FPGA experience"
  - You: "I designed a custom 8-bit CPU (TriCore9) using SystemVerilog"
  - Them: "Cool. How many lines of RTL? How long did synthesis take? Did you verify behavior in simulation?"
  - You: "~500 lines RTL, synthesis was ~2 hours, verified in ModelSim with basic testbenches"
  - Them: "OK... and your embedded Linux experience?"
  - You: "Uh, I've used Raspberry Pi and ESP32 for hobby projects"
  - Them: "Have you written a Linux kernel module? A device driver?"
  - You: "No"
  - Them: "Thanks for your time. We're looking for someone with 2+ years production experience."
  - [Phone call ends]

**Timeline:** You will be screened out in first 10 minutes of technical call.

---

## Final Recommendation

**Score: 2.5/5 — Do not apply. Major experience gap.**

**Why not to apply:**
- FPGA/embedded Linux is a specialized domain requiring 2+ years hands-on experience
- You have 9 months, all academic, none in production context
- Core job responsibilities (Linux device drivers, AXI/PCIe protocols) are blockers, not nice-to-haves
- Qualcomm will identify the gap immediately and move on

**What to do instead:**
1. **If you love hardware,** apply to Qualcomm RTL/FPGA internships or junior roles that teach embedded Linux
2. **If you want to stay in full-stack/AI,** focus on Jobs 1, 3, 4 (all more realistic)
3. **If you're genuinely interested in embedded systems long-term,** spend 6-12 months doing embedded Linux work first (e.g., Linux kernel internship, device driver contribution to open-source)

**Hard truth:** This role requires a specific skill set you don't have. Applying anyway wastes Qualcomm's time and your energy. Your time is better spent on roles where you're actually competitive.

---

## Alternative Career Path (Hardware Focus)

If you want to pivot to hardware engineering:

1. **Short-term (next 6 months):**
   - Complete Job 1 (QSWAT) or Job 3/4 (full-stack/ML software roles)
   - Maintain TriCore9 and HB100 as portfolio pieces
   - Contribute to open-source FPGA projects (LiteX, Vex, OpenROAD)

2. **Medium-term (6-12 months):**
   - Apply for embedded Linux internship or junior role
   - Focus: Linux kernel modules, device drivers, bootloaders, ARM architecture
   - Build portfolio: "wrote driver for I2C sensor," "implemented bootloader for custom board," etc.

3. **Long-term (12-24 months):**
   - Now you're qualified for Qualcomm FPGA/CAD roles at mid-level
   - Or pivot to other hardware-software roles (Tesla autopilot, Nvidia driver, Apple silicon)

The path exists. But this specific role, right now, is not accessible.
