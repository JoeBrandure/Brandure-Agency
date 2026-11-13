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

# ---------------------------------------------------------------- redaction
#
# EVERY BUSINESS NAME IS BLOCKED OUT. The captures are real SERPs and real
# engine answers, so the names of the businesses our test ranked are in the
# pixels. The articles were anonymised on 2026-11-13 and an image that still
# names a clinic or a law firm would undo that on the same page.
#
# Boxes are in SOURCE-CAPTURE coordinates and are applied before the resize,
# so the composites inherit them and nothing has to be redacted twice. They
# were located with tesseract and then every output was checked by eye —
# which is how the second merchant label in 07 and the faded summary naming
# two manufacturers underneath it were found, both of which OCR missed.
#
# What stays visible, on purpose: the engines and Google's own products, and
# the sources, directories and publishers the answers cite — Legal 500,
# mazeed, F6S, Wellfound, Bayut, Dubai Industrial City, ICD, Mr & Mrs Smith.
# Those are the finding. So are the ratings, review counts and nightly rates,
# which is why the boxes in 04 stop short of the price column.
#
# Capture 05 is not here because it is not published. Its evidence was the
# citation chip on every row carrying the company's own domain, repeated
# eight times; redacting those leaves a table that shows nothing, so the
# figure was removed from the article instead.
REDACTIONS = {
    "01": [(185, 24, 705, 50), (185, 94, 705, 148), (185, 255, 725, 428), (185, 434, 400, 452), (185, 548, 330, 568), (182, 662, 500, 684)],
    "02": [(185, 212, 726, 440), (793, 278, 1010, 320), (793, 378, 1010, 420), (185, 565, 726, 625), (185, 678, 726, 759)],
    "03": [(185, 262, 726, 400), (793, 236, 1010, 282), (793, 320, 1010, 385), (185, 484, 726, 585), (185, 608, 726, 706)],
    "04": [(362, 206, 554, 230), (362, 334, 546, 356), (362, 456, 562, 478), (185, 700, 730, 756)],
    "06": [(634, 208, 1165, 234), (634, 280, 1165, 304), (634, 329, 1165, 353), (634, 378, 1165, 402), (634, 427, 1165, 453), (634, 497, 1165, 521), (622, 546, 1165, 612)],
    "07": [(634, 230, 780, 254), (634, 462, 780, 484), (512, 622, 1100, 664)],
    "08": [(720, 62, 995, 86), (720, 272, 1000, 296), (720, 483, 920, 507)],
}


def redact(img, prefix):
    """Block out every business name in a capture, in the site's own ink."""
    boxes = REDACTIONS.get(prefix, [])
    if boxes:
        d = ImageDraw.Draw(img)
        for b in boxes:
            d.rectangle(b, fill=INK)
    return img, len(boxes)


# Captures that are converted but never published. See the note above.
SKIP = {"05"}

inter = lambda s: ImageFont.truetype(str(FONTS / "Inter-SemiBold.ttf"), s)
inter_r = lambda s: ImageFont.truetype(str(FONTS / "Inter-Regular.ttf"), s)

# The Piece 1 composite is gone. It paired 03 with 05, and 05 is no longer
# published: see the note above REDACTIONS. Piece 1 now uses the redacted 03
# as its hero, which is the half of that composite that survives anonymisation.
COMPOSITES = [
    {
        "out": "p3-hero-google-vs-gemini-hotels.webp",
        "left": ("04", "Google Search"),
        "right": ("08", "Gemini"),
        "caption": "The same three properties, with review counts matching to the unit \u2014 Hotel D 7.5K against "
                   "7,540, Hotel B 2.6K against 2,588, Hotel C 3K against 3,033. Order and nightly rates differ. "
                   "Property names are redacted.",
    },
]


# Published filenames that carried a business name.
RENAME = {"03-google-saas-bayzat-organic-no1": "03-google-saas-organic-no1"}


def sources():
    found = [p for p in sorted(SRC.glob("0*.jpg")) + sorted(SRC.glob("0*.jpeg"))
             if p.name[:2] not in SKIP]
    if not found:
        sys.exit(f"No captures found in {SRC}. Put the eight 0N-*.jpg files there first.")
    return found


def convert(path: Path) -> Path:
    img = Image.open(path).convert("RGB")
    img, n = redact(img, path.name[:2])
    if img.width > MAX_W:
        img = img.resize((MAX_W, round(img.height * MAX_W / img.width)), Image.LANCZOS)
    dest = OUT / (RENAME.get(path.stem, path.stem) + ".webp")
    img.save(dest, "WEBP", quality=88, method=6)
    print(f"  {path.name} -> {dest.name}  {img.width}x{img.height}  ({n} blocks)")
    return dest


def by_prefix(prefix: str) -> Path:
    hits = [p for p in OUT.glob(f"{prefix}-*.webp")]
    if not hits:
        sys.exit(f"Composite needs capture {prefix}, which was not converted.")
    return hits[0]


def wrap(draw, text, font, width):
    """Greedy wrap. The caption carries the evidence, so it must never be clipped."""
    words, lines, line = text.split(), [], ""
    for w in words:
        trial = f"{line} {w}".strip()
        if draw.textlength(trial, font=font) <= width:
            line = trial
        else:
            if line:
                lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines


def composite(spec):
    left, l_label = Image.open(by_prefix(spec["left"][0])), spec["left"][1]
    right, r_label = Image.open(by_prefix(spec["right"][0])), spec["right"][1]

    half = (COMP_W - GUTTER) // 2
    scale = lambda im: im.resize((half, round(im.height * half / im.width)), Image.LANCZOS)
    left, right = scale(left), scale(right)

    label_f, cap_f = inter(26), inter_r(24)
    label_h, pad, line_h = 44, 24, 34
    body_h = max(left.height, right.height)

    probe = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    cap_lines = wrap(probe, spec["caption"], cap_f, COMP_W)
    cap_h = 22 + line_h * len(cap_lines)
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

    cy = y + body_h + 22
    for ln in cap_lines:
        d.text((0, cy), ln, font=cap_f, fill=MUTED)
        cy += line_h

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
