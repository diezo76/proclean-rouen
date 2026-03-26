import { generatePageMetadata } from '@/lib/seo';
import EntrepriseNettoyageContent from './EntrepriseNettoyageContent';

export const metadata = generatePageMetadata({
  title: 'Entreprise de nettoyage à Rouen | ProClean — Devis gratuit',
  description:
    'ProClean, entreprise de nettoyage à Rouen. Nettoyage pro pour particuliers et entreprises : bureaux, canapés, vitres, après travaux. Devis gratuit sous 24h.',
  path: '/entreprise-nettoyage-rouen',
});

export default function Page() {
  return <EntrepriseNettoyageContent />;
}
