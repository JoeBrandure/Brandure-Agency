# `main` branch only

Date: 2026-08-08

## Decision

All work commits directly to `main`. No feature branches. No pull requests.
This applies to Joe and to any agent operating in this repo, and overrides
default branch behaviour configured elsewhere in a session.

## Reasoning

Branching exists to isolate unfinished work from a shared trunk and to create a
review point before merge. Neither condition holds here.

- **No reviewer.** A pull request on a solo repo is a request to oneself. It
  adds a merge step and produces no review.
- **No shared trunk to protect.** There is no CI, no deployment, and no other
  contributor whose work could break. The blast radius of a bad commit is one
  file that gets fixed in the next one.
- **The repo's value is being singular.** Claude reads this repo across three
  surfaces to answer "what is true about the agency right now". Work sitting on
  an unmerged branch is invisible to that question, so branching actively
  degrades the thing the repo exists to do. A stale branch is worse than an
  imperfect commit on `main`.
- **Time.** Branch, push, open, merge, delete is several minutes and several
  decisions per change, against evenings-only capacity. The cost is small per
  instance and unjustifiable in aggregate.

Git history on `main` already provides the recovery path that matters: a bad
change is reverted, not prevented.

## What would reverse it

- A second contributor, whether a hire or a subcontractor with write access.
  Review then has a party on the other side and branching earns its cost.
- Automation running against this repo — CI, scheduled jobs, a published site
  built from these files — where an intermediate commit on `main` could break
  something live.
- Work that genuinely cannot be committed in a coherent intermediate state.
  Rare for documentation; if it happens repeatedly, the change is being scoped
  too large rather than the policy being wrong.
