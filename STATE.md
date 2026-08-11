# STATE.md — current position

Last updated: 2026-08-11 (client reporting deferred pending Searchable partner
access)

Current position at a glance. Update this file whenever something moves between
sections. It is the first thing to read at the start of a working session.

## Built

- Repo foundations: directory structure, `CLAUDE.md`, `README.md`, skill
  template, registries, decision records, vertical sprint brief.
- Decision record set covering repo-as-source-of-truth, naming convention,
  branch policy, vertical shortlist, and Bright Data as the measurement layer.

## In progress

- Nothing. Foundations are complete; no work has started on top of them.

## Blocked

- **Vertical sprint** — designed but not run. Blocked on operator time only;
  no dependency, no tooling required. Method and shortlist are in
  `research/vertical-sprint/README.md`. This is the highest-value unblocked
  item and everything below waits on it.
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
- **`brandure-agency-measure` and `brandure-agency-retainer-report`** — blocked
  on Searchable partner access, not on Bright Data. Neither can be specified
  until the output shape is known. A manual sampling method can still be
  written in the meantime and remains the intended first version of `measure`.
- **`brandure-agency-citation-map`** — still blocked on the Bright Data
  account, which is not yet set up.
- **Measurement layer ownership — open question, not decided.** The 8 August
  record puts proprietary measurement on Bright Data with Searchable as the
  client surface only; the 11 August record has Searchable expected to handle
  measurement across engines. Whether Brandure still owns a proprietary
  measurement layer needs an explicit decision once partner access resolves.
  Do not treat either position as settled in the meantime.
- **Service definition** — what is actually sold, and in what shape. Blocked
  on ICP and measured delivery cost.

## Next

In order:

1. Run the vertical sprint. Buying-intent prompts across the four primary
   verticals, logged per `research/vertical-sprint/README.md`. Unblocks ICP.
2. Pursue Searchable partner access. Now the gating item for the measurement
   and reporting layers, ahead of Bright Data. Independent of the sprint, so it
   can run in parallel. Test on access: right engines, buying-intent prompts
   rather than keyword tracking, cited domains captured, export and
   white-labelling available.
3. Build the manual version of `brandure-agency-measure`. Not blocked by
   partner access — the manual method needs no tooling, and it is the wedge
   artefact shown to a prospect before anything is sold. Running it once
   produces the first real delivery-hours figure.
4. Define ICP from sprint output. Then pricing.
5. Hold Bright Data setup until partner access resolves. Building collection
   against a method Searchable may supersede is the wrong order.

## Standing notes

- No clients. `clients/` is empty.
- No skills built. All entries in `registry/skills.md` are `not-built`.
- No agents built. All entries in `registry/agents.md` are `not-built`.
- No runs logged. `runs/` is empty and will stay so until the first skill runs.
