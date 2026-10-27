# Choctaw Nation Design Workspace

A home base for designing Choctaw Nation of Oklahoma (CNO) materials: decks, handouts, dashboards and retail guest-experience work.

**Monthly Retail Guest Experience report:** open [`dashboards/retail-guest-experience.html`](dashboards/retail-guest-experience.html) — guide in [`dashboards/retail-guest-experience.md`](dashboards/retail-guest-experience.md).

**Gaming Voice of the Guest summary (front & back):** open [`dashboards/gaming-voice-of-guest.html`](dashboards/gaming-voice-of-guest.html) — guide in [`dashboards/gaming-voice-of-guest.md`](dashboards/gaming-voice-of-guest.md).

Open **[`index.html`](index.html)** in a browser for a visual overview of palettes, motifs, logos and photography.

## What's here

```
choctaw-nation/
├── index.html                  Visual overview of the workspace
├── CLAUDE.md                   Brand rules Claude follows when working here
├── brand/
│   ├── BRAND_GUIDE.md          Color, type, motifs, logo and legal rules
│   ├── strategic-plan-2026-2030.md   Pillars and objectives for tagging work
│   └── source/                 Original PDFs and branding sheet you supplied
├── tokens/
│   ├── tokens.json             Source of truth: three brand contexts
│   ├── tokens.css              CSS variables + motif utility classes
│   ├── brand.ts                Typed palettes, chart series and strategic pillars for TSX
│   └── tailwind-preset.js      Tailwind colors and fonts
├── dashboards/
│   ├── retail-guest-experience.html   Monthly Retail GX Performance Summary (self-contained)
│   ├── retail-guest-experience.md     How to use it + KPI calculation standards
│   ├── gaming-voice-of-guest.html     Gaming VoG one-page summary, front & back (self-contained)
│   └── gaming-voice-of-guest.md       How to use it + calculation rules
├── templates/
│   ├── slides.html             16:9 deck (title, divider, content, KPI, closing)
│   └── one-pager.html          US Letter handout
└── assets/
    ├── logos/                  OE lockup, Travel Plaza wordmark, Great Seal, Chahta Spirit, ikbi
    ├── marks/                  Feathers, diamond
    ├── patterns/               Diamond / half-diamond / rope-braid SVG tiles, wave borders
    └── photography/            HQ, resort tower, Kindred Spirits, basketry
```

## Brand contexts

| `data-brand` | Use for | Primary / Accent |
|---|---|---|
| `nation` | Tribal-wide, strategic plan | Flag Purple `#3E0286` / Sky Blue `#76BEE4` |
| `oe` | Operational Excellence | Dark Green `#2E4B40` / Gold `#C6A45D` |
| `retail` | Commerce–Retail, Travel Plaza, guest experience | Brand Brown `#4F2C1D` / Choctaw Red `#AB2328` (Gill Sans) |

## Quick start

**New deck:** copy `templates/slides.html`, set `<body data-brand="...">`, edit the slides, then Print → Save as PDF (landscape, no margins, background graphics on). The toolbar at the top switches brands for preview and doesn't print.

**New handout:** copy `templates/one-pager.html`, same steps (Letter).

**React / TSX** (e.g. `../retail_guest_experience_dashboard.tsx`):

```ts
import { palettes, chartSeries, strategicPillars } from './choctaw-nation/tokens/brand';
const c = palettes.retail;
```

**Plain HTML:** `<link rel="stylesheet" href="choctaw-nation/tokens/tokens.css">`, then use `var(--cn-primary)` etc. Motif classes: `.cn-band-diamond`, `.cn-band-half-diamond`, `.cn-rule-rope`.

## Before anything leaves the building

- Outward-facing, public or commercial material needs **written approval from the Division of Marketing & Communications**.
- The **Great Seal** is never decoration.
- **"Together We're More"** is a protected trademark.
- **Photos:** confirm rights before public use.

This workspace is a working reference. It doesn't replace the official guidelines maintained by the tribal administration.
