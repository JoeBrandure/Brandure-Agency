/**
 * SAMPLE case studies. Invented generic names, no real companies, no implied
 * client relationship. Layout scaffolding only — every one is replaced before
 * launch, and /work is noindex until then.
 */
export const CASES = [
  {
    slug: 'sample-legal-practice',
    name: 'A mid-size legal practice',
    sector: 'Professional services',
    art: 'panel' as const,
    summary: 'Named on one engine of six at baseline. Sample figures throughout.',
    baseline: '1 of 4 engines named the firm',
    after: '3 of 4 engines named the firm',
    control: 'Control set unchanged across the period',
  },
  {
    slug: 'sample-b2b-platform',
    name: 'A B2B scheduling platform',
    sector: 'B2B SaaS',
    art: 'table' as const,
    summary: 'Category definition unstable across engines. Sample figures throughout.',
    baseline: 'Cited in 2 of 12 tracked prompts',
    after: 'Cited in 7 of 12 tracked prompts',
    control: 'Control set moved by one prompt',
  },
  {
    slug: 'sample-aesthetic-clinic',
    name: 'An independent aesthetic clinic',
    sector: 'Health and aesthetics',
    art: 'mesh' as const,
    summary: 'No local incumbent on any surface. Sample figures throughout.',
    baseline: 'Absent from all six engines',
    after: 'Named on two engines',
    control: 'Control set unchanged',
  },
] as const;
