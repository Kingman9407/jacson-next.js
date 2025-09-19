import React from 'react'
import Image from 'next/image' // ✅ Next.js optimized image
import ConstructionImg from '../assets/aboutcontact.svg'

const CenteredColumns = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to right, #F6F6E2 0%, #F6F6E2 28%, rgba(255,255,255,0.2) 38%, rgba(255,255,255,0.1) 44%, #DBFFFA 62%, #DBFFFA 100%)",
      }}
    >
      <div className="bg-teal-600 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center p-6 max-w-6xl w-full">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
          <div className="bg-gray-100 rounded-xl shadow-lg w-full h-80 flex items-center justify-center !m-10 overflow-hidden">
            <Image
              src={ConstructionImg}
              alt="Partnership"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 text-white flex-1 !p-6 text-center lg:text-left">
          <h2 className="!text-4xl !font-black mb-2">PARTNERSHIP</h2>
          <h3 className="!text-3xl !font-extrabold mb-4">BECOME OUR PARTNER</h3>
          <p className="mb-6 !mt-10">
            Join forces with <span className="font-bold">[COMPANY NAME]</span> and benefit from our expertise and innovative approach.
            We offer exciting partnership opportunities that drive mutual growth and success.
          </p>
          <div className="bg-[#f5f5dc] text-black font-semibold px-10 sm:px-6 !py-0  !mr-10 !mt-10 rounded-full shadow-md">
            <div className="flex justify-between items-center px-4 sm:px-2">
              <button className="bg-[#f5f5dc] !text-gray-500 !pl-8 sm:!pl-4 !text-sm sm:!text-base md:!text-lg">
                Contact Us
              </button>
              <button className="!bg-black !text-[#f5f5dc] !px-6 sm:!px-4 !py-3 md:!py-4 !m-2 !rounded-full hover:bg-gray-800 transition-shadow shadow !text-sm sm:!text-base md:!text-lg">
                Support
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CenteredColumns
