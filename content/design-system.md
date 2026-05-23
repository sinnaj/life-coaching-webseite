# Design System - Life Coaching Website

## Overview
A calm, professional design system for a life coaching website. Focuses on trust, clarity, and accessibility. Built for mobile-first responsive design.

---

## 1. Color Palette

### Primary Colors
- **Primary Dark:** `#0f172a` (Deep Navy)
  - Usage: Headlines, primary buttons, main text, navigation
  - Accessibility: Primary action focus, strong contrast

- **Primary Light:** `#f8fafc` (Soft Off-White)
  - Usage: Hero sections, light backgrounds, card backgrounds
  - Accessibility: High contrast with dark text

### Secondary Colors
- **Accent Gray:** `#e2e8f0` (Light Gray)
  - Usage: Chip backgrounds, secondary sections, subtle dividers
  - Accessibility: Subtle emphasis without strong contrast

- **Muted Gray:** `#475569` (Medium Gray)
  - Usage: Secondary text, captions, helper text
  - Accessibility: Readable but intentionally less prominent

- **Border Gray:** `#94a3b8` (Medium-Light Gray)
  - Usage: Section dividers, card borders, subtle lines
  - Accessibility: Visible but non-intrusive

### Background Colors
- **Page Background:** `#f5f2ec` (Warm Beige)
  - Warmth and calm feel, less harsh than pure white
  - Light enough for high contrast with text

- **Card/Content Background:** `#ffffff` (Pure White)
  - Maximum contrast and clarity for main content
  - Cards stand out from page background

### Text Colors
- **Primary Text:** `#0f172a` (Deep Navy)
  - Used for headings, primary content
  - Contrast ratio: 21:1 against white backgrounds

- **Secondary Text:** `#334155` (Slate Gray)
  - Used for body text, descriptions
  - Contrast ratio: 9.5:1 against white backgrounds

- **Tertiary Text:** `#475569` (Medium Gray)
  - Used for captions, helper text
  - Contrast ratio: 6.8:1 against white backgrounds

### Button Colors
- **Primary Button:** `#1f2937` (Dark Dark Gray)
  - Background for main CTAs
  - Text: White (`#ffffff`)
  - Contrast ratio: 13:1

- **Secondary Button:** `#e2e8f0` (Light Gray)
  - Alternative action buttons
  - Text: `#334155` (Slate Gray)
  - Contrast ratio: 7:1

---

## 2. Typography System

### Font Stack
```
Primary Font (Headlines, Bold text): 
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif

Secondary Font (Body, Small text):
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

### Type Scales

#### Desktop (1440px and wider)
- **H1 (Hero Headline):** 44px, weight 700, line-height 1.2
  - Usage: Page titles, hero section headlines
  - Letter spacing: -0.5px for tightness

- **H2 (Section Title):** 32px, weight 700, line-height 1.25
  - Usage: Major section headings
  - Letter spacing: normal

- **H3 (Card Title):** 24px, weight 700, line-height 1.3
  - Usage: Card titles, subsection headings
  - Letter spacing: normal

- **H4 (Small Heading):** 20px, weight 700, line-height 1.35
  - Usage: Minor headings, labels
  - Letter spacing: normal

- **Body Large:** 18px, weight 400, line-height 1.5
  - Usage: Primary body text, descriptions
  - Letter spacing: normal

- **Body Regular:** 16px, weight 400, line-height 1.5
  - Usage: Standard body text, navigation
  - Letter spacing: normal

- **Small:** 14px, weight 400, line-height 1.4
  - Usage: Captions, helper text, small labels
  - Letter spacing: 0.5px

- **Tiny:** 12px, weight 500, line-height 1.4
  - Usage: Smallest text, tags, metadata
  - Letter spacing: 0.5px

#### Tablet (768px to 1439px)
- **H1:** 36px, weight 700, line-height 1.2
- **H2:** 28px, weight 700, line-height 1.25
- **H3:** 22px, weight 700, line-height 1.3
- **Body Large:** 17px, weight 400, line-height 1.5
- **Body Regular:** 15px, weight 400, line-height 1.5

#### Mobile (up to 767px)
- **H1:** 28px, weight 700, line-height 1.2
- **H2:** 22px, weight 700, line-height 1.25
- **H3:** 20px, weight 700, line-height 1.3
- **Body Large:** 16px, weight 400, line-height 1.5
- **Body Regular:** 14px, weight 400, line-height 1.5

---

## 3. Spacing System

### Base Unit: 8px
All spacing values are multiples of 8px for consistency.

#### Standard Spacing Scale
- **xs:** 4px (half unit, use sparingly)
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px
- **3xl:** 64px
- **4xl:** 80px
- **5xl:** 96px

#### Spacing Usage
- **Horizontal padding (cards, sections):** md (16px) on mobile, lg (24px) on desktop
- **Vertical padding (sections):** xl (32px) on mobile, 2xl (48px) on desktop
- **Gap between elements:** md (16px) to lg (24px)
- **Gap between sections:** 2xl (48px) to 3xl (64px)
- **Margin bottom for text blocks:** sm (8px) to md (16px)

#### Grid
- **Mobile:** 4-column grid with 4px gutter
- **Tablet:** 8-column grid with 8px gutter
- **Desktop:** 12-column grid with 16px gutter

---

## 4. Component Library

### Buttons

#### Primary Button
- Background: `#1f2937`
- Text: White (`#ffffff`), weight 700
- Padding: 14px 24px (vertical/horizontal)
- Border radius: 12px
- Font size: 16px (mobile), 18px (desktop)
- Min height: 48px (touch target)
- Hover: Background darkens to `#111827`, shadow appears
- Active: Background to `#0f172a`
- Disabled: Background `#9ca3af`, cursor not-allowed

