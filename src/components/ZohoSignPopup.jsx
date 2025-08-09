import React, { useState, useEffect, useCallback, useRef } from 'react';
import popupImage from '../assets/hero/Pop up .png';
import { DemoBookingForm } from './DemoBookingForm';
import SupportAssistanceForm from './SupportAssistanceForm';

/**
 * Cross-Device Compatible React Popup Notification Component
 * 
 * Features:
 * - Auto-trigger with configurable intervals
 * - Manual trigger via window.triggerPopup()
 * - Responsive design for all devices
 * - Accessibility compliant
 * - Performance optimized
 * - Error handling and fallbacks
 */

const ZohoSignPopup = ({ 
  onClose, 
  onBookDemo, 
  onNeedAssistance,
  autoTrigger = true,
  triggerInterval = { min: 5000, max: 10000 }, // 5-10 seconds for testing
  customTitle = "Can't find what you are looking for?"
}) => {
  // State management
  const [isVisible, setIsVisible] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showSupportForm, setShowSupportForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Refs for focus management
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstButtonRef = useRef(null);
  
  // Timer refs for cleanup
  const autoTriggerTimerRef = useRef(null);
  const nextTriggerTimerRef = useRef(null);

  // Expose manual trigger for testing (works in all environments)
  useEffect(() => {
    window.triggerPopup = () => {
      console.log('🎉 Manual popup trigger activated');
      setIsVisible(true);
      setError(null);
    };
    
    return () => {
      delete window.triggerPopup;
    };
  }, []);

  // Cleanup function for timers
  const cleanupTimers = useCallback(() => {
    if (autoTriggerTimerRef.current) {
      clearTimeout(autoTriggerTimerRef.current);
      autoTriggerTimerRef.current = null;
    }
    if (nextTriggerTimerRef.current) {
      clearTimeout(nextTriggerTimerRef.current);
      nextTriggerTimerRef.current = null;
    }
  }, []);

  // Handle close with proper cleanup
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setError(null);
    setIsLoading(false);
    
    // Restore body scroll
    document.body.style.overflow = 'unset';
    
    if (onClose) {
      try {
        onClose();
      } catch (err) {
        console.error('Error in onClose callback:', err);
      }
    }
  }, [onClose]);

  // Auto-trigger functionality with error handling
  useEffect(() => {
    if (!autoTrigger) {
      return;
    }

    const showPopup = () => {
      try {
        console.log('🎉 Auto popup triggered!');
        setIsVisible(true);
        setError(null);
        
        // Set up next trigger with random interval
        const nextInterval = Math.random() * (triggerInterval.max - triggerInterval.min) + triggerInterval.min;
        nextTriggerTimerRef.current = setTimeout(showPopup, nextInterval);
      } catch (err) {
        console.error('Error showing popup:', err);
        setError('Failed to show popup');
      }
    };

    try {
      console.log(`⏰ Setting up auto-trigger for ${triggerInterval.min}ms (${triggerInterval.min/1000}s)`);
      autoTriggerTimerRef.current = setTimeout(showPopup, triggerInterval.min);
    } catch (err) {
      console.error('Error setting up auto-trigger:', err);
      setError('Failed to set up auto-trigger');
    }

    return cleanupTimers;
  }, [autoTrigger, triggerInterval, cleanupTimers]);

  // Handle ESC key and body scroll management
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    const handleTabKey = (e) => {
      if (!isVisible) return;
      
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements?.length) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'hidden';
      
      // Focus management
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, handleClose]);

  // Backdrop click handler
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  // Book demo handler with error handling
  const handleBookDemo = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (onBookDemo) {
        await onBookDemo();
      }
      
      setShowDemoForm(true);
      setIsVisible(false);
    } catch (err) {
      console.error('Error in book demo handler:', err);
      setError('Failed to open demo form');
    } finally {
      setIsLoading(false);
    }
  }, [onBookDemo]);

  // Need assistance handler with error handling
  const handleNeedAssistance = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (onNeedAssistance) {
        await onNeedAssistance();
      }
      
      setShowSupportForm(true);
      setIsVisible(false);
    } catch (err) {
      console.error('Error in need assistance handler:', err);
      setError('Failed to open support form');
    } finally {
      setIsLoading(false);
    }
  }, [onNeedAssistance]);

  // Close form handler
  const handleCloseForm = useCallback(() => {
    setShowDemoForm(false);
    setShowSupportForm(false);
    setError(null);
    setIsLoading(false);
  }, []);

  // Image error handler
  const handleImageError = useCallback((e) => {
    console.error('Failed to load popup image');
    e.target.style.display = 'none';
  }, []);

  // Don't render if not visible and no forms are open
  if (!isVisible && !showDemoForm && !showSupportForm) {
    return null;
  }

  // Show Demo Form Modal
  if (showDemoForm) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
        onClick={handleCloseForm}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-form-title"
      >
        <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[800px] max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh] overflow-y-auto">
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 id="demo-form-title" className="text-xl sm:text-2xl font-bold text-gray-800">
                Book Your Demo
              </h2>
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close demo form"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L6 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <DemoBookingForm />
          </div>
        </div>
      </div>
    );
  }

  // Show Support Form Modal
  if (showSupportForm) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
        onClick={handleCloseForm}
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-form-title"
      >
        <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[800px] max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh] overflow-y-auto">
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 id="support-form-title" className="text-xl sm:text-2xl font-bold text-gray-800">
                Need Assistance?
              </h2>
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close support form"
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

  // Main Popup Modal
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl sm:rounded-xl md:rounded-2xl border-2 border-white shadow-2xl w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[800px] h-auto max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] lg:max-h-[75vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95 duration-300"
      >
        
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute top-3 sm:top-3 md:top-4 right-3 sm:right-3 md:right-4 bg-white bg-opacity-90 hover:bg-white text-black hover:text-gray-700 transition-all duration-200 z-10 w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation min-w-[40px] min-h-[40px]"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Error Display */}
        {error && (
          <div className="absolute top-12 left-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Content Container */}
        <div className="flex flex-col sm:flex-row min-h-[350px] sm:min-h-[350px]">
          
          {/* Image Section - Top on Mobile, Right on Desktop */}
          <div className="flex-shrink-0 order-1 sm:order-2 h-32 sm:h-auto sm:flex-1 flex items-center justify-center py-6 sm:py-6">
            <div className="relative w-28 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
              <img 
                src={popupImage}
                alt="Professional support representative with headset pointing left"
                className="w-full h-full object-contain drop-shadow-lg"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text and Buttons Section - Bottom on Mobile, Left on Desktop */}
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-5 md:p-6 lg:p-8 order-2 sm:order-1">
            
            {/* Main Headline */}
            <h2 
              id="popup-title"
              className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6 sm:mb-5 md:mb-6 lg:mb-8 leading-tight font-poppins"
            >
              {customTitle}
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 sm:space-y-3 mb-6 sm:mb-5 md:mb-6 lg:mb-8">
              <button
                ref={firstButtonRef}
                onClick={handleBookDemo}
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 sm:py-3 md:py-3 px-6 sm:px-6 md:px-8 rounded-lg transition-all duration-200 uppercase tracking-wide text-base sm:text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed min-h-[56px] sm:min-h-[48px] flex items-center justify-center touch-manipulation"
                aria-describedby="popup-description"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                Book Your Demo
              </button>
              <button
                onClick={handleNeedAssistance}
                disabled={isLoading}
                className="w-full bg-transparent border-2 border-yellow-700 hover:border-yellow-800 text-black hover:bg-yellow-50 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-500 font-bold py-4 sm:py-3 md:py-3 px-6 sm:px-6 md:px-8 rounded-lg transition-all duration-200 uppercase tracking-wide text-base sm:text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed min-h-[56px] sm:min-h-[48px] flex items-center justify-center backdrop-blur-sm touch-manipulation"
              >
                Need Assistance?
              </button>
            </div>
            
            {/* Trust Indicator */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 sm:px-4 py-3 sm:py-2 rounded-lg border border-white border-opacity-30 shadow-sm">
              <p className="text-blue-700 font-bold text-base sm:text-base md:text-lg lg:text-xl">
                40,000+ businesses
              </p>
              <p className="text-blue-700 font-medium text-base sm:text-sm md:text-base lg:text-lg">
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