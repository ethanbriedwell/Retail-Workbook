// Refreshes the static preview pages in gaming-voice-of-guest.html (shown when a viewer does not run scripts).
// Run after changing the template: node choctaw-nation/dashboards/tools/refresh-static-preview.js choctaw-nation/dashboards/gaming-voice-of-guest.html
// Needs Playwright with Chromium. Renders the built-in sample data and writes it between the static-preview markers.
const { chromium } = require('playwright');
const fs = require('fs');
const file = require('path').resolve(process.argv[2]);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + file); await p.waitForTimeout(400);
  const html = await p.evaluate(() => ({ front: document.getElementById('front').innerHTML, back: document.getElementById('back').innerHTML, sample: state.sample, fit: [document.getElementById('fitFront').textContent, document.getElementById('fitBack').textContent] }));
  await b.close();
  if (!html.sample) throw new Error('not sample state');
  let s = fs.readFileSync(file, 'utf8');
  for (const side of ['front', 'back']) {
    const re = new RegExp(`(<!-- static-preview:${side} -->)[\\s\\S]*?(<!-- /static-preview -->)`);
    if (!re.test(s)) throw new Error('marker missing ' + side);
    const body = html[side].replace(/<!--[\s\S]*?-->/g, '');
    s = s.replace(re, (_, a, z) => a + body + z);
  }
  fs.writeFileSync(file, s);
  console.log('snapshot written', html.fit);
})();
