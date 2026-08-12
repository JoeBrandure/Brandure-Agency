# STATE.md — current position

Last updated: 2026-08-12 (demand-listening method instrumented; citation-map
narrowed; content log empty by decision)

Current position at a glance. Update this file whenever something moves between
sections. It is the first thing to read at the start of a working session.

## Built

Entries here mean the work is in the repo. Nothing is listed on the strength of
having been instructed — if it is not on disk and committed, it is not built,
and a section below records what was raised and left undone. Verify against the
repo before building on anything here.

- Repo foundations: directory structure, `CLAUDE.md`, `README.md`, skill
  template, registries, decision records, vertical sprint brief.
- Vertical sprint prompt templates: four files, 20 buying-intent prompts, at
  `research/vertical-sprint/templates/`.
- Decision record set covering repo-as-source-of-truth, naming convention,
  branch policy, vertical shortlist, and the measurement stack.
- **Searchable measurement capability confirmed** against public documentation,
  and `measurement/methodology.md` written as the operational standard —
  day-zero baselines, control sets, raw metrics alongside every composite
  score, and the case study publishing bar. See
  `decisions/2026-08-12-searchable-measurement-capability.md`.
- **Source note** on the Donnelly/Searchable playbook at
  `research/sources/2026-08-12-donnelly-searchable-playbook.md`. Process useful,
  outcome claims discounted — vendor commentary from a founder with a 3M
  audience.
- **`growth/content-log.md`** in place, structure only. **Empty by decision,
  not omission** — no seed or example rows, ever, since a content log records
  published output and an example row is indistinguishable from a real record
  once context is lost. Decided 2026-08-12, recorded in the file.
- **Demand-listening method instrumented** at
  `research/vertical-sprint/demand-signals.md`. Sources, buyer-side inclusion
  rule, four signal classes, and a pass threshold of 15 distinct buyer-side
  instances with at least 5 in classes 1–2. Not yet run.
- **`brandure-agency-citation-map` narrowed** to prospect sweeps and published
  index production, with an explicit exclusion from client engagements where
  Searchable's native cited-sources layer already covers it.
- **Delivery surface settled.** Delivery runs from Cowork; Claude Code builds
  and maintains this repo. The repo stays authoritative and Cowork consumes a
  packaged version. See `decisions/2026-08-11-delivery-surface.md`.
- **Measurement ownership settled.** Brandure owns the measurement layer for
  prospect sweeps and published research; Searchable owns client tracking and
  dashboards. The published index is the lead generation mechanism and requires
  data Brandure can publish. See
  `decisions/2026-08-11-measurement-ownership-split.md`.

## In progress

- Nothing. Foundations are complete; no work has started on top of them.

## Blocked

- **Vertical sprint** — designed and templated, not run. Needs no tooling, but
  no longer blocked on operator time alone: the prompt sets cannot be
  instantiated until Joe supplies markets per vertical and competitor names for
  the B2B SaaS and hospitality prompts. `research/vertical-sprint/prompts/`
  does not exist until then, per
  `decisions/2026-08-11-market-elicitation.md`. Still the highest-value item;
  everything below waits on it. **Selection rule:** a vertical must pass both
  the visibility gap and the demand signal, and where two verticals both pass,
  the stronger demand signal wins — see
  `research/vertical-sprint/demand-signals.md`.
- **ICP definition** — blocked on the vertical sprint. Cannot be written from
  first principles; needs evidence of which categories have weak, contestable
  AI answer surfaces.
- **Pricing** — blocked on ICP, and on real delivery hours per engagement,
  which is unknown until at least one delivery skill has been built and run
  end to end.
- **Client reporting** — deferred pending Searchable partner access. Format,
  cadence and delivery all unspecified until Searchable's output shape and
  export options are known. Looker Studio or equivalent is the fallback. See
  `decisions/2026-08-11-client-reporting-deferred.md`.
- **`brandure-agency-retainer-report`** — blocked on Searchable partner access.
  It is client tracking, which is Searchable's side of the split.
- **`brandure-agency-citation-map`** — needs the Bright Data account, which is
  not yet set up. No longer urgent: it runs on the owned layer only, and is now
  explicitly excluded from client engagements.
- **Demand-listening pass** — method written, not runnable as specified. Needs
  the Bright Data account and the `brightdata-plugin:brand-listening` skill,
  neither confirmed available. Manual collection is viable at this volume — 15
  instances — and is the sensible first version.
