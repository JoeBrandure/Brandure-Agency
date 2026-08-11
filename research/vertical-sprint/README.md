# Vertical sprint

Purpose: choose Brandure's vertical on evidence rather than intuition. The
sprint samples how AI answer engines actually behave for buying-intent queries
in each candidate category, and produces the raw material for the ICP.

Status: designed, not run. See `STATE.md`.

Decision record: `decisions/2026-08-08-vertical-shortlist.md`.

## Structure

```
research/vertical-sprint/
├── README.md            method, shortlist, evidence
├── templates/           prompt templates, one per vertical — editable
├── prompts/             instantiated sets, one per sweep — frozen once run
└── results/             logged output, one file per vertical per sweep
```

**`templates/` is editable.** Placeholders unresolved, no market, no competitor
names. Change them as the method improves.

**`prompts/` is frozen.** An instantiated set — markets and competitors
resolved — named for its period: `prompts/2026-08-sweep.md`. Once a sweep has
run against it, it is never edited. A changed prompt set silently invalidates
every comparison built on it, and the corruption is invisible because the
numbers still look like numbers. To change prompts, add a new dated file. Same
rule as frozen skill inputs in `templates/skill-template.md`.

**`prompts/` does not exist yet**, deliberately. Instantiation requires market
elicitation and competitor names, and neither has been supplied. See
`decisions/2026-08-11-market-elicitation.md`.

**Prompt numbering** is continuous across the four template files — 1–5 legal,
6–10 B2B SaaS, 11–15 health, 16–20 hospitality. The number is a stable ID for
logging and for comparing a prompt against itself over time. New prompts take
the next free number; never renumber.

## Shortlist

**Primary — test these first, in this order:**

1. Legal and professional services
2. B2B SaaS
3. Health, wellness and aesthetics
4. Boutique and independent hospitality

**Reserve — test only if the primaries disappoint:**

- Manufacturing and industrial B2B
- Higher education
- Automotive

## Method

**Buying-intent prompts only.** The prompt must be one a person would type when
they are choosing, not researching a concept. "Best employment law firm in
[market] for a redundancy dispute" qualifies. "What is employment law" does not.
Informational prompts produce answers that look interesting and predict
nothing about whether a brand gets recommended at the point of purchase.

**Elicit the market; do not assume one.** Before running a vertical, decide
which market applies — and whether one applies at all. Legal, health and
aesthetics, and hospitality are local by nature and are not testable without a
market. B2B SaaS is distorted by adding one: buyers search for the tool, not
for a tool near them, and inserting a city produces a local-services answer
shape that misrepresents how the category is bought. Run B2B SaaS without a
geography unless there is a specific reason not to, and record which choice was
made per vertical — a sweep run with a market and a re-run without one are two
different measurements, not two readings of the same one. Standing rule in
`CLAUDE.md`; reasoning and reversal conditions in
`decisions/2026-08-11-market-elicitation.md`.

The local/non-local split is an assumption, and this sprint is its first test.
Log the market choice per prompt whether or not the split holds — if a local
category returns named businesses without a market, or B2B SaaS returns a
materially different citation set with one, that is a finding worth having and
the record needs to be able to show it.

**Fresh chats, memory off.** Every prompt runs in a new session with memory and
personalisation disabled. A personalised answer measures the operator's history,
not the market. This is the single easiest way to invalidate the entire sprint,
so verify the setting on each platform before starting rather than assuming it.

**Across ChatGPT, Claude and Perplexity.** The same prompt goes to all three.
Divergence between models is a finding in itself: a category where all three
name the same three brands is locked; a category where they disagree is
contestable, and contestable is what Brandure sells into.

**Log for every prompt run:**

- The prompt ID and the prompt, verbatim as sent
- The market used, or `none` where the vertical was run without one
- Which frozen set it came from — `prompts/<file>.md`
- The model, and the date run
- Brands named, **in the order they appear** — order is the signal, not just
  presence
- Domains cited
- Whether review sites, directories or aggregators dominate the citations
  rather than brand-owned or editorial sources

Write results to `results/<vertical-slug>-<period>.md` — for example
`results/legal-2026-08.md`. One file per vertical per sweep, so a re-measure
sits alongside its baseline rather than overwriting it.

**What the sprint is looking for.** A vertical qualifies when brands are named
but the set is unstable across models and prompts, citations come from sources
that can be influenced, and the named brands are not obviously the largest
players. A vertical fails when the same handful of brands appear everywhere with
no visible route in, or when answers refuse to recommend at all.

## Supporting evidence

Secondary evidence behind the shortlist. It informs which verticals were chosen
and in what order. It does not replace the sprint — none of it tells us what a
model says about a specific brand in a specific market today.

**First Page Sage**, across 160+ companies, May 2025 to July 2026, found the
largest ChatGPT conversion gains in research-heavy categories: hotels and
resorts, higher education, entertainment, legal services, and manufacturing.
The smallest gains were in engineering, heavy equipment and financial services.
This shapes both lists — legal and hospitality sit in the primaries, higher
education and manufacturing in the reserves, and the low-gain categories are
deprioritised entirely.

**AI purchase-journey penetration.** Travel and hospitality leads at 47%. B2B
SaaS sits at 28%. Read as an indicator of how often an AI answer is present in
the decision at all, which sets the ceiling on what AEO can be worth to a
category.

**Muck Rack** found 85% of non-paid AI citations come from earned media rather
than brand-owned domains. This is the most consequential finding for what
Brandure sells: if the large majority of citations are earned rather than
owned, on-site optimisation alone cannot move answer inclusion, and third-party
placement is a core part of the service rather than an add-on. The sprint's
citation logging is the check on whether this holds per vertical.

**Caveat on all of the above.** These are aggregate, largely US-weighted
findings from a fast-moving field. Dubai and MENA behaviour may differ, and the
figures may have moved since publication. Treat them as reasons to look, not as
conclusions.
