# STATE.md — current position

Last updated: 2026-08-25 (prompt rotator built; service page rebuilt;
Viveonix logo fixed; A3 still urgent)

Current position at a glance. Update this file whenever something moves between
sections. It is the first thing to read at the start of a working session.

## Built

Entries here mean the work is in the repo. Nothing is listed on the strength of
having been instructed — if it is not on disk and committed, it is not built,
and a section below records what was raised and left undone. Verify against the
repo before building on anything here.

- Repo foundations: directory structure, `CLAUDE.md`, `README.md`, skill
  template, registries, decision records, vertical sprint brief.
- Vertical sprint prompt templates: four files, 20 buying-intent prompts, at
  `research/vertical-sprint/templates/`.
- Decision record set covering repo-as-source-of-truth, naming convention,
  branch policy, vertical shortlist, and the measurement stack.
- **Searchable measurement capability confirmed** against public documentation,
  and `measurement/methodology.md` written as the operational standard —
  day-zero baselines, control sets, raw metrics alongside every composite
  score, and the case study publishing bar. See
  `decisions/2026-08-12-searchable-measurement-capability.md`.
- **Source note** on the Donnelly/Searchable playbook at
  `research/sources/2026-08-12-donnelly-searchable-playbook.md`. Process useful,
  outcome claims discounted — vendor commentary from a founder with a 3M
  audience.
- **`growth/content-log.md`** in place, structure only. **Empty by decision,
  not omission** — no seed or example rows, ever, since a content log records
  published output and an example row is indistinguishable from a real record
  once context is lost. Decided 2026-08-12, recorded in the file.
- **Demand-listening method instrumented** at
  `research/vertical-sprint/demand-signals.md`. Sources, buyer-side inclusion
  rule, four signal classes, and a three-band review trigger with a
  pre-committed response per band. **Run 2026-08-15 and substituted** — the
  instrument returned near-zero signal everywhere and the bands were not
  applied. Method and bands retained for future use where forum signal exists.
- **`brandure-agency-citation-map` narrowed** to prospect sweeps and published
  index production, with an explicit exclusion from client engagements where
  Searchable's native cited-sources layer already covers it.
- **Channel strategy recorded** at `decisions/2026-08-12-channel-strategy.md`.
  **Section A only is decided:** Joe's personal LinkedIn publishes
  category-level AI/AEO content with no Brandure CTA; the Brandure page
  publishes research indexes with a single CTA offering a personalised AI
  visibility report; TikTok carries founder-journey content and is not measured
  on pipeline; positioning is AEO-specialist first with broader services as a
  post-traction, subcontractable expansion. **Also ratified 2026-08-12:** the
  demand-signal and Phase 2 review-trigger bands, both independent of the
  contract question. Sections B, C and D are not decisions — see below.
- **Review triggers replace gates.** The numeric items are review triggers, not
  gates: no prior Brandure funnel exists, so none is derived from measured
  performance. Their function is to force a stop-and-reassess rather than
  continuation on momentum. Each band carries a pre-committed response, and
  three rules govern all of them — one re-test per trigger with a second
  ambiguous result read as the bottom band; mitigating circumstances
  pre-registered before the window opens or discounted; and per-unit rate
  tracked as a leading indicator alongside the cumulative total.
- **Dubai AEO scan archived** at
  `research/vertical-sprint/scans/2026-08-13-dubai/`. Four surfaces, seven
  categories, 13 August 2026. **Half contaminated** — Gemini and Google Search
  ran on a signed-in profile — and n=1 throughout. Section A of its action list
  is lifted below; Sections B–E stay archived pending A3.
- **A2 closed — clean re-run archived** at
  `research/vertical-sprint/scans/2026-08-17-dubai-rerun/`, with `diff.md`.
  14 cells, Gemini and Google Search only, incognito, signed out, Dubai geo,
  n=1. **The 13 August contaminated cells are superseded by this run.** The
  13 August **ChatGPT and Perplexity cells remain the current clean record** for
  those two surfaces and were not re-run.
  **Model confound:** signed-out Gemini served Flash-Lite where 13 August used
  Flash, so differences may be model rather than personalisation.
- **Demand pass complete** — `research/vertical-sprint/demand-pass-2026-08-15.md`.
  Ran on trade and industry survey data after the forum instrument in
  `demand-signals.md` returned near-zero buyer-side signal in every vertical.
  **The ratified bands were not applied**; the pass is recorded as a substituted
  instrument, not a band evaluation, and the bands stand for future use where
  forum signal exists. Its highest-value unplanned output was supply-side
  competitor mapping.
  **Nothing in it is decided.** The scoring table, the first-vertical
  recommendation (aesthetic clinics, UAE), the UAE-first market sequence and the
  proposed method change are all Claude's output pending Joe's ratification —
  see Raised, not resolved.
- **Vertical shortlist amended** by
  `decisions/2026-08-15-vertical-shortlist-revision.md`. Boutique and
  independent hospitality moves from primary to deprioritised. Aesthetic
  clinics unchanged and still primary. Industrial manufacturers **not**
  promoted — the hold was pending the demand pass, which has now run and
  recommends promotion; the recommendation is unratified, so the hold stands.
- **First skill installed** — `.claude/skills/aeo-seo-geo-expert/`, six files,
  byte-identical to the uploaded source. Externally authored, so it keeps its
  upstream name, `references/` structure and two-field frontmatter under
  `decisions/2026-08-17-external-skill-artefacts.md`. Confirmed discoverable by
  the harness on commit. Registered in `registry/skills.md` as `build, run` —
  the first dual-track skill and the first row where the registry is
  authoritative rather than an index.
