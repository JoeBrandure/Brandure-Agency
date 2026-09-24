import { getCollection } from 'astro:content';
import { listable, sortDate, tagFor } from '../lib/research';
import { SITE } from '../consts';
import type { APIContext } from 'astro';

/**
 * llms.txt — a plain-text summary for AI fetchers. Generated from the same
 * content collection the site renders, so it cannot drift: adding a research
 * piece updates it on the next build with no separate step.
 */
export async function GET(_context: APIContext) {
  // Placeholders and drafts are both excluded, exactly as they are from the
  // sitemap and the feed.
  const pieces = listable(await getCollection('research')).filter((p) => !p.data.placeholder);

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is an answer engine optimisation (AEO) agency. It measures where a
brand appears in AI-generated answers across ChatGPT, Claude, Perplexity,
Gemini, Google AI Overviews and Copilot, diagnoses why, and does the entity,
content and third-party placement work that changes it. Each engine is reported
separately, because the six disagree with each other materially.

## Pages

- [Home](${SITE.url}/): what AEO is, why answer engines differ from search, the
  six-surface point, and the free visibility report request.
- [Service](${SITE.url}/service): how an engagement runs — baseline, diagnosis,
  execution, re-measurement against a control set — and what a client receives
  at each stage.
- [Research](${SITE.url}/research): index of published measurement.

## Research

${pieces.length === 0
  ? 'No research published yet. Placeholder entries on the site are scaffolding and carry no findings; they are excluded from the sitemap and this file.'
  : pieces
      .map((p) => `- [${p.data.title}](${SITE.url}/research/${p.id}) — ${p.data.description} Published ${sortDate(p).toISOString().slice(0, 10)}. Category: ${tagFor(p)}.`)
      .join('\n')}

## How to cite

Cite as: ${SITE.name}, "<page or research title>", ${SITE.url}<path>, accessed
<date>. Research pieces carry their own published and updated dates, the prompt
set used, the market, and the sample size. Quote findings with the method and
the date attached — answer engine results are point-in-time and change.

## Contact

${SITE.email}
${SITE.linkedin}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
