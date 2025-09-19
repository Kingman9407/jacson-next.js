import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const PortfolioCard = () => {
  const cards = [
    {
      id: 1,
      title: "Oceanfront Villa",
      type: "Luxury Estate",
      description: "A stunning blend of modern design and coastal elegance",
      tags: ["Luxury Home", "Coastal Retreat", "Modern Design"],
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Urban Loft",
      type: "Modern Living",
      description: "Contemporary urban space with industrial touches",
      tags: ["Urban Design", "Industrial", "Contemporary"],
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Mountain Villa",
      type: "Luxury Estate",
      description: "Serene mountain retreat with panoramic views",
      tags: ["Mountain View", "Retreat", "Natural Design"],
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "City Apartment",
      type: "Urban Design",
      description: "Minimalist apartment in the heart of the city",
      tags: ["Minimalist", "City Living", "Efficient"],
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center",
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [failedImages, setFailedImages] = useState<{ [key: number]: boolean }>({});

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // IntersectionObserver for portfolio section visibility
  useEffect(() => {
    if (!portfolioSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPortfolioVisible(entry.isIntersecting);
          if (!entry.isIntersecting) {
            setActiveCard(null);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(portfolioSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // IntersectionObserver for individual card sections
  useEffect(() => {
    if (!isPortfolioVisible) return;

    const observers: IntersectionObserver[] = [];
    
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && isPortfolioVisible) {
              setActiveCard(cards[index].id);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isPortfolioVisible, cards]);

  // GSAP animations for card expansion/collapse
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const id = cards[index].id;

      if (activeCard === id && isPortfolioVisible) {
        // Expand
        gsap.to(card, {
          flex: 3,
          duration: 0.7,
          ease: "power3.out"
        });

        if (contentRefs.current[index]) {
          gsap.fromTo(
            contentRefs.current[index],
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.6, ease: "power2.out", delay: 0.2 }
          );
        }
      } else {
        // Collapse
        gsap.to(card, {
          flex: 1,
          duration: 0.7,
          ease: "power3.inOut"
        });

        if (contentRefs.current[index]) {
          gsap.to(contentRefs.current[index], {
            autoAlpha: 0,
            duration: 0.1,
            ease: "power2.in"
          });
        }
      }
    });
  }, [activeCard, isPortfolioVisible, cards]);

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Fixed Cards Container - Only visible when portfolio section is in view */}
      <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl transition-all duration-700 pointer-events-none  !border-5 !border-teal-600 rounded-3xl overflow-hidden ${
  isPortfolioVisible && activeCard ? 'opacity-100 z-50' : 'opacity-0 -z-10 scale-95'
}`}>

        <div className="flex h-[70vh]  !divide-x-3 !divide-teal-600 " >
          {cards.map((cardItem, i) => (
        <div
  key={cardItem.id}
  ref={(el) => { cardRefs.current[i] = el; }}
  className={`relative overflow-visible  flex-1 pointer-events-auto ${
    i === 0 ? 'rounded-l-2xl' : i === cards.length - 1 ? 'rounded-r-xl' : ''
  }`}
  style={{
    boxShadow: activeCard === cardItem.id ? '0 20px 60px rgba(0,0,0,0.1)' : '0 5px 20px rgba(0,0,0,0.05)'
  }}

>

         <div className="absolute inset-0 bg-[#f5f5dc]  overflow-hidden"/>


              <div
                ref={(el) => { contentRefs.current[i] = el; }}
                className="relative h-full flex"
              >
                {/* Collapsed state */}
                {activeCard !== cardItem.id && (
                  <div className="w-full flex flex-col items-center justify-center p-6 text-black">
                    <div className="text-3xl font-bold mb-6">
                      {String(cardItem.id).padStart(2, "0")}
                    </div>
                    <div className="transform -rotate-90 origin-center whitespace-nowrap">
                      <h3 className="text-xl font-bold tracking-wider">
                        {cardItem.title}
                      </h3>
                    </div>
                    <div className="mt-6">
                      <span className="text-sm font-medium opacity-80 transform -rotate-90 origin-center whitespace-nowrap block">
                        {cardItem.type}
                      </span>
                    </div>
                  </div>
                )}

                {/* Expanded state */}
                {activeCard === cardItem.id && (
                  <div className="relative w-full h-full flex flex-row-reverse overflow-hidden">
                    {/* Left Column: Image + Info */}
                    <div className="flex-3 flex flex-col w-3/4 h-full">
                      <div className="w-full h-5/6">
                        {!failedImages[cardItem.id] ? (
                          <img
                            src={cardItem.image}
                            alt={cardItem.title}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(cardItem.id)}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-600">Image unavailable</p>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="w-full h-1/4 p-6 flex flex-col justify-center bg-white">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-2xl font-bold text-gray-800">
                            {String(cardItem.id).padStart(2, "0")}
                          </div>
                          <span className="text-sm font-medium text-gray-500">
                            {cardItem.type}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{cardItem.title}</h3>
                        <p className="text-base leading-relaxed text-gray-700">
                          {cardItem.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column - Tags */}
                    <div className="w-1/6  bg-teal-600 flex flex-col justify-center overflow-visible">
                    
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator - Only visible when portfolio is active */}
      {isPortfolioVisible && activeCard && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCard === cards[index].id 
                    ? 'bg-teal-600 w-8' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="h-[20vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Scroll-Activated Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Scroll down to explore each project
          </p>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Cards Section - This is what gets observed */}
      <div ref={portfolioSectionRef} className="min-h-[400vh]">
        {/* Individual card trigger sections */}
        {cards.map((card, sectionIndex) => (
          <div 
            key={`trigger-${card.id}`}
            ref={(el) => { sectionRefs.current[sectionIndex] = el; }}
            className="min-h-screen flex items-center justify-center"
          >
            {/* Optional: Add some background content or indicators */}
            <div className="text-center text-gray-400 opacity-50">
              <p className="text-sm">Section {sectionIndex + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer spacer */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-xl">End of Portfolio</p>
          <p className="text-sm mt-2">Scroll up to explore again</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;