# TUCO Logistics Enterprise Readiness Log

## Completed
- Added CloudFront error responses: `403` -> `200` `/index.html`, `404` -> `200` `/index.html`.
- Aligned CORS so the contact API preflight succeeds (OPTIONS route + origin match).
- S3 + CloudFront hosting with OAC enabled and bucket policy aligned to distribution `E2TV8XVFHS6KPF`.
- API Gateway routes for tracking and contact; Lambda Function URLs disabled.
- Contact Lambda updated to use SSM prefix `/tuco/dw/prod/graph/` and AWS SDK v3; Node.js 24 runtime; curl test works.
- Vue router switched to history mode (no `#/` in URLs).
- OPTIONS `/contact` route added to API Gateway.
- API Gateway global throttling configured for contact and tracking.

## To Verify
- CORS alignment: Lambda `ALLOWED_ORIGIN` matches `https://d27oxa21i8cyxa.cloudfront.net` exactly (no trailing slash), API Gateway CORS disabled.

## Remaining
- CloudWatch alarms for API Gateway 4xx/5xx, latency, throttles; Lambda errors/duration; log retention policy.
- CloudFront security headers (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy).
- Create `api.tuco.com.au` custom domain and map API Gateway when DNS access is available.
- Change site domain to `tuco.com.au` when ready (CloudFront custom domain + DNS switch).
- WAF rate-based rules (per-IP) for `/contact` and `/track` when ready.
- Transfer DNS from Freightmate AWS to TUCO AWS (domain ownership, hosted zone, records, and SSL certs).

## CloudFront Domain Cutover (tuco.com.au)
1) Request/validate an ACM certificate in **us-east-1** for `tuco.com.au` and `www.tuco.com.au`.
2) CloudFront distribution -> Settings:
   - Add alternate domain names: `tuco.com.au`, `www.tuco.com.au`.
   - Attach the ACM cert from us-east-1.
3) DNS (when ready):
   - Point `www` to CloudFront distribution domain via CNAME/ALIAS.
   - For apex `tuco.com.au`, use ALIAS/ANAME to CloudFront (or Route 53 alias).
4) Test and then switch traffic.

## SEO Checklist (Minimum)
- Add `public/robots.txt` and `public/sitemap.xml`.
- Add canonical URLs once the custom domain is live.
- Add OpenGraph/Twitter meta tags for sharing.
- Register the domain in Google Search Console and submit sitemap.
- Verify analytics is installed (if required by marketing).

## Completed Today (Summary)
- Switched Vue router to history mode (no `#/`).
- Fixed CloudFront access (OAC + bucket policy alignment).
- Moved tracking/contact to API Gateway URLs and removed Lambda Function URLs.
- Updated contact Lambda for SSM-backed secrets and Node.js 24 (AWS SDK v3).
- Enabled CloudFront error responses for SPA refresh.
- Added OPTIONS preflight for contact route and aligned CORS origin.
- Set global API throttling for contact and tracking.
