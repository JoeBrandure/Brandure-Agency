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
 * Hero statistics. These make the case for the category — why an answer
 * engine is a different problem from a search engine — rather than
 * describing our own method, which is what a visitor who has never heard of
 * AEO needs first.
 *
 * SOURCING. The first three are one study, cited precisely: Pew Research
 * Center, "Do people click on links in Google AI summaries?", 22 July 2025 —
 * 68,879 Google searches by 900+ US adults, browser-tracked through March
 * 2025. One source, one sample, one date, stated on the page.
 *
 * They describe GOOGLE AI OVERVIEWS SPECIFICALLY, not AI answers in general,
 * and the copy says so. Stretching a Google-only sample to cover ChatGPT and
 * Perplexity would be the exact move this agency sells against.
 *
 * NOT USED, deliberately: Gartner's "search volume will drop 25% by 2026"
 * (Feb 2024) is the most-quoted figure in this category and is now past its
 * own deadline without happening. Quoting a failed prediction on a site that
 * sells measurement would be self-defeating.
 *
 * NO ARROWS, NO CLIENT RESULTS. The layout these sit in normally carries a
 * rising arrow beside a client's percentage. Ours carry published research
 * about the category. There are no client outcomes to show.
 */
export const HERO_STATS = [
  {
    chip: 'Clicks',
    n: '8',
    suffix: '%',
    label: 'of Google visits end in a click on a result when an AI summary is on the page. Without one it is 15%.',
  },
  {
    chip: 'Traffic',
    n: '1',
    suffix: '%',
    label: 'of visits end in a click on a link inside the summary itself. Being cited is not a traffic channel — being named is the win.',
  },
  {
    chip: 'Intent',
    n: '53',
    suffix: '%',
    label: 'of searches ten words or longer return an AI summary. That is how people search when they are choosing.',
  },
  {
    chip: 'Coverage',
    n: '4',
    suffix: '',
    label: 'answer engines measured separately — ChatGPT, Perplexity, Gemini, Google AI Overviews. Never one blended score.',
  },
] as const;

/**
 * The problem grid, in plain language.
 *
 * The earlier version used the field's own vocabulary — entity resolution,
 * grounding, third-party sources, control sets. That reads as competence to
 * someone already in AEO and as noise to the person actually buying, who has
 * simply noticed they are not coming up. Cause and consequence stay split,
 * because the consequence is the half a buyer recognises.
 */
export const PROBLEMS = [
  {
    t: 'The AI chooses for them',
    p: 'Google hands over ten links and lets someone pick. ChatGPT hands over three names and has already picked.',
    e: 'If you are not one of the three you are not in the running — and nothing in your analytics shows it, because there is no visit to miss.',
  },
  {
    t: 'Every AI says something different',
    p: 'Ask ChatGPT, Perplexity, Gemini and Google the same question on the same day and different companies come back.',
    e: 'One overall “AI score” averages four different answers into a number that cannot tell you which one to go and fix.',
  },
  {
    t: 'Your website is not what decides',
    p: 'These answers are built mostly from other people’s pages — directories, press, review sites, forums — not from yours.',
    e: 'You can add twenty pages to your own site and the answer will not move. Getting mentioned elsewhere is what moves it.',
  },
  {
    t: 'Nobody can tell you why',
    p: 'There are three reasons an AI leaves you out: it does not know who you are, it cannot find you anywhere it trusts, or it simply prefers someone else.',
    e: 'Each one needs completely different work. Anyone quoting a monthly fee before finding out which applies is guessing.',
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
