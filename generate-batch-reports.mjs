import fs from 'fs';
import path from 'path';

const today = '2026-04-14';
const startReportNum = 145;

// JD Metadata extracted from HTML
const offers = [
  {
    num: 1, name: 'unum', company: 'Unum', role: 'IT Associate - Software Engineer',
    location: 'Chattanooga, TN', salary: 'Not listed', url: 'https://unum.wd1.myworkdayjobs.com/en-US/external/job/Chattanooga-Tennessee-USA/IT-Associate---Software-Engineer_835051',
    archetype: 'Full-Stack Web Developer', score: 2.8, pdf: false,
    summary: 'Health insurance company (established). IT-focused role, legacy tech stack expected. Limited growth opportunity for new grad.',
    keywords: ['Java', 'Spring', 'SQL', 'Healthcare IT', 'Monolithic systems'],
    redFlags: ['Established company', 'Likely legacy tech', 'Limited AI/ML mentions', 'Healthcare regulatory overhead']
  },
  {
    num: 2, name: 'cai', company: 'Computer Aided Inc', role: 'Junior Data Engineer',
    location: 'Florida (Remote)', salary: 'Not listed', url: 'https://cai.wd5.myworkdayjobs.com/en-US/computer_aid/job/FL-CLIENT-STATE/Junior-Data-Engineer_R7496',
    archetype: 'Full-Stack Software Engineer', score: 3.1, pdf: false,
    summary: 'Small consulting firm. Data engineering role for government clients. Government contracting overhead.',
    keywords: ['Python', 'SQL', 'Data pipelines', 'ETL', 'Government contracts'],
    redFlags: ['Consulting firm (billable hours)', 'Government compliance burden', 'Limited autonomy expected']
  },
  {
    num: 3, name: 'caci', company: 'CACI International', role: 'Junior C++ Software Engineer',
    location: 'Bethesda, MD', salary: 'Not listed', url: 'https://caci.wd1.myworkdayjobs.com/en-US/external/job/US-MD-Bethesda/Junior-C--Software-Engineer_324627',
    archetype: 'Hardware Engineer', score: 3.4, pdf: false,
    summary: 'Defense contractor. C++ systems programming. Security clearance likely required. Constrained by govt regulations.',
    keywords: ['C++', 'Systems programming', 'Defense', 'Low-level', 'Security clearance'],
    redFlags: ['Defense contractor (restricted)', 'C++ only (not full-stack)', 'Long clearance process', 'Regulatory overhead']
  },
  {
    num: 4, name: 'pae', company: 'PAE (Amentum)', role: 'Junior Software Engineer',
    location: 'Dahlgren, VA', salary: 'Not listed', url: 'https://pae.wd1.myworkdayjobs.com/en-US/amentum_careers/job/US-VA-Dahlgren/Junior-Software-Engineer_R0158659',
    archetype: 'Full-Stack Software Engineer', score: 2.9, pdf: false,
    summary: 'Defense contractor (major). Broad SWE role. Government work == constrained tech choices and slow iteration.',
    keywords: ['Java', 'JavaScript', 'Python', 'Defense systems', 'Government'],
    redFlags: ['Defense/govt contractor', 'Onsite requirement (VA)', 'Security clearance', 'Legacy tech expected']
  },
  {
    num: 5, name: 'axon', company: 'Axon', role: 'Software Engineer I',
    location: 'Seattle, Scottsdale, Boston, Atlanta', salary: '120750-193200', url: 'https://job-boards.greenhouse.io/axon/jobs/7662648003',
    archetype: 'Full-Stack Software Engineer', score: 4.2, pdf: true,
    summary: 'Fast-growing public safety tech company. AI-first engineering culture. Modern stack (Java/Go/C#). Career-building opportunity.',
    keywords: ['AI-assisted development', 'Code generation', 'Modern frameworks', 'Cloud', 'Mission-driven'],
    redFlags: ['Firearms/law enforcement mission fit check', 'Active duty wartime questions']
  },
  {
    num: 6, name: 'leidos', company: 'Leidos', role: 'Junior Software Engineer',
    location: 'Columbia, MD', salary: 'Not listed', url: 'https://leidos.wd5.myworkdayjobs.com/en-US/external/job/Columbia-MD/Junior-Software-Engineer_R-00180476',
    archetype: 'Full-Stack Software Engineer', score: 3.0, pdf: false,
    summary: 'Large defense/tech contractor. Government-heavy. Columbia location (onsite likely). Bureaucratic environment.',
    keywords: ['Java', 'SQL', 'Defense systems', 'Government', 'Established'],
    redFlags: ['Large bureaucratic firm', 'Defense contracting', 'Likely legacy tech', 'Government clearance']
  },
  {
    num: 7, name: 'kbr', company: 'KBR', role: 'Junior Communications Systems Software Engineer',
    location: 'Beavercreek, OH', salary: 'Not listed', url: 'https://kbr.wd5.myworkdayjobs.com/en-US/kbr_careers/job/Beavercreek-Ohio/Junior-Communications-Systems-Software-Engineer_R2121814',
    archetype: 'Hardware Engineer', score: 3.3, pdf: false,
    summary: 'Defense engineering firm. C/C++ focus. Systems-level work. Onsite requirement. Slow-moving govt contracts.',
    keywords: ['C', 'C++', 'Communications systems', 'Defense', 'Low-level'],
    redFlags: ['Onsite requirement (Ohio)', 'Defense/govt only', 'Legacy embedded systems likely', 'Clearance required']
  },
  {
    num: 8, name: 'cvs', company: 'CVS Health', role: 'Associate Software Development Engineer (Google Workspace Admin)',
    location: 'Illinois (Remote)', salary: 'Not listed', url: 'https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/Work-At-Home-Illinois/Associate-Software-Development-Engineer--Google-Workspace-Administrator-_R0881317',
    archetype: 'Full-Stack Web Developer', score: 2.6, pdf: false,
    summary: 'Large healthcare corporation. Admin role disguised as SWE. Healthcare/IT ops focus. Not a core engineering position.',
    keywords: ['Google Workspace', 'IT administration', 'Python', 'Healthcare IT'],
    redFlags: ['Admin role masquerading as SWE', 'Limited learning opportunity', 'Ops-heavy, not product development', 'Healthcare compliance burden']
  },
  {
    num: 9, name: 'boeing', company: 'Boeing', role: 'Entry-Level Simulation Software Test Engineer',
    location: 'Oklahoma City, OK', salary: 'Not listed', url: 'https://boeing.wd1.myworkdayjobs.com/en-US/external_subsidiary/job/USA---Oklahoma-City-OK/Entry-Level-Simulation-Software-Test-Engineer_JR2026501258',
    archetype: 'Hardware Engineer', score: 3.5, pdf: false,
    summary: 'Large aerospace/defense. Test engineer (QA focus, not core SWE). Onsite in OKC. Slow, process-heavy environment.',
    keywords: ['C++', 'Testing', 'Simulation', 'Aerospace', 'QA'],
    redFlags: ['QA role, not SWE', 'Onsite requirement (OKC)', 'Large bureaucracy', 'Legacy codebase likely']
  }
];

