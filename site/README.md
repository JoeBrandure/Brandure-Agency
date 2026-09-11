# The brandure.io website

This folder holds the whole public website and nothing else. The rest of the
repo — `decisions/`, `research/`, `.claude/` — is the agency's own working
record and never appears on the site.

Written for someone who is not a developer. You do not need to understand the
code to add research or publish changes.

---

## Running it on your own machine

You need Node 22 or newer installed once. After that:

```
cd site
npm install     # first time only
npm run dev
```

That prints a local address, usually `http://localhost:4321`. Open it in a
browser. Leave the command running — every time you save a file the page
updates by itself. Press `Ctrl+C` in the terminal to stop.

To check the real, published version of the site before it goes out:

```
npm run build     # makes the finished site in site/dist
npm run preview   # serves that finished site locally
```

---

## Adding a research piece

**One file. Nothing else changes.** The index page, the RSS feed, the sitemap,
the AI summary file and the social preview image all pick it up automatically.

1. Create a file in `site/src/content/research/`. Name it with hyphens and no
   spaces, e.g. `aesthetic-clinics-dubai.md`. That name becomes the web
   address: `brandure.io/research/aesthetic-clinics-dubai`.
2. Start the file with this block, between the two lines of dashes:

```
---
title: "How four answer engines rank Dubai aesthetic clinics"
description: "One sentence for search results and social previews."
published: 2026-09-01
updated: 2026-09-14        # optional, only if you revise it later
vertical: "Aesthetics"
placeholder: false
sources:
  - label: "Name of the source"
    url: "https://example.com"
---
```

3. Write the piece underneath in normal formatting: `##` for a heading, blank
   lines between paragraphs, `- ` for bullets.
4. Save. If `npm run dev` is running you will see it immediately.

### The two placeholder pieces

There are two placeholder files in that folder now. They exist so the design
can be seen working, and they say clearly on the page that they are not real
research.

**They are excluded from search engines, from the sitemap, and from the RSS
feed** — because publishing invented findings under a domain that sells
evidence would be self-defeating, even briefly. That exclusion is driven by
`placeholder: true` in the file, not by the file's name.

**To remove one: delete the file.** Nothing else to change.

To turn one into real research: set `placeholder: false`. It then becomes
indexable and appears everywhere automatically.

---

## Publishing changes

The site rebuilds and republishes itself whenever changes reach the `main`
branch of the repo. Commit, push, and Netlify does the rest — usually under a
minute.

To see a change before the public does, push it and open the **deploy preview**
Netlify creates for it. Nothing reaches brandure.io until a build on `main`
succeeds.

---

## Pointing the domains — read before doing this

**This has not been done yet, and must not be done without Joe's explicit
approval.** The site is built and ready; the domain is a separate, deliberate
step.

### brandure.io

Add `brandure.io` as the primary domain on the Netlify site, then follow
Netlify's DNS instructions. `www` redirects to the plain version
automatically — that rule is already in `netlify.toml`.

### brandureai.com — this one carries live email

**`brandureai.com` runs Google Workspace mail. Breaking its DNS breaks Joe's
email.**

The mail records are `MX`, plus `TXT` records for SPF, DKIM and DMARC. Web
traffic uses entirely different records — `A`, `AAAA` and `CNAME`. Redirecting
the website means changing **only** the web records.

The safe method:

1. **Do not move the domain's nameservers to Netlify.** Moving nameservers
   replaces the whole DNS zone, which is how mail records get lost. Leave the
   domain where its DNS is hosted today.
2. In Netlify, add `brandureai.com` as a **domain alias** on the site.
3. At the current DNS host, change only the `A`/`CNAME` records for the root
   and `www` to the values Netlify gives you. Touch nothing else.
4. **Before the change**, record the existing `MX`, SPF, DKIM and DMARC values
   so you can put them back:
   ```
   dig +short MX brandureai.com
   dig +short TXT brandureai.com
   dig +short TXT google._domainkey.brandureai.com
   dig +short TXT _dmarc.brandureai.com
   ```
5. **After the change**, run the same four commands and confirm the answers are
   identical. Then send a test email to a `@brandureai.com` address from an
   outside account and confirm it arrives.

The redirect is not finished until that test email arrives.

### branduredigital.com

No mail on this one, so it is lower risk. Same domain-alias method.

---

## What was measured

Recorded from actual runs, not estimates. Lighthouse 12, desktop preset,
against the built site served locally. The live site is at
`brandure.netlify.app`, which this build environment cannot reach, so these
are local numbers.

| Page | Performance | Accessibility | Best practices | SEO | TBT | CLS |
|---|---|---|---|---|---|---|
| Home | 100 | 100 | 96 | 100 | 0 ms | 0.025 |
| Service | 100 | 100 | 96 | 100 | 0 ms | 0.041 |
| Questions (`/faq`) | 100 | 100 | 96 | 100 | 0 ms | 0 |
| Research | 100 | 100 | 96 | 100 | 0 ms | 0.042 |
| Method | 100 | 100 | 96 | 100 | 0 ms | 0 |

Home has flickered between 99 and 100 across runs. It is entirely the CLS
figure below; largest contentful paint is 0.6s and blocking time is zero.

Motion still costs nothing measurable. Blocking time is zero on both: every
sticky-pinned section and its scroll runway is gone, and there is one scroll
listener on the page rather than three.

**Home CLS varies run to run and is worth knowing about.** The hero's drifting
blur mesh is the only thing that shifts. It was briefly much worse — 0.169,
dropping performance to 92 — because the parallax was driven from the mesh's
live bounding rect, so the layers jumped to an offset the instant the script
ran. It is now measured from the scroll position at which the mesh first
renders, so the value is 0 on the first frame, and the layers carry
`contain: layout paint`. That put it back in the 0.021–0.049 band it was in
before, which scores 100 and sits inside the "good" threshold of 0.1. It has
not been driven to zero; a blurred decorative blob drifting behind the hero is
the cost.

**Logo weight, since it was flagged before:** the hero's four marks are now
generated variants — trimmed to the artwork's own bounding box and resized —
so Viveonix went from a 3840×2160 / 600KB canvas to 420px / 45KB. The dark
copies are `loading="lazy"` and are never downloaded in the light theme, which
was checked on the network rather than assumed. The trust strip now points at the same
generated variants, so `viveonix.webp` at 102KB is no longer requested by
either page.

The dark theme was audited by building a copy with `data-theme="dark"` pinned
on every page and running the same audit against it, so axe checked the real
rendered dark colours rather than the tokens alone. Its colour-contrast audit
passes on both pages tested.

**Two scores need explaining rather than fixing.**

*Best practices 96* is a console error from the local test environment, where
the analytics host is unreachable behind the sandbox proxy. It will not occur
on the real site. Re-check after the first live deploy.

