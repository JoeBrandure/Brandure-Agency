/**
 * Demonstration prompt sets for the home page.
 *
 * These replace the four `[bracketed placeholder]` rows that were there
 * before. A placeholder prompt shows the table's shape and nothing else; a
 * real one shows what the product is, which is the point of the section.
 *
 * SECTORS are the seven scanned in the 13 August 2026 Dubai run —
 * `research/vertical-sprint/scans/2026-08-13-dubai/`. MARKETS are UK, Dubai,
 * UAE and US.
 *
 * WHAT THESE ARE AND ARE NOT. Every prompt below is real — it is the shape of
 * question a buyer types, and any of them could be run tomorrow. **Every
 * status beside them is invented**, and the page says so under the table.
 * These illustrate the format of a report, not the findings of one. Publishing
 * invented findings on a site that sells measurement would be self-defeating,
 * so the distinction is load-bearing rather than a disclaimer.
 *
 * MARKET IS EXPLICIT PER SET, never inferred. The B2B SaaS set deliberately
 * carries no market: adding a city to a query buyers never localise produces a
 * local-services answer shape that misrepresents how the category is bought.
 * That is the standing rule in CLAUDE.md, and this component follows it rather
 * than quietly attaching a city to all seven.
 */

export type CellStatus = 'present' | 'partial' | 'absent';
export interface PromptCell {
  status: CellStatus;
  citation?: string;
}

export interface PromptRow {
  prompt: string;
  /** What the buyer is doing: choosing, comparing, pricing, checking. */
  intent: string;
  /**
   * KEYED BY ENGINE SLUG, NOT POSITIONAL. These were a bare array whose
   * order had to match the engine list by convention. When the site cut its
   * claim from six engines to three, the headers changed and the arrays did
   * not: every row went on rendering six cells under three headers, so
   * "Named" sat over the wrong column and the score read out of six. A slug
   * cannot drift out of step with a header the way an index can.
   */
  cells: Partial<Record<string, PromptCell>>;
}

export interface PromptSet {
  id: string;
  /** Tab label. */
  sector: string;
  /** Market as it appears in the prompts, or null where none belongs. */
  market: string | null;
  /** One line on why this set is shaped the way it is. */
  note: string;
  rows: PromptRow[];
}

/* Cells carry the three engines Brandure tracks, keyed by slug: chatgpt,
   google and perplexity. The Claude, Gemini and Copilot columns were dropped
   on 2026-11-05 with the rest of the six-engine claim, and their citation
   notes went with them — "Bing web result" described Copilot's Bing
   grounding and means nothing under a header that is no longer there.
   Google's notes ("local pack", "maps only", "ranking snippet") stayed,
   because that column stayed.

   Like every other status on this page these are invented, and the note
   under the table says so — the rows show the shape of a report, not the
   findings of one. Nothing here is a measurement. */
