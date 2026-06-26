import type { Metadata } from 'next';
import ArchivesAboutContent from '@/components/archives/about/ArchivesAboutContent';

export const metadata: Metadata = {
  title: 'Archives | Prime Ministers Museum & Library',
  description:
    'Explore the Archives of the Prime Ministers Museum and Library, one of the foremost repositories in India for private papers of eminent Indian personalities.',
};

export default function ArchivesPage() {
  return <ArchivesAboutContent />;
}
