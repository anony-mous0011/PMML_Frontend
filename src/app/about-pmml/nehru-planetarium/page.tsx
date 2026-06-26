import type { Metadata } from 'next';
import NehruPlanetariumContent from '@/components/AboutPmml/NehruPlanetarium/NehruPlanetariumContent';

export const metadata: Metadata = {
  title: 'Nehru Planetarium | Prime Ministers Museum & Library',
  description:
    'Explore the cosmos and popularize space science at the Nehru Planetarium in Teen Murti House. Plan a visit, view current 2D/3D show timings, ticket details, and browse astronomy exhibits.',
};

export default function NehruPlanetariumPage() {
  return <NehruPlanetariumContent />;
}
