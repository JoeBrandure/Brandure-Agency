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
];

const PAPER = '#FAF7F2';
const INK = '#1A1613';
const MUTED = '#5F574E';
const ACCENT = '#7A2E52';
const RULE = '#CFC4B4';

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
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>
  <text x="80" y="112" font-family="IBM Plex Mono" font-size="24" fill="${ACCENT}" letter-spacing="1.5">${escape(kicker)}</text>
  ${lines
    .map(
      (l, i) =>
        `<text x="80" y="${startY + i * size * 1.16}" font-family="Inter" font-size="${size}" font-weight="600" fill="${INK}" letter-spacing="-1.4">${escape(l)}</text>`,
    )
    .join('\n  ')}
  <line x1="80" y1="524" x2="1120" y2="524" stroke="${RULE}" stroke-width="2"/>
  <text x="80" y="572" font-family="Inter" font-size="27" font-weight="600" fill="${INK}" letter-spacing="3.6">BRANDURE</text>
  <text x="1120" y="572" text-anchor="end" font-family="IBM Plex Mono" font-size="23" fill="${MUTED}">Answer engine optimisation</text>
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
