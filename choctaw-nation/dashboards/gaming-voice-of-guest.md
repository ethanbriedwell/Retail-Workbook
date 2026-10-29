# Voice of the Guest Summary — Gaming (Division of Commerce)

**File:** [`gaming-voice-of-guest.html`](gaming-voice-of-guest.html). It's a single self-contained file (logos and background embedded). Open it in Chrome or Edge.

A two-sided US Letter summary of the Voice of the Guest for one casino or hospitality property or department. It's built from the *Guest Experience Performance Tracker* spec: the front covers performance, and the back covers Year-over-Year Forecasting and associate recognition.

## Using it

1. **Edit data** (toolbar) opens the data panel; **Dashboard view** hides it. Every edit updates both pages immediately and is saved in this browser.
2. **Report details:**
   - Property or location (free text), department, prepared by.
   - Reporting month and fiscal year (Oct–Sep).
   - Which metric the trend chart shows (OSAT, NPS or Choctaw Language).
   - Footer notes for the front page.
3. **Core KPIs:** enter fiscal-year goals for NPS, OSAT and Choctaw Language Observation Utilization, then monthly Medallia results for the current and prior fiscal year. Add OSAT and NPS response counts where you have them.
4. **Narrative sections:** fill in drivers (used for the Strongest Driver and Watch Area tiles), positive trends, opportunities (with impact), Year-over-Year Forecasting items and associate recognition. Each list has **Add** and **Remove** buttons.
5. **Print / Save PDF:** prints exactly two pages, front and back. Choose two-sided printing, flip on long edge.
6. The **Front fits / Back fits** badges turn red when text runs past the page. Shorten text until they're green again.
7. **Export data** saves a JSON copy, and **Import data** loads one. Use this to keep a monthly archive or hand the file to someone else.

**If the pages are blank or you see "Preview only":** the viewer isn't running the file's scripts. Phone file previews (iPhone Files / Quick Look) and some in-app viewers do this. Download the file and open it in Chrome, Edge or Safari on a computer. The file includes static sample pages so these viewers still show the layout, and if the scripts fail in a browser, a red message explains why instead of leaving the pages blank.

**If the text looks oversized and the fit badges say the pages are over:** the browser has a minimum font size setting turned on (Safari: Settings → Advanced → "Never use font sizes smaller than"; Chrome/Edge: Settings → Appearance → Customize fonts). The template detects this and automatically lays the pages out at double size and scales them down, so they look and print the same. If that still isn't enough (a very large minimum), a red note explains which setting to change.

The sample data is fictional ("Sample Casino Resort") and marked **Sample data** on both pages. Use **Clear all data** before entering real results.

## Page layout

| Front | Back |
|---|---|
| Header: Choctaw C monogram; "Choctaw Nation of Oklahoma · Division of Commerce · Voice of the Guest"; property, department, month, fiscal quarter | Same header, marked "Back" |
| KPI cards, left to right: NPS, OSAT, Choctaw Language Utilization | **4** Year-over-Year Forecasting: up to six items by category (Events, Cleanliness, Wait times, …), each with a proactive action, in two columns |
| Strongest Driver / Watch Area | **5** Associate Recognition, filling the rest of the page: mention totals by department, then a card per associate (name, department, mentions, praised behaviors) sorted by mentions, and themes to reinforce |
| **1** OSAT Performance Review: Q1–Q4 vs. goal and prior year, FYTD and YoY, and a full-width monthly trend (current vs. prior FY) | |
| **2** Key Positive Trends + a guest quote | |
| **3** Key Improvement Opportunities (High / Medium / Low) + a guest quote | |
| Footer: notes, OE lockup | Footer: OE lockup |

Associate Recognition shows cards in three columns and switches to four tighter columns above 21 associates. About 30 associates fit with short praise notes. If the **Back fits** badge turns red, shorten the praise text.

Both pages carry the feathers mark as a faint background.

## Calculations

| Item | Rule |
|---|---|
| Quarters | Q1 Oct–Dec, Q2 Jan–Mar, Q3 Apr–Jun, Q4 Jul–Sep. A quarter in progress is marked **QTD**; future quarters are dimmed. |
| OSAT / NPS quarters and FYTD | Weighted by monthly response counts. If any month lacks a count, it's a simple average, marked **FYTD\***. |
| Choctaw Language FYTD | Average of the monthly results (no response counts). |
| YoY | FYTD minus the same months of the prior fiscal year. |
| vs. prior month | This month minus last month, in points. A zero change shows as neutral gray. |
| Card status | Month vs. fiscal-year goal at one decimal: green above, yellow at, red below, no color if the month or goal is missing. |
| Strongest Driver | Driver with the highest YTD score |
| Watch Area | Driver with the lowest YTD score |

## Brand

- **Header logo:** the Choctaw C monogram (`assets/logos/choctaw-c-monogram.png`).
- **Page background:** the feathers mark (`assets/marks/feathers.png`) at 7% opacity, so text stays readable.
- **Footer:** the Choctaw Nation Operational Excellence lockup.
- **Colors:** Feather Red `#BF2E1A`, Feather Umber `#541800`, gold accent `#C6A45D`.
- **Type:** headings in a serif (Georgia) for a hospitality feel; body in the system sans-serif. Both work offline.
- **Status colors:** green `#3D7A3A`, yellow `#D4A017`, red `#B3261E`. Each status also carries a text label.

Removed from the original spec: the Executive Summary, the month/quarter/FYTD comparison chart, and on the back, the Guest Experience Drivers table, Operational Excellence Insights (including Connection to guest feedback) and Recommended Actions. Driver scores are still entered in Edit data because they feed the front-page tiles.

## Maintenance

The static preview pages inside the HTML are a rendered copy of the sample data. After changing the template, refresh them:

```
node choctaw-nation/dashboards/tools/refresh-static-preview.js choctaw-nation/dashboards/gaming-voice-of-guest.html
```
