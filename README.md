# Free Subdomains for app-from.us.to and app-from.uk.to

This repository allows users to request free subdomains under `app-from.us.to` and `app-from.uk.to` by creating a Pull Request.

## How to Request a Subdomain

1. Fork this repository.
2. Create a new JSON file in the `subdomains` directory. Name the file as `your-subdomain.json`.
3. Use the following format for the JSON file:
   ```json
   {
     "subdomain": "yoursubdomain",
     "domain": "app-from.us.to or app-from.uk.to",
     "github_username": "user",
     "description": "A brief description of the purpose of the subdomain",
     "records": {
       "A": ["1.0.0.1", "1.0.0.2"],
       "AAAA": ["2000:db8::1", "2000:db8::2"],
       "CNAME": ["example.com"],
       "MX": ["mail1.example.com", "mail2.example.com"],
       "TXT": ["v=spf1 include:_spf.example.com ~all"]
     },
     "proxied": true
   }
   ```
4. Create a Pull Request to willi-felix/free-subdomains. We will review your request and accept or ignore it
