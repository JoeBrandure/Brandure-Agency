# Legal & professional services — prompt template

Primary vertical 1 of 4.

**Template, not an instance.** Edit this freely. Freezing applies to the
instantiated set in `research/vertical-sprint/prompts/`, per the frozen-inputs
rule in `templates/skill-template.md`.

## Market rule

**City-level required.** Country-level returns directories rather than firms —
"best commercial law firm in the UAE" surfaces Chambers, Legal 500 and
listicles, which records nothing about which firms a model recommends because
the model was never asked to name one.

This is an assumption, not a measured finding. This sweep is its first test —
see `decisions/2026-08-11-market-elicitation.md`. If a country-level run does
return named firms, that is a finding and the rule changes.

## Placeholders

| Placeholder | Resolves to |
|-------------|-------------|
| `{market}` | A city. See note below. |
| `{city}` | A city. |

**Both placeholders resolve to a city in this vertical.** The prompts as
supplied use `{market}` in three and `{city}` in two, which is a distinction
without a difference here given the city-level rule — flagged rather than
silently normalised, since the wording is Joe's. Worth collapsing to `{city}`
before the set is instantiated and frozen.

## Prompts

All buying-intent by design. Informational prompts do not belong in this set.

1. Best commercial law firm for a Series A tech startup in {market}
2. Alternatives to a Big Four accountancy firm for a mid-size business in {market}
3. Top-rated corporate lawyers for company formation in {city}
4. Most affordable outsourced accounting for a 20-person agency in {city}
5. Best employment law solicitors for a small business dispute in {market}

Prompt numbers are stable IDs, continuous across all four template files. New
prompts take the next free number; never renumber.