- **Registry-signposting gap closed.** `CLAUDE.md` now requires
  `registry/skills.md` to be read before any skills work, and
  `templates/skill-template.md` carries a scoped carve-out to its authority
  rule so a registry value for an external skill is not discounted. A sweep
  qualified every other rule that asserted the prefix, template inheritance or
  authority order as universal.
- **Site is live and the form works.** `bc865e0` deployed to
  `brandure.netlify.app` via the GitHub integration. Netlify Forms confirmed
  active 2026-08-23: form `report-request` detected, honeypot recognised, and
  all five fields registered with correct types (name/text, email/email,
  company/text, website/url, category/text). Zero submissions so far.
  **Correcting an earlier report:** this was flagged three times as "Forms not
  enabled". Detection was always on — a Netlify form only registers once a
  deploy containing the markup has been scanned, and no such deploy existed
  yet. It was never a blocker.
- **Seventh review pass on the site** (2026-08-27).
  - **The official engine logos are in.** The direct vendor hosts are denied by
    the environment's network policy, but the npm registry is on that policy's
    allowlist and `@lobehub/icons-static-svg` (MIT, v1.94.0) redistributes all
    five. Copied into `site/public/engines/` under slug names, `<title>`
    stripped, otherwise untouched. **This closes the gap flagged in the sixth
    pass.** Chip tints re-sampled from the files so they agree with the logos.
  - **Inlined rather than `<img>`-referenced,** because OpenAI's mark is
    monochrome `fill="currentColor"` and inside an `<img>` comes out black,
    which disappears on a dark chip. Two consequences handled: the file is read
    once per build rather than 35 times a page, and every `id` gets a
    per-instance suffix — Gemini's mark carries gradient definitions referenced
    by id, and 14 copies of the same ids on a page is invalid HTML.
  - **Testimonial names supplied by Joe** — Lurio/Tom, Little Lockets/Joanne,
    Viveonix/Dan, Fresh Gym/Gary, plus two new brands, Williams Int./Marc and
    Simons Designs/Simon. Six brands, one quote each; the earlier version
    repeated two brands to fill the columns. **The words are still ours and
    still flagged.** A real first name on an invented sentence is worse than an
    anonymous placeholder, not better, so the banner and per-card flags stay
    until Joe supplies the actual sentences.
  - **`/research` rebuilt.** It listed two placeholder pieces under a promise to
    publish, which reads as an empty shelf with a sign on it. Nothing can be
    done about the shelf — no research is published and inventing some would
    destroy the proposition — so the page now argues the programme: three
    commitments, a five-step "how a scan runs" spine carrying the failure each
    step prevents, three disqualifiers each illustrated with a Brandure scan
    that hit it, and **a finding of ours that did not survive its re-run.**
  - **The withdrawn finding is the page.** The 13 Aug Dubai headline for
    aesthetic clinics — "four surfaces, four disjoint lists, no overlap" — was
    contradicted by the clean 17 Aug re-run and is shown struck through beside
    its weaker replacement, with what survived underneath and a coverage figure
    showing the one category that went the other way. Every figure comes from
    `research/vertical-sprint/scans/`; nothing is invented; both runs are n=1
    and the page says so twice.
  - **DECISION NEEDED FROM JOE.** That section publishes detail from scans
    marked "not client-safe". It states them as a retraction rather than as
    fact, which is the opposite of what that marking guards against — but it is
    a judgement call and it is Joe's to make. `SHOW_WITHDRAWN` in
    `site/src/data/research.ts` removes the section in one edit.
  - **A real overflow bug caught at 390px:** `grid-template-columns: 1fr` takes
    its floor from the column's min-content, and an unbreakable chip in that
    column pushed the coverage figure 37px past the viewport. `minmax(0, 1fr)`.
  - **Verified:** every new element AA in both themes from rendered pixels
    (the gradient-clipped hero figures re-measured separately, since the
    computed-style sampler reads `color: transparent` and reports nonsense);
    Lighthouse 100 / 100 / 100 across index, service, faq and research; no
    horizontal overflow at 390, 768, 1024 or 1440 on five pages; reduced-motion
    and JS-off both render the new sections complete; no duplicate ids.
- **Sixth review pass on the site** (2026-08-27).
  - **Engine marks replace typed-out names** in the rotator's column headers —
    `src/components/EngineMark.astro`, `src/data/engines.ts`. **They are drawn
    approximations, not the official logos.** Every vendor host that serves
    the real SVGs is denied by this environment's network policy (403 on
    CONNECT, confirmed against the agent proxy's status endpoint). Dropping
    `chatgpt.svg`, `claude.svg`, `perplexity.svg`, `gemini.svg`, `google.svg`
    into `site/public/engines/` replaces them with no code change. **This is a
    gap, not a finished item** — a subtly wrong competitor logo on a
    professional site is worse than no logo.
  - **Rotator layout tidied** — market chip and its note run as one line the
    full width of the table, Intent through Named centred, footnote no longer
    capped at the body measure.
  - **Comparison table on `/service` takes a side.** Continuous tinted track
    with a coloured edge down the answer-engine column, a "what we work on"
    pill in its header, ticks against dashes so the verdict survives greyscale
    and colour blindness, numbered rows, row hover, and a full-width closing
    line. **A real bug caught by screenshotting it:** the tick was absolutely
    positioned in a cell that was not itself positioned, so all five ticks
    rendered on top of the axis labels in the first column.
  - **Client-quotes section added** between the research teaser and the
    questions — `src/components/Testimonials.astro`,
    `src/data/testimonials.ts`. **Every quote is a placeholder and the section
    says so** in a banner and on each card. The four brands and their results
    are real; the words are not. **This must not go live in this state.**
    Invented testimonials on a site selling measurement is the one placeholder
    the proposition cannot survive. Joe supplies the real sentences, or the
    section comes out.
  - **Rebuilt natively rather than pasted in.** The reference component was
    React + framer-motion + Tailwind + lucide with Unsplash avatars: a client
    framework on a site with no client JS, ~50KB for one section, and four
    external image requests on a page that makes none. Same visual idea, three
    CSS animations, no JavaScript. **No stock photographs of strangers**
    presented as clients — brand monograms instead.
  - **A content-loss bug found at 390px:** the first version hid columns two
    and three below the wide breakpoint, silently dropping four of the six
    quotes on a phone. Below 68rem the roll now stops and all six render as a
    static grid.
  - **Two tints needed deeper text tokens.** A colour tuned against the plain
    surface loses about a point of contrast on its own 10–12% tint. Cobalt on
    the market chip measured 4.00:1 (now `--cobalt-deep`); the amber on the
    placeholder banner measured 4.33:1 (now a new `--status-partial-deep`).
    Both were found by measuring, not by looking.
  - **Verified, not asserted:** every new element AA in both themes measured
    from rendered pixels with a centre-band sampler (a round monogram defeats
    bounding-box sampling and falsely reports 1.03:1); Lighthouse 100 / 100 /
    100 on performance, accessibility and SEO across index, service and faq
    (best-practices 96 is PostHog blocked by this sandbox's proxy, not a site
    defect); no horizontal overflow at 390, 768, 1024 or 1440 on all three
    pages; reduced-motion and JS-off both degrade to static content.
