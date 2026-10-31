/**
 * Catch the three ways a link next to text goes wrong in the built HTML.
 *
 *     node scripts/check-whitespace.mjs
 *
 * All three shipped at least once, which is why this exists rather than a
 * style rule nobody can enforce:
 *
 *   1. NESTED ANCHORS. An <a> inside an <a> is invalid, and the parser does
 *      not ignore it — it closes the outer one, so everything after the inner
 *      link falls out of the card and becomes a sibling. On the home page
 *      that turned a three-card row into six grid items with a stray "."
 *      floating between them. It is invisible in the source and invisible in
 *      the emitted HTML; only the parsed DOM shows it.
 *
 *   2. A LETTER AGAINST A LINK. Astro collapses the whitespace between text
 *      and an element on the next line, so
 *
 *          Added to a plan. More on
 *          <a href="...">how we build</a>.
 *
 *      renders as "More onhow we build". The fix is to write the space —
 *      {' '} — rather than leave it to the indentation.
 *
 *   3. A SPACE BEFORE PUNCTUATION. Usually the same cause in reverse.
 *
 * Checked against the BUILT output, not the source, because the whole class
 * of bug is about what the compiler does to the source.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

/* Script and style bodies are not prose: JSON-LD is full of sentences and CSS
   is full of punctuation, and neither renders as text. */
const stripNonText = (html) =>
  html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (m) => ' '.repeat(m.length))
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, (m) => ' '.repeat(m.length))
    .replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));

const lineAt = (s, i) => s.slice(0, i).split('\n').length;

function nestedAnchors(html) {
  const hits = [];
  const re = /<a\b[^>]*>|<\/a>/gi;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[0][1] === '/') depth = Math.max(0, depth - 1);
    else {
      depth += 1;
      if (depth > 1) hits.push({ i: m.index, text: html.slice(m.index, m.index + 70) });
    }
  }
  return hits;
}

function joinedToLink(html) {
  const hits = [];
  /* A word character hard against an opening <a>, or against the text right
     after </a>. An opening bracket, a currency symbol or any punctuation on
     either side is legitimate; two letters touching across a tag is not. */
  for (const re of [/([A-Za-z0-9])<a\s[^>]*>([A-Za-z0-9])/g, /([A-Za-z0-9])<\/a>([A-Za-z0-9])/g]) {
    let m;
    while ((m = re.exec(html))) {
      hits.push({ i: m.index, text: html.slice(Math.max(0, m.index - 40), m.index + 60) });
    }
  }
  return hits;
}

function spaceBeforePunctuation(html) {
  const hits = [];
  /* Only inside a text run — between a '>' and the next '<' — so attribute
     values and tag soup are never read as prose. A single space before an
     ellipsis or a dash is fine; this is about . , ; : ! ? */
  const re = />([^<]*)</g;
  let m;
  while ((m = re.exec(html))) {
    const text = m[1];
    if (!text.trim()) continue;
    const bad = /[A-Za-z0-9)][  ]+([.,;:!?])(?:\s|$)/.exec(text);
    if (bad) {
      const at = m.index + 1 + bad.index;
      hits.push({ i: at, text: html.slice(Math.max(0, at - 40), at + 40) });
    }
  }
  return hits;
}

const files = (await htmlFiles(DIST)).sort();
let failures = 0;
const report = (file, label, hits, src) => {
  if (!hits.length) return;
  failures += hits.length;
  for (const h of hits) {
    console.log(
      `FAIL  ${relative(DIST, file)}:${lineAt(src, h.i)}  ${label}\n      …${h.text.replace(/\s+/g, ' ').trim()}…`,
    );
  }
};

for (const file of files) {
  const raw = await readFile(file, 'utf8');
  const text = stripNonText(raw);
  report(file, 'link nested inside a link', nestedAnchors(text), raw);
  report(file, 'letter against a link, missing space', joinedToLink(text), raw);
  report(file, 'space before punctuation', spaceBeforePunctuation(text), raw);
}

console.log(
  failures === 0
    ? `\nPASS — ${files.length} pages, no nested links, no joined words, no space before punctuation`
    : `\nFAIL — ${failures} problem(s) across ${files.length} pages`,
);
process.exit(failures === 0 ? 0 : 1);
