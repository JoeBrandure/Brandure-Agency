/**
 * THE WHOLE SITE, EVERY TIME.
 *
 *     npm run audit            # against a server on :8099 serving dist/
 *     BASE=… npm run audit     # or any other origin
 *
 * This exists because a change kept being called done when the pages it
 * touched looked right, and the ones it did not touch had quietly broken:
 * dirham prices left on three pages after a currency switch shipped, a
 * permanent accent border that read as "selected", body copy sitting 71px off
 * the page axis on nine pages at once. None of those were hard to see. They
 * were only ever hard to see ALL OF, by hand, one page at a time.
 *
 * So: every sitemap page plus /thanks, at desktop 1440 and iPhone 13, in each
 * of AED, GBP and USD. Any failure exits non-zero and blocks the commit.
 *
 * The checks, in the order they run:
 *   1  HTTP 200 and no console errors
 *   2  no horizontal scroll
 *   3  no visible Brandure price in a currency other than the selected one
 *   4  no joined words or punctuation run straight into a link
 *   5  every internal link resolves
 *   6  section headings and reading columns centred on the page axis (±2px)
 *   7  nothing wears the accent border at rest, except a real selection
 *   8  sticky elements never cover a heading or a paragraph
 *   9  count-up and stat numbers render as non-empty text
 *  10  full-page screenshots of every page at both widths, into audit/
 *
 * Checks 3, 6, 7 and 8 all carry allowlists. Each entry is a deliberate
 * exception with a reason, not a way to make a failure go away: a market
 * figure in a guide is in the guide's own currency on purpose, and a
 * two-column section is not a reading column.
 */