- **Fifth review pass on the site** (2026-08-25).
  - **Prompt rotator built** — `src/components/PromptRotator.astro` and
    `src/data/promptsets.ts`. Seven sector prompt sets, real prompts with real
    locations, rotating on a 7-second hold with tabs, a pause control, keyboard
    arrow support and a progress bar. It replaces four bracketed placeholder
    rows: a placeholder prompt shows the table's shape and nothing else.
    **Built as a component rather than the GIF that was asked for** — a GIF
    would be a fixed-width raster, blurry on retina, unreadable on a phone,
    invisible to a screen reader and hundreds of kilobytes. Same idea, sharper
    and controllable. Appears on the home page and again on `/service`.
    **Market is explicit per set**: the B2B SaaS set deliberately carries none
    and says why, per the standing rule.
  - **Service page rebuilt.** Hero with three standing facts; a five-row
    "this is not an SEO retainer" comparison; the four stages restated as
    artefacts received rather than activity performed, each with an "And
    plainly" line carrying the uncomfortable thing we say at that stage; the
    prompt rotator; pricing; and the refusal as its own moment.
  - **Viveonix logo fixed.** The first light variant recoloured the white fill
    to ink but left the black outline, merging both into a heavy blob — and
    the strip's `brightness(0)` did the same to the original. The transform now
    recolours the white fill and **removes** the outline, leaving clean
    letterforms, and the strip points at that variant too.
  - **A real bug found by building the rotator:** `tbody tr { opacity: 0 }` was
    a global rule cleared only by a class the motion runtime adds to
    `.table-figure`. Every other table on the site was therefore invisible —
    the rotator rendered as an empty box. Scoped to `.table-figure`. A global
    `opacity: 0` that depends on something else adding a class is a trap.
  - **Two more layout bugs, both found by measuring:** `table-layout: fixed`
    takes its columns from the first row, so the widths set on tbody cells were
    ignored and the engine columns were unequal; and `.deliv__item` setting
    `--sa` further down the sheet overrode every per-stage accent, so all four
    service stages came out cobalt.
  - **Table typography made consistent** — it had four families and sizes
    inside one table (mono head, sans row labels, mono citations, mono notes),
    which is what made it hard to scan.
  - **One contrast failure caught by Lighthouse:** cobalt on the comparison
    head band measured 4.19:1 at 13px. Switched to `--cobalt-deep`, the token
    that exists for exactly that. Service back to 100 accessibility.
  - **Stages hover sped up** — the dim was inheriting the 420ms entrance
    transition, far too slow to keep up with a cursor moving between cards.
- **Fourth review pass on the site** (2026-08-25).
  - **Claude added as a fifth engine.** It was missing and is one of the five
    that matter. `ENGINES` is the single source; every "four engines" /
    "four-surface" reference across pages, FAQs, schema description, llms.txt
    and the demo table was updated with it.
  - **The comparison table redesigned.** Pinned prompt column, tinted head
    band, a faint wash of each cell's status colour so the pattern of absence
    is visible before a word is read, status chips rather than loose text, and
    a per-row tally with a bar — five columns is more than a reader will count
    for themselves.
  - **Per-theme logo variants.** No single version of the four client marks
    works on both surfaces, so each card carries two and CSS picks. Lurio and
    Viveonix needed dark-ink variants for the light card; Little Lockets and
    Fresh Gym needed lightened ones for the dark. All generated from the
    originals by a canvas pass that recolours only near-neutral pixels and
    leaves saturated brand colour alone, then trims the artwork's bounding box
    and resizes. **`site/public/logos/README.md` records exactly how each was
    made and that they are derived, not official.** Viveonix went from a
    3840×2160 / 600KB canvas to 420px / 45KB in the process. The dark copies
    are `loading="lazy"`, so a light-theme visitor never downloads them —
    verified on the network, not assumed.
  - **Logo strip** now sits on the same surface as the section below it rather
    than a tinted band.
  - **Section headings a size down** — at the full `--h2` a three-line centred
    heading filled the column edge to edge and read as condensed.
  - **Problem cards** use colour to separate the two halves: heading and
    number in the card's hue, the effect on a tint of it.
  - **Stages**: the 5.5rem ghost numeral is now a small badge on the card's
    accent bar, titles and body a step down, and hovering one stage steps the
    other three back so the sequence is followable one step at a time.
  - **One contrast failure caught:** the stage number badge was white on the
    accent, and every accent lifts to a near-white tint in dark theme —
    **1.63:1**. Switched to `--btn-fg`, which is white in light and near-black
    in dark for exactly this case. All four badges now 4.68–8.43:1 light,
    7.26–11.64:1 dark.
