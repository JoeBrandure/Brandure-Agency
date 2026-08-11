# B2B SaaS — prompt template

Primary vertical 2 of 4.

**Template, not an instance.** Edit this freely. Freezing applies to the
instantiated set in `research/vertical-sprint/prompts/`, per the frozen-inputs
rule in `templates/skill-template.md`.

## Market rule

**Defaults to no market. Adding one distorts the result.** Buyers search for
the tool, not for a tool near them. Inserting a city shifts the answer into a
local-services shape — resellers, implementation partners, agencies — which is
a different question from the one the category is bought on.

Run without a geography unless there is a specific reason not to, and record
`none` in the market column rather than leaving it blank. Blank reads as
unrecorded; `none` reads as a decision.

This is an assumption, not a measured finding. B2B SaaS is the one
assumed-non-local category in the sprint, so it carries the test on its own —
see `decisions/2026-08-11-market-elicitation.md`. If adding a market returns a
materially different citation set rather than a local-services shape, the
local/non-local split is the wrong axis.

## Placeholders

| Placeholder | Resolves to |
|-------------|-------------|
| `{competitor}` | A named incumbent in the category being tested. |
| `{competitor A}`, `{competitor B}` | Two named incumbents, for a head-to-head. |

No market placeholder, by design.

Competitor names are elicited, never inferred — same rule as market, and the
same reasoning: a competitor set the buyer would not have named produces a
different test. Record which names were used in the instantiated set.

## Prompts

All buying-intent by design. Informational prompts do not belong in this set.

6. Best project management software for creative agencies
7. {competitor} alternatives for small teams
8. {competitor A} vs {competitor B} for a B2B startup
9. Most affordable CRM for a 10-person sales team
10. Best AI note-taking tool for client calls

Prompt numbers are stable IDs, continuous across all four template files. New
prompts take the next free number; never renumber.
