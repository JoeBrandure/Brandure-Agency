/**
 * Logo strip entries.
 *
 * `slug` is the filename to look for in public/logos/ — any extension.
 * Drop `lurio.svg` in and it replaces the placeholder on the next build.
 *
 * `optical` scales each mark so they read at the same visual weight. A wide
 * wordmark needs less height than a square icon to feel equal, so this is a
 * per-brand multiplier rather than a fixed box.
 *
 * `source` records where the real asset should come from. None could be
 * fetched during the build — the sandbox proxy denies those hosts — so all
 * five currently render as greyscale wordmark placeholders.
 */
export const BRANDS = [
  { slug: 'lurio',        name: 'Lurio',                  optical: 1,    source: 'https://lurio.ai/logo-dark.svg' },
  { slug: 'growthmind',   name: 'Growthmind',             optical: 0.9,  source: 'https://growthmind.ai/icon.svg' },
  { slug: 'fresh',        name: 'Fresh',                  optical: 1.05, source: 'https://www.trainfresh.com/lovable-uploads/fresh-gym-main-logo.png' },
  { slug: 'viveonix',     name: 'Viveonix',               optical: 0.95, source: 'https://www.viveonix.com/ (client-rendered — asset path in JS bundle)' },
  { slug: 'littlelockets', name: 'Little Lockets London', optical: 0.85, source: 'https://www.littlelocketslondon.com/ (client-rendered)' },
] as const;
