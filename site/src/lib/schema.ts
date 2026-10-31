import { SITE } from '../consts';

/**
 * The single Service node, emitted on /, /service and /pricing.
 *
 * ONE DEFINITION, THREE PAGES. Before this there were two Service nodes with
 * different @ids — `/#service` on the home page and `/service#service` on
 * /service — describing the same service in different words. Two @ids is two
 * services to a consumer. This is the only definition; the pages import it.
 *
 * `hasOfferCatalog` is a bare reference to the catalog defined on /pricing,
 * not a copy of it. /service previously inlined its own anonymous OfferCatalog
 * full of anonymous Offers, which duplicated the priced ones on /pricing and
 * contradicted them (no prices, different descriptions). The Offer and
 * OfferCatalog nodes on /pricing are untouched and remain the only ones.
 *
 * areaServed is plain strings here rather than the Country objects used on
 * Organization, because that is what was specified. Worth knowing the two
 * shapes now differ: Organization says AE/GB/US, this says the two markets the
 * service is actually sold in.
 */
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/#service`,
  name: 'AI search optimisation (AEO)',
  serviceType: 'AI search optimisation',
  alternateName: [
    'Answer engine optimisation',
    'AEO',
    'Generative engine optimisation',
  ],
  description: SITE.description,
  provider: { '@id': `${SITE.url}/#organization` },
  areaServed: ['United Arab Emirates', 'United Kingdom'],
  hasOfferCatalog: { '@id': `${SITE.url}/pricing#catalog` },
} as const;

/** Bare reference to the above, for a WebPage's mainEntity. */
export const serviceRef = { '@id': `${SITE.url}/#service` } as const;

/**
 * SEO and web design as their own Service nodes.
 *
 * They are separate nodes rather than alternateNames on the AEO one because
 * they are separately buyable things a reader can ask an engine about — "does
 * Brandure do SEO" has to resolve to something. AI search stays first: AEO is
 * #service and these two support it, which is also the order the copy uses.
 *
 * Both point at the same OfferCatalog. There is one price list and website
 * work is sold as an add-on to a plan, not as its own product — see the FAQ on
 * /ai-ready-websites. Giving web design its own catalog would imply otherwise.
 */
export const seoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/#service-seo`,
  name: 'SEO',
  serviceType: 'Search engine optimisation',
  description:
    'Technical SEO at setup and ongoing SEO for your priority pages, included in every plan. Most of the work overlaps with AI search optimisation: crawlable pages, clear structure, schema, and content that answers real questions.',
  provider: { '@id': `${SITE.url}/#organization` },
  areaServed: ['United Arab Emirates', 'United Kingdom'],
  hasOfferCatalog: { '@id': `${SITE.url}/pricing#catalog` },
} as const;

export const webServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/#service-web`,
  name: 'AI-ready website design',
  serviceType: 'Website design and development',
  description:
    'Websites built so Google and AI assistants can read, trust and recommend your business, on WordPress, Shopify, Webflow or our own stack. Added to a monthly AI search and SEO plan rather than sold on its own.',
  provider: { '@id': `${SITE.url}/#organization` },
  areaServed: ['United Arab Emirates', 'United Kingdom'],
  url: `${SITE.url}/ai-ready-websites`,
  hasOfferCatalog: { '@id': `${SITE.url}/pricing#catalog` },
} as const;

/** All three, for the pages that describe the whole offer. */
export const allServiceSchemas = [serviceSchema, seoServiceSchema, webServiceSchema];
