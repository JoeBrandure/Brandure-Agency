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

export interface PromptRow {
  prompt: string;
  /** What the buyer is doing: choosing, comparing, pricing, checking. */
  intent: string;
  cells: { status: 'present' | 'partial' | 'absent'; citation?: string }[];
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

/* Cell order matches ENGINES: ChatGPT, Claude, Perplexity, Gemini, Google AI Overview. */
export const PROMPT_SETS: PromptSet[] = [
  {
    id: 'legal',
    sector: 'Legal',
    market: 'Dubai',
    note: 'The city goes in every question here. Nobody hires a law firm in a country they aren’t operating in.',
    rows: [
      { prompt: 'Best employment lawyers in Dubai for expat contract disputes', intent: 'Choosing', cells: [
        { status: 'present', citation: 'Legal 500 profile' }, { status: 'absent' }, { status: 'partial', citation: 'named, unranked' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'How much does a DIFC employment tribunal claim cost', intent: 'Pricing', cells: [
        { status: 'absent' }, { status: 'partial', citation: 'own fee guide' }, { status: 'present', citation: 'own fee guide' }, { status: 'absent' }, { status: 'partial', citation: 'local pack' } ] },
      { prompt: 'Al Tamimi vs Hadef & Partners for corporate work', intent: 'Comparing', cells: [
        { status: 'absent' }, { status: 'absent' }, { status: 'partial', citation: 'competitor page' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Which Dubai law firms handle free zone company setup', intent: 'Discovering', cells: [
        { status: 'present', citation: 'trade press' }, { status: 'present', citation: 'trade press' }, { status: 'present', citation: 'directory' }, { status: 'absent' }, { status: 'partial', citation: 'maps only' } ] },
    ],
  },
  {
    id: 'saas',
    sector: 'B2B SaaS',
    market: null,
    note: 'No city on purpose. Nobody looks for project software near them, and adding a location would give us a local-services answer instead of the one buyers actually see.',
    rows: [
      { prompt: 'Best HR software for a 200-person company', intent: 'Choosing', cells: [
        { status: 'present', citation: 'G2 category page' }, { status: 'present', citation: 'G2 category page' }, { status: 'partial', citation: 'listed seventh' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Alternatives to BambooHR with payroll built in', intent: 'Comparing', cells: [
        { status: 'absent' }, { status: 'partial', citation: 'competitor page' }, { status: 'present', citation: 'own comparison page' }, { status: 'absent' }, { status: 'partial', citation: 'listed sixth' } ] },
      { prompt: 'How much does Deel cost per employee per month', intent: 'Pricing', cells: [
        { status: 'present', citation: 'own pricing page' }, { status: 'absent' }, { status: 'present', citation: 'own pricing page' }, { status: 'partial', citation: 'no figure given' }, { status: 'absent' } ] },
      { prompt: 'Is Rippling or Gusto better for a US-UK team', intent: 'Comparing', cells: [
        { status: 'absent' }, { status: 'absent' }, { status: 'absent' }, { status: 'absent' }, { status: 'absent' } ] },
    ],
  },
  {
    id: 'aesthetics',
    sector: 'Aesthetics',
    market: 'UAE',
    note: 'People want somewhere they can get to, so location matters. Answers here lean heavily on review platforms, not on the clinics’ own sites.',
    rows: [
      { prompt: 'Best clinic for lip filler in Dubai Marina', intent: 'Choosing', cells: [
        { status: 'present', citation: 'Google reviews' }, { status: 'absent' }, { status: 'partial', citation: 'named, unranked' }, { status: 'present', citation: 'maps listing' }, { status: 'present', citation: 'local pack' } ] },
      { prompt: 'How much is Botox in Abu Dhabi per unit', intent: 'Pricing', cells: [
        { status: 'absent' }, { status: 'absent' }, { status: 'partial', citation: 'range only' }, { status: 'absent' }, { status: 'partial', citation: 'range only' } ] },
      { prompt: 'DHA licensed aesthetic doctors for skin boosters', intent: 'Checking', cells: [
        { status: 'partial', citation: 'DHA register' }, { status: 'present', citation: 'DHA register' }, { status: 'absent' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Which UAE clinics do Morpheus8 with good reviews', intent: 'Discovering', cells: [
        { status: 'present', citation: 'aggregator' }, { status: 'partial', citation: 'aggregator' }, { status: 'present', citation: 'aggregator' }, { status: 'absent' }, { status: 'partial', citation: 'maps only' } ] },
    ],
  },
  {
    id: 'hospitality',
    sector: 'Hospitality',
    market: 'UK',
    note: 'Travel is where AI answers took hold first. Booking aggregators supply most of the sources.',
    rows: [
      { prompt: 'Best boutique hotels in the Cotswolds for a weekend', intent: 'Choosing', cells: [
        { status: 'present', citation: 'Condé Nast list' }, { status: 'present', citation: 'Condé Nast list' }, { status: 'partial', citation: 'Booking.com' }, { status: 'absent' }, { status: 'partial', citation: 'maps only' } ] },
      { prompt: 'How much is a room at a Lake District spa hotel in October', intent: 'Pricing', cells: [
        { status: 'absent' }, { status: 'partial', citation: 'no figure given' }, { status: 'present', citation: 'Booking.com' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Dog friendly country house hotels near Bath', intent: 'Discovering', cells: [
        { status: 'partial', citation: 'aggregator' }, { status: 'absent' }, { status: 'present', citation: 'aggregator' }, { status: 'present', citation: 'maps listing' }, { status: 'present', citation: 'local pack' } ] },
      { prompt: 'Is The Pig or Lime Wood better for a special occasion', intent: 'Comparing', cells: [
        { status: 'present', citation: 'trade press' }, { status: 'absent' }, { status: 'partial', citation: 'forum thread' }, { status: 'absent' }, { status: 'absent' } ] },
    ],
  },
  {
    id: 'manufacturing',
    sector: 'Manufacturing',
    market: 'UK',
    note: 'Long, specific, technical questions. Exactly the sort that tends to produce an AI summary instead of a list of links.',
    rows: [
      { prompt: 'UK suppliers of stainless steel pressure vessels to PED standard', intent: 'Discovering', cells: [
        { status: 'partial', citation: 'trade directory' }, { status: 'absent' }, { status: 'present', citation: 'trade directory' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Lead time for custom CNC machined aluminium parts in the UK', intent: 'Checking', cells: [
        { status: 'absent' }, { status: 'partial', citation: 'no figure given' }, { status: 'partial', citation: 'supplier blog' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Cost per unit for injection moulding a 5,000 run', intent: 'Pricing', cells: [
        { status: 'present', citation: 'supplier guide' }, { status: 'present', citation: 'supplier guide' }, { status: 'absent' }, { status: 'absent' }, { status: 'partial', citation: 'range only' } ] },
      { prompt: 'Best ISO 9001 certified contract manufacturers in the Midlands', intent: 'Choosing', cells: [
        { status: 'absent' }, { status: 'absent' }, { status: 'partial', citation: 'directory' }, { status: 'absent' }, { status: 'partial', citation: 'maps only' } ] },
    ],
  },
  {
    id: 'education',
    sector: 'Education',
    market: 'US',
    note: 'League tables and reference sites supply nearly all of the answers in this category.',
    rows: [
      { prompt: 'Best US universities for an online MBA while working', intent: 'Choosing', cells: [
        { status: 'present', citation: 'US News ranking' }, { status: 'present', citation: 'US News ranking' }, { status: 'present', citation: 'US News ranking' }, { status: 'partial', citation: 'named, unranked' }, { status: 'partial', citation: 'ranking snippet' } ] },
      { prompt: 'Tuition for a part-time masters in data science in California', intent: 'Pricing', cells: [
        { status: 'partial', citation: 'own fees page' }, { status: 'absent' }, { status: 'present', citation: 'own fees page' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Which US business schools accept GMAT waivers', intent: 'Checking', cells: [
        { status: 'absent' }, { status: 'partial', citation: 'forum thread' }, { status: 'partial', citation: 'forum thread' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'NYU Stern vs Columbia for finance careers', intent: 'Comparing', cells: [
        { status: 'present', citation: 'Poets&Quants' }, { status: 'present', citation: 'Poets&Quants' }, { status: 'absent' }, { status: 'absent' }, { status: 'absent' } ] },
    ],
  },
  {
    id: 'automotive',
    sector: 'Automotive',
    market: 'Dubai',
    note: 'Stock and prices change every week, so answers go stale fast. Worth re-measuring more often than most.',
    rows: [
      { prompt: 'Where to buy a used Range Rover in Dubai with warranty', intent: 'Choosing', cells: [
        { status: 'present', citation: 'Dubizzle' }, { status: 'absent' }, { status: 'present', citation: 'Dubizzle' }, { status: 'partial', citation: 'maps listing' }, { status: 'partial', citation: 'local pack' } ] },
      { prompt: 'How much is a 2022 Toyota Land Cruiser in the UAE', intent: 'Pricing', cells: [
        { status: 'partial', citation: 'range only' }, { status: 'absent' }, { status: 'present', citation: 'classifieds' }, { status: 'absent' }, { status: 'partial', citation: 'range only' } ] },
      { prompt: 'Best dealership for EV servicing in Dubai', intent: 'Discovering', cells: [
        { status: 'absent' }, { status: 'absent' }, { status: 'partial', citation: 'forum thread' }, { status: 'absent' }, { status: 'absent' } ] },
      { prompt: 'Al-Futtaim vs AGMC for BMW aftersales', intent: 'Comparing', cells: [
        { status: 'absent' }, { status: 'partial', citation: 'forum thread' }, { status: 'absent' }, { status: 'absent' }, { status: 'absent' } ] },
    ],
  },
];
