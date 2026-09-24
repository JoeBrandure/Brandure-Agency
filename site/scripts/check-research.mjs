/**
 * Pre-publish checks for the research series.
 *
 * Runs against `dist/` after a build, plus the content source, so it is
 * meaningful whether a piece is live or still a draft: a draft is not built,
 * but its links, images and front matter are checked anyway, which is the
 * whole point — it reports what would break the moment `draft` comes off.
 *
 *   node scripts/check-research.mjs
 *
 * Exits non-zero on any failure.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const DIST = join(ROOT, 'dist');
const CONTENT = join(ROOT, 'src/content/research');
const PUBLIC = join(ROOT, 'public');

let failures = 0;
const fail = (msg) => { console.log(`  FAIL  ${msg}`); failures++; };
const pass = (msg) => console.log(`  ok    ${msg}`);
const head = (msg) => console.log(`\n${msg}`);

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(2);
}

/* ---------- gather ---------- */

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

const distFiles = walk(DIST);
const htmlFiles = distFiles.filter((f) => f.endsWith('.html'));

/** Every route the built site actually serves, extensionless. */
const routes = new Set(
  htmlFiles.map((f) => {
    const r = '/' + relative(DIST, f).replace(/\.html$/, '');
    return r === '/index' ? '/' : r;
  }),
);

const series = readdirSync(CONTENT)
  .filter((f) => f.endsWith('.md'))
  .map((f) => ({ file: f, slug: f.replace(/\.md$/, ''), raw: readFileSync(join(CONTENT, f), 'utf8') }))
  .filter((p) => /^piece:\s*\d+/m.test(p.raw));

const isDraft = (p) => /^draft:\s*true\s*$/m.test(p.raw);
const live = series.filter((p) => !isDraft(p));

console.log(`Research series: ${series.length} pieces, ${live.length} live, ${series.length - live.length} draft`);

/* ---------- 1. internal links resolve ---------- */

head('1. Internal links in the three pieces');
for (const p of series) {
  const body = p.raw.replace(/^---[\s\S]*?\n---\n/, '');
  // Images are checked separately against public/ in section 2 — they are not
  // routes, and would fail here for the wrong reason.
  const links = [...body.matchAll(/\]\((\/[^)\s]*)\)/g)]
    .map((m) => m[1])
    .filter((l) => !l.startsWith('/images/'));
  for (const link of new Set(links)) {
    const [path, hash] = link.split('#');
    const target = path === '' ? '/' : path.replace(/\/$/, '') || '/';
    const targetIsSeries = series.find((s) => `/research/${s.slug}` === target);

    if (routes.has(target)) {
      pass(`${p.slug} → ${link}`);
    } else if (targetIsSeries && isDraft(targetIsSeries)) {
      // A cross-link to a sibling still held back. Only a problem if the
      // linking piece is itself live.
      (isDraft(p) ? pass : fail)(
        `${p.slug} → ${link} (target is a DRAFT, so no page is built)` +
          (isDraft(p) ? ' — both draft, fine for now' : ' — LIVE PIECE LINKS TO A DRAFT'),
      );
    } else {
      fail(`${p.slug} → ${link} does not resolve to a built route`);
    }
    if (hash && routes.has(target)) {
      const file = target === '/' ? join(DIST, 'index.html') : join(DIST, `${target.slice(1)}.html`);
      if (existsSync(file) && !readFileSync(file, 'utf8').includes(`id="${hash}"`)) {
        fail(`${p.slug} → ${link} — #${hash} not found on ${target}`);
      }
    }
  }
}

/* ---------- 2. referenced images exist ---------- */

head('2. Images referenced by the pieces');
for (const p of series) {
  const imgs = new Set([
    ...[...p.raw.matchAll(/!\[[^\]]*\]\((\/[^)\s]+)\)/g)].map((m) => m[1]),
    ...[...p.raw.matchAll(/^heroImage:\s*(\S+)/gm)].map((m) => m[1]),
  ]);
  for (const src of imgs) {
    const f = join(PUBLIC, src);
    if (existsSync(f) && statSync(f).size > 0) pass(`${p.slug} → ${src}`);
    else fail(`${p.slug} → ${src} is missing from public/`);
  }
}

