# Client-facing reporting deferred

Date: 2026-08-11

## Decision

Client-facing reporting is deferred pending Searchable partner access.

Searchable is expected to handle measurement across engines and may provide
white-labelled client dashboards. Looker Studio or equivalent is the fallback
if it does not.

Nothing about the client reporting layer — format, cadence, what is shown, how
it is delivered — is specified until partner access resolves.

## Reasoning

Specifying a report before knowing the shape of the data it renders is work
done twice. Two unknowns sit upstream of every reporting decision: what
Searchable actually outputs per engine, and whether that output can be exported
or white-labelled for client delivery. Both are answered by partner access and
neither can be usefully guessed.

Deferring costs little at present. There are no clients, so no reporting
obligation exists. The alternative — building a report against an assumed data
shape — produces an artefact that is likely rebuilt and, worse, invites
specifying `brandure-agency-measure` around a schema that may not exist.

The fallback matters more than it looks. Looker Studio or equivalent keeps this
decision from being a dependency on a single partner: if Searchable declines,
delays, or turns out not to export usefully, client reporting still ships,
just with more build effort and against whatever measurement layer Brandure
runs itself.

## Consequence

`brandure-agency-measure` and `brandure-agency-retainer-report` cannot be
specified until Searchable's output shape and export options are known. Both
remain `not-built` and are now blocked on partner access rather than on Bright
Data.

This moves the critical path. Bright Data account setup was the gating item for
the measurement layer; partner access now is. Setting up Bright Data before
partner access resolves risks building collection against a method that
Searchable may supersede.

## Tension with the Bright Data decision — unresolved

`decisions/2026-08-08-bright-data-for-measurement.md` placed the proprietary
measurement layer on Bright Data and cast Searchable as the client-facing
surface only, "complementary, not competing". This decision has Searchable
expected to handle measurement across engines. That is the same tool moving
from surface into substrate.

The 8 August record named exactly this as a reversal condition: "Searchable
moving into proprietary measurement in a way that makes it a substitute rather
than a surface. That would make it a competitor to the core asset and would
need a fresh decision."

This record does not make that fresh decision — it defers reporting, which is
the narrower question. The open question it leaves is whether Brandure still
owns a proprietary measurement layer at all. The 8 August reasoning for owning
one was control of method (prompt set, model set, fresh sessions, cited-domain
capture) and ownership of raw data as a reusable cross-client asset. If
measurement runs on Searchable, both weaken: the method becomes the vendor's
and the historical record sits in the vendor's system. That may be an
acceptable trade for a solo operation with no clients and no time — it is not
obviously wrong — but it is a different strategic position from the one on
record, and it should be decided explicitly rather than arrived at by drift.

**Assumption, unverified:** that Searchable's measurement is good enough to
build a service on — the right engines, buying-intent prompts rather than
keyword tracking, cited domains captured and not just brand mentions. Partner
access is the test. If it fails that test, the 8 August position stands intact
and Bright Data returns to the critical path.

## What would reverse it

- Searchable partner access refused, or delayed significantly enough that it
  blocks a live engagement. Reporting reverts to the Looker Studio fallback and
  Bright Data returns to the critical path.
- Searchable's export or dashboard capability proving insufficient for client
  delivery — no white-labelling, no usable export, or output too coarse to
  report against. Same outcome.
- A client landing before partner access resolves. A paying client needs a
  report; deferral ends and the fallback ships, however manually.
