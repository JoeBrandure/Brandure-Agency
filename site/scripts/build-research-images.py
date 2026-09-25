#!/usr/bin/env python3
"""
Build the research image set from the raw captures.

    python3 scripts/build-research-images.py

Reads  research/drafts/0*.jpg   (the eight September 2026 captures)
Writes site/public/images/research/
         0N-<name>.webp          each capture, max 1600px wide
         p1-hero-bayzat-google-vs-perplexity.webp   03 + 05
         p3-hero-google-vs-gemini-hotels.webp       04 + 08

Composites are side by side with a 12px gutter and a small label above each
half, exported as WebP at max 2000px wide. Labels and captions are set here
rather than in the article so the image carries its own attribution.

The Piece 2 hero is NOT built here. It is rendered from the article's own table
by scripts/p2-hero.py — there is no screenshot behind it.

The Piece 2 ChatGPT-vs-Perplexity manufacturer composite is deliberately absent:
only the ChatGPT capture exists, so that section stays text.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "research/drafts"
OUT = ROOT / "site/public/images/research"
FONTS = ROOT / "site/src/assets/fonts"

MAX_W, COMP_W, GUTTER = 1600, 2000, 12
INK, MUTED, SURFACE, BORDER = "#14181F", "#5C6673", "#FCFBF8", "#E4E1DA"

inter = lambda s: ImageFont.truetype(str(FONTS / "Inter-SemiBold.ttf"), s)
inter_r = lambda s: ImageFont.truetype(str(FONTS / "Inter-Regular.ttf"), s)

COMPOSITES = [
    {
        "out": "p1-hero-bayzat-google-vs-perplexity.webp",
        "left": ("03", "Google Search"),
        "right": ("05", "Perplexity"),
        "caption": "Bayzat's own listicle ranking first organically, and Perplexity citing that same page as its source.",
    },
    {
        "out": "p3-hero-google-vs-gemini-hotels.webp",
        "left": ("04", "Google Search"),
        "right": ("08", "Gemini"),
        "caption": "The same three properties, with review counts matching to the unit — Canvas 7.5K against 7,540, "
                   "Meliá 2.6K against 2,588, Andaz 3K against 3,033. Order and nightly rates differ.",
    },
]


def sources():
    found = sorted(SRC.glob("0*.jpg")) + sorted(SRC.glob("0*.jpeg"))
    if not found:
        sys.exit(f"No captures found in {SRC}. Put the eight 0N-*.jpg files there first.")
    return found


def convert(path: Path) -> Path:
    img = Image.open(path).convert("RGB")
    if img.width > MAX_W:
        img = img.resize((MAX_W, round(img.height * MAX_W / img.width)), Image.LANCZOS)
    dest = OUT / (path.stem + ".webp")
    img.save(dest, "WEBP", quality=88, method=6)
    print(f"  {path.name} -> {dest.name}  {img.width}x{img.height}")
    return dest


def by_prefix(prefix: str) -> Path:
    hits = [p for p in OUT.glob(f"{prefix}-*.webp")]
    if not hits:
        sys.exit(f"Composite needs capture {prefix}, which was not converted.")
    return hits[0]


def composite(spec):
    left, l_label = Image.open(by_prefix(spec["left"][0])), spec["left"][1]
    right, r_label = Image.open(by_prefix(spec["right"][0])), spec["right"][1]

    half = (COMP_W - GUTTER) // 2
    scale = lambda im: im.resize((half, round(im.height * half / im.width)), Image.LANCZOS)
    left, right = scale(left), scale(right)

    label_f, cap_f = inter(26), inter_r(24)
    label_h, cap_h, pad = 44, 70, 24
    body_h = max(left.height, right.height)
    H = pad + label_h + body_h + cap_h + pad

    canvas = Image.new("RGB", (COMP_W, H), SURFACE)
    d = ImageDraw.Draw(canvas)

    y = pad
    d.text((0, y), l_label, font=label_f, fill=MUTED)
    d.text((half + GUTTER, y), r_label, font=label_f, fill=MUTED)

    y += label_h
    canvas.paste(left, (0, y))
    canvas.paste(right, (half + GUTTER, y))
    for x0, im in ((0, left), (half + GUTTER, right)):
        d.rectangle([x0, y, x0 + im.width - 1, y + im.height - 1], outline=BORDER, width=1)

    d.text((0, y + body_h + 22), spec["caption"], font=cap_f, fill=MUTED)

    dest = OUT / spec["out"]
    canvas.save(dest, "WEBP", quality=88, method=6)
    print(f"  composite -> {dest.name}  {canvas.width}x{canvas.height}")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    print(f"Converting captures from {SRC}")
    for p in sources():
        convert(p)
    print("Building composites")
    for spec in COMPOSITES:
        composite(spec)
    print("Done. Now run: npm run build && node scripts/check-research.mjs")


if __name__ == "__main__":
    main()
