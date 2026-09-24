import { getCollection } from 'astro:content';
import { sortDate } from '../../../lib/research';
import { renderOg } from '../../../lib/og';

export async function getStaticPaths() {
  // No page is built for a draft, so no OG image is either.
  const pieces = (await getCollection('research')).filter((p) => !p.data.draft);
  return pieces.map((piece) => ({ params: { slug: piece.id }, props: { piece } }));
}

export async function GET({ props }: any) {
  const { piece } = props;
  const png = renderOg({
    title: piece.data.title,
    kicker: `Research · ${sortDate(piece).toISOString().slice(0, 10)}`,
  });
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
