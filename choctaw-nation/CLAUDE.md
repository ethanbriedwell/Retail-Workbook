# Choctaw Nation design workspace — rules for Claude

Apply these whenever you create or edit anything for Choctaw Nation of Oklahoma (CNO) work in this repo.

1. **Pick a brand context first**: `nation` (tribal-wide / strategic), `oe` (Operational Excellence), or `retail` (Travel Plaza / retail guest experience). Ask if it isn't clear. One context per piece.
2. **Use tokens, not ad-hoc hex values.** HTML: link `tokens/tokens.css` and set `data-brand` on `<body>`. React/TSX: import from `tokens/brand.ts`. Tailwind: use `tokens/tailwind-preset.js`. Source of truth is `tokens/tokens.json`.
3. **Start from a template** in `templates/` (`slides.html` for 16:9 decks, `one-pager.html` for letter handouts).
4. **Type:** Montserrat for headings, Source Sans 3 for body. Slide scale 40/24/16/12–14pt. Body text `#222222`.
5. **Color discipline:** primary for title/divider backgrounds; accent for data and links; alert/red only for the one thing that needs attention; Lakna Gold and other golds for ornament only, never text on white.
6. **Motifs:** only Southeastern Woodland/Choctaw geometry — full diamond, half diamond, rope braid, the wave/spiral borders in `assets/patterns/`. Never tipis, headdresses, dreamcatchers or generic "tribal" art.
7. **The Great Seal is never decoration** — no watermarks, backgrounds, filler icons, recoloring or effects. Only inside an approved lockup.
8. **"Together We're More"** is a protected trademark; use verbatim, typically on closing slides with choctawnation.com.
9. **Outward-facing work** (public, commercial, external) needs written approval from the Division of Marketing & Communications. Flag this to the user and keep the review note on drafts.
10. **Tie work to the 2026–2030 Strategic Alignment**: tag slides/KPIs with a pillar and objective from `brand/strategic-plan-2026-2030.md`.
11. Don't invent cultural facts, Choctaw-language words or meanings. Use only what's in the source files or what the user provides, and ask when unsure. ("Yakoke" = thank you, "Chahta" = Choctaw are used in supplied materials.)
12. Commerce–Retail work uses the approved retail palette (`#4F2C1D`, `#AB2328`, `#EBB000`, `#548235`, `#1F4E79`, `#3C88CF`) and Gill Sans. The Retail Guest Experience dashboard is `dashboards/retail-guest-experience.html`; its KPI rules are in `dashboards/retail-guest-experience.md` — keep the two in sync.

Full reference: `brand/BRAND_GUIDE.md`.
