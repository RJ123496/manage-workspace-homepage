import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, mobile, message } = formData;
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !mobile.trim() || !message.trim()) {
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });
      
      // Auto-dismiss success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      {/* Main Form Container */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 w-full relative border-2 border-gray-200 overflow-visible">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="font-lato font-bold text-black mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Get in Touch
          </h2>
          <p className="font-lato text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            Fill out the form below to get in touch with us.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* First Name & Last Name Row */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-[#969696] rounded-lg font-sans text-sm sm:text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200 min-h-[44px] sm:min-h-[50px] md:min-h-[56px] lg:min-h-[66px]"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-[#969696] rounded-lg font-sans text-sm sm:text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200 min-h-[44px] sm:min-h-[50px] md:min-h-[56px] lg:min-h-[66px]"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Company mail ID"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-[#969696] rounded-lg font-sans text-sm sm:text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200 min-h-[44px] sm:min-h-[50px] md:min-h-[56px] lg:min-h-[66px]"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-[#969696] rounded-lg font-sans text-sm sm:text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200 min-h-[44px] sm:min-h-[50px] md:min-h-[56px] lg:min-h-[66px]"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-[#969696] rounded-lg font-sans text-sm sm:text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 resize-none transition-all duration-200 min-h-[100px] sm:min-h-[120px] md:min-h-[132px]"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white font-sans text-sm sm:text-base md:text-lg rounded-lg transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#B30D02]/30 disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px] sm:min-h-[50px] md:min-h-[56px] lg:min-h-[62px] bg-[#B30D02] hover:bg-[#8b0a01]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm sm:text-base">Submitting...</span>
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 text-green-600 text-center font-lato text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-3 bg-green-100 rounded-md shadow-sm border border-green-200">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-4 text-red-600 text-center font-lato text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-3 bg-red-100 rounded-md shadow-sm border border-red-200">
              ✗ Please fill out all fields correctly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;