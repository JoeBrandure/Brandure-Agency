# Site layout is centred; motion must never hide content from machines

Date: 2026-10-26

## Decision

Two rules for brandure.io, both taken from Joe's review of the reference site
(viveonix.com) and both binding on any later session that touches `site/`.

**1. Page framing is centred.** Every hero (heading, lede, eyebrow, actions,
and the proof beside it, which now sits beneath it), the 85% prize figure, the
gradient CTA cards and the home SCAN cards are on the centre axis. Body copy,
card interiors with paragraphs, tables, forms and every research and guide
article stay left-aligned, because centred paragraphs are slower to read. The
override lives in `site/src/styles/centre.css`; older comments describing an
asymmetric, left-aligned hero are superseded and must not be "restored".

**2. Motion is allowed only where it can never cost AI Search visibility.**
Scroll reveals, hover lifts, a hiding header and a menu tab are all in use.
They are safe because of five rules in `Motion.astro` and `ThemeScript.astro`,
none of which may be removed:

- The HTML is always complete at final values. Loops that need duplicate
  items (logo strip, testimonials) ship one copy and clone at runtime, so
  crawlers do not ingest every quote twice.
- Automated browsers (`navigator.webdriver` or a known crawler/agent user
  agent) keep `.no-js` from the first paint and get the settled page. Same
  DOM, same text; only the entrance is skipped, so it is not cloaking.
- If the motion runtime has not signalled ready within 2.5s, `.no-js` is put
  back and every hidden state released.
- Print settles everything.
- The hero animates quicker and shorter than scroll reveals (18px, 620ms),
  because hero copy is usually the Largest Contentful Paint element.

Any new hidden-by-default state must be released under `.no-js`, under
`prefers-reduced-motion`, and in print, and must pass the audit below before
it ships.

## The audit

Run against a local build in headless Chromium, every page, six modes: raw
HTML; automated agent with no scroll; a person scrolling the full page (real
desktop user agent, `webdriver` masked); JavaScript off; print media; and the
motion script stripped from the response. Pass condition: zero text blocks
below 0.9 effective opacity in every mode except the person's pre-scroll
state, plus headings, JSON-LD, meta tags, `llms.txt`, sitemap and robots
unchanged against the previous build.

At the time of this record all 21 pages pass. Before the change, the agent
mode left 187 blocks invisible on the home page, 137 on /method and 94 on
/service, and printing the home page left 168 blank.

## Reasoning

The site sells being readable by machines. A crawler or AI agent seeing a
blank section on brandure.io would be the agency failing its own test in
public, and nothing about it would show up in a normal visual review —
which is how the original reveals shipped with that defect.

Centring was Joe's call on taste. It is recorded here so it reads as settled
rather than as drift to be corrected: several comments in the CSS argued the
opposite at length, and a later session reading them would reasonably have
reverted it.
