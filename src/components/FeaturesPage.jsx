import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import feature images
import communityIcon from "../assets/Community.png";
import dashboardIcon from "../assets/Dashboard.png";
import membershipPassIcon from "../assets/Membership Pass.png";
import serviceRequestIcon from "../assets/Service request.png";
import referFriendIcon from "../assets/Refer a friend.png";
import eventsManagementIcon from "../assets/Event Management .png";

export const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState("client");
  const navigate = useNavigate();
  
  const clientFeatures = [
    {
      id: 1,
      title: "Community",
      description:
        "A post feed feature aggregates content from various sources, presenting it in a personalised, visually appealing layout. Users can customise their feeds based on interests and connections, with real-time updates ensuring access to the latest content.",
      icon: communityIcon,
    },
    {
      id: 2,
      title: "Dashboard",
      description:
        "Dashboard provides a centralised hub for members, featuring banners highlighting announcements and promotions. Users can easily book spaces like conference rooms and desks, while an events section keeps them informed about upcoming activities.",
      icon: dashboardIcon,
    },
    {
      id: 3,
      title: "Membership Pass",
      description:
        "The Membership Pass feature offers users flexible access to workspace amenities through purchased passes. Members can choose from various pass options, such as daily, or monthly, tailored to their needs.",
      icon: membershipPassIcon,
    },
    {
      id: 4,
      title: "Service Request",
      description:
        "Need Help feature provides users with immediate assistance and support within the workspace environment. Members can easily access help desks or submit requests for maintenance, technical support, or general inquiries.",
      icon: serviceRequestIcon,
    },
    {
      id: 5,
      title: "Refer a friend",
      description:
        "This feature incentivises member growth by encouraging users to refer their contacts to join the workspace community. Through personalised referral links or codes, members can easily invite friends and colleagues to sign up.",
      icon: referFriendIcon,
    },
    {
      id: 6,
      title: "Events Management",
      description:
        "Events feature keeps members engaged and informed by showcasing a diverse range of activities and networking opportunities. From workshops and seminars to social gatherings, users can discover and register for events directly through the platform.",
      icon: eventsManagementIcon,
    },
  ];

  const adminFeatures = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics and reporting tools to track workspace usage, member engagement, and business metrics. Get insights into occupancy rates, popular amenities, and revenue trends.",
      icon: dashboardIcon,
    },
    {
      id: 2,
      title: "Member Management",
      description:
        "Complete member lifecycle management including onboarding, membership plans, access control, and member communications. Manage profiles, permissions, and billing efficiently.",
      icon: communityIcon,
    },
    {
      id: 3,
      title: "Space Management",
      description:
        "Configure and manage all workspace areas, rooms, and amenities. Set up booking rules, pricing, availability schedules, and maintenance requests for optimal space utilization.",
      icon: serviceRequestIcon,
    },
    {
      id: 4,
      title: "Event Coordination",
      description:
        "Plan and manage events, workshops, and networking sessions. Handle registrations, capacity management, and event communications to create engaging member experiences.",
      icon: eventsManagementIcon,
    },
    {
      id: 5,
      title: "Billing & Payments",
      description:
        "Automated billing system for memberships, passes, and additional services. Process payments, generate invoices, and manage financial reporting with ease.",
      icon: membershipPassIcon,
    },
    {
      id: 6,
      title: "Support System",
      description:
        "Centralized support management for handling member inquiries, technical issues, and service requests. Track resolution times and maintain high service quality standards.",
      icon: referFriendIcon,
    },
  ];

  const features = activeTab === "client" ? clientFeatures : adminFeatures;

  return (
    <div className="bg-[#FFECEA] min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-[#B30D02] hover:text-[#8a0a02] transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Features</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 text-center">
          Our Features
        </h2>
        
        <p className="text-black text-sm sm:text-base lg:text-lg mb-8 text-center max-w-3xl mx-auto">
          Everything you need to run and manage a modern workspace
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-sm">
            <button 
              onClick={() => setActiveTab("client")}
              className={`px-6 py-3 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                activeTab === "client" 
                  ? "bg-[#B30D02] text-white" 
                  : "text-black hover:bg-gray-50"
              }`}
            >
              Client Features
            </button>
            <button 
              onClick={() => setActiveTab("admin")}
              className={`px-6 py-3 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                activeTab === "admin" 
                  ? "bg-[#B30D02] text-white" 
                  : "text-black hover:bg-gray-50"
              }`}
            >
              Admin Features
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full max-w-[160px] md:max-w-[200px] lg:max-w-none bg-white rounded-lg md:rounded-xl p-3 md:p-4 lg:p-8 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center mx-auto md:mx-0"
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 mb-3 md:mb-4 lg:mb-6 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-sm md:text-base lg:text-xl font-bold mb-2 md:mb-3 lg:mb-4 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-[10px] md:text-xs lg:text-base leading-tight md:leading-tight lg:leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="bg-[#B30D02] hover:bg-[#8a0a02] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}; 