import React, { useState } from "react";

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
    <section className="py-2 sm:py-4 lg:py-6 px-0 relative bg-white">
      <div className="w-full">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <h2 
            className="mb-6 text-center"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '120%',
              color: '#B30D02'
            }}
          >
            Frequently Asked Questions
          </h2>
          
          <p 
            className="text-center mb-12 text-gray-600 text-lg"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 400,
              lineHeight: '140%'
            }}
          >
            Everything you need to know, all in one place.
          </p>



          <div className="bg-white rounded-xl">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-400 last:border-b-0">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-base font-medium text-gray-800 pr-4 leading-tight">
                    {item.question}
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B30D02]/10 flex-shrink-0">
                    {activeIndex === index ? (
                      <svg className="w-5 h-5 text-[#B30D02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-[#B30D02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-5 animate-fadeIn">
                    <div className="pt-2">
                      <p className="text-gray-600 text-base leading-relaxed">
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