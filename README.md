# TestOps Engineering — testopseng.com

QA & Automation Consulting website. Plain static site (HTML + CSS + JavaScript, no build step), deployed to GitHub Pages via GitHub Actions and hosted on Vercel with the custom domain.

## Project Structure

```
index.html          # Landing page
contact.html        # Contact form (FormSubmit.co)
css/
  styles.css        # Landing page styles
  contact.css       # Contact page styles
js/
  main.js           # Mobile menu + active nav highlighting
  analytics.js      # Vercel Web Analytics queue stub
test_ops_logo.png   # Site logo
testops_image.png   # OG / favicon image
CNAME               # testopseng.com
```

## Analytics (Vercel Web Analytics)

Each page loads `js/analytics.js` and `/_vercel/insights/script.js`. That script is served by Vercel only, so page views are recorded on the Vercel deployment (not on GitHub Pages or locally).

To see data:
1. Vercel dashboard → project → **Analytics** tab → **Enable** (if not already).
2. Deploy, visit the site, and navigate between pages. Data appears within ~30 seconds.
3. If nothing shows, disable ad/content blockers and check that `testopseng.com` points to the Vercel deployment.

## Local Development

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Still To Do

- [ ] Replace `YOUR_EMAIL@example.com` in `contact.html` form action with the real address
- [ ] Create a `/thanks` page (the form's `_next` redirect) or change the redirect
- [ ] Replace case study metrics with real project numbers
- [ ] FormSubmit.co activation — confirm the first submission email
- [ ] Submit sitemap / verify domain in Google Search Console
