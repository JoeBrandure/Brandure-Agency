/** The identity sentence. See the note on SITE.identityLine. */
const IDENTITY =
  'Brandure is an AI search optimisation (AEO) agency for UK and UAE brands, founded by Joe Hickman.';

export const SITE = {
  name: 'Brandure',
  legalName: 'Brandure',
  url: 'https://brandure.io',
  /* Changed from hello@ to joe@ on 2026-09-03 on instruction: joe@ is the
     mailbox that is actually read. This one constant feeds the footer link,
     the Organization schema in BaseLayout and llms.txt, so all three follow
     from here — none of those files was edited directly. */
  email: 'joe@brandure.io',
  /* Where Netlify form submissions are emailed. RECORDED HERE, NOT ENFORCED
     HERE. Netlify form notifications have no netlify.toml equivalent; they are
     set per-site in the Netlify UI, which is a Netlify write and therefore
     Joe's to make. This constant exists so the intended recipient is in the
     repo and the two forms cannot drift apart from it. Steps are in
     README.md under "Form notifications". */
  formsTo: 'joe@brandure.io',
  /* Corrected 2026-09-27: the vanity name is brandureagency, not brandure.
     Three consumers read this — the footer link, the Organization sameAs in
     BaseLayout, and llms.txt — so none of those files is edited directly. */
  linkedin: 'https://www.linkedin.com/company/brandureagency',

  /* Organization sameAs. Exactly these, in this order.
     https://clutch.co/profile/brandure — WITHOUT the "-0" — is a DIFFERENT
     COMPANY and must never appear here or anywhere else on the site. The
     correct profile is brandure-0. Equally, the only valid LinkedIn vanity is
     /company/brandureagency; /company/brandure is not ours.

     TODO — GOOGLE BUSINESS PROFILE. Asked for on 2026-11-12 and still not
     here: no URL for it exists in this repo, and inventing one would point
     the entity at a page that may not be ours, which is the failure this
     whole change is about. Add the real URL and the list is complete. */
  sameAs: [
    'https://www.linkedin.com/company/brandureagency',
    'https://www.instagram.com/brandure.agency/',
    'https://clutch.co/profile/brandure-0',
    'https://www.designrush.com/agency/search-engine-optimization',
    'https://www.sortlist.com/agency/brandure-3',
    'https://www.goodfirms.co/company/brandure',
  ],

  /* GA4. Loaded only after the visitor grants analytics consent — see
     src/components/Analytics.astro. */
  ga4: 'G-4S5251FSXH',

  /* The consent banner renders its privacy link only when this is set. Set
     2026-10-25, when src/pages/privacy.astro was added. */
  privacyHref: '/privacy' as string | null,

  /* AE and GB only. US was removed on 2026-10-25: the Service node names the
     two markets the work is actually sold in, and Organization claiming a
     third contradicted it on the same page. */
  areaServed: ['AE', 'GB'],

  /* The Dubai base. Added 2026-10-31 with /aeo-agency-dubai — a local landing
     page with no address or phone is the thing an engine cannot verify. */
  phone: '+971585081399',
  phoneDisplay: '+971 58 508 1399',
  address: {
    locality: 'Jumeirah Village Circle',
    region: 'Dubai',
    country: 'AE',
  },
  /* The Calendly event the booking confirmation embeds. Verified against the
     Calendly API on 2026-09-08: account joe@brandure.io, event "15 Minute
     Meeting", Google Meet, active. The 15 matches the copy on the page — an
     event of a different length would contradict what the visitor just read.
     Set to null to fall back to promising times by email; nothing else needs
     changing either way. */
  bookingUrl: 'https://calendly.com/joe-brandure/15min' as string | null,
  description:
    'Brandure is an AI search specialist agency: AI search optimisation (AEO) and SEO, with websites built for both. For businesses in the UK and the UAE.',

  /**
   * WHO WE ARE, IN ONE SENTENCE. Used as the Organization node's
   * disambiguatingDescription, as the footer line, as the "What is Brandure?"
   * answer and in llms.txt, so every one of them says the same thing.
   *
   * NOTHING HERE DENIES ANYTHING. Searchable Task 22 (12 November, 160
   * branded answers) found Google AI Overviews naming us first in 0 of 6 runs
   * on "What is Brandure?", with 39 of 55 of its answers carrying a
   * namesake's facts — and on "Brandure AEO agency" prompts we are named
   * first on every engine. So the gap is the bare name.
   *
   * The site used to answer that by naming the other companies and denying
   * them. Changed on instruction 2026-11-12 to say only what we are: a denial
   * puts their names on our pages, which is an association an engine would
   * otherwise have to make for itself. State the entity, repeat it
   * everywhere, and give the engines a cleaner answer to lift than the one
   * they currently have.
   */
  identityLine: IDENTITY,

  /** The Organization node's disambiguatingDescription: the same sentence, so
   *  the schema and the visible line cannot say different things. */
  disambiguatingDescription: IDENTITY,

  /* The Organization node's own description. Separate from SITE.description,
     which is the site's meta description and says more than a knowledge
     panel needs. */
  orgDescription:
    'AI search optimisation (AEO) agency, UK and UAE. Brandure (brandure.io) gets businesses named and cited in the answers ChatGPT, Google AI Overviews and Perplexity give their buyers. Founded by Joe Hickman.',

  logo: '/og/default.png',

  /* The UK half of "UK and the UAE". It was only ever in the /privacy copy,
     so the Organization node claimed areaServed GB with a Dubai address and
     nothing to tie it to. */
  addressUk: {
    locality: 'Staines-upon-Thames',
    region: 'Surrey',
    postalCode: 'TW18',
    country: 'GB',
  },

  /* "Brandure Agency" came off 2026-11-12. An alternateName tells an engine
     another string means this entity; that one is generic enough that several
     namesakes answer to it, so it was inviting the merge rather than
     preventing it. "Brandure AEO" is ours alone. */
  alternateName: ['Brandure AEO'],
} as const;

/** PostHog: organisation "Brandure Agency", EU region. phc_ keys are public
 *  by design — write-only, safe to ship in client HTML. */
export const POSTHOG = {
  key: 'phc_xBH3zTv58Wsjb65qEhQaBNyJtBpMxnq5kfdeMpoA9F2D',
  host: 'https://eu.i.posthog.com',
} as const;

/* Four items, not the six the reference layout carries. /work still stays out
   — those are invented case studies, and putting them in the primary nav would
   assert something the agency cannot back.

   Pricing moved from the home page anchor to its own page on 2026-10-21. The
   note here used to call the numbers unsettled; they are not, and have been
   published on the home page and /service for months. What was missing was an
   addressable URL — asked what Brandure costs, ChatGPT said the pricing was
   inaccessible, because a #fragment cannot be crawled or cited on its own. */
export const NAV = [
  /* Home added 2026-10-26 at Joe's request. The wordmark already links home,
     but plenty of visitors do not know that convention, and a visible Home
     item gives a reader deep in /research one obvious way back. */
  { href: '/', label: 'Home' },
  { href: '/service', label: 'Service' },
  /* Pricing sits next to Service from 2026-10-31. It is the page buyers go
     looking for, and it was last in a six-item row. */
  { href: '/pricing', label: 'Pricing' },
  { href: '/method', label: 'Method' },
  { href: '/research', label: 'Research' },
  { href: '/guides', label: 'Guides' },
] as const;
