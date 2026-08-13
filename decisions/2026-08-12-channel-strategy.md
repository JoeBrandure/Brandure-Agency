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

### Review triggers — ratified

Ratified 2026-08-12. Both are independent of the outstanding employment
contract question in Section C, which is why they move here while Phase 1 does
not.

**These are review triggers, not gates.** See "What a review trigger is" below
for what that distinction commits Brandure to.

**Demand signal, per vertical.** Instances within the six-month window;
class refers to the signal classes in
`research/vertical-sprint/demand-signals.md`, which is the operative copy of
this trigger.

| Band | Reading | Response |
|------|---------|----------|
| **15+ instances, 5+ in classes 1–2** | Viable as first vertical. | Lead with it. |
| **8–14 instances, 3+ in classes 1–2** | Contestable. | Hold as reserve. Do not lead with it. |
| **Under 8 instances** | Education-led selling. | Not affordable as a first vertical at 15–20 hours a week. |

**Phase 2 — 40 diagnostic-led outbound approaches into one vertical.**

| Band | Reading | Response |
|------|---------|----------|
| **4+ booked calls** | Working. | Continue in the same vertical. |
| **2–3 booked calls** | Ambiguous. | Isolate diagnostic versus vertical. Send 20 more with exactly one variable changed. |
| **0–1 booked calls** | Failing. | Stop. Both vertical and diagnostic are suspect. |

**Why absolutes rather than a percentage.** At n=40 the difference between a
5% and a 10% booked-call rate is one or two calls. That is variance, not
signal. A percentage target invites reading a two-call swing as a trend and
carries a false precision the sample size cannot support. Counts make the
noise visible.

---

## Section B — Proposed, not ratified

Claude's recommendations, pending Joe's decision. **None of this is decided.**

- **A four-phase build structure:** validate and instrument, publish and
  capture, outbound and founding clients, compound.
- **Merge trigger for the two LinkedIn tracks:** first signed case study, or
  Snap exit, whichever comes first — so the delay has an explicit end condition
  rather than drifting indefinitely. Blocked on the contract read in Section C.

**Phase 1 review trigger — email captures, 60 days from the research index
going live.** Stays unratified: Phase 1 has not started.

| Band | Reading | Response |
|------|---------|----------|
| **40+ captures** | Working. | Continue. Increase publishing cadence. |
| **15–39 captures** | Ambiguous. | Diagnose which of audience, offer or distribution is failing. Change exactly one variable. Run a 30-day re-test. |
| **Under 15 captures** | The input is wrong, not the volume. | Change vertical or positioning before publishing more. |

The bottom band is the one that matters, because the instinct on a low number
is to publish more of the same. Under 15 says the problem is upstream of
volume.
- **Rationale for anchoring credibility in proprietary research rather than
  opinion:** commentary borrows authority from the employer badge and loses it
  on the identity switch; published data does not. A body of commentary
  accumulates an audience that came for the Snapchat vantage point. A body of
  published research accumulates an audience that came for the research, and
  that audience survives the transition.

The Phase 1 bands have no measured basis — there is no prior Brandure funnel to
derive them from. They are legibility thresholds, not forecasts. Ratify or
replace them; do not let them harden by sitting here unchallenged.

---

## What a review trigger is

**Applies to every trigger in this record and to the demand trigger in
`research/vertical-sprint/demand-signals.md`.**

A **gate** implies pass/fail against a measured standard. Nothing here has one:
there is no prior Brandure funnel, so no number in this repo is derived from
observed performance. Calling them gates would dress an estimate as a
measurement.

A **review trigger** does something a gate does not. It forces a
stop-and-reassess at a pre-committed point. The failure mode it exists to
prevent is continuation on momentum — carrying on because the work is underway
and the numbers have not obviously collapsed, which is how a solo operator with
15–20 hours a week spends a quarter on a vertical that was never going to
convert.

The bands are legibility thresholds, not forecasts. Their value is that the
response to each is decided **before** the result is known, when it can still be
decided honestly.

### Governing rules

**One re-test per trigger.** If a re-test also lands in the ambiguous band,
treat it as the bottom band. Persistent ambiguity is the answer — a signal that
will not resolve after two attempts is telling you the thing does not work well
enough to be worth a third. Without this rule the middle band becomes an
indefinite loop, which is continuation on momentum wearing a process.

**Mitigating circumstances are pre-registered or they do not count.** Name and
record them **before the measurement window opens**. Anything not on the list at
the start does not qualify at the end.

Each trigger gets a pre-registered circumstances list, recorded under a dated
heading in the file the trigger lives in, on the day its window opens. An empty
list is a valid list and should be written down as one.

This rule exists because a disappointing result always arrives with an
explanation attached, and the explanation is always available afterwards —
seasonality, an algorithm change, a bad month at work. Some of those are real.
None of them can be assessed honestly once the number is known.

### Leading indicator

**Track capture rate per post, not only the cumulative total.**

A 60-day window reporting one number at day 60 hides a failing input for two
months. Per-post capture rate makes the same failure visible within weeks, and
weeks is the difference between changing one variable and losing the window.

This applies wherever a trigger runs on a cumulative count: log the per-unit
rate alongside the running total — per post for Phase 1, per batch of approaches
for Phase 2, per source for the demand pass.

Leading indicators inform; they do not fire the trigger. A weak first fortnight
is grounds for diagnosis, not for declaring the bottom band early. The trigger
fires at the end of its window, on the full count.

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