*SEO 66 on a placeholder* is the deliberate `noindex` doing its job — the audit
marks any page blocked from indexing down. The identical page scores **100**
with `placeholder: false`, which was tested directly rather than assumed.

### The method page

**SCAN — surface, cause, act, null.** The route was reserved: four cards on a
dark band with a placeholder chip on them. The framework was already in the
repo and is the strongest thing Brandure has to say, so this pass writes it up
rather than replacing it. **That commits to the name**, which was listed as
pending — changing it means editing `k` and `name` in `src/data/method.ts` and
nothing else on the site.

The page is built around the fourth stage. S, C and A are what any competent
agency would claim to do; N is the one that makes the other three checkable,
and it is the part a competitor cannot copy without also accepting the months
where the honest answer is "nothing worked".

- **The word as the hero** — four accent tiles that land in sequence, so SCAN
  reads as being spelled out rather than arriving as a block.
- **A sticky letter tracker** that follows the reader through the four bands,
  driven by one IntersectionObserver with no scroll listener. It is a slim bar
  inside one section, not a return of the scroll-pinned scrub sections that
  were removed — it never holds the reader in place, and with JavaScript off it
  renders in its resting state and the page reads fine without it.
- **Four stage bands**, each with its letter set huge and faint behind the
  content, its own accent down the left edge, three concrete actions, and a
  **"Rules out"** line naming the specific wrong conclusion that stage prevents.
- **Three shapes a re-measure can take** — the argument, drawn rather than
  described: tracked moves and control does not; both move together; neither
  moves. Each is a two-line chart that wipes in, with the tracked line in the
  card's accent and the control line muted *and* dashed, so the two are
  separable in greyscale.
- What is measured, with the engine marks; what SCAN is not; CTA.

**Two things that will break the charts if edited carelessly.** They do not use
the site's `.draw` helper: that reveals a line by animating
`stroke-dashoffset`, and these paths carry `vector-effect: non-scaling-stroke`,
which makes dash values screen-space while `getTotalLength()` returns user
units — the lines drew to 76% and stopped, and the dash pattern distinguishing
the control line was overwritten by the draw mechanism's own dasharray. They
use a `clip-path` wipe instead. And the key describes line *style*, not colour,
because each card's tracked line takes that card's accent and a coloured
swatch would match none of them.

**The stage labels in the hero are `--ink`, not their accent.** They sit on the
drifting gradient mesh, where cobalt at 12px measured 3.26:1 — and because the
mesh moves, small coloured text on it is fragile by construction. The tile
directly above carries the colour.

### Alignment and layout fixes from the mid-build audit

Four of these were invisible until measured, which is why they survived
several passes:

- **`.center-row` was never centring anything.** It is a `<p>`, so the global
  `p { max-width: var(--measure) }` capped it at ~626px anchored to the wrap's
  left edge, and everything inside centred within *that* box. "All research →"
  sat 95px left of the page centre and the pricing note read as fully
  left-aligned. `max-width: none`.
- **Three numbered sequences, three different shapes.** `/service`,
  `/research` and `/method` each had their own treatment — accent on the top
  edge versus the left, a filled circle badge versus a bare mono numeral. All
  three now use a filled badge on a rail with the accent down the left.
  `/method`'s badge is its SCAN letter.
- **The rails broke between steps.** The connector filled each item's own box
  and stopped, leaving a gap across the grid gutter. A negative bottom margin
  equal to the gutter bridges it.
- **`/research`'s step cards wasted their right third.** The body is capped at
  the reading measure, so in a 1120px card it wrapped at ~730px with the
  "Without it" line running full width underneath — a narrow paragraph above a
  wide one, five times down the page. The failure is now a tinted panel beside
  the step, which fills the card and promotes it from footnote to the second
  half of the point.
- `.cta-card h2` had 8px under a 64px headline. Now 0.9rem.
- The prompt rotator moved ahead of the deliverables on `/service`: that
  section leans on "the frozen prompt set" four times, and the rotator is
  where the phrase stops being jargon.

### Copy fixes from the same audit

- **The CTA and the form blurb said the same thing twice and disagreed on the
  turnaround** — "about a week" against "two working days", on one screen. The
  CTA now carries the pitch and the form blurb is operational only.
- **`Rules out: that your numbers went up because of us`** read as ruling out
  the thing we want to claim. Now "That a rise proves we caused it."
- **"A comparison whose confounds are not separable"** — "confounds" as a noun
  is research jargon in a heading a buyer meets cold. Now "A difference we
  cannot attribute."
- **`5engines`, `DubaiLocation belongs…`, `Withdrawn13 August`** — adjacent
  spans with no whitespace between them. Visually fine, read aloud as one
  word. A space between the spans fixes it without touching the layout.
- The two placeholder research cards printed **"Placeholder Placeholder"** —
  the vertical tag and the draft tag carried the same word.
- Straight quotes replaced with typographic ones.

### The research page

**What it is saying, since that was the question put to it.** No research is
published yet, and none can be invented — a fabricated finding on a site whose
proposition is "we measure rather than assert" destroys the thing it is
decorating. The old page listed two placeholder pieces under a promise to
publish, which reads as an empty shelf with a sign on it.

So the page argues the programme instead of listing articles:

- **Three commitments in the hero** — five engines reported separately, three
  things published with every number, zero findings published from a single
  run.
- **"How a scan runs"** — five steps on a numbered spine, each carrying the
  specific failure it prevents rather than a description of the activity. The
  rail draws down between the numbers as the steps arrive. Content in
  `SCAN_STEPS`.
- **"What we will not publish"** — three disqualifiers, each illustrated with a
  scan of Brandure's own that hit it. A standard nothing has ever failed is not
  a standard, so all three examples are self-implicating. Content in
  `REFUSALS`.
- **A finding of ours that did not survive its re-run** — the strongest thing
  on the page, because it costs something to say. The 13 August Dubai scan's
  headline for aesthetic clinics was "four surfaces, four disjoint lists, no
  overlap"; the clean 17 August re-run contradicted it and it was downgraded to
  "consensus is low, not absent". Shown as a struck-through claim beside its
  replacement, with what survived underneath.
- **A coverage figure** — whether a Google AI Overview fired at all, per
  category, across both runs. One row per category rather than two rows of
  anonymous squares, because the point is *which* category reversed: four
  gained an overview and one lost it, which is what makes a single clean
  explanation unlikely. Only the row that went backwards is marked.
- The piece list, as cards, with the empty shelf stated plainly.

**Everything on the page comes from the repo's own scan record** —
`research/vertical-sprint/scans/2026-08-13-dubai/` and `.../2026-08-17-dubai-rerun/`.
No figure is invented, nothing is a finding about a client, and where a claim
cannot be separated from its confounds the confound is on the page rather than
in a footnote. Both runs are n=1 and the page says so twice.

