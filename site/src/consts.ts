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

  /* Organization sameAs. Exactly these five, in this order.
     https://clutch.co/profile/brandure — WITHOUT the "-0" — is a DIFFERENT
     COMPANY and must never appear here or anywhere else on the site. The
     correct profile is brandure-0. Equally, the only valid LinkedIn vanity is
     /company/brandureagency; /company/brandure is not ours. */
  sameAs: [
    'https://www.linkedin.com/company/brandureagency',
    'https://www.instagram.com/brandure.agency/',
    'https://clutch.co/profile/brandure-0',
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
  /* The Calendly event the booking confirmation embeds. Verified against the
     Calendly API on 2026-09-08: account joe@brandure.io, event "15 Minute
     Meeting", Google Meet, active. The 15 matches the copy on the page — an
     event of a different length would contradict what the visitor just read.
     Set to null to fall back to promising times by email; nothing else needs
     changing either way. */
  bookingUrl: 'https://calendly.com/joe-brandure/15min' as string | null,
  description:
    'Brandure is an AI search optimisation (AEO) agency for businesses in the UK and the UAE.',

  /* Reads as a correction, because it is one: the name gets mistaken for a
     branding studio, and this is the field that tells an engine otherwise. */
  disambiguatingDescription:
    'An AI search optimisation (AEO) agency. Not a branding, logo or design studio.',

  alternateName: ['Brandure AEO', 'Brandure AI search agency'],
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
  { href: '/service', label: 'Service' },
  { href: '/method', label: 'Method' },
  { href: '/research', label: 'Research' },
  { href: '/guides', label: 'Guides' },
  { href: '/pricing', label: 'Pricing' },
] as const;
