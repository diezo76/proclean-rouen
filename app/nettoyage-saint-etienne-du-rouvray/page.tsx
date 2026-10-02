import { generatePageMetadata } from '@/lib/seo';
import { getCityBySlug } from '@/data/cities';
import JsonLd from '@/components/schema/JsonLd';
import { cityPageNodes } from '@/lib/schema';
import VilleContent from './VilleContent';

export const metadata = generatePageMetadata({
  title: 'Nettoyage à Saint-Étienne-du-Rouvray | ProClean',
  description:
    'ProClean intervient à Saint-Étienne-du-Rouvray : canapés, bureaux, après travaux et plus. Devis gratuit en 24h. Appelez le 07 49 13 06 83.',
  path: '/nettoyage-saint-etienne-du-rouvray',
});

const city = getCityBySlug('saint-etienne-du-rouvray')!;

export default function Page() {
  return (
    <>
      <JsonLd nodes={cityPageNodes(city)} />
      <VilleContent />
    </>
  );
}
