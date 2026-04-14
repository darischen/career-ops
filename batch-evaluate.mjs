import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Read all JD HTML files
const jdFiles = [
  { num: 1, name: 'unum', company: 'Unum', role: 'IT Associate - Software Engineer', location: 'Chattanooga, TN' },
  { num: 2, name: 'cai', company: 'Computer Aided Inc', role: 'Junior Data Engineer', location: 'Florida (Remote)' },
  { num: 3, name: 'caci', company: 'CACI International', role: 'Junior C++ Software Engineer', location: 'Bethesda, MD' },
  { num: 4, name: 'pae', company: 'PAE (Amentum)', role: 'Junior Software Engineer', location: 'Dahlgren, VA' },
  { num: 5, name: 'axon', company: 'Axon', role: 'Software Engineer I', location: 'Seattle/Scottsdale/Boston/Atlanta' },
  { num: 6, name: 'leidos', company: 'Leidos', role: 'Junior Software Engineer', location: 'Columbia, MD' },
  { num: 7, name: 'kbr', company: 'KBR', role: 'Junior Communications Systems Software Engineer', location: 'Beavercreek, OH' },
  { num: 8, name: 'cvs', company: 'CVS Health', role: 'Associate Software Development Engineer (Google Workspace Admin)', location: 'Illinois (Remote)' },
  { num: 9, name: 'boeing', company: 'Boeing', role: 'Entry-Level Simulation Software Test Engineer', location: 'Oklahoma City, OK' }
];

const results = [];

for (const jd of jdFiles) {
  const htmlPath = `./batch/jd-${jd.num}-${jd.name}.html`;
  
  try {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    
    // Extract text content
    const body = doc.body.innerText || doc.body.textContent || '';
    const title = doc.title || '';
    
    // Check if JD is active (has substantial content)
    const isActive = body.length > 500 && (body.includes('job') || body.includes('engineer') || body.includes('salary'));
    
    results.push({
      num: jd.num,
      name: jd.name,
      company: jd.company,
      role: jd.role,
      location: jd.location,
      isActive,
      contentLength: body.length,
      preview: body.substring(0, 200)
    });
    
    console.log(`${jd.num}. ${jd.company}: ${isActive ? 'ACTIVE' : 'INACTIVE'} (${body.length} chars)`);
  } catch (e) {
    console.error(`${jd.num}. ${jd.company}: ERROR - ${e.message}`);
    results.push({
      num: jd.num,
      name: jd.name,
      company: jd.company,
      role: jd.role,
      location: jd.location,
      isActive: false,
      error: e.message
    });
  }
}

fs.writeFileSync('./batch/jd-extraction.json', JSON.stringify(results, null, 2));
console.log('\nExtraction complete. Results saved to batch/jd-extraction.json');
