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
        "Up to 50 Users Sign Up"
      ],
      savings: "Save $33 per year",
      highlighted: false,
    },
    {
      title: "100 members plan",
      price: "$138.06", 
      description: "Perfect for growing teams, track attendance, manage up to 100 employees, and monitor visitor records, with expense tracking included.",
      features: [
        "Employee Record and Data",
        "Visitor records",
        "Expenses tracking", 
        "Tracking Attendance",
        "Up to 100 Users Sign Up"
      ],
      savings: "Save $73 per year",
      highlighted: true,
    },
    {
      title: "250 members plan",
      price: "$345.15",
      description: "For large organizations, track attendance, manage up to 250 employees, and monitor visitor records, with expense tracking included.",
      features: [
        "Employee Record and Data",
        "Visitor records",
        "Expenses tracking",
        "Tracking Attendance", 
        "Up to 250 Users Sign Up"
      ],
      savings: "Save $143 per year",
      highlighted: false,
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 bg-[#FFECEA]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
          Our Subscription Plans
        </h2>
        
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 text-center mb-6 sm:mb-8 lg:mb-12 px-4">
          Our dedicated support team is always ready to assist you, providing
          quick and effective solutions to any issues you may encounter.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div className="bg-[#ffecea] rounded-2xl p-1.5 sm:p-2 flex w-full max-w-xs sm:max-w-sm">
            <button 
              onClick={() => setActiveTab('paid')}
              className={`flex-1 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-semibold transition-colors ${
                activeTab === 'paid' 
                  ? 'bg-[#b30d02] text-white' 
                  : 'text-gray-700 hover:text-[#b30d02]'
              }`}
            >
              Paid plans
            </button>
            <button 
              onClick={() => {
                setActiveTab('free');
                setShowFreeTrialModal(true);
              }}
              className={`flex-1 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-semibold transition-colors ${
                activeTab === 'free' 
                  ? 'bg-[#b30d02] text-white' 
                  : 'text-gray-700 hover:text-[#b30d02]'
              }`}
            >
              Free trial
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 cursor-pointer hover:border-[#b30d02] hover:shadow-xl hover:scale-105 ${
                plan.highlighted 
                  ? 'border-2 border-gray-200 shadow-xl' 
                  : 'border-2 border-gray-200 shadow-lg'
              }`}
            >
              {/* Recommended Ribbon */}
              {plan.highlighted && (
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-r from-[#b30d02] to-[#d9372d] text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 z-10">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
                {plan.title}
              </h3>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-1 sm:mb-2">
                {plan.price}
              </div>
              
              <div className="text-gray-500 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">
                per month
              </div>
              
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {plan.description}
              </p>
              
              <ul className="text-left text-gray-700 mb-4 sm:mb-6 lg:mb-8 space-y-1.5 sm:space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm lg:text-base">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#b30d02] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowRequestAccessModal(true);
                }}
                className="w-full py-2 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-2xl sm:rounded-3xl text-xs sm:text-sm lg:text-base font-semibold transition-colors mb-2 sm:mb-3 lg:mb-4 border-2 border-[#b30d02] text-[#b30d02] hover:bg-[#b30d02] hover:text-white"
              >
                Request Access
              </button>
              
              <div className="text-gray-500 text-xs sm:text-sm">
                {plan.savings}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Trial Modal */}
      {showFreeTrialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={closeFreeTrialModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Start Your Free Trial
            </h2>
            
            <p className="text-gray-600 mb-6 text-center">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02]"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Number of Employees
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02]"
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
                className="w-full bg-[#b30d02] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowRequestAccessModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Request Access to {selectedPlan.title}
            </h2>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-[#b30d02] mb-2">
                {selectedPlan.price}
              </div>
              <div className="text-gray-500">per month</div>
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02]"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02]"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02]"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b30d02] h-20"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#b30d02] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
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