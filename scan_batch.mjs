import https from 'https';
import fs from 'fs';
import yaml from 'js-yaml';

const config = yaml.load(fs.readFileSync('portals.yml', 'utf8'));
const scanHistory = fs.readFileSync('data/scan-history.tsv', 'utf8').split('\n');
const historySet = new Set(scanHistory.map(l => l.split('\t')[1])); // URL at index 1

function fetchAPI(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function scanAPIs() {
  const results = [];
  const apis = config.tracked_companies.filter(c => c.api);
  
  for (const company of apis) {
    try {
      const data = await fetchAPI(company.api);
      if (data.jobs) {
        for (const job of data.jobs.slice(0, 5)) { // Limit to first 5 per company
          const url = job.absolute_url || job.url;
          if (url && !historySet.has(url)) {
            results.push({
              company: company.name,
              title: job.title,
              url: url,
              source: 'Greenhouse API'
            });
          }
        }
      }
    } catch (e) {
      console.error(`Error scanning ${company.name}:`, e.message);
    }
  }
  
  return results;
}

scanAPIs().then(results => {
  console.log('API Scan Results:');
  console.log(`Found ${results.length} new offers from Greenhouse APIs`);
  results.forEach(r => {
    console.log(`+ ${r.company} | ${r.title}`);
  });
  process.exit(0);
}).catch(e => {
  console.error('Scan failed:', e);
  process.exit(1);
});
