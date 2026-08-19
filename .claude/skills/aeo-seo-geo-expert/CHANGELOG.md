# Changelog — aeo-seo-geo-expert

Bump the version on any change to SKILL.md or a reference file, then re-zip and
re-upload to Claude settings. The repo is the source of truth; the uploaded zip
is a build artifact.

Version format: `MAJOR.MINOR`
- **MINOR** — new heuristics, refreshed figures, workflow tweaks.
- **MAJOR** — structural change to how the agent reasons or is invoked.

---

## 1.0 — 2026-08-19

Initial build.

**SKILL.md**
- Identity, dual mandate (Brandure first, clients second), terminology position
  on SEO/AEO/GEO as one stack.
- Explicit non-prescriptive stance: heuristics are starting hypotheses, live
  evidence overrides the skill, contradictions get flagged for update.
- Verification reflex — five-step check before any factual claim reaches a
  client.

**references/practitioner-heuristics.md**
- 25 heuristics across strategy (A), prompts (B), on-site content (C), technical
  (D), off-site/entity/earned (E), local (F), measurement (G).
- Source tags: `CD` (Chris Donnelly / Searchable, two YouTube playbooks),
  `BD` (Brandure Dubai four-surface scan, 13 Aug 2026), `FP` (field practice).
- Each carries confidence, applicability, failure mode, what to verify.

**references/verified-data.md**
- Sourced and dated figures: zero-click and AIO prevalence, AI Mode trajectory,
  ranking-to-citation decay, citation concentration and platform asymmetry,
  llms.txt evidence, content type and retrieval behaviour.
- Reconciliation table covering 11 heuristic claims needing correction or
  qualification.

**references/workflows.md** — W1–W10, each with adjustable judgement calls.

**references/commercial.md** — packaging, pitch arguments, promise guardrails,
Brandure's own dogfood sequence.

**Fixed pre-release:** frontmatter description was 245 chars against a documented
200-char limit; cut to 194.

---

## Open items for future versions

- Re-verify all §2 prevalence figures — review trigger is ~90 days from
  2026-08-19.
- Add heuristics as new expert sources are ingested; keep the source-tag
  convention.
- Watch source composition on tracked prompt sets for the heuristic A3 closing
  window — if self-published sources start being down-weighted, E5 and the
  commercial positioning both need revision.
- Add a client-facing vs internal split if reference files grow past ~4.
