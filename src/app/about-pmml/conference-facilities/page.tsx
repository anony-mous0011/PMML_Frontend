import type { Metadata } from 'next';
import ConferenceFacilitiesContent from '@/components/AboutPmml/ConferenceFacilities/ConferenceFacilitiesContent';

export const metadata: Metadata = {
  title: "Conference Facilities | Prime Ministers Museum & Library",
  description:
    "Auditorium & Seminar Room facilities available at Prime Ministers Museum & Library (PMML) for educational, governmental, and cultural organisations.",
};

export default function ConferenceFacilitiesPage() {
  return <ConferenceFacilitiesContent />;
}
