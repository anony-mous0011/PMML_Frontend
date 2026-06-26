import type { Metadata } from 'next';
import PmmlSocietyContent from '@/components/AboutPmml/PmmlSociety/PmmlSocietyContent';

export const metadata: Metadata = {
  title: 'PMML Society | Prime Ministers Museum & Library',
  description:
    'Learn about the Prime Ministers Museum and Library Society — its origins from the 1929 Teen Murti campus, its transformation into a premier cultural and research institution, and its role in preserving India\'s democratic heritage.',
};

export default function PmmlSocietyPage() {
  return <PmmlSocietyContent />;
}
