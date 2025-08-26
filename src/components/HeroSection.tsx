import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 500, 0.2);
        const translateY = scrollPosition * 0.3;
        
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800)', 
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Golden gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black opacity-70"></div>

      {/* Content */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-500 ease-out">
        <div className="text-center max-w-5xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight tracking-[0.2em] mb-6">
            OSIRIS
          </h1>
          <p className="text-gold-300 text-xl md:text-2xl lg:text-3xl font-light tracking-widest mb-8">
            MARKETING FOR THE EXCLUSIVE
          </p>
          <div className="w-24 h-[1px] bg-gold-400 mx-auto mb-12"></div>
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12">
            We craft extraordinary brand narratives and marketing strategies exclusively for luxury brands, high-net-worth individuals, and elite organizations that demand nothing less than perfection.
          </p>
          <a href="#consultation" className="inline-block bg-transparent border border-gold-400 text-gold-400 px-8 py-3 text-sm md:text-base tracking-wider hover:bg-gold-400/10 transition-all">
            REQUEST CONSULTATION
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 animate-pulse">
        <p className="text-xs tracking-widest mb-2">DISCOVER</p>
        <div className="w-[1px] h-10 bg-white/30"></div>
      </div>
    </div>
  );
};

export default HeroSection;