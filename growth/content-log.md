# Content log

Running log of published content across all channels. One row per published
piece.

## The table is intentionally empty

**Decided 2026-08-12. No seed rows, no example rows, ever.**

A content log is a record of published output. Anything sitting in the table is
read as something that went out. An example row is indistinguishable from a
real record once the context that introduced it has scrolled away — and the
rows most likely to be believed are the ones with plausible metrics attached.

This applies to demonstration rows as much as to seed data, and it does not
expire once real rows exist. A fabricated row surrounded by genuine ones is
harder to spot, not easier.

The column semantics are documented below in prose instead. An earlier version
of this file carried a fenced example row; it has been removed under this
decision.

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

## Columns

| Column | What goes in it |
|--------|-----------------|
| Date | Publication date, `YYYY-MM-DD`. |
| Channel | One of: Joe LinkedIn / Brandure LinkedIn / TikTok. |
| Format | Text post, carousel, short video, newsletter, and so on. |
| Content pillar | One of the standing pillars. Not yet defined — record the topic and normalise later. |
| Source asset | The research index entry or long-form piece it derives from. Write `original` where there is none, never blank. |
| Saves | Raw count. |
| Shares | Raw count. |
| New followers | Attributable to the post. |
| Repurposed from | The earlier piece this was derived from, by date and channel. |
| Repurposed to | Anything later derived from this, by date and channel. Updated retrospectively. |
| Notes | Anything needed to interpret the row later. |

## How to use it

- **Log at publication**, not in a weekly catch-up. A row added from memory
  loses the source asset and the repurposing trail, which is the whole point.
- **Metrics are saves, shares and new followers.** Not views, not likes. Views
  measure the algorithm; saves and shares measure whether the piece was worth
  keeping or passing on. Fill them in at a consistent interval after posting —
  pick one and hold it, since a 24-hour figure and a 30-day figure are not
  comparable.
- **Blank means unrecorded, not zero.** Write `0` where a metric was checked
  and was zero.

## Log

| Date | Channel | Format | Content pillar | Source asset | Saves | Shares | New followers | Repurposed from | Repurposed to | Notes |
|------|---------|--------|----------------|---------------|-------|--------|---------------|-----------------|---------------|-------|

## Status

**No content published.** The log is structure only, and empty by decision
rather than by omission.

Related deferral: the personal-brand mechanics in
`research/sources/2026-08-12-donnelly-searchable-playbook.md` are marked
reference-only until the outbound and scale phase, so sustained publishing is
not expected before then. This log is in place ahead of that so nothing
published in the meantime goes unrecorded.
