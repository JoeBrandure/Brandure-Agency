---
title: "Gemini isn't answering your question. It's routing you into Google."
description: "A 44-answer Dubai test found Gemini routes its answers into Google's own feeds, which feed depends on the category, and AI Overviews covered four of seven."
summary: "A 44-answer test of ChatGPT, Perplexity, Gemini and Google Search in Dubai found Gemini routes answers into Google's own feeds, which feed depends on the category, and Google's AI Overview already covers four of seven categories."
piece: 3
researchDate: 2026-09-10
datePublished: 2026-09-25
dateModified: 2026-09-25
heroImage: /images/research/p3-hero-google-vs-gemini-hotels-r2.webp
heroAlt: "Side by side: Google Search's Hotels module and Gemini's answer for 'best boutique hotels in Dubai', showing the same three properties with matching review counts but a different order and different nightly rates"
draft: false
faq:
  - q: Does Gemini use Google's own data to recommend businesses?
    a: "In our test, yes, in four of seven categories. Signed out, Gemini used Google Hotels for hotels, Google Maps place cards for clinics, Google Shopping product cards for manufacturers in two of three runs, and a YouTube card for universities."
  - q: Is Google's AI Overview common in Dubai searches?
    a: "More common than it's given credit for. It appeared on 4 of 7 'best in Dubai' queries in September — law firms, B2B SaaS, industrial manufacturers and universities — and not on clinics, dealerships or hotels. Our clean August baseline showed the same four, so coverage held rather than grew."
  - q: Can a business choose which source Google's AI Overview cites?
    a: "No. Across three identical runs, the AI Overview named the same three manufacturers each time but cited a different set of sources on every run. Getting into the pool of citable pages is achievable; controlling which one is cited isn't."
  - q: What does ChatGPT use to rank local businesses in Dubai?
    a: "It depends on the category. Law firms were grounded entirely on Legal 500, B2B SaaS on trade coverage such as eChai Ventures and DXBStart, and aesthetic clinics on ratings and review volume with no per-clinic citations."
---

Ask Gemini for the best boutique hotels in Dubai and you get Google's own hotel inventory back. We asked it signed out, from the UAE, and it returned the three properties Google Search puts at the top of its Hotels module: Hotels B, C and D. Same ratings, same 5-star classification, and review counts matching to the unit. The order and the nightly rates differ, which tells you it is a separate query against the same inventory rather than a copy of the results page.

That pattern ran through the whole test. Gemini switched between four different Google properties depending on the category, and in the three categories where it didn't, it cited nothing at all. The practical result for a Dubai business: before you publish anything for AI search, find out which Google feed owns your category, because on Gemini that feed is the answer.

This is the third of three pieces from our September test. [Piece 1](/research/dubai-companies-writing-the-sources-ai-quotes) looks at companies writing the articles AI quotes about them. [Piece 2](/research/ai-engines-disagree-best-in-dubai) measures how often the engines agree on who's best.

## What did we test?

We are an [AEO agency in Dubai](/aeo-agency-dubai), and this is our own market. We asked four surfaces the same question, "Best [category] in Dubai", across seven categories: law firms, B2B SaaS, aesthetic clinics, boutique hotels, industrial manufacturers, universities and car dealerships. The surfaces were ChatGPT, Perplexity, Gemini and Google Search. Every run was logged out, on the free tier, from a UAE location. That gave 44 answers in total, 11 per surface, with three repeat runs on clinics and manufacturers. Full conditions and limits are in the methodology section at the end.

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

| Property | Google review count | Gemini review count | Rating |
|---|---|---|---|
| Hotel D | 7.5K | 7,540 | 4.4 |
| Hotel B | 2.6K | 2,588 | 4.6 |
| Hotel C | 3K | 3,033 | 4.6 |

Google rounds its review counts and Gemini gives the exact figure. Same three properties, same ratings, same 5-star classification, review counts matching to the unit.

**The order and the nightly rates differ.** Google returned Hotel B, then C, then D, at AED 589, 320 and 212, with dates and a "Top-rated" filter applied. Gemini returned Hotel D, then B, then C, at AED 188, 749 and 455, with no date context. So this is a separate query against the same inventory, not a mirror of the results-page module.

