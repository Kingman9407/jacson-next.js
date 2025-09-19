'use client';

import React from 'react';
import Image from 'next/image';
import SecondImage from '../assets/SecondIImg.jpg';

const MobileSecondCard = () => {
  return (
    <div className="w-full flex flex-col space-y-6 m-3 mb-3 md:hidden">
      {/* Mobile Image */}
      <div className="relative w-full h-[80vh] rounded-none overflow-hidden">
        <Image
          src={SecondImage}
          alt="Background Mobile"
          fill
          priority
          className="object-cover object-center z-0"
          sizes="100vw"
        />

        <h1 className="!text-[38px] ml-3 mr-3 !pt-6 !text-[#f5f5dc] mb-4 text-center relative z-20">
          ABOUT US
        </h1>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="relative z-20 text-left text-white max-w-xl !px-6 pt-24">
          <h1 className="!text-[22px] !font-medium font-inter text-white/80 !mb-4">
            <span className="text-teal-600">Elevating Spaces</span> Luxury Architecture, Construction, and Interior Design Expertise
          </h1>

          {/* Bullet list */}
          <ul className="list-disc list-inside space-y-3 text-base text-white/80 leading-relaxed">
            <li>
              With over 4.5 years of proven expertise, we craft exceptional architectural designs that reflect modern elegance and functionality.
            </li>
            <li>
              Our construction services ensure seamless execution, backed by a strong focus on quality and precision.
            </li>
            <li>
              We design sophisticated interiors that align with our clients' unique tastes and lifestyles.
            </li>
            <li>
              Every project we deliver is a blend of creativity, detail, and luxury tailored to perfection.
            </li>
          </ul>
        </div>

        <h1 className="absolute -bottom-6 !text-[65px] !font-black text-[#f5f5dc]/30 text-center z-20 w-full !mb-5">
          4+ YEARS
        </h1>
      </div>
    </div>
  );
};

const DesktopSecondCard = () => {
  return (
    <div className="hidden md:flex flex-col space-y-6 m-3 mb-3">
      {/* Desktop Image */}
      <div className="relative w-full h-[100vh] rounded-none overflow-hidden">
        <Image
          src={SecondImage}
          alt="Background Desktop"
          fill
          priority
          className="object-cover object-center z-0"
          sizes="100vw"
        />

        <h1 className="!text-[50px] !pt-10 !text-[#f5f5dc] mb-4 text-center relative z-20">
          ABOUT US
        </h1>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="relative z-20 text-left text-white max-w-8xl !px-15 pt-40">
          <h1 className="!text-[50px] !font-inter text-white/80 mb-4">
            <span className="text-teal-600">Elevating Spaces</span>: Luxury Architecture, Construction, and Interior Design Expertise
          </h1>

          {/* Bullet list */}
          <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl md:text-xl text-white/80 leading-loose">
            <li>
              With over 4.5 years of proven expertise, we craft exceptional architectural designs that reflect modern elegance and functionality.
            </li>
            <li>
              Our construction services ensure seamless execution, backed by a strong focus on quality and precision.
            </li>
            <li>
              We design sophisticated interiors that align with our clients' unique tastes and lifestyles.
            </li>
            <li>
              Every project we deliver is a blend of creativity, detail, and luxury tailored to perfection.
            </li>
          </ul>
        </div>

        <h1 className="absolute -bottom-6 !text-[80px] !font-black text-[#f5f5dc]/30 text-center z-20 w-full !mb-5">
          4+ YEARS ON THE FIELD
        </h1>
      </div>
    </div>
  );
};

const SecondCard = () => {
  return (
    <>
      <MobileSecondCard />
      <DesktopSecondCard />
    </>
  );
};

export default SecondCard;
