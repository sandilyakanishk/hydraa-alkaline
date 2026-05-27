import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      <div className="bg-surface/50 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 md:p-16">
        <h1 className="text-display-md md:text-display-lg text-primary mb-6">About HYDRAA</h1>
        <p className="text-body-lg text-on-surface-variant mb-6">
          At HYDRAA, we believe in the power of pure, alkaline water to transform lives. Our journey started with a simple mission: to provide the highest quality hydration that supports overall health and well-being.
        </p>
        <p className="text-body-lg text-on-surface-variant">
          We use state-of-the-art technology to ensure every drop of our alkaline water is perfectly balanced, rich in essential minerals, and free from contaminants. Welcome to the future of hydration.
        </p>
      </div>
    </div>
  );
}
