import fs from 'fs';
import { execSync } from 'child_process';

const offers = [
  { num: 1, name: 'unum', company: 'Unum', keywords: ['Java', 'Spring', 'Healthcare IT'] },
  { num: 2, name: 'cai', company: 'CAI', keywords: ['Python', 'SQL', 'Data pipelines', 'ETL'] },
  { num: 3, name: 'caci', company: 'CACI', keywords: ['C++', 'Systems programming'] },
  { num: 4, name: 'pae', company: 'PAE', keywords: ['Java', 'JavaScript', 'Python'] },
  { num: 5, name: 'axon', company: 'Axon', keywords: ['AI-assisted development', 'Cloud', 'Modern frameworks'] },
  { num: 6, name: 'leidos', company: 'Leidos', keywords: ['Java', 'SQL'] },
  { num: 7, name: 'kbr', company: 'KBR', keywords: ['C', 'C++', 'Systems'] },
  { num: 8, name: 'cvs', company: 'CVS', keywords: ['Python', 'Cloud'] },
  { num: 9, name: 'boeing', company: 'Boeing', keywords: ['C++', 'Testing', 'Simulation'] }
];

const today = '2026-04-14';
const templatePath = './templates/cv-template.html';
const template = fs.readFileSync(templatePath, 'utf8');

for (const offer of offers) {
  const summaryText = `Full-stack engineer with expertise in ${offer.keywords.slice(0, 2).join(', ')}. Built PatentIQ semantic search MVP with FastAPI + PostgreSQL. Strong in system architecture, performance optimization, and shipping products to users.`;

  const competencies = offer.keywords.slice(0, 6).map(k => `<span class="competency-tag">${k}</span>`).join(' ');

  const html = template
    .replace('{{SUMMARY_TEXT}}', summaryText)
    .replace('{{COMPETENCIES}}', competencies)
    .replace(/{{[A-Z_]+}}/g, (match) => {
      const replacements = {
        '{{LANG}}': 'en',
        '{{PAGE_WIDTH}}': '8.5in',
        '{{NAME}}': 'Daris Chen',
        '{{EMAIL}}': 'daris.chen@gmail.com',
        '{{LINKEDIN_DISPLAY}}': 'linkedin.com/in/darischen',
        '{{LINKEDIN_URL}}': 'https://linkedin.com/in/darischen',
        '{{PORTFOLIO_DISPLAY}}': 'darischen.com',
        '{{PORTFOLIO_URL}}': 'https://darischen.com',
        '{{LOCATION}}': 'San Diego, CA',
        '{{SECTION_SUMMARY}}': 'Professional Summary',
        '{{SECTION_COMPETENCIES}}': 'Core Competencies',
        '{{SECTION_EXPERIENCE}}': 'Work Experience',
        '{{SECTION_PROJECTS}}': 'Projects',
        '{{SECTION_EDUCATION}}': 'Education',
        '{{SECTION_SKILLS}}': 'Technical Skills'
      };
      return replacements[match] || match;
    });

  const tempPath = `./batch/temp-cv-${offer.name}.html`;
  fs.writeFileSync(tempPath, html);

  try {
    const pdfPath = `./output/cv-candidate-${offer.name}-${today}.pdf`;
    execSync(`node generate-pdf.mjs "${tempPath}" "${pdfPath}" --format=letter`, { stdio: 'inherit' });
    console.log(`${offer.num}. ${offer.company}: PDF generated`);
  } catch (e) {
    console.log(`${offer.num}. ${offer.company}: PDF generation skipped (generate-pdf.mjs may not exist)`);
  }

  fs.unlinkSync(tempPath);
}

console.log('PDF generation complete');
