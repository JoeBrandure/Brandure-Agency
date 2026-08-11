# Skill template

The pattern every Brandure skill inherits.

A skill is a **directory**, not a file. Create
`.claude/skills/brandure-agency-<name>/` and copy this template into it as
`SKILL.md`. Reference files — prompt sets, scoring rubrics, output templates —
sit alongside it in the same directory.

```
.claude/skills/brandure-agency-measure/
├── SKILL.md
├── prompt-set-legal-2026-08.md
└── output-template.md
```

All skills sit flat in `.claude/skills/`, which is where Claude Code discovers
them. There is no build/run directory split — that grouping lives in the
`track` frontmatter field and in `registry/skills.md`. See
`decisions/2026-08-11-skills-location.md`.

The closing steps in "Mandatory closing steps" below end every skill without
exception, including trivial ones.

---

## Frontmatter

Every skill opens with YAML frontmatter. Three required fields:

```yaml
---
name: brandure-agency-<name>
description: <one sentence, third person, stating what the skill does and when
  to use it. This is the text a model reads when deciding whether to invoke the
  skill, so it must describe the trigger, not just the function.>
track: build | run
---
```

`name` must match the **directory name** and carry the `brandure-agency-`
prefix. The file inside is always `SKILL.md`.

`description` earns its place by being specific: "Samples buying-intent prompts
across ChatGPT, Claude and Perplexity for a named brand and records which
competitors are cited" is usable; "Helps with AEO research" is not.

`track` is `build` or `run`. **Build** skills create agency assets and win
work. **Run** skills deliver work and operate the agency. It replaces the old
`skills/build/` and `skills/run/` directory split, which could not survive the
move to `.claude/skills/`. The finer grouping — run/delivery, run/client ops,
run/agency ops — is carried by the section headings in `registry/skills.md`
and is deliberately not in frontmatter; one field that is always accurate beats
two that disagree.

`track` is Brandure's own field, not one the harness reads. It is named `track`
rather than `type` to avoid colliding with any field Claude Code may later
define.

**Status is not in frontmatter.** Lifecycle status (`not-built`, `drafted`,
`in-use`, `retired`) lives in `registry/skills.md` and nowhere else. A skill
file claiming `in-use` while the registry says `drafted` is worse than a single
imperfect record.

## Body structure

```markdown
# brandure-agency-<name>

## Purpose
What this produces and why it exists. One paragraph. If the output is a
client-facing artefact, say which one.

## When to use
The trigger conditions. Also state when *not* to use it, if there is a
neighbouring skill that could be confused with this one.

## Dependencies
What must already exist for this skill to run. Three kinds — see
"Dependencies" below for the format and the registry reconciliation rule.

## Inputs
Everything the skill needs at runtime, and where each comes from. Mark
anything the operator must supply by hand. If a required input is missing,
stop and ask — do not infer a client name, a competitor set, or a market.
Market includes whether a market applies at all: adding a geography a buyer
would not have typed produces a different test, not a sharper one. See
"Market elicitation" in `CLAUDE.md`.

## Method
Numbered steps. Each step is an action with a verifiable result, not a
description of an intention. Where a step involves a judgement call, state
the criterion being applied. Where a step calls another skill or an agent,
name it with its full `brandure-agency-` prefix. Where a step uses a
reference file in this directory, name the file. **A step that writes to an
external platform is its own numbered step and halts for Joe's confirmation
before running** — never folded into a step that also reads or computes.

## Output
The artefact produced, its format, and its path. State the filename
convention explicitly. Paths by work type:
  - Client work → `clients/<client-slug>/`
  - Prospect sweeps → `research/prospect-sweeps/<prospect-slug>/`
  - Published research → `research/<project>/`
  - Agency ops → the relevant top-level directory

## Failure modes
What commonly goes wrong and what to do about it. At minimum: what to do
when a data source is unavailable, and what to do when the result is
ambiguous rather than clearly positive or negative. A skill that silently
produces a confident-looking output from thin data is worse than one that
stops. If a dependency is missing, stop — log the run as `blocked`, do not
improvise a substitute.

## Closing steps
Run both mandatory closing steps: the alignment check, then append to
`runs/YYYY-MM.md`. Full text and run-log columns in
`templates/skill-template.md`. Neither is optional.
```

