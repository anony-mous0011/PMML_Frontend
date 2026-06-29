import type { Metadata } from 'next';
import HindiDivisionContent from '@/components/AboutPmml/HindiDivision/HindiDivisionContent';

export const metadata: Metadata = {
  title: 'Hindi Division | Prime Ministers Museum & Library',
  description:
    'Learn about the Hindi Division of the Prime Ministers Museum & Library — its functions, official language implementation, and translation services.',
};

export default function HindiDivisionPage() {
  return <HindiDivisionContent />;
}
