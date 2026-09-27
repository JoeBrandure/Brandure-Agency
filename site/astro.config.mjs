// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

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
  ],
});
