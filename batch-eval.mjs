import fs from 'fs';

// Simple HTML text extractor
function extractText(html) {
  let text = html
    .replace(/<script[^>]*>.*?<\/script>/gis, '')
    .replace(/<style[^>]*>.*?<\/style>/gis, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  return text;
}

const jds = [
  { num: 1, name: 'unum', company: 'Unum' },
  { num: 2, name: 'cai', company: 'CAI' },
  { num: 3, name: 'caci', company: 'CACI' },
  { num: 4, name: 'pae', company: 'PAE' },
  { num: 5, name: 'axon', company: 'Axon' },
  { num: 6, name: 'leidos', company: 'Leidos' },
  { num: 7, name: 'kbr', company: 'KBR' },
  { num: 8, name: 'cvs', company: 'CVS Health' },
  { num: 9, name: 'boeing', company: 'Boeing' },
];

for (const jd of jds) {
  try {
    const html = fs.readFileSync(`./batch/jd-${jd.num}-${jd.name}.html`, 'utf8');
    const text = extractText(html);
    fs.writeFileSync(`./batch/jd-${jd.num}-${jd.name}.txt`, text);
    console.log(`${jd.num}. ${jd.company}: extracted (${text.length} chars)`);
  } catch (e) {
    console.log(`${jd.num}. ${jd.company}: ERROR - ${e.message}`);
  }
}
