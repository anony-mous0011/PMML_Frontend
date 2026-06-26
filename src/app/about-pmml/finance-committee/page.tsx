import type { Metadata } from 'next';
import FinanceCommitteeContent from '@/components/AboutPmml/FinanceCommittee/FinanceCommitteeContent';

export const metadata: Metadata = {
  title: 'Finance Committee | Prime Ministers Museum & Library',
  description:
    'Learn about the Finance Committee of the Prime Ministers Museum & Library — its members, leadership, and role in governing the financial administration.',
};

export default function FinanceCommitteePage() {
  return <FinanceCommitteeContent />;
}