/* ---------- 3. forbidden strings in built HTML ---------- */

head('3. Internal markers must not reach the built site');
const FORBIDDEN = ['Open items', '2026-09-XX', 'SET_ON_PUBLISH', '[publish date]', 'PLACEHOLDER', '```json'];
for (const needle of FORBIDDEN) {
  const hits = htmlFiles.filter((f) => readFileSync(f, 'utf8').includes(needle));
  if (hits.length === 0) pass(`"${needle}" — absent`);
  else fail(`"${needle}" found in ${hits.map((f) => relative(DIST, f)).join(', ')}`);
}

/* ---------- 4. JSON-LD on live pieces ---------- */

head('4. JSON-LD on live research pages');
if (live.length === 0) {
  console.log('  --    no live pieces to check');
} else {
  for (const p of live) {
    const file = join(DIST, `research/${p.slug}.html`);
    if (!existsSync(file)) { fail(`${p.slug} — no built page`); continue; }
    const html = readFileSync(file, 'utf8');
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    let parsed;
    try { parsed = blocks.map((b) => JSON.parse(b)); }
    catch (e) { fail(`${p.slug} — JSON-LD does not parse: ${e.message}`); continue; }

    const flat = parsed.flatMap((x) => (Array.isArray(x) ? x : [x]));
    const article = flat.find((x) => x['@type'] === 'Article');
    const faq = flat.find((x) => x['@type'] === 'FAQPage');

    if (!article) { fail(`${p.slug} — no Article schema`); }
    else {
      // Counted locally. Gating this on the global tally reported "complete"
      // only when nothing else on the site had failed, which is not what it
      // is measuring.
      let bad = 0;
      for (const f of ['headline', 'description', 'url', 'mainEntityOfPage', 'datePublished', 'dateModified', 'inLanguage', 'author', 'publisher', 'image']) {
        if (article[f] === undefined) { fail(`${p.slug} — Article missing ${f}`); bad++; }
      }
      if (article.author?.['@type'] !== 'Person') { fail(`${p.slug} — Article author is not a Person`); bad++; }
      if (!/^\d{4}-\d{2}-\d{2}/.test(String(article.datePublished))) { fail(`${p.slug} — datePublished is not a date`); bad++; }
      if (bad === 0) pass(`${p.slug} — Article complete`);
    }
    if (!faq) fail(`${p.slug} — no FAQPage schema`);
    else if (!Array.isArray(faq.mainEntity) || faq.mainEntity.length === 0) fail(`${p.slug} — FAQPage has no questions`);
    else pass(`${p.slug} — FAQPage with ${faq.mainEntity.length} questions`);
  }
}

/* ---------- 5. sitemap ---------- */

head('5. Sitemap');
const sitemapFile = distFiles.find((f) => /sitemap-\d+\.xml$/.test(f));
const sitemap = sitemapFile ? readFileSync(sitemapFile, 'utf8') : '';
if (!sitemapFile) fail('no sitemap found in dist/');
else {
  for (const p of live) {
    if (sitemap.includes(`/research/${p.slug}`)) pass(`${p.slug} is in the sitemap`);
    else fail(`${p.slug} is live but missing from the sitemap`);
  }
  for (const p of series.filter(isDraft)) {
    if (sitemap.includes(`/research/${p.slug}`)) fail(`${p.slug} is a draft but IS in the sitemap`);
    else pass(`${p.slug} (draft) correctly absent from the sitemap`);
  }
}

/* ---------- done ---------- */

console.log(`\n${failures === 0 ? 'PASS — all checks clean' : `FAIL — ${failures} problem(s)`}`);
process.exit(failures === 0 ? 0 : 1);
