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
    label: 'increase in AI search appearances across three LLMs.',
  },
  {
    slug: 'viveonix',
    /* 900x365 lockup, mark plus wordmark plus strapline */
    optical: 1.35,
    chip: 'dark' as const,
    brand: 'Viveonix',
    metric: '183',
    suffix: '%',
    label: 'increase in quality leads from optimised LLM searches.',
  },
  {
    slug: 'littlelockets',
    /* 600x296, three-line lockup — icon, name, strapline */
    optical: 1.45,
    chip: 'light' as const,
    brand: 'Little Lockets London',
    metric: '79',
    suffix: '%',
    label: 'increase in online revenue through LLM searches at conversion stage.',
  },
  {
    slug: 'fresh',
    /* 250x100, wordmark plus strapline */
    optical: 1.15,
    chip: 'light' as const,
    brand: 'Fresh Gym',
    metric: '205',
    suffix: '%',
    label: 'increase in reach from AI search suggestions.',
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
    p: 'Google hands over ten links and lets someone pick. ChatGPT hands over three names and has already picked.',
    e: 'If you are not one of the three you are not in the running — and nothing in your analytics shows it, because there is no visit to miss.',
  },
  {
    n: '02',
    accent: 'violet',
    t: 'Every AI says something different',
    p: 'Ask ChatGPT, Claude, Perplexity, Gemini and Google the same question on the same day and different companies come back.',
    e: 'One overall “AI score” averages five different answers into a number that cannot tell you which one to go and fix.',
  },
  {
    n: '03',
    accent: 'teal',
    t: 'Your website is not what decides',
    p: 'These answers are built mostly from other people’s pages — directories, press, review sites, forums — not from yours.',
    e: 'You can add twenty pages to your own site and the answer will not move. Getting mentioned elsewhere is what moves it.',
  },
  {
    n: '04',
    accent: 'deep',
    t: 'Nobody can tell you why',
    p: 'There are three reasons an AI leaves you out: it does not know who you are, it cannot find you anywhere it trusts, or it simply prefers someone else.',
    e: 'Each one needs completely different work. Anyone quoting a monthly fee before finding out which applies is guessing.',
  },
] as const;

/* ============================ THE FOUR STAGES ============================
 * Stated, not narrated. The previous copy asked rhetorical questions and
 * answered them, which is the register that gives away machine-written
 * marketing faster than any single word does.
 */
