import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | OSIRIS";
    window.scrollTo(0, 0); // 👈 scroll to top when page loads
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar forced on top and clickable */}
      <div className="relative z-50 pointer-events-auto">
        <Navbar />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-6">Effective Date: August 2025</p>

        <p className="text-white/70 leading-relaxed mb-6">
          At <strong>Osiris Marketing</strong>, we respect your privacy and are
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, and safeguard your
          information.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, billing details, etc.
          </li>
          <li>
            <strong>Business Information:</strong> Company name, website, and
            project requirements.
          </li>
          <li>
            <strong>Usage Data:</strong> Website interactions, cookies, IP
            addresses.
          </li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>To provide and improve our services.</li>
          <li>To personalize marketing strategies for your brand.</li>
          <li>
            To communicate with you regarding consultations, projects, and
            updates.
          </li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Sharing of Information</h2>
        <p className="text-white/70 mb-4">
          We do not sell your personal data. Information may be shared only
          with:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Service providers who assist in project delivery.</li>
          <li>Legal authorities, if required by law.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-8 mb-3">Data Security</h2>
        <p className="text-white/70 mb-6">
          We use encryption, secure servers, and access controls to protect your
          data.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-3">Your Rights</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>Request access, correction, or deletion of your personal data.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>

        <p className="text-white/60">
          For requests, contact:{" "}
          <a
            href="mailto:osirisvip.life@gmail.com"
            className="underline text-white/80"
          >
            osirisvip.life@gmail.com
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
