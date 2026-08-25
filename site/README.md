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

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Home | 100 | 100 | 96 | 100 |

First contentful paint 0.5s, largest contentful paint 0.6s, **total blocking
time 0ms**, cumulative layout shift 0.014.

Motion still costs nothing measurable. Blocking time is now zero: the layout
pass removed a whole pinned section and its 220vh runway, and folded the last
duplicate scroll listener — the header had its own, doing the same work as
the runtime — into the single scroll pass.

Two audits sit below 1.0 and are worth naming rather than hiding:
`modern-image-formats` and `uses-responsive-images`, both driven by the supplied
logo files. `viveonix.webp` is 3840×2160 and 102KB for a mark that renders 54px
tall. It does not move any score at this size, but it is 170KB of logos for one
strip — see the logo section below.

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

### The hero statistics — where they come from

Three of the four are one study, cited on the page: **Pew Research Center,
"Do people click on links in Google AI summaries?", 22 July 2025** — 68,879
Google searches by 900+ US adults, browser-tracked through March 2025.

| Figure | Claim |
|---|---|
| 8% | of Google visits end in a click on a result when an AI summary is present — 15% without one |
| 1% | end in a click on a link inside the summary itself |
| 53% | of searches of ten words or more return an AI summary |
| 4 | answer engines Brandure measures separately — ours, not Pew's |

**They describe Google AI Overviews specifically**, and the page says so.
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

### Logo strip

Five entries under "Trusted by". All five files are now in
`site/public/logos/` and rendering.

**The strip sits on the dark band, and that was forced by the artwork.** Two of
the five are white-knockout marks drawn for dark backgrounds — Lurio's fill is
`#fff7ed`, and Viveonix's wordmark is white with a black outline. On the light
surface `#FCFBF8` the first is invisible and the second is a hollow outline. A
dark band is the only surface all five read on without editing anyone's logo.

Each brand carries a `tone` in `src/data/brands.ts`:

| Tone | Applied to | What it does |
|---|---|---|
| `knockout` | Fresh, Little Lockets | Colour artwork on transparent, flattened to white |
| `asis` | Lurio, Viveonix | Already light — desaturated only |
| `invert` | Growthmind | Opaque dark tile flipped light, mark inside flipped dark |

Growthmind is the awkward one: a 96×96 icon on an opaque `#191e19` tile. Knocked
out it becomes a solid white square; left alone it is a dark blob on a dark
band. Inverting it gives a light tile with a dark mark, which reads.

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
  38s per set, down from 52s.

  **Section labels are gone.** The pill above every heading — "The problem",
  "Engagements", "How it works" — read as slide furniture. Only two remain:
  the logo strip's "Trusted by", which labels a row that is otherwise
  unexplained, and nothing in the hero.

  **Two effects were removed rather than tuned.** The 3D card tilt sheared
  left-aligned copy off its baseline under the cursor, fighting every alignment
  decision around it; cards now lift, in CSS, with no handler at all. And the
  horizontal process rail was pinned across 220vh of runway to move its track
  a measured 136px — a screen and a half of scrolling for almost no payoff,
  while holding the reader in place to deliver it. Four cards in a row say the
  same thing in one glance.

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
| `src/consts.ts` | Site name, email, LinkedIn, analytics key |
| `src/pages/llms.txt.ts` | The plain-text summary for AI crawlers, generated automatically |

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
  touching it.
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
- **The method page is a reserved route.** Structure only; the framework name
  and write-up follow later.
