import { chromium } from 'playwright';

const urls = [
  { num: 1, name: 'unum', url: 'https://unum.wd1.myworkdayjobs.com/en-US/external/job/Chattanooga-Tennessee-USA/IT-Associate---Software-Engineer_835051' },
  { num: 2, name: 'cai', url: 'https://cai.wd5.myworkdayjobs.com/en-US/computer_aid/job/FL-CLIENT-STATE/Junior-Data-Engineer_R7496' },
  { num: 3, name: 'caci', url: 'https://caci.wd1.myworkdayjobs.com/en-US/external/job/US-MD-Bethesda/Junior-C--Software-Engineer_324627' },
  { num: 4, name: 'pae', url: 'https://pae.wd1.myworkdayjobs.com/en-US/amentum_careers/job/US-VA-Dahlgren/Junior-Software-Engineer_R0158659' },
  { num: 5, name: 'axon', url: 'https://job-boards.greenhouse.io/axon/jobs/7662648003' },
  { num: 6, name: 'leidos', url: 'https://leidos.wd5.myworkdayjobs.com/en-US/external/job/Columbia-MD/Junior-Software-Engineer_R-00180476' },
  { num: 7, name: 'kbr', url: 'https://kbr.wd5.myworkdayjobs.com/en-US/kbr_careers/job/Beavercreek-Ohio/Junior-Communications-Systems-Software-Engineer_R2121814' },
  { num: 8, name: 'cvs', url: 'https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/Work-At-Home-Illinois/Associate-Software-Development-Engineer--Google-Workspace-Administrator-_R0881317' },
  { num: 9, name: 'boeing', url: 'https://boeing.wd1.myworkdayjobs.com/en-US/external_subsidiary/job/USA---Oklahoma-City-OK/Entry-Level-Simulation-Software-Test-Engineer_JR2026501258' }
];

const browser = await chromium.launch();

for (const { num, name, url } of urls) {
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    const content = await page.content();
    const fs = await import('fs');
    fs.writeFileSync(`./batch/jd-${num}-${name}.html`, content);
    await page.close();
    console.log(`${num}. ${name}: OK`);
  } catch (e) {
    console.log(`${num}. ${name}: ERROR - ${e.message}`);
  }
}

await browser.close();
console.log('All JDs fetched');