import { readFile, readdir, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import pw from '/opt/node-tools/node_modules/playwright/index.js';

const { chromium, devices } = pw;
const BASE = process.env.BASE || 'http://127.0.0.1:8099';
const DIST = new URL('../dist/', import.meta.url).pathname;
const OUT = new URL('../audit/', import.meta.url).pathname;
const ONLY = process.env.ONLY ? process.env.ONLY.split(',') : null;
const SHOTS = process.env.SHOTS !== '0';

/* ---------------------------------------------------------------- pages */

async function sitemapPaths() {
  const xml = await readFile(join(DIST, 'sitemap-0.xml'), 'utf8');
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .map((p) => (p === '' ? '/' : p));
  /* /thanks is not in the sitemap by design — it is a form destination, not
     a landing page — but it is a page a visitor sees, so it is audited. */
  return [...new Set([...paths, '/thanks'])].sort();
}

/* ------------------------------------------------------------ allowlists */

/* Prices that are deliberately NOT Brandure's and do not follow the switch. */
const FOREIGN_PRICE_PAGES = [
  /* Market rates and competitor ranges, quoted in the currency of the market
     the guide is about. Converting them would misreport what was surveyed. */
  { match: /^\/guides\//, why: 'market figures, quoted in the market currency' },
  { match: /^\/research\//, why: 'surveyed data: hotel rates and competitor pricing' },
  { match: /^\/aeo-agency-dubai$/, why: 'AED by default and AED-only offers, by design' },
];

/* Blocks that quote somebody else's figures, wherever they appear. A guide's
   own summary is market copy even when it is being listed on an index page —
   the UAE cost guide's "audits from about AED 3,500" is a surveyed market
   rate that happens to match Brandure's setup fee, and it must not be
   rewritten to follow the switch. Narrower than exempting /guides wholesale,
   which would stop checking Brandure's own prices on that page. */
const MARKET_COPY = ['.rcard__d', '.rcard__t', '.piece-list p', '.piece-list h2', '.piece-list h3'];

/* Sections that are two-column or card grids by intent, so their text is not
   a centred reading column. */
const NOT_A_READING_COLUMN = [
  '.price-grid', '.pkg', '.problem-grid', '.rlist', '.piece-list', '.grid',
  '.case-grid', '.metric-grid', '.svc-facts', '.ways', '.qa', '.faq-layout',
  '.tst__cols', '.stages__list', '.mth-stage', '.cmp', '.work-grid',
  '.pbx', '.plist', '.logos', '.hero-actions', '.center-row', '.footer',
];

/* Selection states that are SUPPOSED to carry the accent at rest. */
const REAL_SELECTION = ['.pcard', '.tile', '.cur__b', '.rotator__tab'];

/* --------------------------------------------------------------- helpers */

const CUR = {
  aed: { label: 'AED', symbols: ['AED'], others: ['£', '$'] },
  gbp: { label: '£', symbols: ['£'], others: ['AED', '$'] },
  usd: { label: '$', symbols: ['$'], others: ['AED', '£'] },
};

/* Brandure's own figures, in every currency. A price seen on a page in a
   currency other than the selected one is the bug; any other number is not
   this check's business. */
const BRANDURE_FIGURES = {
  aed: ['AED 6,500', 'AED 12,000', 'AED 3,500', 'AED 2,500', 'AED 19,000', 'AED 600'],
  gbp: ['£1,400', '£2,600', '£750', '£550', '£4,100', '£130'],
  usd: ['$1,800', '$3,300', '$950', '$700', '$5,200', '$165'],
};

const results = [];
let failures = 0;
function fail(page, view, cur, check, detail) {
  failures += 1;
  results.push({ page, view, cur, check, ok: false, detail });
  console.log(`FAIL  ${check.padEnd(22)} ${page} [${view}/${cur}]\n      ${detail}`);
}

/* ------------------------------------------------------------------ main */

const paths = ONLY || (await sitemapPaths());
if (SHOTS) {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
}

const browser = await chromium.launch();
const internalLinks = new Map();
const shots = [];

for (const view of ['desktop', 'mobile']) {
  const ctx = await browser.newContext(
    view === 'mobile'
      ? { ...devices['iPhone 13'] }
      : {
          viewport: { width: 1440, height: 900 },
          userAgent:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        },
  );
  /* The site takes a reduced, no-motion branch for automated agents, which
     would mean auditing a different page from the one a visitor gets. */
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });
  for (const h of ['**://*.google*.com/**', '**://*.posthog.com/**', '**://*.searchableanalytics.com/**'])
    await ctx.route(h, (r) => r.fulfill({ status: 200, body: '' }));

  for (const path of paths) {
    for (const cur of ['aed', 'gbp', 'usd']) {
      const page = await ctx.newPage();
      const errors = [];
      page.on('console', (m) => {
        if (m.type() === 'error') errors.push(m.text().slice(0, 160));
      });
      page.on('pageerror', (e) => errors.push(String(e).slice(0, 160)));

      /* The currency is set before the first paint, the way the edge function
         sets it, so the page is audited in the state a visitor gets rather
         than one clicked into afterwards. */
      await page.addInitScript((c) => {
        try {
          localStorage.setItem('brandure_cur', c);
        } catch {
          /* private window: the attribute below still carries it */
        }
        document.addEventListener('DOMContentLoaded', () => {
          document.documentElement.setAttribute('data-cur', c);
        });
      }, cur);

      let status = 0;
      try {
        const res = await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
        status = res ? res.status() : 0;
      } catch (e) {
        fail(path, view, cur, 'load', String(e).slice(0, 120));
        await page.close();
        continue;
      }

      /* 1 — status and console */
      if (status !== 200) fail(path, view, cur, 'http 200', `got ${status}`);
      const dismiss = page.locator('[data-consent="granted"]');
      if (await dismiss.isVisible().catch(() => false)) await dismiss.click().catch(() => {});
      await page.waitForTimeout(350);
      if (errors.length) fail(path, view, cur, 'console errors', errors.slice(0, 2).join(' | '));

      /* 2 — horizontal scroll */
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      if (overflow > 0) fail(path, view, cur, 'horizontal scroll', `${overflow}px wider than the viewport`);

      /* 3 — currency */
      const exempt = FOREIGN_PRICE_PAGES.find((r) => r.match.test(path));
      if (!exempt) {
        const wrong = await page.evaluate(
          ({ figures, quoted }) => {
            /* innerText, from the LIVE page, because that is the only reading
               that respects display:none — every page carries all three
               currencies in its markup and shows one, so textContent would
               report every page as broken. That also rules out reading a
               detached clone, where innerText quietly falls back to
               textContent. So: hide the quoted blocks, read, put them back. */
            const hidden = [...document.querySelectorAll(quoted.join(','))];
            const prev = hidden.map((n) => n.style.display);
            hidden.forEach((n) => (n.style.display = 'none'));
            const text = document.body.innerText;
            hidden.forEach((n, i) => (n.style.display = prev[i]));
            return figures.filter((f) => text.includes(f));
          },
          {
            figures: [...BRANDURE_FIGURES.aed, ...BRANDURE_FIGURES.gbp, ...BRANDURE_FIGURES.usd].filter(
              (f) => !BRANDURE_FIGURES[cur].includes(f),
            ),
            quoted: MARKET_COPY,
          },
        );
        if (wrong.length) fail(path, view, cur, 'wrong currency', `visible: ${wrong.join(', ')}`);
      }

      /* 5 — collect internal links (resolved once, after the sweep) */
      const links = await page.evaluate(() =>
        [...document.querySelectorAll('a[href]')]
          .map((a) => a.getAttribute('href'))
          .filter((h) => h && !/^(https?:|mailto:|tel:|#)/.test(h)),
      );
      /* Strip the fragment AND the query: the builder's CTA carries the whole
         selection in a query string, and /service?plan=Core… is still
         /service as far as "does this page exist" goes. */
      for (const l of links) internalLinks.set(l.split('#')[0].split('?')[0] || path, path);

      /* 6 — reading columns and section headings on the page axis */
      const offAxis = await page.evaluate((skip) => {
        const mid = (el) => {
          let x = 0;
          for (let n = el; n; n = n.offsetParent) x += n.offsetLeft;
          return x + el.offsetWidth / 2;
        };
        const axis = document.documentElement.clientWidth / 2;
        const out = [];
        const candidates = [
          ...document.querySelectorAll('.section-head h2'),
          ...document.querySelectorAll('.prose > p, .prose > h2, .prose > ul, .prose > ol'),
        ];
        for (const el of candidates) {
          if (!el.offsetWidth) continue;
          if (skip.some((s) => el.closest(s))) continue;
          const d = Math.round(mid(el) - axis);
          if (Math.abs(d) > 2) out.push(`${(el.textContent || '').trim().slice(0, 30)} → ${d}px`);
          if (out.length >= 3) break;
        }
        return out;
      }, NOT_A_READING_COLUMN);
      if (offAxis.length) fail(path, view, cur, 'off the page axis', offAxis.join(' | '));

      /* 7 — accent border at rest */
      const accented = await page.evaluate((selection) => {
        const accent = getComputedStyle(document.documentElement)
          .getPropertyValue('--accent')
          .trim();
        if (!accent) return [];
        const probe = document.createElement('span');
        probe.style.color = accent;
        document.body.appendChild(probe);
        const want = getComputedStyle(probe).color;
        probe.remove();
        const out = [];
        for (const el of document.querySelectorAll('body *')) {
          if (selection.some((s) => el.matches(s) || el.closest(s))) continue;
          const r = el.getBoundingClientRect();
          /* CARDS, NOT ORNAMENT. The thing being guarded against is a panel
             that looks chosen. A 3px accent rule down the side of a callout
             and an 18px accent-ringed timeline dot are typographic devices,
             not selection — so this wants a full border, on all four sides,
             around something big enough to be a card. */
          if (r.width < 160 || r.height < 80) continue;
          const cs = getComputedStyle(el);
          const sides = ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'];
          if (!sides.every((s) => parseFloat(cs[s]) >= 1)) continue;
          const colours = [cs.borderTopColor, cs.borderRightColor, cs.borderBottomColor, cs.borderLeftColor];
          if (colours.every((c) => c === want)) {
            out.push(`${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]} (${Math.round(r.width)}x${Math.round(r.height)})`);
          }
          if (out.length >= 3) break;
        }
        return out;
      }, REAL_SELECTION);
      if (accented.length) fail(path, view, cur, 'accent border at rest', accented.join(', '));

      /* 8 — sticky elements never cover text */
      const sticky = await page.evaluate(() =>
        [...document.querySelectorAll('body *')]
          .filter((el) => getComputedStyle(el).position === 'sticky')
          .map((el) => el.className || el.tagName)
          .slice(0, 4),
      );
      if (sticky.length) {
        const covered = await page.evaluate(async () => {
          const docH = document.body.scrollHeight;
          const bad = [];
          const targets = [...document.querySelectorAll('h1, h2, h3, p')].filter((e) => e.offsetWidth);
          for (let y = 0; y < docH; y += Math.max(240, Math.round(innerHeight * 0.6))) {
            window.scrollTo({ top: y, behavior: 'instant' });
            await new Promise((r) => setTimeout(r, 70));
            for (const t of targets) {
              const r = t.getBoundingClientRect();
              /* Only text that is meant to be readable right now: fully
                 inside the viewport, below the header's own band. */
              if (r.top < 90 || r.bottom > innerHeight - 10 || r.width < 40) continue;
              const el = document.elementFromPoint(r.left + Math.min(20, r.width / 2), r.top + r.height / 2);
              if (!el || t.contains(el) || el === t) continue;
              if (getComputedStyle(el).position === 'sticky' || el.closest('.mth-track, .faq-nav, .sticky-head')) {
                bad.push(`${(t.textContent || '').trim().slice(0, 28)} under ${el.className || el.tagName}`);
              }
              if (bad.length >= 2) return bad;
            }
          }
          return bad;
        });
        if (covered.length) fail(path, view, cur, 'sticky covers text', covered.join(' | '));
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      }

      /* 9 — stat numbers are not empty */
      const empties = await page.evaluate(() =>
        [...document.querySelectorAll('[data-count], .case__n, .metric__n, .stat__n')]
          .filter((el) => el.offsetWidth && !(el.textContent || '').trim().replace(/[%+·\s]/g, ''))
          .map((el) => el.className || el.tagName)
          .slice(0, 3),
      );
      if (empties.length) fail(path, view, cur, 'empty stat number', empties.join(', '));

      /* 11 — a row has as many cells as the table has headers.
         The engine matrix shipped with three headers and six cells per row,
         because the headers came from the engine list and the cells came
         from a positional array that nobody updated. Three cells had no
         header, "Named" sat over the wrong column and the score read out of
         six. Counting both sides is the cheap way to never ship that again.
         Covers <table> and anything using the ARIA table/grid roles, which
         is every tabular thing on this site. */
      const ragged = await page.evaluate(() => {
        const out = [];
        const label = (el, i) =>
          `${el.closest('[id]')?.id || el.tagName.toLowerCase()}#${i}`;

        [...document.querySelectorAll('table')].forEach((t, i) => {
          const head = t.querySelector('thead tr') || t.querySelector('tr');
          if (!head) return;
          const cols = head.querySelectorAll('th, td').length;
          const body = [...t.querySelectorAll('tbody tr')].length
            ? [...t.querySelectorAll('tbody tr')]
            : [...t.querySelectorAll('tr')].slice(1);
          body.forEach((r) => {
            /* colspan counts for what it spans, or a summary row reads as
               ragged when it is doing the right thing. */
            const n = [...r.querySelectorAll('th, td')].reduce(
              (a, c) => a + (parseInt(c.getAttribute('colspan') || '1', 10) || 1), 0);
            if (n !== cols) out.push(`${label(t, i)}: ${cols} headers vs ${n} cells — ${(r.textContent || '').trim().slice(0, 40)}`);
          });
        });

        [...document.querySelectorAll('[role="table"], [role="grid"]')].forEach((t, i) => {
          const rows = [...t.querySelectorAll('[role="row"]')];
          if (rows.length < 2) return;
          const cols = rows[0].querySelectorAll('[role="columnheader"], [role="cell"], [role="gridcell"]').length;
          rows.slice(1).forEach((r) => {
            const n = r.querySelectorAll('[role="columnheader"], [role="cell"], [role="gridcell"], [role="rowheader"]').length;
            if (n !== cols) out.push(`${label(t, i)} (aria): ${cols} headers vs ${n} cells`);
          });
        });
        return out.slice(0, 3);
      });
      if (ragged.length) fail(path, view, cur, 'row/header cell mismatch', ragged.join(' | '));

      /* 10 — screenshots, once per page per viewport (currency-independent) */
      if (SHOTS && cur === 'usd') {
        const name = `${path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '_')}-${view}.png`;
        await page.screenshot({ path: join(OUT, name), fullPage: true });
        shots.push(name);
      }

      if (!results.some((r) => r.page === path && r.view === view && r.cur === cur && !r.ok)) {
        results.push({ page: path, view, cur, ok: true });
      }
      await page.close();
    }
  }
  await ctx.close();
}

/* 5 — every internal link resolves (checked once against the built output) */
const built = new Set();
async function walk(dir, prefix = '') {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) await walk(join(dir, e.name), `${prefix}/${e.name}`);
    else if (e.name.endsWith('.html')) {
      built.add(`${prefix}/${e.name.replace(/\.html$/, '')}`.replace(/\/index$/, '') || '/');
    } else built.add(`${prefix}/${e.name}`);
  }
}
await walk(DIST);
for (const [href, from] of internalLinks) {
  const clean = href.replace(/\/$/, '') || '/';
  if (!built.has(clean) && !built.has(`${clean}/index`) && !built.has(href)) {
    fail(from, 'build', '-', 'dead internal link', href);
  }
}

/* 4 — whitespace and punctuation, over the whole build */
const { spawnSync } = await import('node:child_process');
const ws = spawnSync('node', [new URL('./check-whitespace.mjs', import.meta.url).pathname], {
  encoding: 'utf8',
});
if (ws.status !== 0) {
  fail('(build)', 'all', '-', 'whitespace/punctuation', (ws.stdout || '').trim().split('\n').slice(-6).join(' | '));
}

await browser.close();

/* ------------------------------------------------------------- summary */

const pages = [...new Set(results.map((r) => r.page))].sort();
const checked = results.length;
console.log(`\n${'PAGE'.padEnd(46)} ${'DESKTOP'.padEnd(9)} MOBILE`);
console.log('-'.repeat(68));
for (const p of pages) {
  const cell = (v) => {
    const rows = results.filter((r) => r.page === p && r.view === v);
    if (!rows.length) return '-';
    const bad = rows.filter((r) => !r.ok).length;
    return bad ? `${bad} FAIL` : 'ok';
  };
  console.log(`${p.padEnd(46)} ${cell('desktop').padEnd(9)} ${cell('mobile')}`);
}
console.log('-'.repeat(68));
console.log(
  `${pages.length} pages x 2 viewports x 3 currencies = ${checked} page-checks, ` +
    `${shots.length} screenshots in audit/`,
);
console.log(failures === 0 ? '\nPASS — whole site clean' : `\nFAIL — ${failures} problem(s)`);
process.exit(failures === 0 ? 0 : 1);
