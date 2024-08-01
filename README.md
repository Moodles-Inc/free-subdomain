# Free Subdomains for app-from.us.to and app-from.uk.to

This repository allows users to request free subdomains under `app-from.us.to` and `app-from.uk.to` by creating a Pull Request.

## How to Request a Subdomain

1. Fork this repository.
2. Create a new JSON file in the `domains` directory. Name the file as `yourdomain.app-from.us.to.json` or `yourdomain.app-from.uk.to.json`.
3. Use the following format for the JSON file:
   ```json
   {
     "subdomain": "yoursubdomain",
     "domain": "app-from.us.to or app-from.uk.to"
     "github_username": "user",
     "description": "A brief description of the purpose of the subdomain",
     "records": {
       "A": ["1.0.0.1"],
       "AAAA": ["2000:db8::1"],
       "CNAME": ["example.com"],
       "MX": ["mail1.example.com"],
       "TXT": ["v=spf1 include:_spf.example.com ~all"]
     },
     "proxied": true
   }
   ```
4. Create a Pull Request with your new JSON file.

Once your Pull Request is approved, the subdomain will be created and configured.

## Contribution Guidelines

- Ensure the subdomain name is unique and does not infringe on any trademarks.
- Provide a valid description for the purpose of the subdomain.
- All requests are subject to approval and may be rejected if they do not meet the guidelines.
