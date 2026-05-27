import { useState, useEffect } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [activeIndex, setActiveIndex] = useState(null);

  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Construct formatted message details
      const whatsappText = `*HYDRAA CONTACT INQUIRY*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Subject:* ${formData.subject || "N/A"}\n` +
        `*Message:* ${formData.message}`;

      const encodedText = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/916391862249?text=${encodedText}`;

      // Open WhatsApp link in new tab
      window.open(whatsappUrl, "_blank");

      // Show success validation state
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  const faqs = [
    {
      q: "What is HYDRAA?",
      a: "HYDRAA is functionally optimized alkaline water, structured to enhance cellular hydration and support overall biological performance."
    },
    {
      q: "What is the pH level?",
      a: "Our water maintains a stable pH of 8.5+, achieved through a proprietary multi-stage ionization process."
    },
    {
      q: "How is it different from regular water?",
      a: "Unlike tap or standard bottled water, HYDRAA undergoes reverse osmosis, re-mineralization, and ionization to ensure absolute purity and optimal mineral balance."
    },
    {
      q: "Is it safe for daily consumption?",
      a: "Yes, it is formulated for everyday hydration, providing essential electrolytes without added sugars or artificial elements."
    },
    {
      q: "Do you offer bulk supply for businesses?",
      a: "Absolutely. We provide tailored wholesale programs for gyms, spas, corporate offices, and premium retail partners. Contact us to learn more."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative min-h-screen">
      {/* Ambient background orbs */}
      <div className="ambient-orb w-[600px] h-[600px] bg-primary-container top-[-10%] left-[-10%] pointer-events-none"></div>
      <div className="ambient-orb w-[400px] h-[400px] bg-secondary-container bottom-[10%] right-[-5%] animation-delay-2000 pointer-events-none"></div>

      <main className="flex-grow pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="text-center mb-24 mt-12 relative">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
            Let's Connect
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-90 leading-relaxed">
            Reach out to our specialists to explore the science of biological optimization and secure your supply of premium alkaline hydration.
          </p>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Glass Form Card */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h2 className="font-headline-lg text-headline-lg text-white mb-8">Send a Message</h2>
              
              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-primary-container/20 border border-primary/30 text-center space-y-3 animate-fade-in">
                  <span className="material-symbols-outlined text-[48px] text-primary">done_all</span>
                  <h3 className="font-headline-lg text-headline-lg text-white">Request Transmitted</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Our hydration specialists have received your inquiry. A response will be issued within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Full Name</label>
                      <input
                        className="input-glass text-white px-0 py-3 w-full"
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
                      <input
                        className="input-glass text-white px-0 py-3 w-full"
                        id="email"
                        placeholder="john@example.com"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="subject">Subject</label>
                    <input
                      className="input-glass text-white px-0 py-3 w-full"
                      id="subject"
                      placeholder="Inquiry Type"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">Message</label>
                    <textarea
                      className="input-glass text-white px-0 py-3 w-full resize-none"
                      id="message"
                      placeholder="How can we assist you in your hydration journey?"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      className="btn-primary font-label-md text-label-md text-white px-8 py-4 rounded-full w-full md:w-auto flex items-center justify-center gap-2"
                      type="submit"
                    >
                      <span>Transmit Request</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            
            {/* Direct Line Details */}
            <div className="glass-panel rounded-xl p-8 flex flex-col gap-8">
              <h3 className="font-headline-xl text-headline-xl text-white mb-2">Direct Line</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1 font-semibold">Phone</p>
                  <a href="tel:+916391862249" className="font-body-md text-body-md text-white hover:text-primary transition-colors">
                    +91 63918 62249
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 text-primary">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1 font-semibold">WhatsApp</p>
                  <a href="https://wa.me/916391862249" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-white hover:text-primary transition-colors">
                    +91 63918 62249
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1 font-semibold">Email</p>
                  <a href="mailto:source@hydraa.com" className="font-body-md text-body-md text-white break-all hover:text-primary transition-colors">
                    source@hydraa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 text-primary">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1 font-semibold">Instagram</p>
                  <a href="https://www.instagram.com/hydra_alkalinewater?igsh=ODc3Mzl5Mzl1Zm10" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-white break-all hover:text-primary transition-colors">
                    @hydra_alkalinewater
                  </a>
                </div>
              </div>
            </div>

            {/* Partner CTA */}
            <div className="glass-panel rounded-xl p-8 bg-gradient-to-br from-primary-container/20 to-transparent border border-primary/20 relative overflow-hidden group">
              <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px] text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>water_drop</span>
              </div>
              <h3 className="font-headline-xl text-headline-xl text-white mb-4 relative z-10">Become a Partner</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 relative z-10 opacity-80 leading-relaxed">
                Join hands with Hydraa and bring premium alkaline hydration to your customers.
              </p>
              <a
                href="https://wa.me/916391862249?text=Hi%2C%20I'm%20interested%20in%20becoming%20a%20partner%20with%20Hydraa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-label-md text-label-md text-white px-6 py-3 rounded-full inline-flex items-center gap-2 relative z-10 w-full justify-center"
              >
                Apply Now
              </a>
            </div>

          </div>

        </div>

        {/* FAQs */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-white">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto opacity-80">
              Clarity on our process and product.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`glass-panel rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? "bg-white/10" : ""}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-label-md text-label-md text-white text-lg font-semibold">{faq.q}</span>
                    <span
                      className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      expand_more
                    </span>
                  </button>
                  
                  {/* Smooth expand/collapse using grid template rows */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body-md text-body-md text-on-surface-variant px-6 pb-6 pt-2 leading-relaxed opacity-90">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
