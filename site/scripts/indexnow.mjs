/**
 * Submit the site's URLs to IndexNow.
 *
 *     node scripts/indexnow.mjs
 *
 * Reads the built sitemap rather than a hardcoded list, so a new research
 * piece is picked up by the next deploy with no edit here.
 *
 * Participants are Bing, Yandex, Seznam, Naver and Yep. Google does not take
 * part, so this changes nothing on Google. It exists because Bing had
 * discovered all nine brandure.io URLs and crawled none of them — with no
 * inbound links it had deprioritised crawl scheduling, and IndexNow bypasses
 * that queue. Being told is not the same as being indexed: Bing may still
 * decline. The other half of that fix is earning a real inbound link.
 *
 * The key is public by design. The protocol requires it to be served at the
 * site root so an engine can verify ownership of the host, which is what
 * keyLocation below points at. It is not a secret and must not be moved into
 * an env var.
 *
 * This never exits non-zero. A submission is a hint, and a failed hint is not
 * a reason to fail a deploy that has already succeeded.
 */
import { readFile } from 'node:fs/promises';

const KEY = 'cc3db364dfbe4c21a99670ffd5e0758a';
const HOST = 'brandure.io';
const SITEMAP = new URL('../dist/sitemap-0.xml', import.meta.url);

const xml = await readFile(SITEMAP, 'utf8');
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('indexnow: no URLs found in sitemap, skipping');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`indexnow: submitted ${urlList.length} URLs, HTTP ${res.status}`);
if (!res.ok) console.error('indexnow: body', await res.text().catch(() => ''));
process.exit(0); // never fail the deploy over a submission hint
