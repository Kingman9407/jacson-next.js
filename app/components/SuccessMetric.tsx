'use client';

import React from 'react';
import Image from 'next/image'; 

import familyImg from '../assets/SuccessMetric1.svg';
import livingRoomImg from '../assets/SuccessMetric2.svg';
import dreamHomeImg from '../assets/SucessMetric3.svg';
import kitchenImg from '../assets/SuccessMetric4.svg';

// ✅ Define props interface
interface MetricCardProps {
  number: string;
  label: string;
  highlight?: boolean;
}

// ✅ Reusable MetricCard component
const MetricCard = ({ number, label, highlight = false }: MetricCardProps) => {
  const baseClasses =
    "rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl px-10 py-8 flex flex-col items-center text-center";
  const highlightClasses =
    "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-teal-200 shadow-lg";
  const normalClasses =
    "bg-white/80 hover:bg-white border border-gray-100 text-slate-700";

  return (
    <div className={`${baseClasses} ${highlight ? highlightClasses : normalClasses}`}>
      <div className="text-4xl md:text-5xl !pl-6 !pr-6 !pt-8 !pb-2 font-black ">{number}</div>
      <div className="text-base md:text-lg !pl-6 !pr-6 !pt-1 !pb-8 font-medium opacity-90 leading-relaxed">
        {label}
      </div>
    </div>
  );
};

// ✅ Main Component (rafce style)
const RealEstateMetrics = () => {
  const metrics: MetricCardProps[] = [
    { number: '100+', label: 'Satisfied Customers', highlight: false },
    { number: '30+', label: 'Award Winning', highlight: false },
    { number: '5+', label: 'Years of Experience', highlight: false },
    { number: '110+', label: 'Project Delivered', highlight: true }
  ];

  return (
    <div className="min-h-screen bg-white ">
      <div className="max-w-full mx-auto !p-4  bg-gradient-to-br from-[#f5f5dc] to-stone-100 backdrop-blur-sm shadow-2xl">

        {/* ✅ Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-4">
            {/* Heading */}
            <div className="text-center">
              <div className="text-teal-600 !text-3xl font-semibold uppercase !mt-4 !mb-3 !leading-tight">
                SUCCESS METRICS
              </div>
              <h1 className="text-xl font-black text-slate-700  leading-tight">
                YOUR TRUSTED CONSTRUCTOR
              </h1>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 !p-4">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            {/* ✅ Images (same layout as desktop) */}
            <div className="flex flex-col gap-6">
              <div className="w-full bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl overflow-hidden border-4 border-blue-400 h-48 relative">
                <Image src={familyImg} alt="Happy Family" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[300px]">
                <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl overflow-hidden row-span-2 relative">
                  <Image src={livingRoomImg} alt="Living Room" fill className="object-cover" />
                </div>
                <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden relative">
                  <Image src={dreamHomeImg} alt="Dream Home" fill className="object-cover" />
                </div>
                <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl overflow-hidden relative">
                  <Image src={kitchenImg} alt="Modern Kitchen" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-center">
          {/* Left Section - Text & Metrics */}
          <div className="flex flex-col gap-8">
            <div className="text-left">
              <div className="text-teal-600 text-3xl lg:text-5xl font-semibold tracking-[3px] uppercase !mb-5 !ml-5 ">
                SUCCESS METRICS
              </div>
              <h1 className="lg:!text-2xl font-black text-slate-700 mt-10 !ml-8 !mb-5 leading-tight">
                YOUR TRUSTED CONSTRUCTOR
              </h1>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 p-4 gap-8">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="flex flex-col gap-6">
            <div className="w-full bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl overflow-hidden border-4 border-blue-400 h-60 relative">
              <Image src={familyImg} alt="Happy Family" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px]">
              <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl overflow-hidden row-span-2 relative">
                <Image src={livingRoomImg} alt="Living Room" fill className="object-cover" />
              </div>
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden relative">
                <Image src={dreamHomeImg} alt="Dream Home" fill className="object-cover" />
              </div>
              <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl overflow-hidden relative">
                <Image src={kitchenImg} alt="Modern Kitchen" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RealEstateMetrics;
