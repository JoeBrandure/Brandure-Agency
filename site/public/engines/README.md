# Answer-engine marks

`EngineMark.astro` reads this directory at build time and matches on filename,
so a file must be named for the slug in `src/data/engines.ts`:

    chatgpt.svg
    claude.svg
    perplexity.svg
    gemini.svg
    google.svg

All five are present. Delete or rename one and the component falls back to a
drawn approximation of that mark rather than a broken image.

## Provenance

These are the official marks, not drawings. The vendors' own hosts are denied
by this environment's network policy (`403` on `CONNECT`, confirmed against the
agent proxy's status endpoint), but the npm registry is on that policy's
allowlist, so the files came from **`@lobehub/icons-static-svg` v1.94.0 (MIT)**:

| File here | Source file in the package |
|---|---|
| `chatgpt.svg` | `openai.svg` |
| `claude.svg` | `claude-color.svg` |
| `perplexity.svg` | `perplexity-color.svg` |
| `gemini.svg` | `gemini-color.svg` |
| `google.svg` | `google-color.svg` |

The only edit is a stripped `<title>` — the chip is `aria-hidden` and the engine
name sits beside it as text, so the title was a duplicate accessible name. Paths
and fills are untouched.

## They are inlined, not linked

The component reads the file and inlines the markup rather than pointing an
`<img>` at it. That is load-bearing for `chatgpt.svg`: OpenAI's mark is
monochrome and published as `fill="currentColor"`, which inside an `<img>`
resolves against the image's own document and renders black — invisible on a
dark chip. Inlined, it inherits the chip's colour and works in both themes.

Two consequences, both handled in `EngineMark.astro`:

- the file is read **once per build**, not once per instance — the prompt
  rotator renders this component 35 times per page;
- every `id` gets a per-instance suffix. `gemini.svg` carries gradient
  definitions referenced by id, and 14 copies of the same ids in one document
  is invalid HTML.

If you replace a file, keep it as an SVG whose fills are either hard-coded or
`currentColor`. A file with an embedded raster or an external reference will not
survive inlining.

## Licence note

These are third-party trade marks used to identify the engines being measured.
Nominative use in a comparison table is the ordinary case for that, but take
each vendor's brand guidelines as the authority: several require the mark be
used unmodified, at a minimum size, and with clear space around it, and some
prohibit recolouring. The chip applies a tinted background derived from the
brand colour and **no colour transform to the mark itself**, so each renders as
published.
