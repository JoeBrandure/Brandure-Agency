/**
 * NO META DESCRIPTION LONGER THAN A RESULT PAGE WILL SHOW.
 *
 * Twelve pages shipped with descriptions between 158 and 229 characters.
 * Nothing caught them, because nothing was looking: the build checked links,
 * whitespace, schema and prices, and a description that is simply too long
 * breaks none of those. It took an external audit to find them, twice.
 *
 * A description past about 155 characters is cut mid-sentence in a result,
 * which costs exactly the part a writer put last — the reason to click. So
 * the limit is enforced here rather than remembered.
 *
 * The floor is deliberately low. 155 is a real constraint and 140 is an
 * editorial target, not a rule a future page should fail the build over; a
 * genuinely short, complete sentence is not a defect. Anything under 70 is
 * reported as thin without failing, because that usually means a page was
 * given a label instead of a description.
 *
 * noindex pages are skipped: nothing is showing them in a result.
 *
 *   node scripts/check-heads.mjs
 *
 * Exits non-zero if any indexable page is over the limit.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const DIST = join(ROOT, 'dist');
const MAX = 155;
const THIN = 70;

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(2);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

let failures = 0;
const thin = [];
let checked = 0;

console.log('\nMeta descriptions');

for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const route = '/' + relative(DIST, file).replace(/\.html$/, '').replace(/\/?index$/, '');
  const html = readFileSync(file, 'utf8');
  if (/<meta name="robots" content="noindex/.test(html)) continue;

  const m = /<meta name="description" content="([^"]*)"/.exec(html);
  if (!m) {
    console.log(`  FAIL  ${route || '/'}: no meta description`);
    failures++;
    continue;
  }
  /* Entities are one character to a reader and to a result page. */
  const text = m[1]
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  checked++;

  if (text.length > MAX) {
    console.log(`  FAIL  ${route || '/'}: ${text.length} characters, ${text.length - MAX} over the ${MAX} limit`);
    console.log(`        …${text.slice(MAX - 20)}`);
    failures++;
  } else if (text.length < THIN) {
    thin.push(`${route || '/'} (${text.length})`);
  }
}

if (thin.length) console.log(`  note  thin, but not a failure: ${thin.join(', ')}`);
if (!failures) console.log(`  ok    ${checked} indexable pages, every description ${MAX} characters or under`);

console.log(failures ? `\nFAIL — ${failures} problem(s)` : '\nPASS — meta descriptions fit a result page');
process.exit(failures ? 1 : 0);