**`SHOW_WITHDRAWN` in `src/data/research.ts` removes the withdrawn-finding
section in one edit.** It is the most exposed part of the page — it publishes
detail from an internal scan marked "not client-safe", which means those
findings are not safe to state as fact, which is exactly what the section
refuses to do with them. The switch exists so that judgement can be reversed
without unpicking the page.

### The one sourced statistic

**84% of what AI answers cite is media a brand does not own.** Muck Rack, "What
Is AI Reading?" / Generative Pulse, May 2026 — more than 25 million links from
ChatGPT, Claude and Gemini across 17 industries. The figure has held between
82% and 89% across three editions running back to July 2025. Method at
generativepulse.ai/report. Corroborated independently by AirOps (85%) and by an
academic study of LLM brand sourcing (85.7% of URL citations non-owned).

It lives on the home page between the problem grid and the CTA, with **the
source and its caveat on the page rather than in a footnote**. A site whose
proposition is "we show our working" cannot put its only statistic behind a
superscript.

**Two things before quoting it anywhere else.** Muck Rack sells PR software, so
they have a commercial interest in earned media mattering; the sample size and
the stability across three editions are why it is used anyway, and the page says
so. And it is a **citation-share** figure, not a promise about anyone's results
— it says where the inputs come from, not what a given brand would gain. The
copy must never imply otherwise. `PRIZE` in `src/data/content.ts` carries both
warnings at the point of definition.

### Sentence length and clipping

`scratchpad/lint.mjs` checks three things across every page at 1440px and 390px:

- **Clipping** — an element whose content actually exceeds its box and is
  hidden. It excludes `.split .w` (the headline word-reveal mask) and
  `.sr-only`, both of which are `overflow: hidden` by design. Without those
  exclusions it reports 15 false positives on the home page alone.
- **Sentence length** — anything over 28 words, and headings over 12.
- **Em-dash count per page.** The habit kept creeping back; where a dash was
  doing a full stop's job it is now a full stop.

All five pages currently report zero on the first two.

### The voice, and where it comes from

Modelled on **growthagency.co**, which Joe supplied on 2026-08-27 as the
reference. Their pattern, and what we took from it:

- **Contractions everywhere.** "You're spending more, but not scaling faster."
  Not having them was the single loudest thing making our copy read as
  machine-written.
- **Headings are the reader's situation, in their words.** "Your data is a
  mess." Not a description of a phenomenon — a sentence the reader would say
  about themselves. Ours became "You're losing deals you'll never hear about."
- **Short sentences. Fragments allowed.** "Budgets go up, but ROI plateaus."
- **Outcome first, mechanism later or never.** Their H1 is "Delivering revenue
  growth – without the fluff." Ours follows the same shape.
- **The buyer is named.** They say "modern CMO" and "Only 5 CMOs accepted per
  quarter". We cap at four new companies a quarter and say so.
- **Warm CTAs.** "Let's build your growth engine", "get your growth scorecard".
  Ours are "Show me where I stand", "See what you get", "Book a call".
- **The problem/effect box pairing** they use is the one we already had, which
  is why that component stayed.

**Two things of theirs we did not take.** Emoji in headings — 🚀 ✅ 📊 — which
would fight this site's more restrained design; that is a brand call rather
than a copy one, so it is left for Joe. And an invented quantified prize
("you're likely sitting on 10-30% untapped revenue"), because we have no
figure to support one.

One correction to an earlier pass: they **do** use the antithesis this site had
stripped out — "Scaling starts with visibility, not budget", "scale systems,
not people". Three times on a long page, as short aphorisms. The fault was
never the device, it was the volume and the sentence length.

### How the copy is written

Rewritten end to end on 2026-08-27 because it read as written to be admired
rather than to be read. The audience is a business owner or marketing director
who has noticed they are losing work and does not have twenty minutes.

What went, and why it kept creeping back in:

- **Antithesis.** "Not a measurement, an anecdote with a percentage sign."
  "Artefacts, not activity." Once a page it is a device; three times a page it
  is a tic, and it was on almost every line.
- **Aphoristic definitions.** "A measurement that only ever produces a reason
  to hire us is not a measurement." Clever, and nobody talks like that.
- **Literary inversion.** "Then, and only then, do the work."
- **Abstract nouns as subjects.** Sentences whose subject is "a prompt set" or
  "the unit of competition" rather than you, us, or the AI.
- **Field vocabulary in headings.** "Freeze the prompt set" became "Agree the
  questions, then leave them alone". Entity resolution, grounding and control
  sets read as competence to someone already in AEO and as noise to the person
  buying.

What replaced it: second person, short declaratives, concrete nouns, and the
consequence stated before the mechanism. British English throughout, per
`CLAUDE.md`.

`scratchpad/tells.mjs` scans the built pages for those constructions. It is
deliberately over-sensitive — "rather than" and a single em-dash aside are
ordinary English and will trip it — so read the sentences it flags rather than
the count.

### Service and Method do different jobs

They used to do the same job twice. `/service` walked all four stages in as
much detail as `/method` did — same four headings, same artefacts, same
arguments — so neither page owned the method and a reader got it twice.

**`/service` is organised by what you buy.** Why this buyer needs it, why it
is not the thing they already pay for, the two packages with every artefact
attached to the one it belongs to, and the price on the same card. It **shows**
SCAN — four letters, one line each, and a link — and refuses to explain it.

**`/method` is organised by how it runs.** SCAN in full, the failure each stage
prevents, and every instrument the method depends on. The prompt rotator moved
here from `/service`: a frozen prompt set is a method artefact, and showing it
is how the phrase stops being jargon.

The test for where a paragraph belongs: **if it explains how a stage works it
is Method; if it describes something that lands on a desk it is Service.**

`PACKAGES` in `src/data/content.ts` replaced two structures — `OFFERS`
(prices) and `DELIVERABLES` (artefacts, listed stage by stage). Splitting them
was what let the method leak onto the commercial page. `covers` names the SCAN
stages each package includes, so the relationship is stated without the method
being restated, and the home page carries a short `teaser` written for it
rather than lifting the first few artefact lines.

### The N in SCAN is Net, not Null

It was Null until 2026-08-27. The mechanism has not changed — a share of the
prompts is held back at baseline and never worked on — but "Null" named *our
instrument* and described the one thing in the method we deliberately do not
do, so it read as a stage the client pays for and gets nothing from.

**Net states it from their side:** the movement that is actually theirs once
the market's own is subtracted. Gross against net needs no explaining to this
buyer, and it gives the page its sharpest line — everyone else reports the
rise, we report the part of it we caused.

Changing it back, or to something else, means editing `k` and `name` in
`src/data/method.ts`. `STAGES` in `content.ts` mirrors it for the home page.

### The four stages are the same four everywhere

