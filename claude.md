# Thawani Restaurant & Cafe — Project Guidelines

## Project Overview
A clean, fast, multi-file website for **Thawani Restaurant & Cafe** — a Middle Eastern & Moroccan restaurant in Doha, Qatar. Replacing a broken single-file HTML with a maintainable, modular static site.

## Tech Stack
- **HTML5** — Semantic markup, no frameworks
- **CSS3** — Vanilla CSS, modular files, CSS custom properties
- **JavaScript** — Vanilla JS, no libraries, no build tools
- **Fonts** — Google Fonts (Playfair Display + Inter for English, IBM Plex Sans Arabic for Arabic) with `display=swap`

## Internationalization
- **Bilingual**: English & Arabic, toggled client-side via the `.lang-switch` button
- **Copy lives in `js/translation-data.js`** — a `TRANSLATIONS` dictionary keyed by the `data-i18n` attribute found on each translatable element; `js/main.js` swaps `innerHTML` and flips `<html lang>`/`<html dir>` on toggle, persisted via `localStorage`
- Arabic uses `dir="rtl"` + the Cairo font; English uses `dir="ltr"` + Playfair Display/Inter
- Arabic text must NOT use `text-transform: uppercase` or added `letter-spacing` — both break Arabic letterform joining. See the `[dir="rtl"]` overrides in `base.css`

## Design Rules
- **Dark + warm gold palette** — No neon colors. Ever.
- **Colors**: `#0A0A0A` (bg), `#C9A84C` (gold accent), `#F5F0E8` (text)
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: CSS-only (`@keyframes`, `transition`). No animation libraries.
- **Design feel**: Premium, elegant, appetizing — not flashy or loud

## Architecture Rules
- **No single-file builds** — HTML, CSS, and JS are always separate files
- **Modular CSS** — One CSS file per component/section (nav, hero, menu, etc.)
- **Menu data lives in `js/menu-data.js`** — This is the only file the restaurant owner edits to update prices or items
- **Two pages**: `index.html` (landing) and `menu.html` (full menu)
- **Assets in `assets/images/`** — All images go here

## Performance Rules
- Total page weight < 500KB (excluding images)
- No render-blocking JS — always use `defer`
- Images must be optimized (WebP preferred, < 200KB each)
- No external dependencies beyond Google Fonts
- Preconnect to Google Fonts CDN
- Target < 2s load on 3G

## Code Style
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- CSS custom properties defined in `css/variables.css` — never hardcode colors
- BEM-lite naming for CSS classes (e.g., `.menu-item`, `.menu-item-name`, `.menu-tab`)
- JS: `const`/`let` only, no `var`. Descriptive function names. Comments on non-obvious logic.
- All IDs must be unique and descriptive

## File Structure
```
Thawani_Resturant/
├── index.html
├── menu.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── nav.css
│   ├── hero.css
│   ├── stats.css
│   ├── menu.css
│   ├── about.css
│   ├── info.css
│   ├── footer.css
│   └── animations.css
├── js/
│   ├── menu-data.js
│   ├── translation-data.js
│   ├── menu.js
│   └── main.js
├── assets/
│   └── images/
│       ├── hero-placeholder.jpg
│       ├── about-placeholder.jpg
│       ├── logo.svg
│       └── favicon.svg
├── claude.md
├── PLAN.md
└── README.md
```

## Responsive Breakpoints
- **Desktop**: > 768px — full layout
- **Mobile**: ≤ 768px — stacked layout, hamburger nav, single-column menu grid
- Use `clamp()` for fluid typography
- Mobile-first media queries

## What NOT to Do
- Do NOT use Tailwind, Bootstrap, or any CSS framework
- Do NOT use React, Vue, or any JS framework
- Do NOT merge CSS/JS back into HTML files
- Do NOT use neon, bright, or saturated accent colors
- Do NOT add heavy image carousels or sliders
- Do NOT add dependencies via npm/CDN (except Google Fonts)
- Do NOT change the file structure without updating this document
