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
against the built site.

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Home | 100 | 100 | 96 | 100 |
| Research piece (indexable) | 100 | 100 | 96 | 100 |
| Research piece (placeholder) | 100 | 100 | 96 | 66 |

First contentful paint 0.3s, largest contentful paint 0.3s, total blocking
time 0ms, cumulative layout shift 0.023.

**Two scores need explaining rather than fixing.**

*Best practices 96* is a console error from the local test environment, where
the analytics host is unreachable behind the sandbox proxy. It will not occur
on the real site. Re-check after the first live deploy.

*SEO 66 on a placeholder* is the deliberate `noindex` doing its job — the audit
marks any page blocked from indexing down. The identical page scores **100**
with `placeholder: false`, which was tested directly rather than assumed.

### Colour contrast, measured against the paper background

| Colour | Ratio | WCAG AA |
|---|---|---|
| Body ink | 16.82:1 | pass |
| Secondary text | 6.64:1 | pass |
| Accent (plum) | 8.40:1 | pass |
| Status present | 6.05:1 | pass |
| Status partial | 5.54:1 | pass |
| Status absent | 6.71:1 | pass |

**The three status colours are nearly identical in greyscale** — measured
lightness 80, 95 and 78, a gap of 2 between two of them. Colour alone therefore
cannot carry meaning in print or for colourblind readers. Every status cell
also carries a distinct glyph (● filled, ◐ half, ○ empty) and a written label,
so the table reads correctly with colour removed entirely. This was checked by
rendering the tables in greyscale, not assumed.

---

## How it is put together

- **Astro**, static output. No React, Vue or similar.
- **The only JavaScript on the site** is the analytics snippet. Everything else
  is plain HTML and CSS, which is what makes it fast and easy for AI crawlers
  to read.
- **Fonts are self-hosted** — Inter for text, IBM Plex Mono for data. No
  requests to Google or anyone else.
- **Analytics is PostHog, cookieless.** It stores nothing on a visitor's
  device, so the site needs no cookie banner in the UK, EU or UAE. The
  trade-off is that visitors are counted per visit rather than per person.
  Page views and form submissions only.
- **Colours and type sizes are defined once** in `src/styles/tokens.css`. There
  are no one-off colours anywhere.

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
  pointed.
