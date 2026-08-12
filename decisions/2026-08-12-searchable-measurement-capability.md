# Searchable measurement capability confirmed

Date: 2026-08-12

## Context

Brandure needs to prove citation and visibility uplift from its optimisation
work in order to build case studies. Without that, there is nothing to sell on
except assertion.

Searchable's public documentation and API reference were reviewed to confirm
the platform can carry that proof.

**Provenance:** the review was Joe's, on 2026-08-12, against public
documentation. It has not been verified against a live account — partner access
is still open, per `decisions/2026-08-11-client-reporting-deferred.md`. What is
documented and what a given plan tier actually exposes are different questions,
and only the first is settled here.

## Confirmed capabilities

- **Visibility history** as a time-series, one point per report, up to 365
  days.
- **Share-of-voice history**, daily, brand versus top competitors, up to 365
  days.
- **Per-prompt and per-topic visibility breakdowns.**
- **Citation sources layer:** top cited source domains, the AI responses that
  cited a given domain, per-URL citation analytics, and content-type /
  source-type distributions with per-competitor breakdowns.
- **Sentiment** summary and history, including head-to-head competitor
  comparison.
- **GA4 AI-referral visitors** broken down per LLM host, plus GSC integration.
- **First-party AI crawler and referral-session tracking** via log drains,
  including a Netlify Edge Function and a Netlify HTTP log drain — compatible
  with the planned Astro/Netlify build.
- **Per-URL rollup** joining citations, AI-referral sessions and crawler hits
  for a single page.
- **Shareable reports with white-labelling**, gated behind a
  white-label-entitled plan.
- **REST API and MCP integration.**

## Correction to a prior assumption

**Citation-source analysis is a first-class Searchable feature, not a gap.**

Earlier reasoning treated the citation map as something Brandure would have to
build. It does not. The platform already surfaces which domains get cited, which
responses cite them, and how that splits by competitor and content type.

The differentiator moves accordingly: **the tool diagnoses, the agency
executes.** Brandure's value is not knowing which earned media gets cited — it
is getting the client placed into those sources. That is the work a platform
cannot do, and `research/sources/2026-08-12-donnelly-searchable-playbook.md`
supports the same reading from the vendor's own framing of the category.

This narrows `brandure-agency-citation-map` rather than deleting it. Client-side
diagnosis is Searchable's; the owned-layer version still has a job on prospect
sweeps and the published index, where there is no client account to read from.
Flagged in `STATE.md` for reconciliation against `registry/skills.md`.

## Decisions taken

1. **Log raw underlying metrics alongside any composite score.** Mention
   counts, share-of-voice percentage and citations per prompt go into every
   baseline and every report, next to the visibility score. The composite score
   is proprietary and unauditable; a methodology change on Searchable's side
   would retroactively invalidate any case study claim resting on it alone.
   Raw components survive a vendor recalculation.

2. **Run a control prompt set on every engagement** — tracked but deliberately
   not optimised. Without it, Brandure's impact cannot be separated from model
   updates, competitor activity and index refreshes. A visibility rise with no
   control is a correlation presented as a result.

3. **Baseline capture on day zero of every engagement.** History windows cap at
   365 days and cannot be backfilled prior to domain connection. A baseline
   missed at the start is not recoverable later, and the engagement then has no
   provable before-state.

4. **Default measurement stack is prompt visibility plus GA4.** First-party
   log-drain tracking is an upsell for technically capable clients, not an
   onboarding requirement. Requiring it would block clients who are not on
   agency-managed hosting, which is most of them.

5. **Price engagements on work delivered.** Do not itemise the Searchable
   licence on client invoices — list-price transparency exposes margin.

6. **Vendor benchmark noted for reference, not for use.** Searchable publicly
   cites an average 22% increase in AI-driven traffic within 60 days for
   enterprise customers. It is a vendor claim about enterprise customers, and
   it does not belong in any Brandure pitch, proposal or case study. Brandure
   quotes its own measured results or none.

## Open item

**Confirm which plan tier carries white-label report entitlement, and whether
the Agency Partner Programme includes it.** Client-facing reporting depends on
it — see `decisions/2026-08-11-client-reporting-deferred.md`, which is still
blocked on partner access. If white-labelling sits above the tier Brandure can
justify, the Looker Studio fallback comes back into play.

## What would reverse it

- **Live account access contradicting the documentation.** The capability list
  is documented, not observed. Anything that turns out to be tier-gated,
  rate-limited or absent in practice changes what the methodology can promise.
- **Searchable changing its composite score methodology.** Decision 1 is
  written to survive this, which is the point — but a change large enough to
  affect the raw components too would require re-baselining every live
  engagement.
- **A control set proving unworkable in practice** — for instance if
  optimisation work unavoidably lifts the control prompts, making divergence
  unmeasurable. That would not remove the need for a control, but it would
  change how the set is designed. See `measurement/methodology.md`.
