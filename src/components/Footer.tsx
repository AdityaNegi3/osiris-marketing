import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-extralight tracking-[0.2em] text-white">
              OSIRIS
            </Link>
            <p className="text-white/40 text-sm mt-4 max-w-xs">
              Exclusive marketing for the world's most distinguished brands and individuals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-light tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/60 hover:text-gold-400 text-sm transition-colors">Luxury Brand Strategy</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold-400 text-sm transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold-400 text-sm transition-colors">CRM & Automation</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold-400 text-sm transition-colors">Lead Generation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-light tracking-wider mb-4">CONTACT</h4>
            <p className="text-white/60 text-sm mb-2">By appointment only</p>
            <p className="text-white/60 text-sm">osirisvip.life@gmail.com</p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-light tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/nda" className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                  NDA Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} OSIRIS Marketing. All rights reserved.</p>
          <p className="text-white/40 text-xs mt-4 md:mt-0">Marketing excellence for the exceptional.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
