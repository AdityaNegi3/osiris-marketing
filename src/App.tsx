import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import ServicesSection from './components/CollectionSection';
import PortfolioSection from './components/ExperienceSection';
import ConsultationSection from './components/MembershipSection';
import Footer from './components/Footer';

// Legal pages
import Privacy from './components/privacy';
import Terms from './components/terms';
import NDA from './components/nda';

// Home page layout
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      
      {/* TARGET: Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      <PortfolioSection />
      
      {/* TARGET: Consultation Section */}
      <div id="#consultation">
        <ConsultationSection />
      </div>

      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    // Update document title
    document.title = "OSIRIS | Marketing for the Exclusive";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = 'OSIRIS - Exclusive marketing agency serving luxury brands, high-net-worth individuals, and elite organizations. Marketing excellence for the exceptional.';
    
    if (metaDescription) {
      metaDescription.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/nda" element={<NDA />} />
      </Routes>
    </Router>
  );
}

export default App;