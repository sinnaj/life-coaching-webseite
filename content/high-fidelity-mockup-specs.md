# High-Fidelity Mockup Specifications

## Overview
This document provides detailed mockup specifications for all key pages. Use these specifications to:
1. Build mockups manually in Figma
2. Share with designers for refinement
3. Guide developers during implementation
4. Ensure visual consistency across the site

---

## PAGE 1: HOMEPAGE (Desktop - 1440px)

### Layout Structure
```
Header (80px, sticky)
  
Hero Section (380px)
  
Trust Strip (100px)
  
Services Section (380px)
  
About Preview (220px)
  
Closing CTA (160px)
  
Footer (100px)
```

### Header (80px)
**Background:** `#ffffff` | **Border-bottom:** 1px `#e2e8f0`

**Grid Layout:**
- Logo/Site name: Left side, 180×48px, light gray background (`#e2e8f0`), border-radius 10px
- Navigation: Center-right, 4 items horizontally spaced
  - Font: 16px, weight 500, color `#334155`
  - Items: "Startseite" | "Angebote" | "Profil" | "Kontakt"
  - Active item underline: 3px `#1f2937`
- CTA Button: Right side, "Termin anfragen"
  - 140×54px, background `#1f2937`, text white, border-radius 12px

### Hero Section (380px)
**Background:** `#f8fafc` | **Padding:** 32px all sides

**Content Layout:**
- **Left side (60% width):**
  - H1: "Psychologisch fundiertes Life- und Mental-Coaching"
    - Font: 44px, weight 700, color `#0f172a`, line-height 1.2
    - Max-width: 600px
    - Margin-bottom: 24px
  
  - Subheading: "Ich unterstütze Menschen dabei, nachhaltige Veränderungen zu erreichen – mit einem psychologisch fundierten, praxisnahen und wertschätzenden Coachingansatz."
    - Font: 18px, weight 400, color `#334155`, line-height 1.5
    - Max-width: 650px
    - Margin-bottom: 32px
  
  - Button Group (2 buttons side-by-side):
    - **Primary:** "Termin anfragen" - 180×54px, background `#1f2937`, text white, border-radius 12px
    - **Secondary:** "Angebote ansehen" - 180×54px, background `#e2e8f0`, text `#334155`, border 2px `#64748b`, border-radius 12px

- **Right side (40% width):**
  - Hero Image placeholder
  - 500×240px, background `#e2e8f0`, border-radius 18px
  - Text: "Hero Image" (centered, muted, small)
  - Aspect ratio: 16:9 or placeholder for coach photo/calm imagery

### Trust Strip (100px)
**Background:** `#ffffff` | **Padding:** 16px 32px

**Grid Layout:** 4 chips in a row, evenly spaced

Each chip:
- 260×48px
- Background: `#e2e8f0`
- Border: 1.5px `#64748b`
- Border-radius: 10px
- Padding: 12px 16px
- Text: 16px, weight 500, color `#334155`

**Chips:**
1. "Psychologisch fundiert"
2. "Online via Zoom"
3. "Langjährige Erfahrung"
4. "Klare Preise"

### Services Section (380px)
**Background:** `#ffffff` | **Padding:** 32px all sides

**Heading:**
- H2: "Meine Schwerpunkte"
- Font: 32px, weight 700, color `#0f172a`, line-height 1.25
- Margin-bottom: 32px

**Card Grid:** 5 columns, 275px gap between cards

Each Service Card:
- Dimensions: 260×210px
- Background: `#ffffff`
- Border: 2px `#64748b`
- Border-radius: 16px
- Padding: 24px
- Shadow: 0 4px 12px rgba(0,0,0,0.08) on hover

**Card Content (top to bottom):**
1. **Card Title:** 18px, weight 700, color `#0f172a`, margin-bottom 12px
2. **Description:** 14px, weight 400, color `#334155`, margin-bottom 20px
3. **"Mehr erfahren" link:** 14px, weight 600, color `#1f2937`, underline

**Services in Order:**
1. **Life Coaching** - "Persönlichkeitsentwicklung"
2. **Raucherentwöhnung** - "Hypnose & Mental-Coaching"
3. **Alkohol selbstbestimmt** - "Kontrolliertes Trinken"
4. **Stressbewältigung** - "Gelassen im Alltag"
5. **Autogenes Training** - "Entspannung & Balance"

