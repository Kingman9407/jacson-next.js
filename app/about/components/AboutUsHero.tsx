import React from 'react'
import Image from "next/image";
import sampleImg from "../assets/abouthero.svg"; 

const AboutUsHero = () => {
  return (
    <div className="relative flex flex-row min-h-screen bg-gray-100 overflow-hidden">
      
      {/* Gradient spreading from bottom-left */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_100%,#F6F6E2,transparent_80%),radial-gradient(circle_at_top,#F6F6E2,transparent_80%)] pointer-events-none"></div>


      
      {/* Text */}
      <h1 className="relative flex-[1] !text-8xl !mt-35 !mr-20 !ml-30 leading-tight !font-extralight !text-teal-600 z-10">
        <span className="block">TURNING</span>
        <span className="block">VISION</span>
        <span className="block">INTO</span>
        <span className="block">REALITY</span>
      </h1>

      {/* Image */}
      <div className="flex-[1] text-lg relative z-10">
        <Image
          src={sampleImg}
          alt="Vision example"
          width={500}
          height={350}
          className="!mt-40 !ml-20 !mr-40"
        />
      </div>
    </div>
  )
}

export default AboutUsHero
