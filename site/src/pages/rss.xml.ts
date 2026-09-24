import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { listable, sortDate, tagFor } from '../lib/research';
import { SITE } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // Placeholders never reach the feed, and nor do drafts.
  const pieces = listable(await getCollection('research')).filter((p) => !p.data.placeholder);

  return rss({
    title: `${SITE.name} research`,
    description: 'Original measurement of how AI answer engines treat specific categories and markets.',
    site: context.site ?? SITE.url,
    items: pieces.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: sortDate(p),
      link: `/research/${p.id}`,
      categories: [tagFor(p)],
    })),
    customData: '<language>en-gb</language>',
  });
}
