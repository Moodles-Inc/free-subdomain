const fs = require('fs');
const path = require('path');

const domainsPath = path.join(__dirname, '..', 'domains');
const dnsconfigPath = path.join(__dirname, '..', 'dnsconfig.js');

let dnsconfigContent = `
var REG_NONE = NewRegistrar('none');
var CLOUDFLARE = NewDnsProvider('cloudflare');

`;

fs.readdir(domainsPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(domainsPath, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      dnsconfigContent += `
      D('${data.domain}', REG_NONE, DnsProvider(CLOUDFLARE),
        A('${data.subdomain}', ${JSON.stringify(data.records.A || [])}),
        AAAA('${data.subdomain}', ${JSON.stringify(data.records.AAAA || [])}),
        CNAME('${data.subdomain}', ${JSON.stringify(data.records.CNAME || [])}),
        MX('${data.subdomain}', ${JSON.stringify(data.records.MX || [])}),
        TXT('${data.subdomain}', ${JSON.stringify(data.records.TXT || [])}),
        CF_PROXY_ON(${data.proxied || false})
      );
      `;
    }
  });

  fs.writeFileSync(dnsconfigPath, dnsconfigContent, 'utf8');
});
