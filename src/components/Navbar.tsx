import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "portfolio", label: "PORTFOLIO" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If we're currently on homepage, use "#id" (native anchor).
  // If not, use "/#id" so clicking from other pages navigates to homepage + hash.
  const computeHref = (id: string) => (window.location.pathname === "/" ? `#${id}` : `/#${id}`);

  // Click handler to handle cross-page navigation without Next
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // always close mobile menu on click
    setIsOpen(false);

    // If it's same-page native hash (starts with '#'), let browser handle it (native scrolling)
    if (href.startsWith("#")) {
      // Optional: smooth scroll for SPA if element exists
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // prevent default to use smooth scroll instead of instant jump
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // update hash without jumping
        try {
          history.replaceState(null, "", `#${id}`);
        } catch {}
      }
      return;
    }

    // If href is '/#id' and we're NOT on homepage, navigate to homepage with hash.
    if (href.startsWith("/#")) {
      // If already on homepage for some reason, set hash and scroll smoothly:
      if (window.location.pathname === "/") {
        e.preventDefault();
        const id = href.split("#")[1] || "";
        if (id) {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            try {
              history.replaceState(null, "", `#${id}`);
            } catch {}
          } else {
            // fallback: set location.hash to let browser jump
            window.location.hash = `#${id}`;
          }
        } else {
          // fallback: push to root
          window.location.href = "/";
        }
      } else {
        // Navigate to homepage with hash — this will load the homepage and the browser will try to land on the anchor.
        // Use replace/assign — assign keeps history, replace does not.
        // We don't preventDefault because we want navigation to happen, but we do prevent default to avoid double handling in SPA.
        e.preventDefault();
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-extralight tracking-[0.2em] text-white">
              OSIRIS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const href = computeHref(link.id);
              return (
                <a
                  key={link.id}
                  href={href}
                  onClick={(e) => handleAnchorClick(e, href)}
                  className="text-white/80 hover:text-gold-400 text-sm tracking-wider transition-colors"
                >
                  {link.label}
                </a>
              );
            })}

            <a
              href={computeHref("consultation")}
              onClick={(e) => handleAnchorClick(e, computeHref("consultation"))}
              className="bg-transparent border border-gold-400 text-gold-400 px-6 py-2 text-sm tracking-wider hover:bg-gold-400/10 transition-all"
            >
              CONSULTATION
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full bg-black transition-all duration-300 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button inside Menu */}
        <div className="absolute top-6 right-6">
          <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none" aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-20 px-8 space-y-8">
          {NAV_LINKS.map((link) => {
            const href = computeHref(link.id);
            return (
              <a
                key={link.id}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="text-white text-2xl font-light tracking-wider"
              >
                {link.label}
              </a>
            );
          })}

          <a
            href={computeHref("consultation")}
            onClick={(e) => handleAnchorClick(e, computeHref("consultation"))}
            className="text-white text-2xl font-light tracking-wider"
          >
            CONSULTATION
          </a>

          <div className="mt-auto pb-12">
            <a
              href={computeHref("consultation")}
              onClick={(e) => handleAnchorClick(e, computeHref("consultation"))}
              className="inline-block border border-gold-400 text-gold-400 px-8 py-3 text-lg tracking-wider"
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
