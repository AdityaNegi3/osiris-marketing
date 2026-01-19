import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-black py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-1">
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-8">
              Marketing Redefined
            </h2>
            <div className="w-20 h-[1px] bg-gold-400 mb-8"></div>
            <p className="text-white/80 mb-6 leading-relaxed">
              OSIRIS is not your typical marketing agency. We are the architects of desire, the curators of
              prestige, and the guardians of exclusivity for the world's most distinguished brands and individuals.
            </p>
            <p className="text-white/80 mb-8 leading-relaxed">
              Our clientele includes Fortune CEOs, luxury conglomerates, private equity firms, and
              ultra-high-net-worth individuals who require marketing strategies as exceptional as their achievements.
            </p>

            {/* Founders Section */}
            <div className="border-t border-gold-400/20 pt-8 mb-8">
              <h3 className="text-gold-400 text-xl font-light mb-6">Strategic Directors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-white text-lg font-light">Aditya Negi</p>
                  <p className="text-white/60 text-sm mt-1">Founder & Chief Executive Officer</p>
                </div>
                <div>
                  <p className="text-white text-lg font-light">Bibin Mathew</p>
                  <p className="text-white/60 text-sm mt-1">Co-Founder & Creative Director</p>
                </div>
              </div>
            </div>

            <a
              href="services"
              className="text-gold-400 inline-flex items-center tracking-wider hover:text-gold-300 transition-colors group"
            >
              EXPLORE OUR SERVICES
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Image box (HIDDEN on mobile, visible only from md breakpoint) */}
          <div className="order-2 relative hidden md:block">
            <div className="relative h-[400px] md:h-[500px] border border-gold-400/20 rounded-lg overflow-hidden">
              {/* background image from /public */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/marketing%20bg.png')" }}
                aria-label="Marketing background"
                role="img"
              />
              {/* subtle overlay to match theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