`Baseline / Diagnosis / Execution / Re-measurement` on `/service` and the home
page, `Surface / Cause / Act / Null` on `/method`, with nothing on any page
connecting the two sets. A reader going Method → Service met eight stages
instead of four, which quietly undid the framework `/method` exists to build.

They now carry the SCAN name everywhere, with the plain-English label kept
alongside it on `/service` (`Surface — the baseline`), because a deliverables
list still reads better with the ordinary word in it. `DELIVERABLES[].n` is
the SCAN letter rather than `01`–`04`, and the section lede links to `/method`.

### "Engine", not "surface"

Both words were used for the same thing and neither was ever defined — "five
engines" in one paragraph, "all five surfaces" and "Five-surface visibility
audit" in the next. Selling copy now says **engine** throughout.

The one deliberate exception is the withdrawn finding on `/research`, which
quotes a claim about "four surfaces". That is the verbatim 13 August record and
editing it would falsify it, so the section lede explains the discrepancy
instead: the scan predates Claude joining the set.

### The service page

It answers the one question the home page raises and does not close: what
actually happens, and what lands on your desk at the end of each part.

- **A hero with three standing facts** — five engines, two weeks to a diagnosed
  cause, one control set.
- **"This is not an SEO retainer with a new name"** — a five-row comparison of
  what is being won, where the answer comes from, what third place means, how
  it is measured and what a report proves. It is the single most useful thing
  the page can do, because it draws the line against what buyers assume this is.

  The table takes a side rather than presenting two equal options: the
  answer-engine column runs on a continuous tinted track with a coloured left
  edge, its header carries a **"what we work on"** pill, every claim in it is
  ticked, and every claim opposite it is dashed. Tick against dash is
  redundant encoding — the shapes differ, so the verdict survives greyscale
  and colour blindness. Rows are numbered, hovering a row lifts its tint and
  brings the muted side up to full ink, and a full-width closing line under
  the table says the two can both be true at once.

  Two things that will break it if they are edited carelessly. The tick is
  absolutely positioned and needs `position: relative` on its own cell —
  without it the containing block is the row and every tick lands on top of
  the axis label in the first column. And the closing line needs
  `max-width: none`, because the global `p, li` measure caps it at 62ch and
  leaves a half-width paragraph under a full-width table.
- **Deliverables stated as artefacts, not activity.** "Entity work" describes
  effort; "a prioritised fix list with each change written out" is a thing
  someone receives and can check. Each of the four stages carries its own
  accent, what you receive, and an **"And plainly"** line — the uncomfortable
  thing we will say at that stage. Content is in `DELIVERABLES`.
- **The prompt rotator again**, so "a frozen prompt set" is something a reader
  can look at rather than a phrase.
- Pricing, then the refusal — declining a category with no visible route in —
  as its own gradient card, because that is the whole positioning.

### Where things are on the home page

Hero → logo strip → problem grid → gradient CTA → five-surface table →
four-stage process → pricing → research → client quotes → six questions with a
link to `/faq` → report form.

**One background throughout.** There are no inverted bands on the home page any
more. Every section is either `--surface` or `--surface-sunk`, a 3% step, and
no two sunk sections sit next to each other. The comparison table and the
report CTA used to be full-bleed navy, which meant the background changed under
the reader twice mid-scroll; the table now carries its own emphasis instead of
borrowing it from the band.

**`/faq` is a fifth page type.** The original brief allowed four and said a
fifth needed approval; this one was asked for directly. It carries all 25
questions grouped in four sections with a sticky section nav, and the full
`FAQPage` structured data. The home page marks up only the six it actually
shows — the same questions should not be claimed twice.

### Client quotes

`src/components/Testimonials.astro`, content in `src/data/testimonials.ts`,
sitting between the research teaser and the questions.

Six brands, one quote each — Lurio, Viveonix, Little Lockets London, Fresh Gym,
Williams Int. and Simons Designs, with the names and roles Joe supplied on
2026-08-27. An earlier version repeated two brands to fill the columns, which
reads as a thin client list dressed up as a fuller one.

**The brands, names and roles are real. The sentences are not.** Joe asked for
the placeholder marking to come off after supplying the names, so the banner
and the per-card flags are gone and the section reads as finished. That was his
call and it is recorded rather than argued again — but the outstanding job is
still to replace each `quote` with what that person actually said.

`placeholder` remains on the interface and still works: set one back to `true`
and its card carries a flag again, and the banner returns above the grid.
Nothing else has to change.

**No photographs.** The reference design this came from pulled headshots from
Unsplash — stock photographs of people who are not the client, presented as if
they were. Cards carry a brand monogram instead, which is honest and needs no
external image host.

**Rebuilt natively rather than dropped in.** The source component was React
plus framer-motion, Tailwind and lucide. Using it as written would have added a
client framework to a site built on static output with no client-side JS, about
50KB of runtime for one section, a class system that does not exist here, and
four requests to an external image host on a page that currently makes none.
The visual idea is unchanged; the implementation is three CSS animations and no
JavaScript.

How it behaves:

- three columns rolling at 46s, 58s and 52s so they never line up, masked top
  and bottom, pausing on hover;
- each column is duplicated once with the copy `aria-hidden`, so a screen
  reader hears each quote once;
- **below 68rem the roll stops and all six quotes render as a static grid.**
  The first version hid columns two and three at narrow widths, which silently
  dropped four of the six quotes on a phone — the point of the section is that
  the words get read;
- under `prefers-reduced-motion` the same thing happens at any width, and the
  duplicate cards are hidden rather than the loop being frozen mid-card.

The section sits on the plain background, not the sunk one, because the FAQ
below it is sunk and the home page's rule is that no two sunk sections touch.
Cards use `--surface-card` like every other card on the site, so they separate
from the ground by border and shadow rather than by tint.

### The hero: client results

`HERO_MODE` in `src/data/content.ts` switches the hero's right column between
two layouts. It is currently **`'cases'`** — four client results supplied by
Joe on 2026-08-25, replacing the sourced category statistics that were there.

| Brand | Figure |
|---|---|
| Lurio | 92% increase in AI search appearances across three LLMs |
| Viveonix | 183% increase in quality leads from optimised LLM searches |
| Little Lockets London | 79% increase in online revenue through LLM searches at conversion stage |
| Fresh Gym | 205% increase in reach from AI search suggestions |

**Worth attaching before anyone pushes back:** each of these would be stronger
with the engine, the date range and the size of the base beside it. "92% across
three LLMs" invites "up from what, over how long" from exactly the buyer this
site is written for. The figures are Joe's; the suggestion is to publish the
working alongside them, not to soften them.

**Each card carries its mark twice — one file per theme.** No single version of
these four works on both surfaces: Lurio ships as `#fff7ed` and Viveonix as a
white knockout, so both need dark-ink variants on a light card; Little Lockets
is dark serif and Fresh Gym is mid-blue with a grey strapline, so both need
lightened variants on a dark one. CSS shows one and hides the other, the dark
copy is `loading="lazy"` so a light-theme visitor never downloads it (verified
by watching the network), and the hidden copy is `aria-hidden` so a screen
reader hears each brand once.

