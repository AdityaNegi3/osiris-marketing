import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-black/95 py-32 md:py-40 relative overflow-hidden">
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-gold-200/5 via-gold-400/10 to-gold-200/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          {/* Dramatic quote mark */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}  // 👈 one-time animation
            className="text-gold-400 text-6xl font-serif mb-12"
          >
            "
          </motion.div>

          {/* Quote text */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }} // 👈 one-time animation
            className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide leading-relaxed mb-8"
          >
            We don't create marketing campaigns for everyone.
            <span className="block mt-4">We craft legends for the legendary.</span>
          </motion.h2>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }} // 👈 one-time animation
            className="w-20 h-[1px] bg-gold-400 mx-auto my-12 origin-center"
          ></motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.3 }} // 👈 one-time animation
            className="text-gold-300 text-xl md:text-2xl font-light tracking-wider"
          >
            MARKETING FOR THE EXCLUSIVE
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
