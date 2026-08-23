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

Recorded from actual runs, not estimates. Lighthouse 12.8.2, desktop preset,
against the built site. **Run locally — the site is still not deployed, so
these are not preview-URL numbers.**

| Page | Theme | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|---|
| Home | light | 100 | 100 | 96 | 100 |
| Home | dark | 100 | 100 | 96 | 100 |
| Service | light | 100 | 100 | 96 | 100 |
| Service | dark | 100 | 100 | 96 | 100 |
| Research piece (placeholder) | light | 100 | 100 | 96 | 66 |

First contentful paint 0.4s, largest contentful paint 0.5s, total blocking
time 30ms, cumulative layout shift 0.001.

Motion cost nothing measurable. Performance held at 100 across both themes
after the full motion pass, and blocking time **fell** from 70ms to 30ms —
consolidating three separate inline scripts into one runtime more than paid
for everything that was added.

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

### Logo strip

Five entries under "Trusted by". **None of the five logo files could be
fetched** — the build environment's proxy denies all five hosts — so each
renders as a greyscale wordmark placeholder at the correct optical height.

**To add a real logo: drop the file into `site/public/logos/` named after its
slug** — `lurio.svg`, `growthmind.svg`, `fresh.png`, `viveonix.*`,
`littlelockets.*`. The component picks it up by name on the next build with no
code change. Slugs and intended sources are listed in `src/data/brands.ts`.

Logos are normalised on optical height rather than a fixed box, so a wide
wordmark and a square mark read at the same visual weight. Adjust the per-brand
`optical` multiplier in `brands.ts` if one sits heavy or light.

**Heading wording is unconfirmed.** "Trusted by" asserts client relationships;
the repo records none. If these are not AEO clients the heading needs changing
before launch.

### Colour contrast, measured on the rendered page

Both themes, taken from the built site rather than from the token values.

| Element | Light | Dark |
|---|---|---|
| Statement headline | 17.20:1 | 16.58:1 |
| Body lede | 5.63:1 | 7.77:1 |
| Eyebrow label | 10.41:1 | 7.56:1 |
| Proof figure label | 5.21:1 | 7.23:1 |
| Status present | 6.10:1 | 10.08:1 |
| Status partial | 5.51:1 | 9.80:1 |
| Status absent | 6.66:1 | 7.32:1 |
| Primary button text | 10.77:1 | 7.62:1 |

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
  reveals on headlines, count-ups on the proof figures, the comparison table
  building row by row, a drifting gradient mesh behind the hero, magnetic
  buttons, card tilt, a nav underline sweep and a scroll-progress bar.

  Three rules hold it together. **Transform and opacity only** — nothing
  animated here triggers layout. **Reduced motion turns everything off
  cleanly**, including the mesh and the count-ups, which snap to their final
  values rather than freezing part-way. **Nothing delays reading**: with
  JavaScript disabled the page renders complete and static, verified by
  loading it with scripting off and checking that all 53 animated elements sit
  at full opacity.

  Headline splitting keeps spaces as real text nodes, so a screen reader still
  reads a natural sentence rather than a list of fragments. Pointer effects are
  skipped entirely on coarse pointers.

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
- **Nothing is deployed.** No Netlify site exists yet and no domain has been
  pointed, so there is no preview URL and no production link.
- **Canonical URLs carry a `.html` extension** — `/index.html` rather than `/`
  — while the sitemap lists clean URLs. The two disagree, which is a real
  search-visibility defect. It predates this design pass and was left alone
  deliberately: the machine-readable layer is a separate fix.
- **Case studies and pricing are invented.** `/work` uses generic sample names
  with no implied client relationship and is excluded from search indexing.
  Prices are sample figures marked as such on the page.
- **The method page is a reserved route.** Structure only; the framework name
  and write-up follow later.
