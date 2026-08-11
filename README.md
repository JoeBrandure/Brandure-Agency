# Brandure-Agency

Source of truth for Brandure, an AEO (Answer Engine Optimisation) specialist
agency. Agency state, skills, agents, decisions and client work live here.
Read by Claude in chat, Cowork and Claude Code.

**Start with `CLAUDE.md`.** It carries the agency context, working style, the
alignment check and the standing rules. `STATE.md` carries the current position.

## Repo map

| Path | Contents |
|------|----------|
| `CLAUDE.md` | Agency context and rules. Read before any task. |
| `STATE.md` | Current position: built / in progress / blocked / next. |
| `registry/skills.md` | Every planned skill: name, type, status, purpose, dependencies. |
| `registry/agents.md` | Every planned agent, same format. |
| `templates/skill-template.md` | The pattern every skill inherits. |
| `skills/build/` | Skills that build the agency — assets, proof, pipeline. |
| `skills/run/` | Skills that run the agency — delivery, client ops, agency ops. |
| `.claude/agents/` | Agent definitions. |
| `decisions/` | One file per decision: what, why, what would reverse it. |
| `runs/` | Run logs, one file per month: `YYYY-MM.md`. |
| `research/` | Research output. `vertical-sprint/` holds the ICP work. |
| `clients/` | One directory per client. Empty — no clients yet. |

## Conventions

- **Skills and agents** are prefixed `brandure-agency-`. See
  `decisions/2026-08-08-naming-convention-brandure-agency.md`.
- **Decision records** are `decisions/YYYY-MM-DD-slug.md`, dated the day the
  decision was made, not the day it was written up.
- **Run logs** are `runs/YYYY-MM.md`, one row per run.
- **Clients** are `clients/<client-slug>/`, lower-case, hyphenated.
- **British English** throughout.
- **`main` only.** No branches, no pull requests. See
  `decisions/2026-08-08-main-branch-only.md`.

## How to add a skill

1. Add the row to `registry/skills.md` first, with status `not-built`. If it
   does not belong in the registry, it is not a skill — it is a one-off task.
2. Copy `templates/skill-template.md` to `skills/build/` or `skills/run/` as
   `brandure-agency-<name>.md`.
3. Fill in frontmatter (`name`, `description`) and body: purpose, when to use,
   inputs, method, output, failure modes.
4. Keep the two mandatory closing steps intact — alignment check, then append
   to `runs/`. They are not optional and not negotiable per skill.
5. Run it once against a real target. A skill that has never run is a draft.
6. Update its registry status and update `STATE.md`.

## How to add a client

1. Create `clients/<client-slug>/`.
2. Run `brandure-agency-onboard` (not yet built — until it exists, capture the
   same inputs by hand: competitor set, buying-intent prompt set, brand facts,
   access).
3. Run the baseline measurement before any work starts. Without a baseline
   there is nothing to report against later, and no evidence the work did
   anything.
4. All client output stays under `clients/<client-slug>/`.
5. Update `STATE.md`.

## The logging rule

**Every skill run appends a row to `runs/YYYY-MM.md`. No exceptions, including
trivial runs.**

Date, skill name, target/client, output path, outcome, notes.

There is no automatic telemetry. Nothing here observes itself. A skill that does
not log itself leaves no trace — the capacity model has no hours to read, the
client record has no history, and the run cannot be reconstructed later. The log
is the only evidence the work happened.
