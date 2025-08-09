import React, { useState } from 'react';

const MobileContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    companyEmail: ''
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = 'Mobile number is required';
    } else if (!/^[+]?[1-9][\d]{0,15}$/.test(formData.mobileNo.replace(/\s/g, ''))) {
      newErrors.mobileNo = 'Please enter a valid mobile number';
    }
    
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Please enter a valid email address';
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
        fullName: '',
        mobileNo: '',
        companyEmail: ''
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
        className="bg-white rounded-2xl p-6 shadow-lg"
        style={{
          filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1))'
        }}
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
          {/* First Row - Full Name and Mobile No */}
          <div className="flex gap-3">
            {/* Full Name Input */}
            <div className="flex-1">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                  errors.fullName 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                    : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
                }`}
                style={{
                  height: '44px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.fullName}</p>
              )}
            </div>

            {/* Mobile No Input */}
            <div className="flex-1">
              <input
                type="tel"
                name="mobileNo"
                placeholder="Mobile No"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                  errors.mobileNo 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                    : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
                }`}
                style={{
                  height: '44px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
                required
              />
              {errors.mobileNo && (
                <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.mobileNo}</p>
              )}
            </div>
          </div>

          {/* Company Email Input */}
          <div>
            <input
              type="email"
              name="companyEmail"
              placeholder="Company mail ID"
              value={formData.companyEmail}
              onChange={handleInputChange}
              className={`w-full border rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                errors.companyEmail 
                  ? 'border-red-500 focus:border-red-600 focus:ring-red-600' 
                  : 'border-gray-300 focus:border-red-600 focus:ring-red-600'
              }`}
              style={{
                height: '44px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400
              }}
              required
            />
            {errors.companyEmail && (
              <p className="text-red-500 text-xs mt-1 ml-1 error-message">{errors.companyEmail}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                height: '44px',
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