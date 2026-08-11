# Skill registry

Every planned skill. A skill is listed here before it is built — the registry is
the plan, `skills/` is the implementation.

Status values: `not-built`, `drafted`, `in-use`, `retired`.

Types: **build** skills create agency assets and win work. **run** skills
deliver work and operate the agency.

All skills inherit `templates/skill-template.md`, including the two mandatory
closing steps (alignment check, then append to `runs/YYYY-MM.md`).

## Build

Skills that create the agency itself — the assets, proof and pipeline that
exist before a client does.

| Name | Type | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-own-aeo | build | not-built | Apply Brandure's own AEO method to Brandure. The agency must be findable and citable in AI answers for its own category, or the pitch does not survive its first check. | brandure-agency-measure (to baseline), ICP defined |
| brandure-agency-content | build | not-built | Produce answer-shaped content for Brandure's own surface: category explainers, method write-ups, and the earned-media assets that AI answers actually cite. | brandure-agency-own-aeo, positioning settled |
| brandure-agency-prospect-qualify | build | not-built | Score an inbound or sourced prospect against ICP and AEO opportunity: is their answer surface weak, contestable, and commercially worth contesting? | ICP defined, brandure-agency-measure |
| brandure-agency-pitch | build | not-built | Turn a qualified prospect's measured answer-surface position into a pitch: what they are losing, to whom, and what the engagement would do about it. | brandure-agency-prospect-qualify, pricing defined, service definition |

## Run — delivery

Skills that produce client work.

| Name | Type | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-measure | run | not-built | Sample buying-intent prompts across ChatGPT, Claude, Gemini and Perplexity for a named brand and its competitor set. Records which brands are named, in what order, and which domains are cited. The wedge artefact and the baseline everything else is measured against. | Bright Data account (BLOCKED); manual method viable first |
| brandure-agency-citation-map | run | not-built | Map the sources AI answers actually draw on for a category — which domains, which pages, which earned media — so placement effort targets what models cite rather than what ranks. | brandure-agency-measure, Bright Data account (BLOCKED) |
| brandure-agency-placement-plan | run | not-built | Convert a citation map into a prioritised placement plan: which third-party surfaces to pursue, in what order, at what effort, with what expected effect on answer inclusion. | brandure-agency-citation-map |
| brandure-agency-entity-fix | run | not-built | Correct and strengthen the brand's entity footprint — the structured, consistent, machine-resolvable facts models rely on to know what a brand is and what it is for. | brandure-agency-measure |
| brandure-agency-answer-content | run | not-built | Produce client-side content built to be lifted into an AI answer: direct claims, clean structure, explicit comparisons, resolvable entities. | brandure-agency-citation-map, brandure-agency-entity-fix |
| brandure-agency-retainer-report | run | not-built | Recurring client report: movement in answer-surface position since last period, what changed, what caused it, what happens next. | brandure-agency-measure, service definition |

## Run — client operations

Skills that run the client relationship.

| Name | Type | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-onboard | run | not-built | Stand up a new client: create `clients/<slug>/`, capture competitor set, buying-intent prompt set, brand facts and access, then run the baseline measurement. | brandure-agency-measure, service definition |
| brandure-agency-qbr | run | not-built | Quarterly review: cumulative position change, what the work bought, and the case for the next period's scope. | brandure-agency-retainer-report |
| brandure-agency-client-comms | run | not-built | Routine client communication — updates, scope conversations, escalations — in a consistent voice without consuming an evening per message. | service definition |

## Run — agency operations

Skills that run the business.

| Name | Type | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-pipeline | run | not-built | Maintain pipeline state: prospects, stage, next action, expected value. Answers "what needs doing to win work this week". | brandure-agency-prospect-qualify |
| brandure-agency-capacity | run | not-built | Read `runs/` to derive actual hours by skill and client, against available hours. Answers whether the next engagement can be taken, and when subcontracting becomes necessary. | populated `runs/` logs |
| brandure-agency-finance | run | not-built | Track revenue, costs (tooling, subcontractors), and effective hourly rate by engagement type. Feeds pricing. | pricing defined, brandure-agency-capacity |
| brandure-agency-subcontract | run | not-built | Package a delivery skill into a brief a subcontractor can execute against, with a quality bar and an acceptance check. The release valve on the time constraint. | at least one delivery skill in use, brandure-agency-capacity |
