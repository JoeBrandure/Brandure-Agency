# Repo as source of truth

Date: 2026-08-08

## Decision

This repository is the single source of truth for agency state, skills, agents,
decisions and client work. Anything that matters is written here. Nothing
authoritative lives only in a chat thread, a note-taking app, a spreadsheet or
Joe's head.

Claude reads this repo from chat, Cowork and Claude Code. All three surfaces
read the same files, so all three give consistent answers about what the agency
is doing.

## Reasoning

The agency is a solo operation run in the margins of a full-time job. Context is
lost between sessions by default, and re-establishing it is the single largest
recurring time cost. A repo removes that cost: a session starts by reading
`CLAUDE.md` and `STATE.md` and is immediately current.

Three specific properties made this the choice over the alternatives:

- **Multi-surface.** Chat, Cowork and Claude Code all read files from the same
  place. A note in one chat's memory is invisible to the other two, so the
  operator would be reconciling three views of the agency instead of running one.
- **Versioned.** Decisions and their reasoning are recoverable at a date, not
  just in their current state. This matters most for reversals: knowing what was
  believed at the time is what makes a reversal a judgement rather than a
  reversal of judgement.
- **Executable.** Skills stored as files are procedures that can be run, handed
  to a subcontractor, or given to a model — not descriptions of procedures. This
  is the precondition for both automation and delegation, which are the only two
  ways past the time constraint.

The cost is discipline: the repo is only true if it is updated. That cost is
paid by the mandatory logging step in every skill and by keeping `STATE.md`
short enough that updating it is not a task in itself.

## What would reverse it

- A tool that provides the same durable, multi-surface, versioned context with
  materially less maintenance overhead. Note-taking apps and chat memory do not
  currently qualify — neither is versioned and neither is readable by all three
  surfaces.
- The repo going stale in practice: if `STATE.md` and `runs/` are routinely out
  of date, the repo is no longer the source of truth regardless of intent, and
  the honest response is to fix the update discipline or pick a lighter system,
  not to keep asserting the repo is authoritative.
- Growth past a small team, where client work would need access controls and
  systems this repo does not have. Agency state would likely stay here; client
  delivery would move.
