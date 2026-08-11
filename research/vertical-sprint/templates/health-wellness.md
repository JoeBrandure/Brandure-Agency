# Health, wellness & aesthetics — prompt template

Primary vertical 3 of 4.

**Template, not an instance.** Edit this freely. Freezing applies to the
instantiated set in `research/vertical-sprint/prompts/`, per the frozen-inputs
rule in `templates/skill-template.md`.

## Market rule

**Always city, never country.** The strictest of the four. These are
appointment-based services chosen on travel distance, so a country-level query
is not a broader version of the same question — it is a question no buyer asks,
and it returns directories and comparison sites rather than clinics.

This is an assumption, not a measured finding — see
`decisions/2026-08-11-market-elicitation.md`.

## Placeholders

| Placeholder | Resolves to |
|-------------|-------------|
| `{city}` | A city. Never a country, never a region. |

## Prompts

All buying-intent by design. Informational prompts do not belong in this set.

11. Best aesthetic clinic in {city} for skin rejuvenation
12. Top-rated private dentist in {city} for veneers
13. Most affordable Invisalign provider in {city}
14. Best sports physiotherapy clinic in {city}
15. Best cosmetic dermatology clinic in {city}

Prompt numbers are stable IDs, continuous across all four template files. New
prompts take the next free number; never renumber.

## Note on refusals

This is the vertical most likely to produce hedged or refused answers — models
are cautious around medical and cosmetic recommendations, and the caution
varies by model and by procedure. A refusal is a logged result, not a failed
run: record what was returned and how it was framed.

If refusals dominate, that is a finding about the category, and a decisive one
either way. It could mean the answer surface is uncontestable and the vertical
drops. It could equally mean whichever brands do get named face little
competition. `decisions/2026-08-08-vertical-shortlist.md` flags regulatory
sensitivity as this vertical's known risk; this is where it would show up.
