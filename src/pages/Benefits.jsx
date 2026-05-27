import React from 'react';

export default function Benefits() {
  return (
    <div className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      <h1 className="text-display-md md:text-display-lg text-primary text-center mb-12">Benefits of Alkaline Water</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Enhanced Hydration', desc: 'Smaller molecule clusters allow water to penetrate cells more easily.' },
          { title: 'Acid Neutralization', desc: 'Helps balance the body\'s pH by neutralizing excess acid.' },
          { title: 'Rich in Minerals', desc: 'Packed with essential minerals like calcium, potassium, and magnesium.' },
          { title: 'Antioxidant Properties', desc: 'Fights free radicals and supports a healthy immune system.' },
          { title: 'Better Digestion', desc: 'Aids in digestion and helps reduce acid reflux symptoms.' },
          { title: 'Increased Energy', desc: 'Optimal hydration leads to better energy levels throughout the day.' },
        ].map((benefit, i) => (
          <div key={i} className="bg-surface/50 backdrop-blur-[20px] border border-white/10 rounded-2xl p-8 hover:bg-surface transition-colors">
            <h3 className="text-title-lg text-white mb-4">{benefit.title}</h3>
            <p className="text-body-md text-on-surface-variant">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
