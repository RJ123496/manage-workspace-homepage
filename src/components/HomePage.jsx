import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { ContactForm } from "./ContactForm";
import { AboutUsSection } from "./AboutUsSection";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { FooterSection } from "./FooterSection";
import { SubscriptionPlansSection } from "./SubscriptionPlansSection";
import { TestimonialsSection } from "./TestimonialsSection";
import ZohoSignPopup from "./ZohoSignPopup";

// Hero section images
import woman1 from "../assets/hero/woman1.png";
import man1 from "../assets/hero/man1.png";
import man2 from "../assets/hero/man2.png";
import woman2 from "../assets/hero/woman2.png";

// Service section images - removed for restart
// import { Button } from "./Button"; // Unused for now

// Decorative Images Component - Desktop Only Positioning
const DecorativeImages = () => {
  return (
    <>
      {/* Top Left Image - Group 45 (yellow bg) */}
      <div className="hero-decorative-image hidden lg:block absolute top-[270px] left-[10px] w-[140px] h-[180px] transform -rotate-6 z-10">
        <img 
          src={woman1} 
          alt="Professional woman" 
          className="w-full h-full object-cover rounded-lg" 
          loading="lazy"
        />
      </div>

      {/* Top Right Image - Group 46 (pink bg) */}
      <div className="hero-decorative-image hidden lg:block absolute top-[260px] right-[90px] w-[140px] h-[180px] transform rotate-8 z-10">
        <img 
          src={man2} 
          alt="Professional man" 
          className="w-full h-full object-cover rounded-lg" 
          loading="lazy"
        />
      </div>

      {/* Bottom Left Image - Group 47 (brown bg) */}
      <div className="hero-decorative-image hidden lg:block absolute top-[550px] left-[80px] w-[200px] h-[280px] transform -rotate-15 z-10">
        <img 
          src={man1} 
          alt="Professional man" 
          className="w-full h-full object-cover rounded-lg" 
          loading="lazy"
        />
      </div>

      {/* Bottom Right Image - Group 48 (white bg) */}
      <div className="hero-decorative-image hidden lg:block absolute top-[520px] right-[100px] w-[220px] h-[300px] transform rotate-15 z-10">
        <img 
          src={woman2} 
          alt="Professional woman" 
          className="w-full h-full object-cover rounded-lg" 
          loading="lazy"
        />
      </div>
    </>
  );
};



