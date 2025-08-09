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
    <div className="relative w-full max-w-2xl">
      {/* Main Form Container */}
                                                       <div 
           className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-[642px] relative"
           style={{
             width: '642px',
             height: '650px',
             background: '#FFFFFF',
             borderRadius: '16px'
           }}
         >
                                   {/* Header */}
          <div className="mb-6 text-center">
            <h2 
              className="font-poppins font-semibold text-black"
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '72px',
                color: '#000000',
                width: '304px',
                height: '72px',
                margin: '0 auto'
              }}
            >
              Get in Touch
            </h2>
            <p 
              className="font-poppins text-black"
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                color: '#000000',
                width: '450px',
                height: '30px',
                margin: '0 auto',
                marginTop: '8px'
              }}
            >
              Fill out the form below to get in touch with us.
            </p>
          </div>

                                   {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
                     {/* First Name & Last Name Row */}
           <div className="flex gap-4">
             <div className="flex-1">
               <input
                 type="text"
                 name="firstName"
                 value={formData.firstName}
                 onChange={handleInputChange}
                 placeholder="First Name"
                 className="w-full px-4 border border-[#969696] rounded-lg font-sans text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200"
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
                 className="w-full px-4 border border-[#969696] rounded-lg font-sans text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200"
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
               className="w-full px-4 border border-[#969696] rounded-lg font-sans text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200"
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
               className="w-full px-4 border border-[#969696] rounded-lg font-sans text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 transition-all duration-200"
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
                 className="w-full px-4 py-4 border border-[#969696] rounded-lg font-sans text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#B30D02] focus:ring-2 focus:ring-[#B30D02]/20 resize-none transition-all duration-200"
                 style={{ height: '120px' }}
                 required
               />
             </div>

                                                                                       {/* Submit Button */}
             <div>
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full text-white font-sans text-lg rounded-lg transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#B30D02]/30 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                 style={{
                   height: '60px',
                   backgroundColor: '#B30D02'
                 }}
               >
                 {isSubmitting ? (
                   <div className="flex items-center justify-center gap-2">
                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     Submitting...
                   </div>
                 ) : (
                   'Submit'
                 )}
               </button>
             </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-green-600 text-center font-poppins text-sm font-medium px-4 py-2 bg-green-100 rounded-md shadow-sm border border-green-200">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-red-600 text-center font-poppins text-sm font-medium px-4 py-2 bg-red-100 rounded-md shadow-sm border border-red-200">
              ✗ Please fill out all fields correctly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;