import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="!m-15 min-h-screen bg-white flex items-center justify-center px-4 relative">
      <div className="max-w-7xl w-full relative">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Grid with 70:30 split */}
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] min-h-[600px] relative">
            
            {/* Left side - Contact Form */}
            <div className="!p-8 lg:p-12 flex flex-col justify-center relative z-10">
              <div className="max-w-md mx-auto w-full">
                <h2 className="!text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  GET IN <span className="text-teal-600">TOUCH</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Quisque suscipit ipsum sed, eu venenatis leo ornare eget. Ut
                  porta facilisis elementum.
                </p>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      How did you find us?
                    </label>
                    <select
                      id="source"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    Submit
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-7-7l7 7-7 7"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Right column blank space (still exists) */}
            <div className="relative z-10 bg-black hidden lg:block"></div>

            {/* Map overlay - floats on top, equal margin */}
            <div className="absolute top-8 bottom-8 right-8 !z-20 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-full shadow-2xl rounded-2xl overflow-hidden pointer-events-auto">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086113387274!2d144.9630583155041!3d-37.81362774264326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0ec7f8d%3A0x5045675218ceed0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1631876767813!5m2!1sen!2sau"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
