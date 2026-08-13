# Channel strategy

Date: 2026-08-12

## Provenance

**Reconstructed from a Claude chat session on 2026-08-12.** This record was
specified in an earlier build prompt and silently omitted from commit
`7c31a7e`. The omission was not detected until `f9a96ad`.

The mechanism, recorded so the process fix has something to bite on: the build
prompt behind `7c31a7e` was truncated mid-sentence at "Seed with". The
truncation itself was flagged at the time and in `growth/content-log.md`, but
any file requested beyond the cut was never visible and so was never counted as
missing. An omission cannot be reported against a request that did not arrive
intact — which is why the process rule now added to `STATE.md` requires
commit reports to state files created against files requested, including
omissions. That check is only as good as the request it reconciles against, and
a truncated request needs flagging as truncated rather than treated as
complete.

**Sections below are separated by who said what. Do not merge them.** Section A
is Joe's. Section B is Claude's proposal and is not ratified. Treat nothing in
Section B as settled, here or anywhere else in the repo.

---

## Section A — Decided

Stated by Joe. These are decisions.

- **Joe's personal LinkedIn publishes category-level content on AI and AEO.**
  No Brandure CTA, no commercial link at this stage. In Joe's words: build the
  credibility personally first, so that when Brandure is named the credibility
  transfers.
- **Brandure's LinkedIn page publishes the research indexes.**
- **Brandure posts carry a single CTA** offering a personalised AI visibility
  report for the reader's own business.
- **TikTok carries founder-journey and everyday-life content**, kept
  deliberately natural. The objective is personal brand equity and future
  optionality. **Not measured on Brandure pipeline** — it is not a
  lead-generation channel and should not be assessed as one.
- **Positioning is AEO-specialist first.** Broader marketing services are a
  post-traction expansion, and can be subcontracted rather than built
  in-house.

---

## Section B — Proposed, not ratified

Claude's recommendations, pending Joe's decision. **None of this is decided.**

- **A four-phase build structure:** validate and instrument, publish and
  capture, outbound and founding clients, compound.
- **Phase 1 gate:** 50 qualified email captures within 60 days of the research
  index going live. A miss indicates a positioning or vertical problem, not a
  volume problem — the reading matters, because the instinct on a miss is to
  publish more of the same.
- **Phase 2 gate:** 40 diagnostic-led outbound approaches into a single
  vertical, at an 8–10% booked-call rate or better.
- **Merge trigger for the two LinkedIn tracks:** first signed case study, or
  Snap exit, whichever comes first — so the delay has an explicit end condition
  rather than drifting indefinitely.
- **Rationale for anchoring credibility in proprietary research rather than
  opinion:** commentary borrows authority from the employer badge and loses it
  on the identity switch; published data does not. A body of commentary
  accumulates an audience that came for the Snapchat vantage point. A body of
  published research accumulates an audience that came for the research, and
  that audience survives the transition.

The three numeric gates are proposals with no measured basis — there is no
prior Brandure funnel to derive them from. They are stated as thresholds rather
than estimates so that a miss is legible, which is their whole function. Ratify
or replace them; do not let them harden by sitting here unchallenged.

---

## Section C — Open, blocking Section B

**Joe's Snapchat employment contract has not been read for
outside-business-activity or moonlighting clauses.**

Any such clause is triggered by the agency's existence, not by whether a post
links to it. Removing the CTA from Joe's personal LinkedIn reduces
discoverability, not contractual exposure. The two should not be confused: the
Section A decision to keep the personal track uncommercial is a credibility
decision and stands on its own reasoning, but it does not function as a
contractual mitigation and should not be relied on as one.

**The merge trigger in Section B cannot be finalised until this is read.** The
rest of Section B is unratified in any case.

**Action on Joe:** read the contract. Logged in `STATE.md`.

If a clause exists, its interpretation is a legal question and this repo is not
the place it gets answered.

---

## Section D — Risk

**Brandure's initial advantage is information asymmetry, and it decays.**

Incumbent SEO agencies are adding AEO service lines, fastest in the target
English-speaking markets. Whatever Brandure currently knows that they do not,
they will know — and they will arrive with existing client bases, existing
retainers to expand, and staff.

**The durable asset is documented outcomes, not knowledge.** A competitor can
acquire the knowledge. They cannot acquire a measured before-and-after on a
named client with a control set behind it.

This is why day-zero instrumentation precedes client acquisition. An engagement
run without a baseline produces revenue and no asset — see
`measurement/methodology.md`, where the case study standard requires a
day-zero baseline, a control set showing divergence, and raw component metrics.
The first engagements are worth more as evidence than as income, and an
uninstrumented first client is the most expensive mistake available at this
stage, because the window in which the work is differentiating is exactly the
window in which the proof has to be captured.

---

## What would reverse it

Section A holds until Joe changes it. On the rest:

- **Contract findings.** A moonlighting clause materially changes the personal
  track, the merge trigger, and possibly whether the agency operates under
  Joe's name at all before a Snap exit.
- **Ratification of Section B**, which would move those items into a decision
  of their own rather than leaving them here as proposals.
- **A channel outperforming its brief.** TikTok is explicitly not measured on
  pipeline; if it produces qualified enquiries anyway, that is a finding worth
  acting on rather than a reason to keep the original framing.
