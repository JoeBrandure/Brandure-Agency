#!/usr/bin/env python3
"""
Build the research image set from the raw captures.

    python3 scripts/build-research-images.py

Reads  research/drafts/0*.jpg   (the eight September 2026 captures)
Writes site/public/images/research/
         0N-<name>.webp          each capture, max 1600px wide
         p3-hero-google-vs-gemini-hotels-r2.webp    04 + 08

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
# mazeed, Invest in Dubai, F6S, Wellfound, Bayut, Dubai Industrial City, ICD,
# Mr & Mrs Smith. Those are the finding. So are the ratings, review counts,
# star class, positions and nightly rates, which is why the boxes in 04, 07
# and 08 stop short of the price column and sit clear of the rating rows.
#
# SECOND PASS, 2026-11-14. The first pass blocked the names. It left the
# text around them, and a description identifies a business as surely as its
# name does — "one of the largest single-site aluminium smelting operations
# in the world" names exactly one company in Dubai, and so does a product
# title carrying a model number, or a review quote that can be pasted into a
# search box verbatim. So this pass also blocks, by capture:
#
#   01  phone numbers, street addresses and plus-codes, the AI Overview's
#       identifying clause, and every review quote under the listings
#   04  the per-hotel description line under each listing (the map carries
#       only area names, landmarks and price pins — checked, nothing to do)
#   06  the whole descriptive clause of each shortlist entry, the "Park"
#       fragments that were left stranded, and the closing paragraph's last
#       line, stopping short of the ICD chip
#   07  every product title, model number and description paragraph
#   08  the per-hotel description block under each card
#
# Capture 05 is not here because it is not published. Its evidence was the
# citation chip on every row carrying the company's own domain, repeated
# eight times; redacting those leaves a table that shows nothing, so the
# figure was removed from the article instead.
REDACTIONS = {
    "01": [
        (185, 24, 705, 50),      # AI Overview, first manufacturer, line 1
        (198, 46, 690, 68),      # ... its identifying clause, line 2
        (185, 94, 705, 148),     # AI Overview, second manufacturer
        (185, 255, 725, 428),    # the map, which labels businesses in the tile
        (185, 434, 400, 452),    # listing 1, name
        (185, 468, 522, 490),    # listing 1, plus-code, street address, phone
        (198, 498, 496, 524),    # listing 1, review quote
        (185, 548, 330, 568),    # listing 2, name
        (185, 584, 424, 606),    # listing 2, address and phone
        (198, 620, 548, 642),    # listing 2, review quote
        (182, 662, 500, 684),    # listing 3, name
        (185, 696, 428, 720),    # listing 3, plot number and phone
        (182, 735, 580, 757),    # listing 3, review quote
    ],
    "02": [(185, 212, 726, 440), (793, 278, 1010, 320), (793, 378, 1010, 420), (185, 565, 726, 625), (185, 678, 726, 759)],
    "03": [(185, 262, 726, 400), (793, 236, 1010, 282), (793, 320, 1010, 385), (185, 484, 726, 585), (185, 608, 726, 706)],
    "04": [
        (362, 206, 554, 230),    # listing 1, name (stops short of AED 589)
        (362, 275, 558, 297),    # listing 1, description
        (362, 334, 546, 356),    # listing 2, name (stops short of AED 320)
        (362, 395, 562, 423),    # listing 2, description
        (362, 456, 562, 478),    # listing 3, name (stops short of AED 212)
        (362, 499, 582, 522),    # listing 3, description
        (185, 700, 730, 756),    # organic snippet listing properties by name
    ],
    "06": [
        (634, 212, 1160, 258),   # entry 1, name and clause, lines 1-2
        (640, 258, 792, 280),    # ... line 3, stopping short of the Bayut chip
        (634, 284, 1160, 330),   # entry 2, including the stranded "Park"
        (634, 333, 1160, 378),   # entry 3
        (634, 382, 1160, 425),   # entry 4, including the stranded "Park."
        (634, 430, 1160, 497),   # entry 5
        (634, 501, 1160, 546),   # entry 6
        (622, 549, 1160, 615),   # closing paragraph, lines 1-3
        (622, 615, 714, 636),    # ... line 4, stopping short of the ICD chip
    ],
    "07": [
        (510, 58, 1092, 124),    # card 1, description paragraph (model number)
        (636, 172, 1052, 216),   # card 2, product title
        (634, 230, 780, 254),    # card 2, merchant label
        (510, 283, 1082, 352),   # card 2, description paragraph
        (575, 404, 1072, 447),   # card 3, product title
        (634, 462, 780, 484),    # card 3, merchant label
        (510, 524, 1070, 568),   # card 3, description paragraph
        (512, 622, 1100, 664),   # summary paragraph, naming two manufacturers
    ],
    "08": [
        (720, 62, 995, 86),      # card 1, name (stops short of AED 188)
        (722, 110, 945, 172),    # card 1, description
        (720, 272, 1000, 296),   # card 2, name (stops short of AED 749)
        (722, 320, 945, 378),    # card 2, description
        (720, 483, 1000, 507),   # card 3, name (stops short of AED 455)
        (722, 531, 945, 588),    # card 3, description
    ],
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
        "out": "p3-hero-google-vs-gemini-hotels-r2.webp",
        "left": ("04", "Google Search"),
        "right": ("08", "Gemini"),
        "caption": "The same three properties, with review counts matching to the unit \u2014 Hotel D 7.5K against "
                   "7,540, Hotel B 2.6K against 2,588, Hotel C 3K against 3,033. Order and nightly rates differ. "
                   "Property names are redacted.",
    },
]


# Published filenames. 03 was renamed because the old one carried a business
# name. The "-r2" files are the captures the second redaction pass changed:
# a new name so the old URL 404s rather than serving a stale, less-redacted
# image out of a CDN or a browser cache to anyone holding the link.
RENAME = {
    "03-google-saas-bayzat-organic-no1": "03-google-saas-organic-no1",
    "01-google-manufacturers-localpack-35-16-6": "01-google-manufacturers-localpack-35-16-6-r2",
    "04-google-hotels-module-rates": "04-google-hotels-module-rates-r2",
    "06-chatgpt-manufacturers-sme-fabricators": "06-chatgpt-manufacturers-sme-fabricators-r2",
    "07-gemini-manufacturers-shopping-cards": "07-gemini-manufacturers-shopping-cards-r2",
    "08-gemini-hotels-google-hotels-cards": "08-gemini-hotels-google-hotels-cards-r2",
}


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
    """Find the one converted capture with this number.

    It has to be exactly one. A rename leaves the superseded file in place
    until it is deleted, and a composite silently built from the stale half
    would publish the earlier, less-redacted image under a fresh name."""
    hits = sorted(OUT.glob(f"{prefix}-*.webp"))
    if not hits:
        sys.exit(f"Composite needs capture {prefix}, which was not converted.")
    if len(hits) > 1:
        sys.exit(f"Capture {prefix} matches {len(hits)} files: {', '.join(p.name for p in hits)}. "
                 f"Delete the superseded one before building, or the composite may use it.")
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
