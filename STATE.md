# STATE.md — current position

Last updated: 2026-08-15 (Dubai scan Section A lifted; hospitality
deprioritised; industrial manufacturers held pending the demand pass)

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
  rule, four signal classes, and a three-band review trigger with a
  pre-committed response per band. Not yet run.
- **`brandure-agency-citation-map` narrowed** to prospect sweeps and published
  index production, with an explicit exclusion from client engagements where
  Searchable's native cited-sources layer already covers it.
- **Channel strategy recorded** at `decisions/2026-08-12-channel-strategy.md`.
  **Section A only is decided:** Joe's personal LinkedIn publishes
  category-level AI/AEO content with no Brandure CTA; the Brandure page
  publishes research indexes with a single CTA offering a personalised AI
  visibility report; TikTok carries founder-journey content and is not measured
  on pipeline; positioning is AEO-specialist first with broader services as a
  post-traction, subcontractable expansion. **Also ratified 2026-08-12:** the
  demand-signal and Phase 2 review-trigger bands, both independent of the
  contract question. Sections B, C and D are not decisions — see below.
- **Review triggers replace gates.** The numeric items are review triggers, not
  gates: no prior Brandure funnel exists, so none is derived from measured
  performance. Their function is to force a stop-and-reassess rather than
  continuation on momentum. Each band carries a pre-committed response, and
  three rules govern all of them — one re-test per trigger with a second
  ambiguous result read as the bottom band; mitigating circumstances
  pre-registered before the window opens or discounted; and per-unit rate
  tracked as a leading indicator alongside the cumulative total.
- **Dubai AEO scan archived** at
  `research/vertical-sprint/scans/2026-08-13-dubai/`. Four surfaces, seven
  categories, 13 August 2026. **Half contaminated** — Gemini and Google Search
  ran on a signed-in profile — and n=1 throughout. Section A of its action list
  is lifted below; Sections B–E stay archived pending A2 and A3.
- **Vertical shortlist amended** by
  `decisions/2026-08-15-vertical-shortlist-revision.md`. Boutique and
  independent hospitality moves from primary to deprioritised. Aesthetic
  clinics unchanged and still primary. Industrial manufacturers **not**
  promoted — held pending the demand pass.
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
  `research/vertical-sprint/demand-signals.md`, which carries the ratified
  three-band demand review trigger: 15+ instances with 5+ in classes 1–2 is
  viable as a first vertical, 8–14 with 3+ is held as reserve, under 8 is
  education-led selling and unaffordable at 15–20 hours a week.
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
- **Prospect target-list building in aesthetic clinics and industrial
  manufacturers — hard prerequisite: A3.** No target lists in either vertical
  until the n=3 re-run is done. The two verticals the scan recommends
  prospecting first are the same two whose headline findings — four disjoint
  clinic sets, near-zero manufacturer overlap — are flagged as unverified at
  n=1. Prospecting on them means opening conversations with a finding that
  might be sampling variance, on exactly the categories where a prospect is
  most likely to check.
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

- **Three channel-strategy items — proposed, not ratified.** From Section B of
  `decisions/2026-08-12-channel-strategy.md`. **Not settled; do not act on
  them as decided or restate them elsewhere as agreed.**
  1. The four-phase build structure (validate and instrument, publish and
     capture, outbound and founding clients, compound).
  2. The Phase 1 review trigger — email capture bands at 60 days from the
     research index going live. Unratified because Phase 1 has not started.
  3. The LinkedIn merge trigger — first signed case study or Snap exit,
     whichever comes first. Blocked on the contract read.

  The Phase 1 bands have no measured basis; there is no prior Brandure funnel
  to derive them from. Ratify, replace or discard them — leaving them
  unchallenged is how a proposal becomes a target by default.
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

## Open actions on Joe

**From the 13 August Dubai scan — Section A only.** Sections B–E remain
archived at `research/vertical-sprint/scans/2026-08-13-dubai/actions.md` and
are not to be acted on until A2 and A3 have run.

- **A1 — Enable Claude in Chrome for incognito.** `chrome://extensions` →
  Claude in Chrome → Allow in Incognito. Two minutes. Blocks A2.
- **A2 — Re-run the 14 contaminated cells** (Gemini and Google Search) on a
  clean profile. ChatGPT and Perplexity are clean and do not need re-running.
  **No Gemini or Google figure goes to a client until this is done.**
- **A3 — Re-run at n=3 per prompt**, prioritising aesthetic clinics and
  industrial manufacturers. These are the two "zero overlap" headline claims
  and the two a prospect is most likely to challenge. **Hard prerequisite for
  target-list building in both verticals** — see Blocked.
- **A4 — Add a paid-tier comparison.** The scan ran free/default tiers. If paid
  tiers and reasoning models ground on different sources, the thesis narrows to
  free-tier users, which is material before pitching.

- **Read the Snapchat employment contract** for outside-business-activity and
  moonlighting clauses. Blocks finalising the LinkedIn merge trigger in Section
  B of `decisions/2026-08-12-channel-strategy.md`. Any such clause is triggered
  by the agency existing, not by whether a post links to it — so the absent CTA
  on Joe's personal LinkedIn is a credibility decision, not a contractual
  mitigation, and must not be relied on as one.
- **Supply markets per vertical and competitor names** for the B2B SaaS and
  hospitality prompt sets, so `research/vertical-sprint/prompts/` can be
  instantiated.
- **Supply the two Donnelly video URLs** for
  `research/sources/2026-08-12-donnelly-searchable-playbook.md`.

## Process

- **Commit reports must state files created against files requested, including
  omissions.** Every file asked for is accounted for explicitly — created, or
  named as not created with the reason. A silent gap between what was asked and
  what landed is the failure this rule exists to catch; it produced the missing
  channel-strategy record between `7c31a7e` and `f9a96ad`.
- **A truncated or incomplete instruction is flagged as truncated**, not
  treated as the whole request. The reconciliation above only works against a
  request received intact.
- **Dated records use the actual date of creation.** A record created on the
  15th is dated the 15th, whatever date the session believes it is. Existing
  records carrying 2026-08-12 are left as they are: a wrong date is less
  damaging than retro-editing committed history, and a correction that rewrites
  the past is harder to audit than a date that is simply off.
- **Numeric thresholds with no measured basis are review triggers, not gates.**
  A gate implies pass/fail against a measured standard. Where no prior data
  exists, say trigger, give each band a response committed in advance, and
  pre-register mitigating circumstances before the window opens.
- **Section boundaries in a decision record are load-bearing.** Where a record
  separates what was decided from what was proposed, do not merge, summarise
  across, or promote proposals by restating them elsewhere without the label.

## Standing notes

- No clients. `clients/` is empty.
- No skills built. All entries in `registry/skills.md` are `not-built`.
- No agents built. All entries in `registry/agents.md` are `not-built`.
- No runs logged. `runs/` is empty and will stay so until the first skill runs.
