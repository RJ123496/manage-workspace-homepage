import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
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