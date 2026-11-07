/**
 * A BRANDURE PRICE WRITTEN INTO CONTENT MUST BE A PRICE WE CHARGE.
 *
 * Every price in a .astro page goes through <Price>, which reads
 * src/data/pricing.ts, so a plan card and the schema cannot disagree about
 * what Core costs. A markdown guide cannot render a component — Astro 7's
 * default Markdown processor takes no remark plugins without moving the whole
 * site onto the unified pipeline, which this repo has already declined once —
 * so /guides/what-ai-visibility-tools-measure writes the component's own
 * markup by hand:
 *
 *     <span class="cur-aed">AED 6,500</span><span class="cur-gbp">…
 *
 * That works and it follows the currency switch. What it loses is the
 * guarantee: the figure is now typed in a second place, and the day Core's
 * price changes, nothing would notice the guide still quoting the old one.
 * A price in a guide is a price a reader may act on, and a stale one is worse
 * than no figure at all.
 *
 * So this check reads every currency span out of src/content and refuses any
 * figure that is not one src/data/pricing.ts actually produces, and refuses a
 * set of spans that does not carry all three currencies — a sentence showing
 * dirhams to a reader who chose pounds is the failure the markup exists to
 * prevent.
 *
 *   node scripts/check-prices.mjs
 *
 * Exits non-zero on any failure.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const CONTENT = join(ROOT, 'src/content');
const PRICING = join(ROOT, 'src/data/pricing.ts');

let failures = 0;
const fail = (msg) => { console.log(`  FAIL  ${msg}`); failures++; };
const pass = (msg) => console.log(`  ok    ${msg}`);

/* ---------- the prices we actually charge ----------
   Read as source rather than imported, because pricing.ts is TypeScript and
   this is a plain node script. Every { aed, gbp, usd } literal in the file
   counts, so plans, the setup fee, add-ons and the builder's bundles are all
   covered without this script knowing their names. */
const src = readFileSync(PRICING, 'utf8');
const fmt = (n) => Number(n).toLocaleString('en-GB');
const allowed = { aed: new Set(), gbp: new Set(), usd: new Set() };
let literals = 0;
for (const m of src.matchAll(/\{\s*aed:\s*(\d+),\s*gbp:\s*(\d+),\s*usd:\s*(\d+)\s*\}/g)) {
  literals++;
  allowed.aed.add(`AED ${fmt(m[1])}`);
  allowed.gbp.add(`£${fmt(m[2])}`);
  allowed.usd.add(`$${fmt(m[3])}`);
}
if (literals === 0) {
  console.log('  FAIL  no price literals found in src/data/pricing.ts — has its shape changed?');
  process.exit(2);
}

/* ---------- what content claims ---------- */
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

const SPAN = /<span class="cur-(aed|gbp|usd)">([^<]*)<\/span>/g;
let spans = 0;
let files = 0;

console.log('\nBrandure prices written into content');

for (const file of walk(CONTENT).filter((f) => f.endsWith('.md'))) {
  const text = readFileSync(file, 'utf8');
  const found = [...text.matchAll(SPAN)];
  if (found.length === 0) continue;
  files++;
  const rel = relative(ROOT, file);

  const seen = new Set();
  for (const [, cur, value] of found) {
    spans++;
    seen.add(cur);
    if (!allowed[cur].has(value)) {
      fail(
        `${rel}: "${value}" is not a ${cur.toUpperCase()} price in src/data/pricing.ts. ` +
          `Current ${cur.toUpperCase()} prices: ${[...allowed[cur]].join(', ')}.`,
      );
    }
  }

  for (const cur of ['aed', 'gbp', 'usd']) {
    if (!seen.has(cur)) {
      fail(`${rel}: has a price but no cur-${cur} span, so a reader on ${cur.toUpperCase()} would see nothing or the wrong currency.`);
    }
  }

  if (failures === 0) pass(`${rel}: ${found.length} currency spans, all current`);
}

if (files === 0) console.log('  ok    no prices written into content');
else if (failures === 0) pass(`${spans} spans across ${files} file(s) match src/data/pricing.ts`);

console.log(failures ? `\nFAIL — ${failures} problem(s)` : '\nPASS — content prices match the price list');
process.exit(failures ? 1 : 0);
