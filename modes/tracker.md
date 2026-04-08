# Mode: tracker — Application Status Overview

Show your current job search progress at a glance.

## Workflow

```bash
/career-ops tracker
```

Output: Summary table of all applications + metrics.

---

## Tracker Format

```markdown
| # | Date | Company | Role | Score | Status | PDF | Report |
```

**Canonical statuses**: `Evaluated` → `Applied` → `Responded` → `Interview` → `Offer` / `Rejected` / `Discarded` / `SKIP`

- `Applied` = you submitted your application
- `Responded` = A recruiter/company contacted you (inbound)
- `Interview` = You're in the interview process
- `Offer` = Offer received
- `Rejected` = Rejected by company
- `Discarded` = You discarded or offer closed
- `SKIP` = Doesn't fit, don't apply

If you request status update, edit the corresponding row.

---

## Output Format

```
APPLICATION TRACKER — {Date}
═══════════════════════════════════════

SUMMARY
─────────────────────────────────────
Total applications: 47
In progress: 12
Offers: 2
Interviews: 8
Rejections: 18
No response: 7

PROGRESS BY STAGE
─────────────────────────────────────
Applied:    ████████░░░░░░░░ (23/47 = 49%)
Responded:  ███░░░░░░░░░░░░░ (15/47 = 32%)
Interview:  ██░░░░░░░░░░░░░░ (8/47 = 17%)
Offer:      ░░░░░░░░░░░░░░░░ (2/47 = 4%)

RECENT ACTIVITY (Last 7 days)
─────────────────────────────────────
Applied to:  5 roles
Responses:   2
Offers:      1
Rejections:  1

TOP OPPORTUNITIES (Next steps)
─────────────────────────────────────
1. Loop          | New Grad Program        | Interview scheduled (Tue 2pm)
2. Anthropic     | Applied AI Engineer     | Waiting on response (3 days)
3. Vercel        | Backend Engineer        | Started coding challenge (due Fri)

SCORE DISTRIBUTION
─────────────────────────────────────
5.0 (Ideal):     2 offers
4.0+ (Strong):   8 applied
3.0-4.0 (Good):  18 applied
<3.0 (Skip):     19 not applied

INSIGHTS
─────────────────────────────────────
- Interview conversion: {X}% of interviews → offers
- Response rate: {Y}% of applications → response
- Average time to response: {Z} days
- Most active companies: {Top 3 hiring}
```

---

## Filter by Status

```bash
/career-ops tracker applied      # Only applied roles
/career-ops tracker interview    # In interview process
/career-ops tracker offer        # Offers received
/career-ops tracker rejected     # Rejections
```
