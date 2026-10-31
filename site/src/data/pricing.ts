/**
 * THE PRICE LIST. One source for the static tables, the builder and the
 * schema, so the three cannot disagree about what anything costs.
 *
 * Every price is fixed in both currencies, exactly as approved. There is NO
 * live conversion: £1,400 is the UK price of Core, not an exchange-rate view
 * of AED 6,500, and a rate that moved overnight would silently reprice the
 * site. Changing a price means changing both numbers here.
 *
 * `aed` and `gbp` are the numbers; the formatted strings are derived, so a
 * total computed by the builder and a figure printed in a table are produced
 * the same way.
 */
export type Money = { aed: number; gbp: number };

export const money = (m: Money) => ({
  aed: `AED ${m.aed.toLocaleString('en-GB')}`,
  gbp: `£${m.gbp.toLocaleString('en-GB')}`,
  /** The form every crawler and AI assistant should be able to quote. */
  both: `AED ${m.aed.toLocaleString('en-GB')} / £${m.gbp.toLocaleString('en-GB')}`,
});

/**
 * `who` and `bullets` are the card face of a plan — the one-line "this is for
 * you if" and the three things it buys. They live here, not in the component,
 * because the cards are now rendered in two places: the builder on /pricing
 * (labels wrapping radios) and the display-only cards on /aeo-agency-dubai
 * (links to /pricing). Two copies of the sentences would be two chances to
 * disagree about what Growth includes.
 */
export const PLANS = [
  {
    key: 'core',
    name: 'Core',
    monthly: { aed: 6500, gbp: 1400 },
    who: 'For one category, where you need to be found and named.',
    bullets: [
      'All six AI engines tracked separately',
      'Ongoing SEO for your priority pages',
      '2 earned citation placements a month',
    ],
    includes:
      'One category. AI search tracked separately across ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude and Copilot. On-going SEO for your priority pages. 2 earned citation placements a month. Quarterly authority asset. Monthly reporting on AI visibility, rankings and AI-referred traffic.',
  },
  {
    key: 'growth',
    name: 'Growth',
    monthly: { aed: 12000, gbp: 2600 },
    who: 'For several services or locations, and for taking ground from competitors.',
    bullets: [
      'Up to three categories or service lines',
      '4 earned citation placements a month',
      'Competitor displacement plan',
    ],
    includes:
      'Everything in Core, for up to three categories or service lines. 4 earned citation placements a month. Monthly authority asset. Competitor displacement plan. Entity correction across third-party sources.',
  },
] as const;

export const SETUP_FEE = {
  name: 'AI search & SEO setup',
  price: { aed: 3500, gbp: 750 },
  note: 'included with every plan',
  d: 'Technical SEO audit and fixes, schema, AI crawler access, entity fixes, Google Business Profile, Search Console and GA4 tracking, and your AI visibility baseline. Ten working days.',
} as const;

/** One-off website work, added to a plan. Never sold alone — see the FAQs. */
export const ADDONS = [
  {
    key: 'page',
    label: 'New or rebuilt pages',
    price: { aed: 2500, gbp: 550 },
    perPage: true,
    notes: 'Built on your current platform, for AI search and SEO. Best for 1–4 pages.',
  },
  {
    key: 'rebuild10',
    label: 'Full site rebuild, up to 10 pages',
    price: { aed: 12000, gbp: 2600 },
    perPage: false,
    notes: 'On your platform, or ours if a fresh start makes more sense',
  },
  {
    key: 'rebuild20',
    label: 'Full site rebuild, up to 20 pages',
    price: { aed: 19000, gbp: 4100 },
    perPage: false,
    notes: 'As above',
  },
  {
    key: 'ecommerce',
    label: 'Ecommerce or larger sites',
    price: null,
    perPage: false,
    notes: 'Shopify, WooCommerce and sites over 20 pages',
  },
  {
    key: 'copy',
    label: 'Copywriting',
    price: { aed: 600, gbp: 130 },
    perPage: true,
    notes: "Only if you don't have copy. We build with your existing copy by default.",
  },
] as const;

/** Shown under the builder, and used as the fixtures the builder is tested
 *  against — if the arithmetic here ever stops matching, the test fails. */
export const EXAMPLES = [
  {
    label: 'Core + setup',
    setup: { aed: 3500, gbp: 750 },
    monthly: { aed: 6500, gbp: 1400 },
    plan: 'core',
    pages: 0,
    rebuild: 'none',
    copy: 0,
  },
  {
    label: 'Core + setup + 3 new pages',
    setup: { aed: 11000, gbp: 2400 },
    monthly: { aed: 6500, gbp: 1400 },
    plan: 'core',
    pages: 3,
    rebuild: 'none',
    copy: 0,
  },
  {
    label: 'Growth + setup + rebuild up to 10 pages',
    setup: { aed: 15500, gbp: 3350 },
    monthly: { aed: 12000, gbp: 2600 },
    plan: 'growth',
    pages: 0,
    rebuild: 'rebuild10',
    copy: 0,
  },
] as const;

export const VAT_TERMS =
  'Prices exclude VAT (UAE 5%, UK 20%). Six-month initial term with a 90-day review.';

/** 5 or more single pages costs more than the up-to-10 rebuild, so the builder
 *  says so rather than letting someone overpay by not noticing. */
export const NUDGE_FROM_PAGES = 5;

export const PRICING_FAQS = [
  {
    q: 'Do I need a new website?',
    a: 'Usually not. Most businesses start with AI search & SEO setup. We recommend new pages or a rebuild only when the audit shows your site is stopping AI and Google from recommending you.',
  },
  {
    q: 'Can I buy a website on its own?',
    a: 'No. Website work is added to a Core or Growth plan, because the site and the ongoing AI search and SEO work only pay off together.',
  },
  {
    q: 'Is SEO included?',
    a: 'Yes. Setup includes technical SEO, and both plans include ongoing SEO for your priority pages. Most of the work overlaps with AI search optimisation.',
  },
  {
    q: 'Do prices include VAT?',
    a: 'No. UAE prices exclude 5% VAT and UK prices exclude 20% VAT.',
  },
] as const;

export const WEB_FAQS = [
  {
    q: 'Do you build websites on their own?',
    a: 'No. Website work comes with a Core or Growth plan, because the site and the ongoing AI search and SEO work only pay off together.',
  },
  {
    q: 'Can you work on my existing WordPress or Shopify site?',
    a: 'Yes. We build on the platform you already use, and only move you to a new stack if your current one is holding you back and you agree.',
  },
  {
    q: 'How much does an AI-ready website cost?',
    a: 'New or rebuilt pages are AED 2,500 / £550 each. A full rebuild is AED 12,000 / £2,600 up to 10 pages, or AED 19,000 / £4,100 up to 20, on top of the AED 3,500 / £750 setup and a monthly plan.',
  },
  {
    q: 'Do you write the copy?',
    a: 'We build with your existing copy. Copywriting is AED 600 / £130 per page if you need it.',
  },
  {
    q: 'How long does a rebuild take?',
    a: 'Page projects usually take two to three weeks. Full rebuilds take four to six.',
  },
  {
    q: 'Will a new website get me recommended by ChatGPT?',
    a: 'A site AI can read is the starting point. Being recommended also depends on what other sites say about you, which is what the monthly plan works on.',
  },
] as const;

/** GCC sees AED; everywhere else sees GBP. Read by the edge function and
 *  repeated nowhere else. */
export const AED_COUNTRIES = ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'] as const;
