import React from "react";
import client1 from "../assets/hero/client .png";
import client2 from "../assets/hero/Clent 2.png";
import client3 from "../assets/hero/Client 3.png";
import clientsGallery from "../assets/hero/Our Clients.png";

export const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="bg-[#FFECEA] py-4 sm:py-12 lg:py-16 xl:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title at the top */}
        <div className="text-center mb-4 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 sm:mb-4 lg:mb-6 text-center">
            Our Clients Reviews
          </h2>
          <p className="w-full max-w-[481px] h-auto text-sm sm:text-base lg:text-lg text-gray-500 mb-4 sm:mb-8 mx-auto">
            Trusted by creators and leaders from various industries.
          </p>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col gap-3 sm:gap-8 lg:gap-12">
          {/* Top - Client images gallery */}
          <div className="w-full flex justify-center overflow-hidden">
            <img
              src={clientsGallery}
              alt="Our clients and business showcase"
              className="w-full max-w-[1230px] h-auto max-h-[474px] object-contain rounded-xl"
            />
          </div>

          {/* Testimonials Cards */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 justify-center">
              <div className="w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[398px] h-[140px] sm:h-[220px] lg:h-[260px] border border-gray-200 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img
                  src={client1}
                  alt="Testimonial 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[398px] h-[140px] sm:h-[220px] lg:h-[260px] border border-gray-200 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img
                  src={client2}
                  alt="Testimonial 2"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden md:block w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[398px] h-[140px] sm:h-[220px] lg:h-[260px] border border-gray-200 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img
                  src={client3}
                  alt="Testimonial 3"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};