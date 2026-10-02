import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'ProClean',
  legalName: 'ProClean',
  slogan: 'Nettoyage de Pro pour les Pros',
  domain: 'societe-nettoyage-rouen.fr',
  url: 'https://societe-nettoyage-rouen.fr',
  ogImage: '/images/og.jpg',
  logo: '/images/logo.png',
  email: 'contact@proclean20.fr',
  phone: '07 49 13 06 83',
  phoneFormatted: '+33749130683',
  address: {
    street: '7 Rue Washington',
    postalCode: '76600',
    city: 'Le Havre',
    region: 'Normandie',
    country: 'FR',
  },
  siren: '937516003',
  siret: '93751600300012',
  naf: '81.21Z',
  // Source : api-adresse.data.gouv.fr (7 Rue Washington 76600 Le Havre, score 0,978)
  geo: { latitude: 49.501492, longitude: 0.140254 },
  // Fiche Google Business vérifiée le 02/10/2026 : ouvert 24h/24, 7j/7
  openingHours: { opens: '00:00', closes: '23:59' },
  sameAs: [
    'https://maps.google.com/?cid=8852710617108011228',
    'https://annuaire-entreprises.data.gouv.fr/entreprise/937516003',
  ],
  paymentMethods: ['Chèque', 'Virement bancaire', 'Espèces'],
  city: 'Rouen',
  department: 'Seine-Maritime',
  departmentCode: '76',
};
