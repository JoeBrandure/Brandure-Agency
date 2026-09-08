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
  linkedin: 'https://www.linkedin.com/company/brandure',
  areaServed: ['AE', 'GB', 'US'],
  /* The Calendly event the booking confirmation embeds. Verified against the
     Calendly API on 2026-09-08: account joe@brandure.io, event "15 Minute
     Meeting", Google Meet, active. The 15 matches the copy on the page — an
     event of a different length would contradict what the visitor just read.
     Set to null to fall back to promising times by email; nothing else needs
     changing either way. */
  bookingUrl: 'https://calendly.com/joe-brandure/15min' as string | null,
  description:
    'Brandure is an answer engine optimisation agency. We show businesses where they stand inside AI answers on ChatGPT, Claude, Perplexity, Gemini, Google and Copilot, then do the work to get them named.',
} as const;

/** PostHog: organisation "Brandure Agency", EU region. phc_ keys are public
 *  by design — write-only, safe to ship in client HTML. */
export const POSTHOG = {
  key: 'phc_xBH3zTv58Wsjb65qEhQaBNyJtBpMxnq5kfdeMpoA9F2D',
  host: 'https://eu.i.posthog.com',
} as const;

/* Four items, not the six the reference layout carries. The two that would
   pad it out — /work and a separate pricing page — are invented case studies
   and unsettled numbers, and putting either in the primary nav would be
   asserting something the agency cannot yet back. */
export const NAV = [
  { href: '/service', label: 'Service' },
  { href: '/method', label: 'Method' },
  { href: '/research', label: 'Research' },
  { href: '/#pricing', label: 'Pricing' },
] as const;
