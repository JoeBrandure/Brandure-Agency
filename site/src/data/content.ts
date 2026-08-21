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
 * Proof band figures. Every one of these is real, sourced and dated — they
 * describe the method and the first run, not outcomes for any client.
 * See research/vertical-sprint/scans/ in the agency repo.
 */
export const PROOF = [
  { n: '4', label: 'answer engines measured separately, never blended into one score' },
  { n: '7', label: 'categories scanned in the first Dubai run, 13 August 2026' },
  { n: '28', label: 'prompt-and-engine cells recorded in that run' },
  { n: '14', label: 'cells re-run on a clean profile four days later' },
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
