---
title: "Placeholder: how a category scan is reported"
description: "Placeholder scaffolding showing the research template — tables, citations, method and limitations. No findings. Delete this file to remove it."
published: 2026-08-19
vertical: "Placeholder"
placeholder: true
sources:
  - label: "Placeholder source entry — replace with a real citation"
---

**This page is scaffolding, not research.** It exists so the template can be
seen working. Nothing here is a finding about any real brand, and no figure on
this page is measured.

## What a real piece contains

Every published piece carries the prompt set verbatim, the market it was run
in, the engines queried, the date, and the number of runs per prompt. Those are
not appendix material — a result without them cannot be checked or repeated.

## Comparison tables

The comparison table is the core component. It carries one row per prompt, one
column per engine, and a citation subline showing what the answer was grounded
on. Status is encoded three ways at once — colour, glyph and text label — so it
survives greyscale printing and readers who cannot distinguish the hues.


<figure class="table-figure">
<div class="table-scroll" tabindex="0" role="region" aria-label="Format demonstration: seven prompts across four answer engines">
<table>
<caption>Format demonstration — seven prompts, four engines</caption>
<thead><tr><th scope="col">Prompt</th><th scope="col">ChatGPT</th><th scope="col">Claude</th><th scope="col">Gemini</th><th scope="col">Google AI Overview</th></tr></thead>
<tbody>
<tr><th scope="row"><span class="row-label">Best employment lawyer in [city]</span><span class="row-note">buying intent</span></th><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">directory listing</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">mentioned, not ranked</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td></tr>
<tr><th scope="row"><span class="row-label">Alternatives to [incumbent]</span><span class="row-note">comparison</span></th><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">own comparison page</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">listed sixth</span></td></tr>
<tr><th scope="row"><span class="row-label">[category] pricing explained</span><span class="row-note">informational</span></th><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">aggregator</span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">aggregator</span></td><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">own pricing page</span></td><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">own pricing page</span></td></tr>
<tr><th scope="row"><span class="row-label">Who are the top [category] firms</span><span class="row-note">discovery</span></th><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">trade press</span></td><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">trade press</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">local pack only</span></td></tr>
<tr><th scope="row"><span class="row-label">Is [brand] any good</span><span class="row-note">reputation</span></th><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">review site</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">review site</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td></tr>
<tr><th scope="row"><span class="row-label">[brand] vs [competitor]</span><span class="row-note">head to head</span></th><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">competitor page</span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td></tr>
<tr><th scope="row"><span class="row-label">Cheapest [category] in [city]</span><span class="row-note">price led</span></th><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--absent"><span class="status__glyph" aria-hidden="true">○</span><span class="status__label">Absent</span></span></td><td><span class="status status--partial"><span class="status__glyph" aria-hidden="true">◐</span><span class="status__label">Partial</span></span><span class="cite">directory</span></td><td><span class="status status--present"><span class="status__glyph" aria-hidden="true">●</span><span class="status__label">Cited</span></span><span class="cite">marketplace</span></td></tr>
</tbody>
</table>
</div>
<figcaption>Illustrative layout only. Every status above is invented to show the format — none is a finding about any real brand. A real table carries the verbatim prompt set, the market, the engines, the date and the number of runs per prompt.</figcaption>
</figure>

## Methodology and limitations

Every piece ends with these two, stated plainly rather than buried.

A finding drawn from a single run cannot separate a real difference between
engines from ordinary run-to-run variance. Anything published here says how
many runs it rests on, and does not present a single-run result as stable.
