/**
 * Logo strip entries. All five files are now present in public/logos/.
 *
 * `slug` is the filename to look for in public/logos/ — any extension.
 *
 * `optical` scales each mark so they read at the same visual weight. A wide
 * wordmark needs less height than a square icon to feel equal, so this is a
 * per-brand multiplier rather than a fixed box. Set from the real artwork's
 * aspect ratio, not guessed.
 *
 * `w`/`h` are the file's natural pixel dimensions. They go on the <img> so the
 * browser reserves the right box before the image loads; the CSS height and
 * `width:auto` then take over. The previous fixed `width="200" height="48"`
 * matched none of the five and reserved the wrong shape for all of them.
 *
 * `tone` is how the mark is treated on the dark band:
 *   knockout — colour artwork on transparent, flattened to white;
 *   asis     — artwork already drawn light, desaturated only;
 *   invert   — artwork with an opaque dark tile behind it, flipped so the
 *              tile goes light and the mark inside goes dark.
 *
 * The strip sits on the inverted band for exactly this reason: Lurio's fill
 * is #fff7ed and Viveonix's wordmark is a white knockout with a black
 * outline. On the light surface both are close to invisible. Two of five
 * assets being dark-background artwork settles which surface the strip needs.
 *
 * The multipliers below are set from what the marks actually measured on the
 * rendered band, not from their file dimensions — several sit on canvases
 * much larger than the artwork, so aspect ratio alone predicts the wrong
 * size. Lurio at 1.0 was roughly twice the visual weight of everything else.
 */
export const BRANDS = [
  /* 1140×470 wordmark, cream #fff7ed on transparent. Tight crop, so it needs
     the largest reduction in the set. */
  { slug: 'lurio', w: 1140, h: 470, name: 'Lurio', optical: 0.62, tone: 'asis', source: 'https://lurio.ai/logo-dark.svg' },
  /* 96×96 icon mark on an opaque #191e19 tile. The only square in the set. */
  { slug: 'growthmind', w: 96, h: 96, name: 'Growthmind', optical: 0.95, tone: 'invert', source: 'https://growthmind.ai/icon.svg' },
  /* 250×100 colour wordmark with a strapline, on transparent. */
  { slug: 'fresh', w: 250, h: 100, name: 'Fresh', optical: 1.15, tone: 'knockout', source: 'https://www.trainfresh.com/lovable-uploads/fresh-gym-main-logo.png' },
  /* 3840×2160 canvas with the lockup centred inside it — roughly half the
     frame is padding, hence the high multiplier. */
  { slug: 'viveonix', w: 3840, h: 2160, name: 'Viveonix', optical: 1.5, tone: 'asis', source: 'https://www.viveonix.com/' },
  /* 600×296 stacked lockup: icon, name, strapline. Height-normalising a
     three-line lockup makes its type small, so it runs above 1. */
  { slug: 'littlelockets', w: 600, h: 296, name: 'Little Lockets London', optical: 1.25, tone: 'knockout', source: 'https://www.littlelocketslondon.com/' },
] as const;
