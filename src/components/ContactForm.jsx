import React, { useState } from 'react';

// Reusable Form Components
const FormSelect = ({ name, placeholder, value, onChange, options, error, disabled }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
<<<<<<< HEAD
      className={`w-full h-9 lg:h-8 px-2.5 bg-[#FAFAFA] rounded-lg font-poppins text-sm lg:text-xs text-black/80 placeholder-black/50 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 border-0 ${
=======
      className={`w-full h-12 px-4 bg-[#FAFAFA] rounded-lg font-poppins text-sm text-black/80 placeholder-black/50 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 border-0 ${
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
        error ? 'border-2 border-red-300' : ''
      }`}
      aria-describedby={error ? `${name}-error` : undefined}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg className="w-5 h-5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    {error && (
      <p id={`${name}-error`} className="absolute top-full left-0 text-white text-xs mt-1" role="alert">
        {error}
      </p>
    )}
  </div>
);

const FormInput = ({ type, name, placeholder, value, onChange, error, disabled }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
<<<<<<< HEAD
      className={`w-full h-9 lg:h-8 px-2.5 bg-[#FAFAFA] rounded-lg font-poppins text-sm lg:text-xs text-black/80 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 ${
=======
      className={`w-full h-12 px-4 bg-[#FAFAFA] rounded-lg font-poppins text-sm text-black/80 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 ${
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
        error ? 'border-2 border-red-300' : ''
      }`}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && (
      <p id={`${name}-error`} className="absolute top-full left-0 text-white text-xs mt-1" role="alert">
        {error}
      </p>
    )}
  </div>
);

const FilterButton = ({ isActive, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
<<<<<<< HEAD
    className={`px-2.5 py-1 rounded-2xl font-poppins text-xs transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-white/20 min-h-[32px] ${
=======
    className={`px-4 py-2 rounded-2xl font-poppins text-xs transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-white/20 min-h-[44px] ${
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
      isActive 
        ? 'bg-[#FAFAFA] text-black/70' 
        : 'border border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#FAFAFA]/10'
    }`}
    aria-pressed={isActive}
  >
    {label}
  </button>
);

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    fullName: '',
    service: '',
    mobileNumber: ''
  });

  const [selectedFilter, setSelectedFilter] = useState('clinic');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form options
  const serviceOptions = [
    { value: 'legal', label: 'Legal Services' },
    { value: 'health', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const locationOptions = [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'houston', label: 'Houston' },
    { value: 'phoenix', label: 'Phoenix' }
  ];

  const filterOptions = [
    { value: 'clinic', label: 'Clinic' },
    { value: 'coworking', label: 'Co-wor.' },
    { value: 'realestate', label: 'Real Est.' },
    { value: 'startups', label: 'Startups' }
  ];

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

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Service is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else {
      const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
      if (!phoneRegex.test(formData.mobileNumber.trim())) {
        newErrors.mobileNumber = 'Please enter a valid phone number';
      }
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
    setErrors({});

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Contact Form - ${formData.fullName}`,
          body: `
            Location: ${formData.location}
            Full Name: ${formData.fullName}
            Service: ${formData.service}
            Mobile Number: ${formData.mobileNumber}
            Filter: ${selectedFilter}
          `,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      await response.json();
      
      // Clear form
      setFormData({
        location: '',
        fullName: '',
        service: '',
        mobileNumber: ''
      });
      
      alert('Form submitted successfully!');
      
    } catch (error) {
      alert(`Form submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <div id="contact" className="w-full max-w-2xl mx-auto">
      <div className="bg-[#B30D02] rounded-lg p-4 sm:p-6 lg:p-4">
        
        {/* Header */}
        <header className="text-center mb-3 lg:mb-1">
          <h2 className="font-poppins font-semibold text-lg sm:text-xl lg:text-base text-white mb-1 lg:mb-0">
            Get in Touch
          </h2>
          <p className="font-poppins text-sm lg:text-xs text-white/90">
=======
    <div id="contact" className="w-full max-w-[936px] mx-auto">
      <div className="bg-[#B30D02] rounded-2xl shadow-[0px_12px_24px_rgba(0,0,0,0.1)] p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8">
          <h2 className="font-poppins font-semibold text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3">
            Get in Touch
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-white/90">
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
            Fill out the form below to get in touch with us.
          </p>
        </header>

<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-1">
          
          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 lg:mb-2">
=======
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
            {/* Service Dropdown */}
            <FormSelect
              name="service"
              placeholder="Enter Service"
              value={formData.service}
              onChange={handleInputChange}
              options={serviceOptions}
              error={errors.service}
              disabled={isSubmitting}
            />
            
            {/* Location Dropdown */}
            <FormSelect
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              options={locationOptions}
              error={errors.location}
              disabled={isSubmitting}
            />
            
            {/* Full Name Input */}
            <FormInput
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              disabled={isSubmitting}
            />
            
            {/* Mobile Number Input */}
            <FormInput
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              error={errors.mobileNumber}
              disabled={isSubmitting}
            />
          </div>

          {/* Filter Section */}
<<<<<<< HEAD
          <div className="mb-3 lg:mb-2">
            <div className="flex flex-wrap gap-2 justify-end">
=======
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-poppins text-sm sm:text-base text-white">
              Filter:
            </span>
            
            <div className="flex flex-wrap gap-2">
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
              {filterOptions.map((filter) => (
                <FilterButton
                  key={filter.value}
                  isActive={selectedFilter === filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  label={filter.label}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
<<<<<<< HEAD
              className="w-full sm:w-auto min-w-[160px] h-9 lg:h-8 px-5 bg-[#FFB1B1] rounded-xl font-poppins font-semibold text-sm lg:text-xs text-white transition-all duration-200 hover:bg-[#FFB1B1]/90 focus:ring-4 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
=======
              className="w-full sm:w-auto min-w-[160px] h-12 px-6 bg-[#FFB1B1] rounded-xl font-poppins font-semibold text-base text-white transition-all duration-200 hover:bg-[#FFB1B1]/90 focus:ring-4 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> 0cd3f66e6ff0434e559c2cc841d5fd124385a22d
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};