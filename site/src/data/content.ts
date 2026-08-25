/**
 * Shared page content. Objection-handling copy lives here so the visible
 * accordion and the FAQPage structured data read from one source rather than
 * duplicating each other.
 */
export const ENGINES = ['ChatGPT', 'Perplexity', 'Gemini', 'Google AI Overview'] as const;

export const FAQS = [
  {
    q: 'How is this different from SEO?',
    a: 'Search returns a list and lets you choose. An answer engine returns a conclusion and has already chosen. Ranking third on a page still gets you seen; coming third in a model’s judgement usually means not being named at all. The levers differ too — whether a model can resolve who you are, and which third-party sources it grounds on when it answers.',
  },
  {
    q: 'Which engines do you measure?',
    a: 'ChatGPT, Perplexity, Gemini and Google AI Overviews, each reported separately. They disagree with each other more than most people expect, so a single blended score hides the thing you need to know.',
  },
  {
    q: 'Can you guarantee we appear in AI answers?',
    a: 'No, and neither can anyone else. Answer engines change their grounding behaviour without notice. What we can do is measure the position you hold now, act on the causes we can influence, and measure again against a control set so you can see what the work actually moved.',
  },
  {
    q: 'What if our category is already locked up?',
    a: 'Then we say so and decline the work. Some categories are settled on two incumbents with no visible route in. A measurement that only ever produces a reason to hire us is not a measurement, and we would rather lose the engagement than sell against our own data.',
  },
  {
    q: 'How long before anything moves?',
    a: 'Entity and structured-data corrections can register within weeks. Earned placement is slower and depends on third parties, so it is measured in months. We re-measure on a fixed schedule against a control set rather than claiming a timeline we cannot hold.',
  },
] as const;

/**
 * Hero metric cards. Every one of these is real, sourced and dated — they
 * describe the method and the first run, not outcomes for any client.
 * See research/vertical-sprint/scans/ in the agency repo.
 *
 * NOTE ON SHAPE: the layout these sit in normally carries a percentage and a
 * rising arrow. These are counts, not movements, so neither is used. A
 * trailing ↗ on "7 categories" would assert a direction nothing here
 * measured, and the cards would be reading as client results — which the
 * agency does not have.
 */
export const PROOF = [
  { n: '4',  chip: 'Engines',    label: 'answer engines measured separately, never blended into one score' },
  { n: '7',  chip: 'Categories', label: 'scanned in the first Dubai run, 13 August 2026' },
  { n: '28', chip: 'Cells',      label: 'prompt-and-engine results recorded in that run' },
  { n: '14', chip: 'Re-run',     label: 'of those cells repeated on a clean profile four days later' },
] as const;

/**
 * The problem grid. Cause and consequence stated separately, because the
 * consequence is the part a buyer recognises and the cause is the part that
 * decides what work is needed.
 */
export const PROBLEMS = [
  {
    t: 'You are not on the shortlist',
    p: 'A search engine returns ten links and lets the buyer choose. An answer engine returns three names and has already chosen.',
    e: 'Buyers who never see you also never bounce. Nothing in your analytics records the loss, so the first sign is a quarter of soft pipeline nobody can explain.',
  },
  {
    t: 'The four engines disagree',
    p: 'ChatGPT, Perplexity, Gemini and Google AI Overviews name different brands and cite different sources for the same question on the same day.',
    e: 'A single blended “AI visibility score” averages four different realities into one number, and hides the only thing you could have acted on.',
  },
  {
    t: 'Most citations are not yours',
    p: 'Models ground their answers on third-party sources — directories, trade press, forums — far more than on a brand’s own site.',
    e: 'Publishing more pages on your own domain can leave the answer completely unchanged, which is why the work is earned rather than published.',
  },
  {
    t: 'Nobody can tell you why',
    p: 'Absence has at least three separate causes: the model cannot resolve who you are, it cannot find you in its sources, or it simply prefers someone else.',
    e: 'They need different work, so an agency quoting a retainer before diagnosing which one applies is pricing a guess.',
  },
] as const;

/** Named offers. PRICES ARE SAMPLE FIGURES — Joe sets the real numbers. */
export const OFFERS = [
  {
    name: 'Four-surface visibility audit',
    price: 'AED 9,500',
    unit: 'fixed fee · one-off · four places per quarter',
    summary:
      'The entry product. Your category measured across all four answer engines from clean sessions, with the causes of every absence identified.',
    includes: [
      'Prompt set agreed with you and frozen',
      'All four engines, clean sessions, recorded separately',
      'Who is named, in what order, and what each answer cited',
      'Entity check — whether models can resolve who you are',
      'Prioritised list of what would move the position',
    ],
    cta: 'Start with the audit',
    primary: true,
  },
  {
    name: 'Ongoing retainer',
    price: 'from AED 14,000',
    unit: 'per month · minimum three months',
    summary:
      'Continuous tracking plus execution — entity work, answer-shaped content and earned placement — with re-measurement against a control set.',
    includes: [
      'Everything in the audit, re-run monthly',
      'Control prompts held unoptimised to isolate cause',
      'Entity and structured-data corrections',
      'Answer-shaped content and placement outreach',
      'Monthly report with raw counts, not just a score',
    ],
    cta: 'Talk about a retainer',
    primary: false,
  },
] as const;