- **Third review pass on the site** (2026-08-25).
  - **First real client results are live**, supplied by Joe: Lurio 92%,
    Viveonix 183%, Little Lockets London 79%, Fresh Gym 205%. `HERO_MODE` is
    now `'cases'`; `'stats'` still renders the Pew figures with no markup
    change. **Flagged, not changed:** each figure would be stronger with the
    engine, the date range and the base beside it — "92% across three LLMs"
    invites "up from what, over how long" from exactly this buyer.
  - **No inverted bands on the home page.** Every section is `--surface` or
    `--surface-sunk`, a 3% step, with no two sunk sections adjacent. The
    comparison table and the report CTA were full-bleed navy, so the background
    changed under the reader twice mid-scroll.
  - **Logo handling split in two.** The strip flattens every mark to a dark
    silhouette (white in dark theme) — uniform, and it sidesteps Lurio and
    Viveonix being white-knockout artwork. The hero cards carry the same marks
    in colour, each on its own tile, and **the tile colour has to vary by
    brand**: Lurio and Viveonix need dark, Little Lockets and Fresh Gym vanish
    on dark and need light. No single tile colour works for all four.
  - **Problem cards** carry a number, body-size copy, and a full-border glow in
    their own hue on hover. **Stages** are numbered cards on a coloured spine
    with large ghost numerals; the section is now "The four-stage process" —
    the previous heading and lede narrated rather than stated, which is the
    register that gives away machine-written marketing.
  - **A real performance regression, caught and fixed.** The hero mesh parallax
    was driven from its live bounding rect, so the layers jumped the instant
    the script ran: **CLS 0.169, home performance 92**. Now measured from the
    scroll position at which the mesh first renders, so it is 0 on the first
    frame. Back to 0.021–0.049 and 100. Not zero — a blurred drifting blob is
    the cost, and that is recorded rather than hidden.
- **Second review pass on the site** (2026-08-25).
  - **Hero card one now leads with the derived 47%**, not 8%. Leading with 8%
    read as a small number when the finding is a large loss. Both raw values —
    15% without an AI summary, 8% with — are printed on the card so the
    arithmetic can be checked.
  - **`site/hero-stat-options.md` written**: 18 options for these cards, each
    with a source and a four-band verification status (verified / first-party
    large sample / needs checking / statement). It names what must not be used
    and why, and flags one real gap — **there is no well-sampled public figure
    for how many brands an AI answer typically names.** That is a number
    Brandure could own, and a reason to widen the next scan.
  - **A second hero layout is built and switchable in one line.** `HERO_MODE`
    = `'cases'` renders client result cards instead. The placeholders are
    zeroes and the page prints a "Placeholder" flag. **That flag must not come
    off until the figures are real** — invented client outcomes on the first
    screen would contradict the entire proposition.
  - **`/faq` added — a fifth page type.** The original brief allowed four and
    said a fifth needed approval; this was asked for directly. 25 questions in
    four groups with a sticky section nav. Full `FAQPage` schema on `/faq`; the
    home page marks up only the six it shows.
  - **All scroll-pinning removed.** The four-surface section scrubbed its rows
    against raw scroll position — that is what made it stuttery: a scrub tied
    to scroll offset steps with every wheel notch instead of easing, and the
    reader was held in place while rows arrived. Nothing on the site is pinned
    now, and nothing animates against scroll except the progress bar and the
    hero mesh.
  - **Dark bands flattened.** The 160deg ramp to `#071440` made the lower half
    of every inverted band darker than the top, so the table sat on the darkest
    part and the three bands did not match. Same token, ramp gone. Row labels
    larger and semibold; the caption now runs the table's full width instead of
    being capped at 62ch.
  - **Four stages are a timeline** with a rule that draws on entry and nodes
    landing on it in turn. **One layout bug found by measuring:** the steps are
    grid items in one row so they stretch to equal height, and each step's two
    auto rows then shared that extra space — the step with the shortest copy
    grew its node row by 11px and dropped its heading out of line with the
    other three. Fixed with `align-content: start`.
  - **Problem cards take colour** from the four existing brand hues. No new
    colours.
  - **Logo strip label** is now inline and sentence case. The centred uppercase
    pill was the giveaway house style of a generated page.
  - Lighthouse home and `/faq` both 100 / 100 / 96 / 100, blocking time 0ms.
    Reduced motion and JS-off settle every animated element, the timeline
    included. All new furniture AA in both themes.
- **Copy and motion revision on the home page** (2026-08-25, after review).
  - **Hero statistics replaced.** The four cards described our own method
    (categories scanned, cells recorded) — of no interest to a visitor who has
    not heard of AEO. They now make the category argument, and three of the
    four are one cited study: **Pew Research Center, 22 July 2025**, 68,879
    Google searches by 900+ US adults, March 2025. 8% of visits end in a click
    when an AI summary is present against 15% without; 1% click a link inside
    the summary; 53% of ten-word-plus searches return one. Stated on the page
    as **Google AI Overviews specifically**, not AI answers in general.
  - **Gartner's "search volume down 25% by 2026" was deliberately not used.**
    It is the most-quoted figure in the category and its deadline has passed
    without it happening. Publishing a failed prediction on a site selling
    measurement would be self-defeating.
  - **Sourcing caveat:** `pewresearch.org` is unreachable from the build
    environment. Figures were confirmed from two independent search passes that
    agreed on every value and on the sample, not read off the primary source.
    **Open action: one direct check against the Pew page before launch.**
  - **Problem grid rewritten in plain language.** Entity resolution, grounding
    and control sets are out; "the AI chooses for them", "your website is not
    what decides" are in.
  - **Section-label pills removed** everywhere except the logo strip's
    "Trusted by". They read as slide furniture.
  - **Logo marquee: four copies, not two**, so it fills a wide viewport instead
    of sitting left-aligned with dead space. 38s per set, down from 52s.
  - **CTA card given a real entrance** — rises further, settles from 96%,
    shadow blooms — plus a sweeping glint and a breathing ring on the button.
  - **One defect found and fixed by measuring:** the glint originally swept the
    full card and dropped white text to **3.85:1** as it crossed the copy.
    Clipped to the right of the text and re-verified by freezing the animation
    at 51 phases and sampling under every text box — **worst case 4.99:1**.
    An effect that only holds AA at rest is not passing.
  - Lighthouse still 100 / 100 / 96 / 100, blocking time 0ms. Reduced motion
    and JS-off both settle 0 of 43 animated elements mid-animation.
