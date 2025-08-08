import React, { useState } from 'react';
import MobileContactForm from './MobileContactForm';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    companyMail: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.mobileNo.trim()) {
      errors.mobileNo = 'Mobile number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.mobileNo.replace(/\s/g, ''))) {
      errors.mobileNo = 'Please enter a valid mobile number';
    }
    
    if (!formData.companyMail.trim()) {
      errors.companyMail = 'Company email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyMail)) {
      errors.companyMail = 'Please enter a valid email address';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        fullName: '',
        mobileNo: '',
        companyMail: ''
      });
      setFormErrors({});
      
      // Show success message (you can implement a toast notification here)
      alert('Thank you! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 relative">
      {/* Mobile Status Bar */}
      <div className="bg-pink-50 px-4 py-2 flex justify-between items-center">
        <span className="text-black font-medium text-sm">9:41</span>
        <div className="flex items-center space-x-1">
          {/* Signal bars */}
          <div className="flex space-x-0.5">
            <div className="w-1 h-2 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-4 bg-black rounded-sm"></div>
            <div className="w-1 h-5 bg-black rounded-sm"></div>
          </div>
          {/* WiFi icon */}
          <div className="w-4 h-3 border border-black rounded-sm relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-1 border-t-2 border-black rounded-full"></div>
            </div>
          </div>
          {/* Battery icon */}
          <div className="w-6 h-3 border border-black rounded-sm relative">
            <div className="absolute right-0.5 top-0.5 w-0.5 h-2 bg-black rounded-sm"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-2 bg-black rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">MW</span>
          </div>
          <span className="text-sm font-medium text-gray-900">Manage Workspace</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="p-2 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className={`w-6 h-0.5 bg-red-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-red-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-red-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-4 z-50 min-w-48">
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-700 hover:text-red-700 text-sm font-medium transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-red-700 text-sm font-medium transition-colors">Features</a>
            <a href="#services" className="text-gray-700 hover:text-red-700 text-sm font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-red-700 text-sm font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-700 text-sm font-medium transition-colors">Contact</a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="max-w-md mx-auto lg:max-w-6xl">
          
          {/* Hero Section */}
          <section className="text-center mb-12 lg:mb-16">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Automate the Routine.
              <br />
              Focus on <span className="text-red-700">Growth.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Manage visitors & leads, attendance & memberships, events, bookings & expenses - all in one platform.
            </p>

            {/* Hero Image */}
            <div className="mb-8 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
                {/* 3D Team Illustration Placeholder */}
                <div className="text-center relative z-10">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 relative">
                    {/* Table */}
                    <div className="w-32 h-20 bg-yellow-200 rounded-lg absolute bottom-8"></div>
                    
                    {/* Team Members */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Standing person (back) */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-pink-300 rounded-full mb-2"></div>
                        <div className="w-6 h-12 bg-pink-400 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Seated people */}
                      <div className="absolute -bottom-2 -left-4">
                        <div className="w-6 h-6 bg-blue-300 rounded-full mb-1"></div>
                        <div className="w-5 h-8 bg-blue-400 rounded-full mx-auto"></div>
                      </div>
                      
                      <div className="absolute -bottom-2 -right-4">
                        <div className="w-6 h-6 bg-green-300 rounded-full mb-1"></div>
                        <div className="w-5 h-8 bg-green-400 rounded-full mx-auto"></div>
                      </div>
                      
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-purple-300 rounded-full mb-1"></div>
                        <div className="w-5 h-8 bg-purple-400 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Team Collaboration</p>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-200 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="flex-1 bg-red-700 text-white py-3 px-6 rounded-xl font-semibold text-sm sm:text-base hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2">
                Get Started
              </button>
              <button className="flex-1 border-2 border-red-700 text-red-700 py-3 px-6 rounded-xl font-semibold text-sm sm:text-base hover:bg-red-700 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2">
                <span className="w-2 h-2 bg-red-700 rounded-full mr-2"></span>
                Book Live Demo
              </button>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="md:flex md:justify-center">
            {/* Mobile Form */}
            <div className="block md:hidden">
              <MobileContactForm />
            </div>

            {/* Desktop Form */}
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-w-md w-full mx-auto lg:mx-0">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fill out the form below to get in touch with us.
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Mobile Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 text-sm transition-colors ${
                          formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
                      />
                      {formErrors.fullName && (
                        <p id="fullName-error" className="mt-1 text-sm text-red-600">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNo"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        placeholder="Mobile No"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 text-sm transition-colors ${
                          formErrors.mobileNo ? 'border-red-500' : 'border-gray-300'
                        }`}
                        aria-describedby={formErrors.mobileNo ? 'mobileNo-error' : undefined}
                      />
                      {formErrors.mobileNo && (
                        <p id="mobileNo-error" className="mt-1 text-sm text-red-600">
                          {formErrors.mobileNo}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Mail */}
                  <div>
                    <label htmlFor="companyMail" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="companyMail"
                      name="companyMail"
                      value={formData.companyMail}
                      onChange={handleInputChange}
                      placeholder="Company mail ID"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 text-sm transition-colors ${
                        formErrors.companyMail ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-describedby={formErrors.companyMail ? 'companyMail-error' : undefined}
                    />
                    {formErrors.companyMail && (
                      <p id="companyMail-error" className="mt-1 text-sm text-red-600">
                        {formErrors.companyMail}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-sm sm:text-base hover:bg-red-800 transition-colors duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* iPhone Home Indicator (Mobile Only) */}
      <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full mb-2"></div>
    </div>
  );
};

export default LandingPage; 