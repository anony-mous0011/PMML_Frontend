import type { Metadata } from 'next';
import AnnualReportsContent from '@/components/AboutPmml/AnnualReports/AnnualReportsContent';

export const metadata: Metadata = {
  title: 'Annual Reports | Prime Ministers Museum & Library',
  description:
    'Browse the Annual Reports of the Prime Ministers Museum & Library (PMML) from 2011 to 2024, published to maintain transparent governance and show progress updates.',
};

export default function AnnualReportsPage() {
  return <AnnualReportsContent />;
}
