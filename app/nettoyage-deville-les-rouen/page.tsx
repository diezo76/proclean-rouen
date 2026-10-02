import { generatePageMetadata } from '@/lib/seo';
import { getCityBySlug } from '@/data/cities';
import JsonLd from '@/components/schema/JsonLd';
import { cityPageNodes } from '@/lib/schema';
import VilleContent from './VilleContent';

export const metadata = generatePageMetadata({
  title: 'Nettoyage professionnel à Déville-lès-Rouen | ProClean',
  description:
    'ProClean intervient à Déville-lès-Rouen pour le nettoyage de canapés, bureaux, après travaux et plus. Devis gratuit en 24h. Appelez le 07 49 13 06 83.',
  path: '/nettoyage-deville-les-rouen',
});

const city = getCityBySlug('deville-les-rouen')!;

export default function Page() {
  return (
    <>
      <JsonLd nodes={cityPageNodes(city)} />
      <VilleContent />
    </>
  );
}
