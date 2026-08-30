/**
 * Shared page content. Copy lives here so the visible page and the structured
 * data read from one source rather than duplicating each other.
 */
/* Five surfaces. Claude was missing and is one of the five that matter. */
export const ENGINES = ['ChatGPT', 'Claude', 'Perplexity', 'Gemini', 'Google AI Overview'] as const;

/* ============================ HERO ============================
 * Two hero variants. Switch with one line — no markup change.
 *
 *   'stats' — sourced category statistics (live)
 *   'cases' — client result cards, the shape the reference site uses
 *
 * The 'cases' entries below are PLACEHOLDERS and are marked as such on the
 * page. They must not go live carrying invented outcomes: the agency has no
 * client results to report, and this site sells measurement. Replace the
 * placeholder text with real figures and set HERO_MODE to 'cases'.
 */
export const HERO_MODE: 'stats' | 'cases' = 'cases';

/**
 * SOURCING. Cards 1–3 are one study, cited on the page: Pew Research Center,
 * "Do people click on links in Google AI summaries?", 22 July 2025 — 68,879
 * Google searches by 900+ US adults, browser-tracked through March 2025.
 *
 * They describe GOOGLE AI OVERVIEWS SPECIFICALLY, not AI answers in general,
 * and the copy says so. Stretching a Google-only sample to cover ChatGPT and
 * Perplexity would be the exact move this agency sells against.
 *
 * Card 1 leads with the DERIVED figure — 1 − 8/15 = 46.7%, rounded to 47% —
 * because 8% on its own reads as a small number when the finding is a large
 * loss. The derivation and both raw values are stated in the label, so a
 * reader can check the arithmetic rather than take the headline on trust.
 *
 * NOT USED: Gartner's "search volume down 25% by 2026" (Feb 2024). Its own
 * deadline has passed without it happening, and quoting a failed prediction
 * on a site that sells measurement would be self-defeating.
 *
 * Alternatives, with sources and verification status, are in
 * `site/hero-stat-options.md`.
 */
export const HERO_STATS = [
  {
    chip: 'Clicks lost',
    n: '47',
    suffix: '%',
    label: 'of result clicks disappear when an AI summary is on the page. 15% of Google visits end in a click without one; 8% with.',
  },
  {
    chip: 'Not traffic',
    n: '1',
    suffix: '%',
    label: 'of visits end in a click on a link inside the summary itself. Being cited is not a traffic channel — being named is the win.',
  },
  {
    chip: 'Buying intent',
    n: '53',
    suffix: '%',
    label: 'of searches ten words or longer return an AI summary. That is how people search when they are choosing, not browsing.',
  },
  {
    chip: 'Coverage',
    n: '5',
    suffix: '',
    label: 'answer engines measured separately — ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews. Never one blended score.',
  },
] as const;

/**
 * Client results, supplied by Joe on 2026-08-25.
 *
 * These are the first real outcomes on the site. `slug` matches a file in
 * public/logos/, so the mark is picked up at build time by the same mechanism
 * the strip uses.
 *
 * The marks sit straight on the card with no tile. Lurio and Viveonix ship as
 * white-knockout artwork and are invisible on a light surface, so the cards
 * use dark-ink variants generated from the originals — see
 * public/logos/README.md for exactly how.
 *
 * `optical` scales each mark so the four read at the same visual weight. A
 * one-line wordmark and a three-line lockup are not the same shape, so a
 * fixed height makes the taller one's type illegible; the multiplier is set
 * from what each measured on the rendered card.
 *
 * `chip` is retained but no longer drives a tile.
 *
 * WORTH ATTACHING BEFORE ANYONE PUSHES BACK: each of these would be stronger
 * with the engine, the date range and the size of the base beside it. "92%
 * across three LLMs" invites the question "up from what, over how long" from
 * exactly the buyer this site is written for. The figures are Joe's; the
 * suggestion is to publish the working alongside them, not to soften them.
 */
