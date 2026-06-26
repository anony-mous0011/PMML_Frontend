import type { Metadata } from 'next';
import LibraryAboutContent from '@/components/library/about/LibraryAboutContent';

export const metadata: Metadata = {
  title: 'Library | Prime Ministers Museum & Library',
  description:
    'Explore the Library of the Prime Ministers Museum and Library, one of the foremost research libraries in India for modern and contemporary Indian history.',
};

export default function LibraryPage() {
  return <LibraryAboutContent />;
}
