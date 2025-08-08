import React, { useState } from 'react';

const ResponsiveHeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    companyMail: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#FFECEA] relative">
      {/* Mobile Status Bar */}
      <div className="bg-[#FFECEA] px-4 py-2 flex justify-between items-center">
        <span className="text-black font-medium">9:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
        </div>
      </div>

      {/* Header with Logo and Menu */}
      <header className="px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#B30D02] rounded-lg flex items-center justify-center mr-2">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-sm font-medium text-black">Manage Workspace</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-6 h-0.5 bg-[#B30D02]"></div>
            <div className="w-6 h-0.5 bg-[#B30D02]"></div>
            <div className="w-6 h-0.5 bg-[#B30D02]"></div>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-700 hover:text-[#B30D02] text-sm">Home</a>
            <a href="#features" className="text-gray-700 hover:text-[#B30D02] text-sm">Features</a>
            <a href="#services" className="text-gray-700 hover:text-[#B30D02] text-sm">Services</a>
            <a href="#about" className="text-gray-700 hover:text-[#B30D02] text-sm">About</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="max-w-md mx-auto">
          
          {/* Main Headline */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Automate the Routine.
            </h1>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Focus on <span className="text-[#B30D02]">Growth.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-sm text-black text-center mb-8 leading-relaxed">
            Manage visitors & leads, attendance & memberships, events, bookings & expenses - all in one platform.
          </p>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-lg relative">
              {/* 3D Team Illustration Placeholder */}
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-2">
                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                      <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                    </div>
                    <div className="w-16 h-2 bg-yellow-300 rounded mx-auto"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Team Collaboration</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-8">
            <button className="flex-1 bg-[#B30D02] text-white py-3 px-4 rounded-xl font-semibold text-sm">
              Get Started
            </button>
            <button className="flex-1 border-2 border-[#B30D02] text-[#B30D02] py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center">
              <span className="w-2 h-2 bg-[#B30D02] rounded-full mr-2"></span>
              Book Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Form Header */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-black mb-2">
                Get in Touch
              </h2>
              <p className="text-sm text-black">
                Fill out the form below to get in touch with us.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Mobile Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B30D02] text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    placeholder="Mobile No"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B30D02] text-sm"
                  />
                </div>
              </div>

              {/* Company Mail */}
              <div>
                <input
                  type="email"
                  name="companyMail"
                  value={formData.companyMail}
                  onChange={handleInputChange}
                  placeholder="Company mail ID"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B30D02] text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#B30D02] text-white py-3 px-6 rounded-lg font-semibold text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* iPhone Home Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full mb-2"></div>
    </div>
  );
};

export default ResponsiveHeroSection; 