Do not restate the closing steps in full inside a skill. They are stated once,
below, and referenced from every skill — so a change to the alignment check or
the log format is one edit, not a dozen.

They are also not numbered `Step N-1` / `Step N`. Method step counts vary per
skill, so relative numbering drifts the moment a method step is added. They are
named, and they come last.

## Dependencies

Three kinds, because they fail differently and unblock differently. List only
the ones that apply.

```markdown
## Dependencies
**Skills and agents** — `brandure-agency-measure`. Consumes its sweep output
at `research/prospect-sweeps/<slug>/measure-YYYY-MM-DD.md`; needs the cited-
domains table, not the summary.

**External** — Bright Data account. Manual collection is a viable fallback at
low volume.

**Repo state** — ICP defined. Competitor set agreed and recorded in the
client or prospect directory.
```

Name the **artefact** consumed, not just the upstream skill. `citation-map`
depending on "`brandure-agency-measure`" tells you nothing when an output path
changes; depending on a named file at a named path tells you exactly what
breaks. This is the whole point of the section — chains that break silently are
the failure mode a dozen skills will produce.

Where a dependency is a fallback rather than a hard requirement, say so, as in
the Bright Data line above. A skill blocked on something it could work around
is a skill that will not get built.

### Reconciliation with the registry

`registry/skills.md` carries a Dependencies column for the same skill. The two
must agree.

- **The skill file is authoritative.** The registry column is an index —
  the same items, comma-separated, condensed to fit a table cell.
- **Update both in the same commit.** Adding, removing or changing a
  dependency in a skill without touching its registry row is how the two
  drift, and the registry is what gets read when planning.
- **Mark blockers in the registry with `(BLOCKED)`**, matching `STATE.md`. The
  registry is where a blocker is visible across all skills at once.

## Reference files

Anything the skill needs that is not prose instruction lives in the skill
directory beside `SKILL.md`: prompt sets, scoring rubrics, output templates,
worked examples. Name them plainly; group into subdirectories only past a
handful.

**Frozen inputs must be dated and never edited in place.** A measurement
prompt set is the clear case: `brandure-agency-measure` is only comparable
across time if the prompts are identical between runs. Changing a prompt set
silently invalidates every comparison built on it, and the corruption is
invisible — the numbers still look like numbers.

So: name frozen files with the period they came into use
(`prompt-set-legal-2026-08.md`), and when a change is needed, add a new dated
file rather than editing the old one. The run log records which file a run
used, via the output path or Notes. Superseded sets stay in the directory.

## External platform writes

Reads from an external platform may proceed unattended. **Writes must be
confirmed with Joe first** — creating or modifying a workspace, adding or
editing a tracked prompt, deleting or reorganising anything, or consuming paid
quota. The rule is stated in full in `CLAUDE.md`; the reasoning and reversal
conditions are in `decisions/2026-08-11-external-platform-writes.md`.

**This is deliberately not a body section.** Three reasons:

- Most skills never touch an external platform. A section that reads "none" in
  nine files out of twelve trains the reader to skip it, and the one skill where
  it matters gets skipped with the rest.
- The confirmation has to happen at the moment of the write, which is a Method
  step. A preamble declaring an intention to confirm is not a confirmation.
- It is a standing rule, so it also binds one-off work that never becomes a
  skill. `CLAUDE.md` is the right home for anything that broad; restating it
  per-skill would repeat the duplication the closing steps were just fixed to
  avoid.

What a writing skill carries instead is a numbered Method step that halts, and
a Dependencies entry naming the platform access it needs. A skill handed to a
subcontractor therefore carries the halt in its own steps rather than relying
on the subcontractor having read `CLAUDE.md`.

## Mandatory closing steps

Two steps, in this order, at the end of every skill. They apply to **every
skill, including trivial ones** — a two-minute skill logs itself exactly like a
two-hour one.

### First — Alignment check

