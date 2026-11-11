# TestOps Engineering — testopseng.com

QA & Automation Consulting website for TestOps Engineering. Built with Next.js 14 (App Router), deployed to GitHub Pages via GitHub Actions, and also hosted on Vercel with a custom domain.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 App Router |
| Rendering | Static export (`output: 'export'`) |
| Hosting | GitHub Pages + Vercel |
| Domain | testopseng.com (via CNAME) |
| Fonts | DM Mono · Instrument Serif · DM Sans (via `next/font/google`) |
| Styling | Global CSS with CSS variables |
| Forms | FormSubmit.co |
| Analytics | Vercel Web Analytics (`@vercel/analytics`) |

---

## Project Structure

```
src/
  app/
    page.tsx          # Main landing page
    contact/
      page.tsx        # Contact form page
    layout.tsx        # Root layout (fonts, metadata, viewport)
    globals.css       # All styles and responsive breakpoints
    sitemap.ts        # Generates /sitemap.xml
    robots.ts         # Generates /robots.txt
  components/
    Nav.tsx           # Sticky nav (mobile menu, scroll highlight, page-aware links)
    TrustCarousel.tsx # Infinite logo carousel (trust bar)
public/
  logos/              # Company logo SVGs and PNGs for carousel
  test_ops_logo.png   # Site logo
  testops_image.png   # OG / favicon image
```

---

## What Was Built

### Next.js Migration
- Migrated from a Vite + static HTML setup to **Next.js 14 App Router** with full TypeScript
- Configured static export (`output: 'export'`) for GitHub Pages compatibility
- Added `vercel.json` so Vercel knows to serve from the `out/` directory
- Updated GitHub Actions workflow to upload from `./out` instead of `./dist`

### Pages
- **Home (`/`)** — Hero with terminal widget, trust carousel, Who it's for, Services (4), AI banner, Process (4 steps), Case Studies (2), Tech Stack grid, Pricing (3 tiers), Footer
- **Contact (`/contact`)** — Contact form via FormSubmit.co with service/timeline selectors

### Navigation
- Sticky nav with blur backdrop and scroll-based section highlighting
- Mobile hamburger menu with outside-click dismiss
- **Page-aware links**: on the contact page, section links become `/#section` so they navigate home first; the "Contact" CTA swaps to a "Home" button

### Trust Carousel
- Infinite CSS marquee (no JS animation) centered within the page max-width
- Real SVG/PNG logos: Google, Meta, Apple, Samsung, Hulu, Bank of America, Gap, Avid Technology
- Grayscale → full color transition on hover (0.35s ease)
- Edge fade masks via CSS `mask-image`

### Mobile Responsive
- Breakpoints at 900px, 768px, 720px, 560px, and 400px
- iOS Safari fixes: `font-size: 16px` on form inputs (prevents auto-zoom), `overflow-x: clip` on `html` (fixes bottom gap bug)
- Full-width tap targets for buttons on mobile
- Terminal widget scrolls horizontally on narrow screens
- Safe-area aware footer

### Analytics
- `<Analytics />` from `@vercel/analytics/next` is rendered in `src/app/layout.tsx`, so every page records views
- Data appears in the Vercel dashboard → **Analytics** tab once this is deployed to production on Vercel
- Only the Vercel deployment records data (the script isn't served on GitHub Pages); ad blockers also block it

### SEO / Search Console
- `metadataBase` set to `https://testopseng.com` for correct OG/canonical tags
- `sitemap.xml` generated at build time listing all pages
- `robots.txt` pointing to the sitemap
- Fixes Google Search Console "Alternate page with proper canonical tag" warning

---

## What Still Needs To Be Done

### Content
- [ ] **Replace case study metrics** with real project numbers (flakiness %, velocity, time saved)
- [ ] **Update the contact form action** — replace `YOUR_EMAIL@example.com` in `src/app/contact/page.tsx` with the real email address
- [ ] **Update the `_next` redirect URL** in the contact form (`https://testopseng.com/thanks/`) — either create a `/thanks` page or change the redirect destination
- [ ] **Stack section** — remove or add tools to match your actual stack

### Design / UX
- [ ] **Add a `/thanks` page** — confirmation page shown after the contact form is submitted
- [ ] **Hero stats** — the original design had 4 stat blocks below the CTA buttons; add real numbers or remove the CSS placeholder
- [ ] **Favicon** — currently uses `testops_image.png`; consider a dedicated `.ico` or smaller square PNG

### Logos / Branding
- [ ] **Samsung logo size** — may need further tuning depending on screen
- [ ] **Avid logo** — using a Google-cached PNG thumbnail; replace with an official SVG when available from Avid's brand kit

### Technical
- [ ] **Merge PR #1** (`feat/typescript-migration` → `main`) to trigger the GitHub Pages deployment
- [ ] **Submit sitemap** to Google Search Console: `https://testopseng.com/sitemap.xml`
- [ ] **Verify domain ownership** in Search Console if not already done
- [ ] **FormSubmit.co activation** — the first form submission to a new email address requires clicking a confirmation link that FormSubmit sends
- [ ] **Add `noindex` to 404 page** if Search Console flags it

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Static export → out/
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/pages.yml`), which builds and deploys to GitHub Pages automatically.
