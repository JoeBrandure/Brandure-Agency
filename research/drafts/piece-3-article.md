---
title: "Gemini isn't answering your question. It's routing you into Google."
slug: gemini-routes-into-google-feeds-dubai
piece: 3
status: draft
data_source: "claude_rerun-data-2026-09-10.md (September 2026 re-run: 44 cells, 4 surfaces, logged out, UAE geo)"
author: Joe Hickman, Founder, Brandure
researchDate: 2026-09-10
datePublished: SET_ON_PUBLISH
dateModified: SET_ON_PUBLISH
---

# Gemini isn't answering your question. It's routing you into Google.

By [Joe Hickman](/about), Founder, Brandure · Research conducted 10 September 2026 · Published [publish date]

Ask Gemini for the best boutique hotels in Dubai and you get Google Hotels back. We asked it signed out, from the UAE, and it returned the three properties Google Search puts at the top of its Hotels module: Meliá Desert Palm, Andaz Dubai The Palm and The Canvas Dubai MGallery. Same three hotels, same order in the module, same review counts. The nightly rates differed, because rates are live. The records underneath were the same.

That pattern ran through the whole test. Gemini switched between four different Google properties depending on the category, and in the three categories where it didn't, it cited nothing at all. The practical result for a Dubai business: before you publish anything for AI search, find out which Google feed owns your category, because on Gemini that feed is the answer.

This is the third of three pieces from our September test. [Piece 1](/research/dubai-companies-writing-the-sources-ai-quotes) looks at companies writing the articles AI quotes about them. [Piece 2](/research/ai-engines-disagree-best-in-dubai) measures how often the engines agree on who's best.

## What did we test?

We asked four surfaces the same question, "Best [category] in Dubai", across seven categories: law firms, B2B SaaS, aesthetic clinics, boutique hotels, industrial manufacturers, universities and car dealerships. The surfaces were ChatGPT, Perplexity, Gemini and Google Search. Every run was logged out, on the free tier, from a UAE location. That gave 44 answers in total, 11 per surface, with three repeat runs on clinics and manufacturers. Full conditions and limits are in the methodology section at the end.

## Which Google feed does Gemini use in each category?

| Category | What Gemini showed | Google property behind it | Runs where it appeared |
|---|---|---|---|
| Boutique hotels | Hotels module with live nightly rates and review counts | Google Hotels | 1 of 1 |
| Aesthetic clinics | Place cards with ratings and opening hours | Google Maps / Business Profile | 3 of 3 |
| Industrial manufacturers | Product cards with merchant names and AED prices | Google Shopping | 2 of 3 |
| Universities | A YouTube video card | YouTube | 1 of 1 |
| Law firms | Text only, zero citations | None visible | 1 of 1 |
| B2B SaaS | Text only, zero citations | None visible | 1 of 1 |
| Car dealerships | Text only, zero citations | None visible | 1 of 1 |

Four categories, four different Google properties. The other three got plain text with no sources at all.

### Hotels: the answer is the Hotels module

| Hotel | Google Search Hotels module | Gemini Hotels module |
|---|---|---|
| Meliá Desert Palm | 4.6 (2.6K reviews), AED 589 | 4.6 (2,587 reviews), AED 737 |
| Andaz Dubai The Palm | 4.6 (3K reviews), AED 320 | 4.6 (3,026 reviews), AED 492 |
| The Canvas Dubai MGallery | 4.4 (7.5K reviews), AED 212 | 4.4 (7,532 reviews), AED 359 |

Google rounds its review counts and Gemini doesn't, but they are the same records. Every hotel Gemini named had a matching Google Hotels listing with a live rate. Beach Walk Boutique Hotel, fifth in Gemini's list, also sat in Google's second hotel module, at the same AED 271 rate on both.

![Google Search Hotels module for "Best boutique hotels in Dubai", showing Meliá Desert Palm, Andaz Dubai The Palm and The Canvas Dubai MGallery with nightly rates](/images/research/04-google-hotels-module-rates.jpg)
*Google Search, signed out, UAE. The Hotels module sits at the top of the page.*

