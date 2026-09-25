# Errata — `claude_rerun-data-2026-09-10.md`

**Status:** corrections to the September 2026 re-run record. The raw file is
immutable and is **not** edited by this document.

**Note on scope:** the raw file `claude_rerun-data-2026-09-10.md` is not in this
repository — it has never been committed. These corrections were supplied
alongside the three article drafts and are recorded here so the published
pieces and the record they came from can be reconciled. Anyone holding the raw
file should read it with this page open.

Every correction below is already reflected in the three articles in
`site/src/content/research/`. Where an article states a number, it states the
corrected one.

---

## 1. Bayzat self-citation count

**Raw file says:** 8 of 14 rows.

**Correct:** **7 of 14 rows, plus the lede.** The file's own table shows the
Bayzat citation on rows 1, 6, 7, 8, 9, 10 and 11, and on the opening summary.

*Used in Piece 1.*

---

## 2. Industrial local pack — comparison withdrawn

**Raw file says:** "three reviews net" since a 35 / 15 / 7 baseline.

**Superseded 2026-09-25.** The arithmetic correction (net zero, not three) was
right, but the comparison itself is now withdrawn: the baseline interval cannot
be established. The claims in circulation — "13 months", "a year" — do not
reconcile with a baseline scan dated 13 August 2026.

**Published position:** September figures only, no change claimed. Shuaiba
Industrial 4.5 (35 reviews), NAZ Industries 5.0 (16), Johar Manufacturing 4.8
(6). The figures stand on their own; six reviews is the whole of third place in
the category's local pack.

*Used in Piece 3.*

---

## 3. Cross-engine overlap summary

**Raw file's summary is superseded** by the recount taken directly from its own
raw tables, which is what Piece 2 uses. The summary understates the overlap:

| | File summary | Raw-table recount |
|---|---|---|
| Law firms | 0 | **2** (Latham & Watkins, White & Case) |
| Car dealerships | 0 | **1** (Gargash) |
| Industrial manufacturers | 1 | **2** (EGA, Ducab — Ducab via ChatGPT's separate large-company tier) |
| Perplexity ∩ Gemini, clinics | Hortman and the dual-named clinic | **also The Nova**, on both |

The recount counts every business recommended, including separate tiers and
"also consider" lists, and excludes passing mentions in caveats. That rule is
stated in Piece 2's methodology. Mixing it with a shortlist-only rule changes
the totals, so it should not be mixed.

*Used in Piece 2.*

---

## 4. SKIN111 and SKINIII

**Raw file treats them as separate entities.**

**Correct:** **one business, two spellings of the same name.** This is a
naming-consistency finding, not two competitors.

*Used in Piece 2, with the clinic unnamed — it is referred to as "Name A" and
"Name B" because the point is the split, not the business.*

---

## 5. ChatGPT aesthetic clinics, per-clinic citations

**Correct:** **0 of 17 across three runs.** An earlier count of 0 of 11 covered
runs 1 and 2 only; run 3 adds six further uncited entries.

*Used in Pieces 1 and 3.*

---

## 6. Hotels: Google and Gemini rates differ

**Correct, and revised again on 2026-09-25 against the screenshots.** Neither
the order nor the rates match. An earlier version of this errata said the module
order was the same; the captures show it is not.

| | Google Search | Gemini |
|---|---|---|
| Order | Meliá, Andaz, Canvas | Canvas, Meliá, Andaz |
| Rates | AED 589 / 320 / 212 | AED 188 / 749 / 455 |
| Context | dates set, "Top-rated" filter applied | no date context |

What **is** the same: the three properties, their ratings, their 5-star
classification, and their review counts to the unit — Canvas 7.5K against
7,540, Meliá 2.6K against 2,588, Andaz 3K against 3,033.

This is a separate query against the same inventory, not a mirror of the
results-page module, and that **strengthens** the finding. Matching rates on a
given date could be coincidence; review counts matching to the unit across
three properties cannot. Any claim of "same order", "identical rates" or
"verbatim" is wrong and must not be restored.

*Used in Piece 3.*

---

## 7. AI Overview coverage count — resolved at 4 of 7

**Raw file says:** 3 of 7 categories — law firms, industrial manufacturers,
universities.

**Correct: 4 of 7.** B2B SaaS is the fourth. Capture
`03-google-saas-bayzat-organic-no1.jpg` shows the AI Overview firing on "Best
B2B SaaS companies in Dubai", signed out, headed "Top B2B SaaS Platforms &
Startups in Dubai", leading with Nazm.ae, Dukkantek and Verofax, grounded on
F6S (+2), DXB Start and Wellfound. All three cited domains are also page-one
organic results for the same search.

*Used in Pieces 2 and 3.*

---

## 8. The August baseline was the contaminated scan — "tripled" withdrawn

**Published position was:** AI Overview coverage tripled, 1 of 7 in August to
3 of 7 in September.

**Withdrawn.** The 1 of 7 figure comes from
`research/vertical-sprint/scans/2026-08-13-dubai/scan.md`, whose own front
matter marks the Google Search cells `contaminated_cells: 14 (Gemini, Google
Search — signed-in profile)`. Those cells were re-run signed out four days
later as `scans/2026-08-17-dubai-rerun/`, which is marked `status: clean —
supersedes the 13 Aug contaminated cells` and `session_state: incognito, signed
out`. That is the run whose conditions match September's.

The clean August baseline is **4 of 7** — law firms, B2B SaaS, industrial
manufacturers, universities. The repo's own `2026-08-17-dubai-rerun/diff.md`
already records this under the heading "AI Overview coverage: 1 of 7 → 4 of 7".

**So September's 4 of 7 is the same count on the same four categories.**
Coverage held; it did not triple. The tripling was an artefact of comparing
across a sign-in change. Boutique hotels, the only category the signed-in scan
found an AI Overview on, had already lost it by 17 August.

Both runs are n=1, so personalisation, a genuine platform change and
run-to-run variance cannot be separated. The piece says so.

**Second casualty, same cause.** Piece 1's law firm displacement claim — a
firm's own listicle on page one in August, gone by September — also rests on a
13 August Google Search cell (advocatealsuwaidi.com at organic #8). The clean
17 August re-run does not have it on page one at all. The claim is now stated
with that caveat rather than as a clean month-on-month change.

*Used in Pieces 1, 2 and 3.*
