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
