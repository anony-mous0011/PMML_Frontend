import type { Metadata } from 'next';
import ContactUsContent from '@/components/ContactUs/ContactUsContent';

export const metadata: Metadata = {
  title: 'Contact Us | Prime Ministers Museum & Library',
  description:
    'Find our location on the map, access phone and email contacts, or send general enquiries and feedback to the Prime Ministers Museum & Library (PMML).',
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
