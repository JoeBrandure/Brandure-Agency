# Demand signals — method and capture

Date: 2026-08-12

## STATUS — instrument substituted, 2026-08-15

**The 15 August demand pass did not use this method as its primary
instrument.** See `research/vertical-sprint/demand-pass-2026-08-15.md`.

**What happened.** The pass was specified to count buyer-side complaint
instances against the bands below. It found almost none — in any vertical,
including ones with overwhelming independent evidence of buyer demand. What it
found in volume instead was supply-side saturation: specialist AEO agencies,
tools and benchmark reports already targeting every vertical on the shortlist.

**The bands were not applied, and applying them would have been wrong.** The
threshold — 15 instances, 5+ in classes 1–2 — assumes an instrument that
returns signal. This one returned near-zero everywhere, so the bands would have
failed all six verticals uniformly, including B2B SaaS, where a Forrester survey
of ~18,000 buyers reports 94% using AI during their most recent purchase. A test
that fails a vertical with that evidence behind it is not measuring what it was
built to measure.

The pass substituted **trade and industry survey data** as the primary
instrument. It is recorded as a substituted instrument, not a band evaluation.

**The bands remain ratified and are not withdrawn.** They stay valid for any
future pass in a vertical where forum signal actually exists. What the 15 August
pass establishes is that marketing decision-makers rarely post publicly about
visibility problems, so this instrument should not be the *primary* one for
this category of question. The method below is unchanged and still correct for
what it does.

A method change is proposed in the demand pass file and **is not ratified** —
see its Open Items.

---

The demand-listening pass. Companion to the prompt sprint in
`research/vertical-sprint/README.md`, which measures a different thing.

Raised in `research/sources/2026-08-12-donnelly-searchable-playbook.md`, where
the demand step is identified as the one usually skipped.

## Framing — why this exists

**Answer-surface weakness and buyer complaint volume are independent axes.**
The prompt sprint measures the first. Nothing has measured the second.

A category can have a wide-open answer surface and no buyer who has noticed.
That combination is not an opportunity — it is an education project.

Together the two axes determine **sales cycle length**:

| | Buyers complaining | Buyers not complaining |
|---|---|---|
| **Weak answer surface** | Short cycle. Buyer already knows they have the problem and is looking for someone to fix it. | Long cycle. Education-led selling: convince them the problem exists, then that it matters, then sell. |
| **Strong answer surface** | Short cycle but hard delivery. Buyer wants help; the surface is difficult to move. | No opportunity. |

**A weak answer surface with no complaining buyer requires education-led
selling with a long cycle, which a solo operator working 15–20 hours a week
cannot afford as a first vertical.** Education-led selling is a volume game
against a fixed conversion rate, and the hours are not there. It is a viable
second or third vertical once there are case studies doing the education.

**Therefore demand signal is weighted above visibility gap in vertical
selection.** A vertical must pass both criteria, but where two verticals both
pass, the one with the stronger demand signal wins regardless of which has the
wider visibility gap.

This weighting is an inference from the capacity constraint, not a measured
finding. What would falsify it: a vertical with no complaint volume converting
on a short cycle anyway, which would mean the buying trigger sits somewhere
this method does not look.

## Sources

- **Reddit** — r/SEO, r/bigseo, r/marketing, plus vertical-specific subreddits
  per category under test.
- **LinkedIn comment sections** under high-engagement AI-search posts. The
  comments, not the posts — the post is usually supply-side.
- **Agency-owner communities.**
- **Vertical trade forums and association boards.** The highest-value and
  lowest-volume source: a complaint on a trade board is closer to the buyer
  than anything on Reddit.

## Inclusion rule

**Only buyer-side people describing the problem unprompted, in their own
words.**

Excluded, without exception:

- Vendor posts
- Agency marketing
- Consultant thought-leadership

These are supply-side. They describe a market someone is selling into, not a
buyer who has a problem.

**This exclusion is the point of failure for the method. Police it.** The
supply side is louder, better optimised for engagement, and vastly more
numerous — search results for any AEO-adjacent term are dominated by people
selling AEO. A pass that does not aggressively exclude them will return a
confident count of fifteen instances, all of them agencies talking to each
other, and will read as strong demand for exactly the reason it is worthless.

