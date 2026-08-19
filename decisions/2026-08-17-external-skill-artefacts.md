# Externally-authored skills keep their upstream form

Date: 2026-08-17

## Decision

A skill authored outside this repo is committed **exactly as its upstream
source defines it** — upstream directory name, upstream internal path
structure, upstream frontmatter, byte for byte. Repo metadata that would
otherwise live in frontmatter is carried in `registry/skills.md` instead.

This exempts external skills from three repo conventions at once:

| Convention | Normal rule | External skills |
|---|---|---|
| Naming | `brandure-agency-<name>` prefix — `decisions/2026-08-08-naming-convention-brandure-agency.md` | Upstream name, unprefixed |
| Path structure | Directory plus `SKILL.md`, reference files alongside — `templates/skill-template.md` | Upstream structure, including subdirectories such as `references/` |
| Frontmatter | Three fields: `name`, `description`, `track` — `templates/skill-template.md` | Upstream fields only; `track` recorded in the registry |

**Location is not exempt.** External skills live at
`.claude/skills/<upstream-name>/`, exactly like every other skill, per
`decisions/2026-08-11-skills-location.md`. That record is not overridden and
its reasoning is load-bearing here — see below.

First application: `.claude/skills/aeo-seo-geo-expert/`.

## Reasoning

### Naming — and why the exemption only holds at `.claude/skills/`

The prefix exists for invocation reliability and namespacing. For an external
skill, two things make the upstream name the more reliable one:

- **`SKILL.md` is a platform-mandated filename.** Claude does not detect the
  skill if it is renamed.
- **The directory name is the invocation string.** Renaming to
  `brandure-agency-aeo-seo-geo-expert` means typing that in full every time.

**This argument only works at `.claude/skills/`.** It is an argument about
invocability, and invocability requires the harness to see the file at all.
Claude Code discovers skills at `.claude/skills/` and does not scan `skills/`.
A skill placed anywhere else — or renamed such that the platform stops
recognising it — is a document, not an invocable skill, and the naming
exemption then defends nothing.

This is the exact trap `decisions/2026-08-11-skills-location.md` was written to
close: a prefix justified on invocation reliability is worth nothing if the
asset sits somewhere the harness never looks. The same sentence now cuts the
other way. **An exemption granted on invocation grounds is void outside
`.claude/skills/`.**

### Path structure

An upstream skill arrives with its own internal layout — here, a `references/`
subdirectory holding four files. Flattening it to match the repo's
"reference files alongside `SKILL.md`" convention would mean editing the paths
`SKILL.md` uses to reach them, which is editing the skill.

### Frontmatter

Two reasons, and the first is the stronger one.

**1. The repo copy must stay byte-identical to what is uploaded to the
platform.** The skill runs from a zip uploaded to Claude settings. If the repo
copy carries frontmatter the uploaded copy does not, the two diverge and the
repo stops being a verifiable record of what is actually live — a checksum
comparison is the only cheap way to confirm they match, and any added field
breaks it. The repo's value here is being checkable against the running
artefact.

**2. `track` is a single-value enum and this skill is genuinely dual-track.**
Its stated mandate is Brandure's own visibility first and client delivery
second. `build` alone is wrong and `run` alone is wrong. Forcing a choice would
record something false in order to satisfy a schema.

The `description` field is also invocation-critical: it is the text a model
reads when deciding whether to fire the skill, and this one sits at 194 of a
200-character limit. There is no room to append repo metadata into it, and
nothing else in frontmatter is safe to touch without changing what the platform
sees.

### Where the metadata goes instead

`registry/skills.md`. Track, status, purpose and dependencies for external
skills live there and nowhere else.

**This inverts the authority rule in `templates/skill-template.md`**, which
states that the skill file is authoritative and the registry column is an
index. For external skills the registry is the *only* record of track, and is
therefore authoritative for it. That inversion is deliberate and is the price
of the frontmatter exemption. It has a consequence that is not yet resolved —
see below.

## Consequence — the registry becomes load-bearing, and nothing points at it

`CLAUDE.md` is the mandated entry point for every task in this repo and **does
not mention `registry/skills.md` at all**. `README.md` points at it, but README
is not mandated reading. `templates/skill-template.md` tells the reader the
opposite of what now holds for external skills.

So a session that reads `CLAUDE.md`, opens `.claude/skills/aeo-seo-geo-expert/`
and finds no `track` has no signposted route to the place that carries it.

**Recorded, not fixed.** The fix is a pointer in `CLAUDE.md` and a carve-out in
the template's authority rule. Both are edits to standing rules and are Joe's
call, not a tidy-up to fold into this commit. Logged in `STATE.md` under
Raised, not resolved.

## What would reverse it

- **The platform relaxing the `SKILL.md` filename or directory-as-invocation
  constraints.** The naming exemption rests entirely on them; without them the
  prefix costs nothing and should be applied.
- **A `track` field, or an equivalent, becoming supported upstream** — or the
  repo dropping the single-value constraint so a dual-track skill can be
  labelled honestly in frontmatter. Either removes reason 2.
- **The repo copy ceasing to be the verification artefact for the live skill.**
  If the deployment path changes so the uploaded zip is built from the repo
  rather than compared against it, reason 1 goes and only reason 2 remains.
- **External skills becoming numerous enough that unprefixed names collide**
  with something else in the namespace. The exemption is justified on
  invocation reliability, so a collision that damages invocation reliability
  defeats it on its own terms.
