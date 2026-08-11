# STATE.md — current position

Last updated: 2026-08-11

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
- **Measurement skills** (`brandure-agency-measure`,
  `brandure-agency-citation-map`) — blocked on the Bright Data account, which
  is not yet set up. A manual sampling method can be written in the meantime
  and is the intended first version.
- **Service definition** — what is actually sold, and in what shape. Blocked
  on ICP and measured delivery cost.

## Next

In order:

1. Run the vertical sprint. Buying-intent prompts across the four primary
   verticals, logged per `research/vertical-sprint/README.md`. Unblocks ICP.
2. Set up the Bright Data account. Unblocks the measurement layer and is
   independent of the sprint, so it can run in parallel.
3. Build `brandure-agency-measure` as the first skill, manual method first.
   It is the wedge — the artefact shown to a prospect before anything is
   sold — and building it produces the first real delivery-hours figure.
4. Define ICP from sprint output. Then pricing.

## Standing notes

- No clients. `clients/` is empty.
- No skills built. All entries in `registry/skills.md` are `not-built`.
- No agents built. All entries in `registry/agents.md` are `not-built`.
- No runs logged. `runs/` is empty and will stay so until the first skill runs.
