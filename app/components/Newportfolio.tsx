'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Import course images
import craftImg from '../assets/portfolio1.svg';
import cssAnimationImg from '../assets/css-animation-course.jpg';
import svgFiltersImg from '../assets/svg-filters-course.jpg';
import scrollAnimationImg from '../assets/scroll-animation-course.jpg';

interface CourseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: any; // Next.js StaticImageData type
}

const AnimatedHoverDisclosures = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [articleWidth, setArticleWidth] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement>(null);

  const courses: CourseItem[] = [
    {
      id: 'craft',
      title: 'The Craft',
      description:
        'Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-[18px] fill-none stroke-current stroke-2">
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      ),
      image: craftImg,
    },
    {
      id: 'css-animation',
      title: 'CSS Animation',
      description:
        'Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-[18px] fill-none stroke-current stroke-2">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 3v18" />
          <path d="M3 7.5h4" />
          <path d="M3 12h18" />
          <path d="M3 16.5h4" />
          <path d="M17 3v18" />
          <path d="M17 7.5h4" />
          <path d="M17 16.5h4" />
        </svg>
      ),
      image: cssAnimationImg,
    },
    {
      id: 'svg-filters',
      title: 'SVG Filters',
      description:
        'Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-[18px] fill-none stroke-current stroke-2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
      image: svgFiltersImg,
    },
    {
      id: 'scroll-animation',
      title: 'Scroll Animation',
      description:
        'Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-[18px] fill-none stroke-current stroke-2">
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
        </svg>
      ),
      image: scrollAnimationImg,
    },
  ];

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemInteraction = (index: number) => {
    if (index >= 0 && index < courses.length) {
      setActiveIndex(index);
    }
  };

  const updateArticleWidth = () => {
    if (itemsRef.current.length > 0) {
      const maxWidth = Math.max(...itemsRef.current.map((item) => item?.offsetWidth || 0));
      setArticleWidth(maxWidth);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;
      const stickyElement = stickyRef.current.parentElement;
      if (!stickyElement) return;
      const rect = stickyElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));
      setScrollProgress(progress);
      const cardIndex = Math.floor(progress * courses.length);
      const clampedIndex = Math.min(cardIndex, courses.length - 1);
      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, courses.length]);

  useEffect(() => {
    updateArticleWidth();
    const handleResize = () => updateArticleWidth();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= courses.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, courses.length]);

  const getGridCols = () => {
    return courses.map((_, i) => (i === activeIndex ? '10fr' : '1fr')).join(' ');
  };

  const getGridRows = () => {
    return courses.map((_, i) => (i === activeIndex ? '3fr' : '1fr')).join(' ');
  };

  return (
    <>
      <div className="relative h-[500vh]">
        <div
          ref={stickyRef}
          className="bg-gradient-to-br from-[#FAFAF5] from-70% to-[#DBFFFA] sticky top-0 z-50 transition-all duration-500 ease-out"
          style={{ minHeight: '100vh' }}
        >
          <div className="min-h-screen flex flex-col items-center justify-center gap-4 py-8 font-inter">
            {/* Header */}
            <div className="text-center mb-16 max-w-4xl px-8">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{ fontSize: 'clamp(22px, 4.25vw, 68px)' }}
              >
                the craft of ui
              </h1>
              <p className="max-w-[74ch] leading-6 opacity-80 text-balance">
                Unlock the art and science of interface development. This isn't just about pushing
                pixels or following documentation — it's about mastering the tools, understanding the
                nuances, and shaping experiences with intention.
              </p>
            </div>

            {/* Desktop Version */}
            {!isMobile && (
              <ul
                ref={listRef}
                className="list-none p-0 m-0 flex gap-2 w-full max-w-5xl px-8"
                style={{
                  height: 'clamp(300px, 70vh, 474px)',
                  gridTemplateColumns: getGridCols(),
                  display: 'grid',
                  transition: 'grid-template-columns 0.6s cubic-bezier(0, 0, 0.2, 1)',
                }}
                onMouseMove={(e) => {
                  const li = (e.target as HTMLElement).closest('li');
                  if (li) {
                    const index = Array.from(listRef.current?.children || []).indexOf(li);
                    if (index !== -1 && index !== activeIndex) {
                      handleItemInteraction(index);
                    }
                  }
                }}
                onClick={(e) => {
                  const li = (e.target as HTMLElement).closest('li');
                  if (li) {
                    const index = Array.from(listRef.current?.children || []).indexOf(li);
                    if (index !== -1) handleItemInteraction(index);
                  }
                }}
                onFocus={(e) => {
                  const li = (e.target as HTMLElement).closest('li');
                  if (li) {
                    const index = Array.from(listRef.current?.children || []).indexOf(li);
                    if (index !== -1) handleItemInteraction(index);
                  }
                }}
              >
                {courses.map((course, index) => (
                  <li
                    key={course.id}
                    ref={(el) => {
                      itemsRef.current[index] = el;
                    }}
                    className="relative overflow-hidden rounded-lg !border !border-teal-600 bg-white cursor-pointer font-inter"
                    style={{ minWidth: 'clamp(2rem, 8cqi, 120px)' }}
                  >
                    <article
                      className="absolute inset-0 flex flex-col justify-end gap-4 p-4 overflow-hidden font-inter"
                      style={{ width: articleWidth || 'auto' }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                        <Image
                          src={course.image}
                          alt={`${course.title} course`}
                          fill
                          className={`
                            object-cover transition-all duration-700 ease-out
                            ${
                              index === activeIndex
                                ? 'grayscale-0 brightness-100 scale-100'
                                : 'grayscale brightness-150 scale-110'
                            }
                          `}
                          style={{
                            mask: 'radial-gradient(100% 100% at 100% 0, #fef3c7, transparent)',
                            WebkitMask: 'radial-gradient(100% 100% at 100% 0, #fef3c7, transparent)',
                            transitionDelay: index === activeIndex ? '150ms' : '0ms',
                          }}
                        />
                      </div>

                      {/* Rotated Title */}
                      <h3
                        className={`
                          absolute top-4 left-4 origin-left text-sm font-light uppercase font-inter
                          whitespace-nowrap transition-opacity duration-700 ease-out
                          ${index === activeIndex ? 'opacity-100' : 'opacity-60'}
                        `}
                        style={{
                          transform: 'rotate(90deg)',
                          transformOrigin: '0 50%',
                        }}
                      >
                        {course.title}
                      </h3>

                      {/* Description */}
                      <div
                        className={`
                          h-32 bg-teal-600 rounded-tr-xl flex items-center justify-center
                          transition-all duration-700 ease-out 
                          ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
                        `}
                        style={{
                          transitionDelay: index === activeIndex ? '150ms' : '0ms',
                        }}
                      >
                        <p
                          className={`
                            text-xs leading-5 text-balance font-inter !text-white !px-4 font-wight
                          `}
                        >
                          {course.description}
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}

            {/* Mobile Version - Vertical Stack */}
            {isMobile && (
              <div className="w-full max-w-md px-4">
                <ul
                  className="list-none p-0 m-0 gap-3 w-full"
                  style={{
                    display: 'grid',
                    gridTemplateRows: getGridRows(),
                    height: 'clamp(400px, 80vh, 600px)',
                    transition: 'grid-template-rows 0.6s cubic-bezier(0, 0, 0.2, 1)',
                  }}
                >
                  {courses.map((course, index) => (
                    <li
                      key={course.id}
                      className="relative overflow-hidden rounded-lg !border !border-teal-600 bg-white cursor-pointer"
                      style={{ 
                        minHeight: '60px',
                        transition: 'all 0.6s cubic-bezier(0, 0, 0.2, 1)'
                      }}
                      onClick={() => handleItemInteraction(index)}
                    >
                      <article className="relative w-full h-full flex flex-col justify-end p-4 overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                          <Image
                            src={course.image}
                            alt={`${course.title} course`}
                            fill
                            className={`
                              object-cover transition-all duration-700 ease-out
                              ${
                                index === activeIndex
                                  ? 'grayscale-0 brightness-100 scale-100'
                                  : 'grayscale brightness-150 scale-110'
                              }
                            `}
                            style={{
                              mask: 'radial-gradient(100% 100% at 50% 0, #fef3c7, transparent)',
                              WebkitMask: 'radial-gradient(100% 100% at 50% 0, #fef3c7, transparent)',
                              transitionDelay: index === activeIndex ? '150ms' : '0ms',
                            }}
                          />
                        </div>

                        {/* Title - horizontal for mobile */}
                        <h3
                          className={`
                            absolute top-4 left-4 text-sm font-light uppercase
                            transition-opacity duration-700 ease-out
                            ${index === activeIndex ? 'opacity-100' : 'opacity-80'}
                          `}
                        >
                          {course.title}
                        </h3>

                        {/* Description */}
                        <div
                          className={`
                            bg-teal-600 rounded-tr-xl rounded-tl-xl flex items-center justify-center
                            transition-all duration-700 ease-out relative z-10
                            ${
                              index === activeIndex 
                                ? 'opacity-100 h-24 p-4' 
                                : 'opacity-0 h-0 p-0'
                            }
                          `}
                          style={{
                            transitionDelay: index === activeIndex ? '150ms' : '0ms',
                          }}
                        >
                          <p
                            className={`
                              text-xs leading-4 text-balance text-white text-center
                              ${index === activeIndex ? 'block' : 'hidden'}
                            `}
                          >
                            {course.description}
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedHoverDisclosures;