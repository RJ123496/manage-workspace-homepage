import React, { useState, useEffect, useCallback } from 'react';
import popupImage from '../assets/hero/Pop up .png';
import { DemoBookingForm } from './DemoBookingForm';
import SupportAssistanceForm from './SupportAssistanceForm';
import './ZohoSignPopup.css';

const ZohoSignPopup = ({ 
  onClose, 
  onBookDemo, 
  onNeedAssistance,
  autoTrigger = true,
  triggerInterval = { min: 300000, max: 300000 }, // 5 minutes (300,000 milliseconds)
  customTitle = "Can't find what you are looking for?"
}) => {
  // Add missing state declaration
  const [isVisible, setIsVisible] = React.useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showSupportForm, setShowSupportForm] = useState(false);

  // Auto-trigger functionality
  useEffect(() => {
    if (!autoTrigger) {
      return;
    }
    
    let timerId = null;
    
    const showPopup = () => {
      console.log('🎉 Pop-up triggered! Setting visible to true');
      setIsVisible(true);
      // Set up next trigger - use exact 5 minute interval
      const nextInterval = 300000; // 5 minutes in milliseconds
      console.log(`⏰ Next popup scheduled for ${nextInterval/1000/60} minutes`);
      timerId = setTimeout(showPopup, nextInterval);
    };
    
    // Initial trigger - start after 5 minutes
    const initialInterval = 300000; // 5 minutes in milliseconds
    console.log(`⏰ Setting up pop-up trigger for ${initialInterval}ms (${initialInterval/1000/60} minutes)`);
    timerId = setTimeout(showPopup, initialInterval);
    
    return () => {
      if (timerId) {
        console.log('🧹 Cleaning up popup timer');
        clearTimeout(timerId);
      }
    };
  }, [autoTrigger]);

  // Expose manual trigger for testing (works in all environments)
  React.useEffect(() => {
    window.triggerPopup = () => {
      setIsVisible(true);
    };
    
    return () => {
      delete window.triggerPopup;
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    if (onClose) onClose();
  }, [onClose]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, handleClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleBookDemo = () => {
    if (onBookDemo) onBookDemo();
    setShowDemoForm(true);
    setIsVisible(false);
  };

  const handleNeedAssistance = () => {
    if (onNeedAssistance) onNeedAssistance();
    setShowSupportForm(true);
    setIsVisible(false);
  };

  const handleCloseForm = () => {
    setShowDemoForm(false);
    setShowSupportForm(false);
  };

  if (!isVisible && !showDemoForm && !showSupportForm) {
    return null;
  }

  // Show Demo Form Modal
  if (showDemoForm) {
    return (
      <DemoBookingForm 
        isOpen={showDemoForm} 
        onClose={handleCloseForm} 
      />
    );
  }

  // Show Support Form Modal
  if (showSupportForm) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
        onClick={handleCloseForm}
      >
        <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[800px] max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh] overflow-y-auto">
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Need Assistance?</h2>
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L6 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SupportAssistanceForm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-1 sm:p-4 md:p-6"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl sm:rounded-2xl border border-white shadow-2xl w-full max-w-[70vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[800px] h-auto max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-black hover:text-gray-700 transition-colors duration-200 z-10"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col sm:flex-row h-full">
          
          {/* Image Section - Top on Mobile, Right on Desktop */}
          <div className="flex-1 relative flex items-center justify-center order-1 sm:order-2 py-1 sm:py-6">
            {/* Professional woman with headset and pointing gesture */}
            <div className="relative w-16 h-12 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
              {/* Professional woman image */}
              <img 
                src={popupImage}
                alt="Professional support representative with headset pointing left"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text and Buttons Section - Bottom on Mobile, Left on Desktop */}
          <div className="flex-1 flex flex-col justify-center p-1.5 sm:p-5 md:p-6 lg:p-8 pr-0.5 sm:pr-3 md:pr-4 order-2 sm:order-1">
            
            {/* Main Headline */}
            <h2 className="text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-1.5 sm:mb-5 md:mb-6 lg:mb-8 leading-tight">
              {customTitle}
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-1 sm:gap-4 mb-1.5 sm:mb-5 md:mb-6 lg:mb-8">
              <button
                onClick={handleBookDemo}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 sm:py-3 px-1.5 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide text-xs sm:text-sm md:text-sm"
              >
                Book Your Demo
              </button>
              <button
                onClick={handleNeedAssistance}
                className="bg-transparent border-2 border-yellow-700 text-black font-bold py-1 sm:py-3 px-1.5 sm:px-6 md:px-8 rounded-lg hover:bg-yellow-50 transition-colors duration-200 uppercase tracking-wide text-xs sm:text-sm md:text-sm"
              >
                Need Assistance?
              </button>
            </div>
            
            {/* Trust Indicator */}
            <div className="bg-white/20 backdrop-blur-sm px-1.5 sm:px-4 py-1 sm:py-2 rounded-lg border border-white/30 shadow-sm">
              <p className="text-blue-700 font-bold text-xs sm:text-base md:text-lg">
                40,000+ businesses
              </p>
              <p className="text-blue-700 font-medium text-xs sm:text-sm md:text-base">
                trust Manage Workspace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoSignPopup; 