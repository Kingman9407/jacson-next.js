import React from 'react'

const AboutFourth = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl w-full p-12">
        {/* Mission Section */}
        <div className="flex items-start mb-16 !pt-10 !pb-10">
          <div className="flex-shrink-0 mr-8">
            <div className="w-30 aspect-square !border-2 !border-gray-400 rounded-full flex items-center justify-center">
              <span className="!text-3xl font-light text-gray-600">01</span>
            </div>
          </div>
          <div className="flex-1 !my-3">
            <h2 className="!text-5xl !font-light text-teal-600 !mb-4 tracking-wider !ml-20 leading-7">
              MISSION
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed !ml-20">
              To deliver world-class architectural and real estate solutions that 
              blend innovation, comfort, and sustainability
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex items-start mb-16 !pt-10 !pb-10">
          <div className="flex-shrink-0 mr-8">
            <div className="w-30 aspect-square !border-2 !border-gray-400 rounded-full flex items-center justify-center">
              <span className="!text-3xl !font-light text-gray-600">02</span>
            </div>
          </div>
          <div className="flex-1 !my-3">
            <h2 className="!text-5xl !font-light text-teal-600 !mb-4 tracking-wider  !ml-20 leading-7">
              VISION
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed !ml-20">
              To be the most trusted real estate brand, known for creating 
              iconic spaces that inspire lifestyles
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex items-start !pt-10 !pb-10">
          <div className="flex-shrink-0 mr-8">
            <div className="w-30 aspect-square !border-2 !border-gray-400 rounded-full flex items-center justify-center">
              <span className="!text-3xl font-light text-gray-600">03</span>
            </div>
          </div>
          <div className="flex-1 !my-3">
            <h2 className="!text-5xl !font-light text-teal-600 !mb-4   tracking-wider !ml-20 leading-7">
              VALUES
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed !ml-20">
              Trust, Quality, Innovation, Customer-Centric
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFourth
