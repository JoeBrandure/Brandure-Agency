# Measurement ownership: split by function

Date: 2026-08-11

Resolves the open question left by
`decisions/2026-08-11-client-reporting-deferred.md`, which deferred reporting
but did not settle whether Brandure still owns a proprietary measurement layer.
It does.

## Decision

Brandure retains a proprietary measurement layer, scoped to **prospect sweeps
and published research**. Searchable owns **client tracking and dashboards**.

The split is by function, not by tool preference:

| | Owned layer (Bright Data) | Searchable |
|---|---|---|
| Prospect sweeps — pre-sale, unsolicited | ✔ | |
| Published research and category indices | ✔ | |
| Client tracking, ongoing | | ✔ |
| Client dashboards and reporting | | ✔ |

## Reasoning

The published index is the lead generation mechanism, and it only works on data
Brandure owns and can publish.

Two things follow from that, and they are the whole argument:

- **Vendor-held data on vendor terms is not publishable as Brandure research.**
  An index built on a partner's platform is a partner's asset rendered in
  Brandure's colours. Publishing it means publishing on someone else's terms,
  subject to their permission, their continuity and their commercial interest.
  A lead generation mechanism that a third party can withdraw is not a lead
  generation mechanism.
- **A vendor's method is not a differentiator when competitors can buy the
  same access.** Anyone can sign the same partner agreement. Whatever Brandure
  could show from a shared platform, the next agency can show identically. The
  differentiator has to sit in something not purchasable — the prompt design,
  the category selection, the collection method, and the historical record none
  of the competitors thought to start building.

Client tracking has neither property. It is not published, it is not a
differentiator, and the client wants a dashboard that works rather than one
Brandure built. Buying it is correct: dashboards are commodity, and building one
is weeks of solo evenings that produce no advantage.

This also reconciles the two prior records rather than overturning either. The
8 August case for owning measurement — control of method, ownership of raw data
as a reusable asset — was right about the pre-sale and research surface and
wrong to extend it to client reporting. The 11 August deferral was right about
client reporting and overreached in casting Searchable as the measurement layer
generally.

## Consequences

**Bright Data moves off the client delivery path and onto the marketing path.
Same necessity, lower urgency.** It is still required — the published index
cannot exist without it — but nothing a client is paying for now waits on it,
so it stops competing with partner access for priority.

**`brandure-agency-measure` unblocks from Searchable partner access.** It is a
prospect-facing sweep, which puts it on the owned layer. This reverses the
dependency recorded earlier today. The manual method remains the intended first
version and needs no tooling at all.

**`brandure-agency-retainer-report` stays blocked on partner access.** It is
client tracking, which is Searchable's side of the split.

**`brandure-agency-citation-map` is the loose end.** It is client delivery work
that runs on the owned collection layer, so "Bright Data is marketing-only" is
not literally true. The clean reading: the owned layer is shared infrastructure,
and what changed is what paces it. Its build urgency is now set by the marketing
path, because client tracking — the thing that would otherwise have forced it —
is Searchable's. Client-facing citation work uses it when there is a client.
There is not one yet.

## Flagged risks

**Two measurement methods produce two sets of numbers.** A prospect swept on
Brandure's owned layer, then onboarded onto Searchable tracking, will not
show a matching baseline — different prompts, different sampling, different
capture. The pitch number and the first client report will disagree, and the
client will notice. This needs handling at onboarding: either re-baseline on
Searchable at the start of the engagement and present the sweep as a
pre-engagement finding rather than a tracked metric, or state the methodology
change explicitly in the first report. Decide it before the first client, not
during.

**The published index is an untested lead generation bet.** Assumption, not
evidence: that publishing a category index generates inbound enquiries from
buyers who matter. It is a plausible mechanism — it is the measurement-first
wedge made public, and it produces exactly the artefact a prospect cannot get
from their current agency — but no version of it has run. It is also a
recurring time cost, since an index is only interesting if it is updated.
Which category it covers depends on the vertical sprint.

**Publishing has terms attached.** Collecting via Bright Data and publishing
model output both carry conditions worth reading before the first index goes
out, not after.

## What would reverse it

- The published index failing as lead generation after a fair run. That removes
  the reason for owning the layer, and the honest response is to collapse
  measurement onto Searchable entirely rather than keep infrastructure whose
  justification has gone.
- Bright Data coverage, reliability or pricing failing at account setup. The
  split survives — the reasoning is about ownership, not about a supplier — but
  the collection provider changes.
- Searchable offering data ownership and publication rights on terms that make
  vendor-held data genuinely publishable as Brandure research. That would
  dissolve the first half of the argument; the second half, that a purchasable
  method is not a differentiator, would still stand and would still need
  answering.
- The maintenance cost of running two measurement paths exceeding what a solo
  operator can carry. This is the most likely failure mode in practice. If it
  bites, the index is the part to keep and prospect sweeps fold into it.