#### Secondary Button
- Background: `#e2e8f0`
- Text: `#334155`, weight 700
- Padding: 14px 24px
- Border radius: 12px
- Border: 2px solid `#64748b`
- Font size: 16px (mobile), 18px (desktop)
- Min height: 48px
- Hover: Background lightens, border darkens
- Active: Background to `#cbd5e1`

#### Tertiary Button / Link
- Background: transparent
- Text: `#1f2937`, weight 600, underline
- No padding
- Font size: 14px to 18px
- Hover: Text color darkens, underline thickens
- Active: Color to `#0f172a`

### Cards

#### Service Card
- Background: `#ffffff`
- Border: 2px solid `#64748b`
- Border radius: 16px
- Padding: lg (24px) on mobile, xl (32px) on desktop
- Min height: 280px (mobile), 320px (desktop)
- Shadow: 0 4px 12px rgba(0,0,0,0.08) on hover
- Spacing inside: md (16px) gap between elements
- Responsive: Full width on mobile, flexible grid on desktop

#### TrustChip
- Background: `#e2e8f0`
- Border: 1.5px solid `#64748b`
- Border radius: 10px
- Padding: 8px 16px
- Font: Small, weight 500, color `#334155`
- Responsive: Inline on desktop, stacked 2-column on tablet, full width on mobile

### Forms

#### Text Input
- Background: `#ffffff`
- Border: 2px solid `#cbd5e1`
- Border radius: 8px
- Padding: 12px 16px
- Font size: 16px (mobile)
- Focus state: Border color `#1f2937`, box-shadow `0 0 0 3px rgba(15,23,42,0.1)`
- Placeholder text: `#9ca3af`
- Label: 14px, weight 600, color `#1f2937`

#### Textarea
- Same as text input
- Min height: 120px
- Resize: vertical only
- Line height: 1.5

#### Checkbox
- Size: 20px x 20px
- Checked: Background `#1f2937`, border `#1f2937`
- Unchecked: Background `#ffffff`, border `#cbd5e1`
- Focus ring: 2px solid `rgba(15,23,42,0.1)`

### Hero Section

#### Hero Container
- Background: `#f8fafc`
- Border radius: 20px
- Padding: lg (24px) mobile, 2xl (48px) desktop
- Min height: 340px mobile, 420px desktop
- Layout: Flex column on mobile, flex row on desktop (50/50 split)
- Gap: lg (24px)

#### Hero Text
- H1 headline: 28px mobile, 44px desktop
- Subheading: Body Large, color `#334155`
- CTA section: Flex row, gap md (16px)

### Navigation

#### Header
- Background: `#ffffff`
- Border bottom: 1px solid `#e2e8f0`
- Height: 80px
- Padding: 0 md (16px)
- Sticky: Yes, z-index 100
- Logo: 180px max-width, 48px height

#### Navigation Menu (Desktop)
- Display: Flex row, gap xl (32px)
- Font size: 16px, weight 500, color `#334155`
- Active link: Color `#1f2937`, bottom border 3px solid `#1f2937`
- Hover: Color darkens

#### Navigation Menu (Mobile)
- Display: Hamburger menu
- Offcanvas drawer on left
- Full height, width 280px
- Background: `#ffffff`
- Flex column, gap lg (24px)
- Padding: lg (24px)

### Footer

#### Footer Section
- Background: `#0f172a`
- Color: `#e2e8f0`
- Padding: 2xl (48px) mobile, 3xl (64px) desktop
- Font size: 14px to 16px
- Links: Underline on hover
- Grid: 1 column mobile, 4 columns desktop

---

## 5. Layout Patterns

### Page Layout
```
Header (sticky)
  ↓
Hero or Intro Section
  ↓
Main Content (1-3 sections)
  ↓
CTA Section
  ↓
Footer
```

### Section Layout
- **Full width:** 100% of viewport
- **Container max width:** 1440px on desktop, 100% on mobile/tablet
- **Container padding:** 0 md (16px) on mobile, 0 lg (24px) on tablet, 0 3xl (64px) on desktop

### Card Grids
- **Mobile:** 1 column (full width minus padding)
- **Tablet:** 2 columns, gap lg (24px)
- **Desktop:** 3-4 columns (flexible), gap xl (32px)

### Two-Column Section (Image + Text)
- **Mobile:** Stack vertically, image first
- **Tablet:** 50/50 split, gap lg (24px)
- **Desktop:** 50/50 split, gap xl (32px)

---

## 6. Visual Elements

