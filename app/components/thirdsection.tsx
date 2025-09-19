import React from 'react';
import ApartmentsImg from '../assets/Appartments.png';
import HomesImg from '../assets/Home.png';
import MarketImg from '../assets/Bussiness.png';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 relative">
      <div className="w-full mx-auto text-center">
        {/* Header */}
        <h3 className="text-teal-600 !mt-10 !mb-5 font-medium tracking-widest text-center !text-3xl">
          SERVICES WE PROVIDE
        </h3>
        <h2 className="md:text-5xl font-bold text-gray-800 !mb-6 !text-5xl">
          Features which will build your trust back on
        </h2>
        <p className="text-gray-600 !mb-20 mx-auto text-center text-2xl">
          Our architecture design service transforms visions into reality, blending functionality with aesthetics. We create spaces that inspire and elevate your lifestyle.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 !pb-10">
          {[
            {
              img: ApartmentsImg,
              alt: 'Apartments',
              title: 'APARTMENTS',
              desc: ''
            },
            {
              img: HomesImg,
              alt: 'Homes and Farm Houses',
              title: 'HOMES AND FARM HOUSES',
              desc: ''
            },
            {
              img: MarketImg,
              alt: 'Market and Business Centre',
              title: 'MARKET AND BUSINESS CENTRE',
              desc: ''
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 flex flex-col items-center text-center">
              <Image
                src={item.img}
                alt={item.alt}
                className="max-w-30 h-40 object-cover rounded-lg !mb-6 "
              />
              <h3 className=" font-bold text-gray-800 !mb-10 !text-2xl">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
