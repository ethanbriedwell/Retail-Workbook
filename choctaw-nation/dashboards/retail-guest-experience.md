# Retail Guest Experience Performance Summary — Dashboard Guide

**File:** [`retail-guest-experience.html`](retail-guest-experience.html). It's a single self-contained file (logos embedded). Open it in Chrome or Edge.

Choctaw Nation of Oklahoma | Division of Commerce–Retail | Guest Experience

## Using it each month

1. **Location**: pick one of the 18 stores. The region fills in automatically. Roll-ups (All Retail, North, Central, South) are calculated from the store data.
2. **Month / Fiscal year**: the fiscal year runs Oct 1 – Sep 30. "Compared with" shows the prior month (October compares with the prior fiscal year's September).
3. **Monthly results**: enter the current month and the comparison month side by side:
   - Retail NPS: promoter, passive and detractor counts.
   - OpWalk: earned and eligible points, or a manual %.
   - Choctaw Language Utilization: language-used and eligible interactions, or a manual %.
   - Five driver scores (−100 to 100).
4. **Goals**: set per fiscal year. Location goals override the division defaults; blanks fall back to the default. The Retail brand OpWalk goal is 95.0%.
5. **Top Performing Stores**: auto-ranked. Tick *Set the ranking manually* to override for that period.
6. **Summary text**: Key Insights, Watch Area and Recommendation are automated. Type in a box to replace the text for that location and period, and clear it to go back to automated.
7. **Print / Save PDF**: the report scales itself to one landscape Letter page and the data panel is hidden.
8. **Export data** to back up or share. Edits otherwise live only in this browser. **Import data** accepts exports from this dashboard and the earlier workbook JSON (`retail_guest_experience_dashboard_data.json`).

The sample data set (FY25–FY26, all 18 stores) is marked **Sample data** on the report. Use **Clear all data** before entering real results.

## Calculation standards

| KPI | Calculation | Unit |
|---|---|---|
| Retail NPS | (Promoters − Detractors) ÷ Valid responses × 100. Promoters 9–10, Passives 7–8, Detractors 0–6. Passives count in the denominator only. | NPS points (−100 to +100) |
| OpWalk Score | Earned points ÷ Eligible points × 100 (or manual %) | % |
| Choctaw Language Utilization | Interactions with language used ÷ Eligible observed interactions × 100 (or manual %) | % |
| Delta Shift | Current month − Previous month | points |
| Delta to Goal | Current month − Goal | points |
| FYTD | Recalculated from cumulative underlying records, Oct 1 through the reporting month | NPS points or % |

**Example:** 70 promoters, 20 passives and 10 detractors give a Retail NPS of +60.0. With May at 64.1, April at 59.2 and a goal of 66.1, the Delta Shift is +4.9 (an increase of 4.9 NPS points, not 4.9%) and the Delta to Goal is −2.0.

**FYTD and roll-ups** use the underlying records, never an average of monthly percentages:

- **Retail NPS:** (ΣPromoters − ΣDetractors) ÷ ΣValid responses × 100.
- **OpWalk and CLO:** Σearned ÷ Σeligible × 100. If any month in range was entered as a manual %, there are no points to pool, so the value is a simple average of the monthly scores. It's marked **FYTD\*** with a footnote.
- **Drivers** (scores only, no counts): weighted by that location-month's Retail NPS responses, since they come from the same survey.

## Status colors

| Condition | Card |
|---|---|
| Month above goal | Green (#548235) |
| Month at goal (equal at one decimal) | Yellow (#EBB000) |
| Month below goal | Red (#AB2328) |
| Month or goal missing | No color, "No status" |

Every status also carries a text label, so it doesn't rely on color alone.

**Delta coloring:** positive is green, negative is red, and **zero is neutral gray**. The earlier workbook showed a 0.0 shift as green; that's been changed.

## Automated insights

| Insight | Rule |
|---|---|
| Strongest Driver | Highest current-month driver score |
| Watch Area | Lowest (Month − Goal): the driver furthest below goal, or least above it |
| Biggest Gain | Largest (Month − Last Month). Shows "No driver improved" if none rose. |
| Biggest Decline | Smallest (Month − Last Month). Shows "No driver declined" if none fell. |
| Top Performing Stores | Five highest current-month Retail NPS of the 18 locations. Can be overridden manually. |
| Recommendation | Driver-specific action plan for the Watch Area |

**Change from the earlier logic:** the Watch Area now also checks whether *every* driver is meeting goal. When all five are at or above goal, the tile turns green. The text then says all drivers are meeting goal and names the one with the smallest margin, and the recommendation switches to "sustain."

**Low sample:** a Retail NPS with fewer than 30 responses is flagged "low sample" on the card.

## Brand

- **Typography:** Gill Sans (`GillSans`, `Gill Sans`, `Gill Sans MT`), falling back to Calibri or Arial where Gill Sans isn't installed.
- **Colors:** the approved Commerce–Retail palette: red #AB2328, brown #4F2C1D, gold #EBB000, green #548235, blue #1F4E79, light blue #3C88CF.
- **Logos:** Choctaw Travel Plaza icon (header) and the Choctaw Nation Operational Excellence lockup (footer).
- **Motif:** the diamond band follows the Southeastern geometric motif in `../brand/BRAND_GUIDE.md`.
