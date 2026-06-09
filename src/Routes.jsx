import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import LandingAltPage from './pages/LandingAlt';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing-alt" element={<LandingAltPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;