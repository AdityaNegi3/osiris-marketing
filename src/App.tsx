import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import ServicesSection from './components/CollectionSection';
import PortfolioSection from './components/ExperienceSection';
import ConsultationSection from './components/MembershipSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "OSIRIS | Marketing for the Exclusive";
    
    // Find and update the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'OSIRIS - Exclusive marketing agency serving luxury brands, high-net-worth individuals, and elite organizations. Marketing excellence for the exceptional.');
    } else {
      // Create a new meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'OSIRIS - Exclusive marketing agency serving luxury brands, high-net-worth individuals, and elite organizations. Marketing excellence for the exceptional.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ServicesSection />
      <PortfolioSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
}

export default App;