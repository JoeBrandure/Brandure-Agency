# Skill registry

Every planned skill. A skill is listed here before it is built — the registry is
the plan, `.claude/skills/` is the implementation.

Status values: `not-built`, `drafted`, `in-use`, `retired`.

Track: **build** skills create agency assets and win work. **run** skills
deliver work and operate the agency. Track is a frontmatter field on each
skill, not a directory — see `decisions/2026-08-11-skills-location.md`. The
section headings below carry the finer grouping.

A skill that genuinely does both carries `build, run`. Introduced 2026-08-17
for the first dual-track skill, and the only multi-value convention in this
column.

All skills authored here inherit `templates/skill-template.md`, including the
two mandatory closing steps (alignment check, then append to
`runs/YYYY-MM.md`). Externally-authored skills do not inherit the template —
see the section at the end of this file.

Each skill is a directory — `.claude/skills/brandure-agency-<name>/SKILL.md` —
so it can carry prompt sets, rubrics and output templates alongside the
instructions. All skills sit flat there regardless of track, because that is
where Claude Code discovers them. Externally-authored skills keep their
upstream name and internal structure but sit in the same place — see the
section at the end of this file.

The Dependencies column below is an index. The skill file is authoritative;
both are updated in the same commit. **Externally authored skills invert this**
— see the section at the end of this file. `(BLOCKED)` marks a dependency that is
currently blocking, matching `STATE.md`.

## Build

Skills that create the agency itself — the assets, proof and pipeline that
exist before a client does.

| Name | Track | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-own-aeo | build | not-built | Apply Brandure's own AEO method to Brandure. The agency must be findable and citable in AI answers for its own category, or the pitch does not survive its first check. | brandure-agency-measure (to baseline), ICP defined |
| brandure-agency-content | build | not-built | Produce answer-shaped content for Brandure's own surface: category explainers, method write-ups, and the earned-media assets that AI answers actually cite. | brandure-agency-own-aeo, positioning settled |
| brandure-agency-prospect-qualify | build | not-built | Score an inbound or sourced prospect against ICP and AEO opportunity: is their answer surface weak, contestable, and commercially worth contesting? | ICP defined, brandure-agency-measure |
| brandure-agency-pitch | build | not-built | Turn a qualified prospect's measured answer-surface position into a pitch: what they are losing, to whom, and what the engagement would do about it. | brandure-agency-prospect-qualify, pricing defined, service definition |
| brandure-agency-package | build | not-built | Bundle `.claude/skills/` into a plugin Cowork can consume, so delivery skills are invocable on the surface delivery actually runs from. Re-run whenever a skill changes, which is why it is a skill rather than a one-off build step. | At least one skill built (currently none); plugin layout not yet scoped; `decisions/2026-08-11-delivery-surface.md` |

## Run — delivery

Skills that produce client work.

| Name | Track | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-measure | run | not-built | Sample buying-intent prompts across ChatGPT, Claude, Gemini and Perplexity for a named brand and its competitor set. Records which brands are named, in what order, and which domains are cited. The wedge artefact, and the engine behind prospect sweeps and the published index. Runs on the owned layer, not Searchable. | None blocking — manual method needs no tooling and is the intended first version. Bright Data scales it later. |
| brandure-agency-citation-map | run | not-built | Map the sources AI answers draw on for a category — which domains, which pages, which earned media. **Scoped to prospect sweeps and published research index production**, where there is no client Searchable account to read from. **Excluded from client engagements:** Searchable's native cited-sources layer covers this, and running it again duplicates work already paid for. See `decisions/2026-08-12-searchable-measurement-capability.md`. | brandure-agency-measure, Bright Data account (BLOCKED) |
| brandure-agency-placement-plan | run | not-built | Convert a citation map into a prioritised placement plan: which third-party surfaces to pursue, in what order, at what effort, with what expected effect on answer inclusion. | brandure-agency-citation-map |
| brandure-agency-entity-fix | run | not-built | Correct and strengthen the brand's entity footprint — the structured, consistent, machine-resolvable facts models rely on to know what a brand is and what it is for. | brandure-agency-measure |
| brandure-agency-answer-content | run | not-built | Produce client-side content built to be lifted into an AI answer: direct claims, clean structure, explicit comparisons, resolvable entities. | brandure-agency-citation-map, brandure-agency-entity-fix |
| brandure-agency-retainer-report | run | not-built | Recurring client report: movement in answer-surface position since last period, what changed, what caused it, what happens next. Reads Searchable tracking, not the owned layer. | Searchable partner access (BLOCKED) — client reporting deferred, see `decisions/2026-08-11-client-reporting-deferred.md`; service definition |

## Run — client operations

Skills that run the client relationship.

| Name | Track | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-onboard | run | not-built | Stand up a new client: create `clients/<slug>/`, capture competitor set, buying-intent prompt set, brand facts and access, then run the baseline measurement. | brandure-agency-measure, service definition |
| brandure-agency-qbr | run | not-built | Quarterly review: cumulative position change, what the work bought, and the case for the next period's scope. | brandure-agency-retainer-report |
| brandure-agency-client-comms | run | not-built | Routine client communication — updates, scope conversations, escalations — in a consistent voice without consuming an evening per message. | service definition |

## Run — agency operations

Skills that run the business.

| Name | Track | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-pipeline | run | not-built | Maintain pipeline state: prospects, stage, next action, expected value. Answers "what needs doing to win work this week". | brandure-agency-prospect-qualify |
| brandure-agency-capacity | run | not-built | Read `runs/` to derive actual hours by skill and client, against available hours. Answers whether the next engagement can be taken, and when subcontracting becomes necessary. | populated `runs/` logs |
| brandure-agency-finance | run | not-built | Track revenue, costs (tooling, subcontractors), and effective hourly rate by engagement type. Feeds pricing. | pricing defined, brandure-agency-capacity |
| brandure-agency-subcontract | run | not-built | Package a delivery skill into a brief a subcontractor can execute against, with a quality bar and an acceptance check. The release valve on the time constraint. | at least one delivery skill in use, brandure-agency-capacity |

## Externally authored

Skills authored outside this repo. They keep their upstream name, internal path
structure and frontmatter byte-for-byte, so the repo copy stays verifiable
against what is uploaded to the platform — see
`decisions/2026-08-17-external-skill-artefacts.md`.

**For these rows the registry is authoritative, not an index.** Track is
recorded here and nowhere else, because the frontmatter exemption means it does
not exist in the skill file. This is the reverse of the rule in
`templates/skill-template.md`.

Location is not exempt: they sit at `.claude/skills/<upstream-name>/` like
every other skill.

| Name | Track | Status | Purpose | Dependencies |
|------|-------|--------|---------|--------------|
| aeo-seo-geo-expert | build, run | drafted | Senior agency-side answer-engine strategist. Visibility audits, prompt strategy, citation mapping, entity and schema work, earned placement, measurement, and reading Searchable data. Mandate is Brandure's own visibility first, client delivery second — hence dual-track. | None blocking. Reads Searchable data where a client account exists (Searchable partner access BLOCKED), but is not gated on it for Brandure's own work. |
