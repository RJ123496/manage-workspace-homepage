import React, { useState } from "react";
import faqImage from "../assets/hero/FAQ.png";

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "What is the average monthly cost for an individual?",
      answer:
        "The monthly fee for an individual is 5000/- Rs, offering full access to all app features including visitor management, attendance tracking, event coordination, and expense management.",
    },
    {
      question: "What are the benefits of using the app?",
      answer: "Our app streamlines coworking space operations by automating visitor management, tracking member attendance, coordinating events, managing bookings, and handling expenses. This saves time, reduces administrative overhead, and improves member experience.",
    },
    {
      question:
        "Is this app exclusively for coworking space management, or can any company use it?",
      answer: "While designed specifically for coworking spaces, our platform is flexible enough for any business that needs visitor management, attendance tracking, and space coordination. It's perfect for offices, co-working spaces, business centers, and shared facilities.",
    },
    {
      question: "How do I subscribe?",
      answer: "You can subscribe by choosing one of our membership plans above and clicking 'Request Access'. Our team will contact you within 24 hours to set up your account and provide onboarding support.",
    },
    {
      question: "How can I add users?",
      answer: "Once subscribed, you can add users through your admin dashboard. Each plan has a user limit - 50 users for Basic, 100 for Standard, and 250 for Premium. Additional users can be added for a small extra fee.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 px-0 bg-[#FFECEA]">
      <div className="w-full">
        {/* FAQ Image */}
        <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
          <img
            src={faqImage}
            alt="FAQ - Frequently Asked Questions"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center">
            Frequently Asked Queries
          </h2>

          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">
              <span className="text-gray-800">Any questions ?</span>
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              <span className="text-gray-400">We got you.</span>
            </h3>
          </div>

          <div className="bg-[#FFECEA] rounded-lg shadow-lg">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-300 last:border-b-0">
                <button
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex justify-between items-start sm:items-center hover:bg-white/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-sm sm:text-base lg:text-xl font-semibold text-gray-800 pr-4 sm:pr-6 lg:pr-8 leading-tight">
                    {item.question}
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 flex-shrink-0 mt-1 sm:mt-0">
                    {activeIndex === index ? (
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {activeIndex === index && (
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 animate-fadeIn">
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};