- **Layout and motion pass — home page restructured to a reference layout.**
  Brief was to mirror `growthagency.co`'s flow, fix misalignment, and make the
  animations world-class but easy to follow, **without touching the palette**.
  The palette is unchanged: every token value is as it was, and the only colour
  addition is `--grad-brand`, built from three existing brand hexes.
  - **Section stack now:** hero (statement left, four measured figures as
    metric cards right) → logo strip → centred intro plus a 2×2 cause-and-effect
    problem grid → full-bleed gradient CTA card → pinned four-surface table →
    four process cards across → two-column pricing with gradient card heads →
    research → objections → report form.
  - **Six real misalignments fixed**, each verified rather than assumed: the
    display headline was capped at 7.5rem inside a ~41rem hero column and wrapped
    a nine-word line onto five ragged lines; the header nav floated wherever
    flexbox left room, and on a phone stacked to three rows; the pill label was
    inline-level and `.split` set headings to `display:inline`, so the first word
    of the h1 sat on the pill's line; in-page anchors landed under the sticky
    header; the mesh parallax was written every frame and painted nothing,
    because the drift `animation` overrode the transform it was set on; and the
    header at 72% opacity lost its dark nav text over the two dark bands.
  - **Two effects removed rather than tuned.** The 3D card tilt sheared
    left-aligned copy off its baseline under the cursor. The horizontal process
    rail was pinned across 220vh of runway to move its track a **measured
    136px** — a screen and a half of scrolling for almost nothing.
  - **One curve, one duration scale, one stagger step** across the whole site,
    replacing four easing curves and eight durations.
  - **Logo strip moved to the dark band, and the artwork forced it:** Lurio's
    fill is `#fff7ed` and Viveonix's wordmark is a white knockout, so both are
    invisible on `#FCFBF8`. Per-brand `tone` handles the rest; Growthmind's
    opaque dark tile is inverted rather than knocked out.
  - **Measured after:** Lighthouse home 100 / 100 / 96 / 100, **total blocking
    time 0ms**. Reduced-motion and JS-off both settle 0 of 45 animated elements
    mid-animation. All new furniture AA in both themes, gradient text included,
    measured on rendered pixels. Canonicals, sitemap, robots, llms.txt, schema
    and the form are byte-identical — confirmed by diff, not by intent.
  - **Flagged:** the reference centres section headings, and the earlier
    typography brief said everything left-aligned with no centred body text.
    Resolved by centring only pill, heading and lede as a unit — no body copy,
    card, table or hero text is centred. Also: the reference's metric cards
    carry client percentages with rising arrows; ours carry counts from our own
    first scan, with neither a percentage nor an arrow, because there are no
    client results to show and an arrow would assert a direction nothing
    measured.
- **Deploy pass — colour, type, scroll-linked motion, logo strip.** Cobalt
  `#2F5BFF` replaces the flat navy; deep `#0B1F5C` for inverted bands. Display
  scale runs to 7.5rem against 1rem body, capped at 18ch per line. Motion is
  now scroll-linked rather than triggered: the four-surface section pins and
  scrubs its rows in, process steps run a horizontal rail driven by vertical
  scroll, headline masks scrub, plus cursor-following light on dark bands,
  SVG line-draw, parallax mesh layers, sticky section headers and native View
  Transitions. Logo strip added under "Trusted by" — at the time **all five
  logo files were unfetchable (proxy denies the hosts), so all five were
  greyscale wordmark placeholders**. Superseded: the five real files landed
  2026-08-25 and are in `site/public/logos/`. The horizontal rail and the card
  tilt described here have since been removed — see the layout pass above.
  **Flagged, not resolved:** "Trusted by" asserts client relationships that
  `CLAUDE.md` and `clients/` say do not exist. Joe was asked to confirm the
  wording. Both themes still 100 accessibility; home light 100 performance
  after debouncing the geometry remeasure, which had cost 170ms of blocking.
- **Motion and visual pass.** Staggered reveals, per-word headline masks,
  count-ups, row-by-row table build, drifting hero mesh, magnetic buttons,
  card tilt, nav sweep, scroll progress. Transform and opacity only; reduced
  motion and no-JS both render the page complete and static, verified. All
  four Lighthouse runs held 100 performance and 100 accessibility, and
  blocking time fell 70ms to 30ms. Placeholder art extended to six code-built
  variants — mesh, grid, panel, bars, type specimen, table fragment. No
  photography anywhere. Machine-readable layer untouched again.
- **Site redesigned** — rhythm and scale contrast, alternating full-bleed and
  contained sections, two inverted bands, light and dark themes with a header
  toggle and no flash on load. Manrope replaces the specified Satoshi, which is
  distributed via Fontshare and unreachable from this environment. New routes:
  `/method` (reserved for the named framework) and `/work` (sample case studies,
  noindex). Both themes audited at 100 accessibility with axe; two colours from
  the brief failed AA and were corrected. Machine-readable layer untouched.