Naming is `<slug>-light.*` and `<slug>-dark.*`, falling back to `<slug>.*`.
**How every variant was derived is written down in
`site/public/logos/README.md`** — they are generated from the originals, not
official assets, and that file says so per row.

`optical` in `HERO_CASES` scales each mark so the four read at the same visual
weight. A one-line wordmark and a three-line lockup are not the same shape, so
a fixed height leaves the taller one's type illegible.

Setting `HERO_MODE` back to `'stats'` restores the Pew figures below, with no
markup change.

### The hero statistics — the other mode

Three of the four are one study, cited on the page: **Pew Research Center,
"Do people click on links in Google AI summaries?", 22 July 2025** — 68,879
Google searches by 900+ US adults, browser-tracked through March 2025.

| Figure | Claim |
|---|---|
| 47% | of result clicks disappear when an AI summary is present — **derived**, 1 − 8/15, and both raw values are printed on the card |
| 1% | of visits end in a click on a link inside the summary itself |
| 53% | of searches of ten words or more return an AI summary |
| 4 | answer engines Brandure measures separately — ours, not Pew's |

**Card one leads with the derived figure on purpose.** It used to lead with 8%,
which reads as a small number when the finding is a large loss. The rule for
this row: lead with the number that carries the finding, and print the raw
values beside it so the arithmetic can be checked.

**Sixteen-plus alternatives, each with a source and a verification status, are
in `site/hero-stat-options.md`** — along with the client-result variant of this
block and what each card would need before it could go live.

**There is a second hero layout already built.** Set `HERO_MODE` to `'cases'`
in `src/data/content.ts` and the same grid renders client result cards instead,
the shape the reference site uses. The placeholders there are zeroes and the
page prints a "Placeholder" flag beneath them. That flag must not come off
until the figures are real.

These are what `HERO_MODE: 'stats'` renders. **They describe Google AI
Overviews specifically**, and the page says so.
Stretching a Google-only sample to cover ChatGPT and Perplexity would be the
exact move this agency sells against.

**One number was deliberately left out.** Gartner's "search engine volume will
drop 25% by 2026" (Feb 2024) is the single most-quoted figure in this category.
Its deadline has now passed without it happening. Quoting a failed prediction
on a site that sells measurement would be self-defeating.

**Sourcing caveat for whoever maintains this.** `pewresearch.org` is
unreachable from the build environment, so the figures were confirmed from two
independent search passes that agreed on every value and on the sample, rather
than read off the primary source. Worth one direct check against the Pew page
before launch.

### The prompt rotator

Seven sector prompt sets in one table that swaps between them, on the home page
and again on `/service`. Sectors are the seven scanned in the 13 August 2026
Dubai run; markets are UK, Dubai, UAE and US. Content lives in
`src/data/promptsets.ts`.

**It is a component, not a GIF, and that was deliberate.** A GIF of this would
be a fixed-width raster — blurry on a retina screen, unreadable on a phone,
invisible to a screen reader, uncopyable, and several hundred kilobytes for
something the browser draws from a few hundred bytes of markup. This stays
sharp, stays selectable, and can be paused and stepped through.

How it behaves:

- 7 seconds per set — long enough to read four prompts and their verdicts;
- it pauses on hover and on focus, and **stops permanently** the moment anyone
  clicks a tab or the pause control, because a reader who has taken control
  should keep it;
- it never starts under `prefers-reduced-motion`, and never while off screen;
- tabs are real buttons in a `tablist`, so arrow keys work;
- with JavaScript off, every panel is in the DOM and the first is shown.

**The prompts are real. Every status beside them is invented**, and the page
says so under the table. These show the format of a report, not the findings of
one — the distinction is load-bearing on a site that sells measurement, not a
disclaimer.

**Market is explicit per set and never inferred.** The B2B SaaS set deliberately
carries no market and says why: adding a city to a query buyers never localise
produces a local-services answer shape that misrepresents how the category is
bought. That is the standing rule in `CLAUDE.md`, followed here rather than
quietly attaching a city to all seven.

Layout, as of the latest pass: the market chip and its note run as one line
across the full width of the table rather than stacking into a narrow column;
every column from **Intent** through **Named** is centred; and the footnote
runs the table's full width instead of being capped at the body measure.

### The engine marks

Each engine column header carries a mark rather than a bare name, drawn by
`src/components/EngineMark.astro` from the list in `src/data/engines.ts`.

**All five are the official marks.** The direct vendor hosts are denied by the
build environment's network policy — `403` on `CONNECT`, confirmed against the
agent proxy's own status endpoint — but the npm registry is on that policy's
allowlist, and `@lobehub/icons-static-svg` (MIT, v1.94.0) redistributes all
five. They are copied into `public/engines/` under slug names with their
`<title>` stripped and otherwise untouched. `public/engines/README.md` carries
the provenance and a note on nominative trade-mark use.

The drawn fallbacks are still in the component and no longer render. They are
kept because the lookup is a file lookup: delete or rename a file and the site
draws a rough shape rather than a broken image.

**The file is inlined, not referenced with `<img>`, and that matters for one of
the five.** OpenAI's mark is monochrome and published as `fill="currentColor"`.
Inside an `<img>` that resolves against the image's own document and comes out
black, which disappears on a dark chip. Inlined, it inherits the chip's colour
and works in both themes. The four multicoloured marks carry their own fills
and nothing recolours them.

Two consequences of inlining, both handled in `EngineMark.astro`: the file is
read once per build rather than once per instance (the rotator renders this
component 35 times a page), and every `id` gets a per-instance suffix — Gemini's
mark carries gradient definitions referenced by id, and 14 copies of the same
ids on one page is invalid HTML.

The chip behind each mark is tinted from the brand colour, sampled from the
files rather than assumed — Claude `#D97757`, Perplexity `#22B8CD`, Gemini
`#3186FF`. Get this wrong and the chip disagrees with the logo sitting on it.

### The answer-surface table

**Five engines, not four.** Claude was missing and is one of the five that
matter; `ENGINES` in `src/data/content.ts` is the single source, and the copy
across the site was updated with it.

The table has to serve two readings at once — left to right it is a list of
verdicts, as a block it is a pattern — so: the head row is a tinted band, the
prompt column is pinned and separated by a heavier rule so the row label stays
with its verdicts while the engines scroll, each cell carries a faint wash of
its own status colour so the shape of the answer is visible before a word is
read, statuses are chips rather than loose text, and **every row ends with its
own tally**, because nobody scanning five columns holds the count themselves.

The status chip keeps its glyph and its written label. Colour is redundant
encoding and never the only signal — the three reserved hues are near-identical
in greyscale.

### Logo strip

