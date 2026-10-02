import { siteConfig } from '@/data/siteConfig';
import { cities } from '@/data/cities';
import type { CityData } from '@/data/cities';
import type { FAQItem, PricingItem, ServiceDefinition, ServicePageContent } from '@/types';

// Règles et procédure de contrôle : docs/donnees-structurees.md

type SchemaNode = Record<string, unknown>;

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ParsedPrice {
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  unitText?: string;
}

export const BUSINESS_ID = `${siteConfig.url}/#business`;

const businessRef = { '@id': BUSINESS_ID };

const absoluteUrl = (path: string) => `${siteConfig.url}${path}`;

const city = (name: string) => ({ '@type': 'City', name });

const SERVED_CITIES = [
  siteConfig.city,
  ...cities.map((c) => c.name),
  siteConfig.address.city,
].map(city);

export function buildBusiness(): SchemaNode {
  return {
    // « CleaningService » n'existe pas dans schema.org (rejeté par validator.schema.org).
    '@type': ['LocalBusiness', 'Organization'],
    '@id': BUSINESS_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phoneFormatted,
    email: siteConfig.email,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'SIRET',
      value: siteConfig.siret,
    },
    sameAs: siteConfig.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneFormatted,
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    paymentAccepted: siteConfig.paymentMethods.join(', '),
    priceRange: '€€',
    areaServed: SERVED_CITIES,
  };
}

export function buildBreadcrumb(items: BreadcrumbItem[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildFAQ(items: FAQItem[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Lit « 115€ - 175€ », « 9€ - 14€/m² », « 1.400€ », « 35€ », « à partir de 28€/séance ».
// Renvoie null dès qu'il reste autre chose que des montants : on ne déclare jamais un prix deviné.
export function parsePrice(text: string): ParsedPrice | null {
  let rest = text.replace(/[  ]/g, ' ').trim();

  const startingFrom = /^à partir de\s+/i.test(rest);
  if (startingFrom) rest = rest.replace(/^à partir de\s+/i, '');

  let unitText: string | undefined;
  const unit = rest.match(/\/\s*([^\s/€\d][^/€]*)$/);
  if (unit && unit.index !== undefined) {
    unitText = unit[1].trim();
    rest = rest.slice(0, unit.index).trim();
  }

  const amount = /(\d{1,3}(?:[.\s]\d{3})+|\d+)(?:,(\d{1,2}))?\s*€/g;
  const values = Array.from(rest.matchAll(amount)).map((m) =>
    Number(m[1].replace(/[.\s]/g, '') + (m[2] ? `.${m[2]}` : '')),
  );
  const leftover = rest.replace(amount, '').replace(/[\s\-–—à]/g, '');

  if (values.length === 0 || values.length > 2 || leftover !== '') return null;

  const withUnit = unitText ? { unitText } : {};
  if (startingFrom) {
    return values.length === 1 ? { minPrice: values[0], ...withUnit } : null;
  }
  if (values.length === 1) return { price: values[0], ...withUnit };
  return { minPrice: Math.min(...values), maxPrice: Math.max(...values), ...withUnit };
}

function buildOffers(pricing: PricingItem[]): SchemaNode[] {
  return pricing.flatMap((item) => {
    const parsed = parsePrice(item.price);
    if (!parsed) return [];
    return [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.label },
        priceSpecification: {
          '@type': parsed.unitText ? 'UnitPriceSpecification' : 'PriceSpecification',
          priceCurrency: 'EUR',
          ...parsed,
        },
      },
    ];
  });
}

export function buildService(service: ServiceDefinition, content: ServicePageContent): SchemaNode {
  const url = absoluteUrl(`/${service.slug}`);
  const offers = buildOffers(content.pricing ?? []);

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: content.metaDescription,
    url,
    ...(service.heroImage ? { image: absoluteUrl(service.heroImage) } : {}),
    provider: businessRef,
    areaServed: SERVED_CITIES,
    ...(offers.length > 0
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Tarifs — ${service.title}`,
            itemListElement: offers,
          },
        }
      : {}),
  };
}

export function buildCityService(cityData: CityData): SchemaNode {
  const url = absoluteUrl(`/nettoyage-${cityData.slug}`);

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Nettoyage professionnel à ${cityData.name}`,
    url,
    provider: businessRef,
    areaServed: city(cityData.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services de nettoyage à ${cityData.name}`,
      itemListElement: cityData.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: absoluteUrl(s.href) },
      })),
    },
  };
}

export function cityPageNodes(cityData: CityData): SchemaNode[] {
  return [
    buildBusiness(),
    buildCityService(cityData),
    buildBreadcrumb([
      { label: 'Accueil', href: '/' },
      { label: `Nettoyage à ${cityData.name}`, href: `/nettoyage-${cityData.slug}` },
    ]),
    buildFAQ(cityData.faq),
  ];
}

export function buildGraph(nodes: SchemaNode[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
