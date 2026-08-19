# Practitioner Heuristics Library

Accumulated experience from operators who have run this at agency scale. **These
are guidelines, not rules.** Each carries a source, a confidence level, where it
applies, where it breaks, and what to check before acting on it.

Confidence key:
- **High** — corroborated by independent measurement, or mechanically obvious.
- **Medium** — sound practitioner logic, plausible, not independently measured.
- **Low / contested** — was true, is drifting, or comes from an interested party.

Sources currently in the library:
- **CD** — Chris Donnelly, Searchable founder/CEO, ex-Verb Brands (100-person
  agency, SEO for Bugatti, Aston Martin), ~20 years SEO. Two YouTube playbooks.
  Strong frameworks; commercially interested in AEO being urgent and in
  Searchable being the measurement layer.
- **BD** — Brandure's own Dubai four-surface scan, 7 categories × 4 surfaces,
  13 Aug 2026. First-party, local, small-n.
- **FP** — general field practice / mechanical reasoning.

---

## A. Strategy and mindset

### A1. Reframe from ranking to being the answer — **High** (CD)
Stop asking "how do I rank for this keyword" and ask "is this genuinely the best
answer that exists for this query." A brand can lose organic traffic and gain
revenue simultaneously; those are not contradictory outcomes.

*Applies:* every client conversation, especially ones opening with "our traffic
is down."
*Breaks:* clients whose revenue genuinely depends on click volume — publishers,
ad-monetised sites, affiliates. For them, citation without click is a real loss,
not a reframe. Don't use this line on a media owner.
*Check:* how the client actually monetises before deploying the reframe.

### A2. Timeline honesty up front — **High** (CD)
A properly built content cluster takes ~2 months to produce and ~2 more before
meaningful movement. The clients who fail are the ones who attack everything at
once and quit at month three.

