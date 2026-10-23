/**
 * The order guides are listed in, and the one-line summaries llms.txt uses.
 *
 * All three published on the same day, so a date sort would be arbitrary.
 * The order below is the reader's path: what AEO is, then what to ask an
 * agency, then how to check for yourself.
 *
 * /guides and llms.txt both read this, so the two cannot disagree about which
 * guides exist or what order they come in. /guides throws if a file is missing
 * from this list rather than quietly leaving it off the index.
 */
export const GUIDE_ORDER = [
  'answer-engine-optimisation-uk-uae-guide',
  'how-to-choose-an-aeo-agency',
  'check-whether-chatgpt-recommends-your-business',
] as const;

/** Short enough for a list; the full meta description is in the front matter. */
export const GUIDE_BLURBS: Record<(typeof GUIDE_ORDER)[number], string> = {
  'answer-engine-optimisation-uk-uae-guide':
    'what AEO is, how each engine decides who to name, and the five levers that move it.',
  'how-to-choose-an-aeo-agency':
    'eight checks before hiring, from pricing and exit terms to per-engine reporting and the red flags.',
  'check-whether-chatgpt-recommends-your-business':
    'the manual method: logged out, location set, three runs per prompt, and what to record.',
};