export const HERO_CASES = [
  {
    slug: 'lurio',
    /* 1140x470 wordmark, tight crop */
    optical: 0.8,
    chip: 'dark' as const,
    brand: 'Lurio',
    metric: '92',
    suffix: '%',
    label: 'more AI answer appearances',
  },
  {
    slug: 'viveonix',
    /* 900x365 lockup, mark plus wordmark plus strapline */
    optical: 1.35,
    chip: 'dark' as const,
    brand: 'Viveonix',
    metric: '183',
    suffix: '%',
    label: 'more qualified leads from AI Search',
  },
  {
    slug: 'littlelockets',
    /* 600x296, three-line lockup — icon, name, strapline */
    optical: 1.45,
    chip: 'light' as const,
    brand: 'Little Lockets London',
    metric: '79',
    suffix: '%',
    label: 'more online revenue from AI Search',
  },
  {
    slug: 'fresh',
    /* 250x100, wordmark plus strapline */
    optical: 1.15,
    chip: 'light' as const,
    brand: 'Fresh Gym',
    metric: '205',
    suffix: '%',
    label: 'more reach in AI answers',
  },
] as const;

/* ============================ PROBLEM GRID ============================
 * Plain language. The field's own vocabulary — entity resolution, grounding,
 * control sets — reads as competence to someone already in AEO and as noise
 * to the person actually buying, who has simply noticed they are not coming
 * up. Cause and consequence stay split: the consequence is the half a buyer
 * recognises.
 *
 * `accent` picks one of the four existing brand hues. No new colours.
 */
export const PROBLEMS = [
  {
    n: '01',
    accent: 'cobalt',
    t: 'You\u2019re losing deals you\u2019ll never hear about.',
    p: 'Someone asks ChatGPT for a supplier. It gives them three names. They call one. You were never in the running.',
    e: 'There\u2019s no click to lose, so nothing lands in your reporting. It just looks like a quiet month.',
  },
  {
    n: '02',
    accent: 'violet',
    t: 'Every AI tells your buyer something different.',
    p: 'Ask ChatGPT, Claude, Perplexity, Gemini and Google the same question today and you\u2019ll get five different lists.',
    e: 'So one “AI visibility score” is an average of five answers. It might tell you there\u2019s a problem. It won\u2019t tell you where.',
  },
  {
    n: '03',
    accent: 'teal',
    t: 'Your website isn\u2019t what decides this.',
    p: 'These answers get built from other people\u2019s pages. Directories, trade press, review sites, forums. Yours is a small part of it.',
    e: 'You could publish twenty pages this month and the answer wouldn\u2019t move. Getting mentioned elsewhere is what moves it.',
  },
  {
    n: '04',
    accent: 'deep',
    t: 'Nobody\u2019s told you why you\u2019re missing.',
    p: 'There are three reasons an AI leaves you out. It doesn\u2019t know who you are, it can\u2019t find you anywhere it trusts, or it just prefers a competitor.',
    e: 'Each one needs completely different work. Anyone quoting you a monthly fee before they\u2019ve found out which is guessing.',
  },
] as const;

/* ============================ THE FOUR STAGES ============================
 * Stated, not narrated. The previous copy asked rhetorical questions and
 * answered them, which is the register that gives away machine-written
 * marketing faster than any single word does.
 */
export const STAGES = [
  { n: 'S', a: 'cobalt', t: 'Surface', w: 'Week 1',  d: 'We agree the questions your buyers actually type, then run them across all five engines.' },
  { n: 'C', a: 'violet', t: 'Cause',   w: 'Week 2',  d: 'We find out which of the three is holding you back. Each one needs a different fix.' },
  { n: 'A', a: 'teal',   t: 'Act',     w: 'Ongoing', d: 'We fix what your site controls, then go and earn the mentions that actually move the answer.' },
  { n: 'N', a: 'deep',   t: 'Net',     w: 'Monthly', d: 'Every month you see what moved because of us, with your market\u2019s own movement taken out.' },
] as const;

/* ============================ FAQs ============================
 * One source for the accordion on /faq, the shorter set on the home page, and
 * the FAQPage structured data on both. `group` drives the headings on /faq.
 */
