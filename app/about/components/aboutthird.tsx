"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import zoom from "../assets/zoomin.svg";

const AboutThird: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleScroll = () => {
      const section = document.getElementById("zoom-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress while section is in view
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / windowHeight)
      );

      // Start at 0.3x → end at 0.8x
      if (progress >= 0 && progress <= 1) {
        const scale = 0.3 + progress * 0.55; // 0.3 → 0.8
        image.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Section before */}

      {/* Sticky Zoom Section */}
      <div id="zoom-section" className="h-[300vh] relative bg-white">
        <div
          ref={imageRef}
          className="sticky top-0 h-screen flex items-end justify-center overflow-hidden"
          style={{
            transform: "scale(0.3)", // start small
            transformOrigin: "center bottom", // zoom from bottom
            transition: "transform 0.1s linear",
          }}
        >
          <Image
            src={zoom}
            alt="Mountain"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Section after */}
  
    </div>
  );
};

export default AboutThird;
