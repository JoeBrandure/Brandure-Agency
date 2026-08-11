# Markets are elicited, never inferred

Date: 2026-08-11

## Decision

Markets are never inferred when instantiating a prompt template. The market is
elicited per run — including whether a market applies at all.

Stated as a standing rule in `CLAUDE.md`, enforced in the Inputs section of
`templates/skill-template.md`, and applied per vertical in
`research/vertical-sprint/README.md`.

## Reasoning

**The reasoning below is inference, not finding. None of it has been
measured.**

The assumed split is between categories bought locally and categories bought
irrespective of location.

- **Locally bought — legal, health and aesthetics, hospitality.** Assumed to
  need a market, on the reasoning that without one the query is too broad to
  resolve to businesses and returns directories, aggregators and listicles
  instead. A measurement that surfaces only directories records nothing about
  which businesses a model recommends, because the model was never asked to
  recommend one.
- **Bought irrespective of location — B2B SaaS.** Assumed to be distorted by
  adding a geography, on the reasoning that buyers search for the tool rather
  than for a tool near them. Inserting a city is assumed to shift the answer
  into a local-services shape — regional resellers, implementation partners,
  agencies — which is a different question from the one the category is
  actually bought on.

**This local/non-local split has not been measured.** It is a plausible model
of category behaviour derived from how these categories are bought, not
evidence of how answer engines respond to them. The 2026-08 vertical sprint is
its first test, and it tests the split as a by-product of testing the
verticals: the sprint covers three assumed-local categories and one
assumed-non-local one, and logs market per prompt.

What does not depend on the split is the decision itself. Elicitation is
correct whether or not the split holds — asking costs one question, and the
question is only unnecessary if you already know the answer for that category,
which is precisely what is not yet known. The split determines what the sensible
default answer is per category, not whether to ask.

The narrower point that survives regardless: a sweep run with a market and a
re-run without one are two different measurements, not two readings of the same
one. If which was used is not recorded, the two are indistinguishable in the
log and any comparison across them is silently wrong.

## Relation to the external-writes rule

See `decisions/2026-08-11-external-platform-writes.md`. Both rules exist to
prevent silent corruption of comparability, arriving by different routes.

That rule guards the record against being altered after the fact. This one
guards it against being incomparable from the outset — a baseline and a
re-measure that were never asking the same question. In both cases the failure
is invisible: nothing errors, nothing looks wrong, and the numbers still look
like numbers. Both are cheap to prevent at the point of the run and impossible
to detect later, which is the shared reason each is a standing rule rather than
a matter of judgement per skill.

## What would reverse it

Sprint evidence of a category behaving against the split:

- A locally bought category returning usable business-level results **without**
  a market — named firms and clinics rather than directories.
- B2B SaaS returning materially different citation sets **when** a market is
  added, rather than the assumed shift into local-services results.

Either would mean the split is the wrong axis. Elicitation would then be driven
by observed behaviour per category — a recorded default per vertical, derived
from what the sweeps actually returned — rather than by an assumed rule about
how the category is bought.

Note what this does not reverse: the requirement to ask, and to log which
choice was made. That survives any finding about the split, because it is what
makes the finding legible in the first place.
