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
 * `tone` is how the mark is treated on the light strip:
 *   silhouette — flattened to a single dark shape with brightness(0), so a
 *                cream wordmark, a white knockout and a full-colour lockup
 *                all land at the same weight;
 *   asis       — left alone. Growthmind's mark sits on an opaque #191e19
 *                tile, and flattening that produces a solid black square. It
 *                renders as the dark icon tile it was drawn as.
 *
 * Colour versions of these marks appear in the hero case cards instead, where
 * each sits on its own tile.
 *
 * The multipliers below are set from what the marks actually measured on the
 * rendered band, not from their file dimensions — several sit on canvases
 * much larger than the artwork, so aspect ratio alone predicts the wrong
 * size. Lurio at 1.0 was roughly twice the visual weight of everything else.
 */
export const BRANDS = [
  /* 1140×470 wordmark, cream #fff7ed on transparent. Tight crop, so it needs
     the largest reduction in the set. */
  { slug: 'lurio', w: 1140, h: 470, name: 'Lurio', optical: 0.62, tone: 'silhouette', source: 'https://lurio.ai/logo-dark.svg' },
  /* 96×96 icon mark on an opaque #191e19 tile. The only square in the set. */
  { slug: 'growthmind', w: 96, h: 96, name: 'Growthmind', optical: 0.95, tone: 'asis', source: 'https://growthmind.ai/icon.svg' },
  /* 250×100 colour wordmark with a strapline, on transparent. */
  { slug: 'fresh', w: 250, h: 100, name: 'Fresh', optical: 1.15, tone: 'silhouette', source: 'https://www.trainfresh.com/lovable-uploads/fresh-gym-main-logo.png' },
  /* 3840×2160 canvas with the lockup centred inside it — roughly half the
     frame is padding, hence the high multiplier. */
  { slug: 'viveonix', w: 3840, h: 2160, name: 'Viveonix', optical: 1.5, tone: 'silhouette', source: 'https://www.viveonix.com/' },
  /* 600×296 stacked lockup: icon, name, strapline. Height-normalising a
     three-line lockup makes its type small, so it runs above 1. */
  { slug: 'littlelockets', w: 600, h: 296, name: 'Little Lockets London', optical: 1.25, tone: 'silhouette', source: 'https://www.littlelocketslondon.com/' },
] as const;
