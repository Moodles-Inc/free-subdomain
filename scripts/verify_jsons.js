const fs = require('fs');
const path = require('path');

// Load allowed IPs
const allowedIpsPath = path.join(__dirname, 'allowed_ips.json');
const allowedIps = JSON.parse(fs.readFileSync(allowedIpsPath, 'utf8')).allowed_ips;

// Function to get the client's IP address (for demonstration purposes, we use a hardcoded IP)
const getClientIp = () => {
  // Replace this with the actual method to get the client's IP address
  return '203.0.113.1'; // Example IP address
};

const clientIp = getClientIp();

if (!allowedIps.includes(clientIp)) {
  throw new Error(`IP address ${clientIp} is not allowed to perform this action.`);
}

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
