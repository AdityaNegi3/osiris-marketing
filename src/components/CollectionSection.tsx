import React, { useState } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "LUXURY BRAND STRATEGY",
      description: "Comprehensive brand positioning and narrative development for ultra-premium brands seeking to dominate their market segment."
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      description: "Bespoke website development and digital experiences crafted exclusively for luxury brands and high-profile clients."
    },
    {
      id: 3,
      title: "CRM & AUTOMATION",
      description: "Advanced customer relationship management and marketing automation systems for sophisticated client engagement."
    },
    {
      id: 4,
      title: "LEAD GENERATION",
      description: "Exclusive lead generation strategies targeting high-net-worth individuals and premium market segments."
    },
    // {
    //   id: 5,
    //   title: "PAID ADVERTISEMENT",
    //   description: "Strategic paid advertising campaigns across premium platforms with sophisticated targeting and optimization."
    // },
    // {
    //   id: 6,
    //   title: "SOCIAL MEDIA MANAGEMENT",
    //   description: "Discreet social media management and content curation for executives and luxury brands maintaining exclusivity."
    // },
    // {
    //   id: 7,
    //   title: "CALL BOT SYSTEMS",
    //   description: "Advanced AI-powered inbound and outbound calling systems for premium customer service and lead qualification."
    // },
    // {
    //   id: 8,
    //   title: "EXECUTIVE PERSONAL BRANDING",
    //   description: "Discreet reputation management and thought leadership positioning for C-suite executives and high-profile individuals."
    // }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-4">
            Our Services
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions crafted exclusively for discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Service Visual */}
          <div className="relative h-[500px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-gold-400/10 to-black border border-gold-400/30">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-24 h-24 border-2 border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-gold-400/30 rounded-full"></div>
                  </div>
                  <h3 className="text-gold-400 text-xl font-light tracking-wider mb-2">
                    {services[activeIndex].title}
                  </h3>
                  <div className="w-16 h-[1px] bg-gold-400/50 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {services.map((item, index) => (
                <div 
                  key={item.id}
                  className={`cursor-pointer group transition-all duration-500 ${
                    index === activeIndex 
                      ? 'pl-6 border-l border-gold-400' 
                      : 'pl-6 border-l border-white/10 opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className={`text-lg md:text-xl font-light tracking-wide transition-colors ${
                    index === activeIndex ? 'text-gold-400' : 'text-white group-hover:text-gold-300'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 mt-2 max-w-lg text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="#consultation" className="inline-block bg-transparent border border-gold-400 text-gold-400 px-6 py-3 text-sm tracking-wider hover:bg-gold-400/10 transition-all">
                SCHEDULE CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;