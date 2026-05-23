# Life Coaching Website - Implementation Guide

## Project Overview

This is a professional life coaching website for **Christiane Meik**, a certified mental coach and psychotherapist specializing in:
- Life Coaching & Personal Development
- Stress Management
- Smoking Cessation (with hypnosis)
- Controlled Alcohol Consumption
- Autogenic Training

**Website Goal:** Build trust, explain services clearly, and drive contact requests / bookings for online coaching via Zoom.

**Target Audience:** German-speaking individuals seeking psychological coaching, primarily adults 25-65 with stress, burnout, or behavioral change needs.

---

## Planning Documents (Complete)

All planning and content materials are in `/content/` directory:

### 1. **[content/sitemap.md](content/sitemap.md)**
   - Overall site structure and navigation
   - Page hierarchy
   - UX rules and principles
   - **Use this to:** Understand the complete page structure before coding

### 2. **[content/page-outline.md](content/page-outline.md)**
   - Detailed outline for each of the 13 pages
   - Page goals and content sections
   - CTA strategy per page
   - **Use this to:** Plan page-by-page structure and component layout

### 3. **[content/wireframe-structure.md](content/wireframe-structure.md)**
   - Section-by-section layout logic for homepage and service pages
   - Responsive behavior notes (mobile/tablet/desktop)
   - Layout patterns for all page types
   - **Use this to:** Structure components and understand responsive breakpoints

### 4. **[content/homepage-wireframe.svg](content/homepage-wireframe.svg)**
   - Visual wireframe of desktop homepage layout
   - Section hierarchy, spacing, button placement
   - **Use this to:** Reference desktop layout when building components

### 5. **[content/homepage-wireframe-mobile.svg](content/homepage-wireframe-mobile.svg)**
   - Visual wireframe of mobile homepage layout
   - Single-column responsive flow
   - Touch target sizing
   - **Use this to:** Validate mobile-first responsive design

### 6. **[content/design-system.md](content/design-system.md)**
   - Complete design system with all specifications
   - Colors (with hex codes and contrast ratios)
   - Typography scales (mobile/tablet/desktop)
   - Spacing system (8px base unit)
   - Component library (buttons, cards, forms, hero, nav, footer)
   - Responsive breakpoints and behavior
   - Accessibility guidelines (WCAG AA+)
   - CSS architecture recommendations
   - **Use this to:** Build all components, define CSS variables, ensure consistency

### 7. **[content/content-brief-full.md](content/content-brief-full.md)**
   - Detailed content brief for all 13 pages
   - Suggested copy pulled from the coach's original outline (German)
   - Meta titles and descriptions
   - Word count targets
   - Visual notes per section
   - CTA placement strategy
   - Form specifications
   - SEO guidance
   - **Use this to:** Write all website copy and structure content sections

### 8. **[content/Psychofundlifecoaching.docx](content/Psychofundlifecoaching.docx)**
   - Original source content provided by the coach
   - Full descriptions of services, qualifications, contact info, legal text
   - Extract additional details or quotes as needed for authenticity

---

## Pages to Build (13 total)

### Main Pages
1. **Homepage** – Hero, trust strip, service overview, about preview, process, CTA
2. **Coaching Overview** – Grid of all 5 service offerings with detail links
3. **Life Coaching** – General coaching service details
4. **Raucherentwöhnung** – Smoking cessation program (3-session intensive)
5. **Alkohol selbstbestimmt** – Controlled drinking program (1+6 sessions)
6. **Stressbewältigung** – Stress management program (6 sessions, certified)
7. **Autogenes Training** – Autogenic training (4 sessions)
8. **Profil** – Coach biography, credentials, experience
9. **Meine Motivation** – Personal motivation & philosophy
10. **Kontakt** – Contact form + direct contact info

### Legal Pages
11. **Impressum** – Required legal disclosure (German law)
12. **Datenschutzerklärung** – GDPR privacy policy
13. **AGB / Honorar** – Terms & pricing

---

## Design System At a Glance

