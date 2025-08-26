import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-extralight tracking-[0.2em] text-white">
              OSIRIS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-gold-400 text-sm tracking-wider transition-colors">
              ABOUT
            </a>
            <a href="#services" className="text-white/80 hover:text-gold-400 text-sm tracking-wider transition-colors">
              SERVICES
            </a>
            <a href="#portfolio" className="text-white/80 hover:text-gold-400 text-sm tracking-wider transition-colors">
              PORTFOLIO
            </a>
            <a
              href="#consultation"
              className="bg-transparent border border-gold-400 text-gold-400 px-6 py-2 text-sm tracking-wider hover:bg-gold-400/10 transition-all"
            >
              CONSULTATION
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full bg-black transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8 space-y-8">
          <a
            href="#about"
            className="text-white text-2xl font-light tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#services"
            className="text-white text-2xl font-light tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </a>
          <a
            href="#portfolio"
            className="text-white text-2xl font-light tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            PORTFOLIO
          </a>
          <a
            href="#consultation"
            className="text-white text-2xl font-light tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            CONSULTATION
          </a>
          <div className="mt-auto pb-12">
            <a
              href="#consultation"
              className="inline-block border border-gold-400 text-gold-400 px-8 py-3 text-lg tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              REQUEST CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;