import type { Metadata } from 'next';
import WhosWhoContent from '@/components/AboutPmml/WhosWho/WhosWhoContent';

export const metadata: Metadata = {
  title: "Who's Who | Prime Ministers Museum & Library",
  description:
    "Explore the official staff contact directory of the Prime Ministers Museum & Library (PMML) / Nehru Memorial Museum & Library (NMML).",
};

export default function WhosWhoPage() {
  return <WhosWhoContent />;
}
