/**
 * The five answer engines, with a mark for each.
 *
 * HOW THE MARKS WORK. `EngineMark.astro` looks for `public/engines/<slug>.svg`
 * at build time and uses it if present. Where no file exists it draws the
 * inline fallback below.
 *
 * THE FALLBACKS ARE APPROXIMATIONS, NOT OFFICIAL ARTWORK. None of these
 * vendors' assets could be fetched from this build environment — every host
 * is blocked by the proxy — so they are drawn from the shapes the marks are
 * known to take. The Gemini four-point star and the Google G are close; the
 * OpenAI knot and the Perplexity glyph are simplified.
 *
 * **Drop the official SVG into `public/engines/` named by slug and it replaces
 * the fallback on the next build, with no code change.** That is the intended
 * end state — a subtly wrong competitor logo on a professional site is worse
 * than no logo, so this should not ship as-is if the real files are available.
 *
 * `colour` is each engine's own brand colour, used for the mark and for a
 * tint behind it. These are stated rather than sampled and are worth checking
 * against the vendors' brand pages.
 */
export interface Engine {
  slug: string;
  name: string;
  /** Short form for narrow columns. */
  short: string;
  colour: string;
  /** Colour to draw the mark in when it sits on the tinted chip. */
  ink: string;
}

export const ENGINE_MARKS: Engine[] = [
  { slug: 'chatgpt',    name: 'ChatGPT',            short: 'ChatGPT',    colour: '#10A37F', ink: '#0B7A5E' },
  { slug: 'claude',     name: 'Claude',             short: 'Claude',     colour: '#D97757', ink: '#B4522F' },
  { slug: 'perplexity', name: 'Perplexity',         short: 'Perplexity', colour: '#20808D', ink: '#166069' },
  { slug: 'gemini',     name: 'Gemini',             short: 'Gemini',     colour: '#4285F4', ink: '#1A62D4' },
  { slug: 'google',     name: 'Google AI Overview', short: 'Google AIO', colour: '#EA4335', ink: '#B5271B' },
];
