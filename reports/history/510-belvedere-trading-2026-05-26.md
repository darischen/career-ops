# Belvedere Trading — Software Engineer, Entry Level 2026

**URL:** https://jobs.lever.co/belvederetrading/f81a8965-5537-4a4b-aec6-c02dfa51815e

**Score:** 3.7/5 — Decent fit but not ideal for core strengths

**PDF:** ✅ Generated

---

## Quick Take

Belvedere Trading is a top-tier proprietary trading firm with excellent infrastructure and compensation ($140K base + discretionary bonus). The role is strong for performance-obsessed engineers who love low-latency systems and financial markets. Your breadth is a strength here, but the role itself is narrower than your archetype (emphasizes trading systems over product iteration). Recommend applying only if finance + performance engineering excites you.

---

## Match with CV

### Core Skills Alignment

| Skill | Your Depth | Role Fit | Notes |
|-------|-----------|---------|-------|
| C++/Java | Intermediate (chess engine, mini-Stockfish) | Core requirement | You have it but not production-grade systems experience |
| Low-latency optimization | Strong (77.2% chess latency reduction, Redis caching) | Core requirement | This is your actual superpower. Matches well. |
| System design | Good (PatentIQ architecture, caching strategies) | Strong fit | You understand trade-offs at scale |
| Performance profiling | Strong (CUDA optimization, algorithmic analysis) | Core requirement | Direct match |
| Testing & code standards | Intermediate (unit tests on PatentIQ/chess) | Required | OK but not highlighted in CV |
| Financial markets knowledge | None | Not required | They teach via BTU (Belvedere Trading University) |

### Proof Points

**What You Have:**
- Latency obsession. 77.2% improvement on chess eval (1.1ms → 0.25ms) directly translates to trading systems.
- Full-stack optimization mindset. Redis caching (90% latency reduction), query optimization, infrastructure decisions.
- Pragmatism under pressure (FlipperZillow pivots, cutting scope to ship).

