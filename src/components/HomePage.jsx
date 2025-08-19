import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import ContactForm from "./ContactForm";
import MobileContactForm from "./MobileContactForm";
import { DemoBookingForm } from "./DemoBookingForm";

import { AboutUsSection } from "./AboutUsSection";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { FooterSection } from "./FooterSection";
import { SubscriptionPlansSection } from "./SubscriptionPlansSection";
import { TestimonialsSection } from "./TestimonialsSection";
import ZohoSignPopup from "./ZohoSignPopup";

export const HomePage = () => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Check for openDemo parameter in URL and hash navigation
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('openDemo') === 'true') {
      setIsDemoModalOpen(true);
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    if (urlParams.get('scrollTo') === 'industries') {
      // Clean up the URL first
      window.history.replaceState({}, document.title, window.location.pathname);
      // Scroll to services section after a short delay
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    
    // Handle hash navigation (e.g., /#features, /#about, etc.)
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # symbol
      // Wait for the page to fully load, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Increased delay to ensure page is fully rendered
    }
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#FFECEA] w-full">
      <Header onBookLiveClick={() => setIsDemoModalOpen(true)} />

      {/* Hero Section - Enhanced Responsive Layout */}
      <section id="hero" className="hero-section relative w-full bg-[#FFECEA] flex items-center justify-center min-h-[85vh] sm:min-h-[90vh] md:min-h-screen lg:min-h-screen">
        
        {/* Contact Section ID for Navigation */}
        <div id="contact" className="sr-only"></div>
        
        {/* Status Bar for Mobile (393px) */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#FFECEA] px-4 py-2 flex justify-between items-center md:hidden">
          <span className="text-black font-medium text-sm">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-2 bg-black rounded-sm"></div> {/* Signal */}
            <div className="w-3 h-2 bg-black rounded-sm"></div> {/* WiFi */}
            <div className="w-6 h-3 bg-black rounded-sm"></div> {/* Battery */}
          </div>
        </div>
        
        {/* Main Hero Container */}
        <div className="hero-container relative w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center pt-16 md:pt-0">
          
          {/* Mobile Layout (320px-767px) - Single Column */}
          <div className="w-full max-w-[393px] mx-auto md:hidden">
            
            {/* Hero Image - Central, Prominent */}
            <div className="hero-image-container mb-6 sm:mb-8 flex justify-center">
              <img 
                src={require("../assets/hero/new hero section image .png")}
                alt="Four happy colleagues"
                className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="hero-main-title font-lato font-bold text-xl sm:text-2xl leading-tight text-black mb-3 sm:mb-4 text-center px-2">
              Automate the Routine.<br />
              Focus on <span className="text-[#B30D02]">Growth.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="hero-subtitle font-lato font-normal text-xs sm:text-sm text-[#969696] mb-4 sm:mb-6 text-center leading-relaxed px-4">
              Manage visitors & leads, attendance & memberships, events, bookings & expenses - all in one platform.
            </p>
            
            {/* Action Buttons - Side by Side, Equal Width */}
            <div className="hero-buttons flex gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex-1 bg-transparent text-[#B30D02] border-2 border-[#B30D02] font-lato font-semibold px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl hover:bg-[#B30D02] hover:text-white transition-all duration-300 text-xs sm:text-sm min-h-[44px]"
              >
                Get Started
              </button>
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 bg-transparent text-[#B30D02] border-2 border-[#B30D02] font-lato font-semibold px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl hover:bg-[#B30D02] hover:text-white transition-all duration-300 text-xs sm:text-sm flex items-center justify-center min-h-[44px]"
              >
                <span className="w-2 h-2 bg-[#B30D02] rounded-full mr-2"></span>
                Book Demo
              </button>
            </div>
            
            {/* Mobile Contact Form */}
            <div className="flex justify-center px-4">
              <MobileContactForm />
            </div>
          </div>
          
          {/* iPad Layout (768px-1279px) */}
          <div className="hidden md:block xl:hidden w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center text-center">
              
              {/* Hero Image - iPad Optimized */}
              <div className="hero-image-container mb-6 sm:mb-8">
                <img 
                  src={require("../assets/hero/new hero section image .png")}
                  alt="Four happy colleagues"
                  className="w-[400px] sm:w-[450px] h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              
              {/* Main Headline */}
              <h1 className="hero-main-title font-lato font-bold text-3xl sm:text-4xl leading-tight text-black mb-4 sm:mb-6 max-w-[600px] px-4">
                Automate the Routine.<br />
                Focus on <span className="text-[#B30D02]">Growth.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="hero-subtitle font-lato font-normal text-base sm:text-lg text-[#969696] mb-6 sm:mb-8 max-w-[650px] leading-relaxed px-6">
                Manage visitors & leads, attendance & memberships, events, bookings & expenses - all in one platform.
              </p>
              
              {/* Action Buttons */}
              <div className="hero-buttons flex gap-4 sm:gap-6 mb-6 sm:mb-8">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-transparent text-[#B30D02] border-2 border-[#B30D02] font-lato font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#B30D02] hover:text-white transition-all duration-300 text-base sm:text-lg min-h-[44px]"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-transparent text-[#B30D02] border-2 border-[#B30D02] font-lato font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#B30D02] hover:text-white transition-all duration-300 text-base sm:text-lg flex items-center min-h-[44px]"
                >
                  <span className="w-2 h-2 bg-[#B30D02] rounded-full mr-2"></span>
                  Book Live Demo
                </button>
              </div>
              
              {/* iPad Contact Form */}
              <div className="flex justify-center">
                <ContactForm key="ipad-contact-form" />
              </div>
            </div>
          </div>
          
          {/* Desktop Layout (1280px+) */}
          <div className="hidden xl:flex w-full lg:flex-row items-center justify-between">
            
            {/* Left Hero Content */}
            <div className="left-hero-content w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
              
              {/* Main Headline */}
              <h1 className="hero-main-title font-lato font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight text-black mb-6 max-w-[558px]">
                Automate the Routine.<br />
                Focus on <span className="text-[#B30D02]">Growth.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="hero-subtitle font-lato font-normal text-lg lg:text-xl xl:text-2xl text-[#969696] mb-8 max-w-[550px] leading-relaxed">
                Manage visitors & leads, attendance & memberships, events, bookings & expenses - all in one platform.
              </p>
              
              {/* Hero Image - Larger for Desktop */}
              <div className="hero-image-container mb-8">
                <img 
                  src={require("../assets/hero/new hero section image .png")}
                  alt="Four happy colleagues"
                  className="w-[450px] lg:w-[500px] xl:w-[550px] h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="get-started-btn bg-transparent text-[#B30D02] border-2 border-[#B30D02] font-lato font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-[#B30D02] hover:text-white transition-all duration-300 h-12 min-h-[44px] text-base sm:text-lg"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="book-demo-btn bg-transparent text-[#B30D02] border-2 border-[#B30D02] font-lato font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-[#B30D02] hover:text-white transition-all duration-300 h-12 flex items-center min-h-[44px] text-base sm:text-lg"
                >
                  <span className="w-2 h-2 bg-[#B30D02] rounded-full mr-2"></span>
                  Book Live Demo
                </button>
              </div>
            </div>
            
            {/* Right Contact Form */}
            <div className="right-contact-form w-full lg:w-1/2 flex justify-center lg:justify-end">
              <ContactForm key="hero-contact-form" />
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
      
      {/* Services Section - Enhanced Responsiveness */}
      <section id="services" className="w-full py-8 sm:py-10 md:py-12 lg:py-16" style={{ background: 'linear-gradient(135deg, #B30D02 0%, #4D0601 100%)' }}>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* Left Section - Main Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8 rounded-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Smart Workspace Tools for Every Industry.
              </h2>
              <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 lg:mb-8 leading-relaxed font-normal font-lato">
                Manage Workspace offers tailor-made tools for each from visitor tracking to event coordination and resource booking.
              </p>
              
              {/* Happy Operations Manager Benefits */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 sm:mb-3 md:mb-4">Happy Operations Manager :</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-white text-xs sm:text-sm md:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Leads Managed Efficiently
                  </li>
                  <li className="flex items-center text-white text-xs sm:text-sm md:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Invoices Paid on Time
                  </li>
                  <li className="flex items-center text-white text-xs sm:text-sm md:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Efficient Visitor Control
                  </li>
                  <li className="flex items-center text-white text-xs sm:text-sm md:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Happy & Growing Community
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  navigate('/features');
                  window.scrollTo(0, 0);
                }}
                className="w-fit px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white text-[#B30D02] rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center cursor-pointer text-xs sm:text-sm md:text-base min-h-[44px]"
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full mb-4 sm:mb-6 lg:mb-8 mt-auto pt-4 sm:pt-6 md:pt-8 lg:pt-12">

                {/* Legal Firms */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">👨‍💼</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Legal Firms</span>
                  </div>
                </div>

                {/* Manufacturing */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🏗️</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Manufacturing</span>
                  </div>
                </div>

                {/* Healthcare */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">👨‍⚕️</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Healthcare</span>
                  </div>
                </div>

                {/* Corporate */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🏢</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Corporate</span>
                  </div>
                </div>

                {/* Creative Studios */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🎨</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Creative Studios</span>
                  </div>
                </div>

                {/* Education */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🏫</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Education</span>
                  </div>
                </div>

                {/* Clinics */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🏥</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Clinics</span>
                  </div>
                </div>

                {/* Startups */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🚀</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Startups</span>
                  </div>
                </div>

                {/* Hospitality */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🏨</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Hospitality</span>
                  </div>
                </div>

                {/* Real Estate */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🏠</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Real-Estate</span>
                  </div>
                </div>

                {/* Co-Working Space */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">💼</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Co-Working Space</span>
                  </div>
                </div>

                {/* Construction */}
                <div className="w-full h-8 sm:h-10 md:h-12 lg:h-[48px] bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center px-1 sm:px-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1 sm:mr-2">🔨</span>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-black truncate">Construction</span>
                  </div>
                </div>
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
          setIsDemoModalOpen(true);
        }}
        onNeedAssistance={() => {
          // TODO: Implement support chat functionality
          alert('Opening support chat...');
        }}
        autoTrigger={true}
        triggerInterval={{ min: 300000, max: 300000 }} // 5 minutes (300,000 milliseconds)
        customTitle="Can't find what you are looking for?"
      />

      {/* Demo Booking Modal */}
      <DemoBookingForm 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
};