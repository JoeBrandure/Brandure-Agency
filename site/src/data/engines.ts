/**
 * The six answer engines, with a mark for each.
 *
 * HOW THE MARKS WORK. `EngineMark.astro` looks for `public/engines/<slug>.svg`
 * at build time and uses it if present. Where no file exists it draws the
 * inline fallback below.
 *
 * ALL SIX OFFICIAL MARKS ARE NOW IN `public/engines/`, so the fallbacks
 * below no longer render. They are kept because the lookup is a file lookup:
 * delete or rename a file and the site draws a rough shape rather than a
 * broken image.
 *
 * The direct vendor hosts are blocked by this environment's network policy.
 * The files came instead from `@lobehub/icons-static-svg` (MIT, v1.94.0),
 * which is reachable because the npm registry is on the proxy's allowlist —
 * `openai.svg`, `claude-color.svg`, `perplexity-color.svg`, `gemini-color.svg`,
 * `google-color.svg` and `copilot-color.svg`, copied under slug names with
 * their `<title>` stripped and otherwise untouched. See
 * `public/engines/README.md`.
 *
 * `colour` tints the chip behind each mark and must track what the mark
 * actually uses, or chip and logo disagree. Sampled from the files, not
 * assumed: Claude #D97757, Perplexity #22B8CD, Gemini #3186FF. ChatGPT's mark
 * is monochrome and inherits `ink`; the green is OpenAI's own and is used for
 * the chip only. Google's mark is four-colour, so the chip takes its red, and
 * Copilot's is a full-spectrum gradient, so the chip takes its identity blue.
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
  { slug: 'perplexity', name: 'Perplexity',         short: 'Perplexity', colour: '#22B8CD', ink: '#166069' },
  { slug: 'gemini',     name: 'Gemini',             short: 'Gemini',     colour: '#3186FF', ink: '#1A62D4' },
  { slug: 'google',     name: 'Google AI Overview', short: 'Google AIO', colour: '#EA4335', ink: '#B5271B' },
  { slug: 'copilot',    name: 'Copilot',            short: 'Copilot',    colour: '#0D91E1', ink: '#075E96' },
];