### About Preview Section (220px)
**Background:** `#ffffff` | **Padding:** 32px

**Layout:** 2 columns

**Left Column (Portrait):**
- Image: 150×150px, background `#e2e8f0`, border-radius 14px
- Placeholder text: "Portrait", centered, small, muted

**Right Column (Bio Text):**
- **Name:** 20px, weight 700, color `#0f172a`, margin-bottom 12px
  - Text: "Dipl.-Päd. Christiane Meik"
- **Title:** 14px, weight 400, color `#334155`, margin-bottom 16px
  - Text: "Mental-Coach und zertifizierte Trainerin"
- **Bio:** 14px, weight 400, color `#334155`, max-width 400px, line-height 1.5
  - Text: "Erfahrung in Psychotherapie, Suchtberatung und Sozialmanagement. Von 2003-2025 eigene Privatpraxis."
- **Button:** "Zum Profil" - 130×44px, background `#1f2937`, text white, border-radius 12px, margin-top 16px

### Closing CTA Section (160px)
**Background:** `#f8fafc` | **Padding:** 48px 32px

**Layout:** Flex column

- **Heading:** 28px, weight 700, color `#0f172a`, margin-bottom 12px
  - Text: "Bereit für den nächsten Schritt?"

- **Description:** 16px, weight 400, color `#334155`, line-height 1.5, max-width 600px, margin-bottom 20px
  - Text: "Ein kostenfreies Erstgespräch ist der beste Weg, um zu klären, ob und wie wir zusammenpassen."

- **Button:** "Termin anfragen" - 220×54px, background `#1f2937`, text white, font 16px weight 700, border-radius 12px

### Footer (100px)
**Background:** `#0f172a` | **Padding:** 32px all sides

**Layout:** Flex column

**Line 1:** 14px, weight 400, color `#e2e8f0`
- "Impressum | Datenschutz | AGB | Kontakt"

**Line 2:** 14px, weight 400, color `#e2e8f0`, margin-top 16px
- "Online Coaching via Zoom | info@meik-gesundheit.de"

---

## PAGE 2: SERVICE DETAIL (Raucherentwöhnung as example)

### Layout Structure
```
Header (80px, sticky)

Hero with Title (280px)

Problem/Intro Section (180px)

Program Structure Section (320px)

Methods Section (200px)

Process Steps Section (240px)

Benefits Section (200px)

Other Services CTA (140px)

Footer (100px)
```

### Hero Section with Title (280px)
**Background:** `#f8fafc` | **Padding:** 48px 32px

- **Title:** "Raucherentwöhnung"
  - Font: 44px, weight 700, color `#0f172a`, line-height 1.2
  - Margin-bottom: 12px

- **Subheading:** "Endlich aufatmen – Rauchfrei mit Hypnose"
  - Font: 20px, weight 600, color `#334155`, line-height 1.5
  - Margin-bottom: 16px

- **Description:** 16px, weight 400, color `#334155`, line-height 1.5, max-width 600px
  - Text: "Ein 3-Sitzungen-Intensivprogramm mit Verhaltenstherapie, Mental-Coaching und Hypnose nach Milton Erickson."

- **Primary CTA:** "Termin vereinbaren – Rauchfrei starten" - 260×54px, background `#1f2937`

### Problem/Intro Section (180px)
**Background:** `#ffffff` | **Padding:** 32px

- **Heading:** "Warum dieser Ansatz funktioniert"
  - Font: 24px, weight 700, color `#0f172a`, margin-bottom 16px

- **Body Text:** 16px, weight 400, color `#334155`, line-height 1.5
  - Multi-paragraph text explaining approach
  - Include bullet points:
    • Verhaltenstherapie: Verstehen und Verändern von Mustern
    • Mental-Coaching: Ressourcen stärken, neue Gewohnheiten
    • Hypnose nach Milton Erickson: Blockaden lösen, positive Vision

### Program Structure Section (320px)
**Background:** `#fdfdfd` | **Padding:** 32px

- **Heading:** "Das 3er-Programm"
  - Font: 24px, weight 700, color `#0f172a`, margin-bottom 24px

