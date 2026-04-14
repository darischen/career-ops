import fs from 'fs';

const today = '2026-04-14';
const offers = [
  { num: 145, name: 'unum', company: 'Unum', role: 'IT Associate - Software Engineer', score: '2.8' },
  { num: 146, name: 'cai', company: 'Computer Aided Inc', role: 'Junior Data Engineer', score: '3.1' },
  { num: 147, name: 'caci', company: 'CACI International', role: 'Junior C++ Software Engineer', score: '3.4' },
  { num: 148, name: 'pae', company: 'PAE (Amentum)', role: 'Junior Software Engineer', score: '2.9' },
  { num: 149, name: 'axon', company: 'Axon', role: 'Software Engineer I', score: '4.2' },
  { num: 150, name: 'leidos', company: 'Leidos', role: 'Junior Software Engineer', score: '3.0' },
  { num: 151, name: 'kbr', company: 'KBR', role: 'Junior Communications Systems Software Engineer', score: '3.3' },
  { num: 152, name: 'cvs', company: 'CVS Health', role: 'Associate Software Development Engineer', score: '2.6' },
  { num: 153, name: 'boeing', company: 'Boeing', role: 'Entry-Level Simulation Software Test Engineer', score: '3.5' }
];

// Clear old entries
const oldDir = './batch/tracker-additions/merged';
const files = fs.readdirSync(oldDir).filter(f => /^(145|146|147|148|149|150|151|152|153)-/.test(f));
for (const f of files) {
  fs.unlinkSync(`${oldDir}/${f}`);
}

for (const offer of offers) {
  const reportLink = `[${offer.num}](reports/${String(offer.num).padStart(3, '0')}-${offer.name}-${today}.md)`;
  // TSV format: num \t date \t company \t role \t status \t score \t pdf \t report \t notes
  const tsv = `${offer.num}\t${today}\t${offer.company}\t${offer.role}\tEvaluated\t${offer.score}/5\t✅\t${reportLink}\t`;

  const tsvPath = `./batch/tracker-additions/merged/${String(offer.num).padStart(3, '0')}-${offer.name}.tsv`;
  fs.writeFileSync(tsvPath, tsv);
  console.log(`${offer.num}. ${offer.company}: TSV entry (score ${offer.score}/5)`);
}

console.log(`\nAll tracker TSV entries created in batch/tracker-additions/merged/`);
