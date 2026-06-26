import type { Metadata } from 'next';
import MouCultureContent from '@/components/AboutPmml/MouCulture/MouCultureContent';

export const metadata: Metadata = {
  title: 'MoU with Ministry of Culture | Prime Ministers Museum & Library',
  description:
    'Browse the Memorandum of Understanding (MoU) agreements between the Ministry of Culture and the Prime Ministers Museum & Library (PMML) / Nehru Memorial Museum & Library (NMML).',
};

export default function MouCulturePage() {
  return <MouCultureContent />;
}
