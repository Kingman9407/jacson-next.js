import React from 'react'
import Image from 'next/image'
import buildingImg from '../assets/aboutus.svg'
import cityscapeImg from '../assets/aboutus2.svg'

const AboutSecond = () => {
  return (
    <div className="w-full mx-auto !px-20 py-16 bg-white">
      {/* About Us Section */}
      <div className="mb-20">
        <h2 className="text-center text-teal-600 !text-3xl font-semibold tracking-wide uppercase mb-8 !mt-5">
          ABOUT US
        </h2>
        <h1 className="!text-5xl lg:text-5xl font-bold text-gray-900 mb-8 px-10 leading-tight">
          <span className="text-teal-600">Elevating Spaces:</span> Luxury Architecture, Construction, and Interior Design Expertise
        </h1>
        
        <div className="grid lg:grid-cols-[6fr_4fr] gap-12 items-center">
          <div>
            <div className="space-y-6 text-gray-700 text-lg !leading-relaxed !mt-3">
              <p className="font-medium !mb-8">
                With over 4.5 years of proven expertise, we craft exceptional architectural designs that reflect modern elegance and functionality.
              </p>
              <p className="font-medium !mb-8">
                Our construction services ensure seamless execution, backed by a strong focus on quality and precision.
              </p>
              <p className="font-medium !mb-8 ">
                We design sophisticated interiors that align with our clients' unique tastes and lifestyles.
              </p>
              <p className="font-medium !mb-8">
                Every project we deliver is a blend of creativity, detail, and luxury tailored to perfection.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={buildingImg}
              alt="Building Illustration"
               width={480}
              height={384}
              className="object-contain" // removed rounded-lg & shadow-lg
            />
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div>
        <h2 className="text-center text-teal-600 !text-3xl font-semibold tracking-wide uppercase mb-8 !mt-5">
          WHO WE ARE
        </h2>
        
        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">
          <div className="flex justify-center lg:order-1">
            <Image
              src={cityscapeImg}
              alt="Cityscape Illustration"
              width={480}
              height={384}
              className="object-contain" // removed rounded-lg & shadow-lg
            />
          </div>
          
          <div className="lg:order-2">
            <p className="font-medium !mb-2 !mt-5 !leading-8 text-gray-700 text-lg">
              Founded with a passion for modern design and sustainable construction, we are a forward-thinking real estate and architectural firm committed to transforming the way people live and work. Over the years, we have built a reputation for delivering exceptional residential and commercial spaces that balance innovation, quality, and functionality. From luxurious homes and contemporary villas to large-scale commercial projects, every design we create is guided by a vision of elegance, efficiency, and sustainability. Our approach combines creativity with technical expertise, ensuring that every project not only meets but exceeds client expectations. With an unwavering focus on craftsmanship, customer trust, and future-ready designs, we continue to shape landmark developments that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSecond
