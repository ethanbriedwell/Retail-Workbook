# Choctaw Nation of Oklahoma — Working Brand Guide

A working reference compiled from the source files in [`source/`](source/). It does **not**
replace the official brand guidelines kept by the Choctaw Nation Division of Marketing &
Communications. When this guide and an official guideline disagree, the official guideline wins.

## 1. Choosing a brand context

| Context | Use for | Primary | Accent | Logo |
|---|---|---|---|---|
| **Nation** (`nation`) | Tribal-wide, strategic plan, cross-division work | Flag Purple `#3E0286` | Sky Blue `#76BEE4` | Text wordmark "Choctaw Nation of Oklahoma" |
| **Operational Excellence** (`oe`) | OE department decks, reports, process docs | Dark Green `#2E4B40` | Gold `#C6A45D` | `assets/logos/oe-lockup-seal.png` |
| **Travel Plaza / Retail** (`retail`) | Retail guest experience, Travel Plaza materials | Plaza Brown `#572D2D` | Feather Red `#BF2E1A` | `assets/logos/travel-plaza-wordmark.png` |

Pick one context per piece. Don't mix palettes on the same page.

## 2. Color

### Nation (from the Layout & Presentation Job Aide)

| Role | Name | Hex | RGB | Use |
|---|---|---|---|---|
| primary | Flag Purple | `#3E0286` | 62, 2, 134 | Title, divider and closing slide backgrounds |
| primary-deep | Heritage Purple | `#4D2F66` | 77, 47, 102 | Footer bands; headlines on white (Strategic Plan) — *sampled* |
| accent | Sky Blue | `#76BEE4` | 118, 190, 228 | Infographics, chart lines, links |
| alert | Crimson Red | `#C81F06` | 200, 31, 6 | Calls to action, warnings, a single focal metric — sparingly |
| ornament | Lakna (Gold) | `#FDD802` | 253, 216, 2 | Decorative borders and geometric accents only |
| surface | Canvas White | `#FFFFFF` | 255, 255, 255 | Content backgrounds |
| text | Charcoal | `#222222` | 34, 34, 34 | Body text (not pure black) |

### Operational Excellence (from the OE Color Scheme / Branding sheet)

| Role | Name | Hex |
|---|---|---|
| primary | Dark Green | `#2E4B40` |
| accent | Gold | `#C6A45D` |
| surface-alt | Light Gray | `#F2F2F2` |
| neutral | Medium Gray | `#B7B7B7` |
| text | Black | `#000000` (use `#222222` for long reading) |
| surface | White | `#FFFFFF` |

### Travel Plaza / Retail (sampled from logo files — confirm with Marketing)

| Role | Name | Hex | Source |
|---|---|---|---|
| primary | Plaza Brown | `#572D2D` | Travel Plaza wordmark |
| primary-deep | Feather Umber | `#541800` | Feather mark (back feather) |
| accent | Feather Red | `#BF2E1A` | Feather mark (front feather) |
| alert | Diamond Red | `#B11E29` | Diamond mark center |
| ornament | Rule Taupe | `#8A7171` | Rule under wordmark |

### Reference only (never recolor or re-create)

- Great Seal: green `#07884F`, blue `#00A7E5`, yellow `#FEF200`, red `#E93A3F`.
- "Living out the Chahta Spirit — Faith · Family · Culture": red `#9D162E`, brown `#512C1D`, gold `#FFD520`, blue `#009BDC`.

All values live in [`../tokens/tokens.json`](../tokens/tokens.json).

## 3. Typography

- **Display / headings:** Montserrat Bold–ExtraBold (fallback Arial Black). Geometric sans per the Job Aide.
- **Body:** Source Sans 3 Regular/Semibold (fallback Arial).
- **Slide scale (Job Aide):** hero 36–40pt · slide title 24pt bold · section header 16pt bold · body 12–14pt regular.
- Title/divider slides: white type on the primary color. Content slides: charcoal on white or an ultra-light panel.

## 4. Cultural patterns and motifs

Use Southeastern Woodland geometry that belongs to Choctaw heritage:

- **Full Diamond band** (`assets/patterns/diamond-band.svg`) — borders; protection and natural balance.
- **Half-Diamond band** (`assets/patterns/half-diamond-band.svg`) — a progressive journey; good for section dividers and timelines.
- **Rope braid rule** (`assets/patterns/rope-braid.svg`) — under major section headers, echoing the border framing of official tribal assets.
- **Southeastern wave/spiral borders** (`assets/patterns/southeastern-wave-borders.jpg`) — reference artwork for print borders.
- **Diamond mark** and **feathers** (`assets/marks/`) — Travel Plaza / retail context.

**Avoid:** Plains-tribe symbols (tipis, feathered headdresses, dreamcatchers, totem poles), generic "tribal" clip art, and mixing motifs from other nations. Treat motifs as framing — they shouldn't compete with content.

## 5. Logos and legal safeguards

- **The Great Seal** is not a decorative element. Never use it as a background, watermark, filler icon or pattern. Use it only inside an approved lockup (e.g. the OE lockup) or where official use calls for it. Don't recolor, crop, rotate, or add effects.
- **Lockups:** keep clear space at least the height of the "C" in Choctaw around the lockup. Place on white; on dark backgrounds put the lockup on a white plate.
- **"Together We're More"** is a protected trademark. Use it as written, ideally on a closing slide alongside official links (choctawnation.com).
- **Approval:** any public, commercial or outward-facing material needs prior written layout review and approval from the **Division of Marketing & Communications**. Internal working documents can use this workspace as-is.
- The **ikbi** emblem (influence · knowledge · believe · impact) is a program mark — use it only for that program's materials.

## 6. Photography

Files in `assets/photography/` came from the user's supplied set. Confirm rights and current usage permission before public use.

- `headquarters-durant.jpg` — Choctaw Nation headquarters, Durant.
- `casino-resort-tower.webp` — Choctaw Casino & Resort tower (rendering).
- `kindred-spirits-gathering.webp` — Kindred Spirits sculpture gathering.
- `cultural-basketry.jpg` — traditional basketry and cultural items.

Prefer real people and places of the Nation over stock imagery. Don't crop through people's faces or regalia; caption cultural items accurately.

## 7. Accessibility

- Body text ≥ 4.5:1 contrast. Charcoal on white and white on Flag Purple / Dark Green / Plaza Brown all pass.
- **Don't** set text in Lakna Gold, Sky Blue or OE Gold on white — they fail contrast. Use them for shapes, rules and chart marks.
- Never rely on red alone to signal a problem; pair it with a label or icon.
