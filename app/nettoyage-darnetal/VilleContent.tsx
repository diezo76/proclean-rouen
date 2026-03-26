'use client';

import { getCityBySlug } from '@/data/cities';
import VilleTemplate from '@/components/templates/VilleTemplate';

const city = getCityBySlug('darnetal')!;

export default function VilleContent() {
  return <VilleTemplate city={city} />;
}
