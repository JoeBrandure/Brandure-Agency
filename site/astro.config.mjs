// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Slugs of research pieces marked `placeholder: true`, read from frontmatter
 * at config time. Driven by the flag rather than by the filename, so a real
 * piece is never excluded by what it happens to be called, and a placeholder
 * can never leak into the sitemap by being named something else.
 */
function placeholderSlugs() {
  const dir = './src/content/research';
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith('.md'))
      .filter((f) => /^---[\s\S]*?\bplaceholder:\s*true\b[\s\S]*?^---/m.test(readFileSync(`${dir}/${f}`, 'utf8')))
      .map((f) => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}
const excluded = new Set(placeholderSlugs().map((s) => `/research/${s}`));

const SITE_URL = 'https://brandure.io';

/**
 * Under `trailingSlash: 'never'` the sitemap integration emits the root as
 * `https://brandure.io`, while the homepage canonical resolves to
 * `https://brandure.io/` — the form `new URL()` produces and the form crawlers
 * normalise to. The two are the same URL per RFC 3986, so this is cosmetic
 * rather than a duplicate-content problem, but "the canonical matches the
 * sitemap entry byte for byte" is a rule worth being able to check mechanically,
 * and one entry that almost matches costs more to explain than to fix.
 *
 * The integration's own `serialize` hook cannot do it: it receives the root as
 * `https://brandure.io/` and strips the trailing slash afterwards. So this
 * rewrites the emitted file instead, and only the root entry.
 */
function rootSlashInSitemap() {
  return {
    name: 'brandure-root-slash-in-sitemap',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const file = new URL('sitemap-0.xml', dir);
        try {
          const xml = readFileSync(file, 'utf8');
          const fixed = xml.replace(`<loc>${SITE_URL}</loc>`, `<loc>${SITE_URL}/</loc>`);
          if (fixed !== xml) writeFileSync(file, fixed);
        } catch {
          /* No sitemap emitted (e.g. a partial build). Nothing to normalise. */
        }
      },
    },
  };
}

/**
 * Add rel="noopener" to external links in the BUILT HTML.
 *
 * Done here rather than as a rehype plugin because Astro 7's default Markdown
 * processor does not take them — wiring them back up means installing
 * @astrojs/markdown-remark and switching the whole site to the unified
 * pipeline, which would re-render every research page to add one attribute.
 *
 * NO nofollow. The guides cite other agencies' pricing pages and third-party
 * reviews, and those citations are the point; a source worth citing is worth
 * linking properly. noopener only closes the window.opener hole and carries no
 * ranking signal.
 *
 * Existing rel values are preserved, not replaced — the footer's rel="me" on
 * the LinkedIn link has to survive.
 */
function externalLinkRel() {
  const EXT = /<a\s+([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/gi;
  return {
    name: 'brandure-external-link-rel',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const root = fileURLToPath(dir);
        const walk = (d) => {
          for (const e of readdirSync(d, { withFileTypes: true })) {
            const full = join(d, e.name);
            if (e.isDirectory()) walk(full);
            else if (e.name.endsWith('.html')) {
              const html = readFileSync(full, 'utf8');
              const out = html.replace(EXT, (m, pre, href, post) => {
                if (href.startsWith(SITE_URL)) return m;
                const attrs = pre + post;
                const existing = /rel="([^"]*)"/i.exec(attrs);
                const rel = new Set((existing?.[1] ?? '').split(/\s+/).filter(Boolean));
                if (rel.has('noopener')) return m;
                rel.add('noopener');
                const value = [...rel].join(' ');
                return existing
                  ? m.replace(/rel="[^"]*"/i, `rel="${value}"`)
                  : `<a ${pre}href="${href}"${post} rel="${value}">`;
              });
              if (out !== html) writeFileSync(full, out);
            }
          }
        };
        walk(root);
      },
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => {
        const p = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (p.startsWith('/og/') || p === '/404') return false;
        // Case studies are sample scaffolding and carry noindex until real.
        if (p === '/work' || p.startsWith('/work/')) return false;
        // Post-submission pages. They carry noindex, so listing them in the
        // sitemap would ask a crawler to fetch a page we then tell it to drop.
        if (p === '/thanks' || p === '/thanks-call') return false;
        return !excluded.has(p);
      },
    }),
    rootSlashInSitemap(),
    externalLinkRel(),
  ],
});