export const FAQS = [
  /* ---- The basics ---- */
  {
    group: 'The basics',
    q: 'What is answer engine optimisation?',
    a: 'Getting your brand named and recommended inside the answers AI tools give. ChatGPT, Claude, Perplexity, Gemini, Google’s AI Overviews. A search engine hands your buyer a list of options. An answer engine hands them a decision.',
  },
  {
    group: 'The basics',
    q: 'How is this different from SEO?',
    a: 'Ranking third on Google still gets you seen. Coming third in an AI’s judgement usually means it doesn’t mention you at all. The work differs too. SEO is mostly about your own site. AEO is mostly about whether the AI knows who you are, and whether the sources it trusts talk about you.',
  },
  {
    group: 'The basics',
    q: 'Does our SEO still matter?',
    a: 'Yes, and we wouldn’t tell you to drop it. Good search fundamentals help an AI find you and trust you, and plenty of buyers still use the ordinary results page. The problem is that a top ranking stops earning when an answer appears above it and nobody scrolls. Treat this as something you add to SEO, not something you swap it for.',
  },
  {
    group: 'The basics',
    q: 'Is this the same as GEO, LLMO or AI SEO?',
    a: 'Broadly, yes. The field is new and nobody has settled on a name. GEO, LLMO, AI SEO and AEO all describe the same problem. We say AEO because the thing you’re trying to get into is the answer.',
  },
  {
    group: 'The basics',
    q: 'Is it too early to bother with this?',
    a: 'It depends on your category, and that’s worth finding out before you spend anything. In some sectors buyers are already choosing suppliers this way. In others it hasn’t arrived yet. The free report will tell you which one you’re in, and if the answer is “not yet”, we’ll say so.',
  },

  /* ---- What gets measured ---- */
  {
    group: 'What gets measured',
    q: 'Which engines do you measure?',
    a: 'ChatGPT, Claude, Perplexity, Gemini and Google’s AI Overviews, each reported on its own. They disagree with each other far more than people expect, so averaging them into one score hides the part you actually need.',
  },
  {
    group: 'What gets measured',
    q: 'How do you decide which questions to test?',
    a: 'We agree them with you up front, then leave them alone. They’re the questions someone types when they’re close to buying. Comparisons, alternatives, “best X for Y”. Not the ones they type when they’re reading around a subject. If the questions change between runs, you can’t compare the results.',
  },
  {
    group: 'What gets measured',
    q: 'Do you add our city or country to the questions?',
    a: 'Only if your buyers do. If nobody types “in Dubai” when they look for what you sell, adding it gives you a different test rather than a sharper one. B2B software is the clearest case. Put a city in and you get a local-services answer that has nothing to do with how anyone buys it. We work this out with you rather than guessing.',
  },
  {
    group: 'What gets measured',
    q: 'How do you stop your own search history skewing the results?',
    a: 'Every run is signed out, with no history and no personalisation. If we stayed logged in we’d be measuring our own browsing rather than your market. We also note the model version each time, because an AI update can look exactly like a change in your position.',
  },
  {
    group: 'What gets measured',
    q: 'How often do you re-measure?',
    a: 'Monthly on a retainer, using the same questions every time. These answers shift on their own, sometimes a lot, so one reading tells you where you were on that day rather than where you stand.',
  },
  {
    group: 'What gets measured',
    q: 'What is a control set and why does it matter?',
    a: 'A group of your questions that we deliberately leave alone for the whole engagement. If the ones we work on improve and the ones we left alone improve by the same amount, your category moved and we didn’t cause it. That’s how you get a net figure rather than a number nobody can explain.',
  },
  {
    group: 'What gets measured',
    q: 'How many times do you run each prompt?',
    a: 'More than once, and we print the number in the report. Ask the same AI the same question twice and you can get two different lists of companies, so one run tells you very little. If a report doesn’t say how many runs are behind it, ask.',
  },

  /* ---- What actually moves it ---- */
  {
    group: 'What actually moves it',
    q: 'What actually changes whether an AI names us?',
    a: 'Three things. Whether the AI can work out who you are and what you sell. Whether the sources it draws on mention you. And whether your own pages are written so an answer can be lifted straight out of them. Most of the weight sits on the second one, which is the awkward one, because you can’t publish your way to it.',
  },
  {
    group: 'What actually moves it',
    q: 'Can we just publish more content?',
    a: 'On its own, usually not. Studies of tens of millions of AI citations keep finding the same thing. Most point at sites the brand doesn’t own. Press, directories, review platforms, forums. You can add pages to your own domain all year and watch the answer stay where it was.',
  },
  {
    group: 'What actually moves it',
    q: 'Does schema and structured data help?',
    a: 'It helps the AI work out who you are, which is a real problem worth fixing. On its own it won’t get you named. We do it early because it’s quick and cheap and it takes one of the three causes off the table. Then we get on with the part that actually moves the answer.',
  },
  {
    group: 'What actually moves it',
    q: 'Do you do Reddit and forum posting?',
    a: 'Not fake ones. These models lean heavily on community sites, so being genuinely useful there does matter. Planted posts get spotted, deleted, and traced back to the brand that paid for them. It’s not a risk worth taking with your name on it.',
  },
  {
    group: 'What actually moves it',
    q: 'How long before anything moves?',
    a: 'The technical fixes can show up within a few weeks. Getting mentioned on other people’s sites takes months, because it depends on people who don’t work for you. We’d rather re-measure every month and show you where it has got to than promise a date we can’t control.',
  },
  {
    group: 'What actually moves it',
    q: 'Can you guarantee we appear in AI answers?',
    a: 'No, and be careful of anyone who says they can. These tools change how they build answers without telling anybody. What we can do is show you where you stand now, work on the causes we can influence, then measure again. You will see what changed and why.',
  },
  {
    group: 'What actually moves it',
    q: 'What if a competitor is already dominant?',
    a: 'Sometimes that settles it and often it doesn’t. A competitor who owns ChatGPT in your category is frequently missing from Perplexity or Gemini entirely. The first measurement shows you which. If it turns out the category really is closed, we’ll tell you and turn the work down.',
  },

  /* ---- Working together ---- */
  {
    group: 'Working together',
    q: 'What if our category is already locked up?',
    a: 'Then we tell you and turn the work down. Some categories really are sewn up by two incumbents with no way in. If our measurement always happened to conclude that you should hire us, it wouldn’t be worth much to you.',
  },
  {
    group: 'Working together',
    q: 'What does the free report actually include?',
    a: 'Your category run across all five engines: who gets named, in what order, and which sources each answer was built from. It’s the real thing, not a sample. Take it to your own team and act on it if you’d rather.',
  },
  {
    group: 'Working together',
    q: 'Do you need access to our website?',
    a: 'Not for the report. Once we start making changes we need either CMS access or a developer on your side. If you’d rather keep us out of your site entirely, we’ll write the changes up and hand them to your team.',
  },
  {
    group: 'Working together',
    q: 'Will you work with our existing SEO or PR agency?',
    a: 'Yes, and it usually works better that way. Getting mentioned on third-party sites is most of what a PR team already does, and the technical fixes sit close to SEO. We’d rather brief the people you already pay than charge you twice for the same work.',
  },
  {
    group: 'Working together',
    q: 'What does reporting look like?',
    a: 'Every engine separately, never one blended score. Raw counts next to any summary figure. The questions we left alone shown beside the ones we worked on. And the prompt list, market, date and run count attached, so anything in the report can be traced back and checked.',
  },
  {
    group: 'Working together',
    q: 'Who is this not for?',
    a: 'Anyone who wants a guaranteed position. Anyone who wants a set number of blog posts a month. And anyone in a category where buyers aren’t using AI to choose suppliers yet. Better to find that out in the free report than three months into a retainer.',
  },
] as const;

