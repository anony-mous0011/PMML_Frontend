import type { Metadata } from 'next';
import LibraryLatestBooksContent from '@/components/library/latest-books/LibraryLatestBooksContent';

export const metadata: Metadata = {
  title: 'Latest Books | Library | Prime Ministers Museum & Library',
  description:
    'Browse the newest book arrivals, research monographs, and academic acquisitions at the Prime Ministers Museum & Library Library.',
};

export default function LibraryLatestBooksPage() {
  return <LibraryLatestBooksContent />;
}
