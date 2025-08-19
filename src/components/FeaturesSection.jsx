import React from "react";

export const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "AI Facial Recognition",
      icon: "data:image/png;base64,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",
    },
    {
      id: 2,
      title: "Desk Booking Management",
      icon: require("../assets/features/Desk booking management.png"),
    },
    {
      id: 3,
      title: "Events Management",
      icon: require("../assets/features/Events Management.png"),
    },
    {
      id: 4,
      title: "Digital Signature",
      icon: require("../assets/features/DIgital signature.png"),
    },
    {
      id: 5,
      title: "Meeting Room Bookings",
      icon: require("../assets/features/Meeting room booking.png"),
    },
    {
      id: 6,
      title: "Virtual Office Management",
      icon: require("../assets/features/Virtual office management.png"),
    },
    {
      id: 7,
      title: "Visitor's Data Management",
      icon: require("../assets/features/Vistor data management .png"),
    },
    {
      id: 8,
      title: "Expense Management",
      icon: require("../assets/features/Fetures expense managment.png"),
    },
    {
      id: 9,
      title: "CRM Management",
      icon: require("../assets/features/CRM Management.png"),
    },
    {
      id: 10,
      title: "Referrals Management",
      icon: require("../assets/features/Referal Management.png"),
    },
    {
      id: 11,
      title: "Lead Management",
      icon: require("../assets/features/Features lead management.png"),
    },
    {
      id: 12,
      title: "Financial Reports",
      icon: require("../assets/features/financial report.png"),
    },
    {
      id: 13,
      title: "Daily Checklist Management",
      icon: require("../assets/features/Daily checklist Management.png"),
    },
    {
      id: 14,
      title: "Attendance Management",
      icon: require("../assets/features/Attendance Management.png"),
    },
    {
      id: 15,
      title: "Space Management",
      icon: require("../assets/features/Fetures Space management.png"),
    },
    {
      id: 16,
      title: "Vehicle's Management",
      icon: require("../assets/features/VehiclesManagement.png"),
    },
    {
      id: 17,
      title: "Courier Management",
      icon: require("../assets/features/Courier management.png"),
    },
    {
      id: 18,
      title: "Avg Seat Cost Report",
      icon: require("../assets/features/AVG Seat cost report  .png"),
    },
    {
      id: 19,
      title: "Proposal Management",
      icon: require("../assets/features/Proposal Management.png"),
    },
    {
      id: 20,
      title: "Staff Management",
      icon: require("../assets/features/Staff management.png"),
    },
    {
      id: 21,
      title: "Membership Management",
      icon: require("../assets/features/Membership mangement.png"),
    },
    {
      id: 22,
      title: "Seating Plan",
      icon: require("../assets/features/Seating plan.png"),
    },
    {
      id: 23,
      title: "Payments Management",
      icon: require("../assets/features/payments Management.png"),
    },
    {
      id: 24,
      title: "Hourly Desk Reports",
      icon: require("../assets/features/Hourly desk report.png"),
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white min-h-[600px] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="container mx-auto max-w-[1440px]">
        {/* Header with Enhanced Responsive Typography */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#B30D02] mb-2 sm:mb-3 md:mb-4 leading-tight">
            Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
            Everything you need to streamline the workspace operations.
          </p>
        </div>
        
        {/* Enhanced Responsive Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 justify-items-center px-2 sm:px-3 md:px-4 lg:px-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center group cursor-pointer p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-gray-50 rounded-xl transition-all duration-300 w-full max-w-[140px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px]"
            >
              {/* Responsive Icon Container */}
              <div 
                className="bg-[#B30D02] rounded-[15.96px] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                style={{
                  width: 'clamp(50px, 12vw, 80px)',
                  height: 'clamp(50px, 12vw, 80px)',
                  minWidth: '50px',
                  minHeight: '50px',
                  maxWidth: '80px',
                  maxHeight: '80px'
                }}
              >
                {typeof feature.icon === 'string' && feature.icon.startsWith('data:') ? (
                  // Base64 image data
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                ) : typeof feature.icon === 'string' ? (
                  // Emoji fallback
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white flex items-center justify-center">
                    {feature.icon}
                  </div>
                ) : (
                  // Imported image file
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                )}
              </div>
              
              {/* Responsive Feature Title */}
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black leading-tight max-w-[120px] sm:max-w-[130px] md:max-w-[140px] lg:max-w-[150px] xl:max-w-[160px] text-center line-clamp-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};