# Technical Stack Decision & Implementation Guide

## Recommended Tech Stack

### Primary Choice: **Astro** (Recommended)

**Why Astro:**
- ✅ Built for static sites and optimal performance
- ✅ Zero JavaScript by default (fast load times)
- ✅ Ships with Tailwind CSS support out-of-the-box
- ✅ Perfect for content-heavy sites (this is one)
- ✅ Easy GitHub Pages integration via GitHub Actions
- ✅ Component-based (React-like syntax available)
- ✅ Built-in image optimization
- ✅ Excellent SEO support
- ✅ Fast build times (~2-3 seconds)
- ✅ No database needed

**Tech Stack Details:**
```
Frontend Framework: Astro 4.x
Styling: Tailwind CSS 3.x
Component Framework: None needed (Astro islands for interactivity)
Hosting: GitHub Pages (static)
CI/CD: GitHub Actions
Form Handling: Formspree or Basin (third-party)
Analytics: Plausible or Fathom (privacy-friendly, no consent needed)
```

---

## Alternative Option: **Next.js 14** (If you prefer React)

**Why Next.js:**
- More familiar to many developers
- React ecosystem is vast
- Can use `next export` → GitHub Pages
- Good tooling and large community

**Downsides vs Astro:**
- Slightly larger bundle size
- More overhead for a static site
- Requires vercel.json configuration for GitHub Pages

**Tech Stack:**
```
Frontend Framework: Next.js 14.x (pages router)
Styling: Tailwind CSS 3.x
Component Framework: React 18.x
Static Export: `next export`
Hosting: GitHub Pages via GitHub Actions
Form Handling: Formspree or Basin
```

---

## **Decision: GO WITH ASTRO**

**Reasoning:**
1. **Performance:** Astro generates faster pages than Next.js (no React overhead)
2. **Simplicity:** This site doesn't need complex interactivity; Astro shines for content
3. **Build Speed:** Astro builds in ~2-3 seconds; Next.js can take longer
4. **SEO:** Native Astro support for meta tags, sitemap, RSS
5. **Maintenance:** Less boilerplate, clearer code structure
6. **Cost:** Free tier on GitHub Pages + free form service
7. **Learning Curve:** Easier than Next.js for this use case

---

## Complete Tech Stack (Final Decision)

### Frontend
```
Framework:        Astro 4.x
UI Components:    Astro (no external component library)
Styling:          Tailwind CSS 3.x
Typography:       System fonts (no external font loading)
Icons:            Lucide Icons or Feather (npm package)
Image Handling:   Astro Image component (built-in optimization)
```

### Content & Data
```
Content:          Markdown files in `src/content/` (if blog posts needed)
Config:           JSON/JavaScript config files
SEO:              @astrojs/sitemap, meta tags, Open Graph
```

### Forms & Backend
```
Contact Form:     HTML form + Formspree (free tier: 50 submissions/month)
Alternative:      Basin.js (free tier: 100 submissions/month)
Email Delivery:   Formspree or Basin handles it
Database:         None needed (form data sent to email)
```

### Deployment
```
Hosting:          GitHub Pages (free)
Build:            GitHub Actions (free)
Domain:           Custom domain optional (via DNS)
SSL:              Automatic (GitHub Pages provides)
CDN:              GitHub's CDN (built-in)
Bandwidth:        Unlimited on GitHub Pages
```

### Analytics (Optional)
```
Primary Choice:   Plausible (privacy-friendly, no consent needed, €10/mo)
Alternative:      Fathom (simple, privacy-first, $14/mo)
Or Free:          Goat Counter (free, self-hosted option)
Note:             Avoid Google Analytics for German audience (needs consent)
```

### Developer Tools
```
Package Manager:  npm or pnpm (recommend pnpm for speed)
Node Version:     18.x or 20.x
Git:              Standard GitHub workflow
Linting:          ESLint + Prettier (optional but recommended)
Testing:          Vitest (optional, for component testing)
```

---

## Installation & Setup Instructions

### Step 1: Create Astro Project Locally

```bash
npm create astro@latest life-coaching-webseite -- --template minimal
cd life-coaching-webseite
```

### Step 2: Install Dependencies

```bash
npm install
# Dependencies to add:
npm install -D tailwindcss postcss autoprefixer lucide
npm install @astrojs/sitemap
npm install framer-motion  # For smooth animations (optional)
```

### Step 3: Configure Tailwind CSS

```bash
npx tailwindcss init -p
```

**Update `tailwind.config.mjs`:**
```javascript
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f172a',
        'primary-light': '#f8fafc',
        'accent-gray': '#e2e8f0',
        'page-bg': '#f5f2ec',
        'text-primary': '#0f172a',
        'text-secondary': '#334155',
        'text-tertiary': '#475569',
        'border-gray': '#94a3b8',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    fontFamily: {
      sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
```

### Step 4: Configure Astro for GitHub Pages

**Update `astro.config.mjs`:**
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://yourusername.github.io/life-coaching-webseite',
  // OR if using custom domain:
  // site: 'https://www.meik-coaching.de',
  output: 'static',   // GitHub Pages requires static output
  outDir: './dist',
});
```

### Step 5: Project Structure

```
life-coaching-webseite/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── ServiceCard.astro
│   │   ├── ContactForm.astro
│   │   └── TrustChip.astro
│   ├── layouts/
│   │   └── Layout.astro      # Main layout wrapper
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── coaching.astro    # Services overview
│   │   ├── services/
│   │   │   ├── life-coaching.astro
│   │   │   ├── raucherentwohnung.astro
│   │   │   ├── alkohol-selbstbestimmt.astro
│   │   │   ├── stressbewaeltigung.astro
│   │   │   └── autogenes-training.astro
│   │   ├── profil.astro
│   │   ├── motivation.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── agb.astro
│   │   └── 404.astro
│   ├── content/              # For future blog posts (Astro Content Collections)
│   │   └── blog/
│   └── styles/
│       └── global.css        # Global Tailwind imports
├── public/
│   ├── images/
│   │   └── coach-portrait.jpg
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### Step 6: Create GitHub Actions Workflow

**Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Step 7: Update package.json scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### Step 8: Local Development

```bash
npm run dev
# Open http://localhost:3000
```

### Step 9: Deploy to GitHub Pages

```bash
git add .
git commit -m "Initial site setup with Astro"
git push origin main
```

GitHub Actions will automatically:
1. Build the site
2. Run tests (if configured)
3. Deploy to GitHub Pages
4. Site available at: `https://yourusername.github.io/life-coaching-webseite/`

---

## File Upload to GitHub

### Setting Up Repository

1. **Initialize Git in the project:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Astro site setup"
   git branch -M main
   ```

2. **Add Remote:**
   ```bash
   git remote add origin https://github.com/yourusername/life-coaching-webseite.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo → Settings → Pages
   - Source: GitHub Actions
   - Branch: (will be automatic)

---

## Form Handling Setup

### Option 1: Formspree (Recommended for simplicity)

1. **Sign up:** https://formspree.io (free tier: 50/month)
2. **Add form endpoint to contact form:**

```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <select name="service" required>
    <option value="">Select a service...</option>
    <option value="life-coaching">Life Coaching</option>
    <option value="raucherentwohnung">Raucherentwöhnung</option>
    <!-- etc -->
  </select>
  <textarea name="message" placeholder="Your message" required></textarea>
  <button type="submit">Anfrage senden</button>
</form>
```

3. **Get form ID from Formspree dashboard**

### Option 2: Basin (More generous free tier)

1. **Sign up:** https://basin.js (free tier: 100/month)
2. **Create form and get endpoint**
3. **Use same form structure as Formspree**

---

## Deployment Checklist

- [ ] Astro project created and running locally
- [ ] Tailwind CSS configured with design system colors/spacing
- [ ] All pages created (13 pages)
- [ ] Responsive components tested (mobile, tablet, desktop)
- [ ] Contact form configured (Formspree or Basin)
- [ ] Images optimized and added to `/public/images/`
- [ ] Meta tags and SEO configured per page
- [ ] 404 page created
- [ ] robots.txt configured
- [ ] sitemap.xml auto-generated
- [ ] GitHub Actions workflow created
- [ ] Repository pushed to GitHub
- [ ] GitHub Pages enabled in settings
- [ ] Site built and deployed
- [ ] Domain configured (optional)
- [ ] Analytics configured (optional)

---

## Performance Targets

**Lighthouse Scores (Desktop):**
- Performance: > 95
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

**Load Time Targets:**
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

(Astro achieves these easily)

---

## Custom Domain Setup (Optional)

If you want to use a custom domain (e.g., meik-coaching.de):

1. **Register domain** (e.g., namecheap.com, ionos.de)
2. **Add DNS records:**
   ```
   CNAME: www.meik-coaching.de → yourusername.github.io
   A records for apex domain (see GitHub docs)
   ```
3. **Update `astro.config.mjs`:**
   ```javascript
   site: 'https://www.meik-coaching.de'
   ```
4. **Add CNAME file to `/public/CNAME`:**
   ```
   www.meik-coaching.de
   ```

---

## SSL Certificate

GitHub Pages automatically provides SSL for both:
- `yourusername.github.io/*` (GitHub's cert)
- Custom domain (automatic Let's Encrypt, ~24 hour wait)

No action needed; it's automatic.

---

## Maintenance & Updates

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. Import layout and components
3. Write content
4. Push to GitHub → auto-deploys

### Updating Content
1. Edit `.astro` files
2. Commit and push
3. GitHub Actions rebuilds automatically (~30 seconds)

### Analytics Tracking
- Install Plausible script or similar
- Track page views, clicks, form submissions
- View analytics dashboard

---

## Common Issues & Solutions

### Issue: GitHub Actions build fails
**Solution:**
- Check Node version matches `package.json`
- Ensure all dependencies installed: `npm ci`
- Check for import errors in terminal

### Issue: Images not loading after deploy
**Solution:**
- Ensure images in `/public/` folder
- Use correct relative paths in Astro
- Check file names match (case-sensitive)

### Issue: Form submissions not working
**Solution:**
- Verify Formspree/Basin form ID correct
- Check form action URL
- Test submission in Formspree dashboard
- Check spam folder

### Issue: Page not available at custom domain
**Solution:**
- Wait 24 hours for DNS propagation
- Verify CNAME record in DNS settings
- Check `/public/CNAME` file exists and correct

---

## Summary

**Tech Stack Final:**
- Framework: Astro 4.x
- Styling: Tailwind CSS 3.x
- Hosting: GitHub Pages (free)
- Forms: Formspree or Basin
- CI/CD: GitHub Actions (free)
- Analytics: Plausible (optional, €10/mo)

**Development Time:** 5–10 days (dependent on complexity)

**Cost:** Free (except optional analytics)

**Maintenance:** Minimal (updates via git commits)

---

## Next Steps

1. **Install Astro locally**
2. **Set up repository on GitHub**
3. **Configure GitHub Actions workflow**
4. **Create page components from design system**
5. **Add content from content brief**
6. **Set up form handling (Formspree)**
7. **Test locally (`npm run dev`)**
8. **Deploy to GitHub Pages (git push)**

Ready to start implementation!