### Icons
- **Size:** 24px (small), 32px (medium), 48px (large)
- **Color:** Primary `#1f2937` or secondary `#475569`
- **Style:** Outline, minimal, friendly
- **Library:** Recommend Feather Icons or system icons

### Images
- **Border radius:** 16px for hero images, 12px for cards
- **Max width:** 100% of container
- **Aspect ratios:**
  - Hero: 16:9 or 4:3
  - Card: 1:1 or 3:2
  - Thumbnail: 1:1

### Dividers
- **Color:** `#e2e8f0` (light) or `#94a3b8` (medium)
- **Style:** Solid line, 1px
- **Usage:** Between sections or content blocks
- **Margin:** lg (24px) above and below

### Shadows
- **Subtle (default):** `0 1px 3px rgba(0,0,0,0.08)`
- **Hover (cards):** `0 4px 12px rgba(0,0,0,0.08)`
- **Elevated (modals):** `0 10px 25px rgba(0,0,0,0.12)`
- **No shadows on mobile** (reduce visual clutter)

---

## 7. Responsive Behavior

### Breakpoints
- **Mobile:** 0px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px and wider

### Font Scaling
All text scales down proportionally by breakpoint (see Typography section).

### Spacing Scaling
- **Mobile:** Use `sm` and `md` values
- **Tablet:** Use `md` and `lg` values
- **Desktop:** Use `lg` and `xl` values

### Touch Targets
- **Minimum:** 48px x 48px (all interactive elements)
- **Comfortable:** 56px x 56px (especially mobile)

### Safe Zones
- **Mobile:** 16px padding on all sides, avoid first and last 8px
- **Tablet:** 24px padding on all sides
- **Desktop:** 32px padding on sides, no top/bottom padding needed

---

## 8. Accessibility

### Color Contrast
- **AAA Compliant:** All primary text on backgrounds (21:1)
- **AA Compliant:** All secondary text on backgrounds (9.5:1+)
- **Don't rely on color alone:** Use icons, text, or patterns

### Focus States
- **Outline:** 3px solid `rgba(15,23,42,0.1)`, offset 2px
- **Always visible:** No `outline: none` without replacement
- **Keyboard navigation:** Tab order follows visual flow

### Font Sizing
- **Minimum:** 14px for body text
- **Never smaller than 12px** for any text
- **Scale heading sizes** proportionally across breakpoints

### Line Height
- **Body text:** 1.5 (24px for 16px base)
- **Headlines:** 1.2 - 1.35 (tighter for visual impact)

### Images
- **All images have alt text:** Descriptive, under 125 characters
- **Icon buttons have aria-labels**
- **Decorative images:** Use `alt=""`

### Forms
- **Labels always visible:** Not placeholder-only
- **Error messages in red** (but also use context/icons)
- **Helper text:** Light gray, below input

---

## 9. Component Usage Guide

### When to Use Each Component

#### Primary Button
- Main CTA on a page (1 per section maximum)
- "Termin anfragen", "Jetzt buchen", "Kontakt aufnehmen"

#### Secondary Button
- Alternative action on the same section
- "Mehr erfahren", "Ansehen", "Kostenlos testen"

#### Tertiary Link
- Navigation within content
- "Zurück", "Profil anschauen", footer links

#### Service Card
- List of coaching offerings
- Display one offer with title, summary, price, link

#### Trust Chip
- Highlight key benefits or credentials
- Short 2-5 word claims only

#### Hero Section
- Page entrance, top-level positioning
- One per page, full-width container
- Include image + text or image alone

---

## 10. Implementation Notes

### CSS Architecture
- Use CSS custom properties (variables) for:
  - Colors
  - Spacing values
  - Font sizes and weights
  - Breakpoints
- Example: `var(--color-primary-dark)`, `var(--space-lg)`

### Naming Convention
- Classes: BEM style or utility-first
- Example: `.button--primary`, `.card__title`
- Or: `btn-primary`, `text-lg`, `space-xl`

### Mobile-First
- Write mobile styles first
- Add desktop styles with `@media (min-width: 1024px)`

### Performance
- Images: Optimize for web (WebP preferred, JPEG fallback)
- Fonts: System fonts or 1-2 web fonts max
- Animations: Keep subtle, use `prefers-reduced-motion`
- No auto-playing video/audio

---

## Examples of Use

### Homepage Hero
- H1 headline (44px, 700)
- Body text (18px, 400)
- 2 buttons side by side: Primary + Secondary
- Background: `#f8fafc`
- Padding: xl (32px) mobile, 2xl (48px) desktop
- Optional image on right (50% width desktop)

### Service Card Grid
- 1 column mobile, 2 columns tablet, 3-4 columns desktop
- Each card: 24px padding, border-radius 16px
- Border: 2px `#64748b`
- Background: white
- Gap: lg (24px)

### Trust Strip
- Horizontal flex layout
- Chips with light gray background
- Wraps to 2 columns on tablet, stacks on mobile
- Total width: container max-width

### Footer
- Dark background (`#0f172a`)
- Light text (`#e2e8f0`)
- 4 columns desktop, 1 column mobile
- Copyright and links in text
