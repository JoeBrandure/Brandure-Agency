# Answer-engine marks

Drop official SVGs in here and they replace the drawn fallbacks with no code
change. `EngineMark.astro` reads this directory at build time and matches on
filename, so the file must be named for the slug in `src/data/engines.ts`:

    chatgpt.svg
    claude.svg
    perplexity.svg
    gemini.svg
    google.svg

`.png` works too — the lookup ignores the extension — but SVG is what these
marks are published as and what stays sharp in the table header at 18px.

## Why the directory is currently empty

Every vendor host that serves these marks is denied by this environment's
network policy (`403` on `CONNECT`, confirmed against the agent proxy status
endpoint), so the files could not be fetched during the build sessions. The
component draws approximations instead: a hexagonal knot for ChatGPT, a
radial burst for Claude, a seek glyph for Perplexity, a four-point star for
Gemini, a ringed G for Google.

They are approximations and are labelled as such in `src/data/engines.ts`. A
subtly wrong competitor logo on a professional site is worse than no logo, so
these should be replaced with the real files before the site is put in front
of a buyer.

## Licence note

These are third-party trade marks used to identify the engines being
measured. Nominative use in a comparison table is the ordinary case for that,
but take each vendor's brand guidelines as the authority: several require the
mark be used unmodified, at a minimum size, and with clear space around it,
and some prohibit recolouring. The chip in `EngineMark.astro` applies a tinted
background derived from the brand colour and no colour transform to the mark
itself, so a supplied SVG renders as published.