### Colors
- **Primary Dark:** `#0f172a` (deep navy) – headlines, primary buttons
- **Primary Light:** `#f8fafc` (soft off-white) – hero sections
- **Accent Gray:** `#e2e8f0` (light gray) – chips, secondary sections
- **Page Background:** `#f5f2ec` (warm beige) – overall warmth
- **Card Background:** `#ffffff` (pure white) – content contrast
- **Text Primary:** `#0f172a` – headings
- **Text Secondary:** `#334155` – body text
- **Text Tertiary:** `#475569` – captions
- **Button Primary:** `#1f2937` (dark gray) on white
- **Button Secondary:** `#e2e8f0` with `#334155` text

### Typography
- **System font stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **H1:** 44px (desktop), 28px (mobile) | weight 700 | line-height 1.2
- **H2:** 32px (desktop), 22px (mobile) | weight 700 | line-height 1.25
- **H3:** 24px (desktop), 20px (mobile) | weight 700 | line-height 1.3
- **Body Large:** 18px (desktop), 16px (mobile) | weight 400 | line-height 1.5
- **Body Regular:** 16px (desktop), 14px (mobile) | weight 400 | line-height 1.5
- **Small:** 14px | weight 400 | line-height 1.4
- **Tiny:** 12px | weight 500 | line-height 1.4

### Spacing (8px base unit)
- `xs`: 4px | `sm`: 8px | `md`: 16px | `lg`: 24px | `xl`: 32px | `2xl`: 48px | `3xl`: 64px

### Breakpoints
- **Mobile:** 0–767px (1 column)
- **Tablet:** 768–1023px (2 columns)
- **Desktop:** 1024px+ (3–4 columns)

### Components
- **Primary Button:** 48px min height, 12px border-radius, white text on `#1f2937`
- **Service Card:** 24px padding, 16px border-radius, 2px `#64748b` border
- **Hero Section:** 20px border-radius, 340px min height (mobile), 420px (desktop)
- **Form Input:** 2px `#cbd5e1` border, 8px border-radius, 12px padding
- **Navigation:** Sticky header, 80px height, responsive hamburger menu on mobile

**See [content/design-system.md](content/design-system.md) for full specifications.**

---

## Tech Stack Recommendations

### Frontend
- **Framework:** React (recommended) or Next.js for better SEO & deployment
- **Styling:** Tailwind CSS or CSS Modules (recommend Tailwind for rapid consistency)
- **Responsive design:** Mobile-first, use design system breakpoints
- **Form handling:** React Hook Form + simple validation
- **Icons:** Feather Icons or Heroicons (free, minimal style)
- **Component Library:** Build custom or use Headless UI (unstyled, accessible)

### Backend / CMS
- **Option A (Recommended):** Static site with form submission to email
  - Built with Next.js or React + static hosting (Vercel, Netlify)
  - Forms submit to email service (Formspree, EmailJS, or Lambda + SES)
  - No database needed for MVP
  
- **Option B:** Headless CMS (Contentful, Sanity)
  - Good if coach wants to manage content later without dev help
  - Adds complexity; opt for Option A first

### Hosting
- **Recommendation:** Vercel (free tier for Next.js, scales easily)
- **Alternatives:** Netlify, AWS Amplify, or traditional VPS

### Analytics & Tracking
- **Google Analytics 4** (optional, requires GDPR consent)
- Cookie consent banner (required in Germany) – use Cookiebot or iubenda for GDPR
- No tracking until consent is obtained

### Email
- **Contact form submission:** Formspree or similar (handles email capture)
- **Transactional emails:** Optional (booking confirmations, etc.)

### SEO
- Meta tags (title, description) already provided in content brief
- Structured data (Schema.org) for local business (coach)
- Sitemap.xml auto-generated
- robots.txt configured
- Mobile-friendly (required)

---

## Implementation Roadmap

### Phase 1: Setup & Infrastructure (1-2 days)
- [ ] Choose tech stack (Next.js + Tailwind recommended)
- [ ] Initialize git repo and deployment pipeline (Vercel/Netlify)
- [ ] Set up folder structure and CSS variables for design system
- [ ] Create layout wrapper / shell (header, footer, navigation)
- [ ] Implement mobile hamburger menu

