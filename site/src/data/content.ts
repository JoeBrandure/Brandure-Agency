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
    label: 'more appearances in AI answers, across three engines.',
  },
  {
    slug: 'viveonix',
    /* 900x365 lockup, mark plus wordmark plus strapline */
    optical: 1.35,
    chip: 'dark' as const,
    brand: 'Viveonix',
    metric: '183',
    suffix: '%',
    label: 'more qualified leads coming in from AI search.',
  },
  {
    slug: 'littlelockets',
    /* 600x296, three-line lockup — icon, name, strapline */
    optical: 1.45,
    chip: 'light' as const,
    brand: 'Little Lockets London',
    metric: '79',
    suffix: '%',
    label: 'more online revenue from buyers who arrived via AI search.',
  },
  {
    slug: 'fresh',
    /* 250x100, wordmark plus strapline */
    optical: 1.15,
    chip: 'light' as const,
    brand: 'Fresh Gym',
    metric: '205',
    suffix: '%',
    label: 'more reach from being recommended in AI answers.',
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
    t: 'The AI chooses for them',
    p: 'Google gives your buyer ten links and lets them choose. ChatGPT gives them three names and has already chosen.',
    e: 'If you are not one of those three, you are not in the running. And you will never see it happen, because there is no click to lose and nothing to show up in your analytics.',
  },
  {
    n: '02',
    accent: 'violet',
    t: 'Every AI says something different',
    p: 'Ask ChatGPT, Claude, Perplexity, Gemini and Google the same question on the same day and you get five different lists of companies.',
    e: 'So a single “AI visibility score” is really an average of five different answers. It might tell you that you have a problem. It cannot tell you where.',
  },
  {
    n: '03',
    accent: 'teal',
    t: 'Your website is not what decides',
    p: 'These answers get assembled from other people’s pages. Directories, trade press, review sites, forums. Your own site is a small part of it.',
    e: 'You could publish twenty new pages this month and the answer would not budge. What moves it is getting mentioned somewhere else.',
  },
  {
    n: '04',
    accent: 'deep',
    t: 'Nobody can tell you why',
    p: 'There are three reasons an AI leaves you out. It does not know who you are, it cannot find you anywhere it trusts, or it just prefers a competitor.',
    e: 'Each one takes completely different work to fix. If someone quotes you a monthly fee before finding out which one you have got, they are guessing.',
  },
] as const;

/* ============================ THE FOUR STAGES ============================
 * Stated, not narrated. The previous copy asked rhetorical questions and
 * answered them, which is the register that gives away machine-written
 * marketing faster than any single word does.
 */
