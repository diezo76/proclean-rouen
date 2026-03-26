import { generatePageMetadata } from '@/lib/seo';
import VilleContent from './VilleContent';

export const metadata = generatePageMetadata({
  title: 'Nettoyage professionnel à Mont-Saint-Aignan | ProClean',
  description:
    'ProClean intervient à Mont-Saint-Aignan pour le nettoyage de canapés, bureaux, après travaux et plus. Devis gratuit en 24h. Appelez le 07 49 13 06 83.',
  path: '/nettoyage-mont-saint-aignan',
});

export default function Page() {
  return <VilleContent />;
}
