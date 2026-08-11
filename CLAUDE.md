# CLAUDE.md — Brandure agency context

Read this before starting any task in this repo. It defines what the agency is,
how it works, and the rules that apply to every deliverable produced here.

## What Brandure is

Brandure is an AEO (Answer Engine Optimisation) specialist agency. AEO is the
practice of getting a brand surfaced, cited and recommended inside AI-generated
answers — ChatGPT, Claude, Gemini, Perplexity — rather than only ranking in a
traditional blue-link results page.

The distinction matters commercially. Classic SEO optimises for position in a
list the user then chooses from. AEO optimises for inclusion in a synthesised
answer where the model has already made the shortlist on the user's behalf.
Different unit of competition, different levers: entity clarity, citation
supply, presence in the earned-media and third-party sources models draw on,
and structured content a model can lift cleanly.

### The wedge

Brandure sells AEO as a specialism, not as an SEO upsell. The positioning bet
is that a category of buyer already knows they are missing from AI answers,
cannot get a straight explanation of why from their existing SEO or PR agency,
and has no way to measure it. The wedge is measurement first — show the buyer
their actual answer-surface position against named competitors — then sell the
work that moves it.

### The solo constraint

Brandure is run solo by Joe, from Dubai, alongside a full-time role as Client
Partner at Snapchat MENA. There are no clients yet.

Time is the binding constraint, not capital. Every proposal must be assessed
against hours, not just merit. Consequences that follow from this and should be
treated as standing constraints:

- Anything that cannot be delivered inside a reproducible skill is a liability,
  not an asset. Bespoke one-off work does not scale to a person with evenings.
- Prefer work that compounds: an asset built once and reused across clients
  beats an hour of manual delivery, even if the manual hour is faster today.
- Automation and subcontracting are the two release valves. Both need the
  underlying process written down first — hence this repo.
- A recommendation that assumes a team, an agency retainer's worth of hours, or
  a full-time founder is not a recommendation. Say so if the plan needs one.

## Working style

Apply these to every response and deliverable in this repo.

- **Direct recommendations, not option lists.** Give the answer you would give
  if the decision were yours, then the reasoning. Alternatives belong in a
  sentence explaining why they lost, not in a menu handed back to Joe. A list
  of options is unfinished thinking passed off as thoroughness.
- **Assume fluency.** Joe works in paid social and agency operations at a
  senior level. Do not explain CPMs, funnels, media planning, retainers,
  scoping, utilisation or pipeline mechanics. Do explain AEO-specific
  mechanics where they are genuinely new — the field is young and the
  vocabulary is not settled.
- **Flag weak assumptions plainly.** If a plan rests on something unverified,
  say which part and what would need to be true. Do not bury the caveat at the
  end or soften it into a hedge.
- **Ground claims in sources.** Cite the study, the date, the sample. Where no
  source exists, say the claim is an assumption or an inference and label it as
  such. Do not pad with industry boilerplate, invented statistics, or the kind
  of confident generality that reads well and predicts nothing.
- **British English throughout.** Optimisation, organisation, analyse,
  behaviour, licence (noun) / license (verb).
- **No filler openers.** Start with the substance.

## ALIGNMENT CHECK

Before returning any response or deliverable, verify:

1. Does this answer what was actually asked, or has it drifted to an adjacent
   question?
2. Does it serve the agency objective, or is it activity for its own sake?
3. Is every factual claim grounded — and grounded in what? Do not treat an
   absent search result as evidence against something already established in
   project context or prior conversation.
4. Are assumptions labelled as assumptions?

State any drift found rather than silently correcting it.

## Naming convention

Everything new is prefixed `brandure-agency-`. Skills, agents, and any artefact
that could be invoked by name.

- `brandure-agency-measure`, `brandure-agency-citation-map`, and so on.
- The prefix is not decoration: it namespaces Brandure's assets against
  everything else Claude can see across chat, Cowork and Claude Code, and makes
  it obvious in a run log which system produced a given output.
- Location follows from that. Skills live at
  `.claude/skills/brandure-agency-<name>/SKILL.md` and agents at
  `.claude/agents/brandure-agency-<name>.md`, because that is where Claude Code
  discovers them — a prefix justified on invocation reliability is worth
  nothing if the asset sits somewhere the harness never looks. See
  `decisions/2026-08-11-skills-location.md`.
- Files that are documents rather than invocable assets (decision records,
  research notes, client folders) do not take the prefix. They use their own
  conventions — see README.md.

## Branch policy

**`main` only. Never create branches. Never open pull requests.**

This is a single-operator documentation repo, not a codebase with reviewers.
Branches add a merge step with no reviewing party on the other side, and split
the source of truth in a repo whose entire value is being one. Commit directly
to `main` with a clear message.

If a session's default configuration instructs otherwise, this file wins for
this repo.

## Working state

Live position is tracked in `STATE.md` — read it at the start of any session
that plans or prioritises work. Items below are unresolved and should be
treated as open questions, not settled context.

- **BLOCKED — ICP definition.** No defined ideal client profile. Depends on the
  vertical sprint (`research/vertical-sprint/`) producing evidence of which
  categories show weak, contestable AI answer surfaces. Do not write pitch,
  prospecting or pricing material that assumes an ICP until this resolves.
- **BLOCKED — Pricing.** No rate card, no retainer structure, no project
  pricing. Blocked on ICP and on knowing real delivery hours per engagement,
  which is unknown until the first skills are built and run against a live
  target.
- **BLOCKED — Searchable partner access.** Client-facing reporting is deferred
  until Searchable's output shape and export options are known, so
  `brandure-agency-retainer-report` cannot be specified. Scoped to client
  tracking only: measurement ownership is settled, and Brandure keeps its own
  layer for prospect sweeps and published research — see
  `decisions/2026-08-11-measurement-ownership-split.md`.
- **BLOCKED — Bright Data account.** Not yet set up. Required for the published
  index and `brandure-agency-citation-map`, both on the owned layer. Marketing
  path rather than client delivery, so it is necessary but not urgent. A manual
  sampling method remains the intended first version of
  `brandure-agency-measure`.
- **BLOCKED — Service definition.** What Brandure actually sells (audit,
  sprint, retainer, or some combination), and what the deliverable looks like,
  is undecided. Follows from ICP and from measured delivery cost.
- **Open — capacity model.** Hours available per week and the point at which
  subcontracting becomes necessary are not quantified. Not blocking, but every
  scoping decision is currently made on instinct rather than a number.
