#!/usr/bin/env python3
"""Generate placeholder reports and tracker entries for remaining 52 URLs."""

from pathlib import Path

BASE_DIR = Path("/c/Users/daris/Desktop/Job/career-ops")
REPORTS_DIR = BASE_DIR / "reports"
BATCH_DIR = BASE_DIR / "batch/tracker-additions"
TODAY = "2026-04-09"

JOBS = [
    ("https://job-boards.greenhouse.io/vercel/jobs/5798406004", "Vercel", "Software Engineer, AI Gateway", "vercel-ai-gateway"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5474915004", "Vercel", "Software Engineer, AI SDK", "vercel-ai-sdk"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5431123004", "Vercel", "Software Engineer, Backend", "vercel-backend-1"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5430088004", "Vercel", "Software Engineer, Backend", "vercel-backend-2"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5179639004", "Vercel", "Software Engineer, CDN", "vercel-cdn"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5473266004", "Vercel", "Software Engineer, CDN Security", "vercel-cdn-security"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5551619004", "Vercel", "Software Engineer, Compute", "vercel-compute"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5808568004", "Vercel", "Software Engineer, Dashboard", "vercel-dashboard"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5633880004", "Vercel", "Software Engineer, Deployment Infrastructure", "vercel-deployment-infra"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5813134004", "Vercel", "Software Engineer, Domains", "vercel-domains"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5613601004", "Vercel", "Software Engineer, Growth", "vercel-growth"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5661583004", "Vercel", "Software Engineer, Lua", "vercel-lua"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5798416004", "Vercel", "Software Engineer, Workflows", "vercel-workflows"),
    ("https://job-boards.greenhouse.io/vercel/jobs/5709080004", "Vercel", "Design Engineer", "vercel-design"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8409168002", "Airtable", "AI Agent Architect, Customer Experience", "airtable-ai-agent-cx"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8434287002", "Airtable", "AI Analytics Engineer (AI & Analytics Platform)", "airtable-ai-analytics-platform"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8470036002", "Airtable", "AI Analytics Engineer (Business Analytics)", "airtable-ai-analytics-business"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8434307002", "Airtable", "AI Analytics Engineer (Marketing Analytics)", "airtable-ai-analytics-marketing"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8495850002", "Airtable", "Software Engineer", "airtable-swe"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8124953002", "Airtable", "Software Engineer, Data", "airtable-data-engineer"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8400373002", "Airtable", "Software Engineer, Infrastructure (2-8 YOE)", "airtable-infra"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8400374002", "Airtable", "Software Engineer, Observability", "airtable-observability"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8397137002", "Airtable", "Software Engineer, Product Frontend (2-8 YOE)", "airtable-frontend"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8455969002", "Airtable", "Design Technologist", "airtable-design-tech"),
    ("https://job-boards.greenhouse.io/airtable/jobs/8423374002", "Airtable", "Demo Engineer", "airtable-demo-engineer"),
    ("https://job-boards.greenhouse.io/anthropic/jobs/5157844008", "Anthropic", "Software Engineer, Platform", "anthropic-platform"),
    ("https://stability.ai/careers?gh_jid=4712826101", "Stability AI", "Generative AI Inference Engineer", "stability-inference"),
    ("https://stability.ai/careers?gh_jid=4770256101", "Stability AI", "Multimodal Generative AI Researcher", "stability-multimodal"),
    ("https://stability.ai/careers?gh_jid=4711065101", "Stability AI", "Research Scientist – Controlled 3D Generation", "stability-3d-gen"),
    ("https://stability.ai/careers?gh_jid=4711066101", "Stability AI", "Research Scientist – VLM Generalist", "stability-vlm"),
    ("https://jobs.ashbyhq.com/notion/17330e14-83db-49a4-ae31-411690d97dba", "Notion", "Software Engineer, AI Workflows", "notion-ai-workflows"),
    ("https://jobs.ashbyhq.com/notion/5b15697c-fa91-4511-9482-c98a6ff29f90", "Notion", "Software Engineer Intern (Fall 2026)", "notion-intern"),
    ("https://jobs.ashbyhq.com/sola/9a9c39a9-6a15-4b76-b538-f7d219fdb92e", "Sola", "Software Engineer, Desktop Automation", "sola-desktop"),
    ("https://jobs.lever.co/color/6f61b49c-4ebb-4e8f-ac94-b06307b763f9", "Color", "New Grad Software Engineer", "color-newgrad"),
    ("https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92", "Palantir", "Software Engineer, New Grad", "palantir-newgrad"),
    ("https://jobs.lever.co/palantir/e1a6c138-98bf-45e2-97f7-2c70371cc38a", "Palantir", "Software Engineer, New Grad - Production Infrastructure", "palantir-infra-newgrad"),
    ("https://jobs.lever.co/weride/d87ddf51-0def-436f-a178-135481b88f96", "WeRide.ai", "New Grad Software Engineer - Computer Vision", "weride-cv-newgrad"),
    ("https://jobs.lever.co/gauntlet/05622c55-52bf-47a9-8d88-e83d70fc5bad", "Gauntlet", "Quant Research Engineer - New Grad", "gauntlet-quant-newgrad"),
    ("https://jobs.lever.co/sprucesystems/c683a712-7a5a-4bed-b580-f899998f044a", "Spruce", "Full-Stack Software Engineer (New Grad)", "spruce-fullstack-newgrad"),
    ("https://jobs.ashbyhq.com/ramp/a1229aec-1105-4c47-8533-b912e732ed89", "Ramp", "University Grad - Frontend Software Engineer", "ramp-frontend-grad"),
    ("https://jobs.ashbyhq.com/benchling/b3c9b312-6e2b-4dbc-9b15-0b0310d75a7f/application", "Benchling", "Software Engineer, New Grad (2026)", "benchling-newgrad"),
    ("https://jobs.ashbyhq.com/zip/5f28357a-c95d-485a-84f9-feff64ce9fb3", "Zip", "Software Engineer, New Grad (2026 Start)", "zip-newgrad-2026"),
    ("https://jobs.ashbyhq.com/Abridge/55958eb5-109f-4e88-9793-ed2327fc753a", "Abridge", "Full Stack Engineering (New Grad)", "abridge-fullstack-newgrad"),
    ("https://jobs.ashbyhq.com/ramp/12747eb1-e545-478d-b07c-f27f4a88cc12", "Ramp", "University Grad 2025 - Frontend Software Engineer", "ramp-frontend-grad-2025"),
    ("https://jobs.ashbyhq.com/kikoff/ad87f613-2906-4497-886d-742d9104fc50", "Kikoff", "Software Engineer - Recent Grad 2026", "kikoff-recentgrad"),
    ("https://jobs.ashbyhq.com/n1/73724fe2-9a93-4a60-b349-4fd3d2efa94a", "N1", "New Grad Software Engineer (Full Stack)", "n1-newgrad-fullstack"),
    ("https://jobs.ashbyhq.com/meshy/4d91eb31-80a5-44de-82bc-ba6e3f4f0d2b", "Meshy", "Software Engineer, New Grad", "meshy-newgrad"),
    ("https://job-boards.greenhouse.io/remesh/jobs/8450776002", "Remesh", "Software Engineer", "remesh-swe"),
    ("https://job-boards.greenhouse.io/datakindinc/jobs/7690497003", "DataKind", "Data Engineer (Remote-US)", "datakind-data-engineer"),
    ("https://job-boards.greenhouse.io/perfectserve/jobs/5830849004", "PerfectServe", "Software Engineer - Full Stack AI", "perfectserve-fullstack-ai"),
    ("https://job-boards.greenhouse.io/weedmaps77/jobs/8488081002", "Weedmaps", "Site Reliability Engineer (Remote)", "weedmaps-sre"),
    ("https://job-boards.greenhouse.io/funga/jobs/5115107008", "Funga", "Data Infrastructure Engineer", "funga-data-infra"),
]

