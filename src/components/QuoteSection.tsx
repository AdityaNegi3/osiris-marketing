import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-black/95 py-32 md:py-40 relative">
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-gold-200/5 via-gold-400/10 to-gold-200/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <div className="text-gold-400 text-6xl font-serif mb-12">"</div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide leading-relaxed mb-8">
            We don't create marketing campaigns for everyone.
            <span className="block mt-4">We craft legends for the legendary.</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-400 mx-auto my-12"></div>
          <p className="text-gold-300 text-xl md:text-2xl font-light tracking-wider">
            MARKETING FOR THE EXCLUSIVE
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;