Before returning the deliverable, verify:

1. Does this answer what was actually asked, or has it drifted to an adjacent
   question?
2. Does it serve the agency objective, or is it activity for its own sake?
3. Is every factual claim grounded — and grounded in what? Do not treat an
   absent search result as evidence against something already established in
   project context or prior conversation.
4. Are assumptions labelled as assumptions?
5. Does this build on work confirmed complete, or work assumed complete?
   Verify prior state before acting on it. An instruction issued is not an
   instruction executed.

State any drift found rather than silently correcting it.

Item 5 has a specific meaning inside a skill: check that the upstream artefact
named in Dependencies exists at the path given, before consuming it. A skill
that assumes its predecessor ran produces output built on nothing, and the
output looks identical either way.

This is the same check as in `CLAUDE.md`, which is read before any task in this
repo — so it should already be in context. It is restated here because a skill
handed to a subcontractor may arrive without it.

### Second — Append to `runs/`

Append one row to the current month's run log: `runs/YYYY-MM.md`. Create the
file if it does not exist, with the header row below.

| Date | Skill | Target/client | Output path | Duration | Outcome | Notes |
|------|-------|---------------|-------------|----------|---------|-------|
| 2026-08-11 | brandure-agency-measure | acme-legal | research/prospect-sweeps/acme-legal/measure-2026-08-11.md | 1h40 | complete | Perplexity sampling incomplete — rate limited, 6 of 10 prompts. Used prompt-set-legal-2026-08.md |
| 2026-08-12 | brandure-agency-retainer-report | acme-legal | none | 0h10 | blocked | Searchable partner access not granted; no tracking data to report against |

Column rules:

- **Date** — `YYYY-MM-DD`, the date the run finished.
- **Skill** — full name with prefix.
- **Target/client** — client slug, prospect name, or `internal` for agency work.
- **Output path** — repo-relative path to what was produced. If the skill
  produced nothing on disk, write `none` and say why in Notes.
- **Duration** — wall-clock time spent, as `1h40`. Estimate to the nearest ten
  minutes; precision is not the point, presence is. Record it for `blocked`
  runs too — time spent discovering a blocker is real time.
- **Outcome** — one of five, below.
- **Notes** — what would be needed to interpret or repeat this run later.
  Blockers, data gaps, decisions taken mid-run, which reference file was used.
  Blank is acceptable only when the run was genuinely unremarkable.

**Outcome values:**

| Value | Meaning |
|-------|---------|
| `complete` | Ran to the end, output is usable. |
| `partial` | Ran to the end, output is usable but incomplete — a source was thin, a step was skipped. Say which in Notes. |
| `failed` | Started and did not produce usable output. Something went wrong mid-run. |
| `aborted` | Started, then stopped deliberately — priorities changed, the target became irrelevant. |
| `blocked` | Could not start. A dependency was unavailable: partner access missing, no baseline to compare against, an upstream skill not yet built. |

`blocked` is not `failed` and not `aborted`. Nothing went wrong and nothing was
abandoned — a precondition was absent. Logging a blocked run as either of the
others corrupts any later reading of the history: `failed` implies a skill that
needs fixing, `aborted` implies a decision that was taken. Neither is true, and
both hide the thing that actually needs attention, which is the dependency.

**Log blocked runs.** This is the row people skip, because nothing was
produced and it feels like nothing happened. Blocked rows are the record of
what dependencies cost in practice, and they are the input to deciding what to
unblock first. A skill blocked four times in a month is an argument.

**Why Duration is a column.** `brandure-agency-capacity` is specified to derive
actual hours by skill and client from these logs, and pricing is blocked on
knowing real delivery hours per engagement. Neither works if duration is left
to prose in Notes. This is the only field that cannot be reconstructed after
the fact — output paths and outcomes survive in the repo, elapsed time does
not.

**There is no automatic telemetry.** Nothing observes these skills or records
that they ran. A skill that does not log itself leaves no trace — the run did
not happen as far as this repo is concerned, and neither the capacity model,
the utilisation picture, nor any later reconstruction of what was done for a
client will include it. Logging is the only record.
