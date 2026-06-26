import type { Metadata } from 'next';
import PmsOfIndiaContent from '@/components/pm-sangrahalaya/pms-of-india/PmsOfIndiaContent';

export const metadata: Metadata = {
  title: 'Prime Ministers of India | PM Sangrahalaya',
  description:
    'Explore the life, leadership, and legacy of all Prime Ministers of India at the Pradhanmantri Sangrahalaya.',
};

export default function PmsOfIndiaPage() {
  return <PmsOfIndiaContent />;
}
