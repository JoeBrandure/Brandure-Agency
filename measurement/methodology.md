# Measurement methodology

The operational standard for client measurement. Referenced by
`decisions/2026-08-12-searchable-measurement-capability.md`, which sets the
principles this file implements.

Applies to client engagements running on Searchable. Prospect sweeps and
published research run on the owned layer and follow
`research/vertical-sprint/README.md` instead — see
`decisions/2026-08-11-measurement-ownership-split.md` for the split.

## Day-zero baseline protocol

Run before any optimisation work begins. A baseline captured late is not a
baseline: history windows cap at 365 days and cannot be backfilled prior to
domain connection, so a missed day zero cannot be recovered.

1. **Connect the domain.** Everything below depends on it, and nothing before
   connection is retrievable.
2. **Define the tracked prompt set.** Buying-intent prompts, market elicited
   per `CLAUDE.md` — never inferred.
3. **Define the control prompt set.** See design rules below.
4. **Capture and record initial values:**
   - Visibility score (composite)
   - Per-prompt mention counts
   - Share of voice versus named competitors
   - Cited source domains
   - Sentiment
   - GA4 AI-referral baseline
5. **Record the capture date, and the tool version and plan tier used.** A plan
   change alters what is measurable; a comparison across a tier change is not a
   like-for-like comparison and must be labelled.

Write the baseline to `clients/<client-slug>/baseline-YYYY-MM-DD.md`. It is
frozen once captured — never edited in place, per the frozen-inputs rule in
`templates/skill-template.md`. A correction is a new dated file.

## Control set design

The control set is what separates Brandure's impact from everything else moving
at the same time — model updates, competitor activity, index refreshes. Without
it there is a correlation and no result.

Rules:

- **Same category** as the tracked set.
- **Comparable competitiveness.** A control set of easy prompts will drift
  upward on its own and understate the tracked set's divergence; a set of
  impossible ones will sit flat regardless and overstate it.
- **Never targeted by optimisation work** for the duration of the engagement.
  This is a delivery constraint, not just a measurement one: content, entity
  and placement work must all avoid the control prompts.
- **Fixed for the engagement.** Changing the control set mid-engagement
  destroys the comparison it exists to support.

State the control set to the client at onboarding. A client who does not know
some prompts are deliberately unoptimised will read them as neglected work.

## Metrics logged per reporting cycle

Every cycle, for both tracked and control sets:

| Metric | Notes |
|--------|-------|
| Visibility score | Composite. **Never logged alone** — always with its raw components below. |
| Per-prompt mention counts | Raw. Survives a vendor methodology change. |
| Share of voice % | Versus the named competitor set, unchanged from baseline. |
| Citations per prompt | Raw count. |
| Cited source domains | With content-type and source-type split where available. |
| Sentiment | Summary, plus head-to-head where the competitor set warrants it. |
| GA4 AI-referral sessions | Per LLM host. |

The composite score is proprietary and unauditable. If Searchable changes how
it is calculated, every claim resting on the score alone becomes unverifiable
retrospectively — the raw components are what make a historical claim
defensible.

## Reporting cadence and contents

**Monthly** for retained engagements. **Start and end** for a fixed-scope
sprint, with no interim report — a sprint short enough to need one is short
enough that the interim reading is noise.

A client-facing report contains:

1. Movement on the tracked set since last cycle and since baseline.
2. Movement on the control set over the same period.
3. The divergence between the two, stated plainly — this is the result.
4. Raw components behind every score quoted.
5. What was done in the period, and which movements it plausibly explains.
6. What comes next.
7. The limitations section below, stated rather than buried.

## Case study standard

**No uplift claim is publishable without all three:**

- A day-zero baseline
- A control set showing divergence
- Raw component metrics

A score delta alone is not publishable. Neither is a tracked-set rise with no
control, because it cannot be distinguished from the category moving.

This standard applies to Brandure's own marketing, the published index, pitch
material and any figure quoted to a prospect. It is stricter than the industry
norm deliberately: the wedge is measurement credibility, and a single
unfalsifiable claim costs more than the case study earns.

Vendor benchmarks are not case studies. Searchable's published figures do not
appear in Brandure material — see decision 6 in
`decisions/2026-08-12-searchable-measurement-capability.md`.

## Known limitations — state these in client reporting

Plainly, in the report, not in a footnote:

- **Attribution is correlational.** The control set strengthens the inference
  considerably. It does not make it causal, and no available method does.
- **GA4 referral data under-counts.** Most AI citations do not produce a click.
  A brand can be cited heavily and show little referral traffic, and that is a
  normal result rather than a failure — the citation is the outcome, the click
  is a by-product.
- **Visibility moves for reasons outside Brandure's control.** Model updates,
  index refreshes and competitor activity all move the numbers. This cuts both
  ways: a rise that Brandure did not cause is as likely as a fall it did not
  cause, and the control set is what makes the difference legible.

Stating these up front is a commercial position, not a disclaimer. A client who
learns about the limitations from someone else discounts everything else in the
report.