/** The subset shown on the home page. The rest live on /faq. */
export const FAQS_HOME = FAQS.slice(0, 6);



/* ============================ SERVICE PAGE ============================
 * The service page's job is to answer one question the home page raises and
 * does not close: what actually happens, week by week, and what lands on the
 * client's desk at the end of each part.
 *
 * Deliverables are stated as artefacts — a file, a list, a document — not as
 * activity. "Entity and structured-data work" is a description of effort;
 * "a prioritised fix list with the change written out per item" is a thing
 * someone receives and can check.
 */

/**
 * What a client actually buys, and what is inside it.
 *
 * This replaces two separate structures — OFFERS (prices) and DELIVERABLES
 * (artefacts, listed stage by stage). Splitting them meant /service walked the
 * four stages in as much detail as /method did, so the two pages said the same
 * thing twice and neither owned it.
 *
 * The division now: `/service` is organised by what you buy, `/method` by how
 * it runs. Artefacts belong to a purchase, so they live here; the
 * stage-by-stage explanation belongs to the method, so it lives in
 * src/data/method.ts and `/service` only shows the four letters and links out.
 *
 * `covers` names the SCAN stages a package includes, so the connection to
 * /method is stated without the method being re-explained.
 */
export const PACKAGES = [
  {
    key: 'audit',
    name: 'The visibility audit',
    a: 'cobalt',
    covers: ['S', 'C'],
    coversLabel: 'Surface and Cause, run once',
    price: 'AED 9,500',
    unit: 'fixed fee · one-off · four places per quarter',
    lede: 'Where you stand across all five engines, and which of the three causes is keeping you out.',
    summary:
      'Most people start here. You get a proper measurement of your category and a list of what would move it. Hand the whole thing to your own team and never speak to us again if you like \u2014 that\u2019s deliberate. If our research always concluded \u201chire us\u201d, it wouldn\u2019t be worth much to you.',
    gets: [
      'The frozen prompt set, verbatim, with the market stated per prompt',
      'Who was named on each engine, in what order',
      'Every domain each answer was built from',
      'The run count behind every cell, and the model version where it varies',
      'Which of the three causes applies to you, engine by engine',
      'The entity check — whether a model can resolve who you are at all',
      'A prioritised list of fixes, with each change written out so your team could action it',
    ],
    honest:
      'If buyers in your category aren\u2019t using AI to pick suppliers yet, this is where we tell you and stop. You keep the report either way.',
    /* Written for the home page, which teases rather than lists. Lifting the
       first few `gets` lines put the same four bullets on two pages. */
    teaser: [
      'All five engines, measured separately',
      'The reason you\u2019re missing, named',
      'A fix list you could hand to your own team',
    ],
    cta: 'Get started',
    primary: true,
  },
  {
    key: 'retainer',
    name: 'The ongoing retainer',
    a: 'violet',
    covers: ['S', 'C', 'A', 'N'],
    coversLabel: 'All four stages, monthly',
    price: 'from AED 14,000',
    unit: 'per month · minimum three months',
    lede: 'The audit every month, the work in between, and a net figure at the end of it.',
    summary:
      'Everything in the audit, plus us doing the work. We fix the technical side, write content an AI can quote from, and go after mentions on the sites your category\u2019s answers are built from. Then we measure again and show you how much of the change was us.',
    gets: [
      'Everything in the audit, re-run monthly against the identical prompt set',
      'Entity and structured-data corrections, made or specified for your team',
      'Content built to be lifted into an answer cleanly',
      'A placement plan naming target sources in priority order',
      'Outreach run against that plan, with what landed and what didn’t',
      'A held-back set of prompts, so the market’s own movement is visible',
      'Your net gain per engine, with the raw counts behind every figure',
      'What we’d do next, and what we’d stop doing',
    ],
    honest:
      'Getting mentioned elsewhere depends on people who don\u2019t work for us, so you\u2019ll see the pitches that landed and the ones that didn\u2019t. And if the questions we left alone improved as much as the ones we worked on, your market moved and we didn\u2019t. We\u2019ll tell you.',
    teaser: [
      'Everything in the audit, every month',
      'The technical, content and outreach work itself',
      'A net figure, not a headline one',
    ],
    cta: 'Book a call',
    primary: false,
  },
] as const;

