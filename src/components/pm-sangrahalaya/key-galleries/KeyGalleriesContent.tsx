"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Gallery {
  id: string;
  title: string;
  menuLabel: string;
  description: string;
  image: string;
  building: 1 | 2;
}

const GALLERIES: Gallery[] = [
  // BUILDING 1
  {
    id: "nehru-gallery",
    title: "Nehru Gallery",
    menuLabel: "Nehru Gallery",
    description: "The Nehru Gallery presents a holistic view of a newly-independent India and the political developments that followed. It talks about the reorganisations of states, the Kashmir War 1947-48, the projects that Pandit Nehru called 'temples' of modern India, the first general elections, among others.",
    image: "/building 1/nehru gallery.jpg",
    building: 1
  },
  {
    id: "tryst-destiny",
    title: "Tryst with Destiny",
    menuLabel: "Tryst with Destiny",
    description: "Experience the iconic, historical speech 'Tryst with Destiny' delivered by Jawaharlal Nehru on the eve of India's independence, welcoming the birth of a free nation.",
    image: "/building 1/tryst of destiny.jpg",
    building: 1
  },
  {
    id: "india-china-war",
    title: "India China War",
    menuLabel: "India China War",
    description: "A comprehensive archival exhibit documenting the events, maps, military strategies, and national response during the 1962 conflict.",
    image: "/building 1/india-china war.jpg",
    building: 1
  },
  {
    id: "toshakhana-zone",
    title: "Toshakhana Zone",
    menuLabel: "Toshakhana Zone",
    description: "Explore the collection of precious gifts, artistic crafts, and ceremonial treasures presented to India's Prime Ministers during their official visits abroad.",
    image: "/building 1/toshakhana.jpg",
    building: 1
  },
  {
    id: "reception-1",
    title: "Reception",
    menuLabel: "Reception",
    description: "The welcoming foyer of Building I, providing visitor navigation, interactive digital directories, and ticket scanning facilities.",
    image: "/building 1/reception.jpg",
    building: 1
  },
  {
    id: "audio-guide-1",
    title: "Audio Guide Room",
    menuLabel: "Audio Guide Room",
    description: "Collect your interactive audio guides equipped with multi-lingual narrations to enrich your walkthrough of the historical museum.",
    image: "/building 1/audio guide room.jpg",
    building: 1
  },
  {
    id: "welcome-area",
    title: "Welcome Area",
    menuLabel: "Welcome Area",
    description: "The initial exhibition area introducing visitors to the rich history and democratic heritage of India.",
    image: "/building 1/welcome area.jpg",
    building: 1
  },
  {
    id: "early-life-journey",
    title: "Early Life & Political Journey till 1946",
    menuLabel: "Early Life & Political Journey",
    description: "Traces the early childhood, academic years, and rise of Jawaharlal Nehru within the Indian National Congress leading up to independence.",
    image: "/building 1/early life and political journey till 1946.jpg",
    building: 1
  },
  {
    id: "making-constitution",
    title: "Making of Indian Constitution",
    menuLabel: "Making of Constitution",
    description: "Relive the intellectual debates and drafting sessions of the Constituent Assembly that established the framework of modern India.",
    image: "/building 1/making of indian constitution.jpg",
    building: 1
  },
  {
    id: "makers-constitution",
    title: "Makers of Indian Constitution",
    menuLabel: "Makers of Constitution",
    description: "A tribute to the visionary members of the Constituent Assembly who labored to frame a representative constitution for a diverse nation.",
    image: "/building 1/makers of indian constitution.jpg",
    building: 1
  },
  {
    id: "partition-1947",
    title: "Partition",
    menuLabel: "Partition",
    description: "A solemn display exploring the massive migration, human stories, and institutional challenges during the partition of 1947.",
    image: "/building 1/partition.jpg",
    building: 1
  },
  {
    id: "nehru-bedroom",
    title: "Jawaharlal Nehru's Bedroom",
    menuLabel: "Bedroom",
    description: "The preserved bedroom of the first Prime Minister of India, capturing the simple and elegant setting of his personal life.",
    image: "/building 1/bedroom.jpg",
    building: 1
  },
  {
    id: "nehru-sitting",
    title: "Jawaharlal Nehru's Sitting Room",
    menuLabel: "Sitting Room",
    description: "The historical room where Prime Minister Nehru engaged in discussions with international leaders, diplomats, and close associates.",
    image: "/building 1/sitting room.jpg",
    building: 1
  },
  {
    id: "nehru-study",
    title: "Jawaharlal Nehru's Study",
    menuLabel: "Study",
    description: "The private study room lined with books and writing tables where the Prime Minister drafted critical policies and letters.",
    image: "/building 1/study.jpg",
    building: 1
  },
  {
    id: "india-republic",
    title: "India Becomes Republic",
    menuLabel: "India Becomes Republic",
    description: "Commemorating 26th January 1950, when the Constitution of India came into effect and India transitioned to a sovereign democratic republic.",
    image: "/building 1/india becomes republic.jpg",
    building: 1
  },
  {
    id: "democratic-india-exhibit",
    title: "Democratic India",
    menuLabel: "Democratic India",
    description: "Celebrates the democratic traditions, general elections, and the strength of the voting system that empowers every Indian citizen.",
    image: "/building 1/democratic india.jpg",
    building: 1
  },
  {
    id: "constitutional-amendments-exhibit",
    title: "Constitutional Amendments",
    menuLabel: "Constitutional Amendments",
    description: "Displays the evolution of the Constitution through landmark amendments that addressed emerging socio-economic needs of the republic.",
    image: "/building 1/constitutional amendments.jpg",
    building: 1
  },
  {
    id: "parichay-room",
    title: "Parichay Room",
    menuLabel: "Parichay Room",
    description: "An introductory audio-visual installation that welcomes visitors to the galleries of Teen Murti House.",
    image: "/building 1/parichay.jpg",
    building: 1
  },

  // BUILDING 2
  {
    id: "reception-2",
    title: "Reception",
    menuLabel: "Reception",
    description: "The high-tech entrance of Building II, offering digital navigation, guides, and visitor interactive directories.",
    image: "/building 2/reception.jpg",
    building: 2
  },
  {
    id: "prastuti-conference-2",
    title: "Prastuti Conference Room",
    menuLabel: "Prastuti Conference Room",
    description: "A state-of-the-art orientation hall hosting multimedia briefings, press conferences, and educational seminars.",
    image: "/building 2/prastuti conference room.jpg",
    building: 2
  },
  {
    id: "lal-qila-prachir-2",
    title: "Lal Qile ki Prachir se",
    menuLabel: "Lal Qile ki Prachir se",
    description: "Experience the historic speeches delivered by India's Prime Ministers from the ramparts of the Red Fort in a 3D projection room.",
    image: "/building 2/lal qile ki prachir se.jpg",
    building: 2
  },
  {
    id: "freedom-unity-2",
    title: "Freedom and Unity",
    menuLabel: "Freedom and Unity",
    description: "Honors the integration of more than 560 princely states into the Indian Union, highlighting the monumental efforts of Sardar Vallabhbhai Patel.",
    image: "/building 2/freedom and unity.jpg",
    building: 2
  },
  {
    id: "nuclear-dream-2",
    title: "Nuclear Dream to Reality",
    menuLabel: "Nuclear Dream to Reality",
    description: "Details India's scientific achievements, mapping the path from atomic energy research to the historic Pokhran nuclear tests.",
    image: "/building 2/nuclear dream to reality.jpg",
    building: 2
  },
  {
    id: "bhavishya-jhalkiya-2",
    title: "Bhavishya ki Jhalkiya",
    menuLabel: "Bhavishya ki Jhalkiya",
    description: "Step inside the virtual reality capsule showcasing India's future infrastructure, digital tech, and green energy goals for 2047.",
    image: "/building 2/bhavishya ki jhalkiya.jpg",
    building: 2
  },
  {
    id: "anubhuti-2",
    title: "Anubhuti",
    menuLabel: "Anubhuti",
    description: "Engage with futuristic technologies like interactive AI chat with PMs, holographic strolls, and personalized calligraphy letters.",
    image: "/building 2/anubhuti.jpg",
    building: 2
  },
  {
    id: "pm-gallery-2",
    title: "Prime Ministers Gallery",
    menuLabel: "Prime Ministers Gallery",
    description: "The central exhibition hall of Building II dedicated to the lives, leadership styles, and enduring contributions of India's former Prime Ministers.",
    image: "/building 2/prime ministers gallery.jpg",
    building: 2
  },
  {
    id: "lal-bahadur-shastri-2",
    title: "Shri Lal Bahadur Shastri",
    menuLabel: "Shri Lal Bahadur Shastri",
    description: "Highlights the second PM's integrity, rural reforms, and defense leadership during the 1965 crisis with his slogan 'Jai Jawan Jai Kisan'.",
    image: "/building 2/shri lal bahadur shastri.jpg",
    building: 2
  },
  {
    id: "indira-gandhi-2",
    title: "Smt. Indira Gandhi",
    menuLabel: "Smt. Indira Gandhi",
    description: "Examines the decisive leadership of Indira Gandhi, focus on land reforms, national security, space exploration, and economic policies.",
    image: "/building 2/smt. indira gandhi.jpg",
    building: 2
  },
  {
    id: "morarji-desai-2",
    title: "Shri Morarji Desai",
    menuLabel: "Shri Morarji Desai",
    description: "Portrays the post-Emergency restoration of fundamental rights, economic stabilization, and initiatives for friendly relations with neighbors.",
    image: "/building 2/shri morarji desai.jpg",
    building: 2
  },
  {
    id: "charan-singh-2",
    title: "Chaudhary Charan Singh",
    menuLabel: "Chaudhary Charan Singh",
    description: "Focuses on the champion of Indian peasants and farmers, highlighting land reforms and agricultural empowerment.",
    image: "/building 2/chaudhary charan singh.jpg",
    building: 2
  },
  {
    id: "rajiv-gandhi-2",
    title: "Shri Rajiv Gandhi",
    menuLabel: "Shri Rajiv Gandhi",
    description: "Chronicles the modernization of India via the telecom revolution, youth empowerment, technology missions, and computerization.",
    image: "/building 2/shri rajiv gandhi.jpg",
    building: 2
  },
  {
    id: "vp-singh-2",
    title: "Shri VP Singh",
    menuLabel: "Shri VP Singh",
    description: "Highlights the implementation of the Mandal Commission report, focus on social justice, and administrative reforms.",
    image: "/building 2/shri vp singh.jpg",
    building: 2
  },
  {
    id: "chandra-shekhar-2",
    title: "Shri Chandra Shekhar",
    menuLabel: "Shri Chandra Shekhar",
    description: "Highlights his long political march (Padayatra) and his leadership during a critical period of economic transition.",
    image: "/building 2/shri chandra shekhar.jpg",
    building: 2
  },
  {
    id: "narasimha-rao-2",
    title: "Shri PV Narasimha Rao",
    menuLabel: "Shri PV Narasimha Rao",
    description: "Chronicles the landmark economic reforms of 1991, integration with the global economy, and the 'Look East' foreign policy.",
    image: "/building 2/shri pv narasimha rao.jpg",
    building: 2
  },
  {
    id: "atal-bihari-vajpayee-2",
    title: "Shri Atal Bihari Vajpayee",
    menuLabel: "Shri Atal Bihari Vajpayee",
    description: "Exhibits the Golden Quadrilateral highway network, key economic reforms, the Pokhran-II tests, and efforts towards global peace.",
    image: "/building 2/shri atal bihari vajpayee.jpg",
    building: 2
  },
  {
    id: "manmohan-singh-2",
    title: "Shri Manmohan Singh",
    menuLabel: "Shri Manmohan Singh",
    description: "Highlights a decade of high growth, landmark legislations like RTI, Right to Education, NREGA, and civil nuclear agreements.",
    image: "/building 2/shri manmohan singh.jpg",
    building: 2
  },
  {
    id: "deve-gowda-2",
    title: "Shri HD Deve Gowda",
    menuLabel: "Shri HD Deve Gowda",
    description: "Commemorates the coalition government's efforts in federal governance, regional development, and agricultural welfare.",
    image: "/building 2/shri hd deve gowda.jpg",
    building: 2
  },
  {
    id: "gujral-2",
    title: "Shri Inder Kumar Gujral",
    menuLabel: "Shri Inder Kumar Gujral",
    description: "Showcases the 'Gujral Doctrine' which reshaped India's friendly relations with neighboring South Asian nations.",
    image: "/building 2/shri inder kumar gujral.jpg",
    building: 2
  },
  {
    id: "gulzarilal-nanda-2",
    title: "Shri Gulzarilal Nanda",
    menuLabel: "Shri Gulzarilal Nanda",
    description: "Highlights the selfless service of the two-time interim Prime Minister and his dedication to labor welfare and planning.",
    image: "/building 2/shri gulzarilal nanda.jpg",
    building: 2
  }
];