export const STAGES = [
  { n: 'S', a: 'cobalt', t: 'Surface', w: 'Week 1',  d: 'Your buyers’ real questions, agreed and frozen. All five engines, clean sessions, personalisation off.' },
  { n: 'C', a: 'violet', t: 'Cause',   w: 'Week 2',  d: 'Which of the three causes applies: the model cannot identify you, cannot find you, or prefers a competitor.' },
  { n: 'A', a: 'teal',   t: 'Act',     w: 'Ongoing', d: 'Fix what your site controls. Earn the third-party mentions the answers are actually built from.' },
  { n: 'N', a: 'deep',   t: 'Net',     w: 'Monthly', d: 'Your gain with the market’s own movement taken out — because some of any rise was never yours.' },
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
    a: 'It is the work of getting a brand named, cited and recommended inside AI-generated answers — ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews — rather than only ranking in a list of blue links. The unit of competition is different: a search engine returns options, an answer engine returns a conclusion.',
  },
  {
    group: 'The basics',
    q: 'How is this different from SEO?',
    a: 'Search returns a list and lets you choose. An answer engine returns a conclusion and has already chosen. Ranking third on a page still gets you seen; coming third in a model’s judgement usually means not being named at all. The levers differ too — whether a model can resolve who you are, and which third-party sources it grounds on when it answers.',
  },
  {
    group: 'The basics',
    q: 'Does our SEO still matter?',
    a: 'Yes, and we would not advise dropping it. Strong search fundamentals help a model find and trust you, and the traditional results page has not gone away. What has changed is that a good ranking stops paying when an answer arrives above it and the reader never scrolls. AEO is additive to SEO, not a replacement for it.',
  },
  {
    group: 'The basics',
    q: 'Is this the same as GEO, LLMO or AI SEO?',
    a: 'Broadly yes — the field is young and the vocabulary is not settled. Generative engine optimisation, large language model optimisation and answer engine optimisation all describe the same problem. We use AEO because it names the thing being optimised for: the answer, not the model.',
  },
  {
    group: 'The basics',
    q: 'Is it too early to bother with this?',
    a: 'That is a fair question and the honest answer depends on your category. In some, AI answers already carry meaningful buying-intent volume; in others they do not yet. That is exactly what the free report tells you, and if the answer is "not yet for you" we will say so.',
  },

  /* ---- What gets measured ---- */
  {
    group: 'What gets measured',
    q: 'Which engines do you measure?',
    a: 'ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews, each reported separately. They disagree with each other more than most people expect, so a single blended score hides the thing you need to know.',
  },
  {
    group: 'What gets measured',
    q: 'How do you decide which questions to test?',
    a: 'We agree a prompt set with you and freeze it. They are the questions a buyer types when they are choosing — comparisons, alternatives, "best X for Y" — not the ones they type when they are researching a topic. A prompt set that drifts between runs is not a measurement, it is two different tests wearing the same name.',
  },
  {
    group: 'What gets measured',
    q: 'Do you add our city or country to the questions?',
    a: 'Only if your buyers would. Adding a geography a buyer never types does not sharpen the test, it changes it — B2B software in particular gets pushed into a local-services answer shape that has nothing to do with how the category is bought. Whether a market belongs in the prompt is something we establish with you rather than assume.',
  },
  {
    group: 'What gets measured',
    q: 'How do you stop your own search history skewing the results?',
    a: 'Every run is from a clean session with personalisation off and the account signed out. A signed-in run measures the operator’s own history rather than the market. Where a model version differs between runs we record it, because a change in the model can look exactly like a change in your position.',
  },
  {
    group: 'What gets measured',
    q: 'How often do you re-measure?',
    a: 'Monthly on a retainer, against the identical frozen prompt set. Answers move on their own — sometimes considerably — so a single reading is a snapshot, not a baseline.',
  },
  {
    group: 'What gets measured',
    q: 'What is a control set and why does it matter?',
    a: 'A share of your prompts held back at baseline and never worked on, so the market has somewhere to show itself. If your worked prompts improve and the held ones move the same way, the rise was the category and not us. It is what lets us report a net gain rather than a gross number, and without one you have a figure that went up and no way to say why.',
  },
  {
    group: 'What gets measured',
    q: 'How many times do you run each prompt?',
    a: 'More than once, and the number is stated in every report. Answer engines are not deterministic — the same question can return different brands minutes apart — so a single run per prompt is an anecdote. Any report that does not tell you its run count is hiding its sample size.',
  },

  /* ---- What actually moves it ---- */
  {
    group: 'What actually moves it',
    q: 'What actually changes whether an AI names us?',
    a: 'Three things, in rough order of weight. Whether the model can resolve who you are and what you do. Whether the sources it grounds on mention you. And whether your own content is structured so an answer can be lifted from it cleanly. Most of the weight sits in the second one, which is the least comfortable because it is earned rather than published.',
  },
  {
    group: 'What actually moves it',
    q: 'Can we just publish more content?',
    a: 'Usually not on its own. Published research across tens of millions of AI citations consistently finds the large majority point at sources a brand does not own — press, directories, review sites, forums. Adding pages to your own domain can leave the answer entirely unchanged.',
  },
  {
    group: 'What actually moves it',
    q: 'Does schema and structured data help?',
    a: 'It helps a model resolve who you are, which is a real failure mode and worth fixing. It is not, by itself, what gets you named. We do the entity and structured-data work because it is cheap and it removes one of the three causes — not because it is the lever.',
  },
  {
    group: 'What actually moves it',
    q: 'Do you do Reddit and forum posting?',
    a: 'We do not astroturf. Community platforms are cited heavily by these models, so being genuinely present and genuinely useful there matters — but planted posts get removed, get you banned, and get attributed back to the brand. We would rather lose the ranking than earn it that way.',
  },
  {
    group: 'What actually moves it',
    q: 'How long before anything moves?',
    a: 'Entity and structured-data corrections can register within weeks. Earned placement is slower and depends on third parties, so it is measured in months. We re-measure on a fixed schedule against a control set rather than claiming a timeline we cannot hold.',
  },
  {
    group: 'What actually moves it',
    q: 'Can you guarantee we appear in AI answers?',
    a: 'No, and neither can anyone else. Answer engines change their grounding behaviour without notice. What we can do is measure the position you hold now, act on the causes we can influence, and measure again against a control set so you can see what the work actually moved.',
  },
  {
    group: 'What actually moves it',
    q: 'What if a competitor is already dominant?',
    a: 'Sometimes that is decisive and sometimes it is not — an incumbent named by one engine is often absent from another. The baseline shows which. Where a category is genuinely settled with no visible route in, we say so and decline the work.',
  },

  /* ---- Working together ---- */
  {
    group: 'Working together',
    q: 'What if our category is already locked up?',
    a: 'Then we say so and decline the work. Some categories are settled on two incumbents with no visible route in. A measurement that only ever produces a reason to hire us is not a measurement, and we would rather lose the engagement than sell against our own data.',
  },
  {
    group: 'Working together',
    q: 'What does the free report actually include?',
    a: 'Your category run across all five engines from clean sessions: who gets named, in what order, and which sources each answer was built from. It is a real measurement, not a teaser — you can act on it whether or not you engage us.',
  },
  {
    group: 'Working together',
    q: 'Do you need access to our website?',
    a: 'Not for the report. For execution we need whatever is required to make the changes agreed — usually CMS access or a developer on your side to implement. We are happy to hand specifications to your existing team instead.',
  },
  {
    group: 'Working together',
    q: 'Will you work with our existing SEO or PR agency?',
    a: 'Yes, and it often works better that way. Earned placement overlaps heavily with what a PR team already does; entity and structured-data fixes overlap with SEO. We would rather brief your incumbents than duplicate them.',
  },
  {
    group: 'Working together',
    q: 'What does reporting look like?',
    a: 'Raw counts alongside any summary figure, every engine separately, the control set beside the tracked set, and the prompt list, market, date and run count attached. If a number cannot be traced back to the runs behind it, it does not go in.',
  },
  {
    group: 'Working together',
    q: 'Who is this not for?',
    a: 'Anyone wanting a guaranteed position, anyone wanting volume of content for its own sake, and anyone in a category where AI answers carry no buying-intent volume yet. We would rather establish that in the free report than three months into a retainer.',
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
      'The front door, and it stands on its own. You could act on the report with your existing team and never speak to us again — that is deliberate, because a measurement that only ever produces a reason to hire us is not a measurement.',
    gets: [
      'The frozen prompt set, verbatim, with the market stated per prompt',
      'Who was named on each engine, in what order',
      'Every domain each answer was built from',
      'The run count behind every cell, and the model version where it varies',
      'Which of the three causes applies to you, engine by engine',
      'The entity check — whether a model can resolve who you are at all',
      'A prioritised fix list, with each change written out rather than named',
    ],
    honest:
      'If your category shows no buying-intent volume in AI answers yet, this is where we tell you and stop. You still keep the report.',
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
      'Everything above, plus the execution — entity corrections, answer-shaped content, and the earned placement that is the slower half and the half that moves it. Then the same measurement again, against prompts held back so the number can be attributed.',
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
      'Earned placement depends on third parties, so we report the misses as well as the hits. And if the held prompts moved the same way your worked ones did, the rise was the market. We will say that.',
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
    t: 'It does not show up as a loss',
    p: 'A buyer asks, gets three names, and picks one. You were never in the answer, so there is no impression, no click and no bounce.',
    e: 'Every tool you already pay for reports this as nothing happening. It is the only channel where losing looks identical to not being in the market.',
  },
  {
    n: '02',
    a: 'violet',
    t: 'The shortlist closes before you are in it',
    p: 'Ten blue links let a buyer discover you at position seven. An answer engine hands over a shortlist it has already made.',
    e: 'Second page used to mean less traffic. Not being named means not being considered — there is no equivalent of page two to climb from.',
  },
  {
    n: '03',
    a: 'teal',
    t: 'The gap widens while you wait',
    p: 'Answers are grounded on a small, slow-moving set of sources. Every month a competitor holds those citations, the association hardens.',
    e: 'This is the one that decides urgency. Displacing an incumbent from an established source set costs materially more than getting there first.',
  },
] as const;

/** What separates this from an SEO retainer, stated as a comparison. */
export const NOT_SEO = [
  {
    axis: 'What is being won',
    seo: 'A position in a list the buyer then chooses from',
    aeo: 'Inclusion in a shortlist the model has already chosen',
  },
  {
    axis: 'Where the answer comes from',
    seo: 'Mostly your own pages, ranked',
    aeo: 'Mostly other people’s pages, cited',
  },
  {
    axis: 'What third place means',
    seo: 'Still visible, still clicked',
    aeo: 'Usually not named at all',
  },
  {
    axis: 'How it is measured',
    seo: 'Rank, impressions, clicks',
    aeo: 'Named or not, per engine, against a control set',
  },
  {
    axis: 'What a report proves',
    seo: 'Traffic moved',
    aeo: 'Position moved, and that the market did not move with it',
  },
] as const;
