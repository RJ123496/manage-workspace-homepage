import React, { useState } from 'react';
import ZohoSignPopup from './ZohoSignPopup';

const ZohoSignPopupDemo = () => {
  const [showManualPopup, setShowManualPopup] = useState(false);
  const [popupCount, setPopupCount] = useState(0);

  const handleBookDemo = () => {
    console.log('Book Demo clicked!');
    alert('Redirecting to demo booking page...');
  };

  const handleNeedAssistance = () => {
    console.log('Need Assistance clicked!');
    alert('Opening support chat...');
  };

  const handlePopupClose = () => {
    console.log('Popup closed');
    setPopupCount(prev => prev + 1);
  };

  const handleShowManualPopup = () => {
    setShowManualPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Zoho Sign Style Popup Demo</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Demo Controls</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Auto-trigger popup:</strong> Will appear automatically every 1-3 minutes (randomized)
              </p>
              <p className="text-sm text-gray-500">
                Popup count: {popupCount}
              </p>
            </div>
            
            <button
              onClick={handleShowManualPopup}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Show Manual Popup
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Auto-trigger every 1-3 minutes (randomized)</li>
            <li>✅ Responsive design (mobile-friendly)</li>
            <li>✅ Close with X button, backdrop click, or ESC key</li>
            <li>✅ Smooth animations and transitions</li>
            <li>✅ Customizable text and callbacks</li>
            <li>✅ TypeScript support</li>
            <li>✅ Professional styling matching Zoho Sign design</li>
          </ul>
        </div>
      </div>

      {/* Auto-trigger popup */}
      <ZohoSignPopup
        onClose={handlePopupClose}
        onBookDemo={handleBookDemo}
        onNeedAssistance={handleNeedAssistance}
        autoTrigger={true}
        triggerInterval={{ min: 10000, max: 30000 }} // 10-30 seconds for demo
      />

      {/* Manual popup */}
      {showManualPopup && (
        <ZohoSignPopup
          onClose={() => setShowManualPopup(false)}
          onBookDemo={handleBookDemo}
          onNeedAssistance={handleNeedAssistance}
          autoTrigger={false}
          customTitle="Need help with your workspace?"
          customTrustText="Join 10,000+ companies using our platform"
        />
      )}
    </div>
  );
};

export default ZohoSignPopupDemo; 