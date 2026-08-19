# Workflows

Repeatable processes. **Adapt them to the brief** — skip steps that don't apply
and say why. If a request doesn't map to a workflow, name the closest one and
what's missing rather than inventing new process.

---

## W1 — Multi-surface visibility baseline

**Inputs:** brand, category, market, competitor set.

**Method:** one prompt per category across ChatGPT, Perplexity, Gemini and Google
Search. Logged out, clean profile, geo verified, n=3 per prompt. Log the
Places/Maps module separately from the generated text answer — they frequently
disagree and a brand can win one and lose the other.

**Output:** per-surface brand position, citation sources per line item,
cross-surface overlap count, named entity-disambiguation problems.

**Judgement calls:** four surfaces is the default, not a requirement — add
Copilot or Claude if the client's buyers use them; drop one if genuinely
irrelevant to the market. Scale n up for headline claims a prospect will
challenge.

**Discipline:** never present signed-in or n=1 data externally.

---

## W2 — Prompt universe construction

Build candidate prompts spanning all three funnel stages. Sources: Search Console
high-impression terms, sales-call language, competitor comparison queries,
"is X good for Y" validation queries.

Score each on volume band, commercial intent, and winnability from the SERP read
(heuristic B4 — format and competitor test).

**Output:** tiered tracked prompt set with stated rationale per tier.

**Judgement call:** ~100 candidates is a guideline. A narrow B2B niche may only
have 30 real ones. Don't pad to hit a number.

---

## W3 — Citation and source mapping

For each priority prompt, capture every grounding source, classify it (own domain
/ competitor domain / editorial / directory / UGC / video / knowledge base), and
count retrieval frequency. Identify the **content type gap** — what's in
competitors' footprints that's missing from the client's.

**Output:** ranked earnable-domain queue — the distribution priority list for the
quarter.

This is the document that turns AEO from opinion into a plan. Do it before
proposing anything.

---

## W4 — Entity and knowledge-base audit

Check name consistency, description consistency and factual accuracy across
Wikipedia/Wikidata, Crunchbase, LinkedIn, Google Business Profile, Maps, Yelp and
relevant trade directories.

Flag near-name collisions explicitly — they suppress brands and make concrete,
demonstrable audit findings.

**Output:** entity remediation list, prioritised by which engine each source
feeds. Weight by the platform-asymmetry data in `verified-data.md` — don't spend
equally across sources that don't feed the client's relevant engines.

---

## W5 — Retrieval and crawlability audit

Bot access (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot — check
robots.txt isn't blocking the ones you want). Server-side rendering of citable
content. Heading hierarchy. Sitemap to Google **and** Bing. Image alt text.
Video transcripts on-page. Logical URL structure. Organisation and Article schema
with real named authors.

**Output:** technical fix list, effort-ranked, with the honest note that this
layer is table stakes and won't by itself move citation share.

---

## W6 — On-site content build

Apply the five E-E-A-T signals (heuristic C1) plus answer-shaped structure (C2)
to every page. Cluster architecture: money page at centre, guides, comparisons,
case studies and video linking inward.

**Output:** content plan with cluster map, page briefs, author assignments.

---

## W7 — Earned placement plan

The main event. Target the ranked domain queue from W3.

Tactics: original research designed for citation, journalist outreach with a
differentiated position, vertical trade publications (highest leverage for earned
media), substantive disclosed community participation, inclusion in existing
category roundups, analyst and directory submissions.

**Output:** placement pipeline with target, angle, owner, status.

---

## W8 — Local and GBP layer

For any local-services client: review velocity and rating, category selection,
profile completeness, photo cadence, Q&A seeding, rate/feed parity where
applicable.

**Output:** GBP remediation and review-velocity plan.

See heuristics F1 and F2. Skip entirely for clients with no local intent.

---

## W9 — Measurement and reporting

Baseline via W1, then re-run the same cells on a fixed cadence. Report per
surface, never as a single blended score.

Metrics: mention frequency, citation frequency, share of voice, position within
answer, source composition.

Layer Searchable dashboards on top once a live client account exists.

**Output:** monthly drift report. This is the retained product, not a one-off
audit.

**Watch for:** shifts in source composition toward or away from self-published
sources — that's the early warning on heuristic A3's closing window.

---

## W10 — Searchable data interpretation

Activates on live client access.

**Use for:** share-of-voice trend, per-engine citation tracking, sources view
(which domains and specific URLs ground competitor wins), agent queries against
citation data.

**Don't use for:** category discovery — it requires a domain input.

**Always:** cross-check its prevalence figures against `verified-data.md` before
any number reaches a client deck.
