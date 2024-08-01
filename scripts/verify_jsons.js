const fs = require('fs');
const path = require('path');

const domainsPath = path.join(__dirname, '..', 'domains');

fs.readdir(domainsPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(domainsPath, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      if (!data.subdomain || !data.domain || !data.records) {
        throw new Error(`Invalid subdomain entry in ${file}`);
      }

      if (!['app-from.us.to', 'app-from.uk.to'].includes(data.domain)) {
        throw new Error(`Invalid domain in ${file}: ${data.domain}`);
      }

      console.log(`Validated ${data.subdomain}.${data.domain}`);
    }
  });
});
