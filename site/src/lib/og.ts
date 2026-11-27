import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import path from 'node:path';

/**
 * Open Graph images, rendered at build time from an SVG template using the
 * site's own typefaces and palette. No headless browser, no runtime service —
 * resvg rasterises the SVG with the same TTFs the site self-hosts.
 */

const FONT_DIR = path.resolve('./src/assets/fonts');
const FONTS = [
  path.join(FONT_DIR, 'Inter-Regular.ttf'),
  path.join(FONT_DIR, 'Inter-SemiBold.ttf'),
  path.join(FONT_DIR, 'IBMPlexMono-Regular.ttf'),
  /* Manrope 700 is the kit's display face and the one the site sets headings
     in. The file was already here and simply never loaded, so the cards set
     their headline in Inter SemiBold — the body face — while every heading on
     the site itself was Manrope. */
  path.join(FONT_DIR, 'Manrope-Bold.ttf'),
];

const PAPER = '#FAF7F2';
const INK = '#1A1613';
const MUTED = '#5F574E';
/* Cobalt, from the brand kit. This was #7A2E52, a maroon that appears nowhere
   in the kit and was the last unbranded colour on the site. */
const ACCENT = '#2F5BFF';
const RULE = '#CFC4B4';

/* The kit's brand gradient, which it permits for brand accents. 112deg in CSS
   is a direction vector of (sin112, -cos112) = (0.927, 0.375) in screen
   coordinates, so the gradient line is set in user space at that slope rather
   than left to objectBoundingBox, which would shear it on a 1200x10 bar. */
const GRADIENT_ID = 'brandure-bar';
const GRADIENT_DEF = `<linearGradient id="${GRADIENT_ID}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="485">
    <stop offset="0" stop-color="#2140B8"/>
    <stop offset="0.45" stop-color="#2F5BFF"/>
    <stop offset="1" stop-color="#7C5AE8"/>
  </linearGradient>`;

/**
 * THE WORDMARK ON A SHARE CARD, FROM THE BRAND KIT.
 *
 * This used to be <text>BRANDURE</text> in letter-spaced Inter — the old text
 * wordmark, which the kit replaces. The card background is PAPER, a light
 * surface, so the kit's rule is the primary logo: gradient b, ink letters.
 * The reversed logo is for navy and no card here is navy, so it is unused.
 *
 * Read from public/brand/ rather than re-pointed at the kit, so the bytes the
 * cards are drawn from are the bytes the site serves. The outer <svg> wrapper
 * and <title> come off and the rest goes inside a <g transform>, because resvg
 * rasterises a transformed group predictably; the gradient id inside is the
 * kit's own and does not collide with anything in this template.
 */
const LOGO_SRC = path.resolve('./public/brand/brandure-logo-primary.svg');
const LOGO_RATIO = 425.09 / 73.5;

function logoMarkup(x: number, baseline: number, height: number): string {
  const raw = readFileSync(LOGO_SRC, 'utf8');
  const inner = raw
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<title>[\s\S]*?<\/title>/, '');
  const scale = height / 73.5;
  /* baseline is the text baseline the old wordmark sat on, so the logo's
     optical centre lands where the letters did. */
  const y = baseline - height * 0.78;
  return `<g transform="translate(${x} ${y}) scale(${scale.toFixed(5)})">${inner}</g>`;
}

/** Width the logo occupies, for anything that needs to clear it. */
export const logoWidth = (height: number) => height * LOGO_RATIO;

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Greedy wrap by character budget — adequate for a fixed-width canvas. */
function wrap(text: string, perLine: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > perLine && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) break;
    } else {
      line = next;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[,.;:]?$/, '')}…`;
  }
  return lines;
}

export interface OgOptions {
  title: string;
  /** Small mono line above the title — section, date, category. */
  kicker?: string;
}

export function renderOg({ title, kicker = 'brandure.io' }: OgOptions): Buffer {
  const size = title.length > 55 ? 62 : 74;
  const lines = wrap(title, title.length > 55 ? 30 : 26, 4);
  const blockHeight = lines.length * (size * 1.16);
  const startY = 300 - blockHeight / 2 + size * 0.9;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>${GRADIENT_DEF}</defs>
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="url(#${GRADIENT_ID})"/>
  <text x="80" y="112" font-family="IBM Plex Mono" font-size="24" fill="${ACCENT}" letter-spacing="1.5">${escape(kicker)}</text>
  ${lines
    .map(
      (l, i) =>
        `<text x="80" y="${startY + i * size * 1.16}" font-family="Manrope" font-size="${size}" font-weight="700" fill="${INK}" letter-spacing="-1.4">${escape(l)}</text>`,
    )
    .join('\n  ')}
  <line x1="80" y1="524" x2="1120" y2="524" stroke="${RULE}" stroke-width="2"/>
  ${logoMarkup(80, 572, 34)}
  <text x="1120" y="572" text-anchor="end" font-family="IBM Plex Mono" font-size="23" fill="${MUTED}">AI search, SEO &amp; web design</text>
</svg>`;

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Inter' },
  });
  return resvg.render().asPng();
}

/** Cheap sanity check that the fonts are present at build time. */
export function fontsAvailable(): boolean {
  try {
    FONTS.forEach((f) => readFileSync(f));
    return true;
  } catch {
    return false;
  }
}
