import { generatePageMetadata } from '@/lib/seo';
import VilleContent from './VilleContent';

export const metadata = generatePageMetadata({
  title: 'Nettoyage professionnel à Saint-Étienne-du-Rouvray | ProClean',
  description:
    'ProClean intervient à Saint-Étienne-du-Rouvray pour le nettoyage de canapés, bureaux, après travaux et plus. Devis gratuit en 24h. Appelez le 07 49 13 06 83.',
  path: '/nettoyage-saint-etienne-du-rouvray',
});

export default function Page() {
  return <VilleContent />;
}