### Phase 2: Core Pages (3-5 days)
- [ ] **Homepage** – Build hero, trust strip, service grid, about preview, process section, CTA
- [ ] **Coaching Overview** – Service card grid with detail page links
- [ ] **Service Detail Page Template** – Reusable template for all 5 service pages
  - [ ] Life Coaching
  - [ ] Raucherentwöhnung
  - [ ] Alkohol selbstbestimmt
  - [ ] Stressbewältigung
  - [ ] Autogenes Training

### Phase 3: Supporting Pages (2-3 days)
- [ ] **Profil** – Bio, credentials, experience
- [ ] **Meine Motivation** – Personal statement
- [ ] **Kontakt** – Contact form + contact info
- [ ] **Legal Pages** (Impressum, Datenschutz, AGB)

### Phase 4: Forms & Interactions (1-2 days)
- [ ] Contact form (name, email, phone, service dropdown, message)
- [ ] Form validation (client-side + server-side)
- [ ] Email submission integration (Formspree or alternative)
- [ ] Success/error messaging
- [ ] Spam protection (honeypot field or reCAPTCHA)

### Phase 5: Polish & Accessibility (1-2 days)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility audit (keyboard nav, focus states, contrast, alt text)
- [ ] Page speed optimization (image optimization, code splitting)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

### Phase 6: SEO & Extras (1 day)
- [ ] Meta tags validation
- [ ] Sitemap.xml generation
- [ ] robots.txt configuration
- [ ] Google Analytics setup (with GDPR consent)
- [ ] Structured data (Schema.org LocalBusiness/Service)

### Phase 7: Deployment & Launch (1 day)
- [ ] Final QA testing
- [ ] Domain setup (DNS, SSL certificate)
- [ ] Deploy to production
- [ ] Monitor for errors
- [ ] Google Search Console submission

**Estimated Total:** 10-16 days for a small team or solo developer

---

## Key Instructions for Implementation

### 1. Reference the Design System First
Before writing any CSS, read [content/design-system.md](content/design-system.md) fully. Create CSS variables for:
- All colors
- All typography scales
- All spacing values
- All breakpoints

Example:
```css
:root {
  --color-primary-dark: #0f172a;
  --color-primary-light: #f8fafc;
  --color-accent-gray: #e2e8f0;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --font-size-h1-desktop: 44px;
  --font-size-h1-mobile: 28px;
  --breakpoint-mobile: 0px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}
```

### 2. Use the Wireframes as Layout Reference
- [content/homepage-wireframe.svg](content/homepage-wireframe.svg) shows desktop flow
- [content/homepage-wireframe-mobile.svg](content/homepage-wireframe-mobile.svg) shows mobile flow
- Build with mobile-first CSS, then add desktop media queries

### 3. Copy Content from the Brief
[content/content-brief-full.md](content/content-brief-full.md) has all copy prepared:
- Copy directly into page components
- Respect word count targets for web scanability
- Keep paragraphs short (2-3 sentences max)
- Include all CTAs as specified

### 4. Build Reusable Components
From the design system, create and reuse:
- `<Button />` (primary, secondary, tertiary)
- `<Card />` (service card, generic card)
- `<TrustChip />` (small badge components)
- `<HeroSection />` (headline + supporting text + CTA)
- `<ServiceCard />` (title, description, price, link)
- `<Form />` (contact form with validation)

### 5. Ensure Mobile-First Responsive Design
- Write mobile CSS first
- Add tablet media queries at 768px
- Add desktop media queries at 1024px
- Test touch targets (minimum 48px×48px)

### 6. Implement Accessibility
- Use semantic HTML (headings hierarchy, landmarks)
- Add focus states (3px outline, 2px offset)
- Ensure 4.5:1 contrast for text
- Add alt text to all images
- Make keyboard navigation logical

### 7. Handle Forms Properly
Contact form fields:
- Name (required, text input)
- Email (required, email input)
- Phone (optional, tel input)
- Which service? (required, dropdown or select)
- Message (required, textarea)
- Privacy checkbox (required)

