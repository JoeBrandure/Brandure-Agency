/**
 * NO ANONYMISED BUSINESS NAME MAY COME BACK.
 *
 * The research pieces and the guides that quote them named about sixty real
 * Dubai businesses — the clinics, law firms, hotels, manufacturers,
 * universities, dealers, SaaS companies and Shopping merchants our September
 * test ranked. They were replaced with category labels on 2026-11-13. The
 * names reached the site through a dozen different doors: body copy, table
 * cells, FAQ answers that become FAQPage JSON-LD, image alt text, hero alt,
 * meta and OG descriptions, the /research and llms.txt summaries built from
 * front matter, and two image filenames. One edit reinstating any of them,
 * anywhere, undoes the lot.
 *
 * HASHES, NOT NAMES. A checklist of the real names would publish, in this
 * repo, exactly the mapping the change exists to keep out of it. So the list
 * below is SHA-256 of each normalised name and nothing else. The check
 * normalises the built output the same way, shingles it into runs of one to
 * four words, and hashes those — so it finds a name without ever holding one.
 * Add a name with `node scripts/check-anonymised.mjs --hash "Some Business"`;
 * the mapping itself lives outside the repo.
 *
 *   node scripts/check-anonymised.mjs
 *
 * Exits non-zero if any hash matches.
 */
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, basename } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const DIST = join(ROOT, 'dist');

/* Lowercase, strip everything that is not a letter or digit, collapse runs of
   space. "Al Tamimi & Company" and "AL TAMIMI and COMPANY" land on the same
   string; so do "Nazm.ae" and "nazmae". */
const norm = (s) =>
  s
    .normalize('NFD')
    /* Fold the accents BEFORE stripping punctuation. Without this "Meliá"
       loses its last letter to the [^a-z0-9] pass and stops matching the
       unaccented spelling of the same hotel — which is exactly how a name
       walks back onto the site past a check that looks like it is working. */
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&(amp|nbsp|#39|quot|rsquo|lsquo);/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
const h = (s) => createHash('sha256').update(norm(s)).digest('hex').slice(0, 16);

if (process.argv[2] === '--hash') {
  for (const name of process.argv.slice(3)) console.log(`  '${h(name)}', // ${name.length} chars`);
  process.exit(0);
}

/* SHA-256 (first 16 hex) of each anonymised business name, normalised as
   above. Order is meaningless and deliberately not the label order. */
const BANNED = new Set([
  '964c049ea886362a', 'f89b902047939ecf', 'd198954d72229dad', 'cd2172b345ac6699',
  '2032b7d52e254d12', '6d3f762f4938195b', '8032e987a3e6fb22', '8fa71dc911b87d6f',
  '90de6401a48776f9', '1497e0a37657d441', '3529a7e90e4bbcbd', '440462e64d37f90a',
  '8aa939cb38a2b8be', '983838b14e447221', '5be9614cf3e94395', '297fdd3d50a4935c',
  '6c2ccb917ec119da', 'f2f7deeed425f352', '5c604edc2cae0d2e', '6b7849894d8df3b3',
  '8f91b2cbafa4a87d', '844f603900b4de67', '01121368628dd17c', 'a46788cd6f7c6632',
  '502b0d947a0a3ae4', 'f672a44ea531093c', 'f0bd217d91d42215', 'be6215417af42f49',
  '5d8ec2446ed3d2d3', 'da7b7014e4243b1e', '5c0a10c7161caf89', 'fe3465f344422666',
  'a0b0e0e7a31a1785', '3b98f79408dd2863', '18ae50939102605c', 'fe70bba9c4d0962c',
  '771a200dc570c42d', 'b2e29df6498cb430', 'cd26b013b1cb8f72', '37e83de2253a2c25',
  'efba345238c58b99', 'cf759b200ad84ff6', 'c651704a2f4a4c70', 'f29a5edeb0f5d64e',
  '96c787f651151316', '6e0cdc43dd27d8e5', 'f1ffd60d533e8d7c', '1d58c67cc27ee15d',
  '9c6dfd58dbbe164c', '7d2241f644828344', '69e96ff106197d7b', '2f2e6ebdac12a4b8',
  '2a04f8a97044ad47', '04dac3f78711eabe', 'a4475781245110fe', '42c546b2f7601bba',
  '7685626489ebca45', '8b651d9ed6ca98a7', 'b7f4e7a2dbc87d3b', 'eb4a2c8952367a32',
  'e41ce0ede370109d', 'acb2cfe9b3d93d4e', '753d643477660a1b', 'ab1070b19d06e52f',
  '53670beaa4ed03da', '27f433c06abc1cda', '7f24fba07e593806', 'f719f5e04f91a9ca',
  'c832b6f689316159', 'ee1978562a62b70f', '6688e8d72a4bb7e3', 'deee9fc50e24812c',
  '20e1c43adbaaeb43', 'e084c18870a0a4b6', '8ed3b855dc0d3c2c', '59360471a9daafc7',
  '887fdbd515452582', 'ac182598fab79546', '0e2ddf48fd91a2fe', '53b68af947105e93',
  '1bd636153a768a0e', '075d8aabf4446f9a', 'f2d6a6894a26cecf', '765191bad10e98b6',
  '460b4ca375515682',
]);

/* Pages the anonymisation deliberately does not cover: the agency comparison
   guides name competitor agencies, and one of those names is also one of the
   anonymised SaaS companies. Scanning them would fail on a name that is
   allowed to be there. */
const SKIP = [
  '/guides/aeo-agencies-uae',
  '/guides/aeo-agencies-uk',
  '/guides/aeo-cost-uae',
  '/guides/aeo-cost-uk',
];

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

let failures = 0;
const fail = (msg) => {
  console.log(`  FAIL  ${msg}`);
  failures += 1;
};

console.log('\nAnonymised business names');

const files = walk(DIST);
const TEXT = /\.(html|txt|xml|json|csv)$/;

/* --- 1. filenames, including every image --- */
for (const f of files) {
  const words = norm(basename(f)).split(' ');
  for (let n = 1; n <= 4; n += 1) {
    for (let i = 0; i + n <= words.length; i += 1) {
      if (BANNED.has(h(words.slice(i, i + n).join(' ')))) {
        fail(`${relative(DIST, f)}: the filename contains an anonymised business name`);
      }
    }
  }
}

/* --- 2. text output: HTML (body, alt text, meta and JSON-LD alike), llms.txt,
       the sitemap and the feed --- */
let scanned = 0;
for (const f of files.filter((x) => TEXT.test(x))) {
  const route = '/' + relative(DIST, f).replace(/\.html$/, '').replace(/\/?index$/, '');
  if (SKIP.some((s) => route === s)) continue;
  scanned += 1;

  const words = norm(readFileSync(f, 'utf8')).split(' ');
  const seen = new Set();
  for (let n = 1; n <= 4; n += 1) {
    for (let i = 0; i + n <= words.length; i += 1) {
      const key = h(words.slice(i, i + n).join(' '));
      if (BANNED.has(key) && !seen.has(key)) {
        seen.add(key);
        fail(`${relative(DIST, f)}: an anonymised business name is back in the output`);
      }
    }
  }
}

if (!failures) console.log(`  ok    ${scanned} files and ${files.length} filenames, no anonymised name present`);
console.log(failures ? `\nFAIL — ${failures} problem(s)` : '\nPASS — no anonymised business name in the build');
process.exit(failures ? 1 : 0);
