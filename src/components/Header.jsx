import React, { useState, useEffect } from 'react';
import logo from '../assets/New transparent logo.png';

export const Header = ({ onBookLiveClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';
    
    // If not on home page, navigate to home page with section anchor
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on home page, scroll to section
    if (sectionId === 'hero' || sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (sectionId === 'contact') {
      // Special case for contact - scroll to contact form
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (sectionId === 'services') {
      // Special case for services/industries section
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const handleBookLiveClick = () => {
    if (onBookLiveClick) {
      onBookLiveClick();
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key and manage body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
    
    // Cleanup function for component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'Features', sectionId: 'features' },
    { label: 'Subscription', sectionId: 'subscription' },
    { label: 'About', sectionId: 'about' },
    { label: 'Industries', sectionId: 'services' },
    { label: 'FAQ', sectionId: 'faq' },
    { label: 'Book Demo', action: 'bookLive' },
    { label: 'Login', sectionId: 'contact' },
  ];

  return (
    <header className="bg-[#FFECEA] shadow-sm sticky top-0 z-50">
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => {
            const isHomePage = window.location.pathname === '/';
            if (isHomePage) {
              scrollToSection('hero');
            } else {
              window.location.href = '/';
            }
          }}>
            <img 
              src={logo} 
              alt="Manage Workspace Logo" 
              className="h-12 sm:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.action === 'bookLive') {
                    handleBookLiveClick();
                  } else {
                    scrollToSection(item.sectionId);
                  }
                }}
                className="text-gray-600 hover:text-[#b30d02] font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b30d02] group-hover:w-full transition-all duration-200"></span>
              </button>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                const isHomePage = window.location.pathname === '/';
                if (isHomePage) {
                  scrollToSection('contact');
                } else {
                  window.location.href = '/#contact';
                }
              }}
              className="bg-[#b30d02] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 min-h-[44px] min-w-[44px] rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-600 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Dropdown Style */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-[#FFECEA] shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (item.action === 'bookLive') {
                      handleBookLiveClick();
                    } else {
                      scrollToSection(item.sectionId);
                    }
                  }}
                  className="text-gray-600 hover:text-[#b30d02] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-left min-h-[44px] border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  const isHomePage = window.location.pathname === '/';
                  if (isHomePage) {
                    scrollToSection('contact');
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="bg-[#b30d02] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-200 text-center mt-2 min-h-[44px] shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};