/**
 * THE ONE SOURCED STATISTIC ON THE SITE.
 *
 * Muck Rack, "What Is AI Reading?" / Generative Pulse, May 2026 edition. More
 * than 25 million links from ChatGPT, Claude and Gemini responses across 17
 * industries. Earned media accounts for 84% of all AI citations; the figure has
 * held between 82% and 89% across three editions running back to July 2025.
 * Method at generativepulse.ai/report.
 *
 * TWO THINGS TO KNOW BEFORE QUOTING IT ELSEWHERE. Muck Rack sells PR software,
 * so they have a commercial interest in earned media mattering — that is worth
 * saying out loud, and the sample size and the stability across three editions
 * are why it is used anyway. And it is a citation-share figure, not a promise
 * about anyone's results. It says where the inputs come from. It does not say
 * what a given brand would gain, and the copy must never imply that it does.
 *
 * Corroborated independently: AirOps 2026 State of AI Search puts brand
 * mentions from third-party pages at 85%, and an academic study of LLM brand
 * sourcing puts non-owned URL citations at 85.7%.
 */
export const PRIZE = {
  n: '84',
  suffix: '%',
  claim: 'of what AI answers cite is media you don’t own.',
  point: 'Most businesses are busy optimising the other 16%. That gap is the opportunity, and it is where almost all of the work sits.',
  source:
    'Muck Rack, “What Is AI Reading?”, May 2026. 25 million+ links from ChatGPT, Claude and Gemini across 17 industries. Held between 82% and 89% across three editions since July 2025.',
  caveat:
    'Muck Rack sells PR software, so read it with that in mind. We use it because of the sample size and because the number has barely moved in a year.',
} as const;