**3-Column Layout** (Session overview cards):

Each session card:
- 380×240px
- Background: `#ffffff`
- Border: 2px `#94a3b8`
- Border-radius: 14px
- Padding: 24px

**Session 1:**
- **Title:** "1. Sitzung: 150 Minuten" - 18px, weight 700, color `#0f172a`
- **Description:** "Analyse des Rauchverhaltens. Erste Hypnose zur Lösung innerer Blockaden."

**Session 2:**
- **Title:** "2. Sitzung: 120 Minuten" - 18px, weight 700, color `#0f172a`
- **Description:** "Intensive Vorbereitung des Rauchstopps. Mental-Coaching und Hypnose."

**Session 3:**
- **Title:** "3. Sitzung: 60 Minuten" - 18px, weight 700, color `#0f172a`
- **Description:** "Stabilisierung und Follow-up. Sicherheit und konkrete Strategien."

### Methods Section (200px)
**Background:** `#ffffff` | **Padding:** 32px

- **Heading:** "Bewährte Methoden"
  - Font: 24px, weight 700, color `#0f172a`, margin-bottom 20px

**3 Method Cards:**
Each card: 280×120px, background `#e2e8f0`, border-radius 12px, padding 16px

1. **Verhaltenstherapie** - "Verstehen und ändern von Mustern"
2. **Mental-Coaching** - "Ressourcen stärken und Gewohnheiten aufbauen"
3. **Hypnose (Erickson)** - "Blockaden lösen, positive Vision verankern"

### Process Steps Section (240px)
**Background:** `#fdfdfd` | **Padding:** 32px

- **Heading:** "Der Ablauf"
  - Font: 24px, weight 700, color `#0f172a`, margin-bottom 20px

**3 Steps in Horizontal Layout:**

Each step: 350×120px, background `#ffffff`, border-radius 12px, padding 20px

1. **"Analyse"** - "Rauchverhalten verstehen, erste Hypnose"
2. **"Vorbereitung"** - "Ressourcen stärken, neue Strategien"
3. **"Stabilisierung"** - "Sichere Rauchfreiheit, Prävention"

### Benefits Section (200px)
**Background:** `#ffffff` | **Padding:** 32px

- **Heading:** "Was sich verändern kann"
  - Font: 24px, weight 700, color `#0f172a`, margin-bottom 20px

**Benefits as Bullets:**
- Font: 16px, weight 400, color `#334155`, line-height 1.6

• Verständnis für dein Rauchverhalten
• Sicherheit und Vertrauen
• Konkrete Strategie für schwierige Momente
• Neue, gesunde Gewohnheiten
• Nachhaltige Rauchfreiheit

### Pricing & Details Section (180px)
**Background:** `#f8fafc` | **Padding:** 32px

**Left Column (Details):**
- **Format:** Font 14px, weight 600, color `#475569`, text "Online via Zoom"
- **Duration:** "3 Sitzungen, 5,5 Stunden gesamt"
- **Timeframe:** "Flexibel in 2-4 Wochen"

**Right Column (Price):**
- **Price Label:** 14px, weight 600, color `#475569`, text "Investition:"
- **Price:** 32px, weight 700, color `#0f172a`, text "550 €"
- **Note:** 12px, weight 400, color `#475569`, text "(MwSt.-befreit nach § 19 UStG, inklusive Material)"

### Other Services CTA (140px)
**Background:** `#ffffff` | **Padding:** 32px

**Heading:**
- "Entdecke andere Angebote" - 20px, weight 700, color `#0f172a`, margin-bottom 16px

**4-Card Grid:**
- Each card: 260×80px, background `#e2e8f0`, border-radius 12px, padding 12px
- Text: 14px, weight 600, color `#334155`
- Cards link to: Life Coaching, Alkohol selbstbestimmt, Stressbewältigung, Autogenes Training

### Final CTA Section (120px)
**Background:** `#f8fafc` | **Padding:** 32px

**Centered Layout:**
- **Text:** "Bereit, diesen Schritt zu gehen?" - 24px, weight 700, color `#0f172a`, margin-bottom 16px
- **Button:** "Termin vereinbaren" - 240×54px, background `#1f2937`, centered

---

## COMPONENT SPECIFICATIONS

