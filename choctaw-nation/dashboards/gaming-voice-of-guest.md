# Voice of the Guest One-Page Summary — Gaming

**File:** [`gaming-voice-of-guest.html`](gaming-voice-of-guest.html). It's a single self-contained file (feathers mark embedded). Open it in Chrome or Edge.

A two-sided US Letter summary of the Voice of the Guest for one casino or hospitality property or department. It's built from the *Guest Experience Performance Tracker* spec: the front covers performance, the back covers operations, the outlook and associate recognition.

## Using it

1. **Edit data** (toolbar) opens the data panel; **Dashboard view** hides it. Every edit updates both pages immediately and is saved in this browser.
2. **Report details:**
   - Property or location (free text), department, prepared by.
   - Reporting month and fiscal year (Oct–Sep).
   - Which metric the trend chart shows (OSAT, NPS or Choctaw Language).
   - Which comparison the bar chart shows.
   - Footer notes for the front page.
3. **Core KPIs:** enter fiscal-year goals for OSAT, NPS and Choctaw Language Observation Utilization, then monthly Medallia results for the current and prior fiscal year. Add OSAT and NPS response counts where you have them.
4. **Narrative sections:** fill in drivers, positive trends, opportunities (with impact), operational metrics, looking-ahead risks, recommended actions and associate recognition. Each list has **Add** and **Remove** buttons.
5. **Print / Save PDF:** prints exactly two pages, front and back. Choose two-sided printing, flip on long edge.
6. The **Front fits / Back fits** badges turn red when text runs past the page. Shorten text until they're green again.
7. **Export data** saves a JSON copy, and **Import data** loads one. Use this to keep a monthly archive or hand the file to someone else.

**If the pages are blank or you see "Preview only":** the viewer isn't running the file's scripts. Phone file previews (iPhone Files / Quick Look) and some in-app viewers do this. Download the file and open it in Chrome, Edge or Safari on a computer. The file includes static sample pages so these viewers still show the layout, and if the scripts fail in a browser, a red message explains why instead of leaving the pages blank.

The sample data is fictional ("Sample Casino Resort") and marked **Sample data** on both pages. Use **Clear all data** before entering real results.

## Page layout

| Front | Back |
|---|---|
| Header: property, department, month, fiscal quarter | Header (continued) |
| KPI cards: OSAT, NPS, Choctaw Language Utilization | **4** Guest experience drivers table, with Watch and Strongest tags |
| **1** Executive Summary (3–5 bullets) | **5** Operational Excellence Insights: Choctaw Language plus other metrics vs. goal, and the connection to guest feedback |
| Strongest Driver / Watch Area | **6** Looking Ahead: risks by category, each with a proactive action |
| **4** OSAT Performance Review: Q1–Q4 vs. goal and prior year, FYTD and YoY, monthly trend (current vs. prior FY), comparison chart | **7** Recommended Actions, sorted High → Low impact, with owner and due date |
| **2** Key Positive Trends + a guest quote | **★** Associate Recognition: names, departments, mention counts, praised behaviors, themes to reinforce |
| **3** Key Improvement Opportunities (High / Medium / Low) + a guest quote | |

## Calculations

| Item | Rule |
|---|---|
| Quarters | Q1 Oct–Dec, Q2 Jan–Mar, Q3 Apr–Jun, Q4 Jul–Sep. A quarter in progress is marked **QTD**; future quarters are dimmed. |
| OSAT / NPS quarters and FYTD | Weighted by monthly response counts. If any month lacks a count, it's a simple average, marked **FYTD\***. |
| Choctaw Language FYTD | Average of the monthly results (no response counts). |
| YoY | FYTD minus the same months of the prior fiscal year. |
| vs. prior month | This month minus last month, in points. A zero change shows as neutral gray. |
| Card status | Month vs. fiscal-year goal at one decimal: green above, yellow at, red below, no color if the month or goal is missing. |
| Comparison chart | **Month vs. prior month**, **Quarter vs. prior quarter** (latest completed quarter vs. the one before), or **FYTD vs. prior FYTD**, across all three core KPIs. |
| Strongest Driver | Driver with the highest YTD score |
| Watch Area | Driver with the lowest YTD score |
| Executive Summary | Automated from the KPIs, drivers and top High-impact opportunity. Typing your own bullets replaces it. |

## Brand

- **Mark:** the Choctaw feathers mark, in Feather Red `#BF2E1A` and Feather Umber `#541800`, with a gold accent `#C6A45D`.
- **Type:** headings in a serif (Georgia) for a hospitality feel; body in the system sans-serif. Both work offline.
- **Status colors:** green `#3D7A3A`, yellow `#D4A017`, red `#B3261E`. Each status also carries a text label.

If Choctaw Casinos & Resorts has its own approved palette, logo or typeface, send it over and it can replace these.

## Maintenance

The static preview pages inside the HTML are a rendered copy of the sample data. After changing the template, refresh them:

```
node choctaw-nation/dashboards/tools/refresh-static-preview.js choctaw-nation/dashboards/gaming-voice-of-guest.html
```
