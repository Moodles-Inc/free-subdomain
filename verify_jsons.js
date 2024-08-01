const fs = require('fs');
const path = require('path');

const subdomainsPath = path.join(__dirname, '..', 'subdomains.json');

const subdomains = JSON.parse(fs.readFileSync(subdomainsPath, 'utf8'));

subdomains.forEach(subdomain => {
    if (!subdomain.subdomain || !subdomain.domain || !subdomain.records) {
        throw new Error(`Invalid subdomain entry: ${JSON.stringify(subdomain)}`);
    }

    if (!['app-from.us.to', 'app-from.uk.to'].includes(subdomain.domain)) {
        throw new Error(`Invalid domain: ${subdomain.domain}`);
    }

    // Add more validation as needed
    console.log(`Validated ${subdomain.subdomain}.${subdomain.domain}`);
});
