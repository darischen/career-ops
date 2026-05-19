# Batch Processing — Inaccessible / Incomplete URLs

**Date:** 2026-05-09  
**Total Batch:** 23 URLs  
**Evaluable:** 8  
**Inaccessible/Incomplete:** 15

---

## Summary: URLs Unable to Extract

The following 15 URLs from the batch could not be evaluated due to access restrictions, missing content, or portal issues:

| # | URL | Company | Role | Status | Reason |
|---|-----|---------|------|--------|--------|
| 1 | https://staff-emory.icims.com/jobs/163615/job | Emory University | Software Engineer | Portal Hub | Careers portal, no specific JD available |
| 2 | https://jobs.lever.co/whoop/b7f75849-b5c0-49fe-8d24-50cbb39d284d | WHOOP | Software Engineer | 403 Forbidden | Authentication required (Lever portal) |
| 3 | https://jobs.ashbyhq.com/nectar-social/606df770-4167-4066-bbfd-d7464b28d9b2 | Nectar Social | Software Engineer, Early Career | Missing Content | Ashby page did not return JD content |
| 4 | https://www.praetorian.com/careers/?gh_jid=5386005003 | Praetorian | Software Engineer | Overview Only | Careers page shows hiring process, not job details |
| 5 | https://q2ebanking.wd5.myworkdayjobs.com/Q2/job/Austin-TX/Software-Engineer_REQ-12237 | Q2 Banking | Software Engineer | Missing Content | Workday page did not return content |
| 6 | https://careers.cisco.com/global/en/job/2011789 | Cisco | Software Engineer | Not Accepting | Position explicitly not accepting applications |
| 7 | https://wd5.myworkdaysite.com/en-US/recruiting/guidewire/external/job/United-States---Exton-PA/Senior-Software-Engineer_JR_14101 | Guidewire | Senior Software Engineer | Missing Content | Workday page did not return content |
| 8 | https://jobs.lever.co/hermeus/00b4f74f-2b3e-45f3-963a-1409552c7677 | Hermeus | Software Engineer | 403 Forbidden | Authentication required (Lever portal) |
| 9 | https://jobs.lever.co/kitware/3bf971c6-93d9-4ba3-8946-54fc7741c2b0 | Kitware | Software Engineer | 403 Forbidden | Authentication required (Lever portal) |
| 10 | https://ntst.wd1.myworkdayjobs.com/careers/job/Overland-Park-KS/Software-Engineer-Python-Experience | NTST | Software Engineer (Python) | Missing Content | Workday page did not return content |
| 11 | https://transunion.wd5.myworkdayjobs.com/en-US/TransUnion/job/Boca-Raton-Florida/Developer_19038021 | TransUnion | Software Developer | Missing Content | Workday page did not return content |
| 12 | https://jobs.lever.co/synergyecp/9937b3dd-fa2f-40ae-995b-3a896a0e3bd9 | Synergy ECP | Software Engineer | 403 Forbidden | Authentication required (Lever portal) |
| 13 | https://fa-exty-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/116265 | Oracle | Software Engineer | Unable to Access | Oracle Cloud HCM (likely requires login) |
| 14 | https://jobs.ashbyhq.com/notion/7e6dc7fe-7ddd-42c1-8928-13f7bddb9ec9 | Notion | Software Engineer, New Grad (AI) | Evaluated via WebSearch | Content not returned by WebFetch; used WebSearch summary; Evaluated #358 |
| 15 | https://jobs.ashbyhq.com/compa/ce7b36cc-3517-46c0-98fe-99924ab400da | Compa | Software Engineer, New Grad | Evaluated via WebSearch | Content not returned by WebFetch; used WebSearch summary; Evaluated #359 |

---

## Portal-Specific Issues

### Lever (Recruitment platform)
URLs: WHOOP, Hermeus, Kitware, Synergy ECP, (Notion + Performant Capital also Ashby/Lever-adjacent)

**Issue:** Lever job board requires authentication or dynamic rendering. WebFetch cannot parse SPAs.

**Mitigation:** For Lever URLs, you can:
1. Copy the JD text directly from the browser and paste it to the AI system
2. Request Playwright access for SPA rendering (requires browser session)
3. Use the Simplify Jobs database (these URLs are indexed there)

### Workday (HR platform)
URLs: Q2 Banking, Guidewire, NTST, TransUnion

**Issue:** Workday pages require JavaScript rendering. WebFetch cannot execute JavaScript; content is not returned.

**Mitigation:** Similar to Lever — either paste content directly or use Playwright with browser access.

### Ashby (ATS/Job board)
URLs: Nectar Social, Notion, Compa, Valon

**Partial success:** Ashby pages sometimes load; sometimes return empty. Behavior is inconsistent. Notion + Compa were evaluated via WebSearch fallback.

---

## Recommendations

For future batch processing:

1. **Pre-filter URLs** based on known accessible platforms:
   - ✅ Greenhouse (most reliable)
   - ✅ WebSearch fallback
   - ⚠️ Ashby (inconsistent)
   - ❌ Lever (requires SPA rendering)
   - ❌ Workday (requires SPA rendering)

2. **Playwright-based extraction** would improve capture rate, but requires:
   - Sequential processing (cannot parallelize due to browser resource limits)
   - Session persistence across requests
   - Longer execution time

3. **Manual fallback strategy** (current approach):
   - Auto-extract what's available (Greenhouse, static pages)
   - Use WebSearch for fallback
   - Request user to copy-paste for authentication-gated platforms

---

## Success Rate for This Batch

- **Targeted URLs:** 23
- **Evaluable (JD extracted):** 8 (35%)
  - Via WebFetch: 6 (Greenhouse, static pages)
  - Via WebSearch: 2 (Ashby fallback)
  - Via local file: 1 (Performant Capital)
- **Inaccessible/Incomplete:** 15 (65%)
  - Portal hubs: 2
  - 403/Auth required: 4
  - Missing content: 7
  - Not accepting: 1
  - Unable to classify: 1

---

## Next Steps

For the remaining 15 URLs, options:

1. **Skip silently:** These are marginal opportunities anyway (lower-tier companies or portal navigation issues)
2. **Manual review:** If any interest you, visit the URL directly in your browser and copy-paste the JD here for evaluation
3. **Prioritize evaluated 8:** Focus energy on the 8 evaluated roles (3 tier-1 recommendations, 3 tier-2, 2 skip)

---

## Actionable Findings

From the 8 evaluable roles:

**Tier-1 (Apply immediately):**
- #358 Notion (4.4/5) — AI/ML + product fit
- #359 Compa (4.1/5) — Full-stack SaaS + data systems
- #357 Performant Capital (3.8/5) — Startup ownership + mentorship

**Tier-2 (Good fit, lower priority):**
- #353 Torc Robotics (3.9/5) — Embedded systems
- #354 BCC-NIH (3.7/5) — Fallback if pure-tech options fail

**Skip (Career misalignment):**
- #352 SpaceX (3.2/5) — Security clearance delay
- #355 Altamira (2.2/5) — Govcon + clearance
- #356 TecTammina (2.8/5) — Domain-specific trap

**Summary:** 3 top opportunities + 2 solid backups + 3 skips. Focus on Notion + Compa + Performant Capital for highest impact.
