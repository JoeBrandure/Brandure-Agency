# Skill template

The pattern every Brandure skill inherits. Copy this file into `skills/build/`
or `skills/run/` as `brandure-agency-<name>.md` and fill it in.

Two closing steps are mandatory and appear in every skill without exception —
see "Mandatory closing steps" below.

---

## Frontmatter

Every skill opens with YAML frontmatter. Two required fields:

```yaml
---
name: brandure-agency-<name>
description: <one sentence, third person, stating what the skill does and when
  to use it. This is the text a model reads when deciding whether to invoke the
  skill, so it must describe the trigger, not just the function.>
---
```

`name` must match the filename and carry the `brandure-agency-` prefix.
`description` earns its place by being specific: "Samples buying-intent prompts
across ChatGPT, Claude and Perplexity for a named brand and records which
competitors are cited" is usable; "Helps with AEO research" is not.

## Body structure

```markdown
# brandure-agency-<name>

## Purpose
What this produces and why it exists. One paragraph. If the output is a
client-facing artefact, say which one.

## When to use
The trigger conditions. Also state when *not* to use it, if there is a
neighbouring skill that could be confused with this one.

## Inputs
Everything the skill needs before it can start, and where each comes from.
Mark anything the operator must supply by hand. If a required input is
missing, stop and ask — do not infer a client name, a competitor set or a
target market.

## Method
Numbered steps. Each step is an action with a verifiable result, not a
description of an intention. Where a step involves a judgement call, state
the criterion being applied. Where a step calls another skill or an agent,
name it with its full `brandure-agency-` prefix.

## Output
The artefact produced, its format, and its path. Client work writes to
`clients/<client-slug>/`. Internal work writes to the relevant top-level
directory. State the filename convention explicitly.

## Failure modes
What commonly goes wrong and what to do about it. At minimum: what to do
when a data source is unavailable, and what to do when the result is
ambiguous rather than clearly positive or negative. A skill that silently
produces a confident-looking output from thin data is worse than one that
stops.

## Step N-1: Alignment check
## Step N: Log the run
```

## Mandatory closing steps

These are the final two steps of every skill, in this order, and they are not
optional. They apply to **every skill, including trivial ones** — a
two-minute skill logs itself exactly like a two-hour one.

### Step N-1 — Alignment check

Before returning the deliverable, verify:

1. Does this answer what was actually asked, or has it drifted to an adjacent
   question?
2. Does it serve the agency objective, or is it activity for its own sake?
3. Is every factual claim grounded — and grounded in what? Do not treat an
   absent search result as evidence against something already established in
   project context or prior conversation.
4. Are assumptions labelled as assumptions?

State any drift found rather than silently correcting it.

### Step N — Append to `runs/`

Append one row to the current month's run log: `runs/YYYY-MM.md`. Create the
file if it does not exist, with the header row below.

| Date | Skill | Target/client | Output path | Outcome | Notes |
|------|-------|---------------|-------------|---------|-------|
| 2026-08-11 | brandure-agency-measure | acme-legal | clients/acme-legal/measure-2026-08-11.md | complete | Perplexity sampling incomplete — rate limited, 6 of 10 prompts |

Column rules:

- **Date** — `YYYY-MM-DD`, the date the run finished.
- **Skill** — full name with prefix.
- **Target/client** — client slug, prospect name, or `internal` for agency work.
- **Output path** — repo-relative path to what was produced. If the skill
  produced nothing on disk, write `none` and say why in Notes.
- **Outcome** — `complete`, `partial`, `failed`, or `aborted`.
- **Notes** — what would be needed to interpret or repeat this run later.
  Blockers, data gaps, decisions taken mid-run. Blank is acceptable only when
  the run was genuinely unremarkable.

**There is no automatic telemetry.** Nothing observes these skills or records
that they ran. A skill that does not log itself leaves no trace — the run did
not happen as far as this repo is concerned, and neither the capacity model,
the utilisation picture, nor any later reconstruction of what was done for a
client will include it. Logging is the only record.
