# Boutique hospitality — prompt template

Primary vertical 4 of 4.

**Template, not an instance.** Edit this freely. Freezing applies to the
instantiated set in `research/vertical-sprint/prompts/`, per the frozen-inputs
rule in `templates/skill-template.md`.

## Market rule

**`{destination}` may be a region rather than a city — that is how buyers
search.** The Cotswolds, the Amalfi Coast, Cornwall, the Scottish Highlands.
Forcing these to a city would be the same error as inserting a city into a B2B
SaaS prompt: a geography the buyer would not have typed.

The two placeholders are not interchangeable. Use `{city}` where the prompt is
city-specific and `{destination}` where a region is legitimate. Record which
was used and what it resolved to — a run on "the Cotswolds" and a run on
"Oxford" are not comparable.

This is an assumption, not a measured finding — see
`decisions/2026-08-11-market-elicitation.md`.

## Placeholders

| Placeholder | Resolves to |
|-------------|-------------|
| `{destination}` | A city **or** a region, whichever a buyer would type. |
| `{city}` | A city. |
| `{competitor}` | A named operator — a members' club or boutique group. |

Competitor names are elicited, never inferred.

## Prompts

All buying-intent by design. Informational prompts do not belong in this set.

16. Best boutique hotels in {destination} for a weekend break
17. Alternatives to {competitor} for a members' club stay in {city}
18. Best independent hotels in {destination}
19. Best boutique hotels in {city} for a city break
20. {destination} boutique vs chain hotels

Prompt numbers are stable IDs, continuous across all four template files. New
prompts take the next free number; never renumber.

## Watch item — prompt 20

**Prompt 20 is the weakest buying-intent test in the set.** "Boutique vs chain
hotels" asks a model to compare two categories, not to recommend a property. It
may well return an explainer naming no hotels at all, which would make it an
informational prompt in buying-intent clothing — the exact thing the sprint
method excludes.

It is kept as supplied and worth running once: a comparison prompt that does
name properties is a useful signal, because category-comparison queries are
common at the top of a travel decision. But judge it on the first run. If it
returns prose without brands, replace it with a recommendation-shaped prompt
rather than carrying dead weight through every re-measure.
