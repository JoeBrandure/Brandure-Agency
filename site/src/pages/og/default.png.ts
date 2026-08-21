import { renderOg } from '../../lib/og';
import type { APIContext } from 'astro';

export async function GET(_context: APIContext) {
  const png = renderOg({
    title: 'Your buyers are asking an AI. You are not in the answer.',
    kicker: 'brandure.io',
  });
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