Five entries under "Trusted by", label above the strip. All five files are in
`site/public/logos/`.

**Every mark is flattened to a single dark silhouette.** `brightness(0)` drives
every channel to black whatever colour the file is drawn in, so a cream
wordmark, a white knockout and a full-colour lockup all land at the same weight
— which is what a trust strip is for, and it sidesteps the fact that two of the
five cannot be shown as supplied on a light surface. Dark theme inverts the
same filter to white. Colour versions appear in the hero cards instead, each on
its own tile.

One exception, carried as `tone: 'asis'` in `src/data/brands.ts`: Growthmind's
mark sits on an opaque `#191e19` tile, and flattening that produces a solid
black square. It renders as the dark icon tile it was drawn as.

Logos are normalised on optical height rather than a fixed box, so a wide
wordmark and a square mark read at the same visual weight. The multipliers were
set from what each mark measured **on the rendered band**, not from its file
dimensions — several sit on canvases far larger than the artwork, so aspect
ratio alone predicts the wrong size. Lurio at 1.0 was roughly twice the weight
of everything else and now runs at 0.62.

**Two of the files are much larger than they need to be.** `viveonix.webp` is
3840×2160 (102KB) for a 54px render; `littlelockets.png` is 600×296 (48KB).
Downscaling them would cut the strip's weight by most of 150KB. They were left
as supplied rather than re-encoded, because re-cutting someone else's brand
artwork is a decision, not a build step. Worth doing before launch.

**Heading wording.** "Trusted by" asserts client relationships and the repo
records none. Proceeding with it was instructed directly, so it stands, but the
contradiction is on the record here rather than resolved silently.

### One rule that has now caught five elements

**Accent-coloured text on a tint of its own accent loses about a point of
contrast.** The token is tuned against the plain surface; the tint lifts the
background under it; the ratio drops to somewhere between 4.0 and 4.5:1.

Caught so far on the rotator's market chip, the placeholder banner's lead, the
comparison table's head, `/research`'s "Without it" panels, and the problem
cards' "The effect" label — the last of which had been shipping on the home
page for several passes.

The fix that works in both themes without a new token is
`color-mix(in srgb, var(--accent) 68-72%, var(--ink))`: it deepens the colour
in light and lightens it in dark, because `--ink` flips. Reach for that before
adding another `*-deep` token.

### Colour contrast, measured on the rendered page

**The palette did not change in this pass.** Every token value is as it was;
what follows is the new furniture measured against it.

Taken from the built site rather than from the token values. Elements sitting
on a gradient were measured by screenshotting the page with every glyph set to
`transparent`, cropping to the text element's own bounding box, and taking the
worst pixel in it — percentile sampling cannot separate text from background
when the text is the luminance extreme, which is a trap worth naming.

| Element | Light | Dark |
|---|---|---|
| Statement headline | 17.20:1 | 17.03:1 |
| Body lede | 5.63:1 | 7.98:1 |
| Pill label | 5.63:1 | 7.98:1 |
| Metric number and chip | 5.13:1 | 6.43:1 |
| Problem "effect" key | 5.13:1 | 6.43:1 |
| Nav link, wordmark | 17.20:1 | 17.03:1 |
| **On the brand gradient** | | |
| CTA card heading | 5.04:1 | 5.04:1 |
| CTA card body | 5.08:1 | 5.08:1 |
| Offer name | 4.81:1 | 4.81:1 |
| Offer price | 4.75:1 | 4.75:1 |
| Offer unit line | 4.72:1 | 4.72:1 |
| CTA card button | 8.43:1 | 8.43:1 |
| **On the inverted band** | | |
| Statement | 14.84:1 | 13.49:1 |
| Lede | 8.57:1 | 7.79:1 |
| Pill label | 6.91:1 | 6.10:1 |
| Table row label | 13.95:1 | 12.55:1 |
| Citation line | 8.00:1 | 7.27:1 |
| **Engine marks and rotator** | | |
| Engine name in the header | 5.21:1 | 7.35:1 |
| Market chip | 6.47:1 | 8.18:1 |
| Note and footnote | 5.21:1 | 7.35:1 |
| **Comparison table** | | |
| Column labels | 5.21:1 | 7.35:1 |
| "What we work on" pill | 5.17:1 | 7.26:1 |
| Answer-engine header | 7.53:1 | 9.67:1 |
| Row number | 5.00:1 | 7.39:1 |
| Search-engine cell | 5.63:1 | 7.98:1 |
| Answer-engine cell | 15.00:1 | 14.92:1 |
| Closing line | 5.21:1 | 7.35:1 |
| **Client quotes** | | |
| Quote | 17.63:1 | 14.92:1 |
| Attribution | 17.63:1 | 14.92:1 |
| Role and brand | 5.78:1 | 7.00:1 |
| Monogram, worst of four | 4.68:1 | 8.17:1 |
| **/method** | | |
| Hero letter tile | 5.17:1 | 7.26:1 |
| Stage label under the tile | 11.22:1 | 11.46:1 |
| Tracker chip | 5.78:1 | 7.05:1 |
| Stage "week" line | 5.12:1 | 6.48:1 |
| Stage bullet | 17.63:1 | 14.92:1 |
| "Rules out" key | 5.12:1 | 6.48:1 |
| "Rules out" text | 5.78:1 | 7.00:1 |
| Chart verdict | 4.92:1 | 9.92:1 |
| Chart body | 5.67:1 | 6.68:1 |
| Chart key | 5.16:1 | 7.35:1 |
| Null-stage footnote | 14.00:1 | 13.53:1 |

**Two tints needed deeper text tokens, and the reason is the same both times.**
A colour tuned against the plain surface loses roughly a full point of contrast
once it sits on its own 10–12% tint of itself. Cobalt on the rotator's market
chip measured **4.00:1** and now uses `--cobalt-deep`; the amber on the
placeholder banner measured **4.33:1** and now uses a new
`--status-partial-deep`, which is `#5E4309` in light and unchanged in dark,
where the existing amber already measures 7.40:1 on its own band.

**A round shape defeats bounding-box sampling.** The monogram is white on a
coloured circle, and sampling its bounding box reads the card corners outside
the circle as "background", which reports 1.03:1. The figures above come from
sampling the middle 44% of each element only. The same artefact hits the
placeholder banner, whose box includes its own amber left rule.

**A moving highlight is still a background.** The CTA card's glint originally
swept the full width of the card. At 13% white it lightened the gradient under
the copy enough to drop white text to **3.85:1** — confirmed by disabling the
layer and watching the same measurement return to 5.04:1. Weakening it to hold
AA everywhere put it at roughly 5% white, which is invisible. It is now clipped
to the right of the copy, where the card carries no text, and runs at full
strength there. Verified by freezing the animation at 51 phases across its
cycle and sampling the background under every text box at each one: **worst
case 4.99:1**. An effect that only holds AA at rest is not passing.

