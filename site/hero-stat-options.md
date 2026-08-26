# Hero card options — statistics and statements

Options for the four cards beside the hero headline. Written because the first
set described Brandure's own method, which is of no interest to someone who has
not yet heard of AEO.

**Read the status column before using any of these.** This site sells
measurement. A number that turns out to be a vendor's marketing claim, or a
prediction that has already failed, costs more credibility than it buys.

| Status | Means |
|---|---|
| **A — verified** | Independent, non-commercial research. Sample and date published. Checked across two independent search passes that agreed on every value. |
| **B — first-party, large sample** | A vendor's own study. The sample is stated and large, but the vendor sells into this category and did not publish its method for review. Attribute by name on the page. |
| **C — needs checking** | Widely repeated, plausible, primary source not confirmed from this environment. Do not publish until someone opens the source. |
| **D — statement** | Not a statistic. No sourcing risk, and no sourcing strength either. |

One structural rule for all of these: **lead with the number that carries the
finding.** The original card led with 8% when the finding is that clicks roughly
halve. 8% on its own reads as small; the loss is what is large.

---

## A — verified

All four are the same study: Pew Research Center, *Do people click on links in
Google AI summaries?*, 22 July 2025 — 68,879 Google searches by 900+ US adults,
browser-tracked through March 2025.

They describe **Google AI Overviews specifically.** Any card built from them has
to say so; stretching a Google-only sample to cover ChatGPT and Perplexity is
the move this agency sells against.

**1. 47% — clicks lost** *(live)*
> of result clicks disappear when an AI summary is on the page. 15% of Google
> visits end in a click without one; 8% with.

Derived: 1 − 8/15 = 46.7%. State both raw values so the arithmetic is checkable.

**2. 1% — not a traffic channel** *(live)*
> of visits end in a click on a link inside the summary itself. Being cited is
> not a traffic channel — being named is the win.

The strongest card for explaining why AEO is not just "SEO for ChatGPT".

**3. 53% — buying intent** *(live)*
> of searches ten words or longer return an AI summary. Short searches: 8%.
> Long, specific questions are how people search when they are choosing.

**4. 18% — already, not "coming soon"**
> of all Google searches already returned an AI summary in March 2025. Not a
> forecast — a count, taken over a year ago.

Answers "is it too early". Useful if the objection you keep hitting is timing.

---

## B — first-party, large sample

**5. 84% — the answers are built from other people's pages**
> of AI citations point at earned media rather than a brand's own site.
> Analysis of 25m+ links cited by ChatGPT, Claude and Gemini, May 2026.

Directly supports the "your website is not what decides" argument. Attribute the
publisher by name on the page.

**6. 90% — same finding, second sample**
> of AI citations link to sources the brand does not control. Foundation
> Marketing, 57m citations.

Use one of 5 or 6, not both. Two vendor studies stacked reads as padding.

**7. 42% — AI-referred shoppers convert better**
> better conversion than non-AI traffic on US retail sites, March 2026. Adobe
> Analytics.

The optimistic card. Adobe is the strongest name in this tier and publishes this
series regularly.

**8. 4.4× — the same point, bigger claim**
> average conversion advantage for AI-referred visitors over organic search.
> Semrush, 2026.

Higher number, weaker provenance than Adobe. Prefer 7 unless you want the
bigger figure and can live with the vendor attribution.

**9. 23× — the strongest version of the same claim**
> conversion rate of AI search visitors against traditional organic: 0.5% of
> traffic drove 12.1% of signups. Ahrefs, own product data.

One company's own funnel. Only use with "Ahrefs found, on its own product" in
the card. It is the kind of number a sceptical buyer will push back on, which
may be exactly what you want in a sales conversation and exactly what you do not
want on a homepage.

---

## C — needs checking before publishing

**10. ChatGPT weekly users.** Reported at 900m (OpenAI, February 2026) and
around 1bn by mid-2026, though the 1bn figure was not confirmed by OpenAI in the
sources seen. Use the 900m February figure, or wait for a confirmed one.

**11. Share of AI answers that name three or fewer brands.** The core AEO
argument — a shortlist, not a list — and I could not find a properly sampled
public figure for it. **This is a gap Brandure could fill with its own scan**;
see the note at the end.

**12. Zero-click rate on AI-summary searches.** Widely quoted around 60–70%
across trackers with methods that do not agree. Not usable without picking one
tracker and citing it.

**13. Proportion of B2B buyers using AI tools in vendor research.** Numerous
survey figures in the 60–90% range, all vendor-run, none checked. Plausible and
unusable as it stands.

**Not to be used at all: Gartner's "search engine volume will drop 25% by
2026"** (February 2024). It is the most-quoted figure in this category and its
own deadline has now passed without it happening. Publishing a failed prediction
on a site that sells measurement would be self-defeating.

---

## D — statements, no sourcing risk

Useful where a card should carry the argument rather than a number. Set the
figure as a word or a short phrase rather than a percentage.

**14. Four, measured separately** *(live)*
> answer engines measured separately — ChatGPT, Perplexity, Gemini, Google AI
> Overviews. Never one blended score.

**15. Zero guaranteed positions**
> positions we guarantee. Answer engines change how they ground answers without
> notice. We measure, act on the causes we can influence, and measure again.

Sets the honesty flag early. Strong with a sceptical buyer, weak with an
impulsive one.

**16. One control set**
> group of questions we deliberately leave alone, so a change can be attributed
> rather than asserted. Without it you have a number that went up.

**17. Three causes, three different jobs**
> reasons an AI leaves you out — it does not know you, cannot find you, or
> prefers someone else. Anyone quoting a fee before finding out which is
> guessing.

**18. Free**
> cost of the first report. It is a real measurement, not a teaser — you can act
> on it whether or not you engage us.

---

## The alternative: client result cards

The reference layout puts four client results here, each with a logo, a
percentage and a rising arrow. That shape is built into the page already.

**To switch:** set `HERO_MODE` to `'cases'` in `src/data/content.ts` and fill in
`HERO_CASES`. No markup change.

The placeholders currently there are zeroes with instructions in the caption,
and the page prints a "Placeholder" flag beneath them. **That flag must not come
off until the figures are real.** The whole proposition is that Brandure
measures rather than asserts; invented client outcomes on the homepage would
contradict it on the first screen.

What each card needs to be publishable:

- the brand, with permission to name it;
- a change that was measured, not estimated;
- which engine it applies to, since they disagree;
- the date range;
- the control-set figure alongside it, or the number means nothing.

A percentage without a base is the weakest form of this. "Named in 11 of 20
tracked prompts, up from 2" is worth more than "+450%", and it is harder to
argue with.

---

## Worth considering: publish your own figure

Item 11 above is a real gap — there is no well-sampled public number for how
many brands an AI answer typically names. Brandure already runs multi-engine
scans and already publishes method alongside findings.

A card reading **"3.2 — brands named in the average answer across 7 categories,
our own scan, Dubai, August 2026"** would be the only sourced figure on the page
that belongs to Brandure, and the only one a competitor cannot also quote. It
would need a bigger sample than the current run supports — the 13 August scan is
n=1 per cell — so treat it as a reason to widen the next scan rather than a card
that can go up now.