![Gemini's answer to "Best boutique hotels in Dubai", rendering the same three hotels as Google Hotels cards with review counts and rates](/images/research/08-gemini-hotels-google-hotels-cards.jpg)
*Gemini, signed out, UAE. Recaptured for publication: the card order and rates shifted from the logged run, the three properties and their review counts did not.*

What moves a hotel up that answer is its Google Hotels listing and its rate, not an article about it.

### Clinics: the answer is Google Business Profile

For aesthetic clinics, Gemini's answer was built from place cards: name, rating, category, opening hours and address. No editorial sources and no citations. It was also the most stable answer in the study. Hortman Clinics was first and The Nova Clinic second in all three runs.

### Manufacturers: product cards from Google Shopping

In two of three runs, Gemini added Google Shopping product cards to an answer about industrial manufacturers: three cards in the first run, eight in the third. The merchants were small local sellers with product feeds, including DANA (a water chiller at AED 11,000), ANBI Online, UaeGamer.com, shopURtool and bayanuae.com. None of them appeared in the text list above the cards, which named EGA, Ducab and Jubaili Bros.

![Gemini's answer to "Best industrial manufacturers in Dubai" with Google Shopping product cards showing UaeGamer.com stainless steel sink units and AED prices](/images/research/07-gemini-manufacturers-shopping-cards.jpg)
*Gemini, signed out, UAE. Merchant product cards inside a B2B manufacturer answer.*

Two of three runs is repeatable but not guaranteed, and we only tested one product-adjacent category. Treat this as an open door worth checking, not a proven channel.

### Universities: a YouTube card that also ranks on Google

Gemini surfaced a YouTube video card, "Top 10 Universities in Dubai for International Students" by R247 Success, 5.5K views. The same video ranks organically on Google's results page for the same query. So does uniRank, the source ChatGPT used for its universities answer. Two engines, one results page underneath.

## How much has Google's AI Overview grown in Dubai?

It tripled. In our August scan, an AI Overview appeared on 1 of the 7 queries. In September it appeared on 3 of 7, and it moved: it left hotels and landed on law firms, manufacturers and universities.

| Category | August | September |
|---|---|---|
| Law firms | No | Yes |
| Industrial manufacturers | No | Yes |
| Universities | No | Yes |
| Boutique hotels | Yes | No |
| B2B SaaS | No | No |
| Aesthetic clinics | No | No |
| Car dealerships | No | No |

The categories that gained one are the ones where people research before they buy. The ones without it are local or transactional, and there the local pack, the ads or the Hotels module fill the top of the page instead.

| Category | Named in the AI Overview | Sources it cited |
|---|---|---|
| Law firms | Al Tamimi & Company, Clyde & Co, Hadef & Partners | Legal 500 (×2) |
| Industrial manufacturers | Ducab, EGA, NAFFCO | Rotated between runs (see next section) |
| Universities | University of Birmingham Dubai, Canadian University Dubai | AECC Global, TopUniversities (QS), University of Birmingham's own site |

![Google AI Overview for "Best law firms in Dubai" naming Al Tamimi & Company, Clyde & Co and Hadef & Partners, with Legal 500 as the cited source](/images/research/02-google-lawfirms-ai-overview-legal500.jpg)
*Google Search, signed out, UAE. The AI Overview on law firms is grounded on Legal 500.*

Coverage is still moving. When we recaptured the B2B SaaS results for Piece 1, an AI Overview had appeared on that query too. We've kept the count at three because that is what the logged run recorded.

## Can you get cited in an AI Overview on purpose?

You can get into the pool. You can't pick the citation. We ran the manufacturer query three times. The AI Overview named the same three companies every time, and the organic results below it were identical every time. The sources it cited changed on every run.

| Run | Brands named | Sources cited |
|---|---|---|
| 1 | Ducab, EGA, NAFFCO | mazeed (+1), Invest in Dubai, Scribd |
| 2 | Ducab, EGA, NAFFCO | Peko.one, Invest in Dubai, Scribd |
| 3 | Ducab, EGA, NAFFCO | Peko.one, Jafza, Peko.one |

![Google results for "Best industrial manufacturers in Dubai": the AI Overview citing mazeed above the Places pack](/images/research/01-google-manufacturers-localpack-35-16-6.jpg)
*Google Search, signed out, UAE. AI Overview (top) citing mazeed, local pack below.*

The organic page is stable. The AI Overview draws its citation from a small group of eligible pages and rotates between them. mazeed is also Perplexity's main source for the same query, so one aggregator page was feeding two surfaces.

For a buyer, this is the useful part. Being one of the pages Google considers citable is winnable, and it's mostly ordinary search work. Being the cited source on a given day isn't something anyone controls. An agency promising you a specific AI Overview citation is promising something the data says doesn't hold still.

## What does ChatGPT read before it names a business?

Whatever authority exists in the category. Where there's a directory, ChatGPT uses the directory. Where there's trade press, it spreads across the trade press. Where there's neither, it ranks on ratings and review volume and cites nothing against individual businesses.

| Category | What grounded the answer | Businesses with their own citation | What moves the answer |
|---|---|---|---|
| Law firms | Legal 500, sole source | 8 of 8 | Directory standing |
| B2B SaaS | eChai Ventures, Analytics Insight, DXBStart | 8 of 8 | Earned trade coverage |
| Aesthetic clinics | Doctify, Practo, used for framing only | 0 of 17 across three runs | Ratings and review volume |

The format was the same throughout: text plus a comparison table. ChatGPT showed no map cards, no hotel module and no product cards in any category. It's a text-and-citation surface, which makes its sources the thing to study.

## Why do Perplexity and ChatGPT give different answers?

They read different kinds of source. Perplexity leaned on editorial coverage in almost every category: GRAZIA, Country & Town House, What's On, Upgraded Points, Manufacturing Digital, Legal 500. ChatGPT leaned on listings and directories: Bayut, Best in Hood, Doctify, Dubai Industrial City, dubicars.com.

Perplexity also shows two answers at once on local queries, a Places module and a written answer, and they can disagree completely. For boutique hotels, the Places module led with Rove La Mer Beach (4.9, 14,933 reviews), DAMAC Maison Cour Jardin and Palace Downtown. The written answer recommended XVA Art Hotel, La Ville Hotel & Suites, Mazmi Casa, Beach Walk and Al Seef Heritage Hotel. None of the hotels in one appeared in the other. The Places module follows review volume; the written answer follows editors.

[Piece 2](/research/ai-engines-disagree-best-in-dubai) measures how far apart the engines land as a result.

## What does this mean for a Dubai business?

Start with the feed, then the content. For most local businesses, the Google Business Profile is doing more AI work than the website.

Look at Dubai's industrial local pack. The top three listings in September were Shuaiba Industrial Company (35 reviews), NAZ Industries (16) and Johar Manufacturing Services (6). In August the same three showed 35, 15 and 7. The combined total was 57 on both dates. One listing gained a review and another lost one. Johar, with six reviews, also appeared in ChatGPT's manufacturer shortlist in two of three runs. That is how little it currently takes to be visible in this category.

| If your category looks like... | The engine answer is built from... | Where to start |
|---|---|---|
| Local service (clinics, trades, industrial) | Google Business Profile, ratings, reviews | Profile accuracy, categories and review volume |
| Hotels and stays | Google Hotels records and live rates | Hotels listing and rate parity |
| Products with a price | Google Shopping product cards (2 of 3 runs, one category tested) | A clean Merchant Center feed |
| Researched purchases (law, universities, B2B) | Directories, rankings and editorial coverage | Standing in the sources ChatGPT and AI Overviews cite |

Gemini reads Google's own properties, and ChatGPT and Perplexity keep citing pages that rank on Google. Search work still sits underneath all of it.

## Methodology

- **Prompt:** "Best [category] in Dubai", one prompt shape, English only.
- **Categories:** law firms, B2B SaaS, aesthetic clinics, boutique hotels, industrial manufacturers, universities, car dealerships.
- **Surfaces:** ChatGPT, Perplexity, Gemini, Google Search.
- **Conditions:** all four surfaces logged out, free or default tier, Google not signed in, location resolved to the United Arab Emirates. Every cell was run in a fresh session. The logged-out Gemini tier served Flash-Lite.
- **Volume:** 44 answers. Aesthetic clinics and industrial manufacturers were run three times on every surface (n=3). The other five categories were run once per surface (n=1), so their answers could differ on a repeat run.
- **Market:** Dubai only. We don't know whether these patterns hold in Abu Dhabi, Riyadh or anywhere else.
- **Date:** re-run logged 10 September 2026.
- **August comparisons:** the AI Overview coverage table and the local pack review counts compare against our earlier August scan. That scan ran under different sign-in conditions, so treat the direction of change as more reliable than the exact baseline.
- **What this doesn't cover:** signed-in or paid tiers, which can behave differently (signed-out Gemini returned no citations on non-local categories), other prompt phrasings, Arabic queries, and Claude and Copilot.
- **Screenshots:** recaptured after the logged run under the same conditions. AI answers can shift between runs, so every number in this article comes from the run log, and the screenshots illustrate the pattern.

## Frequently asked questions

### Does Gemini use Google's own data to recommend businesses?

In our test, yes, in four of seven categories. Signed out, Gemini used Google Hotels for hotels, Google Maps place cards for clinics, Google Shopping product cards for manufacturers in two of three runs, and a YouTube card for universities.

### Is Google's AI Overview common in Dubai searches?

It appeared on 3 of 7 "best in Dubai" queries in September, up from 1 of 7 in our August scan. It showed on law firms, manufacturers and universities, and not on SaaS, clinics, dealerships or hotels.

### Can a business choose which source Google's AI Overview cites?

No. Across three identical runs, the AI Overview named the same three manufacturers each time but cited a different set of sources on every run. Getting into the pool of citable pages is achievable; controlling which one is cited isn't.

### What does ChatGPT use to rank local businesses in Dubai?

It depends on the category. Law firms were grounded entirely on Legal 500, B2B SaaS on trade coverage such as eChai Ventures and DXBStart, and aesthetic clinics on ratings and review volume with no per-clinic citations.

## About the author

Joe Hickman is the founder of Brandure, a Dubai agency focused on answer engine optimisation: how businesses get named in ChatGPT, Gemini, Perplexity and Google's AI Overviews. He is also a Client Partner at Snapchat MENA and has a background in paid social across Meta, Google, TikTok and LinkedIn. [More about Joe](/about). Brandure's [free AI visibility report](/free-report) shows where a business currently appears across the engines.

---

**Check your own category in two minutes.** Open Gemini signed out and ask for the best [your category] in Dubai. If a Maps, Hotels, Shopping or YouTube block appears, that Google feed is where your visibility is decided, and it's the first thing to fix. If you want a second opinion on what you find, email [joe@brandure.io](mailto:joe@brandure.io) with the screenshot.

---

<!-- JSON-LD: Article -->
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Gemini isn't answering your question. It's routing you into Google.",
  "description": "A 44-answer test of ChatGPT, Perplexity, Gemini and Google Search in Dubai found Gemini routes answers into Google's own feeds, which feed depends on the category, and Google's AI Overview tripled its coverage.",
  "url": "https://brandure.io/research/gemini-routes-into-google-feeds-dubai",
  "mainEntityOfPage": "https://brandure.io/research/gemini-routes-into-google-feeds-dubai",
  "datePublished": "SET_ON_PUBLISH",
  "dateModified": "SET_ON_PUBLISH",
  "inLanguage": "en",
  "image": [
    "https://brandure.io/images/research/04-google-hotels-module-rates.jpg",
    "https://brandure.io/images/research/08-gemini-hotels-google-hotels-cards.jpg"
  ],
  "author": {
    "@type": "Person",
    "name": "Joe Hickman",
    "jobTitle": "Founder",
    "url": "https://brandure.io/about",
    "worksFor": { "@type": "Organization", "name": "Brandure", "url": "https://brandure.io" }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brandure",
    "url": "https://brandure.io"
  },
  "about": ["Answer engine optimisation", "Google Gemini", "Google AI Overviews", "Dubai"],
  "isPartOf": { "@type": "CreativeWorkSeries", "name": "Brandure Dubai AI search research, September 2026" }
}
```

<!-- JSON-LD: FAQPage -->
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Gemini use Google's own data to recommend businesses?",
      "acceptedAnswer": { "@type": "Answer", "text": "In our test, yes, in four of seven categories. Signed out, Gemini used Google Hotels for hotels, Google Maps place cards for clinics, Google Shopping product cards for manufacturers in two of three runs, and a YouTube card for universities." }
    },
    {
      "@type": "Question",
      "name": "Is Google's AI Overview common in Dubai searches?",
      "acceptedAnswer": { "@type": "Answer", "text": "It appeared on 3 of 7 'best in Dubai' queries in September, up from 1 of 7 in our August scan. It showed on law firms, manufacturers and universities, and not on SaaS, clinics, dealerships or hotels." }
    },
    {
      "@type": "Question",
      "name": "Can a business choose which source Google's AI Overview cites?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Across three identical runs, the AI Overview named the same three manufacturers each time but cited a different set of sources on every run. Getting into the pool of citable pages is achievable; controlling which one is cited isn't." }
    },
    {
      "@type": "Question",
      "name": "What does ChatGPT use to rank local businesses in Dubai?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on the category. Law firms were grounded entirely on Legal 500, B2B SaaS on trade coverage such as eChai Ventures and DXBStart, and aesthetic clinics on ratings and review volume with no per-clinic citations." }
    }
  ]
}
```

---

## Images

**Used inline (from project knowledge):** 04, 08, 07, 02, 01.

**Composites still to build:**
- 04 + 08 side by side (Google Hotels module vs Gemini hotel answer). This is the lead image.

**Captures still missing (optional, strengthen the piece):**
- Gemini universities answer showing the R247 Success YouTube card, and the same video in Google organic.
- Perplexity boutique hotels: Places module and written answer in one frame, showing zero overlap.

Screenshot 06 (ChatGPT manufacturers) is listed in the brief but not used here: its list differs from the logged runs and it adds nothing the ChatGPT table doesn't. It's used in Piece 2 instead.

## Open items

1. **Hotels proof point corrected from the brief.** The brief says "same three hotels, same order, same rates". The re-run's own numbers show different rates (Google AED 589 / 320 / 212 vs Gemini AED 737 / 492 / 359), and captures 04 and 08 differ in order and rate too. The draft claims same properties, same module order and same review counts, and explains the rates as live pricing. Don't restore "identical rates".
2. **Local pack arithmetic corrected.** The brief says the pack "moved three reviews net". 35/15/7 → 35/16/6 is net zero (57 both times), two listings changed by one review each. The draft says that.
3. **Clinics citation count changed from 0 of 11 to 0 of 17.** The brief counted runs 1–2 only; run 3 adds six more uncited entries.
4. **SaaS AI Overview conflict.** Capture 03 shows an AI Overview on the SaaS query; the logged run recorded none. The draft keeps 3 of 7 and discloses the recapture. Decide whether to re-log the Google cells before publishing, which would make it 4 of 7.
5. **August baseline caveat.** The AI Overview table and local-pack counts compare to the August scan, which was signed in. The brief allows both claims; the methodology flags the condition difference. Confirm you're comfortable publishing a signed-in vs signed-out comparison.
6. **Capture 02 shows a "Top rated" filter chip active.** Confirm it was auto-applied by Google and not clicked during capture.
7. **Placeholder URLs:** /about, /free-report, and the Piece 1 and 2 slugs. The free report is linked from the bio only, so the foot CTA stays distinct.
9. **Visible bio** uses the Snapchat role. Confirm you want it public on the Brandure site.
10. **Gaps (numbers not used because they don't trace to the re-run file):** none required for this piece.