When a poster's side is unclear, check their history before including. An
ambiguous case is excluded.

## Recency

**Six months maximum.** Anything older is a different market — model behaviour,
buyer awareness and the vendor landscape have all moved.

## Signal classes

In descending weight:

1. **Traffic or lead loss attributed to AI search.** The strongest signal: the
   buyer has connected an outcome they care about to the cause.
2. **Actively evaluating AEO vendors or tools.** Budget is moving.
3. **Asking how to get started.** Aware, not yet committed.
4. **General interest or commentary.** Aware the category exists.

**Only classes 1 and 2 are buying signals.** Classes 3 and 4 are awareness, and
awareness is what makes a long cycle long.

## Review trigger — bands and pre-committed responses

**Ratified 2026-08-12.** Section A of
`decisions/2026-08-12-channel-strategy.md`. This file is the operative copy.

**A review trigger, not a gate.** There is no measured basis for these numbers
— no prior Brandure funnel exists to derive them from. They are legibility
thresholds, not forecasts, and their function is to force a stop-and-reassess
at a pre-committed point rather than continuation on momentum. Full definition
and governing rules in the channel strategy record.

| Band | Reading | Response |
|------|---------|----------|
| **15+ instances, 5+ in classes 1–2** | Viable as first vertical. | Lead with it. |
| **8–14 instances, 3+ in classes 1–2** | Contestable. | Hold as reserve. Do not lead with it. |
| **Under 8 instances** | Education-led selling. | Not affordable as a first vertical at 15–20 hours a week. |

Distinct means distinct people. One person posting five times is one instance.

**Both halves of a band must be met.** Fifteen instances that are all class 3
and 4 is an aware market that is not yet buying — it does not reach the top
band on volume alone, and drops to the band its class 1–2 count supports.

### Governing rules

Full statement in `decisions/2026-08-12-channel-strategy.md`. In short:

- **One re-test per vertical.** A re-test landing in the middle band again is
  treated as the bottom band. Persistent ambiguity is the answer.
- **Mitigating circumstances are pre-registered**, recorded below on the day the
  window opens for a given vertical. Nothing added afterwards counts.
- **Track instances per source as a leading indicator**, not only the running
  total, so a source returning nothing is visible early. Leading indicators
  inform; the trigger fires at the end of the window on the full count.

### Pre-registered circumstances

Recorded per vertical when its measurement window opens. An empty list is valid
and is written down as one.

_None registered — no window has opened._

## Collection and classification

Collection runs via the `brightdata-plugin:brand-listening` skill.
Classification is manual — signal class is a judgement about what a person
means, and the inclusion rule above is exactly the judgement an automated pass
would get wrong.

**Dependency flag:** the Bright Data account is not yet set up
(`STATE.md`, blocked), and the plugin skill has not been verified as available
in this environment. Until both are confirmed, this method is unrunnable as
written. Manual collection is viable at this volume — fifteen instances is a
small number — and is the sensible first version rather than a reason to wait.

## Capture

One row per instance. No example rows — the table records observed instances,
and a fabricated row is indistinguishable from a real one once context is lost.

| Date captured | Source URL | Poster role/company type | Vertical | Paraphrased complaint | Signal class | Notes |
|---------------|------------|--------------------------|----------|-----------------------|--------------|-------|

Column notes:

- **Source URL** — the specific comment or post, not the thread. Instances
  become unverifiable when the link points at a moving target.
- **Poster role/company type** — enough to establish buyer-side. "In-house
  marketing lead, mid-size law firm" qualifies; "marketer" does not.
- **Paraphrased complaint** — in the poster's own framing, not translated into
  AEO vocabulary. A buyer saying "our enquiries dropped and I can't work out
  why" is a class 1 signal; rewriting it as "experiencing AI search visibility
  loss" imports a diagnosis the buyer did not make and destroys the evidence.
- **Signal class** — 1 to 4 per the scale above.

## Results

Not yet run. Record per-vertical outcomes here as passes and fails, with the
instance count and the class 1–2 subcount, so a vertical that fails can be
re-tested later against the same bar.