export const STAGES = [
  { n: 'S', a: 'cobalt', t: 'Surface', w: 'Week 1',  d: 'We agree the questions your buyers actually type, then run them across all five engines from clean sessions.' },
  { n: 'C', a: 'violet', t: 'Cause',   w: 'Week 2',  d: 'We find out which of the three reasons applies to you: the AI cannot identify you, cannot find you, or prefers a competitor.' },
  { n: 'A', a: 'teal',   t: 'Act',     w: 'Ongoing', d: 'We fix what your own site controls, then go and earn the mentions elsewhere that the answers are really built from.' },
  { n: 'N', a: 'deep',   t: 'Net',     w: 'Monthly', d: 'Every month you see what moved because of the work, with the market’s own movement taken out of the figure.' },
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
    a: 'Getting your brand named and recommended inside the answers AI tools give — ChatGPT, Claude, Perplexity, Gemini and Google’s AI Overviews — instead of only ranking in a list of links. A search engine hands your buyer options. An answer engine hands them a decision.',
  },
  {
    group: 'The basics',
    q: 'How is this different from SEO?',
    a: 'Ranking third on Google still gets you seen. Coming third in an AI’s judgement usually means it does not mention you at all. The work is different too: SEO is largely about your own site, while AEO is largely about whether the AI knows who you are and whether the sources it trusts talk about you.',
  },
  {
    group: 'The basics',
    q: 'Does our SEO still matter?',
    a: 'Yes, and we would not tell you to drop it. Good search fundamentals help an AI find you and trust you, and plenty of buyers still use the ordinary results page. The problem is that a top ranking stops earning when an answer appears above it and nobody scrolls. Treat this as something you add to SEO, not something you swap it for.',
  },
  {
    group: 'The basics',
    q: 'Is this the same as GEO, LLMO or AI SEO?',
    a: 'Broadly, yes. The field is new and nobody has settled on a name. GEO, LLMO, AI SEO and AEO all describe the same problem. We say AEO because the thing you are trying to get into is the answer.',
  },
  {
    group: 'The basics',
    q: 'Is it too early to bother with this?',
    a: 'It depends on your category, and that is worth finding out before you spend anything. In some sectors buyers are already choosing suppliers this way. In others it has not arrived yet. The free report will tell you which one you are in, and if the answer is “not yet”, we will say so.',
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
    a: 'We agree them with you up front and then leave them alone. They are the questions someone types when they are close to buying — comparisons, alternatives, “best X for Y” — rather than the ones they type when they are reading around a subject. If the questions change between runs, you cannot compare the results.',
  },
  {
    group: 'What gets measured',
    q: 'Do you add our city or country to the questions?',
    a: 'Only if your buyers do. If nobody types “in Dubai” when they look for what you sell, adding it gives you a different test rather than a sharper one. B2B software is the clearest example: put a city in and you get a local-services answer that has nothing to do with how anyone buys it. We work this out with you rather than guessing.',
  },
  {
    group: 'What gets measured',
    q: 'How do you stop your own search history skewing the results?',
    a: 'Every run is signed out, with no history and no personalisation. If we stayed logged in we would be measuring our own browsing rather than your market. We also note the model version each time, because an AI update can look exactly like a change in your position.',
  },
  {
    group: 'What gets measured',
    q: 'How often do you re-measure?',
    a: 'Monthly on a retainer, using the same questions every time. These answers shift on their own, sometimes a lot, so one reading tells you where you were on that day rather than where you stand.',
  },
  {
    group: 'What gets measured',
    q: 'What is a control set and why does it matter?',
    a: 'A group of your questions that we deliberately leave alone for the whole engagement. If the ones we work on improve and the ones we left alone improve by the same amount, your category moved and we did not cause it. That is how you get a net figure instead of a number that went up for reasons nobody can explain.',
  },
  {
    group: 'What gets measured',
    q: 'How many times do you run each prompt?',
    a: 'More than once, and we print the number in the report. Ask the same AI the same question twice and you can get two different lists of companies, so one run tells you very little. If a report does not say how many runs are behind it, ask.',
  },

  /* ---- What actually moves it ---- */
  {
    group: 'What actually moves it',
    q: 'What actually changes whether an AI names us?',
    a: 'Three things. Whether the AI can work out who you are and what you sell. Whether the sources it draws on mention you. And whether your own pages are written so an answer can be lifted straight out of them. Most of the weight sits on the second one, which is the awkward one, because you cannot publish your way to it.',
  },
  {
    group: 'What actually moves it',
    q: 'Can we just publish more content?',
    a: 'On its own, usually not. Studies of tens of millions of AI citations keep finding the same thing: most of them point at sites the brand does not own — press, directories, review platforms, forums. You can add pages to your own domain all year and watch the answer stay exactly where it was.',
  },
  {
    group: 'What actually moves it',
    q: 'Does schema and structured data help?',
    a: 'It helps the AI work out who you are, which is a real problem worth fixing. On its own it will not get you named. We do this work early because it is quick and cheap and it takes one of the three causes off the table, then we get on with the part that actually moves the answer.',
  },
  {
    group: 'What actually moves it',
    q: 'Do you do Reddit and forum posting?',
    a: 'Not fake ones. These models lean heavily on community sites, so being genuinely useful there does matter. Planted posts get spotted, deleted, and traced back to the brand that paid for them. It is not a risk worth taking with your name on it.',
  },
  {
    group: 'What actually moves it',
    q: 'How long before anything moves?',
    a: 'The technical fixes can show up within a few weeks. Getting mentioned on other people’s sites takes months, because it depends on people who do not work for you. We would rather re-measure every month and show you where it has got to than promise a date we cannot control.',
  },
  {
    group: 'What actually moves it',
    q: 'Can you guarantee we appear in AI answers?',
    a: 'No, and be careful of anyone who says they can. These tools change how they build answers without telling anybody. What we can do is show you where you stand now, work on the causes we can influence, and measure again so you can see what changed and why.',
  },
  {
    group: 'What actually moves it',
    q: 'What if a competitor is already dominant?',
    a: 'Sometimes that settles it and often it does not. A competitor who owns ChatGPT in your category is frequently missing from Perplexity or Gemini entirely. The first measurement shows you which. If it turns out the category really is closed, we will tell you and turn the work down.',
  },

  /* ---- Working together ---- */
  {
    group: 'Working together',
    q: 'What if our category is already locked up?',
    a: 'Then we tell you and turn the work down. Some categories really are sewn up by two incumbents with no way in. If our measurement always happened to conclude that you should hire us, it would not be worth much to you.',
  },
  {
    group: 'Working together',
    q: 'What does the free report actually include?',
    a: 'Your category run across all five engines: who gets named, in what order, and which sources each answer was built from. It is the real thing rather than a sample. Take it to your own team and act on it if you would rather.',
  },
  {
    group: 'Working together',
    q: 'Do you need access to our website?',
    a: 'Not for the report. Once we start making changes we need either CMS access or a developer on your side. If you would rather keep us out of your site entirely, we will write the changes up and hand them to your team.',
  },
  {
    group: 'Working together',
    q: 'Will you work with our existing SEO or PR agency?',
    a: 'Yes, and it usually works better that way. Getting mentioned on third-party sites is most of what a PR team already does, and the technical fixes sit close to SEO. We would rather brief the people you already pay than charge you twice for the same work.',
  },
  {
    group: 'Working together',
    q: 'What does reporting look like?',
    a: 'Every engine separately, never one blended score. Raw counts next to any summary figure. The questions we left alone shown beside the ones we worked on. And the prompt list, market, date and run count attached, so anything in the report can be traced back and checked.',
  },
  {
    group: 'Working together',
    q: 'Who is this not for?',
    a: 'Anyone who wants a guaranteed position. Anyone who wants a set number of blog posts a month. And anyone in a category where buyers are not using AI to choose suppliers yet. Better to find that out in the free report than three months into a retainer.',
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
      'Most people start here. You get a proper measurement of your category and a list of what would change it, and you can hand the whole thing to your own team and never speak to us again. That is on purpose. If the only conclusion we ever reached was “hire us”, the report would not be worth reading.',
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
      'If buyers in your category are not using AI to choose suppliers yet, this is where we tell you and stop. You keep the report either way.',
    /* Written for the home page, which teases rather than lists. Lifting the
       first few `gets` lines put the same four bullets on two pages. */
    teaser: [
      'Five engines, measured separately',
      'The cause of every absence, named',
      'A fix list you could hand to your own team',
    ],
    cta: 'Start with the audit',
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
    lede: 'The audit re-run every month, with the work in between and a net figure at the end of it.',
    summary:
      'Everything in the audit, plus us actually doing the work. We fix the technical side, write content an AI can lift from cleanly, and go after mentions on the sites your category’s answers are built from. Then we measure again, and show you how much of the change was us.',
    gets: [
      'Everything in the audit, re-run monthly against the identical prompt set',
      'Entity and structured-data corrections, made or specified for your team',
      'Content built to be lifted into an answer cleanly',
      'A placement plan naming target sources in priority order',
      'Outreach run against that plan, with what landed and what did not',
      'A held-back set of prompts, so the market’s own movement is visible',
      'Your net gain per engine, with the raw counts behind every figure',
      'What we would do next, and what we would stop doing',
    ],
    honest:
      'Getting mentioned elsewhere depends on people who do not work for you, so you will see the pitches that landed and the ones that did not. And if the questions we left alone improved as much as the ones we worked on, your category moved and we did not. We will tell you.',
    teaser: [
      'Everything in the audit, every month',
      'The entity, content and placement work itself',
      'A net figure, not a gross one',
    ],
    cta: 'Talk about a retainer',
    primary: false,
  },
] as const;

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
    t: 'You never find out it happened',
    p: 'Someone asks ChatGPT for a supplier, gets three names, and calls one of them. You were not in the answer, so there was no impression, no click and no enquiry.',
    e: 'Every reporting tool you pay for will show this as a quiet month. There is nothing in your dashboard that distinguishes losing a deal this way from never having been in the running.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'The shortlist is made without you',
    p: 'On a results page a buyer could still find you at position seven. An AI hands them a shortlist it has already drawn up.',
    e: 'Page two used to mean less traffic. Not being named means you are not on the list at all, and there is no page two to climb up from.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'It gets more expensive the longer you leave it',
    p: 'These answers get built from a fairly small set of sources that does not change quickly. Every month your competitor holds those mentions, the association gets a bit more fixed.',
    e: 'This is the part that decides how urgent it is. Getting there first is far cheaper than prising someone else out later.',
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
