/**
 * The order guides are listed in, and the one-line summaries llms.txt uses.
 *
 * /guides and llms.txt both read this, so the two cannot disagree about which
 * guides exist or what order they come in. /guides throws if a guide file is
 * missing from this list rather than quietly leaving it off the index.
 *
 * GROUPS, added 2026-10-31 with the four market guides. The first three are
 * general and apply to any market; the rest are priced and sourced per market
 * and are useless to a reader in the other one. Grouping them is the honest
 * presentation: a UK buyer should not have to work out that an AED price table
 * is not for them.
 */
export const GUIDE_GROUPS = [
  {
    key: 'general',
    heading: 'Start here',
    blurb: 'How AI search works, and what to do about it, wherever you are.',
    slugs: [
      'answer-engine-optimisation-uk-uae-guide',
      'how-to-choose-an-aeo-agency',
      'check-whether-chatgpt-recommends-your-business',
    ],
  },
  {
    key: 'uae',
    heading: 'UAE',
    blurb: 'Prices and agencies in Dubai and the wider UAE, checked October 2026.',
    slugs: ['aeo-cost-uae', 'aeo-agencies-uae'],
  },
  {
    key: 'uk',
    heading: 'UK',
    blurb: 'Prices and agencies serving UK businesses, checked October 2026.',
    slugs: ['aeo-cost-uk', 'aeo-agencies-uk'],
  },
] as const;

/** Flattened, in display order. The index and llms.txt both read this. */
export const GUIDE_ORDER = GUIDE_GROUPS.flatMap((g) => g.slugs) as readonly string[];

/** Short enough for a list; the full description is in the front matter. */
export const GUIDE_BLURBS: Record<string, string> = {
  'answer-engine-optimisation-uk-uae-guide':
    'what AEO is, how each engine decides who to name, and the five levers that move it.',
  'how-to-choose-an-aeo-agency':
    'eight checks before hiring, from pricing and exit terms to per-engine reporting and the red flags.',
  'check-whether-chatgpt-recommends-your-business':
    'the manual method: logged out, location set, three runs per prompt, and what to record.',
  'aeo-cost-uae':
    'what AEO costs in Dubai and the UAE in 2026, the published prices, and what each band buys.',
  'aeo-agencies-uae':
    'AEO and GEO agencies serving the UAE compared on offering, published price and who they suit.',
  'aeo-cost-uk':
    'what AEO costs in the UK in 2026, the published prices, and what each band buys.',
  'aeo-agencies-uk':
    'AEO and GEO agencies serving the UK compared on offering, published price and who they suit.',
};