**What You Lack:**
- Production C++ (you did hobby chess engine, not live systems).
- Financial markets domain knowledge (they'll train you, explicitly stated).
- Large-scale distributed systems (PatentIQ is 14-person team, not high-frequency trading infrastructure).

**Verdict:** Solid match on performance optimization. Weak match on production maturity and trading domain.

---

## North Star Alignment

**Archetype Detected:** Full-Stack Software Engineer (performance-obsessed variant)

**Your North Stars:**
- Full-Stack (✓ slight match) — you can do systems + algorithms, but Belvedere is more systems-focused
- AI/ML (✗ no match) — trading at Belvedere is mathematical + statistical, not AI
- Pragmatism valued (✓ strong match) — "high-performance proprietary development" aligns with your philosophy

**Why This Matters:**
Belvedere is not a product company. They're a trading firm. Every decision is measured in microseconds and basis points. Your learning velocity story (FlipperZillow 24-hour sprint) and pragmatism (cutting scope, shipping) will resonate. But your AI + full-stack product iteration strength won't be tapped.

**Risk:** You get bored after 18 months optimizing the same systems. This happens to generalists at specialized firms.

---

## Compensation

**Offer:** $140K base + discretionary bonus + benefits

**Market Rate for New Grads:**
- Median new grad total comp (tech): $80-110K
- Top quartile (trading): $140-200K all-in
- Belvedere: $140K base is **top 5% for new grads** (trading is generous)

**Analysis:**
- Base is excellent for a new grad. Discretionary bonus could be $20-50K depending on trading year.
- No equity mentioned (trading firms often don't equity-compensate).
- This is **significantly better than startup new grad offers** ($70-90K).

**Score:** 5/5 — Exceptional compensation for new grad

---

## Cultural Signals

**Positive:**
- Explicit commitment to teaching (BTU program, "we'll teach you everything")
- Peer-led learning, innovation encouraged
- Core values (Team Belvedere, Own It, Build Rockets, Passionate Discourse) sound healthy
- Hybrid in Chicago/Boulder (not all on-site immediately)
- Sponsorship available

**Neutral:**
- "Pragmatic development" suggests no time for experiments. Could be good or limiting depending on your taste.
- Proprietary trading is inherently risk-tolerant (culture reflects this) — could be energizing or stressful

**Red Flags:**
- Location requirement: "Applicants for this position will be considered for the Chicago location only" — you said willing to relocate anywhere, so this is OK. But check if Boulder is actually open.
- Finance licensing (SIE/Series 57) required during onboarding — not hard, but adds administrative overhead
- "Work Schedule: Regular and reliable attendance during standard business hours with the ability to be on-site prior to the start of business on occasion" — on-site bias despite "hybrid" label

**Verdict:** Culture is strong. Team-focused, learning-oriented. Slightly risk-averse about remote flexibility but compensates well for it.

---

## Red Flags

1. **Role narrowness.** You're a generalist. Belvedere wants a trading systems specialist. After PatentIQ (end-to-end ownership), this might feel limiting.

2. **Career trajectory.** Most engineers at prop trading firms stay 3-5 years then move to more product-oriented roles. That's fine, but know it's a chapter, not a career.

3. **Markets knowledge required eventually.** You'll need to understand yield curves, Greeks, microstructure. Not hard for someone smart, but it's additional on-ramp.

4. **Bonus structure is discretionary.** A bad trading year = no bonus. Could be issue if you're counting on $140K+ all-in comp.

---

## Recommendation

**Apply:** Yes, if you meet the graduation date (Dec 2025 or May/June 2026). You're in the right window.

**Why:**
- Compensation is elite for a new grad.
- Your latency obsession is a genuine strength here.
- BTU will accelerate your financial markets knowledge.
- Belvedere's hiring bar is high; acceptance would be a strong signal.

**Caution:**
- This is not a "my first real job" role — it's a specialist role. You'll need to care about low-latency systems more than typical new grad.
- Don't apply if you're hedging bets. Apply only if this role is genuinely interesting to you.

**Timeline:** They mention Fall 2026 start date. You graduate March 2026. This aligns perfectly.

---

## Interview Prep

**Story to Lead With:** FlipperZillow + Chess Engine latency optimization

> "I optimized a chess engine's evaluation from 1.1ms to 0.25ms by redesigning the data structures and using Cython + C++ for hot paths. I also built a two-tier caching system (Redis backend + in-memory LRU client-side) that reduced Square API latency by 90% in another project. I'm obsessed with the microsecond-level optimizations that matter to throughput and user experience."

**What They'll Ask:**
1. Tell us about a time you optimized performance. (Answer: chess or Groundwork.)
2. How do you debug latency issues? (Answer: profiling, hot path analysis, benchmarking.)
3. Why do you care about low-latency systems? (Answer: truthfully — you like the challenge, or they'll sense you're just chasing comp.)

**What Not to Say:**
- "I want to get rich from bonuses." (Not the vibe — they want people who care about the work.)
- "I don't know anything about finance." (Honest, but they expect this. Pair it with "I learn fast and want to understand what I'm optimizing.")

---

## Next Steps

1. **Verify location.** Contact Belvedere: is Boulder actually open for this cohort, or Chicago only?
2. **Check graduation date.** Are you on track for Dec 2025 or May 2026? (You said March 2026, so you're good.)
3. **Skim trading basics.** Before the interview, spend 2 hours on "what is market-making" and "why latency matters in trading." It'll show you've done basic research.
4. **Apply via Lever.** Use the application form. For "why Belvedere," emphasize latency obsession + learning velocity, not money.

---

## Proof Points to Highlight

From CV:
- "77.2% latency reduction (chess), reducing eval time from 1.1ms to 0.25ms"
- "Redis caching reducing API latency by 90% (sub-200ms p99)"
- "HB100 radar: dual-stage op-amp cascade and Kalman filtering for precise direction estimation"
- "Custom 8-bit RISC CPU with 4-stage pipeline, optimizing data paths to minimize hazard stalls"
- "Pragmatism under pressure: cut SAM3D when it broke on ROCm, shipped working product instead"

All of these show that you understand systems at a deep level and ship under constraints.