That distinction strengthens the finding rather than weakening it. Matching rates on a given date could be coincidence. Review counts matching to the unit across three properties cannot.

![Google Search Hotels module for "Best boutique hotels in Dubai", showing three properties with their names redacted and their nightly rates visible](/images/research/04-google-hotels-module-rates-r2.webp)
*Google Search, signed out, UAE. The Hotels module sits at the top of the page. Property names are redacted.*

![Gemini's answer to "Best boutique hotels in Dubai", rendering the same three hotels as Google Hotels cards with their names redacted and review counts and rates visible](/images/research/08-gemini-hotels-google-hotels-cards-r2.webp)
*Gemini, signed out, UAE. The order and the rates differ from Google's module; the properties, ratings and review counts do not. Property names are redacted.*

What moves a hotel up that answer is its Google Hotels listing and its rate, not an article about it.

### Clinics: the answer is Google Business Profile

For aesthetic clinics, Gemini's answer was built from place cards: name, rating, category, opening hours and address. No editorial sources and no citations. It was also the most stable answer in the study. Clinic K was first and Clinic L second in all three runs.

### Manufacturers: product cards from Google Shopping

In two of three runs, Gemini added Google Shopping product cards to an answer about industrial manufacturers: three cards in the first run, eight in the third. The merchants were small local sellers with product feeds: Merchant A (a water chiller at AED 11,000), and Merchants B, C, D and E. None of them appeared in the text list above the cards, which named Manufacturers A, B and J.

![Gemini's answer to "Best industrial manufacturers in Dubai" with Google Shopping product cards showing stainless steel sink units and AED prices, merchant names redacted](/images/research/07-gemini-manufacturers-shopping-cards-r2.webp)
*Gemini, signed out, UAE. Merchant product cards inside a B2B manufacturer answer. Merchant names are redacted.*

Two of three runs is repeatable but not guaranteed, and we only tested one product-adjacent category. Treat this as an open door worth checking, not a proven channel.

### Universities: a YouTube card that also ranks on Google

Gemini surfaced a YouTube video card, "Top 10 Universities in Dubai for International Students" by R247 Success, 5.5K views. The same video ranks organically on Google's results page for the same query. So does uniRank, the source ChatGPT used for its universities answer. Two engines, one results page underneath.

## How much has Google's AI Overview grown in Dubai?

It hasn't grown. It's already there, and that's the more useful finding. An AI Overview fired on 4 of our 7 queries in September, and on the same 4 of 7 in our clean August baseline five weeks earlier. Same four categories both times.

| Category | August, signed out | September |
|---|---|---|
| Law firms | Yes | Yes |
| B2B SaaS | Yes | Yes |
| Industrial manufacturers | Yes | Yes |
| Universities | Yes | Yes |
| Boutique hotels | No | No |
| Aesthetic clinics | No | No |
| Car dealerships | No | No |

The four with an AI Overview are the categories people research before they buy. The three without are local or transactional, and there the local pack, the ads or the Hotels module fill the top of the page instead.

One number we are not publishing, and why. Our first August scan recorded an AI Overview on 1 of 7 queries, boutique hotels alone. That scan ran on a signed-in profile. We re-ran those cells signed out on 17 August and got 4 of 7 — and hotels, the only category the signed-in scan found, had lost its AI Overview. We use the signed-out run as the baseline because it is the one that matches September's conditions. Comparing September against the signed-in figure would show coverage tripling in a month, which reads well and is an artefact of a sign-in change. Both runs are single samples, so we cannot separate personalisation from a platform change or from ordinary run-to-run variance.

| Category | Named in the AI Overview | Sources it cited |
|---|---|---|
| Law firms | Law firms A, C and B | Legal 500 (×2) |
| B2B SaaS | SaaS companies F, E and G | F6S, DXB Start, Wellfound |
| Industrial manufacturers | Manufacturers B, A and M | Rotated between runs (see next section) |
| Universities | University A, University B | AECC Global, TopUniversities (QS), University A's own site |

![Google AI Overview for "Best law firms in Dubai" naming three firms whose names are redacted, with Legal 500 as the cited source](/images/research/02-google-lawfirms-ai-overview-legal500.webp)
*Google Search, signed out, UAE. The AI Overview on law firms is grounded on Legal 500. Firm names are redacted.*

For a Dubai business in one of those four categories, the practical reading is that the AI Overview is not a thing arriving later this year. It was sitting above your organic result in August and it was still there in September.

## Can you get cited in an AI Overview on purpose?

You can get into the pool. You can't pick the citation. We ran the manufacturer query three times. The AI Overview named the same three companies every time, and the organic results below it were identical every time. The sources it cited changed on every run.

| Run | Brands named | Sources cited |
|---|---|---|
| 1 | Manufacturers B, A, M | mazeed (+1), Invest in Dubai, Scribd |
| 2 | Manufacturers B, A, M | Peko.one, Invest in Dubai, Scribd |
| 3 | Manufacturers B, A, M | Peko.one, Jafza, Peko.one |

![Google results for "Best industrial manufacturers in Dubai": the AI Overview citing mazeed above the Places pack, business names redacted](/images/research/01-google-manufacturers-localpack-35-16-6-r2.webp)
*Google Search, signed out, UAE. AI Overview (top) citing mazeed, local pack below. Business names are redacted.*

The organic page is stable. The AI Overview draws its citation from a small group of eligible pages and rotates between them. mazeed is also Perplexity's main source for the same query, so one aggregator page was feeding two surfaces.

Within a single day the names held and only the sources moved. Over five weeks the names moved too. B2B SaaS had an AI Overview in both August and September, and between them the list it led with turned over almost completely: SaaS companies D, E, H and I in August; SaaS companies F, E and G in September. One company out of four survived the month. In manufacturers over the same period, Manufacturers A and B held both times. Whether your category's AI Overview names a stable set or reshuffles it is worth knowing before anyone sells you a position in it.

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

Perplexity also shows two answers at once on local queries, a Places module and a written answer, and they can disagree completely. For boutique hotels, the Places module led with Hotel E (4.9, 14,933 reviews), Hotel F and Hotel G. The written answer recommended Hotels H, I, J, A and K. None of the hotels in one appeared in the other. The Places module follows review volume; the written answer follows editors.

[Piece 2](/research/ai-engines-disagree-best-in-dubai) measures how far apart the engines land as a result.

## What does this mean for a Dubai business?

Start with the feed, then the content. For most local businesses, the Google Business Profile is doing more AI work than the website.

Look at Dubai's industrial local pack. The top three listings in September were Manufacturer O, rated 4.5 on 35 reviews; Manufacturer P, 5.0 on 16; and Manufacturer G, 4.8 on 6. Manufacturer G, with six reviews, also appeared in ChatGPT's manufacturer shortlist in two of three runs. Six reviews is the whole of third place in an entire category's local pack. That is how little it currently takes to be visible here.

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
- **Conditions:** data collected 10 September 2026. Four surfaces, logged out, clean profile, geo verified to the United Arab Emirates, free or default model tier. Every cell was run in a fresh session. The logged-out Gemini tier served Flash-Lite.
- **Volume:** 44 answers. Aesthetic clinics and industrial manufacturers were run three times on every surface (n=3). The other five categories were run once per surface (n=1), so their answers could differ on a repeat run.
- **Market:** Dubai only. We don't know whether these patterns hold in Abu Dhabi, Riyadh or anywhere else.
- **August baseline:** the AI Overview coverage table compares September against our 17 August re-run, which was signed out on the same conditions. An earlier 13 August scan of the same queries ran on a signed-in profile and is not used as the baseline; the difference between the two, and why it matters, is set out in the AI Overview section. Both runs are single samples, so personalisation, a platform change and run-to-run variance cannot be separated. The local pack figures are September only — the interval against any August baseline could not be established, so no change is claimed.
- **What this doesn't cover:** signed-in or paid tiers, which can behave differently (signed-out Gemini returned no citations on non-local categories), other prompt phrasings, Arabic queries, and Claude and Copilot.
- **Screenshots:** recaptured after the logged run under the same conditions. AI answers can shift between runs, so every number in this article comes from the run log, and the screenshots illustrate the pattern.

---

**Check your own category in two minutes.** Open Gemini signed out and ask for the best [your category] in Dubai. If a Maps, Hotels, Shopping or YouTube block appears, that Google feed is where your visibility is decided, and it's the first thing to fix. If you want a second opinion on what you find, email [joe@brandure.io](mailto:joe@brandure.io) with the screenshot.
