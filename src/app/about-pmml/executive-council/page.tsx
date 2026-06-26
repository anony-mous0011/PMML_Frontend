import type { Metadata } from 'next';
import ExecutiveCouncilContent from '@/components/AboutPmml/ExecutiveCouncil/ExecutiveCouncilContent';

export const metadata: Metadata = {
  title: 'Executive Council | Prime Ministers Museum & Library',
  description:
    'Learn about the Executive Council of the Prime Ministers Museum & Library — its members, leadership, and role in governing the Teen Murti institution.',
};

export default function ExecutiveCouncilPage() {
  return <ExecutiveCouncilContent />;
}