*Applies:* every proposal. Put it in writing before signature.
*Breaks:* nothing much — but note some levers move faster (see D3, GBP work, and
Perplexity's live retrieval), so a blanket "four months for everything"
undersells the quick wins. Sequence fast levers first to buy patience for slow ones.

### A3. Treat the current arbitrage as a closing window — **Medium** (BD)
Several current mechanics work *because* categories have no authoritative
alternative for the models to prefer. As engines get better at down-weighting
self-interested sources, first movers keep incumbency and late entrants get
filtered.

*Applies:* internal sequencing decisions; and as an honest urgency argument to
clients.
*Breaks:* as a five-year thesis. Don't build long-dated promises on it.
*Check:* re-run the source composition of a tracked prompt set quarterly to see
whether self-published sources are being down-weighted yet. That's the early
warning.

---

## B. Prompt and query selection

### B1. Prompt selection beats keyword selection — **High** (CD)
Two failure modes: chasing head terms owned by decade-old authority, or chasing
terms with ~10 searches a month. Target the middle band with real commercial
intent — the query someone runs immediately before they buy.

*Applies:* universally.
*Check:* actual volume data, not intuition, for the "middle band" claim.

### B2. Build ~100 candidate prompts, then filter — **Medium** (CD)
Volume of candidates first, ruthless filtering second. Sources: Search Console
high-impression terms, sales-call language, comparison queries, "is X good for Y"
validation queries.

*Applies:* new client onboarding.
*Breaks:* 100 is an arbitrary target. For a narrow B2B niche, 30 good prompts
beats 100 padded ones. Don't manufacture prompts to hit a number.

### B3. Map the full funnel, not just the bottom — **High** (CD)
Top: unaware/educational ("automate my invoices"). Middle: comparison. Bottom:
brand validation ("is X reliable for Y"). The bottom converts; the top decides
which brands ever reach the bottom.

*Applies:* content planning.
*Nuance:* top-of-funnel content is now a **citation** play, not a traffic play.
Measure it on citation frequency and brand recall, not sessions. Teams still
measuring "what is" content on blog traffic are measuring the wrong thing.

### B4. Read winnability off the SERP — **High** (CD)
Run every candidate query and read two things: (a) what *format* the engine
thinks answers it — listicle, guide, video, map pack, booking module; (b) who
you're up against. A wall of GQ/Forbes/major publications means editorial intent
— don't fight it with a product page. A mix of mid-authority blogs, thin
listicles and a stale 2021 post is winnable.

*Applies:* every audit. Highest-value 20 minutes in the process.
*Breaks:* the format read is more durable than the competitor read — competitor
sets churn fast. Re-read before each planning cycle.

### B5. AI Overview trigger profile — **Medium** (CD, corroborated by BD)
Informational, non-branded, longer-tail queries trigger AI Overviews. Single-word
and action-intent queries ("plumber near me", "currency converter") largely don't
— the user wants to complete an action, not read a synthesis.

*Applies:* setting expectations about which queries AEO work can influence.
*Corroboration:* BD found AI Overview fired on **1 of 7** commercial "Best X in
Dubai" queries in the UAE. Useful local calibration and a good pitch talking
point — positions you as the one with data rather than vendor hype.
*Breaks:* market-dependent. UAE coverage is thinner than US. Don't quote UAE
rates to a US-facing client or vice versa.

---

## C. On-site content

### C1. E-E-A-T as five concrete per-page signals — **High** (CD)
Not a vibe, a checklist:
1. First-hand case studies with specific numbers.
2. Original insight, including positions held against consensus.
3. Original screenshots, photos, video, demonstrations — with transcripts for
   embeds.
4. Named author with credentials, photo, bio, verifiable profile links.
5. Genuine maintenance — updated examples, statistics, screenshots. Changing the
   date alone does nothing.

*Applies:* every page intended to be cited.
*Note:* CD's claim that generic AI content risks page suppression, and that
suppression spreads across a domain, is directionally sound and mechanically
plausible but not independently quantified. Present as risk, not certainty.
*Check:* if the client has no first-hand experience to draw on, borrow it —
engineer, long-tenured customer, practitioner. Don't fabricate it.

### C2. Answer-shaped structure — **High** (CD)
Natural-language question as a header, direct answer immediately underneath.
Bullets, lists and comparison tables (features, pricing) pass information
cleanly to retrieval. Semantic variety beats keyword repetition. Structural
floor: table of contents on long-form, logical heading hierarchy, skim summary
at the top.

*Applies:* all content production.
*Nuance:* FAQ *content structure* is high-leverage and this is the single
cheapest content change most clients can make. FAQ *rich-result markup* is a
separate and largely deprecated thing — see the reconciliation table.

### C3. Content clusters, not isolated pages — **High** (CD)
A money page needs a surrounding web of long-form guides, platform-specific
breakdowns, case studies, comparison pages and video, all linking inward. Small
brands cannot win with a single great page in isolation.

*Applies:* any client without existing topical authority.
*Breaks:* a client with genuine existing authority in the topic may get traction
from a single strong page. Check domain history before insisting on a cluster.

### C4. Voice-draft long-form before editing — **Medium** (CD)
Dictate the answer as if explaining it to a colleague, then edit. Reads more
naturally and scores better on experience signals than writing cold.

*Applies:* practical production tip, especially for expert-led content.
*Breaks:* nothing — low cost, try it.

### C5. Original data is the highest-leverage content type — **High** (verified)
Original research and proprietary data outperform everything else across engines.
Then case studies and pricing pages. Top-of-funnel explainers underperform for
AI-referred traffic.

*Applies:* content prioritisation. For Brandure specifically, the vertical
research index is the highest-leverage single artefact — it's simultaneously the
lead magnet, the digital-PR hook and the topical-authority anchor.

---

## D. Technical and retrieval

### D1. Server-render anything you want cited — **High** (CD, corrected by FP)
CD's version — "AI systems read raw HTML, not JavaScript" — is overstated for
Google, which renders JS. But ChatGPT's, Perplexity's and Anthropic's crawlers
largely do **not** execute JavaScript. So the advice lands correctly for the
non-Google surfaces and wrongly for Google.

*Reframe:* server-render citable content, because the non-Google engines won't
run a client-side app.
*Applies:* any SPA-heavy client. This is a genuine, checkable finding.
*Note:* Brandure's Astro build is correct for exactly this reason.

### D2. Crawlability and bot access — **High** (CD)
Verify robots.txt isn't blocking the bots you want (Googlebot, Bingbot, GPTBot,
ClaudeBot, PerplexityBot). Submit sitemaps to Google **and** Bing — Bing feeds
ChatGPT retrieval. Logical hierarchy, no single-page dumps, valuable content not
buried. Alt text on images, transcripts for video.

*Applies:* every technical audit.
*Frame honestly:* table stakes. Will not by itself move citation share. Fix it,
don't invoice it as a growth lever.

### D3. Retrieval latency differs by engine — **High** (verified)
Perplexity re-retrieves live — new content can surface within hours of indexing.
AI Overviews follow Google indexing timelines. ChatGPT has a static training base
plus a faster retrieval layer for commercial-intent queries.

*Applies:* expectation-setting. Set per engine, never in aggregate. Perplexity is
where you show early movement to buy patience for the slower surfaces.

