import fs from 'fs';

const today = '2026-04-14';
const offers = [
  { num: 145, name: 'unum', company: 'Unum', role: 'IT Associate - Software Engineer', score: '2.8/5' },
  { num: 146, name: 'cai', company: 'Computer Aided Inc', role: 'Junior Data Engineer', score: '3.1/5' },
  { num: 147, name: 'caci', company: 'CACI International', role: 'Junior C++ Software Engineer', score: '3.4/5' },
  { num: 148, name: 'pae', company: 'PAE (Amentum)', role: 'Junior Software Engineer', score: '2.9/5' },
  { num: 149, name: 'axon', company: 'Axon', role: 'Software Engineer I', score: '4.2/5' },
  { num: 150, name: 'leidos', company: 'Leidos', role: 'Junior Software Engineer', score: '3.0/5' },
  { num: 151, name: 'kbr', company: 'KBR', role: 'Junior Communications Systems Software Engineer', score: '3.3/5' },
  { num: 152, name: 'cvs', company: 'CVS Health', role: 'Associate Software Development Engineer', score: '2.6/5' },
  { num: 153, name: 'boeing', company: 'Boeing', role: 'Entry-Level Simulation Software Test Engineer', score: '3.5/5' }
];

for (const offer of offers) {
  const tsv = `${offer.num}\t${today}\t${offer.company}\t${offer.role}\t[${offer.num}](reports/${String(offer.num).padStart(3, '0')}-${offer.name}-${today}.md)\tEvaluated\t${offer.score}\t✅\t`;

  const tsvPath = `./batch/tracker-additions/${String(offer.num).padStart(3, '0')}-${offer.name}.tsv`;
  fs.writeFileSync(tsvPath, tsv);
  console.log(`${offer.num}. ${offer.company}: TSV entry created`);
}

console.log(`\nAll tracker TSV entries created in batch/tracker-additions/`);