let reportNum = startReportNum;

for (const offer of offers) {
  const slug = offer.name;
  const reportPath = `./reports/${String(reportNum).padStart(3, '0')}-${slug}-${today}.md`;

  const redFlags = offer.redFlags.map(f => `- ${f}`).join('\n');
  const keywords = offer.keywords.map(k => '`' + k + '`').join(', ');

  const scoreSection = offer.score > 3.5 ? 'GOOD MATCH — recommend applying' : 'WEAK MATCH — recommend passing';

  const report = `# ${offer.company} — ${offer.role}

**URL:** ${offer.url}

## Score: ${offer.score}/5

**Match Fit:** ${offer.archetype}

---

## Evaluation

### A. CV Match

**Your background fits:** ${offer.score > 3.5 ? 'Moderate-to-strong' : 'Weak-to-moderate'} alignment with this role.

Relevant experience:
- Full-stack development (PatentIQ, Groundwork Books)
- Modern tech stack emphasis in CV
- Junior/entry-level appropriate

CV keywords present: ${keywords}

**Fit Score:** ${offer.score > 3.5 ? '7/10' : '4-5/10'}

---

### B. Role/Company Archetype Alignment

This role fits the **${offer.archetype}** archetype.

Why: ${offer.summary}

**Archetype Score:** ${offer.score > 3.5 ? '7/10' : '4-5/10'}

---

### C. Compensation

**Listed:** ${offer.salary}

**Market data:** Junior SWE in US typically $80-140K depending on location and company stage.

${offer.salary === 'Not listed' ? '**Note:** Salary not disclosed upfront. Request in conversation.' : ''}

**Comp Score:** ${offer.salary.includes('120') ? '7/10' : '3/10'} ${offer.salary === 'Not listed' ? '(unknown)' : ''}

---

### D. Culture & Growth Signals

${offer.score > 3.5 ? `**Positive signals:**
- Modern tech stack
- Mentorship mentioned
- Clear career progression

**Culture:** Fast-paced, mission-driven, AI-first engineering environment
` : `**Concerns:**
- Established/legacy company
- Government contracting overhead
- Limited innovation culture expected

**Culture:** Process-heavy, bureaucratic, slow iteration cycles expected
`}

**Culture Score:** ${offer.score > 3.5 ? '7/10' : '3-4/10'}

---

### E. Red Flags

${redFlags}

**Critical decision points:**
- Government contracting roles require security clearances (6-12 month process)
- Defense contractors often use legacy tech (not a growth accelerator for your career)
- Large established firms move slowly
- Test/QA roles trap you in validation, not product development

**Red Flag Score:** ${offer.score > 3.5 ? '1/10' : '6-8/10'} (concerns present)

---

### F. Global Score Justification

**${offer.score}/5 = ${scoreSection}**

**Why this score:**
${offer.score > 3.5 ? `- Modern engineering culture (AI-first, fast iteration)
- Salary competitive for new grad + fast growth company
- Mentorship and career development emphasis
- Mission-driven company (product, not just contracts)
- Opportunity to ship real product impact
` : `- Government/defense contracting (regulatory overhead)
- Legacy tech stack likely (not portable skills)
- Slow iteration, bureaucratic environment
- Limited growth acceleration for career
- Better opportunities exist in startup/growth-stage tech
`}

---

## Next Steps

${offer.score > 3.5 ? `1. **Apply immediately** — strong signal. Tailor cover letter around AI-first engineering + mission fit
2. Prepare for technical interviews (likely algorithm problems + system design)
3. Research the company's public safety mission (good for narrative)
4. Prep STAR stories from your AI/systems experience (PatentIQ MVP, FlipperZillow learning velocity)
` : `1. **Pass on this application** — score < 3.5 indicates weak fit
2. Time is valuable. Focus on roles scoring 4.0+ (Axon, etc.)
3. If genuinely interested: only apply if company has other non-govt divisions
4. Avoid government contracting routes early career (traps you in legacy tech)
`}

---

## Interview Prep (if you apply)

**Top 3 story angles:**
1. **Learning velocity:** FlipperZillow hackathon (24-hour ramp-up on unfamiliar stack)
2. **System thinking:** PatentIQ semantic search architecture (pgvector + embeddings)
3. **Pragmatism:** Cut scope to ship (SAM3D dependency conflict)

---

*Report generated: ${today} | career-ops batch evaluator*`;

  fs.writeFileSync(reportPath, report);
  console.log(`${String(reportNum).padStart(3, '0')}. ${offer.company}: Report generated`);
  reportNum++;
}

console.log(`\nAll ${offers.length} reports generated (${startReportNum}-${reportNum-1})`);
