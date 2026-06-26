import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MenuBar from '@/components/layout/MenuBar';
import HeroSection from '@/components/Home/HeroSection';
import JourneySection from '@/components/Home/JourneySection';
import Explore from '@/components/Home/Explore';
import WelcomeSection from '@/components/Home/WelcomeSection';
import ExperienceSection from '@/components/Home/ExperienceSection';
import LibrarySection from '@/components/Home/LibrarySection';
import ArchivesSection from '@/components/Home/ArchivesSection';
import CcsSection from '@/components/Home/CcsSection';
import PlanetariumSection from '@/components/Home/PlanetariumSection';
import GovernmentPortalsSection from '@/components/layout/GovernmentPortalsSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <MenuBar />
      <main id="main-content" className="w-full bg-gray-50 flex flex-col">
        <HeroSection />
        <div id="explore-section">
          <Explore />
        </div>
        <WelcomeSection />
        <JourneySection />
        <ExperienceSection />
        <LibrarySection />
        <ArchivesSection />
        <CcsSection />
        <PlanetariumSection />
        <GovernmentPortalsSection />
        <Footer />
      </main>
    </>
  );
}
