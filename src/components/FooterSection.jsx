import React from "react";
import logo from "../assets/New transparent logo.png";

export const FooterSection = () => {
  const footerLinks = [
    { text: "Features", href: "#features" },
    { text: "Services", href: "#services" },
    { text: "Plans & Pricings", href: "#subscription" },
    { text: "About Us", href: "#about" },
    { text: "Client Reviews", href: "#testimonials" },
    { text: "FAQ", href: "#faq" },
    { text: "Contact", href: "#hero" },
  ];

  const legalLinks = [
    { text: "Terms of Service" },
    { text: "Privacy Policy" },
    { text: "Cookies" },
  ];

  return (
    <footer id="footer" className="bg-[#FFECEA]">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center items-center mb-6 sm:mb-8">
            <img 
              src={logo} 
              alt="Manage Workspace Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-md mx-auto px-4">
            Get started with your business - we will manage your workspace
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-sm sm:text-base text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#b30d02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@manageworkspace.com" className="hover:text-[#b30d02] transition-colors">
                contact@manageworkspace.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#b30d02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+1234567890" className="hover:text-[#b30d02] transition-colors">
                +1 (234) 567-8900
              </a>
            </div>
          </div>

          {/* Email Signup */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row max-w-md w-full px-4 sm:px-0">
              <div className="relative flex-1 mb-3 sm:mb-0">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-10 sm:px-12 py-3 rounded-3xl sm:rounded-l-3xl sm:rounded-r-none border border-gray-300 focus:outline-none focus:border-[#b30d02] text-sm sm:text-base"
                />
                <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
              <button className="bg-[#b30d02] text-white px-6 sm:px-8 py-3 rounded-3xl sm:rounded-l-none sm:rounded-r-3xl hover:bg-red-700 transition-colors text-sm sm:text-base font-medium">
                Try Now
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mb-6 sm:mb-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
              {footerLinks.map((link, index) => (
                <a
                  key={`footer-link-${index}`}
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
                  className="text-gray-700 hover:text-[#b30d02] transition-colors text-xs sm:text-sm cursor-pointer text-center"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#b30d02] py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm gap-3 sm:gap-0">
          <p className="text-center sm:text-left">© 2025 Manage Workspace. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legalLinks.map((link, index) => (
              <button
                key={`legal-link-${index}`}
                className="hover:text-gray-200 transition-colors cursor-pointer text-center"
                onClick={() => {
                  // Placeholder for future legal page navigation
                  // TODO: Implement actual navigation
                }}
              >
                {link.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};