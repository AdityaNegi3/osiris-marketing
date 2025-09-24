import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | OSIRIS";
    window.scrollTo(0, 0); // ✅ Auto-scroll to top when page loads
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Terms of Service</h1>
        <p className="text-white/60 mb-6">Effective Date: August 2025</p>

        <p className="text-white/70 leading-relaxed mb-6">
          Welcome to <strong>Osiris Marketing</strong>. By using our website and services, you
          agree to the following terms:
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Services</h2>
        <p className="text-white/70 mb-4">
          We provide marketing, branding, and strategic consulting for luxury brands,
          high-net-worth individuals, and elite organizations.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Eligibility</h2>
        <p className="text-white/70 mb-4">You must be at least 18 years old to use our services.</p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Payment &amp; Refunds</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Fees are communicated before service initiation.</li>
          <li>Payments are non-refundable unless otherwise agreed in writing.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Intellectual Property</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>
            All content, strategies, and deliverables created by Osiris Marketing remain our
            intellectual property unless explicitly transferred by contract.
          </li>
          <li>Clients may not copy, resell, or redistribute our work without written permission.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Client Responsibilities</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Provide accurate information for project success.</li>
          <li>Respect agreed timelines and communication channels.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-white/70 mb-6">
          We are not responsible for indirect losses, including lost profits or opportunities,
          resulting from service use.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Termination</h2>
        <p className="text-white/70 mb-6">
          We may suspend or terminate services if terms are violated.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
