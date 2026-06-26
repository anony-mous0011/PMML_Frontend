import type { Metadata } from 'next';
import LibraryRareBooksContent from '@/components/library/rare-books/LibraryRareBooksContent';

export const metadata: Metadata = {
  title: 'Rare Books | Library | Prime Ministers Museum & Library',
  description:
    'Explore the list of rare books, historical manuscripts, and classical Indian texts in the collection of the Prime Ministers Museum & Library Library.',
};

export default function LibraryRareBooksPage() {
  return <LibraryRareBooksContent />;
}
