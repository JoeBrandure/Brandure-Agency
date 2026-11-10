import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

/**
 * One OG card per guide, the same way research pieces get one.
 *
 * Guides shared the single default card, which meant two things: every guide
 * looked identical when linked, and the Article schema had no image of its
 * own to name — Searchable's audit flagged the incomplete Article on the four
 * market guides, and `image` was the field missing. A card generated from the
 * guide's own title is the honest answer to both: it is the image the page
 * actually presents.
 *
 * The route mirrors src/pages/og/research/[slug].png.ts; the slug is the one
 * declared in front matter, so the image sits alongside the page it belongs
 * to at /og/guides/<slug>.png.
 */
export async function getStaticPaths() {
  const guides = await getCollection('guides');
  return guides.map((guide) => ({ params: { slug: guide.data.slug }, props: { guide } }));
}

export async function GET({ props }: any) {
  const { guide } = props;
  const png = renderOg({ title: guide.data.title, kicker: 'Guide · brandure.io' });
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
