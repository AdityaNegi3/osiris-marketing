import React, { useState } from 'react';

const ConsultationSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('company', formState.company);
      formData.append('budget', formState.budget);
      formData.append('message', formState.message);
      formData.append('_subject', 'New OSIRIS Consultation Request');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/osirisvip.life@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          company: '',
          budget: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Failed to send form:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="bg-black py-24 md:py-32 relative">
      {/* Gold gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', 
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Consultation Text */}
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-6">
              Private Consultation
            </h2>
            <div className="w-20 h-[1px] bg-gold-400 mb-8"></div>
            <p className="text-white/80 mb-6 leading-relaxed">
              OSIRIS consultations are reserved for serious inquiries from established brands, executives, and organizations with substantial marketing investments.
            </p>
            <p className="text-white/80 mb-10 leading-relaxed">
              Our flexible engagement options ensure we work with clients across various budget ranges, from custom solutions to comprehensive marketing strategies.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-[1px] bg-gold-400 mt-3 mr-4"></div>
                <div>
                  <h3 className="text-white text-lg font-light">Strategic Assessment</h3>
                  <p className="text-white/60 text-sm mt-1">Comprehensive analysis of your brand positioning and market opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-[1px] bg-gold-400 mt-3 mr-4"></div>
                <div>
                  <h3 className="text-white text-lg font-light">Bespoke Strategy</h3>
                  <p className="text-white/60 text-sm mt-1">Custom marketing strategies tailored to your exclusive requirements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-[1px] bg-gold-400 mt-3 mr-4"></div>
                <div>
                  <h3 className="text-white text-lg font-light">Discreet Execution</h3>
                  <p className="text-white/60 text-sm mt-1">Confidential implementation with the highest levels of professionalism</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Consultation Form */}
          <div className="bg-black/50 backdrop-blur-md p-8 md:p-12 border border-white/10">
            {!isSubmitted ? (
              <>
                <h3 className="text-white text-2xl font-light tracking-wide mb-8">
                  Request Consultation
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white/80 text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-black/60 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/80 text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-black/60 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-white/80 text-sm mb-2">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full bg-black/60 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-white/80 text-sm mb-2">Marketing Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full bg-black/60 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-400/50"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="Custom - $100">Custom - $100</option>
                        <option value="$100 - $500">$100 - $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000+">$1,000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white/80 text-sm mb-2">Project Overview</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-black/60 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-400/50"
                        placeholder="Describe your marketing objectives and requirements..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-transparent border border-gold-400 text-gold-400 py-3 text-sm tracking-wider transition-all ${
                          isSubmitting ? 'opacity-50' : 'hover:bg-gold-400/10'
                        }`}
                      >
                        {isSubmitting ? 'PROCESSING...' : 'REQUEST CONSULTATION'}
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-white/40 text-xs mt-6">
                  All consultations are confidential. Only qualified prospects meeting our criteria will be contacted within 48 hours.
                </p>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full border-2 border-gold-400 flex items-center justify-center mx-auto mb-8">
                  <span className="text-gold-400 text-3xl">✓</span>
                </div>
                <h3 className="text-white text-3xl font-light tracking-wide mb-6">
                  Thank You
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Your consultation request has been successfully submitted. Our team has received your inquiry and will review it carefully.
                </p>
                <p className="text-gold-400 text-lg font-light mb-8">
                  We will get back to you within 48 hours.
                </p>
                <div className="w-20 h-[1px] bg-gold-400 mx-auto mb-6"></div>
                <p className="text-white/60 text-sm mb-8">
                  If your project aligns with our exclusive client criteria, we will contact you to schedule a private consultation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold-400 hover:text-gold-300 text-sm tracking-wider transition-colors border border-gold-400/50 px-6 py-2 hover:bg-gold-400/10"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;