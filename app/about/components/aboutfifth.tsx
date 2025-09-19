import React, { useState, useEffect } from "react";

const AboutFifth = () => {
  const items = ["White Town", "Lawspet", "Krishna Nager", "Auroville", "Muthialpet"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      className="flex flex-row"
      style={{
        background:
          "linear-gradient(to right, #F6F6E2 0%, #F6F6E2 28%, rgba(255,255,255,0.2) 38%, rgba(255,255,255,0.1) 44%, #DBFFFA 62%, #DBFFFA 100%)",
      }}
    >
      {/* Column 1 - Rotating List (35%) */}
      <div className="basis-[35%] min-h-screen flex items-center justify-center p-0">
        <div className="relative w-98 h-[450px] flex flex-col items-center justify-center overflow-hidden">
          {items.map((item, index) => {
            const offset = (index - currentIndex + items.length) % items.length;

            let style = "opacity-0 scale-50 filter blur-sm";

            if (offset === 0) {
              style = "z-40 opacity-100 scale-150 translate-y-0 filter-none"; // main item
            } else if (offset === 1) {
              style = "z-30 opacity-90 scale-120 translate-y-24 blur-[3px]"; // next item closer
            } else if (offset === 2) {
              style = "z-20 opacity-70 scale-95 translate-y-48 blur-[5px]"; // further back
            } else if (offset === items.length - 1) {
              style = "z-30 opacity-90 scale-120 -translate-y-24 blur-[3px]"; // previous item closer
            } else if (offset === items.length - 2) {
              style = "z-20 opacity-70 scale-95 -translate-y-48 blur-[5px]"; // further back
            }

            return (
              <div
                key={index}
                className={`absolute w-68 h-20 flex items-center justify-center text-center transition-all duration-700 ease-in-out ${style}`}
              >
                <span className="text-3xl font-semibold text-gray-700">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 2 - Stats Section (65%) */}
      <div className="basis-[65%] flex items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-16 text-center">
          <div>
            <h3 className="!text-6xl font-bold text-teal-600">5+</h3>
            <p className="!text-3xl text-gray-600 mt-4">Years of Experience</p>
          </div>
          <div>
            <h3 className="!text-6xl font-bold text-teal-600">100+</h3>
            <p className="!text-3xl text-gray-600 mt-4">Project Delivered</p>
          </div>
          <div>
            <h3 className="!text-6xl font-bold text-teal-600">30+</h3>
            <p className="!text-3xl text-gray-600 mt-4">Award Winning</p>
          </div>
          <div>
            <h3 className="!text-6xl font-bold text-teal-600">100+</h3>
            <p className="!text-3xl text-gray-600 mt-4">Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFifth;
