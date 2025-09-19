"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import slide1 from "../assets/Slide1.svg";
import slide2 from "../assets/Slide2.svg";
import slide3 from "../assets/Slide3.svg";
import slide4 from "../assets/Slide4.svg";

const slides = [
  { image: slide1, title: "TURNING IDEAS INTO LANDMARK" },
  { image: slide2, title: "SMART & MORDERN PROPERTY DESIGN" },
  { image: slide3, title: "CRAFT MODERN LIVING SPACES" },
  { image: slide4, title: "WE CREATE AMAZING DESIGNS" },
];

interface ProjectHeroProps {
  padding?: string; // customizable padding
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ padding = "p-3" }) => {
  const [current, setCurrent] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [current]);

  return (
    <div className="relative w-[calc(100%-40px)] h-[80vh] overflow-hidden z-10 !mt-25 !mx-[15px] !rounded-4xl">
      {/* Slide */}
      <div ref={slideRef} className="relative w-full h-full">
        {/* Base Image */}
        <Image
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          fill
          className="object-cover rounded-xl"
          priority
        />

        {/* Overlay Content inside image container */}
        <div
          className={`absolute inset-0 flex flex-col justify-end items-center text-white text-center ${padding}`}
        >
          {/* Title */}
          <h2 className="!text-6xl !font-extralight !leading-loose !mb-5">
            {slides[current].title}
          </h2>

          {/* Dots */}
          <div className="flex justify-center gap-3 !mb-5">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`block h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === current ? "bg-white w-6" : "bg-white/40 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
