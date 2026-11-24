/**
 * Submit the site's URLs to IndexNow, and record what happened.
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
 * THE RESULT GOES IN THE DEPLOY, at /indexnow-status.json. The response code
 * used to exist only in the Netlify build log, which means the one fact worth
 * knowing — did the ping land — was behind a login and gone after the log
 * rotated. The file is written into the publish directory, so it ships with
 * the same deploy whose submission it describes and can be read with curl.
 * Nothing links to it and it is not in the sitemap; it is a status endpoint,
 * not a page.
 *
 * This never exits non-zero. A submission is a hint, and a failed hint is not
 * a reason to fail a deploy that has already succeeded.
 */
import { readFile, writeFile } from 'node:fs/promises';

const KEY = 'cc3db364dfbe4c21a99670ffd5e0758a';
const HOST = 'brandure.io';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const DIST = new URL('../dist/', import.meta.url);
const SITEMAP = new URL('sitemap-0.xml', DIST);
const STATUS = new URL('indexnow-status.json', DIST);

/** Write the status file. Its own failure is swallowed: the file is a
 *  convenience, and a deploy must not turn on whether it was writable. */
async function writeStatus(fields) {
  const body = {
    submitted_at: new Date().toISOString(),
    endpoint: ENDPOINT,
    host: HOST,
    deploy_id: process.env.DEPLOY_ID ?? null,
    commit: process.env.COMMIT_REF ?? null,
    ...fields,
  };
  try {
    await writeFile(STATUS, `${JSON.stringify(body, null, 2)}\n`, 'utf8');
    console.log(`indexnow: wrote /indexnow-status.json (${body.status})`);
  } catch (err) {
    console.log(`indexnow: could not write status file: ${err.message}`);
  }
  return body;
}

const xml = await readFile(SITEMAP, 'utf8');
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('indexnow: no URLs found in sitemap, skipping');
  await writeStatus({ url_count: 0, status: null, ok: false, note: 'empty sitemap' });
  process.exit(0);
}

/* The submission and the status file are one unit: every path out of here
   writes the file, including the throw, or /indexnow-status.json would go
   stale by silently keeping the last deploy's result. */
try {
  const res = await fetch(ENDPOINT, {
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
  const note = res.ok ? null : await res.text().catch(() => '');
  if (note) console.error('indexnow: body', note);
  await writeStatus({
    url_count: urlList.length,
    status: res.status,
    ok: res.ok,
    ...(note ? { note: note.slice(0, 200) } : {}),
  });
} catch (err) {
  console.error(`indexnow: request failed, ${err.message}`);
  await writeStatus({
    url_count: urlList.length,
    status: null,
    ok: false,
    note: err.message.slice(0, 200),
  });
}

process.exit(0); // never fail the deploy over a submission hint