Form submission:
- Validate on client (required fields, email format)
- Send to [info@meik-gesundheit.de](mailto:info@meik-gesundheit.de)
- Show success message ("Ihre Anfrage wurde versendet. Wir melden uns bald zurück.")
- Show error messages if submission fails

### 8. SEO Essentials
- Each page has a unique `<title>` and meta description (from brief)
- Use H1 once per page
- H2 for sections, H3 for subsections
- Add alt text to images
- Internal links point to related pages
- Mobile-friendly (responsive design required)

### 9. Legal Compliance
- Include GDPR notice in contact form
- Add privacy policy link in footer
- Add "Impressum" link in footer (required by German law)
- Disclosure: "Coaching is not a substitute for therapy"
- Cookie consent banner if using analytics

### 10. Image Guidelines
- Portrait photo of coach: 1:1 aspect ratio, ~400×400px minimum
- Hero images: 16:9 or 4:3 aspect ratio
- Use real, professional photos (not generic stock)
- Optimize for web (compress, WebP format preferred)
- Add descriptive alt text to all images

---

## Quick Reference: Page Checklist

Each page should include:

- [ ] Unique `<title>` and meta description
- [ ] Clear H1 headline
- [ ] Scannable sections with H2/H3 headings
- [ ] Short paragraphs (2-3 sentences max)
- [ ] Primary CTA button (top and/or bottom of page)
- [ ] Secondary CTA or link if applicable
- [ ] Mobile-responsive layout
- [ ] Proper contrast and accessible colors
- [ ] Images with alt text
- [ ] Footer with legal links

---

## Content Assets Provided

All content is in German. Existing assets:
- Original coach outline: [content/Psychofundlifecoaching.docx](content/Psychofundlifecoaching.docx)
- Content brief (structured for web): [content/content-brief-full.md](content/content-brief-full.md)

Additional assets to source:
- **Coach portrait photo** – Professional headshot (1:1)
- **Optional hero images** – Calm, professional imagery for service pages

---

## Deployment & Going Live

### Pre-Launch Checklist
- [ ] All pages render correctly on mobile, tablet, desktop
- [ ] Contact form works and sends emails
- [ ] No broken links (internal or external)
- [ ] All images optimized and loading
- [ ] Meta tags present and accurate
- [ ] Accessibility audit passed (WCAG AA minimum)
- [ ] Page speed > 80 on Lighthouse
- [ ] Forms have honeypot or reCAPTCHA to prevent spam
- [ ] GDPR consent/privacy policy in place
- [ ] Legal pages complete (Impressum, Datenschutz, AGB)

### Hosting Setup
1. Domain registered (e.g., meik-coaching.de)
2. Vercel/Netlify account created
3. Git repo connected to deployment pipeline
4. Auto-deploy on push to main branch
5. SSL certificate (auto-provided by Vercel/Netlify)
6. Email routing configured (contact form → info@meik-gesundheit.de)

### Post-Launch
- Monitor for errors (error tracking via Sentry or similar)
- Track contact form submissions
- Monitor page speed
- Collect early feedback from coach
- Iterate based on real user behavior

---

## For the Next LLM: How to Use This Package

1. **Read this README** – Understand the project goal and scope
2. **Review design-system.md** – Understand all visual specifications
3. **Review site-map.md** – Understand page structure
4. **Review homepage and service page wireframes** – See layout patterns
5. **Use content-brief-full.md** – Copy content directly into pages
6. **Build pages in order:**
   - Header/Footer shell (reusable)
   - Homepage (most complex)
   - Service overview page
   - Service detail pages (use template)
   - About pages (Profil, Meine Motivation)
   - Contact page (with form)
   - Legal pages
7. **Use design system CSS variables** for all styling
8. **Test responsively** on mobile, tablet, desktop
9. **Deploy to production** and validate

---

## Questions or Changes?

If you need to:
- Change colors → Update in design-system.md AND CSS variables
- Add/remove pages → Update sitemap.md and page-outline.md
- Modify copy → Edit content-brief-full.md
- Adjust layout → Update wireframe SVGs and rebuild components

All planning documents are version-controlled in this repo for reference.

---

**Project Status:** ✅ Planning Complete | ⏳ Ready for Implementation