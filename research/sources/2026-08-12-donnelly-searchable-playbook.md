# Chris Donnelly — building a business, and personal brand

Date: 2026-08-12

Source note on two Chris Donnelly YouTube videos. Donnelly is co-founder and
CEO of Searchable, the AEO platform Brandure uses for client tracking — see
`decisions/2026-08-11-measurement-ownership-split.md`.

**Locators not recorded.** The two videos are not linked here because URLs were
not supplied. A source note without a locator cannot be re-checked, which
weakens every claim attributed to it. Add them.

## Credibility note — read before using anything below

This is a retrospective narrative from a fourth-time founder with a
pre-existing 3M-follower audience, venture backing and two technical
co-founders. None of those conditions apply to Brandure.

He also sells Searchable. His framing of the AEO opportunity is vendor
commentary, not independent validation of the category.

**Treat the process as useful and the outcome claims as unreliable.** The
sequencing, the frameworks and the specific mechanics are worth taking. The
numbers attached to them were produced by a distribution advantage that is not
being replicated here, and a retrospective account reliably reconstructs a
clean causal story from a messier one.

---

## Video 1 — building a business

Applied to the agency build. Active now.

### CODE validation framework

**C**onsumer trends, **O**pportunity, **D**emand, **E**conomic sizing.

**Demand is the step usually skipped.** He spent a month reading forums,
subreddits and LinkedIn comment sections looking for the same complaint
repeating in the buyer's own words.

This is directly relevant to the vertical sprint. Prompt-based visibility
research tests whether brands are *visible*; it does not test whether buyers
are actively *complaining*. Those are different questions and both are needed:
a category can have a weak, contestable answer surface and no buyer who has
noticed or cares. The sprint measures the first. Nothing in
`research/vertical-sprint/` currently measures the second.

### Existing competitors are a positive signal

They prove budget exists. Applied to Brandure: **AEO is a reallocation of
existing SEO budget, not a new budget line.** That is the pricing argument —
the buyer already spends on organic visibility, and the question is which line
it comes from rather than whether the money exists at all.

Relevant to the pricing work that `STATE.md` currently has blocked.

### Economic sizing

His formula: total potential customers × total customer spend.

**TAM is the wrong model for a solo agency.** Sizing here is capacity-bound,
not demand-bound. The working model:

```
available hours per week ÷ delivery load per client = client ceiling
revenue target ÷ client ceiling = price floor
```

That inverts his formula — market size is irrelevant when the constraint is
evenings. It also makes the capacity model (`STATE.md`, open) a pricing input
rather than an operational nicety.

### MVP principle

One feature, one ideal client, one problem.

Agency translation: **a single fixed-scope, fixed-price productised sprint.**
Not a service menu, and not retainer-first before case studies exist. A menu
asks the buyer to design the engagement; a sprint asks them to buy one.

Bears directly on the service definition blocked in `STATE.md`.

### Founding-customer discount

Discounted access in exchange for daily feedback and case study rights. He used
a lifetime 50% discount.

**Flag — do not copy the lifetime term.** Lifetime discounts are safe in SaaS,
where marginal cost per additional customer is near zero. In services the
marginal cost is founder hours, and a permanent 50% discount on a
capacity-bound business permanently halves the rate on a slot that cannot be
duplicated. Time-box it: discounted for the first engagement or the first
quarter, then list price.

The trade itself is right. Case study rights are worth more than the margin
foregone when there are no case studies at all.

### Three-layer content machine

1. Founder content
2. GTM — warm list first, then cold outbound
3. AEO

### Cold outbound: diagnostic-first

Lead by diagnosing something specific and handing over a document. Do not lead
by asking for a demo.

This is the same shape as the measurement-first wedge already in `CLAUDE.md`,
arrived at independently — which is mild corroboration, not evidence.

### Gated lead magnet

A free AI visibility report, converting strangers into contactable leads.

Note the dependency: this is `brandure-agency-measure` running on the owned
layer, productised. It is the same artefact as the prospect sweep, gated.

### Scale stack

Apollo and LinkedIn for data, Clay for enrichment, then personalised outbound.

Also: **boost organic content that already performed** rather than testing cold
paid creative. Cheaper signal, and the creative has already passed a test.

### Later-stage play

A paid multi-week live training programme, used as both a lead source and a
retention mechanism. Noted, not near.

### Claims to discount — video 1

- **Waitlist opt-in rates of 50–70%** and **free-to-paid conversion around
  50%.** Both measured against an already-engaged audience, not cold traffic.
  Not a benchmark for anything Brandure runs.
- **"The mechanism works identically at 100 followers and 100,000."**
  Contradicted by his own execution, which used the 3M-follower audience at
  every stage. The mechanism may well work at small scale; this account is not
  evidence that it does.

---

## Video 2 — personal brand

**STATUS: REFERENCE ONLY, DEFERRED.** Not active now. Activates at the outbound
and scale phase. Logged so the mechanics are on record when that phase arrives,
not to be acted on in the meantime.

### Story exercises

Find 10 real memorable moments. For each, record what happened and what someone
else can learn from it. The three highest-connection types:

- A decision that looked wrong at the time
- What you gave up
- Public failure

### Content pillars

Three to four topics only. The test is the intersection of: what you are
already known for × what the audience would pay to solve × what you actually
sell.

### One platform until traction is consistent

Consistent rather than random. Then expand.

### Content pyramid

Short form finds people, long form builds trust, owned audience converts. The
owned list is the only layer not rented from an algorithm.

### Content waterfall

One long-form asset decomposes into roughly 10 short posts, 3 clips and one
newsletter.

**For Brandure the long-form source is the published research index.** This is
the point that makes the index affordable for a solo operator: the index is
already justified as the lead generation mechanism in
`decisions/2026-08-11-measurement-ownership-split.md`, and the waterfall means
its content cost is amortised across a month of posts rather than paid once for
a single publication.

### Metrics that matter

Saves, shares, and new followers per post. Not views or likes.

### Outlier pre-validation method

Take 4–5 creators with overlapping audiences. Review their last 30 posts.
Identify any topic generating roughly 5× the shares of their baseline. If the
same topic outperforms across 3–4 profiles, treat it as pre-validated.

### Four reusable Claude prompt patterns

1. Assess whether draft content pillars are specific enough and aligned to ICP
   search behaviour.
2. Decompose one long-form piece into 10 short posts, 3 sub-60-second video
   scripts and one newsletter, in a consistent tone.
3. Extract common topics, formats and hooks from a set of high-performing
   competitor and own posts, then write new posts in own voice following those
   patterns.
4. Generate three lead magnet concepts that solve a real problem before asking
   for anything.

### Claims to discount — video 2

- **"20× more likely to follow a person than a company."** Unsourced. No study,
  sample or date given.
- **The 400k-reach waterfall example.** Assumes an existing 3M following. The
  waterfall mechanic may hold; the reach figure is a function of the audience,
  not the method.
- **The webinar layer.** Premature for a solo agency until the owned list
  exceeds roughly 500. Below that the attendance maths does not work.

---

## What this changes

Nothing yet. This is a source note, not a decision. Two items are worth
promoting to decisions when the relevant work is unblocked:

- **Demand research as a sprint companion.** The vertical sprint tests
  visibility; it does not test whether buyers are complaining. Adding a
  forum/subreddit/comment-section pass per vertical would test the second, and
  the two together are a much stronger ICP input than either alone.
- **Fixed-scope productised sprint over a service menu.** Directly relevant to
  the blocked service definition, and it argues against the retainer-first
  shape currently implied by `brandure-agency-retainer-report`.