**The brand gradient is deliberately literal, not token-driven.** `--cobalt`
and `--violet` lift in dark theme so they stay legible *as text on a dark
surface*; used as a gradient *fill* that lift would leave them too pale to
carry white type. `--grad-brand` therefore hard-codes the three light-theme
stops and holds in both themes. White on the palest stop measures 4.68:1 by
calculation and 4.72:1 on the rendered page — so nothing on the ramp drops
below AA, and there is no headroom left to spend on transparency. The card
copy is full white for that reason, not tinted.

**One constraint the palette forces.** Cobalt measures only **2.98:1 on the
deep inverted surface** `#0B1F5C`, so it must never carry text or links on a
dark band — those use `--accent-inv` (teal, 8.43:1) instead. The token file
says so at the point of definition.

`#12D3E8` is **decorative only** — 1.76:1 on the light surface. It is named
`--teal-vivid` and appears in gradient washes and placeholder art, never as
text.

**The three status colours remain nearly identical in greyscale** — light
lightness values 86, 98 and 86, a gap of zero between present and absent. Colour
alone cannot carry meaning in print or for colourblind readers, in either theme.
Every status cell therefore also carries a distinct glyph (● filled, ◐ half,
○ empty) and a written label. Verified by rendering the inverted band in
greyscale, not assumed.

---

## How it is put together

- **Astro**, static output. No React, Vue or similar.
- **The only JavaScript on the site** is the analytics snippet. Everything else
  is plain HTML and CSS, which is what makes it fast and easy for AI crawlers
  to read.
- **Fonts are self-hosted** — Manrope for headlines, Inter for body, IBM Plex
  Mono for data and labels. No requests to Google or anyone else.
  **Satoshi was specified but could not be used**: it is distributed through
  Fontshare, which is unreachable from this build environment. Manrope is the
  closest widely-available geometric sans and is what the site ships. Swap it
  later by replacing one import if Satoshi becomes available.
- **Light and dark themes.** The toggle sits in the header. It defaults to the
  operating system preference; a manual choice is stored and wins from then on.
  A small blocking script in the head applies the theme before first paint, so
  there is no flash of the wrong theme — deferring that script is exactly what
  causes the flash.
- **Analytics is PostHog, cookieless.** It stores nothing on a visitor's
  device, so the site needs no cookie banner in the UK, EU or UAE. The
  trade-off is that visitors are counted per visit rather than per person.
  Page views and form submissions only.
- **Colours and type sizes are defined once** in `src/styles/tokens.css`. There
  are no one-off colours anywhere.
- **Motion** lives in `src/styles/motion.css` and one runtime,
  `src/components/Motion.astro`. Staggered section reveals, per-word mask
  reveals on headlines, count-ups on the hero figures, the comparison table
  building row by row as you scroll through a pinned section, a drifting
  gradient mesh behind the hero, magnetic buttons, a nav underline sweep and a
  scroll-progress bar.

  **One curve, one scale.** Every duration comes from `--dur-1/2/3`, every
  easing from `--ease` or `--ease-out`, every entrance travels `--rise` and
  steps by `--stagger`. There were four easing curves and eight durations in
  play before, which is what made a page of individually reasonable effects
  read as busy: each element arrived on a rhythm of its own and the eye had
  nothing to lock onto. Nothing is slower than 620ms and no staggered sequence
  takes more than about half a second.

  Three rules hold it together. **Transform and opacity only** — nothing
  animated here triggers layout. **Reduced motion turns everything off
  cleanly**, including the mesh and the count-ups, which snap to their final
  values rather than freezing part-way. **Nothing delays reading**: with
  JavaScript disabled the page renders complete and static. Both paths were
  checked by loading the page in each and confirming that **0 of 45 animated
  elements** sat mid-animation, the pinned section was unpinned, its runway
  collapsed to zero, and every count-up showed its final value.

  Headline splitting keeps spaces as real text nodes, so a screen reader still
  reads a natural sentence rather than a list of fragments. Pointer effects are
  skipped entirely on coarse pointers.

  **The CTA card is the page's loudest moment** and gets more than the standard
  entrance: it rises further, settles from 96%, its shadow blooms as it lands,
  a clipped glint sweeps its right side every seven seconds, and the button
  carries a ring that breathes once every four. All transform and opacity.

  **The logo marquee carries four copies of the set, not two.** At two it was
  narrower than a wide viewport, so it sat left-aligned with dead space beside
  it — which is what read as "not centred". Four always overflow. It runs at
  38s per set, down from 52s. Its label sits inline at the left of the strip in
  sentence case; the centred uppercase pill it replaced is the house style of
  every generated landing page and read as one.

  **Section labels are gone.** The pill above every heading — "The problem",
  "Engagements", "How it works" — read as slide furniture.

  **The four stages are a timeline.** A rule draws itself across the section on
  entry and the four nodes land on it in turn. It is a transition on a scale
  transform, not a scroll scrub — see below for why that distinction is the
  whole point.

  **Problem cards carry colour.** Each takes one of the four existing brand
  hues — no new colours — driving a top rule, the number, the effect panel's
  edge and a tint that deepens on hover. The top rule extends across the card
  as the cursor enters it.

  **Three effects were removed rather than tuned.** The 3D card tilt sheared
  left-aligned copy off its baseline under the cursor, fighting every alignment
  decision around it; cards now lift, in CSS, with no handler at all. And the
  horizontal process rail was pinned across 220vh of runway to move its track
  a measured 136px — a screen and a half of scrolling for almost no payoff,
  while holding the reader in place to deliver it. Four cards in a row say the
  same thing in one glance. And the pinned four-surface section scrubbed its
  rows in against raw scroll position, which is what made it feel stuttery and
  rigid: a scrub tied to scroll offset steps with every wheel notch instead of
  easing, and the reader was held in place while the rows arrived one at a
  time. It is now an ordinary section that scrolls past like everything else,
  with the table revealing once on entry. **Nothing on the site is pinned any
  more, and nothing animates against scroll position except the progress bar
  and the hero mesh parallax.**

  **The dark bands are flat, not gradients.** A 160deg ramp to `#071440` made
  the lower half of every inverted band noticeably darker than the top, so the
  comparison table sat on the darkest part of it and the three bands did not
  match one another. Same colour token as before — the ramp is what is gone.
  The table's row labels are larger and semibold, and its caption runs the full
  width of the table instead of being capped at 62ch, which had set it as a
  narrow four-line column under a full-width table.

### Where things are

| Path | What it is |
|---|---|
| `src/pages/index.astro` | Home |
| `src/pages/service.astro` | Service |
| `src/pages/research/index.astro` | Research index |
| `src/pages/research/[slug].astro` | The template every research piece uses |
| `src/pages/404.astro` | Not-found page |
| `src/content/research/` | The research pieces themselves |
| `src/components/ComparisonTable.astro` | The comparison table |
| `src/styles/tokens.css` | Every colour and size, defined once |
| `src/consts.ts` | Site name, contact email, form recipient, LinkedIn, analytics key, booking link |
| `src/pages/llms.txt.ts` | The plain-text summary for AI crawlers, generated automatically |

