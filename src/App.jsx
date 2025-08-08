import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import { DemoBookingForm } from './components/DemoBookingForm';
import SupportAssistanceForm from './components/SupportAssistanceForm';
import ResponsiveDemo from './components/ResponsiveDemo';
import LandingPageDemo from './components/LandingPageDemo';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/demo-booking" element={<DemoBookingForm />} />
          <Route path="/support-assistance" element={<SupportAssistanceForm />} />
          <Route path="/responsive-demo" element={<ResponsiveDemo />} />
          <Route path="/landing-page" element={<LandingPageDemo />} />
          {/* Future routes can be added here */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;