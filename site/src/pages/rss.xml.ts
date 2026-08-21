import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const pieces = (await getCollection('research'))
    .filter((p) => !p.data.placeholder) // placeholders never reach the feed
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  return rss({
    title: `${SITE.name} research`,
    description: 'Original measurement of how AI answer engines treat specific categories and markets.',
    site: context.site ?? SITE.url,
    items: pieces.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: `/research/${p.id}`,
      categories: [p.data.vertical],
    })),
    customData: '<language>en-gb</language>',
  });
}
