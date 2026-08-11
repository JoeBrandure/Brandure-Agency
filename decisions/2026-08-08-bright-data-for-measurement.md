# Bright Data for measurement; Searchable as the client surface

Date: 2026-08-08

## Decision

Build Brandure's measurement layer on Bright Data AI scrapers. It is
proprietary infrastructure, owned by the agency, and the source of the raw
answer-surface data everything else is derived from.

Searchable is the client-facing dashboard and tracking surface. It is what the
client logs into. It is complementary to the Bright Data layer, not competing
with it, and neither replaces the other.

## Reasoning

The wedge is measurement — showing a prospect their actual position in AI
answers against named competitors, before anything is sold. That makes the
measurement layer the agency's core asset rather than a line item, and it needs
two properties an off-the-shelf rank-tracking product does not provide:

- **Control of method.** Which prompts, which models, which competitor set,
  fresh sessions with memory off, and the ability to capture cited domains
  rather than just a position score. A product's methodology is fixed by the
  vendor and identical for every one of their customers. Bright Data supplies
  collection capability, leaving the method — the actual intellectual property —
  with Brandure.
- **Ownership of the raw data.** Citation maps, competitor movement over time
  and category baselines are only reusable across clients if Brandure holds the
  underlying records. Data inside someone else's dashboard is rented, and cannot
  be turned into the transferable category assets a solo operation depends on.

Searchable solves a different problem. Clients need somewhere to look between
reports, and building a dashboard is weeks of work that produces no competitive
advantage — dashboards are commodity, method is not. Buying the surface and
building the substrate puts effort where the differentiation actually is.

Standing assumption, not verified: that Bright Data's AI scraper coverage
extends across the model set Brandure needs (ChatGPT, Claude, Gemini,
Perplexity) at usable reliability and cost. This must be checked at account
setup, before any client is quoted against it.

## What would reverse it

- Bright Data coverage or reliability failing against the required model set at
  account setup, or pricing that does not survive contact with realistic
  sampling volumes. Either sends the decision back to alternative collection
  providers, not back to a fixed-methodology product.
- Searchable moving into proprietary measurement in a way that makes it a
  substitute rather than a surface. That would make it a competitor to the core
  asset and would need a fresh decision about whether to keep it in the stack.
- Model providers offering sanctioned measurement APIs. This would change what
  collection infrastructure is worth building and would likely commoditise the
  raw sampling — at which point the differentiation moves entirely to method,
  interpretation and the placement work that follows.
- Sustained delivery evidence that the manual sampling method is sufficient at
  Brandure's client volume. Unlikely past a handful of clients, but if true the
  tooling spend is not yet justified.
