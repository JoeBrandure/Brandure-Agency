# Logo files

Two of the supplied marks are drawn for dark backgrounds and cannot be shown
as they are on the site's light surface:

- `lurio.svg` — a single `fill="#fff7ed"`, so it is invisible on `#FCFBF8`.
- `viveonix.webp` — the wordmark is a white knockout with a thin black
  outline, and the "Web Systems" strapline is pure white with no outline at
  all. On a light surface the wordmark reads as hollow letters and the
  strapline disappears completely.

Light-background variants were generated from those originals:

| File | How it was made |
|---|---|
| `lurio-light.svg` | The six `fill` attributes changed from `#fff7ed` to `#14181F`. It is a monochrome wordmark, so a dark variant is the same artwork in the other tone. |
| `viveonix-light.png` | Every pixel above 200 max-channel **and** below 0.18 saturation — the neutral white parts — recoloured to `#14181F`. The coloured V is untouched because it is saturated. Then trimmed from its 3840×2160 canvas to the artwork's own bounding box and resized to 420px wide, which is still about five times the size it renders at. 600KB → 30KB. |

**Both are derived, not official.** If either brand publishes a real
light-background lockup, replace the file and delete this note for that row.

The originals stay in place: the "Trusted by" strip flattens every mark to a
single silhouette with `brightness(0)`, and in dark theme inverts it to white,
so it uses whichever file it finds by slug.