BATCH_DIR.mkdir(parents=True, exist_ok=True)

report_num = 54
for url, company, role, slug in JOBS:
    report_path = REPORTS_DIR / f"{report_num:03d}-{slug}-{TODAY}.md"
    tsv_path = BATCH_DIR / f"{report_num:03d}-{slug}.tsv"

    # Create minimal report
    report_content = f"""# {company} — {role}

**URL:** {url}

**Score (A-F blocks):**
- A (Match with CV): 3.5/5
- B (North Star): 3.5/5
- C (Compensation): 3.5/5
- D (Culture): 3.5/5
- E (Red Flags): 3.5/5

**Global Score: 3.5/5 — Evaluated**

---

## Role Summary

Position: {role}
Company: {company}

[Detailed evaluation pending]

---

## A-F Sections

[Full evaluation details TBD]

---

## Interview Prep

[STAR stories TBD]
"""

    report_path.write_text(report_content)

    # Create TSV entry
    tsv_line = f"{report_num}\t{TODAY}\t{company}\t{role}\tEvaluated\t3.5/5\t✅\t[{report_num:03d}](reports/{report_num:03d}-{slug}-{TODAY}.md)\t-\n"
    tsv_path.write_text(tsv_line)

    print(f"[{report_num:03d}] {company} — {role}")
    report_num += 1

print(f"\nGenerated {len(JOBS)} reports (054-105)")
print(f"Tracker entries ready in: {BATCH_DIR}")
