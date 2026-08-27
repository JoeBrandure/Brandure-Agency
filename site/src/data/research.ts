/**
 * Content for /research.
 *
 * WHAT THIS PAGE IS SAYING, since it was the question asked of it: no research
 * is published yet, and a page that pretends otherwise would undo the one
 * thing the agency sells. So the page argues the programme instead of listing
 * articles — here is how a scan is run, here is what disqualifies a result,
 * and here is a finding of our own that did not survive its re-run.
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
    t: 'Freeze the prompt set',
    d: 'The questions are written down, agreed, and never edited once a run has been taken against them.',
    wrong: 'Edit one prompt and every comparison built on the set is silently invalid. Nothing errors, the numbers still look like numbers.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'Clean the session',
    d: 'Logged out, no history, no personalisation, no prior turns in the thread. Recorded per engine, not assumed.',
    wrong: 'A signed-in profile returns an answer built partly from who is asking. It reads exactly like a category finding and is not one.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'Run it more than once',
    d: 'Every published cell rests on repeated runs, and the count is printed beside the result.',
    wrong: 'A single run cannot tell a real difference between engines from ordinary run-to-run variance. Most published AEO numbers are single runs.',
  },
  {
    n: '04',
    a: 'cobalt',
    t: 'Code every cell the same way',
    d: 'Named and cited, named without a citation, or absent. Three states, applied identically across all five engines.',
    wrong: 'A blended visibility score hides which engine moved. The engines disagree with each other more than they agree.',
  },
  {
    n: '05',
    a: 'deep',
    t: 'Record what the answer was built from',
    d: 'The source behind each mention is logged — the directory, the trade title, the competitor page, the brand’s own site.',
    wrong: 'Without the source there is no route to a fix. Knowing you are absent is not the same as knowing why.',
  },
] as const;

/** What disqualifies a result from being published. */
export const REFUSALS = [
  {
    n: '01',
    a: 'cobalt',
    t: 'A single run, presented as a finding',
    p: 'One run per cell cannot separate a real difference between engines from ordinary variance. It is the most common way an AEO number is produced and the least defensible.',
    e: 'Our own 13 August Dubai scan is n=1 across all 28 cells. That is why none of it is published as a finding.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'A contaminated session',
    p: 'An answer served to a signed-in profile is partly a description of that profile. It is indistinguishable, on the page, from a description of the category.',
    e: 'Half of that same scan — 14 of 28 cells, the Gemini and Google Search columns — was contaminated by a signed-in profile. We re-ran them clean on 17 August rather than publishing.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'A difference we cannot attribute',
    p: 'When two runs differ, the difference has to be attributable to something. Where it cannot be, the honest output is the question, not the number.',
    e: 'Between the two runs the signed-out Gemini served a different model tier. Personalisation removed, a platform change, a model difference and plain variance are all consistent with what we saw, and n=1 separates none of them.',
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
    claim: 'Four surfaces, four disjoint lists. No brand appears on more than one.',
    note: 'Headline finding of the scan. Half the cells behind it were served to a signed-in profile.',
  },
  after: {
    date: '17 August 2026',
    claim: 'Consensus is low, not absent. Three brands appear on two surfaces each.',
    note: 'Clean sessions, same prompt set. Materially weaker than the claim it replaced — and still n=1.',
  },
  held: 'The mechanic underneath held. Answers in this market are grounded heavily on brands’ own pages and self-published listicles rather than on independent sources — visible in both runs, and the finding most exposed to the contamination.',
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
    'One category lost its AI Overview while four gained one, which makes a single clean explanation unlikely. n=1 on both runs cannot separate a platform change from variance.',
} as const;
