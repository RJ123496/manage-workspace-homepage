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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Main Form Container */}
      <div 
        className="bg-white rounded-2xl p-12 shadow-lg"
        style={{ 
          filter: 'drop-shadow(-2px 4px 4px rgba(0, 0, 0, 0.32))',
          width: '642px',
          height: '696px'
        }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-poppins font-semibold text-5xl leading-tight text-black mb-4">
            Get in Touch
          </h2>
          <p className="font-poppins text-xl leading-relaxed text-black">
            Fill out the form below to get in touch with us.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name Row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full h-15 px-4 border border-gray-500 rounded-lg font-poppins text-base text-gray-500 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                style={{ height: '60px' }}
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
                className="w-full h-15 px-4 border border-gray-500 rounded-lg font-poppins text-base text-gray-500 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                style={{ height: '60px' }}
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
              className="w-full h-15 px-4 border border-gray-500 rounded-lg font-poppins text-base text-gray-500 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              style={{ height: '60px' }}
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
              className="w-full h-15 px-4 border border-gray-500 rounded-lg font-poppins text-base text-gray-500 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              style={{ height: '60px' }}
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
              className="w-full px-4 py-4 border border-gray-500 rounded-lg font-poppins text-base text-gray-500 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
              style={{ height: '154px' }}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-70 text-white font-poppins text-xl rounded-lg transition-colors duration-200"
            style={{ 
              height: '62px',
              backgroundColor: '#B30D02'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-600 text-center font-poppins">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="text-red-600 text-center font-poppins">
              Please fill out all fields correctly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;