---

## Form notifications

The site has two Netlify forms. Both are plain HTML with `data-netlify="true"`,
a hidden `form-name` and a honeypot — no JavaScript handler, no third-party
embed.

| Form name | Component | Where it appears | Lands on |
|---|---|---|---|
| `report-request` | `src/components/ReportForm.astro` | home, `/service`, `/faq` | `/thanks` |
| `call-request` | `src/components/BookForm.astro` | `/service#book` | `/thanks-call` |

**Submissions are emailed to `joe@brandure.io`.** That recipient is recorded in
`src/consts.ts` as `SITE.formsTo` so it is visible in the repo, but the
constant does not enforce it — **Netlify form notifications have no
`netlify.toml` equivalent.** They are a per-site setting in the Netlify UI, and
setting them is a Netlify write, which is Joe's to make.

### Confirmation

**Submitting does not navigate.** `FormEnhance.astro` posts the form to Netlify
with `fetch` and swaps the form itself for an inline confirmation panel. The
section around it, the rest of the page and the scroll position are untouched,
and a reload brings the form back because no state is stored anywhere. Each
form carries its own confirmation copy as `data-done-title` /
`data-done-body`. When `SITE.bookingUrl` holds a Calendly event, the booking
form's confirmation embeds the picker inline instead of linking out — prefilled
with the name and email just typed, and with company, site, category, market
and tier written into the event's custom question so a slot arrives with its
context attached. Calendly's script is fetched on successful submit and never
on page load, so no visitor gets a third-party script or cookie unless they
have chosen to book.

The embed needs an explicit `height` on its container, not `min-height` —
Calendly sizes its iframe to the container rather than to its own content, and
a floor leaves the widget clipped a few rows below its header. Confirmed
working on the live site 2026-09-11.

`/thanks` and `/thanks-call` still exist and **should not be deleted**. They are
the fallback path: with JavaScript off, or if the fetch fails for any reason,
the form posts normally to its `action` and Netlify redirects there. A
submission is never silently dropped.

**Do not go back to a query-string success state.** Both forms originally
posted to their own URL with `?submitted=true` and rendered a confirmation
behind `Astro.url.searchParams.get(...)`. This site is `output: 'static'`, so
that condition is evaluated once at build time — where the query string is
always absent — and the confirmation never reached the shipped HTML. Every
submission was captured and every submitter saw the empty form again, which
reads as a failure. Found 2026-09-05 after a live submission.
`Astro.url.searchParams` is only safe under `output: 'server'`.

### Setting it, once per form

1. Netlify → the site → **Site configuration → Forms → Form notifications**.
2. **Add notification → Email notification**.
3. Set **Email to notify** to `joe@brandure.io`.
4. Pick the form under **Form** — do this twice, once for `report-request` and
   once for `call-request`. A notification is scoped to one form, so one
   notification does not cover both.

Until that is done, submissions are still captured — they appear under
**Forms** in the Netlify dashboard — but no email is sent and nothing is lost.

### Two things to check before relying on it

- **A form only exists in Netlify once a deploy has contained its HTML.**
  `call-request` is new as of 2026-09-03, so it will not appear in the Forms
  list until the deploy carrying it has finished. Set its notification after
  that, not before.
- **`joe@brandure.io` needs to be a real mailbox.** This is unverified from
  the repo: `brandure.io` currently resolves to Squarespace addresses rather
  than Netlify, and `brandureai.com` is the domain noted as carrying live
  Google Workspace mail. If `brandure.io` has no MX records pointed at a mail
  provider, the address in the footer bounces and the form notification never
  arrives. Confirm mail routing for `brandure.io` before treating either as
  working.

---

## Known gaps

- **The wordmark is a placeholder** set in the site's own typeface. Space is
  reserved so a real logo drops in without moving anything.
- **The research pieces are placeholders** and carry no findings.
- **There is no privacy notice page.** The brief allowed four page types and a
  fifth needs approval, so the form carries a short plain-English line instead.
  Collecting names and emails from UK and EU visitors normally calls for a
  proper notice — worth a decision before launch.
- **The site is live at `brandure.netlify.app`**, auto-deploying from `main`
  through the GitHub integration. Never deploy from a local directory. Netlify
  writes — forms, passwords, domains, env vars — are Joe's to make.
- **No custom domain is pointed.** `brandure.io` still needs the DNS step, and
  `brandureai.com` carries live mail — follow the runbook above before
  touching it. As of 2026-09-03 `brandure.io` resolves to Squarespace
  addresses, so it is still pointed at a previous host.
- ~~**Form notifications are not set up yet.**~~ The booking flow is closed
  out as of 2026-09-11: Calendly connected on `joe@brandure.io`, account
  timezone corrected to Dubai, and the embedded picker confirmed rendering and
  taking bookings on the live site. **Still unconfirmed:** whether the two
  Netlify form notifications are switched on, and whether `joe@brandure.io`
  receives mail — `brandure.io` still resolved to Squarespace when last
  checked. See "Form notifications" above.
- **The site is publicly reachable with no password**, which is worth a
  deliberate decision rather than a default while it still carries placeholder
  content.
- **Canonical URLs carry a `.html` extension** — `/index.html` rather than `/`
  — while the sitemap lists clean URLs. The two disagree, which is a real
  search-visibility defect. It predates this design pass and was left alone
  deliberately: the machine-readable layer is a separate fix.
- **Case studies and pricing are invented.** `/work` uses generic sample names
  with no implied client relationship and is excluded from search indexing.
  Prices are sample figures marked as such on the page.
- ~~The method page is a reserved route.~~ **Closed 2026-08-27** — written up
  as SCAN. See "The method page" above for what changing the name would take.
- **The client quotes are still our words.** The six brands, names and roles
  are real; the sentences are not, and as of 2026-08-27 they no longer carry a
  visible flag — Joe's call. Replacing each `quote` with what that person
  actually said is the outstanding job. `src/data/testimonials.ts`.
- **`/method` commits to SCAN as the framework name.** The route was reserved
  with the name pending. Writing the page up meant naming it; changing it means
  editing `k` and `name` in `src/data/method.ts` and nothing else on the site.
- **`/research` publishes detail from an internal scan.** The withdrawn-finding
  section quotes the 13 and 17 August Dubai scans, which are marked "not
  client-safe" in the repo. It states them as a retraction rather than as fact,
  which is the opposite of the thing that marking guards against — but it is a
  judgement call, and `SHOW_WITHDRAWN` in `src/data/research.ts` reverses it in
  one edit.
