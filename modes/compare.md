# Mode: compare — Multi-Offer Comparison

Scoring matrix of 10 weighted dimensions:

| Dimension | Weight | Criteria 1-5 |
|-----------|--------|--------------|
| North Star Alignment | 25% | 5=exact target role, 1=unrelated |
| CV Match | 15% | 5=90%+ match, 1=<40% match |
| Level (seniority) | 15% | 5=staff+, 4=senior, 3=mid-senior, 2=mid, 1=junior |
| Estimated Comp | 10% | 5=top quartile, 1=below market |
| Growth Trajectory | 10% | 5=clear path to next level, 1=dead end |
| Remote Quality | 5% | 5=full remote async, 1=onsite only |
| Company Reputation | 5% | 5=top employer, 1=red flags |
| Tech Stack Modernity | 5% | 5=cutting edge AI/ML, 1=legacy |
| Speed to Offer | 5% | 5=fast process, 1=6+ months |
| Culture Signals | 5% | 5=builder culture, 1=bureaucratic |

For each offer: score each dimension, calculate weighted total.
Final ranking + recommendation with time-to-offer considerations.

Ask you for offers if not in context. Can be text, URLs, or references to already-evaluated offers in tracker.

---

## Comparison Output Format

```
OFFER COMPARISON — {Date}
═══════════════════════════════════════

Offer 1: {Company} | {Role}
Offer 2: {Company} | {Role}
Offer 3: {Company} | {Role}

DETAILED SCORING
─────────────────────────────────────

| Dimension | Weight | Offer 1 | Offer 2 | Offer 3 |
|-----------|--------|---------|---------|---------|
| North Star Alignment | 25% | 5 | 4 | 3 |
| CV Match | 15% | 4 | 5 | 3 |
| ...

WEIGHTED TOTALS
─────────────────────────────────────
Offer 1: 4.3/5.0 → Strongest overall fit
Offer 2: 4.1/5.0 → Strong but slower hiring
Offer 3: 3.2/5.0 → Good fallback

RECOMMENDATION
─────────────────────────────────────
Primary: {Offer 1} — {reason}
Backup:  {Offer 2} — {reason}
```

---

## How to Use

**Paste offers as:**
1. **Full JD text** (I'll extract key info)
2. **URLs** (I'll fetch and evaluate)
3. **Report references** (I'll pull from tracker) — e.g., "#143 Google offer, #144 Meta offer"

**Or ask directly:** "Compare my 3 offers" (I'll pull from recent evaluations)
