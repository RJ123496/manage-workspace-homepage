import React, { useState } from "react";

import communityIcon from "../assets/Community.png";
import dashboardIcon from "../assets/Dashboard.png";
import membershipPassIcon from "../assets/Membership Pass.png";
import serviceRequestIcon from "../assets/Service request.png";
import referFriendIcon from "../assets/Refer a friend.png";
import eventsManagementIcon from "../assets/Event Management .png";

// Admin feature icons
import leadManagementIcon from "../assets/Lead management.png";
import checklistIcon from "../assets/Checklist.png";
import expenseManagementIcon from "../assets/Expense Management.png";
import visitorManagementIcon from "../assets/Visitor Management.png";
import attendanceIcon from "../assets/Attendance .png";
import adminEventsIcon from "../assets/Event Management .png";

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("client");
  
  const clientFeatures = [
    {
      id: 1,
      title: "Community",
      description: "Connect with workspace members through personalized feeds and real-time updates.",
      mobileDescription: "Connect with members through personalized feeds.",
      icon: communityIcon,
    },
    {
      id: 2,
      title: "Dashboard",
      description: "Centralized hub for booking spaces, viewing announcements, and managing activities.",
      mobileDescription: "Book spaces and view announcements easily.",
      icon: dashboardIcon,
    },
    {
      id: 3,
      title: "Membership Pass",
      description: "Flexible access to workspace amenities with daily, weekly, or monthly pass options.",
      mobileDescription: "Flexible access to workspace amenities.",
      icon: membershipPassIcon,
    },
    {
      id: 4,
      title: "Service Request",
      description: "Get immediate assistance and support for maintenance, technical issues, or general inquiries.",
      mobileDescription: "Get immediate assistance and support.",
      icon: serviceRequestIcon,
    },
    {
      id: 5,
      title: "Refer a friend",
      description: "Invite friends and colleagues to join the workspace community with personalized referral links.",
      mobileDescription: "Invite friends to join the workspace.",
      icon: referFriendIcon,
    },
    {
      id: 6,
      title: "Events Management",
      description: "Discover and register for workshops, seminars, and networking events directly through the platform.",
      mobileDescription: "Discover and register for events.",
      icon: eventsManagementIcon,
    },
  ];

  const adminFeatures = [
    {
      id: 1,
      title: "Leads Management",
      description: "Manage and track potential clients, leads, and business opportunities with CRM tools.",
      mobileDescription: "Manage leads and opportunities.",
      icon: leadManagementIcon,
    },
    {
      id: 2,
      title: "Checklist",
      description: "Create and manage task checklists, workflows, and operational procedures efficiently.",
      mobileDescription: "Manage task checklists.",
      icon: checklistIcon,
    },
    {
      id: 3,
      title: "Expense Management",
      description: "Track, categorize, and manage workspace expenses, budgets, and financial transactions.",
      mobileDescription: "Track and manage expenses.",
      icon: expenseManagementIcon,
    },
    {
      id: 4,
      title: "Visitor Management",
      description: "Streamline visitor check-ins, security protocols, and guest access management.",
      mobileDescription: "Manage visitor access.",
      icon: visitorManagementIcon,
    },
    {
      id: 5,
      title: "Attendance",
      description: "Monitor employee attendance, track work hours, and manage workforce analytics.",
      mobileDescription: "Track attendance.",
      icon: attendanceIcon,
    },
    {
      id: 6,
      title: "Events Management",
      description: "Plan, organize, and manage workspace events, meetings, and activities.",
      mobileDescription: "Manage events.",
      icon: adminEventsIcon,
    },
  ];

  const features = activeTab === "client" ? clientFeatures : adminFeatures;

  return (
    <section className="py-16 lg:py-24 bg-[#FFECEA]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Features
          </h2>
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Everything you need to run and manage a modern workspace.
          </p>
        </div>
        
        {/* Interactive Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-xl p-1 shadow-lg">
            <button 
              onClick={() => setActiveTab("client")}
              className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B30D02] focus:ring-offset-2 ${
                activeTab === "client" 
                  ? "bg-[#B30D02] text-white shadow-md" 
                  : "text-black hover:bg-gray-50"
              }`}
              aria-label="View client features"
            >
              Client Features
            </button>
            <button 
              onClick={() => setActiveTab("admin")}
              className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B30D02] focus:ring-offset-2 ${
                activeTab === "admin" 
                  ? "bg-[#B30D02] text-white shadow-md" 
                  : "text-black hover:bg-gray-50"
              }`}
              aria-label="View admin features"
            >
              Admin Features
            </button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl shadow-lg p-4 md:p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer w-full max-w-[176px] md:max-w-[246px] lg:max-w-[362px] h-auto min-h-[240px] md:min-h-[304px] lg:min-h-[347px]"
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${feature.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Add any click functionality here
                }
              }}
            >
              {/* Image Container */}
              <div className="mb-4 flex justify-center items-center">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-26 h-22 md:w-32 md:h-29 lg:w-[189px] lg:h-[160px] object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 text-center group-hover:text-[#B30D02] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed text-center">
                <span className="block md:hidden">{feature.mobileDescription || feature.description}</span>
                <span className="hidden md:block">{feature.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};