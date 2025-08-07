import React, { useState, useEffect, useCallback } from 'react';
import popupImage from '../assets/hero/Pop up .png';
import { DemoBookingForm } from './DemoBookingForm';
import SupportAssistanceForm from './SupportAssistanceForm';

const ZohoSignPopup = ({ 
  onClose, 
  onBookDemo, 
  onNeedAssistance,
  autoTrigger = true,
  triggerInterval = { min: 300000, max: 600000 }, // 5-10 minutes in milliseconds
  customTitle = "Can't find what you are looking for?"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showSupportForm, setShowSupportForm] = useState(false);

  // Expose manual trigger for testing
  React.useEffect(() => {
    window.triggerPopup = () => {
      console.log('Manual popup trigger activated');
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

  // Auto-trigger functionality
  useEffect(() => {
    console.log('ZohoSignPopup useEffect triggered with:', { autoTrigger, triggerInterval });
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Current time:', new Date().toISOString());
    
    if (!autoTrigger) {
      console.log('Auto-trigger disabled');
      return;
    }

    const showPopup = () => {
      console.log('Popup triggered! Setting visible to true');
      console.log('Trigger time:', new Date().toISOString());
      setIsVisible(true);
      // Set up next trigger - use random interval between min and max
      const nextInterval = Math.random() * (triggerInterval.max - triggerInterval.min) + triggerInterval.min;
      console.log('Setting next timer for:', nextInterval, 'ms');
      setTimeout(showPopup, nextInterval);
    };

    // Initial trigger
    console.log('Setting initial timer for popup:', triggerInterval.min, 'ms');
    const initialTimer = setTimeout(showPopup, triggerInterval.min);



    return () => {
      console.log('Cleaning up timers');
      if (initialTimer) clearTimeout(initialTimer);
    };
  }, [autoTrigger, triggerInterval]);

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
    console.log('Book Demo clicked!');
    if (onBookDemo) onBookDemo();
    setShowDemoForm(true);
    setIsVisible(false);
  };

  const handleNeedAssistance = () => {
    console.log('Need Assistance clicked!');
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
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
        onClick={handleCloseForm}
      >
        <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Need Assistance?</h2>
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl sm:rounded-2xl border border-white shadow-2xl w-full max-w-[95vw] sm:max-w-[800px] h-[450px] sm:h-[400px] relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-black hover:text-gray-700 transition-colors duration-200 z-10"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col sm:flex-row h-full">
          
          {/* Image Section - Top on Mobile, Right on Desktop */}
          <div className="flex-1 relative flex items-center justify-center order-1 sm:order-2">
            {/* Professional woman with headset and pointing gesture */}
            <div className="relative w-48 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Professional woman image */}
              <img 
                src={popupImage}
                alt="Professional support representative with headset pointing left"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text and Buttons Section - Bottom on Mobile, Left on Desktop */}
          <div className="flex-1 flex flex-col justify-center p-5 sm:p-6 lg:p-8 pr-3 sm:pr-4 order-2 sm:order-1">
            
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-5 sm:mb-6 lg:mb-8 leading-tight">
              {customTitle}
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
              <button
                onClick={handleBookDemo}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm sm:text-sm"
              >
                Book Your Demo
              </button>
              <button
                onClick={handleNeedAssistance}
                className="bg-transparent border-2 border-yellow-700 text-black font-bold py-3 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-yellow-50 transition-colors duration-200 uppercase tracking-wide text-sm sm:text-sm"
              >
                Need Assistance?
              </button>
            </div>
            
            {/* Trust Indicator */}
            <div className="bg-white/20 backdrop-blur-sm px-4 sm:px-4 py-2 sm:py-2 rounded-lg border border-white/30 shadow-sm">
              <p className="text-blue-700 font-bold text-base sm:text-base lg:text-lg">
                40,000+ businesses
              </p>
              <p className="text-blue-700 font-medium text-sm sm:text-sm lg:text-base">
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