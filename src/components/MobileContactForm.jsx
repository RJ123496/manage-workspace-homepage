import React, { useState } from 'react';

const MobileContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    companyEmail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-[320px] mx-auto">
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

        {/* Form Fields */}
        <div className="space-y-4">
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
                className="w-full border border-gray-300 rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                style={{
                  height: '44px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
              />
            </div>

            {/* Mobile No Input */}
            <div className="flex-1">
              <input
                type="tel"
                name="mobileNo"
                placeholder="Mobile No"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                style={{
                  height: '44px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 400
                }}
              />
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
              className="w-full border border-gray-300 rounded-xl px-3 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              style={{
                height: '44px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              onClick={handleSubmit}
              className="w-full text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              style={{
                height: '44px',
                backgroundColor: '#B30D02',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 500
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContactForm; 