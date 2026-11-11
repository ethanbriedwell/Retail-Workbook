# Voice of the Guest · Retail — Report Guide

**File:** [`retail-voice-of-guest.html`](retail-voice-of-guest.html). A single self-contained file (logos embedded). Open it in a current Chrome, Edge, Safari or Firefox.

Choctaw Nation of Oklahoma | Division of Commerce – Retail

It builds a two-page (front and back, US Letter portrait) guest experience report for every location, each region and the whole division from the monthly Retail Numbers Feed workbook.

## Each month

1. **Import workbook**: drop the `.xlsx` on the page or use *Import workbook*. The file is read in the browser; nothing is uploaded. Importing again replaces the data and keeps typed text and settings.
2. **Location** and **Month**: pick All Retail Locations, a region, or one location. Months without rows in the workbook are disabled.
3. **Edit** (optional): set *Prepared by*, the OpWalk and Choctaw Language Utilization goals, and replace any automated text for that location and month. Blank boxes use the automated text. The fit badges turn red if typed text pushes a page past one sheet.
4. **Share**:
   - **Print / Save PDF** gives the two pages for the selected location.
   - **Save a copy to share** downloads this page with the data inside it. Leaders open that one file and choose their own location; they don't need the workbook.
5. **Data tables** shows everything that was read (monthly results, OpWalk log, goals) and the import notes.

## What the workbook needs

| Block | Where | Columns |
|---|---|---|
| Goals | A sheet with "Goals" in its name (e.g. `FY27GOALS`) | Location, prior-FY goal, Oct–Sep prior-FY Retail NPS, prior-FY result, new FY goal. Rows for Overall, South, Central, North and each location. |
| Medallia | Each month sheet (`OCT` … `SEP`) | Unit, # of records, Retail NPS, five driver scores |
| Choctaw Language Utilization | Each month sheet | Location, Observations, Language Frequency |
| Retail OpWalks | Each month sheet | Date, Score-Percent, Location (one row per walk) |

Blocks are found by their column headings, so columns can move. Location names are matched after dropping "Travel Plaza" / "Country Market"; the three Mercantile spellings are treated as one location.

## Calculations

| Measure | Rule |
|---|---|
| Retail NPS (roll-ups, quarters, FYTD) | Weighted by responses: Σ(NPS × responses) ÷ Σ responses. Equal to pooling promoters and detractors. |
| Drivers (roll-ups, FYTD) | Weighted by that location-month's Retail NPS responses |
| Choctaw Language Utilization | Σ language used ÷ Σ observed interactions × 100 |
| OpWalk Score | Average of every walk in scope |
| vs. prior month | Month − previous month. October compares Retail NPS with the prior fiscal year's September from the goals sheet. |
| vs. same month last FY | Retail NPS only, from the goals sheet's monthly columns |
| Prior-FY quarter value | Simple average of the prior-FY monthly values for the months reported so far (no response counts are available) |
| Status | Month compared with goal at one decimal: above (green), at (gold), below (red). Always labeled in text. |
| Low sample | Fewer than 30 responses |

**Goals:** Retail NPS goals come from the workbook. OpWalk (95.0%, the Retail brand goal) and Choctaw Language Utilization (75.0%) are defaults set in *Edit* because the workbook doesn't carry them.

## Automated text

| Section | Rule |
|---|---|
| Strongest driver / Watch area | Highest and lowest driver score for the month |
| Key Positive Trends | Up to three: Retail NPS at or above goal, top location (roll-ups), strongest driver, language and OpWalk at or above goal |
| Key Improvement Opportunities | Up to three: Retail NPS below goal, lowest driver (with the three lowest locations on roll-ups), locations furthest below goal, language or OpWalk below goal, low sample |
| Focus for the Next 30 Days | The 30-day action plan for the lowest driver, same wording as `retail-guest-experience.html`. Labeled **Priority** when that driver also fell vs. last month, otherwise **Focus**. |

Regions follow the Retail Guest Experience dashboard. Boswell, Clayton and Coalgate Country Markets have OpWalk and language results only.

## Brand

Commerce–Retail palette and Gill Sans (falls back to Calibri or Arial), Choctaw Travel Plaza wordmark, diamond band, and the Operational Excellence lockup in the footer. Strategic Alignment tags: Best in Class · Service Excellence; Culture and Sovereignty · Cultural Heritage and Language. Internal report; outward-facing use needs Marketing & Communications approval.