- **Service definition** — what is actually sold, and in what shape. Blocked
  on ICP and measured delivery cost.
- **`brandure-agency-package`** — bundles `.claude/skills/` into a plugin
  Cowork can consume. Blocked on there being a skill to package (currently
  none) and on the plugin layout not being scoped. Not urgent for that reason,
  but it sits between every delivery skill and the surface delivery runs from,
  so it stops being deferrable the moment the first skill is built.
- **Baseline reconciliation — decide before the first client.** Prospect sweeps
  run on the owned layer, client tracking on Searchable. The two will not
  produce matching numbers, so the pitch figure and the first client report
  will disagree. Either re-baseline on Searchable at onboarding and present the
  sweep as a pre-engagement finding, or state the methodology change in the
  first report. Not blocking now; blocking the moment a client signs.

**No longer blocked:**

- **`brandure-agency-measure`** — off the partner-access dependency. It is a
  prospect sweep, which puts it on the owned layer. The manual method needs no
  tooling and is the intended first version.

## Next

In order:

1. Run the vertical sprint. Buying-intent prompts across the four primary
   verticals, logged per `research/vertical-sprint/README.md`. Unblocks ICP.
   Run the demand-listening pass alongside it, per
   `research/vertical-sprint/demand-signals.md` — the two axes are independent
   and a vertical needs both. Manual collection is fine at 15 instances; do not
   wait on Bright Data.
2. Build the manual version of `brandure-agency-measure`. Unblocked, needs no
   tooling, and it is the wedge artefact shown to a prospect before anything is
   sold. Running it once produces the first real delivery-hours figure.
3. Pursue Searchable partner access. Now scoped to client tracking and
   reporting only, so it gates nothing pre-revenue. Test on access: export,
   white-labelling, and whether tracking is good enough to hand a client.
4. Define ICP from sprint output. Then pricing.
5. Set up Bright Data once the sprint names a vertical. It is the marketing
   path now — required for the published index, not for client delivery — so it
   follows the sprint rather than racing it. Verify coverage across ChatGPT,
   Claude, Gemini and Perplexity at usable cost before committing.

## Raised, not resolved

Questions surfaced in working sessions that have not been decided, and small
changes proposed but not made. Distinct from Blocked: nothing external is
stopping these, they simply have not been ruled on.

This section exists because a conversation ends and takes its open loops with
it. An instruction issued is not an instruction executed, and until now the
repo recorded only what landed — so anything raised and left hanging was
invisible by the next session. Clear items out as they are decided; do not let
this become a backlog.

- **Channel strategy and gates — record does not exist.** An instruction on
  2026-08-12 asked for the Phase 0 gate to be updated in
  `decisions/2026-08-12-channel-strategy-and-gates.md` and in this file.
  Neither exists: there is no such decision record and no Phase 0 gate anywhere
  in the repo. The demand-over-visibility weighting it referred to has been
  recorded in `research/vertical-sprint/demand-signals.md` and against the
  vertical sprint entry above, so the substance is captured. What is missing is
  the channel strategy itself — which channels, in what order, gated on what.
  That has never been decided here and was not supplied, so it has not been
  written.
- **Searchable tier verification.** Which tier carries white-label report
  entitlement, whether the Agency Partner Programme includes it, and — more
  broadly — which endpoints the partner tier actually exposes. The API
  reference shows tier-gating on at least shopping analytics and white-label
  reports, so documented capability does not imply available capability.
  Re-verify against a live account on access.
- **Where the run log lands.** Delivery runs from Cowork against a packaged
  copy of this repo, but the mandatory closing step appends to
  `runs/YYYY-MM.md` here. A log that lands in the package rather than the repo
  is a log nobody reads. Follows from
  `decisions/2026-08-11-delivery-surface.md` and needs an answer before the
  first delivery run — an unlogged run does not exist, and capacity and pricing
  both depend on the log.
- **`registry/agents.md` Type column.** Every row reads `agent` in a file
  called agents.md, and it is the last use of "Type" vocabulary after the
  rename to Track. Cosmetic; drop it next time the file is touched.

## Standing notes

- No clients. `clients/` is empty.
- No skills built. All entries in `registry/skills.md` are `not-built`.
- No agents built. All entries in `registry/agents.md` are `not-built`.
- No runs logged. `runs/` is empty and will stay so until the first skill runs.
