# Delivery runs from Cowork

Date: 2026-08-11

Resolves the open question left by `decisions/2026-08-11-skills-location.md`:
which surface client work actually runs from.

## Decision

**Delivery runs from Cowork.** Claude Code builds and maintains this repo;
Cowork is where client work is executed.

The repo stays authoritative. Cowork consumes a packaged version of it rather
than becoming a second source of truth.

## Reasoning

Client delivery is knowledge work — audits, citation maps, placement plans,
retainer reports, client comms. That is Cowork's surface. Claude Code is a
build environment: it edits files, runs commands and maintains a repository,
which is what building the agency's assets requires and not what delivering an
audit requires.

The split matches what each tool is for, and it keeps the repo's role intact.
`decisions/2026-08-08-repo-as-source-of-truth.md` rests on there being exactly
one authoritative copy; a delivery surface that edited its own copy of the
skills would create a second, and the two would diverge silently. Consuming a
packaged build instead makes the direction of flow one-way — repo to Cowork,
never back.

**Unverified, and load-bearing:** that Cowork can actually carry the delivery
workload as specified — running a multi-step measurement skill, writing
structured output, working against reference files like a frozen prompt set.
This has not been tested against a real skill, because no skill has been built.
It is the first thing to check when `brandure-agency-measure` exists, not
after a client is depending on it.

## Consequences

**Skills at `.claude/skills/` are not discoverable in Cowork.** They are
discovered by Claude Code sessions rooted at this repo, and nowhere else.
Bridging that requires packaging as a plugin, which uses its own layout.

That transform is required either way — `.claude/skills/` and the old
`skills/build/` would both need converting — so it does not favour one repo
layout over another and does not reopen
`decisions/2026-08-11-skills-location.md`. Packaging is a build step, not a
reason to move the source.

**Packaging is not yet scoped and remains unbuilt.** Recorded as
`brandure-agency-package` in `registry/skills.md` and as blocked work in
`STATE.md`. Nothing is lost by deferring it: there are no skills to package.

**Open — where the run log lands.** The mandatory closing step appends to
`runs/YYYY-MM.md` in this repo. A Cowork session working from a packaged copy
may not be able to write there, and a log that lands in the package rather than
the repo is a log nobody reads. This follows directly from the decision and has
no answer yet. It needs one before the first delivery run, because the logging
discipline is the only record that a run happened at all — see the logging rule
in `README.md`. Carried in `STATE.md` under Raised, not resolved.

## What would reverse it

- Cowork proving unsuitable for the delivery workload — unable to carry
  multi-step skills, reference files, or structured output at the quality
  client work needs. Delivery would move back to Claude Code, which costs the
  fit but keeps everything else intact.
- Packaging turning out to constrain the repo layout in ways not currently
  anticipated. The assumption is that packaging is a pure transform; if it
  instead dictates how the source must be organised, both this decision and the
  skills-location decision need revisiting together.
- The run-log question having no workable answer. If delivery in Cowork cannot
  reliably write back to the repo, the choice is between a delivery surface
  that leaves no trace and one that is slightly less comfortable. The repo wins
  that trade — an unlogged run does not exist, and capacity and pricing both
  depend on the log.
