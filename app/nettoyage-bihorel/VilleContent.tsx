'use client';

import { getCityBySlug } from '@/data/cities';
import VilleTemplate from '@/components/templates/VilleTemplate';

const city = getCityBySlug('bihorel')!;

export default function VilleContent() {
  return <VilleTemplate city={city} />;
}
