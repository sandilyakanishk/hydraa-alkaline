import React, { useState } from 'react';

export default function FAQ() {
  const faqs = [
    { q: "What is alkaline water?", a: "Alkaline water has a higher pH level than regular drinking water, typically between 8 and 9. It contains alkalizing compounds, including calcium, silica, potassium, magnesium, and bicarbonate." },
    { q: "How much alkaline water should I drink?", a: "We recommend drinking 8-10 glasses (about 2 liters) of water daily. However, you should start gradually with alkaline water to let your body adjust." },
    { q: "Is alkaline water safe for children?", a: "Yes, alkaline water is generally safe for children. However, infants and toddlers do not typically need alkaline water as their bodies naturally maintain pH balance." },
    { q: "Where do you source your water?", a: "Our water undergoes a rigorous 7-step purification process, followed by our proprietary remineralization and ionization process to achieve the perfect alkaline balance." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto min-h-screen">
      <h1 className="text-display-md md:text-display-lg text-primary text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-surface/50 backdrop-blur-[20px] border border-white/10 rounded-2xl overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-title-md text-white font-medium">{faq.q}</span>
              <span className="material-symbols-outlined text-primary">
                {openIndex === i ? "expand_less" : "expand_more"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-body-md text-on-surface-variant">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
