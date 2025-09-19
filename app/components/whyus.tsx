import React from 'react';
import Image from 'next/image';
import whyus from '../assets/whyus.svg';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => (
  <div className="space-y-3">
    <h3 className="!text-lg !font-semibold text-gray-900 !pb-3">{title}</h3>
    <p className="!text-lg text-gray-600 leading-relaxed ">{description}</p>
  </div>
);

const PremiumServicesSection = () => {
  const features: FeatureProps[] = [
    {
      title: "Expertise",
      description: "Our team consists of industry leaders, with a proven track record of success."
    },
    {
      title: "Quality Commitment",
      description: "We prioritize quality in every detail, ensuring satisfaction from concept to completion."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#F6F6E2] to-[#DBFFFA] py-16 px-4 sm:px-6 lg:px-8 min-h-screen">


      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center space-x-* !px-20 !pt-17">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="!text-4xl text-teal-600 !font-light tracking-wider uppercase !pb-7 ">
                Why We
              </p>
              <h2 className="!text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why <span className="text-teal-600">Choose Our</span>
                <br />
                <span className="text-teal-600">Premium Services?</span>
              </h2>
            </div>

            {/* Description */}
            <p className="!text-xl text-gray-600  leading-relaxed max-w-full !pt-7 !pb-5">
With years of expertise, we deliver architectural and design solutions of unmatched quality for high-profile clients. Every project blends functionality with elegance, reflecting sophistication and the unique vision of each client.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {features.map((feature, index) => (
                <Feature 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-140">
              <Image
                src={whyus}
                alt="Modern architectural building with premium design"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority // Add this if it's above the fold
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;