# Content log

Running log of published content across all channels. One row per published
piece.

**Not seeded — see below.** The table is empty because no seed rows were
supplied.

## Why this exists

Every published piece is a raw material for the next one. The log exists so a
post can be found and repurposed months later, when the conversation that
produced it is long gone and nobody remembers what was already said.

Two columns carry that weight: **Repurposed from** and **Repurposed to**.
Together they make the content waterfall traceable in both directions — from a
long-form source down to the posts derived from it, and from any post back to
what it came from. Without them the log is a publishing archive; with them it
is a working index.

The mechanic behind it is in
`research/sources/2026-08-12-donnelly-searchable-playbook.md`: one long-form
asset decomposes into roughly 10 short posts, 3 clips and one newsletter. For
Brandure the long-form source is the published research index, which is what
makes the index affordable for a solo operator — the content cost is amortised
across a month of posts rather than paid once.

## How to use it

- **Log at publication**, not in a weekly catch-up. A row added from memory
  loses the source asset and the repurposing trail, which is the whole point.
- **Metrics are saves, shares and new followers.** Not views, not likes. Views
  measure the algorithm; saves and shares measure whether the piece was worth
  keeping or passing on. Fill them in at a consistent interval after posting —
  pick one and hold it, since a 24-hour figure and a 30-day figure are not
  comparable.
- **Source asset** names the research index entry or long-form piece the post
  derives from. Write `original` where there is none, rather than leaving it
  blank — blank reads as unrecorded.
- **Content pillar** must be one of the three or four standing pillars. Pillars
  are not yet defined; that work sits behind the personal-brand phase, which is
  deferred. Until then, record the topic and normalise later.

Row format:

```
| 2026-09-03 | Joe LinkedIn | Text post | — | research index: legal 2026-08 | 41 | 12 | 8 | — | TikTok 2026-09-05 | Strongest performer of the week |
```

## Log

| Date | Channel | Format | Content pillar | Source asset | Saves | Shares | New followers | Repurposed from | Repurposed to | Notes |
|------|---------|--------|----------------|---------------|-------|--------|---------------|-----------------|---------------|-------|

Channel is one of: Joe LinkedIn / Brandure LinkedIn / TikTok.

## Status

**No content published.** The log is structure only.

The instruction that created this file was truncated mid-sentence at "Seed
with", so the intended seed rows are not recorded here. They were not invented:
a content log is a record of what was published, and fabricated rows would make
it worse than empty. Supply them and they will be added.

Related deferral: the personal-brand mechanics in
`research/sources/2026-08-12-donnelly-searchable-playbook.md` are marked
reference-only until the outbound and scale phase, so sustained publishing is
not expected before then. This log is in place ahead of that so nothing
published in the meantime goes unrecorded.