export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFECEA] w-full">
      <Header />

      {/* Hero Section - Responsive Layout */}
      <section className="hero-section relative min-h-screen w-full overflow-hidden bg-[#FFECEA] flex flex-col justify-start items-center">
        
        {/* Main Hero Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
          
          {/* Decorative Images - Desktop Only */}
          <div className="decorative-images-container absolute inset-0 pointer-events-none hidden lg:block">
            <DecorativeImages />
          </div>

          {/* Decorative Images - Mobile/Tablet Only */}
          <div className="decorative-images-mobile absolute inset-0 pointer-events-none hidden sm:block md:hidden lg:hidden z-0">
            {/* Top-left image - positioned to not overlap title */}
            <img 
              src={woman1} 
              alt="Professional woman" 
              className="absolute top-4 left-4 w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg opacity-80" 
              loading="lazy"
            />
            {/* Bottom-right image - positioned below form */}
            <img 
              src={woman2} 
              alt="Professional woman" 
              className="absolute bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg opacity-80" 
              loading="lazy"
            />
          </div>
          
          {/* Main Content */}
          <div className="hero-main-content relative z-20 text-center max-w-6xl mx-auto">
            

            {/* Title section with reduced spacing */}
            <div className="mb-4 sm:mb-6">
              <h1 className="hero-main-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black">
                Simplify Office Operations.<br />
                Accelerate <span className="text-[#b30d02]">Business Success.</span>
              </h1>
              
              <p className="hero-main-subtitle text-sm sm:text-base lg:text-lg text-[#969696] max-w-2xl mx-auto mt-2 sm:mt-4 px-4 lg:px-0">
                Manage visitors & leads, attendance & memberships, events, bookings & expenses - all in one platform.
              </p>
            </div>
            
            {/* Form with proper spacing */}
            <div className="hero-contact-form relative z-20">
              <ContactForm key="hero-contact-form" />
            </div>
            
            {/* iPad Air Images - Under Form */}
            <div className="ipad-air-images hidden md:flex lg:hidden justify-between items-center w-full max-w-4xl mx-auto mt-8 px-4 relative">
              {/* Man1 - Right side */}
              <div className="w-32 h-40 ipad-air-man1">
                <img 
                  src={man1} 
                  alt="Professional man" 
                  className="w-full h-full object-cover rounded-lg" 
                  loading="lazy"
                />
              </div>
              
              {/* Woman2 - Left side */}
              <div className="w-32 h-40 ipad-air-woman2">
                <img 
                  src={woman2} 
                  alt="Professional woman" 
                  className="w-full h-full object-cover rounded-lg" 
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
          

          
        </div>
      </section>

      <div id="about" className="pt-8">
        <AboutUsSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      
      {/* Services Section */}
      <section id="services" className="bg-[#FFECEA] w-full py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Section - Main Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 leading-tight">
              Smart Workspace Tools for<br />
              Every Industry.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 lg:mb-8 leading-relaxed font-normal font-poppins">
              No two industries work alike. That's why ManageWorkspace offers tailor-made tools for each — from visitor tracking to event coordination and resource booking.
            </p>
            <button 
              onClick={() => navigate('/features')}
              className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-[#B30D02] text-white rounded-lg hover:bg-[#8a0a02] transition-colors duration-300 flex items-center cursor-pointer text-sm sm:text-base"
            >
              Explore more
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right Section - Industry Types and Benefits */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Industry Types Grid */}
            <div className="flex flex-row flex-wrap justify-center items-center content-center p-0 gap-3 sm:gap-4 lg:gap-5 w-full mb-6 lg:mb-8">

              {/* Legal Firms */}
              <div className="w-32 sm:w-36 lg:w-[180px] h-10 sm:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">👨‍⚖️</span>
                  <span className="text-xs sm:text-sm font-medium text-black">Legal Firms</span>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="w-32 sm:w-36 lg:w-[180px] h-10 sm:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">🏗️</span>
                  <span className="text-xs sm:text-sm font-medium text-black">Manufacturing</span>
                </div>
              </div>

              {/* Healthcare */}
              <div className="w-32 sm:w-36 lg:w-[180px] h-10 sm:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">👨‍⚕️</span>
                  <span className="text-xs sm:text-sm font-medium text-black">Healthcare</span>
                </div>
              </div>

              {/* Corporate */}
              <div className="w-32 sm:w-36 lg:w-[180px] h-10 sm:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">🏢</span>
                  <span className="text-xs sm:text-sm font-medium text-black">Corporate</span>
                </div>
              </div>

              {/* Creative Studios */}
              <div className="w-32 sm:w-36 lg:w-[180px] h-10 sm:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">🎨</span>
                  <span className="text-xs sm:text-sm font-medium text-black">Creative Studios</span>
                </div>
              </div>

              {/* Education */}
              <div className="w-32 sm:w-36 lg:w-[180px] h-10 sm:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">🏫</span>
                  <span className="text-xs sm:text-sm font-medium text-black">Education</span>
                </div>
              </div>
            </div>

            {/* Happy Operations Manager Benefits */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Happy Operations Manager :</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-center text-black text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                  Leads Managed Efficiently
                </li>
                <li className="flex items-center text-black text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                  Invoices Paid on Time
                </li>
                <li className="flex items-center text-black text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                  Efficient Visitor Control
                </li>
                <li className="flex items-center text-black text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                  Happy & Growing Community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>

      <TestimonialsSection />
      <div id="subscription">
        <SubscriptionPlansSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <FooterSection />

      {/* Zoho Sign Style Popup */}
      <ZohoSignPopup
        onBookDemo={() => {
          console.log('Book Demo clicked!');
          alert('Redirecting to demo booking page...');
        }}
        onNeedAssistance={() => {
          console.log('Need Assistance clicked!');
          alert('Opening support chat...');
        }}
        autoTrigger={true}
        triggerInterval={{ min: 180000, max: 300000 }} // 3-5 minutes (180,000-300,000 ms)
        customTitle="Can't find what you are looking for?"
      />
    </div>
  );
};