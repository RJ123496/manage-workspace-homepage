import React, { useState } from "react";
import teamCelebration from "../assets/about/team-celebration.png";
import { DemoBookingForm } from "./DemoBookingForm";

export const AboutUsSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="bg-[#FFECEA] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#b30d02] mb-8 lg:mb-12 text-left">
          About Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="order-2 lg:order-1">
            <img
              className="w-[580px] h-[503px] object-cover rounded-lg mx-auto lg:mx-0"
              alt="Team celebrating success together"
              src={teamCelebration}
              loading="lazy"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#b30d02] mb-4 lg:mb-6">
              The Best Coworking Space Management Software
            </h3>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              At ManageWorkspace, we believe coworking should be more than just
              shared desks — it should be a seamless experience that empowers your
              team to focus on what truly matters. Our platform is designed to
              simplify every aspect of managing a modern workspace — from visitor
              tracking and attendance to event coordination, memberships, and
              resource bookings. Whether you're a startup, freelancer, or
              growing enterprise, we help you turn your coworking environment into a
              hub of productivity and effortless collaboration.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-row justify-center sm:justify-start gap-3 sm:gap-4 mt-6 lg:mt-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-[180px] h-[48px] border border-[#b30d02] text-[#b30d02] bg-transparent rounded-lg hover:bg-[#b30d02] hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="w-[180px] h-[48px] border border-[#b30d02] text-[#b30d02] bg-transparent rounded-lg hover:bg-[#b30d02] hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                Book Live Demo
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Statistics Section - Hidden on Mobile */}
            <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-16 lg:space-x-24 mt-12 lg:mt-16">
              {/* 45 Locations */}
              <div className="text-center">
                <div className="text-[40px] font-bold text-gray-800 mb-2">45</div>
                <div className="text-lg sm:text-xl text-gray-600">Locations</div>
              </div>
              
              {/* 35k+ Sq meters of workspace */}
              <div className="text-center">
                <div className="text-[40px] font-bold text-gray-800 mb-2">35k+</div>
                <div className="text-lg sm:text-xl text-gray-600">Sq meters of workspace</div>
              </div>
              
              {/* 24/7 Access */}
              <div className="text-center">
                <div className="text-[40px] font-bold text-gray-800 mb-2">24/7</div>
                <div className="text-lg sm:text-xl text-gray-600">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Booking Modal */}
      <DemoBookingForm 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
};