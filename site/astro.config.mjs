// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

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

export default defineConfig({
  site: 'https://brandure.io',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => {
        const p = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (p.startsWith('/og/') || p === '/404') return false;
        return !excluded.has(p);
      },
    }),
  ],
});
