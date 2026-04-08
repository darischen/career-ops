# Mode: deep — Deep Company Research

Comprehensive research on a target company before applying.

## Workflow

Input: Company name (or URL)

Output: 
- Company profile (mission, size, funding, growth stage)
- Tech stack & architecture (from jobs, GitHub, blog)
- Culture signals (from Glassdoor, Blind, LinkedIn)
- Recent news (funding, layoffs, product launches)
- AI/ML focus level (if applicable)
- Hiring velocity & process speed
- Negotiation leverage (market position, growth stage)

## Research Sources

1. **Company site**: Mission, product, about pages
2. **Crunchbase**: Funding, investors, recent news
3. **Glassdoor/Blind/Levels**: Compensation, culture, interview process
4. **GitHub**: Open source repos, tech stack signals
5. **LinkedIn**: Headcount, hiring velocity, recent moves
6. **News**: Recent announcements, product launches, layoffs
7. **Job postings**: Tech stack, team structure, growth areas

## Research Framework

Generates structured prompt for Perplexity/Claude/ChatGPT with 6 axes:

```
## Deep Research: [Company] — [Role]

Context: I'm evaluating an opportunity for [role] at [company]. I need actionable information for interviews.

### 1. AI Strategy
- What products/features use AI/ML?
- What's their AI stack? (models, infrastructure, tools)
- Do they have an engineering blog? What do they publish?
- What papers or talks have they given on AI?

### 2. Recent Moves (last 6 months)
- Relevant hiring in AI/ML/product?
- Acquisitions or partnerships?
- Product launches or pivots?
- Funding rounds or leadership changes?

### 3. Engineering Culture
- How do they ship? (deployment cadence, CI/CD)
- Mono-repo or multi-repo?
- What languages/frameworks do they use?
- Remote-first or office-first?
- Glassdoor/Blind reviews on eng culture?

### 4. Likely Challenges
- What scaling problems do they have?
- Reliability, cost, latency challenges?
- Are they migrating something? (infrastructure, models, platforms)
- What pain points do people mention in reviews?

### 5. Competitors & Differentiation
- Who are their main competitors?
- What's their moat/differentiator?
- How do they position vs. competition?

### 6. Your Angle
Given my profile (experienced with full-stack systems, AI/ML, hardware):
- What unique value do I bring to this team?
- Which of my projects are most relevant?
- What story should I tell in interviews?
```

Personalize each section with the specific context of the evaluated offer.

---

## Quick Deep

For rapid research before applying:
```bash
/career-ops deep "{Company}"
```

Takes ~2-3 minutes, covers top signals only.

## Output Format

```
DEEP RESEARCH — {Company}
═══════════════════════════════════════

COMPANY PROFILE
─────────────────────────────────────
Mission: {mission statement}
Stage: {Seed/Series A/B/C/Public}
Founded: {year}
Headcount: {approximate}
Funding: ${X}M or Public

TECH FOCUS
─────────────────────────────────────
AI/ML level: {High/Medium/Low}
Tech stack: {languages, frameworks, databases}
Open source: {projects or contributions}
Infrastructure: {cloud provider, scale}

RECENT MOVES
─────────────────────────────────────
- {recent hiring, acquisition, or launch}
- {recent product or strategy change}

RED FLAGS
─────────────────────────────────────
- {flag 1}
- {flag 2}

OPPORTUNITIES
─────────────────────────────────────
- {opportunity 1}
- {opportunity 2}

NEGOTIATION LEVERAGE
─────────────────────────────────────
Market position: {Strong/Average/Weak}
Growth trajectory: {Rapid/Stable/Declining}
Hiring urgency: {High/Medium/Low}
```
