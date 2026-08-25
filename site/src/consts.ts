export const SITE = {
  name: 'Brandure',
  legalName: 'Brandure',
  url: 'https://brandure.io',
  email: 'hello@brandure.io',
  linkedin: 'https://www.linkedin.com/company/brandure',
  areaServed: ['AE', 'GB', 'US'],
  description:
    'Brandure is an answer engine optimisation agency. We measure where a brand appears in AI-generated answers across ChatGPT, Perplexity, Gemini and Google, and do the work that changes it.',
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