- **brandure.io site rebuilt to brief** at `site/`. Astro, static, no CMS.
  Four page types plus a 404. Zero JavaScript bundles — the only script is the
  cookieless PostHog snippet. Warm-paper palette defined once as tokens, self-
  hosted Inter and IBM Plex Mono, build-time OG images, RSS, generated
  `llms.txt`, JSON-LD on every page (15 blocks, zero validation errors).
  **No email gate anywhere** — all research open, per brief.
  Measured, not asserted: Lighthouse 100/100/96/100 on home; every status
  colour AA on paper; the three status hues are near-identical in greyscale
  (L 80/95/78) so each cell carries a glyph and label as redundant encoding,
  verified by rendering the 7x4 table in greyscale.
  **Nothing is deployed and no domain is pointed** — see below.
- **Delivery surface settled.** Delivery runs from Cowork; Claude Code builds
  and maintains this repo. The repo stays authoritative and Cowork consumes a
  packaged version. See `decisions/2026-08-11-delivery-surface.md`.
- **Measurement ownership settled.** Brandure owns the measurement layer for
  prospect sweeps and published research; Searchable owns client tracking and
  dashboards. The published index is the lead generation mechanism and requires
  data Brandure can publish. See
  `decisions/2026-08-11-measurement-ownership-split.md`.

## In progress

- Nothing. Foundations are complete; no work has started on top of them.

## Blocked

- **Vertical selection** — not made, and **the answer depends on which rule is
  in force.** Under the ratified 2026-08-12 rule, demand breaks the 9–9 tie and
  the first vertical is **B2B SaaS**. Under the proposed three-axis table with
  Defensibility added, it is **aesthetic clinics** at 14. Blocked on Joe ruling
  on the amendment first; the vertical follows from it and cannot be decided
  independently.
- **Vertical sprint** — designed and templated, not run. Needs no tooling, but
  no longer blocked on operator time alone: the prompt sets cannot be
  instantiated until Joe supplies markets per vertical and competitor names for
  the B2B SaaS and hospitality prompts. `research/vertical-sprint/prompts/`
  does not exist until then, per
  `decisions/2026-08-11-market-elicitation.md`. Still the highest-value item;
  everything below waits on it. **Selection rule:** a vertical must pass both
  the visibility gap and the demand signal, and where two verticals both pass,
  the stronger demand signal wins — see
  `research/vertical-sprint/demand-signals.md` for the ratified three-band
  trigger. **Note:** the 15 August pass did not apply those bands — it
  substituted trade survey data — so the tie-break between aesthetic clinics
  and B2B SaaS was made on the scoring table in
  `research/vertical-sprint/demand-pass-2026-08-15.md`, which is unratified.
- **ICP definition** — blocked on the vertical sprint. Cannot be written from
  first principles; needs evidence of which categories have weak, contestable
  AI answer surfaces.
- **Pricing** — blocked on ICP, and on real delivery hours per engagement,
  which is unknown until at least one delivery skill has been built and run
  end to end.
- **Client reporting** — deferred pending Searchable partner access. Format,
  cadence and delivery all unspecified until Searchable's output shape and
  export options are known. Looker Studio or equivalent is the fallback. See
  `decisions/2026-08-11-client-reporting-deferred.md`.
- **`brandure-agency-retainer-report`** — blocked on Searchable partner access.
  It is client tracking, which is Searchable's side of the split.
- **`brandure-agency-citation-map`** — needs the Bright Data account, which is
  not yet set up. No longer urgent: it runs on the owned layer only, and is now
  explicitly excluded from client engagements.
- **Demand-listening pass** — complete, by substituted instrument. No longer
  blocked, and the Bright Data / `brightdata-plugin:brand-listening` dependency
  never bound: the pass ran on trade survey data instead. The forum instrument
  remains unrun and would still need those tools if it is ever used.
- **Service definition** — what is actually sold, and in what shape. Blocked
  on ICP and measured delivery cost.
- **`brandure-agency-package`** — bundles `.claude/skills/` into a plugin
  Cowork can consume. Blocked on there being a skill to package (currently
  none) and on the plugin layout not being scoped. Not urgent for that reason,
  but it sits between every delivery skill and the surface delivery runs from,
  so it stops being deferrable the moment the first skill is built.
- **Prospect target-list building in aesthetic clinics and industrial
  manufacturers — hard prerequisite: A3.** No target lists in either vertical
  until the n=3 re-run is done. The two verticals the scan recommends
  prospecting first are the same two whose headline findings — four disjoint
  clinic sets, near-zero manufacturer overlap — are flagged as unverified at
  n=1. Prospecting on them means opening conversations with a finding that
  might be sampling variance, on exactly the categories where a prospect is
  most likely to check.
- **Site launch — awaiting preview deploy and sign-off.** No Netlify site
  exists yet; no domain points anywhere. The DNS work is deliberately not
  started: `brandureai.com` carries live Google Workspace mail, and the
  runbook in `site/README.md` requires capturing MX/SPF/DKIM/DMARC before the
  change and confirming a test email arrives after it. Nothing touches a live
  domain without Joe's explicit approval.
- **No privacy notice.** The brief caps the site at four page types and
  requires approval for a fifth, so the report form carries a one-line
  plain-English statement instead of a linked notice. Collecting names and
  emails from UK and EU visitors normally calls for a proper one. Needs a
  decision before launch.