### Button Component

#### Primary Button
- **Dimensions:** 48–54px height (min touch target)
- **Width:** Variable (min 160px for text + padding)
- **Background:** `#1f2937`
- **Text:** White (`#ffffff`), weight 700, size 16–18px
- **Padding:** 14px 24px (vertical/horizontal)
- **Border-radius:** 12px
- **States:**
  - Default: As above
  - Hover: Background `#111827`, box-shadow `0 4px 12px rgba(0,0,0,0.12)`
  - Active: Background `#0f172a`
  - Disabled: Background `#9ca3af`, cursor not-allowed, opacity 0.6

#### Secondary Button
- **Dimensions:** 48–54px height
- **Background:** `#e2e8f0`
- **Border:** 2px solid `#64748b`
- **Text:** `#334155`, weight 700, size 16–18px
- **Padding:** 14px 24px
- **Border-radius:** 12px
- **States:**
  - Hover: Background `#cbd5e1`, border `#475569`
  - Active: Background `#cbd5e1`

#### Tertiary Link
- **Background:** Transparent
- **Text:** `#1f2937`, weight 600, underline
- **Hover:** Text `#0f172a`, underline thickens
- **Active:** Text `#0f172a`

### Card Component

#### Service Card
- **Dimensions:** 260–280px width, 200–220px height
- **Background:** `#ffffff`
- **Border:** 2px solid `#64748b`
- **Border-radius:** 16px
- **Padding:** 24px
- **Shadow:** None (default) | `0 4px 12px rgba(0,0,0,0.08)` on hover
- **Content:**
  - Title: 18–20px, weight 700, color `#0f172a`, margin-bottom 12px
  - Description: 14px, weight 400, color `#334155`, margin-bottom 12px
  - Link: 14px, weight 600, color `#1f2937`, underline

#### Trust Chip
- **Dimensions:** Variable width (250–300px), 48px height
- **Background:** `#e2e8f0`
- **Border:** 1.5px solid `#64748b`
- **Border-radius:** 10px
- **Padding:** 8px 16px
- **Text:** 16px, weight 500, color `#334155`

### Form Component

#### Text Input
- **Dimensions:** 100% width (responsive), 48–52px height
- **Background:** `#ffffff`
- **Border:** 2px solid `#cbd5e1`
- **Border-radius:** 8px
- **Padding:** 12px 16px
- **Font:** 16px, weight 400
- **Placeholder:** Color `#9ca3af`
- **States:**
  - Focus: Border `#1f2937`, box-shadow `0 0 0 3px rgba(15,23,42,0.1)`
  - Error: Border `#dc2626` (red)
  - Disabled: Background `#f3f4f6`, opacity 0.6

#### Textarea
- **Dimensions:** 100% width, 120px min height
- **Same as text input** but:
- **Resize:** Vertical only
- **Line-height:** 1.5

#### Checkbox
- **Dimensions:** 20×20px
- **Unchecked:** Background `#ffffff`, border 2px `#cbd5e1`, border-radius 4px
- **Checked:** Background `#1f2937`, border `#1f2937`, checkmark white
- **Focus:** Border 3px `#1f2937`, outline offset 2px

### Form Label
- **Font:** 14px, weight 600, color `#0f172a`
- **Margin-bottom:** 6px
- **Display:** Block

### Form Helper Text
- **Font:** 12px, weight 400, color `#6b7280`
- **Margin-top:** 4px

### Navigation Component

#### Mobile Hamburger Menu
- **Trigger:** 32×32px icon (top-left), background transparent
- **Drawer:**
  - Width: 280px
  - Height: 100vh
  - Background: `#ffffff`
  - Padding: 24px
  - Position: Fixed, left side
  - Z-index: 1000
  - Shadow: `0 10px 25px rgba(0,0,0,0.2)`
- **Menu Items:**
  - Font: 16px, weight 500, color `#334155`
  - Padding: 12px, margin-bottom 12px
  - Hover: Color `#1f2937`, background `#f3f4f6`

---

## RESPONSIVE BEHAVIOR

### Breakpoints
- **Mobile:** 0–767px
- **Tablet:** 768–1023px
- **Desktop:** 1024px+

### Homepage Responsive Changes