export const PROMPT_SETS: PromptSet[] = [
  {
    id: 'legal',
    sector: 'Legal',
    market: 'Dubai',
    note: 'The city goes in every question here. Nobody hires a law firm in a country they aren’t operating in.',
    rows: [
      { prompt: 'Best employment lawyers in Dubai for expat contract disputes', intent: 'Choosing', cells: {
        chatgpt: { status: 'present', citation: 'Legal 500 profile' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'named, unranked' },
      } },
      { prompt: 'How much does a DIFC employment tribunal claim cost', intent: 'Pricing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'partial', citation: 'local pack' },
        perplexity: { status: 'present', citation: 'own fee guide' },
      } },
      { prompt: 'Al Tamimi vs Hadef & Partners for corporate work', intent: 'Comparing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'competitor page' },
      } },
      { prompt: 'Which Dubai law firms handle free zone company setup', intent: 'Discovering', cells: {
        chatgpt: { status: 'present', citation: 'trade press' },
        google: { status: 'partial', citation: 'maps only' },
        perplexity: { status: 'present', citation: 'directory' },
      } },
    ],
  },
  {
    id: 'saas',
    sector: 'B2B SaaS',
    market: null,
    note: 'No city on purpose. Nobody looks for project software near them, and adding a location would give us a local-services answer instead of the one buyers actually see.',
    rows: [
      { prompt: 'Best HR software for a 200-person company', intent: 'Choosing', cells: {
        chatgpt: { status: 'present', citation: 'G2 category page' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'listed seventh' },
      } },
      { prompt: 'Alternatives to BambooHR with payroll built in', intent: 'Comparing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'partial', citation: 'listed sixth' },
        perplexity: { status: 'present', citation: 'own comparison page' },
      } },
      { prompt: 'How much does Deel cost per employee per month', intent: 'Pricing', cells: {
        chatgpt: { status: 'present', citation: 'own pricing page' },
        google: { status: 'absent' },
        perplexity: { status: 'present', citation: 'own pricing page' },
      } },
      { prompt: 'Is Rippling or Gusto better for a US-UK team', intent: 'Comparing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'absent' },
      } },
    ],
  },
  {
    id: 'aesthetics',
    sector: 'Aesthetics',
    market: 'UAE',
    note: 'People want somewhere they can get to, so location matters. Answers here lean heavily on review platforms, not on the clinics’ own sites.',
    rows: [
      { prompt: 'Best clinic for lip filler in Dubai Marina', intent: 'Choosing', cells: {
        chatgpt: { status: 'present', citation: 'Google reviews' },
        google: { status: 'present', citation: 'local pack' },
        perplexity: { status: 'partial', citation: 'named, unranked' },
      } },
      { prompt: 'How much is Botox in Abu Dhabi per unit', intent: 'Pricing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'partial', citation: 'range only' },
        perplexity: { status: 'partial', citation: 'range only' },
      } },
      { prompt: 'DHA licensed aesthetic doctors for skin boosters', intent: 'Checking', cells: {
        chatgpt: { status: 'partial', citation: 'DHA register' },
        google: { status: 'absent' },
        perplexity: { status: 'absent' },
      } },
      { prompt: 'Which UAE clinics do Morpheus8 with good reviews', intent: 'Discovering', cells: {
        chatgpt: { status: 'present', citation: 'aggregator' },
        google: { status: 'partial', citation: 'maps only' },
        perplexity: { status: 'present', citation: 'aggregator' },
      } },
    ],
  },
  {
    id: 'hospitality',
    sector: 'Hospitality',
    market: 'UK',
    note: 'Travel is where AI answers took hold first. Booking aggregators supply most of the sources.',
    rows: [
      { prompt: 'Best boutique hotels in the Cotswolds for a weekend', intent: 'Choosing', cells: {
        chatgpt: { status: 'present', citation: 'Condé Nast list' },
        google: { status: 'partial', citation: 'maps only' },
        perplexity: { status: 'partial', citation: 'Booking.com' },
      } },
      { prompt: 'How much is a room at a Lake District spa hotel in October', intent: 'Pricing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'present', citation: 'Booking.com' },
      } },
      { prompt: 'Dog friendly country house hotels near Bath', intent: 'Discovering', cells: {
        chatgpt: { status: 'partial', citation: 'aggregator' },
        google: { status: 'present', citation: 'local pack' },
        perplexity: { status: 'present', citation: 'aggregator' },
      } },
      { prompt: 'Is The Pig or Lime Wood better for a special occasion', intent: 'Comparing', cells: {
        chatgpt: { status: 'present', citation: 'trade press' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'forum thread' },
      } },
    ],
  },
  {
    id: 'manufacturing',
    sector: 'Manufacturing',
    market: 'UK',
    note: 'Long, specific, technical questions. Exactly the sort that tends to produce an AI summary instead of a list of links.',
    rows: [
      { prompt: 'UK suppliers of stainless steel pressure vessels to PED standard', intent: 'Discovering', cells: {
        chatgpt: { status: 'partial', citation: 'trade directory' },
        google: { status: 'absent' },
        perplexity: { status: 'present', citation: 'trade directory' },
      } },
      { prompt: 'Lead time for custom CNC machined aluminium parts in the UK', intent: 'Checking', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'supplier blog' },
      } },
      { prompt: 'Cost per unit for injection moulding a 5,000 run', intent: 'Pricing', cells: {
        chatgpt: { status: 'present', citation: 'supplier guide' },
        google: { status: 'partial', citation: 'range only' },
        perplexity: { status: 'absent' },
      } },
      { prompt: 'Best ISO 9001 certified contract manufacturers in the Midlands', intent: 'Choosing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'partial', citation: 'maps only' },
        perplexity: { status: 'partial', citation: 'directory' },
      } },
    ],
  },
  {
    id: 'education',
    sector: 'Education',
    market: 'US',
    note: 'League tables and reference sites supply nearly all of the answers in this category.',
    rows: [
      { prompt: 'Best US universities for an online MBA while working', intent: 'Choosing', cells: {
        chatgpt: { status: 'present', citation: 'US News ranking' },
        google: { status: 'partial', citation: 'ranking snippet' },
        perplexity: { status: 'present', citation: 'US News ranking' },
      } },
      { prompt: 'Tuition for a part-time masters in data science in California', intent: 'Pricing', cells: {
        chatgpt: { status: 'partial', citation: 'own fees page' },
        google: { status: 'absent' },
        perplexity: { status: 'present', citation: 'own fees page' },
      } },
      { prompt: 'Which US business schools accept GMAT waivers', intent: 'Checking', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'forum thread' },
      } },
      { prompt: 'NYU Stern vs Columbia for finance careers', intent: 'Comparing', cells: {
        chatgpt: { status: 'present', citation: 'Poets&Quants' },
        google: { status: 'absent' },
        perplexity: { status: 'absent' },
      } },
    ],
  },
  {
    id: 'automotive',
    sector: 'Automotive',
    market: 'Dubai',
    note: 'Stock and prices change every week, so answers go stale fast. Worth re-measuring more often than most.',
    rows: [
      { prompt: 'Where to buy a used Range Rover in Dubai with warranty', intent: 'Choosing', cells: {
        chatgpt: { status: 'present', citation: 'Dubizzle' },
        google: { status: 'partial', citation: 'local pack' },
        perplexity: { status: 'present', citation: 'Dubizzle' },
      } },
      { prompt: 'How much is a 2022 Toyota Land Cruiser in the UAE', intent: 'Pricing', cells: {
        chatgpt: { status: 'partial', citation: 'range only' },
        google: { status: 'partial', citation: 'range only' },
        perplexity: { status: 'present', citation: 'classifieds' },
      } },
      { prompt: 'Best dealership for EV servicing in Dubai', intent: 'Discovering', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'partial', citation: 'forum thread' },
      } },
      { prompt: 'Al-Futtaim vs AGMC for BMW aftersales', intent: 'Comparing', cells: {
        chatgpt: { status: 'absent' },
        google: { status: 'absent' },
        perplexity: { status: 'absent' },
      } },
    ],
  },
];
