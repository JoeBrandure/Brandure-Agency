"""
Piece 2 hero: ChatGPT's three runs of the Dubai aesthetic-clinics prompt.

Rendered from the table in the article body — no screenshot involved, and no
number that is not already in the piece. Site fonts (Manrope Bold for display,
Inter for text) and site tokens (--ink, --muted, --surface, --border, --cobalt).
"""
from PIL import Image, ImageDraw, ImageFont

F = "/home/user/Brandure-Agency/site/src/assets/fonts/"
manrope = lambda s: ImageFont.truetype(F + "Manrope-Bold.ttf", s)
inter   = lambda s: ImageFont.truetype(F + "Inter-Regular.ttf", s)
inter_s = lambda s: ImageFont.truetype(F + "Inter-SemiBold.ttf", s)

INK, MUTED, SURFACE, BORDER = "#14181F", "#5C6673", "#FCFBF8", "#E4E1DA"
SUNK, COBALT = "#F4F2EC", "#2F5BFF"

# ANONYMISED 2026-11-13, in step with the article's own table. This figure is
# drawn from text rather than captured, so the clinics are relabelled rather
# than blocked out — which keeps the finding legible, because the whole point
# is which label repeats and which do not.
ROWS = [
    ("1", "Clinic A", "Clinic A", "Clinic A"),
    ("2", "Clinic B", "Clinic G", "Clinic C"),
    ("3", "Clinic C", "Clinic B", "Clinic I"),
    ("4", "Clinic D", "Clinic D", "Clinic F"),
    ("5", "Clinic E", "Clinic H", "Clinic D"),
    ("6", "Clinic F", "—", "Clinic J"),
]
# Everything that appears in all three runs is emphasised; that is the finding.
EVERY_RUN = {"Clinic A", "Clinic D"}

W, PAD = 2000, 72
NUM_W = 78
COL_W = (W - PAD * 2 - NUM_W) // 3
ROW_H, HEAD_H = 104, 74

title_f, sub_f = manrope(56), inter(30)
head_f, cell_f, cellb_f, num_f = inter_s(26), inter(27), inter_s(27), manrope(30)

top = PAD + 70 + 46 + 40
H = top + HEAD_H + ROW_H * len(ROWS) + 58 + PAD

img = Image.new("RGB", (W, H), SURFACE)
d = ImageDraw.Draw(img)

d.text((PAD, PAD), "One prompt, three runs, minutes apart", font=title_f, fill=INK)
d.text((PAD, PAD + 70), 'ChatGPT · "Best aesthetic clinics in Dubai" · logged out, UAE, 10 September 2026',
       font=sub_f, fill=MUTED)

x0 = PAD
xs = [x0 + NUM_W + COL_W * i for i in range(3)]

d.rectangle([x0, top, W - PAD, top + HEAD_H], fill=SUNK)
d.text((x0 + 18, top + HEAD_H // 2 - 15), "#", font=head_f, fill=MUTED)
for i, label in enumerate(("Run 1", "Run 2", "Run 3")):
    d.text((xs[i] + 18, top + HEAD_H // 2 - 15), label, font=head_f, fill=MUTED)

def fit(text, font, width):
    if d.textlength(text, font=font) <= width:
        return text
    while text and d.textlength(text + "…", font=font) > width:
        text = text[:-1]
    return text + "…"

y = top + HEAD_H
for pos, *cells in ROWS:
    d.line([x0, y, W - PAD, y], fill=BORDER, width=1)
    d.text((x0 + 18, y + ROW_H // 2 - 20), pos, font=num_f, fill=MUTED)
    for i, c in enumerate(cells):
        every = c in EVERY_RUN
        d.text((xs[i] + 18, y + ROW_H // 2 - 18), fit(c, cellb_f if every else cell_f, COL_W - 40),
               font=cellb_f if every else cell_f, fill=COBALT if every else INK)
    y += ROW_H

d.line([x0, y, W - PAD, y], fill=BORDER, width=1)
d.text((x0, y + 22),
       "Clinic A first in every run. Clinic D the only other clinic in all three. Ten different clinics filled 17 slots.",
       font=inter(28), fill=MUTED)

out = "/home/user/Brandure-Agency/site/public/images/research/p2-hero-chatgpt-clinics-three-runs.webp"
img.save(out, "WEBP", quality=90, method=6)
print("wrote", out, img.size)