/**
 * What being absent actually costs, for /service.
 *
 * Distinct from PROBLEMS on the home page, which explains *why* a brand is
 * absent — the mechanics. This is the commercial consequence, which is the
 * thing that makes a buyer act. Deliberately none of it is a statistic: the
 * argument holds without one, and a number here would have to be invented.
 */
export const COST_OF_ABSENCE = [
  {
    n: '01',
    a: 'cobalt',
    t: 'Your reporting says everything\u2019s fine.',
    p: 'No impression, no click, no enquiry. Nothing to see, because there was nothing to lose.',
    e: 'This is the only channel where losing looks exactly like a quiet month. Your dashboard can\u2019t tell the two apart, so nobody raises it.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'The shortlist gets made without you.',
    p: 'On Google, a buyer could still find you at position seven. An AI hands them three names and stops.',
    e: 'Page two used to mean less traffic. Here it means you\u2019re not on the list, and there\u2019s no page two to climb from.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'It gets pricier the longer you leave it.',
    p: 'These answers come from a small set of sources that doesn\u2019t change quickly. Every month a competitor holds those mentions, the link gets harder to break.',
    e: 'Getting there first costs a fraction of what it costs to prise someone else out. That\u2019s the whole argument for moving now.',
  },
] as const;

/** What separates this from an SEO retainer, stated as a comparison. */
export const NOT_SEO = [
  {
    axis: 'What you are competing for',
    seo: 'A place on a list your buyer then chooses from',
    aeo: 'A place on a shortlist the AI has already chosen',
  },
  {
    axis: 'Where the answer comes from',
    seo: 'Mostly your own pages, ranked',
    aeo: 'Mostly other people’s pages, cited',
  },
  {
    axis: 'What coming third gets you',
    seo: 'Still on the page, still getting clicks',
    aeo: 'Usually no mention at all',
  },
  {
    axis: 'How you measure it',
    seo: 'Rank, impressions, clicks',
    aeo: 'Named or not named, engine by engine',
  },
  {
    axis: 'What the report tells you',
    seo: 'Your traffic went up',
    aeo: 'Your position went up, and your competitors’ did not',
  },
] as const;
