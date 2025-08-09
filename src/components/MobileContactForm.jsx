import React, { useState } from 'react';

const MobileContactForm = () => {
  const [formData, setFormData] = useState({
    personName: '',
    coworkingSpaceName: '',
    numberOfLocations: '',
    mobileNumber: '',
    emailId: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.personName.trim()) {
      newErrors.personName = 'Person name is required';
    }
    
    if (!formData.coworkingSpaceName.trim()) {
      newErrors.coworkingSpaceName = 'Coworking space name is required';
    }
    
    if (!formData.numberOfLocations.trim()) {
      newErrors.numberOfLocations = 'Number of locations is required';
    } else {
      const numLocations = parseInt(formData.numberOfLocations);
      if (isNaN(numLocations) || numLocations < 1) {
        newErrors.numberOfLocations = 'Please enter a valid number (1 or more)';
      }
    }
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid mobile number';
    }
    
    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
      newErrors.emailId = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus('success');
      setFormData({
        personName: '',
        coworkingSpaceName: '',
        numberOfLocations: '',
        mobileNumber: '',
        emailId: ''
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
    <div className="w-full max-w-[320px] mx-auto mobile-contact-form">
      {/* Form Container - White card with subtle shadow, rounded corners */}
      <div 
        className="bg-white rounded-2xl p-6"
      >
        {/* Form Title */}
        <div className="text-center mb-4">
          <h2 
            className="text-black font-semibold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: 600
            }}
          >
            Get in Touch
          </h2>
        </div>

        {/* Form Subtitle */}
        <div className="text-center mb-6">
          <p 
            className="text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              lineHeight: '16px',
              fontWeight: 400,
              color: '#666666'
            }}
          >
            Fill out the form below to get in touch with us.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Row - Person Name and Coworking Space Name */}
          <div className="flex gap-3">
            {/* Person Name Input */}
            <div className="flex-1">
              <input
                type="text"
                name="personName"
                placeholder="Person Name"
                value={formData.personName}
                onChange={handleInputChange}
                className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                  errors.personName 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                    : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
                }`}
                style={{
                  height: '40px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
                required
              />
              {errors.personName && (
                <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.personName}</p>
              )}
            </div>

            {/* Coworking Space Name Input */}
            <div className="flex-1">
              <input
                type="text"
                name="coworkingSpaceName"
                placeholder="Coworking Space Name"
                value={formData.coworkingSpaceName}
                onChange={handleInputChange}
                className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                  errors.coworkingSpaceName 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                    : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
                }`}
                style={{
                  height: '40px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
                required
              />
              {errors.coworkingSpaceName && (
                <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.coworkingSpaceName}</p>
              )}
            </div>
          </div>

          {/* Second Row - Number of Locations and Mobile Number */}
          <div className="flex gap-3">
            {/* Number of Locations Input */}
            <div className="flex-1">
              <input
                type="number"
                name="numberOfLocations"
                placeholder="Number of Locations"
                value={formData.numberOfLocations}
                onChange={handleInputChange}
                className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                  errors.numberOfLocations 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                    : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
                }`}
                style={{
                  height: '40px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
                required
              />
              {errors.numberOfLocations && (
                <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.numberOfLocations}</p>
              )}
            </div>

            {/* Mobile Number Input */}
            <div className="flex-1">
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                  errors.mobileNumber 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                    : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
                }`}
                style={{
                  height: '40px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
                required
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.mobileNumber}</p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="emailId"
              placeholder="Email ID"
              value={formData.emailId}
              onChange={handleInputChange}
              className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                errors.emailId 
                  ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                  : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
              }`}
              style={{
                height: '40px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400
              }}
              required
            />
            {errors.emailId && (
              <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.emailId}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 mt-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                height: '40px',
                backgroundColor: '#B30D02',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 500
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg status-message">
            <p className="text-green-700 text-sm font-medium text-center">
              ✓ Thank you! Your message has been sent successfully.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg status-message">
            <p className="text-red-700 text-sm font-medium text-center">
              ✗ Something went wrong. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileContactForm; 