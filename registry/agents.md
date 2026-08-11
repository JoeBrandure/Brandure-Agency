# Agent registry

Every planned agent. Agents live in `.claude/agents/` once built; this registry
is the plan.

Status values: `not-built`, `drafted`, `in-use`, `retired`.

The distinction from skills: a **skill** is a procedure Joe or Claude follows to
produce a named deliverable. An **agent** is a sub-process invoked *by* a skill
to gather or watch something, usually running wide and returning a condensed
result. Agents do not own deliverables and do not write to `clients/` directly —
the calling skill owns the output and owns the run log entry.

| Name | Type | Status | Purpose | Dependencies |
|------|------|--------|---------|--------------|
| brandure-agency-researcher | agent | not-built | General research fan-out: gather and condense evidence on a category, brand, competitor or claim, returning sourced findings with dates rather than a summary of impressions. Called by most build skills. | web access |
| brandure-agency-answer-sampler | agent | not-built | Run a defined prompt set against ChatGPT, Claude, Gemini and Perplexity and return a structured record: brands named and in what order, domains cited, whether review or aggregator sites dominate. Must run in fresh sessions with memory off — a personalised answer is not a market signal. | Bright Data account (BLOCKED); manual method viable first |
| brandure-agency-citation-crawler | agent | not-built | Take cited domains from sampled answers and resolve what is actually behind them: page type, publisher, date, whether the brand appears and how. Turns a list of URLs into a picture of what models are drawing on. | brandure-agency-answer-sampler, Bright Data account (BLOCKED) |
| brandure-agency-competitor-watch | agent | not-built | Track a named competitor set's answer-surface position over time and report movement — new entrants, brands gaining citation share, sources that started appearing. Feeds retainer reporting. | brandure-agency-answer-sampler, baseline measurement per client |
| brandure-agency-prospect-scout | agent | not-built | Find candidate prospects inside a chosen vertical that show the qualifying pattern: commercially serious, weak or absent in AI answers, competitors present. | ICP defined, brandure-agency-answer-sampler |
