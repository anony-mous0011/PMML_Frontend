import type { Metadata } from 'next';
import PmSangrahalayaAboutContent from '@/components/pm-sangrahalaya/about/PmSangrahalayaAboutContent';

export const metadata: Metadata = {
  title: 'PM Sangrahalaya | Prime Ministers Museum & Library',
  description:
    'Explore the Pradhanmantri Sangrahalaya (Prime Ministers Museum) dedicated to the life and leadership contributions of all Prime Ministers of India.',
};

export default function PmSangrahalayaPage() {
  return <PmSangrahalayaAboutContent />;
}
