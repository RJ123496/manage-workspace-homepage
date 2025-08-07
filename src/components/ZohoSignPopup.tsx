import React, { useState, useEffect } from 'react';
import popupImage from '../assets/hero/Pop up .png';

interface TriggerInterval {
  min: number;
  max: number;
}

interface ZohoSignPopupProps {
  onClose?: () => void;
  onBookDemo?: () => void;
  onNeedAssistance?: () => void;
  autoTrigger?: boolean;
  triggerInterval?: TriggerInterval;
  customTitle?: string;
  customTrustText?: string;
}

const ZohoSignPopup: React.FC<ZohoSignPopupProps> = ({ 
  onClose, 
  onBookDemo, 
  onNeedAssistance,
  autoTrigger = true,
  triggerInterval = { min: 60000, max: 180000 }, // 1-3 minutes in milliseconds
  customTitle = "Can't find what you are looking for?",
  customTrustText = "40,000+ businesses trust Zoho Sign"
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Auto-trigger functionality
  useEffect(() => {
    if (!autoTrigger) return;

    const showPopup = (): void => {
      setIsVisible(true);
      // Set up next trigger
      const nextInterval = Math.random() * (triggerInterval.max - triggerInterval.min) + triggerInterval.min;
      const newTimer = setTimeout(showPopup, nextInterval);
      setTimer(newTimer);
    };

    // Initial trigger
    const initialTimer = setTimeout(showPopup, triggerInterval.min);
    setTimer(initialTimer);

    return () => {
      if (timer) clearTimeout(timer);
      if (initialTimer) clearTimeout(initialTimer);
    };
  }, [autoTrigger, triggerInterval]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
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
  }, [isVisible]);

  const handleClose = (): void => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleBookDemo = (): void => {
    // Open demo booking form in a new tab
    window.open('/demo-booking', '_blank');
    if (onBookDemo) onBookDemo();
    handleClose();
  };

  const handleNeedAssistance = (): void => {
    // Open support/assistance form in a new tab
    window.open('/support-assistance', '_blank');
    if (onNeedAssistance) onNeedAssistance();
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl border border-white shadow-2xl w-full max-w-[800px] h-[400px] relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700 transition-colors duration-200 z-10"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex h-full">
          
          {/* Left Side - Text and Buttons */}
          <div className="flex-1 flex flex-col justify-center p-8 pr-4">
            
            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
              {customTitle}
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleBookDemo}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm"
              >
                Book Your Demo
              </button>
              <button
                onClick={handleNeedAssistance}
                className="bg-transparent border-2 border-yellow-700 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-50 transition-colors duration-200 uppercase tracking-wide text-sm"
              >
                Need Assistance?
              </button>
            </div>
            
            {/* Trust Indicator */}
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 shadow-sm">
              <p className="text-blue-700 font-bold text-lg">
                40,000+ businesses
              </p>
              <p className="text-blue-700 font-medium text-base">
                trust Manage Workspace
              </p>
            </div>
          </div>

          {/* Right Side - Professional Woman Image */}
          <div className="flex-1 relative hidden md:block">
            {/* Professional woman with headset and pointing gesture */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Professional woman image */}
                <img 
                  src={popupImage}
                  alt="Professional support representative with headset pointing left"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoSignPopup; 