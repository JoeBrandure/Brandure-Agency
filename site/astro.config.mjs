// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brandure.io',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Post-submission page — no reason for it to be indexed.
      filter: (page) => !page.includes('/thanks'),
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