### D4. Schema as hygiene, not lever — **Medium / contested** (CD claims lever)
Organisation schema (brand identity, social profiles — CD's "social fortress
around your entity") and Article schema with a real named author, headline,
publish date, last-updated and key entities are worth doing for entity
disambiguation, rich results and machine-readable authorship.

*But:* Google's own AI guidance says special schema isn't needed for its AI
features. So CD's positioning of schema as a primary AEO lever overstates it.
*Applies:* do the work, frame it as hygiene, don't sell it as growth.

---

## E. Off-site, entity and earned media

### E1. Off-site entity presence shapes what the model believes you are — **High** (CD)
Models retrieve from and were trained on Wikipedia, Reddit, Quora, Crunchbase,
Yelp, Google Maps, LinkedIn, YouTube. Accurate, consistent listing and
description in those places shapes the model's understanding of the brand
itself, not just its findability.

*Applies:* every client, early. Cheap and often badly neglected.
*Check:* name consistency, description consistency, factual accuracy. Flag
near-name collisions explicitly — BD found SKIN111 vs SKINIII being confused
across surfaces, almost certainly suppressing one of them. That's a concrete,
demonstrable audit finding and a strong conversation opener.

### E2. Community engagement must be substantive and disclosed — **High** (CD)
Find threads that genuinely matter and reply with real context: "I work at X,
here's how this applies to your specific case." Never sockpuppet — it's both an
ethics problem and a detection problem.

*Applies:* where the engine actually cites the platform. Reddit is a
ChatGPT/Perplexity lever and near-worthless for Gemini — check `verified-data.md`
for the split before allocating effort.

### E3. Digital PR is the engine — **High** (CD, strongly corroborated)
Publish genuinely citable original research, brief journalists, hold
differentiated opinions, earn placements. Niche trade blogs through to national
press; the more novel and on-trend, the more likely to be cited.

*Corroboration:* independent synthesis of 680M+ citations concludes GEO is
operationally an extension of PR. Aligns with Brandure's own position that the
overwhelming majority of non-paid AI citations come from earned media rather than
brand-owned domains.
*Implication:* on-site work is hygiene; **placement is the product.** Price and
scope accordingly.

### E4. Source mapping is the core diagnostic — **High** (CD)
Identify which specific pages and domains ground the answers for a client's
prompt set, how often each is retrieved, and which brands appear inside them.
Then either create that content type or earn placement inside the existing
sources. Diagnostic question: *what content type is missing from this brand's
footprint that competitors have?*

*Applies:* this converts AEO from opinion into a plan. Do it before proposing
anything.
*Note:* CD demonstrates this via Searchable's sources view. The method is sound
regardless of tooling — manual sampling produces the same map more slowly.

### E5. The self-published category listicle mechanic — **Medium, time-limited** (BD)
Brands publishing criteria-based "10 Best [category] in [city]" listicles about
their own category, ranking them organically, and getting ingested by engines as
neutral authority. BD found four independent instances across three surfaces and
two verticals — including Gemini naming Chambers and Legal 500 as its authority
while grounding the actual answer on a law firm's own blog.

*Applies:* Brandure's sharpest live demo. CD does not name this mechanic — it's
proprietary to Brandure's research.
*Breaks:* most exposed of anything in this library to being down-weighted. See
A3. Sell now, build the second act in parallel.
*Check:* re-verify the specific instances before showing them; they move.

---

## F. Local

### F1. For local-services clients, GBP work is AEO work — **High** (BD)
BD found Gemini rendering Google Maps place cards for clinics and dealerships and
a live-rate Google Hotels module for hotels. For those categories the lever is
Google Business Profile and product feeds first, content second.

*Applies:* clinics, dealerships, hospitality, professional services with
physical premises.
*Levers:* review velocity and rating, category selection, profile completeness,
photo cadence, Q&A seeding, rate/feed parity.
*Commercial note:* unglamorous, cheap to deliver, and most competitors selling
"AEO" are selling content only. Real differentiator.

### F2. Review volume drives some categories outright — **Medium** (BD)
In BD's scan, aesthetic clinics and used-car dealerships were ranked almost
purely on Google review count and star rating, with no editorial sources
anchoring the answer. Review velocity is the ranking lever there.

*Applies:* high-volume consumer local categories.
*Breaks:* professional and institutional categories, where editorial and
directory authority dominate.

---

## G. Measurement

### G1. Mentions and citations, not clicks — **High** (CD)
There is no Search Console for LLMs. Track brand mention frequency and citation
frequency per engine, per prompt, over time. Clicks are a lagging and
increasingly irrelevant proxy.

### G2. Never report a single blended visibility score — **High** (BD, verified)
Report per surface. A client who "ranks in ChatGPT" knows almost nothing about
the rest of the landscape — cross-engine domain overlap is measured at 11–12%.
Sell the audit as four separate visibility positions.

### G3. Sample properly or don't quote it — **High** (FP)
Logged out, clean profile, geo verified, n=3 minimum per prompt. Log the
Places/Maps module separately from the generated text answer — they frequently
disagree, and a brand can win one and lose the other. Never present signed-in or
n=1 data externally.

### G4. Standing rescan cadence — **High** (BD)
Point-in-time data decays fast. A fixed monthly or quarterly re-run of the same
cells tracks drift and becomes the retained reporting product rather than a
one-off audit.

### G5. Searchable — what it's for and what it isn't — **Medium** (BD)
Good as a client-facing dashboard: share of voice, per-engine citation tracking,
sources view showing which URLs ground competitor wins, agent queries against
citation data. **Not** a category-discovery tool — it needs a domain input to
instantiate a workspace. Manual multi-surface sampling remains the discovery
instrument.
*Check:* cross-check any Searchable prevalence figure against
`verified-data.md` before it reaches a client deck.
