import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NDAPage: React.FC = () => {
  useEffect(() => {
    document.title = "NDA | OSIRIS";
    window.scrollTo(0, 0); // ✅ Auto-scroll to top when page loads
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-light mb-4">
          NDA (Non-Disclosure Agreement)
        </h1>
        <p className="text-white/60 mb-6">Effective Date: August 2025</p>

        <p className="text-white/70 leading-relaxed mb-6">
          This NDA Agreement is made between <strong>Osiris Marketing</strong> and the Client.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Purpose</h2>
        <p className="text-white/70 mb-4">
          To protect confidential business information exchanged during consultations and service delivery.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Confidential Information</h2>
        <p className="text-white/70 mb-2">Includes, but is not limited to:</p>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Business strategies, marketing plans</li>
          <li>Financial information</li>
          <li>Client lists</li>
          <li>Creative assets</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Obligations</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Both parties agree not to disclose or misuse confidential information.</li>
          <li>Information shall only be used for the purpose of executing services.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Exclusions</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Information already public.</li>
          <li>Information lawfully obtained from a third party.</li>
          <li>Information required by law to be disclosed.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Term</h2>
        <p className="text-white/70 mb-4">
          This Agreement remains effective for 3 years from the date of disclosure unless otherwise agreed.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Governing Law</h2>
        <p className="text-white/70 mb-6">
          This Agreement shall be governed by the laws of India.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default NDAPage;