- **Site content — blocked on three placeholders.** The build is complete; the
  content is not.
  1. **Pricing.** `/service` carries structure and scope but every figure reads
     "On application". Pricing is blocked on ICP and on measured delivery
     hours, so no rate card exists to publish. No number was invented.
  2. **Terms.** `/terms` is a placeholder covering website use only. Not
     lawyer-reviewed, and it does not cover client engagements.
  3. **Research.** The one published piece is an explicit placeholder about
     method. **Nothing from the Dubai scans is on the site**, and none of it
     should go up until A3 is done — both runs are n=1 and two headline
     findings moved between them.
  Also outstanding: the `/thanks` download link points at a placeholder PDF,
  and the LinkedIn URL in `site/src/consts.ts` is a guess.
- **Baseline reconciliation — decide before the first client.** Prospect sweeps
  run on the owned layer, client tracking on Searchable. The two will not
  produce matching numbers, so the pitch figure and the first client report
  will disagree. Either re-baseline on Searchable at onboarding and present the
  sweep as a pre-engagement finding, or state the methodology change in the
  first report. Not blocking now; blocking the moment a client signs.

**No longer blocked:**

- **`brandure-agency-measure`** — off the partner-access dependency. It is a
  prospect sweep, which puts it on the owned layer. The manual method needs no
  tooling and is the intended first version.

## Next

In order:

1. Run the vertical sprint. Buying-intent prompts across the four primary
   verticals, logged per `research/vertical-sprint/README.md`. Unblocks ICP.
   Run the demand-listening pass alongside it, per
   `research/vertical-sprint/demand-signals.md` — the two axes are independent
   and a vertical needs both. Manual collection is fine at 15 instances; do not
   wait on Bright Data.
2. Build the manual version of `brandure-agency-measure`. Unblocked, needs no
   tooling, and it is the wedge artefact shown to a prospect before anything is
   sold. Running it once produces the first real delivery-hours figure.
3. Pursue Searchable partner access. Now scoped to client tracking and
   reporting only, so it gates nothing pre-revenue. Test on access: export,
   white-labelling, and whether tracking is good enough to hand a client.
4. Define ICP from sprint output. Then pricing.
5. Set up Bright Data once the sprint names a vertical. It is the marketing
   path now — required for the published index, not for client delivery — so it
   follows the sprint rather than racing it. Verify coverage across ChatGPT,
   Claude, Gemini and Perplexity at usable cost before committing.

## Raised, not resolved

Questions surfaced in working sessions that have not been decided, and small
changes proposed but not made. Distinct from Blocked: nothing external is
stopping these, they simply have not been ruled on.

This section exists because a conversation ends and takes its open loops with
it. An instruction issued is not an instruction executed, and until now the
repo recorded only what landed — so anything raised and left hanging was
invisible by the next session. Clear items out as they are decided; do not let
this become a backlog.

- **Three channel-strategy items — proposed, not ratified.** From Section B of
  `decisions/2026-08-12-channel-strategy.md`. **Not settled; do not act on
  them as decided or restate them elsewhere as agreed.**
  1. The four-phase build structure (validate and instrument, publish and
     capture, outbound and founding clients, compound).
  2. The Phase 1 review trigger — email capture bands at 60 days from the
     research index going live. Unratified because Phase 1 has not started.
  3. The LinkedIn merge trigger — first signed case study or Snap exit,
     whichever comes first. Blocked on the contract read.

  The Phase 1 bands have no measured basis; there is no prior Brandure funnel
  to derive them from. Ratify, replace or discard them — leaving them
  unchallenged is how a proposal becomes a target by default.
- **Searchable tier verification.** Which tier carries white-label report
  entitlement, whether the Agency Partner Programme includes it, and — more
  broadly — which endpoints the partner tier actually exposes. The API
  reference shows tier-gating on at least shopping analytics and white-label
  reports, so documented capability does not imply available capability.
  Re-verify against a live account on access.
- **Demand pass — seven open items, none decided.** From
  `research/vertical-sprint/demand-pass-2026-08-15.md`. **Pending Joe's
  ratification. Do not act on any of these as settled, and do not restate them
  elsewhere without the pending label.**
  1. **Ratify the method change** — trade survey data as primary instrument,
     forum scraping secondary, supply-side competitor mapping as an explicit
     third output, and every search set run market-qualified.
  2. **Ratify promotion of industrial manufacturers** from reserve to primary.
     Until ratified the hold in
     `decisions/2026-08-15-vertical-shortlist-revision.md` stands and the
     vertical stays on the reserve list.
  3. **Ratify or reject the Defensibility axis** as an amendment to the
     2026-08-12 selection rule. Defensibility = can Brandure win here given zero
     case studies and a Dubai base. Grounds: the two original axes assumed
     competition sat in the answer surface; the pass found the binding
     constraint is service-market competition plus the absence of case studies.
     **The axis was proposed after scoring, not before** — the failure mode
     pre-registration exists to prevent — so it carries lower weight than a rule
     fixed in advance and should be judged on its grounds, not on the totals it
     produces.
  4. **Conditional on 3 — ratify the first vertical.** **New as of 2026-08-17:
     part of the evidence under this item has weakened.** The aesthetic clinics
     recommendation rested in part on the 13 August "four surfaces, four
     disjoint lists" finding; the clean re-run shows SKIN111 on three surfaces,
     Glow Aesthetics on two and Lucia Clinic on two. Consensus is low, not
     absent. The recommendation is **left unaltered** — changing it is Joe's
     call — but the Prompt score of 5 for aesthetic clinics was partly built on
     the stronger claim. Weigh this before ratifying.
     Aesthetic clinics if the amendment passes (14 on three axes). **B2B SaaS if the original rule is
     held**, because under the 12 August rule demand breaks the 9–9 tie and B2B
     SaaS wins it 5 against 4.

     **These cannot be ratified separately. Ratifying the scoring table amends
     the selection rule** — the table's ranking is produced by the axis, so
     accepting the ranking accepts the amendment whether or not it is stated.
     The original two-axis recommendation broke the ratified rule by breaking
     the tie on geographic defensibility, which the rule does not contain.
  5. **Ratify the UAE-first / US-UK-second market sequence.**
  6. **Verify Forrester, Gardner, Cox, Magenta and Microsoft figures against
     primary sources** before any client-facing use. All were reached via
     secondary reporting. This one is not a ratification — it is verification
     work, and it gates external use of every figure in the pass.
  7. **Vertical-level UAE buyer data remains absent.** Assess whether it can be
     commissioned, inferred, or whether the 13 August Dubai scan is sufficient.
     The UAE evidence in the pass is market-level only.

  Note on numbering: the 2026-08-17 instruction asked to replace "the fifth
  open item" with two. The fifth item is source verification; the item it
  described is the third, the scoring-table ratification. The third was split,
  and source verification is retained unchanged — it gates client-facing use of
  every figure in the pass. Seven items now, from six.
