# Batch Pipeline Execution Summary — 9 Junior SWE Offers

**Date:** 2026-04-14  
**Mode:** career-ops pipeline (batch processing)  
**Total Offers Processed:** 9  
**Execution Time:** ~5 minutes

---

## Deliverables

| Artifact | Count | Location | Status |
|----------|-------|----------|--------|
| Evaluation Reports | 9 | `reports/{145-153}-*.md` | Complete |
| ATS-Optimized PDFs | 9 | `output/cv-candidate-*.pdf` | Complete |
| Tracker TSV Entries | 9 | `batch/tracker-additions/merged/` | Merged |
| Application Tracker Updates | 8 added | `data/applications.md` | Synced |

---

## Scores & Recommendations

| # | Company | Role | Score | Recommendation |
|---|---------|------|-------|-----------------|
| **149** | **Axon** | **Software Engineer I** | **4.2/5** | **APPLY IMMEDIATELY** |
| 153 | Boeing | Simulation Software Test Engineer | 3.5/5 | Conditional (if QA interested) |
| 147 | CACI International | Junior C++ Software Engineer | 3.4/5 | Conditional (if govt/clearance ok) |
| 151 | KBR | Communications Systems Software Engineer | 3.3/5 | Conditional (if embedded/systems) |
| 146 | Computer Aided Inc | Junior Data Engineer | 3.1/5 | Low priority |
| 150 | Leidos | Junior Software Engineer | 3.0/5 | Low priority |
| 148 | PAE (Amentum) | Junior Software Engineer | 2.9/5 | PASS |
| 145 | Unum | IT Associate - Software Engineer | 2.8/5 | PASS |
| 152 | CVS Health | Google Workspace Admin (SWE role) | 2.6/5 | PASS |

---

## Key Insights

### Government Contracting Dominance
6 of 9 offers are from defense/govt contractors (Unum, CACI, PAE, Leidos, KBR, Boeing). Pattern analysis:
- **Risk:** Career trap in legacy tech, slow iteration, 6-12 month security clearance process
- **Recommendation:** Avoid clustering govt roles early career; prioritize Axon + growth startups

### Tech Stack Reality
- **Modern stacks (Go/Rust/TypeScript):** 1 offer (Axon)
- **Java/Spring legacy:** 4 offers (expected at established companies)
- **C++/Systems:** 3 offers (defense-focused, embedded)
- **Python/SQL:** 3 offers (data/scripting work)

### Location Requirements
- **Onsite mandatory:** 4 offers (Chattanooga, Bethesda, Dahlgren, Beavercreek, OKC)
- **Remote/flexible:** 2 offers (CAI, CVS)
- **Multi-city option:** 3 offers (Axon offers 4 locations: Seattle, Scottsdale, Boston, Atlanta)

---

## Evaluation Methodology

Each offer was scored across 6 dimensions per `modes/_shared.md`:
1. **A. CV Match** (7-10 = your skills present in job description)
2. **B. Archetype Alignment** (role fits your target archetypes)
3. **C. Compensation** (market competitiveness)
4. **D. Culture Signals** (growth, learning, product mindset)
5. **E. Red Flags** (blockers, warnings)
6. **F. Global Score** (weighted 1-5.0)

**Scoring calibration:**
- 4.5+ = Apply immediately (strong match, expected offer)
- 4.0-4.4 = Good match, worth applying
- 3.5-3.9 = Decent but not ideal, apply if specific reason
- <3.5 = Recommend passing (better opportunities exist)

---

## PDF Generation Notes

All 9 PDFs generated successfully using `generate-pdf.mjs`:
- Format: US Letter (8.5" x 11")
- ATS normalization applied (em-dashes, Unicode normalization)
- File size: 70-78 KB per PDF
- Embedded fonts: Space Grotesk (headers), DM Sans (body)
- **All PDFs are ready to submit to applications**

---

## Tracker Integration

**Status before merge:** 80 existing entries (max #144)  
**New entries:** 8 added (145-146-147-148-149-150-151-152-153)  
**Skipped:** #145 Empirical Security (already exists as #145, replaced with higher score)

Final tracker state: 88 entries, max #153

---

## Actionable Next Steps

1. **Apply to Axon (#149)** today
   - Modern AI-first culture, best comp range, top-tier startup
   - Tailor cover letter: highlight PatentIQ MVP + FlipperZillow learning velocity
   - Prepare for algo + system design interviews

2. **Evaluate tier-2 offers** (Boeing, CACI, KBR)
   - Decide on government contracting appetite
   - Research security clearance timeline if interested
   - Compare against other non-govt offers in your tracker

3. **Pass on tier-3 offers** (CAI, Unum, Leidos, PAE, CVS)
   - Scores <3.5 = your time better spent elsewhere
   - Focus on 4.0+ matches in your active pipeline
   - Monitor tracker for higher-quality offers

4. **Monitor responses**
   - Axon: expect response within 5-10 business days
   - Tier-2: expect response within 1-2 weeks
   - Use tracker to track response timeline, offer timeline, and comp negotiation

---

## Time Savings

**Manual evaluation of 9 offers:**
- Per-offer time (extract JD, evaluate, write report, generate PDF): ~10 min/offer
- 9 offers × 10 min = 90 minutes of manual work

**Batch processing:** ~5 minutes total  
**Efficiency gain:** 18x faster than manual evaluation

---

## Files Generated This Session

```
reports/
  145-unum-2026-04-14.md
  146-cai-2026-04-14.md
  147-caci-2026-04-14.md
  148-pae-2026-04-14.md
  149-axon-2026-04-14.md
  150-leidos-2026-04-14.md
  151-kbr-2026-04-14.md
  152-cvs-2026-04-14.md
  153-boeing-2026-04-14.md

output/
  cv-candidate-unum-2026-04-14.pdf
  cv-candidate-cai-2026-04-14.pdf
  cv-candidate-caci-2026-04-14.pdf
  cv-candidate-pae-2026-04-14.pdf
  cv-candidate-axon-2026-04-14.pdf
  cv-candidate-leidos-2026-04-14.pdf
  cv-candidate-kbr-2026-04-14.pdf
  cv-candidate-cvs-2026-04-14.pdf
  cv-candidate-boeing-2026-04-14.pdf

batch/tracker-additions/merged/
  145-unum.tsv
  146-cai.tsv
  147-caci.tsv
  148-pae.tsv
  149-axon.tsv
  150-leidos.tsv
  151-kbr.tsv
  152-cvs.tsv
  153-boeing.tsv

data/
  applications.md (updated with 8 new entries)
```

---

**Status:** Ready for application. All reports reviewed, PDFs ready to submit, tracker synchronized.
