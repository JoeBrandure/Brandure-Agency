/**
 * Content that USED TO DRIVE /research. Nothing here is rendered any more.
 *
 * As of 2026-08-29 /research is an index of published pieces and nothing else.
 * The method spine, the publication refusals and the withdrawn Dubai finding
 * were all cut from it on instruction: they put the substance in the section
 * headings, so the page argued a case instead of listing work, and it gave
 * away a finding before that finding had a piece of its own.
 *
 * KEPT, NOT DELETED, because it is real and sourced. The withdrawn finding in
 * particular is the strongest thing here and belongs in
 * src/content/research/ as a piece in its own right — a scan we published, a
 * re-run that contradicted half of it, and what survived. Writing that up is
 * the obvious first real entry on the index.
 *
 * Everything below is drawn from the repo's own scan record:
 *   research/vertical-sprint/scans/2026-08-13-dubai/scan.md
 *   research/vertical-sprint/scans/2026-08-17-dubai-rerun/scan.md and diff.md
 *
 * Nothing here is a finding about a client, and no figure is invented. Where a
 * claim cannot be separated from its confounds, the confound is stated on the
 * page rather than in a footnote.
 */

/** How a scan is run. Each step exists because of a specific failure mode. */
export const SCAN_STEPS = [
  {
    n: '01',
    a: 'cobalt',
    t: 'Agree the questions, then leave them alone',
    d: 'We write the questions down, agree them with you, and never change them once we have measured against them.',
    wrong: 'Change one question and every before-and-after built on that set stops meaning anything. Nothing breaks, no warning appears, the numbers still look like numbers.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'Start from a clean session',
    d: 'Signed out, no browsing history, no personalisation, nothing earlier in the conversation. We record the state for each engine rather than assuming it.',
    wrong: 'Stay signed in and the answer is partly about the person asking. It looks exactly like a finding about your market, and it isn’t one.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'Run it more than once',
    d: 'Every result we publish comes from several runs, and the number of runs is printed next to it.',
    wrong: 'Ask once and you can’t tell a real difference from ordinary randomness. Most AEO figures you’ll read are based on a single run.',
  },
  {
    n: '04',
    a: 'cobalt',
    t: 'Mark every answer the same way',
    d: 'Named with a source, named without one, or not there at all. Three options, applied the same way on all five engines.',
    wrong: 'An averaged score hides which engine actually moved, and these five disagree with each other far more than they agree.',
  },
  {
    n: '05',
    a: 'deep',
    t: 'Record where the answer came from',
    d: 'We log where each mention came from. The directory, the trade title, the competitor’s page, the brand’s own site.',
    wrong: 'Without that, there’s nothing to act on. Knowing you’re missing doesn’t tell you where to go and get mentioned.',
  },
] as const;

/** What disqualifies a result from being published. */
export const REFUSALS = [
  {
    n: '01',
    a: 'cobalt',
    t: 'Anything based on a single run',
    p: 'Ask an AI something once and you can’t tell a genuine difference from ordinary randomness. It’s the most common way an AEO figure gets produced and the hardest one to defend.',
    e: 'Our own Dubai scan on 13 August was a single run on all 28 results. That’s why none of it appears here as a finding.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'Anything measured while signed in',
    p: 'An answer given to someone signed in is partly a description of that person. On the page it looks identical to a description of the market.',
    e: 'Half of that same scan was run on a signed-in profile by mistake. 14 of 28 results, the Gemini and Google Search columns. We re-ran them properly on 17 August instead of publishing them.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'Any change we can’t explain',
    p: 'If two runs come back different, we need to be able to say what changed. When we can’t, what we have is a question rather than a finding.',
    e: 'Between our two runs, Gemini served a different model. Removing personalisation, a change at Google, a different model and plain randomness would all produce what we saw, and a single run can’t tell them apart.',
  },
] as const;

/**
 * Set to false to remove the withdrawn-finding section entirely. It is the
 * strongest thing on the page and it is also the most exposed — it publishes
 * detail from an internal scan marked "not client-safe", which means the
 * findings are not safe to state as fact, which is precisely what this section
 * refuses to do with them.
 */
export const SHOW_WITHDRAWN = true;

/**
 * A finding of our own that did not survive its re-run. The 13 August headline
 * for aesthetic clinics was "four surfaces, four disjoint lists, no brand on
 * more than one". The clean 17 August re-run contradicted it.
 */
export const WITHDRAWN = {
  category: 'Aesthetic clinics, Dubai',
  before: {
    date: '13 August 2026',
    claim: 'Four engines, four completely different lists. No brand appeared on more than one.',
    note: 'The headline finding of that scan. Half the results behind it came from a signed-in profile.',
  },
  after: {
    date: '17 August 2026',
    claim: 'There’s some overlap after all. Three brands appeared on two engines each.',
    note: 'Clean sessions, same questions. A much weaker claim than the one it replaced, and still only one run.',
  },
  held: 'The underlying point survived. Answers in this market lean heavily on brands’ own pages and self-published “best of” lists, not on independent sources. That showed up in both runs, and it was the finding most at risk from the contamination.',
} as const;

/**
 * AI Overview coverage across the seven categories scanned, before and after
 * decontamination. Seven categories, in the order scanned.
 */
export const AIO_COVERAGE = {
  /* The seven scanned, in the order they were scanned. */
  categories: ['Law firms', 'B2B SaaS', 'Aesthetic clinics', 'Boutique hotels', 'Industrial manufacturers', 'Universities', 'Car dealerships'],
  before: [false, false, false, true, false, false, false],
  after: [true, true, false, false, true, true, false],
  caveat:
    'One category lost its AI Overview while four gained one, which makes any single explanation hard to believe. Both runs were single runs, so we can’t tell a change at Google from ordinary randomness.',
} as const;
