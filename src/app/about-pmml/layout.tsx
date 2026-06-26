import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MenuBar from '@/components/layout/MenuBar';
import GovernmentPortalsSection from '@/components/layout/GovernmentPortalsSection';
import Footer from '@/components/layout/Footer';

export default function AboutPmmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Header />
      <MenuBar />
      <main id="main-content" className="w-full bg-gray-50 flex flex-col">
        {children}
        <GovernmentPortalsSection />
        <Footer />
      </main>
    </>
  );
}