export default function KeyGalleriesContent() {
  const [building, setBuilding] = useState<1 | 2>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState("nehru-gallery");

  // Drag-to-scroll and auto-scroll states
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  // Filter galleries by active building and search query
  const filteredGalleries = GALLERIES.filter(
    (g) =>
      g.building === building &&
      g.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sync activeId when building changes or search filters change
  useEffect(() => {
    if (filteredGalleries.length > 0) {
      const exists = filteredGalleries.some((g) => g.id === activeId);
      if (!exists) {
        setActiveId(filteredGalleries[0].id);
      }
    } else {
      setActiveId("");
    }
  }, [building, searchQuery, filteredGalleries, activeId]);

  // Smooth scroll active tab into view
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeElement = scrollContainerRef.current.querySelector(
      '[data-active="true"]'
    ) as HTMLElement;
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  const activeGallery = GALLERIES.find((g) => g.id === activeId) || null;
  const activeIndex = filteredGalleries.findIndex((g) => g.id === activeId);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handlePrev = () => {
    if (filteredGalleries.length === 0) return;
    const prevIndex =
      (activeIndex - 1 + filteredGalleries.length) % filteredGalleries.length;
    setActiveId(filteredGalleries[prevIndex].id);
  };

  const handleNext = () => {
    if (filteredGalleries.length === 0) return;
    const nextIndex = (activeIndex + 1) % filteredGalleries.length;
    setActiveId(filteredGalleries[nextIndex].id);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d9d9d9 transparent !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d9d9d9 !important;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1 !important;
        }
      `}</style>
      {/* ── Main Hero Section ── */}
       <div className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero-key gallery.jpg"
          alt="Key Galleries"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Title Bar (Grey Band) ── */}
      <div className="w-full bg-[#f4f4f4] py-8 text-[#052356] border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Key Galleries
            </h1>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-[#052356] font-medium pl-4 pr-10 py-2 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f37021] placeholder-slate-400 shadow-sm"
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-[#f37021] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── Content Layout ── */}
      <section className="w-full pt-8 pb-12 lg:pt-10 lg:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Building Selection Toggle Pills */}
          <div className="flex justify-start items-center gap-6 pb-0 border-b border-gray-200 mb-8">
            <button
              onClick={() => {
                setBuilding(1);
                setSearchQuery("");
              }}
              className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                building === 1
                  ? "bg-[#052356] text-[#f37021] shadow-md"
                  : "text-[#052356] hover:text-[#f37021]"
              }`}
            >
              BUILDING I
            </button>
            <button
              onClick={() => {
                setBuilding(2);
                setSearchQuery("");
              }}
              className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                building === 2
                  ? "bg-[#052356] text-[#f37021] shadow-md"
                  : "text-[#052356] hover:text-[#f37021]"
              }`}
            >
              BUILDING II
            </button>
          </div>

          {/* Main Grid: Left Sidebar and Right Display Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column: Vertical Sub-tabs Sidebar */}
            <div className="col-span-1 lg:col-span-4 w-full border-r lg:border-r border-slate-100 pr-0 lg:pr-6 select-none">
              {filteredGalleries.length > 0 ? (
                <div 
                  ref={scrollContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-auto gap-3 lg:gap-1 pb-3 lg:pb-0 scroll-smooth cursor-grab active:cursor-grabbing custom-scrollbar h-auto lg:h-[485px] max-h-[485px] pr-2"
                >
                  {filteredGalleries.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                      <button
                        key={item.id}
                        data-active={isActive ? "true" : "false"}
                        onClick={(e) => {
                          if (dragged) {
                            e.preventDefault();
                            return;
                          }
                          setActiveId(item.id);
                        }}
                        className={`relative flex items-center text-left w-full py-4 pl-3 lg:pl-10 pr-3 transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-[#f4f4f4] text-[#f37021] border-b-[3px] border-[#052356] rounded-lg animate-fade-in"
                            : "bg-transparent text-[#5c6f84] hover:text-[#f37021] border-b border-slate-100"
                        }`}
                      >
                        {isActive && (
                          <div className="flex lg:absolute lg:left-3 lg:top-1/2 lg:-translate-y-1/2 items-center justify-center w-5 h-5 mr-2 lg:mr-0 flex-shrink-0">
                            <svg 
                              className="w-5 h-5 text-[#052356] fill-[#052356] flex-shrink-0" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 3l1.9 2.5 3.1-.7.2 3.1 2.8 1.4-1.6 2.7 1.6 2.7-2.8 1.4-.2 3.1-3.1-.7L12 21l-1.9-2.5-3.1.7-.2-3.1-2.8-1.4 1.6-2.7-1.6-2.7 2.8-1.4.2-3.1 3.1.7z" />
                            </svg>
                          </div>
                        )}
                        <span className="text-xs sm:text-[13px] uppercase tracking-wider font-bold truncate">
                          {item.menuLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="py-2 text-slate-400 text-xs sm:text-sm font-medium">
                  No subcategories matches search query.
                </div>
              )}
            </div>

            {/* Right Column: Active Gallery Display Card */}
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start w-full">
              {activeGallery ? (
                <>
                  <div className="relative w-full flex items-center justify-between gap-4">
                    {/* Left Arrow Button */}
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-[#f37021] text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-colors cursor-pointer flex-shrink-0"
                      aria-label="Previous gallery"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Gallery Image Display */}
                    <div className="relative flex-1 aspect-[16/10] sm:aspect-[1.8/1] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                      <Image
                        src={activeGallery.image}
                        alt={activeGallery.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover"
                      />
                    </div>

                    {/* Right Arrow Button */}
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-[#f37021] text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-colors cursor-pointer flex-shrink-0"
                      aria-label="Next gallery"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* Gallery Title & Description below the image */}
                  <div className="w-full mt-8 text-left px-2">
                    <h2 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356] mb-3`}>
                      {activeGallery.title}
                    </h2>
                    <p className="text-[#052356]/85 text-xs sm:text-[14px] md:text-[15px] leading-relaxed text-justify font-medium">
                      {activeGallery.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full aspect-[16/10] rounded-3xl bg-slate-50 flex items-center justify-center border border-dashed border-slate-200">
                  <span className="text-slate-400 text-sm font-medium">Please refine your search query.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
