import React from 'react';
import Heroimg from '../assets/HERO.png';
import Image from 'next/image';

const Marquee = () => {
  return (
    <div className="bg-teal-600 !py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap text-[#f5f5dc] font-semibold text-lg gap-20">
        <div className="flex items-center">
          <span className="!pr-5">🏠</span> Homes
        </div>
        <div className="flex items-center">
          <span className="!pr-5">🏡</span> Farm House
        </div>
        <div className="flex items-center">
          <span className="!pr-5">🏢</span> Apartments
        </div>
        <div className="flex items-center">
          <span className="!pr-5">🏋️</span> Gyms
        </div>
      </div>
    </div>
  );
};


// Custom marquee animation
const styles = `
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  display: inline-flex;
  animation: marquee 20s linear infinite;
}
`;

const MobileHero = () => {
  return (
    <div className="relative min-h-[75vh] !m-1 !mt-20 rounded-2xl overflow-hidden md:hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 rounded-2xl"
        style={{
          background: 'linear-gradient(to bottom, #008080, #f5f5dc)',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-0 pb-8 pt-[10px] flex flex-col">
        {/* Text Section */}
        <div className="flex-1 pr-8 !pl-5 order-1">
          <h1 className="!text-3xl sm:!text-3xl md:!text-4xl lg:!text-4xl xl:!text-7xl !pt-10 !font-medium text-[#f5f5dc] leading-tight">
            ELEVATE YOUR LIFESTYLE
          </h1>
          <h1 className="!text-3xl sm:!text-3xl md:!text-5xl lg:!text-6xl xl:!text-7xl !mt-2 !font-medium text-[#f5f5dc] leading-tight">
            WITH LUXURY DESIGN
          </h1>
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden relative z-10 w-full max-w-[400px] mx-auto mt-8 mb-8 aspect-[766/717] order-2">
          <Image
            src={Heroimg}
            alt="Logo"
            fill
            className="object-contain cursor-pointer"
            sizes="(max-width: 768px) 400px"
          />
        </div>

        {/* Description */}
        <p className="!text-base sm:!text-lg md:!text-xl lg:text-xl !text-[#003333] !font-regular max-w-2xl !p-2 leading-7 order-3">
          Discover unparalleled architecture, construction, and interior design services tailored for the discerning elite. Our commitment to excellence ensures that every project reflects sophistication and style.
        </p>

        {/* Contact Us + Support Buttons */}
        <div className="!mx-5 !my-3 sm:!ml-2 !max-w-120 order-4">
          <div className="bg-[#f5f5dc] text-black font-semibold px-10 sm:px-6 !py-0 rounded-full shadow-md">
            <div className="flex justify-between !items-center px-4 sm:px-2">
              <button className="bg-[#f5f5dc] !text-gray-500  !m-2 !text-sm sm:!text-base md:!text-lg">
                Contact Us
              </button>
              <button className="!bg-black !text-[#f5f5dc] !px-6 sm:!px-4 !py-4 md:!py-4 !rounded-full hover:bg-gray-800 transition-shadow shadow !text-sm sm:!text-base md:!text-lg">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopHero = () => {
  return (
    <div className="relative min-h-[75vh] !m-3 !mt-23 rounded-2xl overflow-hidden hidden md:block">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 rounded-2xl"
        style={{
          background: 'linear-gradient(to bottom, #008080, #f5f5dc)',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 pb-8 pt-[60px] block">
        {/* Text Section */}
        <div className="flex-1 pr-8 !pl-15">
          <h1 className="!text-3xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-7xl !pt-15 !font-light text-[#f5f5dc] leading-tight">
            ELEVATE YOUR LIFESTYLE
          </h1>
          <h1 className="!text-3xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-7xl !font-light text-[#f5f5dc] leading-tight">
            WITH LUXURY DESIGN
          </h1>
        </div>

        {/* Description */}
        <p className="!text-base sm:!text-lg md:!text-xl lg:text-xl !text-[#003333] !font-regular max-w-2xl lg:!pl-18 !pt-8 leading-7">
          Discover unparalleled architecture, construction, and interior design services tailored for the discerning elite. Our commitment to excellence ensures that every project reflects sophistication and style.
        </p>

        {/* Contact Us + Support Buttons */}
        <div className="lg:!pl-20 !mt-10 md:!mt-10 sm:!mt-6 !ml-6 sm:!ml-2 !max-w-120">
          <div className="bg-[#f5f5dc] text-black font-semibold px-10 sm:px-6 !py-0 rounded-full shadow-md">
            <div className="flex justify-between !items-center px-4 sm:px-2">
              <button className="bg-[#f5f5dc] !text-gray-500  !m-5 !text-sm sm:!text-base md:!text-lg">
                Contact Us
              </button>
              <button className="!bg-black !text-[#f5f5dc] !px-6 sm:!px-4 !py-3 md:!py-4 !rounded-full hover:bg-gray-800 transition-shadow shadow !text-sm sm:!text-base md:!text-lg">
                Support
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block absolute top-4 -right-9 z-10 w-[500px] lg:w-[706px] aspect-[766/717]">
          <Image
            src={Heroimg}
            alt="Logo"
            fill
            className="object-contain cursor-pointer"
            sizes="(max-width: 768px) 100vw, 706px"
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <style>{styles}</style>
      <MobileHero />
      <DesktopHero />
      <Marquee />
    </>
  );
};

export default Hero;