- **Where the run log lands.** Delivery runs from Cowork against a packaged
  copy of this repo, but the mandatory closing step appends to
  `runs/YYYY-MM.md` here. A log that lands in the package rather than the repo
  is a log nobody reads. Follows from
  `decisions/2026-08-11-delivery-surface.md` and needs an answer before the
  first delivery run — an unlogged run does not exist, and capacity and pricing
  both depend on the log.
- **`registry/agents.md` Type column.** Every row reads `agent` in a file
  called agents.md, and it is the last use of "Type" vocabulary after the
  rename to Track. Cosmetic; drop it next time the file is touched.

## Open actions on Joe

**From the 13 August Dubai scan — Section A only.** Sections B–E remain
archived at `research/vertical-sprint/scans/2026-08-13-dubai/actions.md` and
are not to be acted on until A2 and A3 have run.

- **A1 — Enable Claude in Chrome for incognito.** `chrome://extensions` →
  Claude in Chrome → Allow in Incognito. Two minutes. Blocks A2.
- ☑ **A2 — DONE 2026-08-17.** The 14 contaminated cells re-run clean; see
  `scans/2026-08-17-dubai-rerun/`. Superseded values now stand.
- **A3 — Re-run at n=3 per prompt. Priority raised.** Prioritise aesthetic
  clinics and industrial manufacturers. **Hard prerequisite for target-list
  building in both verticals** — see Blocked. The re-run raised the stakes
  rather than settling them: **two headline findings moved between two single
  runs four days apart.** AI Overview coverage went from 1 of 7 to 4 of 7, and
  the aesthetic-clinics zero-overlap finding collapsed to low-but-real overlap.
  **No finding from either run should be published without repeat sampling** —
  neither run's values are yet known to be stable.
- **D2 talking point RETIRED.** "AI Overview fired on only 1 of 7 UAE queries"
  is contradicted by the 17 August data, which recorded 4 of 7. **Must not be
  used client-facing.** It was listed as a sales asset in Section D of the
  13 August actions list, which is not lifted — recorded here so the number is
  not picked up from the archive and used.
- **A4 — Add a paid-tier comparison.** The scan ran free/default tiers. If paid
  tiers and reasoning models ground on different sources, the thesis narrows to
  free-tier users, which is material before pitching.

- **Read the Snapchat employment contract** for outside-business-activity and
  moonlighting clauses. Blocks finalising the LinkedIn merge trigger in Section
  B of `decisions/2026-08-12-channel-strategy.md`. Any such clause is triggered
  by the agency existing, not by whether a post links to it — so the absent CTA
  on Joe's personal LinkedIn is a credibility decision, not a contractual
  mitigation, and must not be relied on as one.
- **Supply markets per vertical and competitor names** for the B2B SaaS and
  hospitality prompt sets, so `research/vertical-sprint/prompts/` can be
  instantiated.
- **Supply the two Donnelly video URLs** for
  `research/sources/2026-08-12-donnelly-searchable-playbook.md`.

## Process

- **Commit reports must state files created against files requested, including
  omissions.** Every file asked for is accounted for explicitly — created, or
  named as not created with the reason. A silent gap between what was asked and
  what landed is the failure this rule exists to catch; it produced the missing
  channel-strategy record between `7c31a7e` and `f9a96ad`.
- **A truncated or incomplete instruction is flagged as truncated**, not
  treated as the whole request. The reconciliation above only works against a
  request received intact.
- **Proposed changes to a ratified selection rule are raised before the
  measurement or scoring they would affect, not after.** A criterion introduced
  once results are known cannot be shown to be independent of those results —
  the check that would establish it was skipped and cannot be run
  retrospectively. This is the same discipline as pre-registering mitigating
  circumstances, applied to the rule rather than to the excuse. Where an
  instrument discovers a variable the rule did not anticipate, that is
  legitimate grounds for an amendment, but the amendment is ratified explicitly
  and the affected scoring is marked as carrying lower weight.
- **Dated records use the actual date of creation.** A record created on the
  15th is dated the 15th, whatever date the session believes it is. Existing
  records carrying 2026-08-12 are left as they are: a wrong date is less
  damaging than retro-editing committed history, and a correction that rewrites
  the past is harder to audit than a date that is simply off.
- **Numeric thresholds with no measured basis are review triggers, not gates.**
  A gate implies pass/fail against a measured standard. Where no prior data
  exists, say trigger, give each band a response committed in advance, and
  pre-register mitigating circumstances before the window opens.
- **Section boundaries in a decision record are load-bearing.** Where a record
  separates what was decided from what was proposed, do not merge, summarise
  across, or promote proposals by restating them elsewhere without the label.

## Standing notes

- No clients. `clients/` is empty.
- No skills built. All entries in `registry/skills.md` are `not-built`.
- No agents built. All entries in `registry/agents.md` are `not-built`.
- No runs logged. `runs/` is empty and will stay so until the first skill runs.
