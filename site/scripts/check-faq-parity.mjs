/**
 * Every FAQPage answer must be the text that is actually on the page.
 *
 *     node scripts/check-faq-parity.mjs
 *
 * Marked-up FAQ text that differs from the visible text claims a rich result
 * for an answer nobody can find on the page. It is also invisible to review:
 * the schema is in a <script> tag, so a human reading the page sees nothing
 * wrong, and the drift is usually one character. Two have been found by hand
 * so far — a stale sentence in a /services answer, and a straight apostrophe
 * in /guides/aeo-agencies-uk where Markdown renders a typographic one. Both
 * were a build away from being caught automatically. This is that build step.
 *
 * It checks the BUILT pages, not the sources, because the three layouts
 * produce the FAQ from three different places and only the output is common
 * ground:
 *
 *   - research pieces  — <div class="rs__q"><h3>Q</h3><p>A</p></div>, both the
 *                        schema and the section generated from `faq` front matter
 *   - market guides    — <p><strong>Q</strong> A</p>, the schema parsed back out
 *                        of the rendered body by GuideLayout's faqsFromBody
 *   - the .astro pages — <details><summary>Q</summary><p>A</p></details>, both
 *                        built from the same data module
 *
 * Checking the output means a new layout is covered the day it ships, and a
 * parser that drifts from what Markdown renders is caught rather than trusted.
 *
 * Exits non-zero on any drift.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const DIST = join(ROOT, 'dist');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `astro build` first.');
  process.exit(2);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

/* Block-level tags become a space so adjacent blocks do not run together into
   a word that is on neither of them. Everything else — a, strong, em, code,
   span — is inline and becomes nothing, because that is how it renders: "see
   <a>our research</a>." is "see our research." and not "see our research ." */
const BLOCK =
  /<\/?(?:p|div|li|ul|ol|h[1-6]|br|hr|section|article|aside|main|header|footer|nav|details|summary|table|thead|tbody|tr|td|th|figure|figcaption|blockquote|dl|dt|dd)\b[^>]*>/gi;

const ENTITIES = {
  '&#39;': "'", '&rsquo;': '’', '&lsquo;': '‘',
  '&ldquo;': '“', '&rdquo;': '”', '&quot;': '"',
  '&mdash;': '—', '&ndash;': '–', '&minus;': '−',
  '&hellip;': '…', '&middot;': '·', '&bull;': '•',
  '&pound;': '£', '&euro;': '€', '&copy;': '©',
  '&rarr;': '→', '&larr;': '←', '&nbsp;': ' ',
  '&lt;': '<', '&gt;': '>',
};

function decode(s) {
  let out = s;
  for (const [ent, ch] of Object.entries(ENTITIES)) out = out.split(ent).join(ch);
  out = out.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
  out = out.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
  return out.split('&amp;').join('&'); // last, or &amp;lt; decodes twice
}

const squash = (s) => s.replace(/\s+/g, ' ').trim();

/**
 * THE MULTI-CURRENCY PRICE FORM, which is the one place the page and the
 * schema are meant to differ.
 *
 * A price is emitted as three spans, one per currency, and the CSS shows
 * whichever the visitor has chosen. The schema cannot do that — a consumer
 * reading it gets one string — so it carries all three, slash-separated:
 * "AED 600 / £130 / $165". No single rendering of the page ever says that.
 *
 * Rather than exempt those answers from the check, which would stop the rest
 * of the sentence being checked at all, the three spans are joined here the
 * way the schema joins them. The wording and the figures around them are
 * still compared character for character; only the separator is supplied.
 *
 * Price.astro puts an explicit <span class="cur-sep"> / </span> between them
 * and some hand-written answers do not, so the separators are dropped first
 * and reinserted uniformly.
 */
function currencyToSchemaForm(html) {
  const withoutSeps = html.replace(/<span class="cur-sep">[^<]*<\/span>/g, '');
  return withoutSeps.replace(
    /(?:<span class="cur-(?:aed|gbp|usd)">[^<]*<\/span>){2,}/g,
    (group) =>
      [...group.matchAll(/<span class="cur-(?:aed|gbp|usd)">([^<]*)<\/span>/g)]
        .map((m) => m[1])
        .join(' / '),
  );
}

function visibleText(html) {
  let s = html.replace(/<(script|style|svg|template)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  s = currencyToSchemaForm(s);
  s = s.replace(BLOCK, ' ');
  s = s.replace(/<[^>]+>/g, '');
  return squash(decode(s));
}

/** Every FAQPage in a page's JSON-LD, however the blocks are nested. */
function faqPages(html) {
  const out = [];
  for (const m of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    let parsed;
    try {
      parsed = JSON.parse(m[1]);
    } catch {
      continue; // not ours to validate; check-research covers malformed blocks
    }
    const nodes = Array.isArray(parsed) ? parsed : [parsed];
    for (const n of nodes) {
      if (n && n['@type'] === 'FAQPage' && Array.isArray(n.mainEntity)) out.push(n);
    }
  }
  return out;
}

let failures = 0;
let pages = 0;
let pairs = 0;
const passed = [];

for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const faqs = faqPages(html);
  if (faqs.length === 0) continue;

  const route =
    '/' +
    relative(DIST, file)
      .replace(/\.html$/, '')
      .replace(/(?:^|\/)index$/, '');
  const visible = visibleText(html);
  pages++;
  let bad = 0;

  for (const faq of faqs) {
    for (const entry of faq.mainEntity) {
      const q = squash(entry?.name ?? '');
      const a = squash(entry?.acceptedAnswer?.text ?? '');
      pairs++;

      if (!q || !a) {
        console.log(`  FAIL  ${route}: FAQPage entry with an empty question or answer`);
        failures++; bad++;
        continue;
      }
      for (const [label, text] of [['question', q], ['answer', a]]) {
        if (visible.includes(text)) continue;
        console.log(`  FAIL  ${route}: ${label} is not in the page's visible text`);
        console.log(`        schema: ${text.slice(0, 150)}${text.length > 150 ? '…' : ''}`);
        /* Where it starts to diverge, which is what makes a one-character
           drift readable instead of two near-identical strings to eyeball. */
        const anchor = text.slice(0, 40);
        const at = visible.indexOf(anchor);
        if (at === -1) {
          console.log('        page  : no sign of it — wrong page, or rewritten');
        } else {
          const onPage = visible.slice(at, at + text.length);
          let i = 0;
          while (i < text.length && text[i] === onPage[i]) i++;
          console.log(`        page  : matches for ${i} chars, then`);
          console.log(`                schema ${JSON.stringify(text.slice(i, i + 60))}`);
          console.log(`                page   ${JSON.stringify(onPage.slice(i, i + 60))}`);
        }
        failures++; bad++;
      }
    }
  }
  if (bad === 0) passed.push(`${route} (${faqs.reduce((n, f) => n + f.mainEntity.length, 0)})`);
}

if (pages === 0) {
  console.log('  FAIL  no page in dist/ has FAQPage schema — the check found nothing to check');
  failures++;
}
if (!failures) {
  console.log(`  ok    ${pairs} question/answer pairs across ${pages} pages, all on the page`);
  for (const p of passed) console.log(`        ${p}`);
}

console.log(
  failures
    ? `\nFAIL — ${failures} FAQ parity problem(s)`
    : '\nPASS — every FAQPage answer is the text on the page',
);
process.exit(failures ? 1 : 0);
