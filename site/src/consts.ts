export const SITE = {
  name: 'Brandure',
  legalName: 'Brandure',
  url: 'https://brandure.io',
  email: 'hello@brandure.io',
  linkedin: 'https://www.linkedin.com/company/brandure',
  areaServed: ['AE', 'GB', 'US'],
  description:
    'Brandure is an answer engine optimisation agency. We measure where a brand appears in AI-generated answers across ChatGPT, Claude, Gemini and Google, and do the work that changes it.',
} as const;

/** PostHog: organisation "Brandure Agency", EU region. phc_ keys are public
 *  by design — write-only, safe to ship in client HTML. */
export const POSTHOG = {
  key: 'phc_xBH3zTv58Wsjb65qEhQaBNyJtBpMxnq5kfdeMpoA9F2D',
  host: 'https://eu.i.posthog.com',
} as const;

export const NAV = [
  { href: '/service', label: 'Service' },
  { href: '/research', label: 'Research' },
] as const;
