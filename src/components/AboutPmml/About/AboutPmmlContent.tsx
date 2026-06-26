import HeroSection from '@/components/Home/HeroSection';
import PmmlTimeline from '@/components/AboutPmml/About/PmmlTimeline';
import PmmlAttractions from '@/components/AboutPmml/About/PmmlAttractions';

export default function AboutPmmlContent() {
  return (
    <div className="w-full">
      <HeroSection />
      <PmmlTimeline />
      <PmmlAttractions />
    </div>
  );
}
