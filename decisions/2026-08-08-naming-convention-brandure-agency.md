# Naming convention: `brandure-agency-` prefix

Date: 2026-08-08

**Amended 2026-08-17 by `decisions/2026-08-17-external-skill-artefacts.md`.**
Externally-authored skills are exempt from the prefix, on the same
invocation-reliability grounds this record uses to justify it: renaming an
upstream skill breaks platform detection, and the directory name is the
invocation string. Everything below stands for anything authored here.

## Decision

Every new invocable asset is prefixed `brandure-agency-`. Skills, agents, and
anything else that could be called by name.

`brandure-agency-measure`, `brandure-agency-citation-map`,
`brandure-agency-prospect-scout`.

Documents that are read rather than invoked — decision records, research notes,
run logs, client folders — do not take the prefix and use their own conventions
(see `README.md`).

## Reasoning

Claude sees more than this repo. Personal skills, plugin skills, other projects'
skills and built-in commands are all in the same namespace on at least one of
the surfaces this repo is read from. Without a prefix, a skill called `measure`
or `content` is a collision waiting to happen, and the failure mode is silent:
the wrong procedure runs and produces plausible output.

Three further benefits, in order of how much they matter:

1. **Attribution in logs.** A run log row reading `brandure-agency-measure` is
   unambiguous about which system produced the output. `measure` is not.
2. **Invocation reliability.** Distinctive names are easier to select correctly
   from a description, and easier to ask for by name without ambiguity.
3. **Portability.** If any of these assets are ever packaged, shared or handed
   to a subcontractor's environment, they arrive already namespaced.

`brandure-agency-` rather than `brandure-`: the agency is one thing Brandure may
do. Reserving the shorter prefix costs nothing now and avoids a rename if there
is ever a product, a tool or a publication under the same brand.

The cost is verbosity. Accepted — these names are typed rarely and read often.

## What would reverse it

- A skills system with real namespacing, where prefixes become redundant
  duplication of a scope that already exists.
- Evidence that long names measurably degrade skill selection accuracy, which
  would be a reason to shorten rather than to abandon prefixing.
- The prefix leaking into places it does not belong — if it starts appearing on
  documents and client files, tighten the rule rather than dropping it.
