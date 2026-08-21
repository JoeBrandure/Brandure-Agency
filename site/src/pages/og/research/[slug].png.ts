import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

export async function getStaticPaths() {
  const pieces = await getCollection('research');
  return pieces.map((piece) => ({ params: { slug: piece.id }, props: { piece } }));
}

export async function GET({ props }: any) {
  const { piece } = props;
  const png = renderOg({
    title: piece.data.title,
    kicker: `Research · ${piece.data.published.toISOString().slice(0, 10)}`,
  });
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
