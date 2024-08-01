var REG_NONE = NewRegistrar('none'); // No registrar needed
var CLOUDFLARE = NewDnsProvider('cloudflare');

// Load the JSON files and parse them
var fs = require('fs');
var subdomains = JSON.parse(fs.readFileSync('./subdomains.json', 'utf8'));

subdomains.forEach(function (subdomain) {
    D(subdomain.domain, REG_NONE, DnsProvider(CLOUDFLARE),
        A(subdomain.subdomain, subdomain.records.A || []),
        AAAA(subdomain.subdomain, subdomain.records.AAAA || []),
        CNAME(subdomain.subdomain, subdomain.records.CNAME || []),
        MX(subdomain.subdomain, subdomain.records.MX || []),
        TXT(subdomain.subdomain, subdomain.records.TXT || []),
        CF_PROXY_ON(subdomain.proxied || false)
    );
});
