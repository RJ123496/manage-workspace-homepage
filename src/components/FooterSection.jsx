import React from "react";
import logo from "../assets/New transparent logo.png";
import googlePlayButton from "../assets/New footer logo.png";

export const FooterSection = () => {
  const usefulLinks = [
    { text: "About Us", href: "#about" },
    { text: "Features", href: "#features" },
    { text: "Industries", href: "#industries" },
    { text: "Subscription", href: "#subscription" },
    { text: "Contact Us", href: "#contact" },
  ];

  const legalLinks = [
    { text: "Terms of Service" },
    { text: "Privacy Policy" },
    { text: "Cookies" },
  ];

  return (
    <>
      {/* White Card Section */}
      <div className="relative bg-[#B30D02] py-8 sm:py-10 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-6 relative">
          {/* White Card */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-[1100px] mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="w-full lg:w-[462px] space-y-3 sm:space-y-4 lg:space-y-2 pl-0 sm:pl-4 lg:pl-8 text-center lg:text-left">
                <h3 className="text-black text-sm sm:text-base font-normal font-['Nunito'] leading-6">
                  Manage Workspace
                </h3>
                <h2 className="text-[#B30D02] text-lg sm:text-xl font-semibold font-['Nunito'] leading-7">
                  Join us to streamline your workspace.
                </h2>
                <p className="text-black text-xs sm:text-sm font-normal font-['Nunito'] leading-[18px] opacity-80 max-w-[400px] mx-auto lg:mx-0">
                  The smarter way to organize, collaborate, and grow your business — all in one place, empowering your team.
                </p>
                <button className="bg-[#B30D02] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-normal font-['Nunito'] leading-[18px] hover:bg-red-800 transition-colors min-h-[44px]">
                  Get Started
                </button>
              </div>

              {/* Right Side - Circular Diagram Image */}
              <div className="w-full lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] mt-6 lg:mt-0 flex items-center justify-center lg:justify-start lg:-ml-20 lg:pr-16">
                <img 
                  src={require("../assets/footer white coantainer.png")}
                  alt="Collaboration Network Diagram"
                  className="w-full h-full object-contain max-w-[280px] sm:max-w-[320px] lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer id="footer" className="bg-[#B30D02] text-white">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Column - Company Info */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-4">
                <img 
                  src={require("../assets/New footer logo.png")}
                  alt="Manage Workspace"
                  className="w-48 sm:w-56 lg:w-64 h-auto"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed max-w-[300px] mx-auto sm:mx-0">
                Streamline work, boost collaboration, and grow smarter everything your business needs in one place.
              </p>
            </div>

            {/* Middle Left Column - Useful Links */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2">
                {usefulLinks.map((link, index) => (
                  <li key={`useful-link-${index}`}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#') && link.href !== '#') {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        }
                      }}
                      className="text-gray-200 hover:text-white transition-colors text-sm cursor-pointer block py-1"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Right Column - Contact/Address */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4">Contact / Address</h3>
              <div className="space-y-3 text-sm text-gray-200">
                <div>
                  <p className="leading-relaxed max-w-[280px] mx-auto sm:mx-0">
                    No. 4, 2nd Floor, Himagiri Silicon City, Thogur Cross, Electronics City Phase 1, Bengaluru, Karnataka 560100, India.
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919953307846" className="hover:text-white transition-colors">
                    +919953307846
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:manage.workspacee@gmail.com" className="hover:text-white transition-colors text-xs sm:text-sm">
                    manage.workspacee@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Download App */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4">Download App</h3>
              <div className="space-y-3 flex flex-col items-center sm:items-start">
                {/* Google Play Store Button */}
                <img 
                  src={require("../assets/Foother download button play store.png")}
                  alt="Get it on Google Play"
                  className="w-[140px] sm:w-[160px] lg:w-[175px] h-[40px] sm:h-[45px] lg:h-[50px] rounded-lg cursor-pointer hover:opacity-90 transition-opacity object-contain"
                />

                {/* Apple App Store Button */}
                <img 
                  src={require("../assets/footer apple download.png")}
                  alt="Download on the App Store"
                  className="w-[140px] sm:w-[160px] lg:w-[175px] h-[40px] sm:h-[45px] lg:h-[50px] rounded-lg cursor-pointer hover:opacity-90 transition-opacity object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#B30D02] py-4 px-3 sm:px-4 lg:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {legalLinks.map((link, index) => (
              <button
                key={`legal-link-${index}`}
                className="text-gray-200 hover:text-white transition-colors cursor-pointer text-xs sm:text-sm py-1 min-h-[44px]"
                onClick={() => {
                  // Placeholder for future legal page navigation
                  // TODO: Implement actual navigation
                }}
              >
                {link.text}
              </button>
            ))}
          </div>
          <p className="text-gray-200 text-xs sm:text-sm text-center sm:text-right">
            ©2025 Manage Workspace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};