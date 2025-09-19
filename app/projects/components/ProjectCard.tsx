import React from 'react';
import Image from 'next/image';

// Import images directly (place these files in your /public/assets folder)
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import card4 from '../assets/card4.svg';
import card5 from '../assets/card5.svg';
import card6 from '../assets/card6.svg';

const ProjectCard = () => {
  const cardData = [
    { id: 1, title: "Card 1", content: "This is the content for card 1", image: card1 },
    { id: 2, title: "Card 2", content: "This is the content for card 2", image: card2 },
    { id: 3, title: "Card 3", content: "This is the content for card 3", image: card3 },
    { id: 4, title: "Card 4", content: "This is the content for card 4", image: card4 },
    { id: 5, title: "Card 5", content: "This is the content for card 5", image: card5 },
    { id: 6, title: "Card 6", content: "This is the content for card 6", image: card6 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="w-full mx-auto !px-20">
        <h1 className="!text-6xl !font-light text-center !mb-8 !mt-8 text-teal-600">
         OUR PROJECTS
        </h1>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-80 lg:w-96 bg-white rounded-xl shadow-lg overflow-hidden !border !border-teal-600 
                        hover:bg-teal-600 hover:text-white transform hover:scale-105 transition-all duration-500 cursor-pointer group"
            >
              {/* Card Header with Image (fixed white background) */}
              <div className="!m-4 rounded-xl overflow-hidden !border-2 !border-teal-600 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain" // keeps original SVG colors intact
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="!px-4 !pb-4">
                <h3 className="!text-xl !font-bold text-gray-800 group-hover:text-white transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-500">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
