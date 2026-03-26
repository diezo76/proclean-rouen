'use client';

import { getCityBySlug } from '@/data/cities';
import VilleTemplate from '@/components/templates/VilleTemplate';

const city = getCityBySlug('deville-les-rouen')!;

export default function VilleContent() {
  return <VilleTemplate city={city} />;
}
