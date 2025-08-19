import React, { useState, useEffect } from "react";

export const SubscriptionPlansSection = () => {
  const [activeTab, setActiveTab] = useState('paid');
  const [showFreeTrialModal, setShowFreeTrialModal] = useState(false);
  const [showRequestAccessModal, setShowRequestAccessModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Handle Escape key to close modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowFreeTrialModal(false);
        setShowRequestAccessModal(false);
        // Reset to paid tab when closing free trial modal
        if (showFreeTrialModal) {
          setActiveTab('paid');
        }
      }
    };

    if (showFreeTrialModal || showRequestAccessModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showFreeTrialModal, showRequestAccessModal]);

  // Reset to paid tab when free trial modal is closed
  useEffect(() => {
    if (!showFreeTrialModal && activeTab === 'free') {
      setActiveTab('paid');
    }
  }, [showFreeTrialModal, activeTab]);

  // Helper function to close free trial modal and reset tab
  const closeFreeTrialModal = () => {
    setShowFreeTrialModal(false);
    setActiveTab('paid');
  };
  const plans = [
    {
      title: "50 members plan",
      price: "$69.03",
      description: "Ideal for small teams, track attendance, manage up to 50 employees, and monitor visitor records, with expense tracking included.",
      features: [
        "Employee Record and Data",
        "Visitor records", 
        "Expenses tracking",
        "Tracking Attendance",
        "Up to 50 Users Sign Up",
        "$ 69.03 /month"
      ],
      savings: "Save $33 per year",
      highlighted: false,
    },
    {
      title: "100 members plan",
      price: "$138.06", 
      description: "Ideal for small teams, track attendance, manage up to 100 employees, and monitor visitor records, with expense tracking included.",
      features: [
        "Employee Record and Data",
        "Visitor records",
        "Expenses tracking", 
        "Tracking Attendance",
        "Up to 100 Users Sign Up",
        "$ 138.06 /month"
      ],
      savings: "Save $73 per year",
      highlighted: true,
    },
    {
      title: "250 members plan",
      price: "$345.15",
      description: "Ideal for small teams, track attendance, manage up to 250 employees, and monitor visitor records, with expense tracking included.",
      features: [
        "Employee Record and Data",
        "Visitor records",
        "Expenses tracking",
        "Tracking Attendance", 
        "Up to 250 Users Sign Up",
        "$ 345.15 /month"
      ],
      savings: "Save $143 per year",
      highlighted: false,
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-3 sm:px-6 lg:px-10 bg-white overflow-hidden min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-center px-2">
          Our Subscription Plans
        </h2>
        
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 px-3 sm:px-4">
          Our dedicated support team is always ready to assist you, providing
          quick and effective solutions to any issues you may encounter.
        </p>



        {/* Toggle */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 px-3">
          <div 
            className="flex bg-white rounded-2xl shadow-lg"
            style={{
              width: '480px',
              height: '80px',
              gap: '8px',
              borderRadius: '16px',
              paddingTop: '10px',
              paddingRight: '16px',
              paddingBottom: '10px',
              paddingLeft: '16px'
            }}
          >
            <button 
              onClick={() => setActiveTab('paid')}
              className={`flex-1 rounded-xl text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B30D02] focus:ring-offset-2 min-h-[44px] ${
                activeTab === 'paid' 
                  ? 'bg-[#B30D02] text-white shadow-md' 
                  : 'text-black hover:bg-gray-50'
              }`}
              aria-label="View paid plans"
            >
              Paid plans
            </button>
            <button 
              onClick={() => {
                setActiveTab('free');
                setShowFreeTrialModal(true);
              }}
              className={`subscription-toggle-btn flex-1 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B30D02] focus:ring-offset-2 min-h-[44px] ${
                activeTab === 'free' 
                  ? 'bg-[#B30D02] text-white shadow-md' 
                  : 'text-black hover:bg-gray-50'
              }`}
              aria-label="Start free trial"
            >
              Free trail
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-0 mb-8 sm:mb-12 lg:mb-16 xl:mb-20 px-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white text-center transition-all duration-300 cursor-pointer hover:border-[#b30d02] hover:-translate-y-1 lg:hover:-translate-y-2 flex flex-col w-full max-w-[350px] sm:max-w-[400px] lg:max-w-none ${
                plan.highlighted 
                  ? 'scale-100 lg:scale-105 transform-gpu z-10' 
                  : ''
              } ${
                plan.highlighted ? 'min-h-[700px] sm:min-h-[800px] lg:min-h-[900px]' : 'min-h-[650px] sm:min-h-[750px] lg:min-h-[800px]'
              }`}
              style={{
                padding: '20px 16px 32px',
                border: '2px solid #b30d02',
                borderRadius: '16px',
                marginLeft: index === 0 ? '0' : '0',
                marginTop: index === 0 ? '0' : '0'
              }}
            >
              {/* Recommended Ribbon */}
              {plan.highlighted && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#b30d02] to-[#d9372d] text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold z-10">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className={`font-semibold text-gray-800 mb-3 sm:mb-4 lg:mb-5 ${
                plan.highlighted 
                  ? 'text-lg sm:text-xl lg:text-2xl xl:text-3xl' 
                  : 'text-lg sm:text-xl lg:text-2xl xl:text-3xl'
              }`}>
                {plan.title}
              </h3>
              
              <div className={`font-bold text-gray-800 mb-2 sm:mb-3 ${
                plan.highlighted 
                  ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl' 
                  : 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'
              }`}>
                {plan.price}
              </div>
              
              <div className={`text-gray-500 mb-4 sm:mb-5 lg:mb-6 ${
                plan.highlighted 
                  ? 'text-base sm:text-lg lg:text-xl' 
                  : 'text-base sm:text-lg lg:text-xl'
              }`}>
                per month
              </div>
              
              <p 
                className={`text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed ${
                  plan.highlighted 
                    ? 'text-sm sm:text-base lg:text-lg' 
                    : 'text-sm sm:text-base lg:text-lg'
                }`}
                style={plan.highlighted ? { marginTop: '120px' } : { marginTop: '24px' }}
              >
                {plan.description}
              </p>
              
              <ul className={`mb-4 sm:mb-5 lg:mb-6 space-y-2 sm:space-y-2.5 text-center ${
                plan.highlighted 
                  ? 'text-gray-500' 
                  : 'text-gray-700'
              }`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center justify-center text-sm sm:text-base lg:text-lg`}>
                    <div className={`bg-black rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 ${
                      plan.highlighted 
                        ? 'w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3' 
                        : 'w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3'
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className={`mt-auto ${plan.highlighted ? 'mt-4' : ''}`}>
                <button 
                  onClick={() => {
                    setSelectedPlan(plan);
                    setShowRequestAccessModal(true);
                  }}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold transition-colors mb-3 sm:mb-4 lg:mb-5 min-h-[44px] ${
                    plan.highlighted 
                      ? 'bg-[#b30d02] text-white hover:bg-[#8a0a01] border-2 border-[#b30d02]' 
                      : 'border-2 border-[#b30d02] text-[#b30d02] hover:bg-[#b30d02] hover:text-white'
                  }`}
                >
                  Request Access
                </button>
                
                <div className="text-gray-500 text-sm sm:text-base lg:text-lg">
                  {plan.savings}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Trial Modal */}
      {showFreeTrialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeFreeTrialModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl min-h-[44px] min-w-[44px]"
            >
              ×
            </button>
            
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              Start Your Free Trial
            </h2>
            
            <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
              Try all our features for 14 days absolutely free. No credit card required.
            </p>
            
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Free trial request submitted successfully! We will contact you soon.');
                closeFreeTrialModal();
              }}
            >
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Company Name
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] min-h-[44px]"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] min-h-[44px]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Number of Employees
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] min-h-[44px]"
                  required
                >
                  <option value="">Select range</option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-100 employees</option>
                  <option>100+ employees</option>
                </select>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#B30D02] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors min-h-[44px]"
              >
                Start Free Trial
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By starting your free trial, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      )}

      {/* Request Access Modal */}
      {showRequestAccessModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowRequestAccessModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl min-h-[44px] min-w-[44px]"
            >
              ×
            </button>
            
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              Request Access to {selectedPlan.title}
            </h2>
            
            <div className="text-center mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-[#b30d02] mb-2">
                {selectedPlan.price}
              </div>
              <div className="text-gray-500 text-sm sm:text-base">per month</div>
            </div>
            
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Access request for ${selectedPlan.title} submitted successfully! Our team will contact you within 24 hours.`);
                setShowRequestAccessModal(false);
              }}
            >
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Company Name
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] min-h-[44px]"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] min-h-[44px]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] min-h-[44px]"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b30d02] h-20 min-h-[44px]"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#B30D02] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors min-h-[44px]"
              >
                Submit Request
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Our team will contact you within 24 hours to discuss your requirements.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};