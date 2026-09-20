# Searchable Playbook — the four-number model and the free measurement stack

**Source:** LS — Louis, Searchable ("How to track AI search visibility", YouTube;
ingested 20 Sep 2026). Vendor content. Frameworks kept, numbers quarantined in
`verified-data.md` §9. Platform-report facts re-verified live 20 Sep 2026 (§8).

Searchable is Brandure's delivery platform (agency plan, white-labelled).
Guidelines, not rules — adapt to the client.

---

## 1. The four numbers

| Metric | Question it answers | How to get it without Searchable |
|---|---|---|
| **Visibility** | When the buyer asks a question that should lead to you, does the engine name you? | Manual: % of runs (unbranded prompt set, n≥3) where the brand appears. |
| **Share of voice** | Of all brands named, how much of the conversation is yours vs competitors? | Manual: your mentions ÷ all brand mentions across the same prompt runs. |
| **Sources** | Which pages did the engine consult to build the answer? | W3 citation mapping. Perplexity/AIO show sources; ChatGPT less consistently. |
| **Sentiment** | How does the engine describe you — tone, not just presence? | Manual rubric coding on the sampled answers (see §6.1). |

**Definition trap on share of voice.** The video's wording ("% of responses that
mention your brand vs competitors") is ambiguous. In its own demo, visibility is
36% and share of voice 11.2%, so SoV is share of *total brand mentions*, not
share of responses. Confirm the definition inside the tool before quoting either
number to a client.

**Reading them together is the point.** In the demo, Bloom & Wild trails
Interflora on visibility (36% vs 52%) and position, but leads on sentiment
(86 vs 59). Different number = different fight: a visibility gap is a
distribution problem (W3/W7), a sentiment gap is a positioning and review-content
problem. Never collapse them into one score (G2).

---

## 2. Source → mention → citation

Three different states, worth different amounts, reported separately.

| State | Meaning | Value |
|---|---|---|
| **Source** | Page was consulted to shape the answer. User may never see it. | Lowest — influence without attribution. |
| **Mention** | Engine names the brand in the answer text. | Middle — brand recall, no click path. |
| **Citation** | Engine links a real reference the user can click. | Highest — attributable. |

Demo example: Perplexity named Bloom & Wild on both runs but never with a
clickable link — mention, not citation. ChatGPT and Google AIO cited it outright.

Read with Pew's ~1% click-through on cited sources (`verified-data.md` §1):
even a citation rarely means traffic, but a mention without a citation has no
attributable path at all.

**Terminology collision.** Bing's report uses "citations" for pages used to
ground answers; Google's uses "impressions". Neither maps one-to-one onto
Searchable's source/mention/citation split. Label which definition a number uses
before it goes in a report.

---

## 3. Test discipline (what the demo shows and where it falls short)

- **Unbranded prompts only for a baseline** (B6). A branded prompt gets the
  engine answering what you asked, not what it believes.
- **One prompt, n=2, three engines proves variance exists, nothing more.**
  ChatGPT and Perplexity reshuffled brands and order between runs; Google AIO
  returned the same answer word-for-word twice. Useful as an illustration that
  engines differ in stability. Below our own n≥3 threshold (G3) — do not copy
  the demo method into client work or quote its results.
- **Six-for-six looked invincible; tracked daily it was a solid second.** The
  clean pitch line: a founder who checks their own name once is measuring an
  anecdote. Use the *lesson*, not the Bloom & Wild numbers.
- **Buyer start point is unknowable.** Any engine-specific tool (GSC, Bing) is
  blind to the other surfaces. That is the case for multi-surface sampling.

---

## 4. Free first-party stack (verified 20 Sep 2026)

| Tool | Shows | Doesn't show |
|---|---|---|
| **GSC — Generative AI report** (Performance) | Own-site impressions in AI Overviews, AI Mode and Discover gen-AI features, by page, country, device, date. | Clicks, CTR, queries. Other engines. Competitors. |
| **Bing Webmaster — AI Performance** | Own-site citations in Copilot, Bing AI summaries and select partner integrations; which pages; grounding queries; trend over time. Since Jun 2026 also Intents, Topics, Citation Share, Compare. | Anything on ChatGPT, Perplexity or Google AIO. |

Dates: GSC report launched 3 Jun 2026 (UK subset first), data from 18 May 2026,
worldwide as of 31 Aug 2026 — UAE properties should now have it once they clear
the impression threshold. Bing report launched Feb 2026 (public preview).

Video's analogy fits: these are each hotel's own visitor's book — proof of
appearances, after the fact, one surface, own site only. Ground truth for the
client's own footprint on those two ecosystems; not a competitive picture.

**Why they matter more than the video makes them sound:**
- Bing **grounding queries** are the only first-party view of the phrases an AI
  system generates to retrieve content. Feed them into W2 prompt-universe work.
- Both cost nothing and accumulate history from the day they're connected —
  set up before the retainer starts so the baseline is dated (W11).

---

## 5. The Searchable platform — how it works (as shown)

- Tracked prompt list per domain; visibility, share of voice, sources and
  sentiment per engine, tracked daily.
- **Opportunities tab:** why the brand is winning or losing, and what to do
  about it — content gaps to close, sources to earn a place on, technical fixes
  flagged.
- **Built-in agent** to query the workspace's own numbers and ask how to
  improve them.
- **Free visibility report** on any brand — same four numbers as a one-off
  snapshot. The entry point to the tracked product.
- **Agency plan (per Joe, not from the video):** Brandure delivers on
  Searchable's agency offer, white-labelled so the platform presents as
  Brandure's own system.

**Confirm in-platform before quoting or promising:** engine coverage list,
actual refresh cadence, how sentiment is scored, which surfaces the white-label
covers (dashboard, reports, domain). Pricing is out of scope for now.

**Demo example.** The video's Bloom & Wild vs Interflora walkthrough is a UK
example; it's fine as an illustration of the method (one prompt looked
invincible, tracked properly it was a solid second, and the sentiment lead
became the story). Use the lesson, not the numbers, as a market benchmark.

---

## 6. Use at Brandure

**6.1 The free report is the hook.** It's one snapshot: it proves the gap and
opens the conversation. It is not the product. The tracked, Brandure-branded
workspace is. The free report is Searchable's own output, so don't describe it
as Brandure's data; once a client is onboarded, the white-labelled workspace is.

**6.2 The retainer sells consistent movement.** The platform makes the loop
measurable: track prompts daily → read the Opportunities tab (content gaps,
sources to earn, technical fixes) → ship the work → watch visibility, share of
voice, citations and sentiment move → report the change → repeat. Value comes
from repeatedly showing that the work changed the scores, not from access to the
numbers. Report movement per engine, over windows (G9).

**6.3 Sentiment is the number to lean on.** It's the one metric that's tedious
to reproduce by hand. Tone can be rubric-coded on a small sample as a sanity
check, but the platform gives scale and consistency. The 0–100 score has no
disclosed method, so confirm how it's calculated before presenting it as
Brandure's own measure.

**6.4 Guardrail.** Promise process, measurement and citation-surface
expansion, never a position (`commercial.md`). Daily tracking makes movement
evidenceable, but engines reshuffle between runs (the video's ChatGPT and
Perplexity runs did), so claims rest on trend across a window, not a single
day's score.
