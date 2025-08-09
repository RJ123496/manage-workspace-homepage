import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { DemoBookingForm } from './DemoBookingForm';

export const FeaturesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const testimonials = [
    {
      quote: "Manage Workspace helped us move from spreadsheets to a scalable platform. We can now manage five coworking hubs with one dashboard.",
      name: "Mihir Rathi",
      title: "Regional Manager, Metro Desk Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The platform transformed how we handle workspace management. It's intuitive, efficient, and has significantly improved our operational workflow.",
      name: "David Johnson",
      title: "Operations Director, FlexSpace Solutions",
      image: require("../assets/Slide bar.png")
    },
    {
      quote: "We've seen a 40% increase in productivity since implementing Manage Workspace. The automation features are game-changing for our business.",
      name: "David Chen",
      title: "CEO, TechHub Innovations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const industries = [
    {
      id: 1,
      title: "Legal Firms",
      image: require("../assets/Features legal firms.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 2,
      title: "Manufacturing Industries",
      image: require("../assets/Manufacturing industuries.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 3,
      title: "Health Care Facilities",
      image: require("../assets/Healthcare facility.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 4,
      title: "Corporate Offices",
      image: require("../assets/Corparte office .png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 5,
      title: "Clinics",
      image: require("../assets/Clinics.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 6,
      title: "Hospitals",
      image: require("../assets/Hospital .png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 7,
      title: "Real Estate",
      image: require("../assets/Real estate.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 8,
      title: "Coworking Spaces",
      image: require("../assets/Co-Working Spaces.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 9,
      title: "Technology Startups",
      image: require("../assets/Tech start up.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 10,
      title: "Hospitality Industries",
      image: require("../assets/Hospitality industries.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 11,
      title: "Educational Institutions",
      image: require("../assets/Educational instution.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 12,
      title: "Construction Industries",
      image: require("../assets/Construction.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header onBookLiveClick={() => setIsDemoModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 min-h-screen flex items-center" style={{ background: 'linear-gradient(270deg, #B30D02 0%, #4D0601 100%)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <div 
                className="mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: '1.2',
                  color: '#FFFFFF'
                }}
              >
                Smart Workspace Solutions for Every Industry
              </div>
              <div 
                className="mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: '1.3',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                <ul className="space-y-2">
                  <li>• No two industries work in the same way</li>
                  <li>• Our platform is fully customizable</li>
                  <li>• Manage people, spaces, and data based on your needs</li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    window.location.href = '/#contact';
                  }}
                  className="bg-white text-[#B30D02] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                >
                  Let's talk
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
        </div>
      </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end items-end mb-0 order-first lg:order-last">
              <img 
                src={require("../assets/fetures page hero section.png")}
                alt="Woman in VR glasses looking at website pages"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-xl"
                style={{ marginBottom: 'clamp(-50px, -10vw, -100px)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4"
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 'clamp(24px, 4vw, 36px)',
                lineHeight: '1.3',
                color: '#B30D02'
              }}
            >
              Workspace Solutions for Every Sector
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl mx-auto">
              We help businesses across industries manage space, teams & resources
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 w-full max-w-xs sm:max-w-sm lg:max-w-md"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: 'clamp(12px, 2.5vw, 32px)',
                  gap: '12px',
                  background: '#FFFFFF',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  border: 'none'
                }}
              >
                {/* Image */}
                <div 
                  className="w-full rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border-0"
                  style={{
                    height: 'clamp(120px, 25vw, 240px)',
                    borderRadius: '12px',
                    border: 'none'
                  }}
                >
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-xl border-0"
                    style={{ border: 'none' }}
                  />
                </div>

                {/* Industry Title */}
                <h3
                  className="flex-shrink-0 border-0 w-full"
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.2vw, 20px)',
                    lineHeight: '1.3',
                    color: '#000000',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {industry.title}
                </h3>
                <p
                  className="flex-shrink-0 border-0 w-full"
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.8vw, 16px)',
                    lineHeight: '1.3',
                    color: 'rgba(0, 0, 0, 0.8)',
                    margin: 0,
                    padding: 0,
                    border: 'none'
                  }}
                >
                  Collaborate. Organize. Succeed
                </p>
                <div
                  className="flex-grow border-0 w-full"
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 'clamp(10px, 1.5vw, 14px)',
                    lineHeight: '1.4',
                    color: 'rgba(0, 0, 0, 0.8)',
                    margin: 0,
                    padding: 0,
                    border: 'none'
                  }}
                >
                  <ul className="space-y-1 sm:space-y-2 list-none border-0">
                    <li className="flex items-start border-0">
                      <span className="mr-1 sm:mr-2 mt-1 text-[#B30D02] font-bold border-0">•</span>
                      <span className="border-0">Efficiently organize client visits and approvals</span>
                    </li>
                    <li className="flex items-start border-0">
                      <span className="mr-1 sm:mr-2 mt-1 text-[#B30D02] font-bold border-0">•</span>
                      <span className="border-0">Track billable hours and manage expenses</span>
                    </li>
                    <li className="flex items-start border-0">
                      <span className="mr-1 sm:mr-2 mt-1 text-[#B30D02] font-bold border-0">•</span>
                      <span className="border-0">Coordinate meetings and events seamlessly</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#B30D02] to-[#4D0601] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p 
            className="text-white mb-8 sm:mb-12 max-w-4xl mx-auto"
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 'clamp(20px, 3.5vw, 36px)',
              lineHeight: '1.3',
              color: '#FFFFFF'
            }}
          >
            Trusted by teams across India to manage space, people, and productivity seamlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-white">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2">45</div>
              <div className="text-base sm:text-lg lg:text-xl">Locations</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2">35k+</div>
              <div className="text-base sm:text-lg lg:text-xl">Sq meters of workspace</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2">24/7</div>
              <div className="text-base sm:text-lg lg:text-xl">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Story Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#B30D02] mb-4">
              Client Success Story
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              How Real Teams Unlock Real Results with ManageWorkspace
            </p>
          </div>

          {/* Team Image and Text Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <span className="text-3xl mr-3">🏙️</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">Metro Desk Co.</h3>
                </div>
                <div className="space-y-3 text-gray-600 text-base lg:text-lg">
                  <p><strong>Industry:</strong> Real Estate & Co-working Operator</p>
                  <p><strong>Location:</strong> Hyderabad, India</p>
                  <p><strong>Team Size:</strong> 40+ (facility managers, client service, tech team)</p>
                  <p><strong>Workspace Type:</strong> Multi-location coworking hubs in 5 cities</p>
                </div>
              </div>
            </div>

            {/* Right Side - Team Image */}
            <div className="order-1 lg:order-2 flex justify-end">
              <img 
                src={require('../assets/5 joyful .png')}
                alt="Joyful five colleagues" 
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
          </div>

          {/* Main Content Container */}
          <div className="mb-12">
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Challenge Column */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🚧</span>
                  <h4 className="text-xl font-bold text-black">The Challenge</h4>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm lg:text-base">
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Manual check-ins across locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Difficulty managing meeting room bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>No centralized expense tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Lack of unified membership system</span>
                  </li>
                </ul>
              </div>

              {/* Solution Column */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚡</span>
                  <h4 className="text-xl font-bold text-black">Our Solution</h4>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm lg:text-base">
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>QR-based visitor management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Real-time room booking system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Smart membership pass system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Centralized admin dashboard</span>
                  </li>
                </ul>
              </div>

              {/* Results Column */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📈</span>
                  <h4 className="text-xl font-bold text-black">Results in 3 Months</h4>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm lg:text-base">
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>100% secure guest flow tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>90% reduction in booking conflicts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Simplified branch reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B30D02] mr-2 mt-1">•</span>
                    <span>Operational consistency across all locations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="text-center">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div 
                        className="bg-[#B30D02] rounded-2xl p-6 sm:p-8 text-white shadow-xl"
                        style={{
                          fontFamily: 'Poppins',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: 'clamp(16px, 2.5vw, 20px)',
                          lineHeight: '1.6',
                          color: '#FFFFFF'
                        }}
                      >
                        {/* Quote Icon */}
                        <div className="flex items-start justify-center mb-4">
                          <div className="bg-white rounded-full p-2 mr-4">
                            <svg className="w-6 h-6 text-[#B30D02]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Quote Text */}
                        <p className="mb-6 italic leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        
                        {/* Separator */}
                        <div className="w-full h-px bg-white/30 mb-4"></div>
                        
                        {/* Author Info */}
                        <div className="flex items-center justify-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm opacity-90">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#B30D02] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 z-10"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#B30D02] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 z-10"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#B30D02] scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#FFECEA]">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <img 
                src={require('../assets/New transparent logo.png')} 
                alt="Manage Workspace Logo" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>

            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-md mx-auto px-4">
              Get started with your business - we will manage your workspace
            </p>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-sm sm:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#b30d02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@manageworkspace.com" className="hover:text-[#b30d02] transition-colors">
                  contact@manageworkspace.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#b30d02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-[#b30d02] transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            {/* Email Signup */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row max-w-md w-full px-4 sm:px-0">
                <div className="relative flex-1 mb-3 sm:mb-0">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full px-10 sm:px-12 py-3 rounded-3xl sm:rounded-l-3xl sm:rounded-r-none border border-gray-300 focus:outline-none focus:border-[#b30d02] text-sm sm:text-base"
                  />
                  <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
                <button className="bg-[#b30d02] text-white px-6 sm:px-8 py-3 rounded-3xl sm:rounded-l-none sm:rounded-r-3xl hover:bg-red-700 transition-colors text-sm sm:text-base font-medium">
                  Try Now
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="mb-6 sm:mb-8">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
                <a href="#features" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">Features</a>
                <a href="#services" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">Services</a>
                <a href="#subscription" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">Plans & Pricings</a>
                <a href="#about" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">About Us</a>
                <a href="#testimonials" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">Client Reviews</a>
                <a href="#faq" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">FAQ</a>
                <a href="#hero" className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center">Contact</a>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#b30d02] py-3 sm:py-4 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm gap-3 sm:gap-0">
            <p className="text-center sm:text-left">© 2025 Manage Workspace. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button className="hover:text-gray-200 transition-colors cursor-pointer text-center">Terms of Service</button>
              <button className="hover:text-gray-200 transition-colors cursor-pointer text-center">Privacy Policy</button>
              <button className="hover:text-gray-200 transition-colors cursor-pointer text-center">Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Booking Modal */}
      <DemoBookingForm 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}; 