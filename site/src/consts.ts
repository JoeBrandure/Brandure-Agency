/** Single source of truth for site-wide constants. */
export const SITE = {
  name: 'Brandure',
  legalName: 'Brandure',
  url: 'https://brandure.io',
  email: 'hello@brandure.io',
  linkedin: 'https://www.linkedin.com/company/brandure',
  description:
    'Brandure is an AEO agency. We measure where brands appear in AI-generated answers, and do the work that changes it.',
} as const;

export const NAV = [
  { href: '/service', label: 'Service' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
