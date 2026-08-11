# Skills live at `.claude/skills/`

Date: 2026-08-11

## Decision

Skills live at `.claude/skills/brandure-agency-<name>/SKILL.md`, flat, with
reference files alongside.

The `skills/build/` and `skills/run/` directory split is removed. That grouping
becomes a `track: build | run` frontmatter field on each skill and the Track
column in `registry/skills.md`.

Agents stay where they are: `.claude/agents/brandure-agency-<name>.md`, flat
files.

## Reasoning

Claude Code discovers skills at `.claude/skills/`. It does not scan `skills/`.
Assets in the old location were documents that had to be pointed at by hand,
not skills that could be invoked by name — while carrying frontmatter that
implied otherwise.

`decisions/2026-08-08-naming-convention-brandure-agency.md` justified the
`brandure-agency-` prefix partly on invocation reliability and on namespacing
against everything else Claude can see. That reasoning only holds if the
harness can see the skill at all. Location and intent had drifted apart, and
the prefix was doing work the location cancelled.

No skills exist yet. This costs one commit now against a dozen directory
renames and a stale registry later — and the later version would land at the
exact moment attention is on delivering for a first client.

### Why `track` rather than a directory

The build/run distinction is real and worth keeping: build skills win work, run
skills deliver it, and the two get prioritised differently against a fixed
evening. But it was carrying organisational meaning in a path, and the path is
now fixed by the harness.

A frontmatter field is the right home because it travels with the skill. The
registry column is generated from it by hand and stays in sync by the same
same-commit rule that governs the Dependencies column.

Named `track` rather than `type` deliberately: `type` is the kind of generic
key Claude Code may later define for its own purposes, and a collision would be
silent. `track` is Brandure's field, and the harness ignores it.

The finer grouping — run/delivery, run/client ops, run/agency ops — stays in
the `registry/skills.md` section headings rather than becoming a second
frontmatter field. One field that is always accurate beats two that disagree,
and nothing yet needs to filter on the finer split.

### Agents already match

`.claude/agents/*.md` is the convention Claude Code expects for subagents, and
the repo already used it. No change.

**Consequence worth noting:** agents are flat files, so an agent cannot carry
reference files the way a skill directory can. `brandure-agency-answer-sampler`
will want the same frozen prompt set that `brandure-agency-measure` uses. The
prompt set lives with the skill that owns it, and the agent references it by
path. Do not duplicate it into a second location — two copies of a frozen
prompt set is the same corruption the freezing rule exists to prevent.

## Noted, not solved: Cowork plugin packaging

If these skills are later bundled as a Cowork plugin, plugin packaging uses its
own layout, and neither `.claude/skills/` nor `skills/build/` is that layout.
Packaging is a transform either way, so it does not favour one location over
the other and should not influence the choice made today. Recorded so the
question is not re-opened as though it were an argument against this decision.

## What would reverse it

- Claude Code changing its discovery path. The decision follows the harness by
  construction, so skills follow it wherever it goes.
- Enough skills accumulating that a flat `.claude/skills/` becomes hard to
  scan. The registry is the index and should absorb this; if it genuinely
  stops working past a few dozen skills, the answer is better registry
  grouping, not a directory split the harness will not read.
- Skills needing to be shared across repos or handed to a subcontractor as a
  standalone bundle. That is the packaging question above, and it is a build
  step rather than a reason to move the source.
