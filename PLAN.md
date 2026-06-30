# Thawani Restaurant & Cafe — Bilingual Website Rebuild

A clean, fast, multi-file bilingual (English & Arabic) website for **Thawani Restaurant & Cafe** (Doha, Qatar). This plan replaces the broken single-file HTML layout with a modular architecture that supports language switching, custom assets, and fast loading.

---

## 1. Restaurant & Project Data (Finalized)

| Detail | Source / Value | Notes |
|---|---|---|
| **Name** | Thawani Restaurant & Cafe / ثواني مطعم و مقهى | |
| **Phone** | **+974 3000 6430** | Verified from Google Maps |
| **Instagram** | [thawani_cafe_restaurant](https://www.instagram.com/thawani_cafe_restaurant/?hl=ar) | |
| **Location** | Doha, Qatar (Plus Code: `7GF7+XX Doha`) | |
| **Hours** | **Open 24 hours, 7 days a week** | |
| **Rating** | *Removed* | Excluded since rating is 3.5 on Maps |
| **Categories** | Coffee shop & Restaurant | |
| **Bilingual** | **English & Arabic** | Dual navigation, RTL/LTR layout toggles |
| **Reserve CTA** | Placeholder button action | Pre-configured to point to temporary placeholder |
| **Logo** | Provided image | To be placed in `/assets/images/logo.png` |
| **Delivery** | *None* | No third-party delivery services linked |
| **Translations** | Automated / standard terms | Items will be translated directly into Arabic |
| **Images** | Premium Generated Placeholders | Hero and about photos generated via AI to fit the design vibe |

---

## 2. Updated File Structure

```
Thawani_Resturant/
├── index.html              ← Landing page (bilingual text template)
├── menu.html               ← Full menu page (tabbed categories with translations)
├── css/
│   ├── variables.css       ← Colors, fonts, common spacing tokens
│   ├── base.css            ← Shared resets, global styles, dynamic RTL overrides
│   ├── nav.css             ← Responsive nav + language selector
│   ├── hero.css            ← Hero layout
│   ├── stats.css           ← Stats grid (Hours changed to 24/7, Rating removed)
│   ├── menu.css            ← Category scroll and bilingual grid
│   ├── about.css           ← Dual-column layout
│   ├── info.css            ← 3-column contact grid
│   ├── footer.css          ← Minimal footer
│   └── animations.css      ← Transitions and visual micro-effects
├── js/
│   ├── menu-data.js        ← English + Arabic menu item dictionaries
│   ├── translation-data.js ← All website copy translated for fast local switching
│   ├── menu.js             ← Language-aware tab rendering
│   └── main.js             ← Global language switcher (RTL flag), nav toggle, observers
├── assets/
│   └── images/
│       ├── logo.png        ← User's attached logo image
│       ├── hero-placeholder.jpg
│       └── about-placeholder.jpg
├── claude.md               ← AI instructions
├── PLAN.md                 ← This file
└── README.md               ← Maintenance guide
```

---

## 3. Verification Plan

- [ ] Verify Language Switcher toggle swaps all text strings immediately.
- [ ] Ensure Arabic toggle correctly activates `dir="rtl"` and swaps layout alignment.
- [ ] Confirm hours read "Open 24/7" / "مفتوح 24 ساعة".
- [ ] Confirm no third-party delivery options are displayed.
- [ ] Test Instagram link points to `thawani_cafe_restaurant`.
- [ ] Check generated assets render beautifully in place.
