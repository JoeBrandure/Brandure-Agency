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
| `templates/skill-template.md` | The pattern every skill authored here inherits. External skills are exempt. |
| `.claude/skills/` | Skills, one directory each: `brandure-agency-<name>/SKILL.md` plus its reference files. Flat — build/run is a frontmatter field, not a directory. Externally-authored skills sit here too, under their upstream name. |
| `.claude/agents/` | Agent definitions, one flat `.md` each. |
| `decisions/` | One file per decision: what, why, what would reverse it. |
| `runs/` | Run logs, one file per month: `YYYY-MM.md`. |
| `research/` | Research output, one directory per project. `vertical-sprint/` holds the ICP work; `prospect-sweeps/` holds pre-sale measurement; `sources/` holds dated source notes on external material. |
| `measurement/` | Client measurement standards. `methodology.md` is the operational standard for baselines, control sets and reporting. |
| `growth/` | Agency growth operations. `content-log.md` logs published content for repurposing. |
| `site/` | The brandure.io website — Astro, static output, zero client-side JS. `npm run dev` / `npm run build` from inside `site/`. |
| `clients/` | One directory per client. Empty — no clients yet. |

## Conventions

- **Skills and agents authored here** are prefixed `brandure-agency-`. See
  `decisions/2026-08-08-naming-convention-brandure-agency.md`.
  **Externally-authored skills keep their upstream name, internal structure and
  frontmatter**, with repo metadata carried in `registry/skills.md` — see
  `decisions/2026-08-17-external-skill-artefacts.md`. They sit at
  `.claude/skills/<upstream-name>/` like every other skill; location is not
  exempt.
- **Decision records** are `decisions/YYYY-MM-DD-slug.md`, dated the day the
  decision was made, not the day it was written up.
- **Run logs** are `runs/YYYY-MM.md`, one row per run.
- **Clients** are `clients/<client-slug>/`, lower-case, hyphenated.
- **Skills** are `.claude/skills/<name>/SKILL.md`, with reference files
  alongside — `brandure-agency-<name>` when authored here, the upstream name
  when not. Flat, no build/run split — see
  `decisions/2026-08-11-skills-location.md`. **Agents** are flat files at
  `.claude/agents/brandure-agency-<name>.md`.
- **Research** is `research/<project>/`, one directory per project, named for
  the work rather than the date. Two standing exceptions:
  `research/prospect-sweeps/<prospect-slug>/`, one directory per prospect,
  since they accumulate per target rather than per project; and
  `research/sources/YYYY-MM-DD-slug.md`, dated flat files holding notes on
  external material, following the decision-record naming convention.
- **British English** throughout.
- **`main` only.** No branches, no pull requests. See
  `decisions/2026-08-08-main-branch-only.md`.

## How to add a skill

Steps 2–4 apply to skills authored here. For an externally-authored skill,
commit it byte-identical at `.claude/skills/<upstream-name>/` and record its
metadata in the registry instead — `decisions/2026-08-17-external-skill-artefacts.md`.

1. Add the row to `registry/skills.md` first, with status `not-built`. If it
   does not belong in the registry, it is not a skill — it is a one-off task.
2. Create `.claude/skills/brandure-agency-<name>/` and copy
   `templates/skill-template.md` into it as `SKILL.md`. A skill is a
   directory, not a file, so it can carry prompt sets, rubrics and output
   templates alongside the instructions. All skills sit flat here — that is
   where Claude Code discovers them.
3. Fill in frontmatter (`name`, `description`, `track: build | run`) and body:
   purpose, when to use, dependencies, inputs, method, output, failure modes.
4. Keep the closing-steps reference intact — alignment check, then append to
   `runs/`. They are not optional and not negotiable per skill. Do not restate
   them in full; they live once, in the template.
5. Update the skill's row in `registry/skills.md` in the same commit if its
   dependencies changed. The skill file is authoritative; the registry is the
   index that gets read when planning. **This inverts for external skills** —
   the registry is authoritative for anything their upstream frontmatter does
   not carry.
6. Run it once against a real target. A skill that has never run is a draft.
7. Update its registry status and update `STATE.md`.

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

Date, skill name, target/client, output path, duration, outcome, notes.

Outcome is one of `complete`, `partial`, `failed`, `aborted`, `blocked`. Log
blocked runs — a skill that could not start because a dependency was missing is
the row people skip and the row that tells you what to unblock first.

There is no automatic telemetry. Nothing here observes itself. A skill that does
not log itself leaves no trace — the capacity model has no hours to read, the
client record has no history, and the run cannot be reconstructed later. The log
is the only evidence the work happened.
