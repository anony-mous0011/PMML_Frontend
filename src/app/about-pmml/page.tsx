import type { Metadata } from 'next';
import AboutPmmlContent from '@/components/AboutPmml/About/AboutPmmlContent';

export const metadata: Metadata = {
  title: 'About PMML | Prime Ministers Museum & Library',
  description:
    'Learn about the Prime Ministers Museum and Library — its history, attractions, and research programs.',
};

export default function AboutPmmlPage() {
  return <AboutPmmlContent />;
}

