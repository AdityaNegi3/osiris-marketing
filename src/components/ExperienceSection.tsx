import React from 'react';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', 
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-4">
            Our Expertise
          </h2>
          <div className="w-20 h-[1px] bg-gold-400 mx-auto mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Delivering exceptional results across diverse luxury sectors and exclusive digital marketing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {/* Expertise 1 */}
          <div className="group">
            <div className="relative h-[300px] overflow-hidden mb-6 bg-gradient-to-br from-gold-400/10 to-black border border-gold-400/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 border border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full"></div>
                  </div>
                  <p className="text-gold-400/60 text-xs tracking-wider">LUXURY</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-light tracking-wide mb-3">Luxury Brand Campaigns</h3>
            <p className="text-white/60 text-sm">Multi-million dollar campaigns for heritage luxury brands and emerging premium labels seeking market dominance.</p>
          </div>

          {/* Expertise 2 */}
          <div className="group">
            <div className="relative h-[300px] overflow-hidden mb-6 bg-gradient-to-br from-gold-400/10 to-black border border-gold-400/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 border border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full"></div>
                  </div>
                  <p className="text-gold-400/60 text-xs tracking-wider">DEVELOPMENT</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-light tracking-wide mb-3">Premium Web Development</h3>
            <p className="text-white/60 text-sm">Bespoke digital experiences and sophisticated web platforms for luxury brands and high-profile clients.</p>
          </div>

          {/* Expertise 3 */}
          <div className="group">
            <div className="relative h-[300px] overflow-hidden mb-6 bg-gradient-to-br from-gold-400/10 to-black border border-gold-400/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 border border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full"></div>
                  </div>
                  <p className="text-gold-400/60 text-xs tracking-wider">AUTOMATION</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-light tracking-wide mb-3">Marketing Automation</h3>
            <p className="text-white/60 text-sm">Advanced CRM systems and automated marketing workflows for sophisticated client engagement and lead nurturing.</p>
          </div>

          {/* Expertise 4 */}
          <div className="group">
            <div className="relative h-[300px] overflow-hidden mb-6 bg-gradient-to-br from-gold-400/10 to-black border border-gold-400/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 border border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full"></div>
                  </div>
                  <p className="text-gold-400/60 text-xs tracking-wider">ADVERTISING</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-light tracking-wide mb-3">Paid Advertisement Excellence</h3>
            <p className="text-white/60 text-sm">Strategic advertising campaigns across premium platforms with sophisticated targeting and ROI optimization.</p>
          </div>

          {/* Expertise 5 */}
          <div className="group">
            <div className="relative h-[300px] overflow-hidden mb-6 bg-gradient-to-br from-gold-400/10 to-black border border-gold-400/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 border border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full"></div>
                  </div>
                  <p className="text-gold-400/60 text-xs tracking-wider">SOCIAL</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-light tracking-wide mb-3">Elite Social Media</h3>
            <p className="text-white/60 text-sm">Discreet social media management and content curation for executives and luxury brands maintaining exclusivity.</p>
          </div>

          {/* Expertise 6 */}
          <div className="group">
            <div className="relative h-[300px] overflow-hidden mb-6 bg-gradient-to-br from-gold-400/10 to-black border border-gold-400/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 border border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full"></div>
                  </div>
                  <p className="text-gold-400/60 text-xs tracking-wider">AI SYSTEMS</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-light tracking-wide mb-3">AI Call Systems</h3>
            <p className="text-white/60 text-sm">Advanced AI-powered calling solutions for premium customer service, lead qualification, and client communication.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#consultation" className="inline-block bg-transparent border border-gold-400 text-gold-400 px-8 py-3 text-sm tracking-wider hover:bg-gold-400/10 transition-all">
            DISCUSS YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;