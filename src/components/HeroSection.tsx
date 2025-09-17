import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Prevent horizontal scroll ONLY on small screens
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          document.documentElement.style.overflowX = 'hidden';
          document.body.style.overflowX = 'hidden';
        } else {
          document.documentElement.style.overflowX = '';
          document.body.style.overflowX = '';
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="relative h-screen w-screen max-w-full overflow-y-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-screen max-w-full"
        style={{
          backgroundImage: "url('/osiris-bg.png')",
          backgroundPosition: 'center 30%',
          filter: 'brightness(2)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-3xl w-full box-border"
        >
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em] mb-6 break-words leading-tight">
            OSIRIS
          </h1>

          <p className="text-gold-300 text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-widest mb-6 break-words">
            MARKETING FOR THE EXCLUSIVE
          </p>

          <div className="w-12 sm:w-20 h-[1px] bg-gold-400 mx-auto mb-10" />

          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-10 px-2">
            We craft extraordinary brand narratives and marketing strategies
            exclusively for luxury brands, high-net-worth individuals, and elite
            organizations that demand nothing less than perfection.
          </p>

          <a
            href="#consultation"
            className="inline-block border border-gold-400 text-gold-400 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base tracking-wider rounded-md hover:bg-gold-400/10 transition-all max-w-full"
          >
            REQUEST CONSULTATION
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 animate-pulse pointer-events-none">
        <p className="text-xs tracking-widest mb-2 select-none">DISCOVER</p>
        <div className="w-[1px] h-8 sm:h-10 bg-white/30" />
      </div>
    </div>
  );
};

export default HeroSection;