#### Mobile (< 768px)
- **Hero Section:**
  - Layout: Stack vertically (text, then image below)
  - Image: Full width, 200px height
  - Font sizes: H1 28px, Body 16px
  - CTA buttons: Stack vertically, full width

- **Services Section:**
  - Grid: 1 column instead of 5
  - Cards scale to fit width with padding
  - Margin-bottom: 16px between cards

- **About Preview:**
  - Portrait: Left-aligned, 100px×100px
  - Bio text: Right side (no full-width stack)
  - Font sizes: Smaller (18px title, 14px body)

- **Trust Chip:**
  - Grid: 2 columns instead of 4
  - Width: Full minus padding

#### Tablet (768–1023px)
- **Hero Section:**
  - Still 2-column but narrower
  - Image: 40% of width
  - Font sizes: H1 36px, Body 17px

- **Services Section:**
  - Grid: 2 columns instead of 5
  - Cards: 250px width

- **About Preview:**
  - Still 2-column layout
  - Portrait: 120px×120px

- **Trust Chip:**
  - Grid: 3 columns

#### Desktop (1024px+)
- All as specified above

---

## ACCESSIBILITY SPECIFICATIONS

### Focus States
- **All interactive elements** have a 3px outline in `#1f2937` with 2px offset
- **Keyboard navigation** follows visual flow (top to bottom, left to right)
- **Skip-to-content link:** Visible on tab, links to `<main>`

### Color Contrast
- **Primary text on backgrounds:** 21:1 (exceeds AAA)
- **Secondary text on backgrounds:** 9.5:1 (exceeds AA)
- **Graphics/icons:** 4.5:1 minimum

### Images
- **All images have alt text:**
  - Coach portrait: "Portrait of Christiane Meik, mental coach"
  - Service illustrations: Descriptive (e.g., "Relaxing scene for stress management coaching")
  - Decorative: `alt=""`

### Typography
- **Minimum font size:** 14px (never smaller)
- **Line height:** 1.5 for body text, 1.2 for headlines
- **Letter spacing:** Normal (no tight spacing that affects readability)

### Forms
- **Labels always visible** (not placeholder-only)
- **Error messages in red** (`#dc2626`) AND as text (not just color)
- **Required fields** marked with asterisk (`*`) after label

---

## MOTION & INTERACTION

### Smooth Transitions
- **Button hover:** 150ms fade + subtle shadow
- **Link underline:** 200ms expand from left
- **Card hover:** 200ms shadow deepen
- **Dropdown open/close:** 200ms slide
- **Form validation:** 300ms fade-in error message

### No Auto-Play
- No auto-playing video/audio
- No animations that distract from content
- Respect `prefers-reduced-motion` media query

---

## SPACING & LAYOUT GRID

### Page Max-Width
- **Desktop:** 1440px (content area 1440px – 2×64px padding = usable 1312px)
- **Tablet:** 100% with 24px padding on sides
- **Mobile:** 100% with 16px padding on sides

### Card Grids & Gaps
- **Grid columns (desktop):** 3–4 columns, 32px gap
- **Grid columns (tablet):** 2 columns, 24px gap
- **Grid columns (mobile):** 1 column, 16px margin-bottom

### Section Spacing (Vertical)
- Between sections: 48px (desktop), 32px (tablet), 24px (mobile)
- Between heading and content: 24px
- Between paragraphs: 16px

---

## EXPORTING FOR DEVELOPMENT

### Design System Variables (CSS)
```css
:root {
  /* Colors */
  --color-primary-dark: #0f172a;
  --color-primary-light: #f8fafc;
  --color-accent-gray: #e2e8f0;
  --color-page-bg: #f5f2ec;
  --color-card-bg: #ffffff;
  --color-text-primary: #0f172a;
  --color-text-secondary: #334155;
  --color-text-tertiary: #475569;
  --color-border-gray: #94a3b8;
  --color-button-primary: #1f2937;
  
  /* Typography */
  --font-family-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-h1: 44px;
  --font-size-h2: 32px;
  --font-size-h3: 24px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  
  /* Breakpoints */
  --bp-mobile: 0;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
}
```

---

This specification is complete and ready for:
1. **Manual Figma creation**
2. **Developer implementation**
3. **Design system documentation**
