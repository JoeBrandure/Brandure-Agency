import { TERM_AND_EXIT } from './pricing';
/**
 * THE MARKET BAND. Four figures about what AI answers are doing to search,
 * three of them other people's and one of them ours.
 *
 * It replaces four client-result stats (92% more AI answer appearances and
 * so on). Those were Joe's own figures with no engine, date range or base
 * published beside them — the kind of number this agency sells against when
 * a competitor uses it. The client quotes stay; the unsourced percentages do
 * not.
 *
 * Every figure here carries its source as a link the reader can open and
 * check, which is the whole argument for using them instead.
 *
 * `n` is the value the count-up animates to and the value printed in the
 * HTML, so the final number is on the page with JS off. `decimals` exists
 * for 4.4x, which otherwise counts in whole numbers and lands on 4.
 */
export type Stat = {
  n: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source: string;
  href: string;
  /* Our own research is an internal link, so it opens in this tab. */
  external?: boolean;
};

export const MARKET_STATS: Stat[] = [
  {
    n: '47',
    suffix: '%',
    prefix: '',
    label: "fewer clicks on Google's normal results when an AI answer appears above them",
    source: 'Pew Research, Jul 2025',
    href: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
    external: true,
  },
  {
    n: '35',
    suffix: '%',
    label: "more clicks for brands that are named in Google's AI answer",
    source: 'Seer Interactive, Sep 2025',
    href: 'https://www.seerinteractive.com/news/inc-cites-aio-ctr-research',
    external: true,
  },
  {
    n: '4.4',
    decimals: 1,
    suffix: '×',
    label: 'the value of a visitor who finds you through AI search, compared with one from a Google search',
    source: 'Semrush, 2025',
    href: 'https://www.semrush.com/blog/ai-search-seo-traffic-study/',
    external: true,
  },
  {
    n: '93',
    suffix: '%',
    label: 'of businesses AI recommends are missing from at least one AI engine',
    source: 'Brandure research',
    href: '/research/ai-engines-disagree-best-in-dubai',
  },
];

/* The band's own words. Kept here so the home page and /aeo-agency-dubai
   cannot drift apart on them. */
export const MARKET_BAND = {
  heading: "Ranking on Google isn't enough any more.",
  cta: 'Check where you stand',
  ctaHref: '/#report',
  terms: TERM_AND_EXIT,
} as const;
