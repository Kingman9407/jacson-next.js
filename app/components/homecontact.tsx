'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, phone });
    // Handle form submission logic here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#F6F6E2] to-[#DBFFFA] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Image and Content */}
          <div 
            className="lg:w-5/5 relative bg-cover bg-center bg-gray-800"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            {/* Content Overlay */}
          
            <div className="absolute inset-0 flex flex-row  !p-12 lg:p-12 text-[#f5f5dc] justify-between">
              <div>
              <div className="mb-8">
                <div>
                <h1 className="!text-3xl lg:!text-5xl !font-medium  !mb-4 !tracking-widest">
                  WANT  TO  START
                  <br />
                  <span className="!font-medium">A  PROJECT?</span>
                </h1>
                <p className="text-lg text-gray-200 max-w-md leading-relaxed">
                  Contact us today to transform your vision into a luxurious reality with our expert services.
                </p>
              </div>
              
              <div className="mt-auto">
                <h2 className="text-2xl lg:text-3xl font-light mb-4 tracking-wider">
                  ADDRESS
                </h2>
                <p className="text-xl lg:text-2xl font-light tracking-wider">
                  91+ 8056544995
                </p>
              </div>
              </div>
              </div>
               {/* Right Side - Contact Form */}
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white rounded-2xl shadow-xl">
            {/* Logo section */}
            <div className="text-center !mb-8">
              <h1 className="text-3xl !font-bold text-gray-800  tracking-wider">LOGO</h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center mb-8 leading-relaxed !mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni egestas tortor at 
              facilisis tellus magna.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email input */}
<div className="flex items-center bg-[#F5F5DC] !border !border-teal-600 rounded-xl px-4 !py-5 !mx-5 !mb-5 !mt-5">
  <svg
    className="w-5 h-5 text-gray-400 !mx-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email id"
    className="flex-1 bg-transparent py-4 px-3 text-gray-700 !placeholder-gray-500 focus:outline-none"
    required
  />
</div>

{/* Phone input */}
<div className="flex items-center !bg-[#f5f5dc] !border !border-teal-600  rounded-xl px-4 !py-5 !mx-5">
  <svg
    className="w-5 h-5 text-gray-400 !mx-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
  <input
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="91+ Enter your mobile number"
    className="flex-1 bg-transparent py-4 px-3  text-gray-700 !placeholder-gray-500 focus:outline-none"
    required
  />
</div>


              
             {/* Submit button */}
<div className="!mx-5 !mt-6 ">
  <button
    type="submit"
    className="w-full !bg-teal-600 !rounded-xl !hover:bg-teal-700 text-white font-semibold !py-5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
  >
    SEND
  </button>
</div>

            </form>
          </div>
           
            </div>
            
            
          </div>

          {/* Right Side - Contact Form */}
      
        </div>
      </div>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Go to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default ContactForm;