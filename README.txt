Man Camp South static site package

Files:
- index.html
- about.html
- details.html
- store.html
- assets/css/styles.css
- assets/js/config.js
- assets/js/site.js
- assets/brand/*
- assets/images/*
- favicon.svg / favicon.png

How to deploy to Cloudflare Pages:
1. Replace the files in your GitHub repo with these files.
2. Commit and push.
3. Cloudflare Pages will auto-deploy.

Fastest future edits:
- General styling: assets/css/styles.css
- Event details and store products: assets/js/config.js
- Logo/banner files: assets/brand/

Store page setup later:
- Add Stripe Payment Links by editing each product's buyUrl in assets/js/config.js
