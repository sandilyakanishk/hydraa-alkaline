import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Ambient Background Orbs */}
      <div className="ambient-orb w-[600px] h-[600px] bg-primary-container top-[-10%] left-[-10%]"></div>
      <div className="ambient-orb w-[400px] h-[400px] bg-secondary-container bottom-[10%] right-[-5%] animation-delay-2000"></div>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden liquid-bg px-margin-mobile md:px-margin-desktop py-24">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
            src="/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-background/50 z-0 pointer-events-none"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center z-10 relative w-full">
            {/* Left Column is left empty for the video's bottle details */}
            <div className="hidden lg:block lg:col-span-6"></div>

            {/* Right Column contains the Brand Message */}
            <div className="lg:col-span-6 flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-primary text-[16px]">water_drop</span>
                <span className="font-label-md text-label-md text-primary tracking-widest uppercase">The Hydro-Future</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface glow-text">
                Redefining Every Day Hydration
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl opacity-90 leading-relaxed">
                At HYDRAA, we believe that water is not just for survival, but for optimization. We are pioneering a new era of biological wellness by delivering pharmaceutical-grade alkaline hydration designed for the modern lifestyle.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  to="/products"
                  className="btn-primary text-white font-label-md text-label-md px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(176,198,255,0.4)] transition-all duration-300"
                >
                  Explore Formats
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full border border-white/20 font-label-md text-label-md text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-[20px] transition-all duration-300 flex items-center justify-center"
                >
                  Connect Concierge
                </Link>
              </div>
            </div>
          </div>

          {/* Liquid Transition Divider */}
          <div className="wave-divider">
            <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
              <path className="shape-fill" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Mission & Vision Section (Bento Grid) */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative z-10">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Mission Card */}
              <div className="glass-panel rounded-xl p-12 flex flex-col gap-6 relative overflow-hidden group hover:bg-surface/40 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>
                <div className="h-14 w-14 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>track_changes</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Mission</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed">
                  To engineer the purest, most bio-available hydration solution accessible to everyone. We utilize advanced ionization processes to create water that actively contributes to bodily equilibrium and cellular health.
                </p>
              </div>

              {/* Vision Card */}
              <div className="glass-panel rounded-xl p-12 flex flex-col gap-6 relative overflow-hidden group hover:bg-surface/40 transition-all duration-500">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/10 transition-colors duration-500 pointer-events-none"></div>
                <div className="h-14 w-14 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-secondary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Vision</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed">
                  A future where optimal hydration is not a luxury, but a standard. We envision a world where the science of water empowers individuals to perform at their peak, visually and biologically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hydraa Section */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface relative">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-20 flex flex-col items-center gap-4">
              <h2 className="font-display-lg-mobile md:font-headline-xl text-display-lg-mobile md:text-headline-xl text-on-surface">
                Why HYDRAA?
              </h2>
              <div className="h-1 w-24 bg-primary/50 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center gap-6 p-8">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-high z-10 relative">
                    <span className="font-headline-lg text-headline-lg text-primary">8.5+</span>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"></div>
                </div>
                <h3 className="font-label-md text-label-md text-on-surface tracking-widest uppercase">Optimized pH</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                  Precisely balanced alkaline hydration to neutralize acidic buildup and promote systemic equilibrium.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center gap-6 p-8">
                <div className="h-24 w-24 rounded-full border border-secondary/30 flex items-center justify-center bg-surface-container-high shadow-[0_0_30px_rgba(182,199,235,0.1)]">
                  <span className="material-symbols-outlined text-[40px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                </div>
                <h3 className="font-label-md text-label-md text-on-surface tracking-widest uppercase">Advanced Ionisation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                  Micro-clustered molecules engineered for rapid cellular absorption and superior deep hydration.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center gap-6 p-8">
                <div className="h-24 w-24 rounded-full border border-tertiary/30 flex items-center justify-center bg-surface-container-high">
                  <span className="material-symbols-outlined text-[40px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                </div>
                <h3 className="font-label-md text-label-md text-on-surface tracking-widest uppercase">Premium Quality</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                  Pharmaceutical-grade purification processes delivered at a price point that supports daily use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Process Section (Linear Flow) */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
          
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="mb-24 md:w-1/2">
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">The Protocol</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80">
                Our rigorous 6-step refinement process transforms standard source water into a high-performance hydration tool.
              </p>
            </div>

            {/* Vertical Timeline / Linear Flow */}
            <div className="relative border-l border-outline-variant/30 ml-6 md:ml-12 pl-12 space-y-20">
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute -left-[54px] top-1 h-6 w-6 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(176,198,255,0.5)]"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <span className="font-label-md text-label-md text-primary tracking-widest block mb-2">PHASE 01</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">Multi-Stage Filtration</h3>
                  </div>
                  <div className="md:w-2/3 glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Raw source water undergoes extensive reverse osmosis and activated carbon filtration, stripping away impurities, heavy metals, and micro-plastics at a microscopic level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute -left-[54px] top-1 h-6 w-6 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(176,198,255,0.5)]"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <span className="font-label-md text-label-md text-primary tracking-widest block mb-2">PHASE 02</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">Advanced Ionisation</h3>
                  </div>
                  <div className="md:w-2/3 glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Electrolysis restructures the water molecules, separating acidic and alkaline components. This increases the pH and reduces ORP (Oxidation Reduction Potential) for antioxidant properties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute -left-[54px] top-1 h-6 w-6 rounded-full bg-surface border-2 border-secondary group-hover:bg-secondary transition-colors duration-300 shadow-[0_0_10px_rgba(182,199,235,0.5)]"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <span className="font-label-md text-label-md text-secondary tracking-widest block mb-2">PHASE 03</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">Mineral Balancing</h3>
                  </div>
                  <div className="md:w-2/3 glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Essential electrolytes—calcium, magnesium, and potassium—are precisely reintroduced to ensure optimal biological absorption and a crisp, clean taste profile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="absolute -left-[54px] top-1 h-6 w-6 rounded-full bg-surface border-2 border-outline-variant group-hover:bg-tertiary transition-colors duration-300"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <span className="font-label-md text-label-md text-outline tracking-widest block mb-2">PHASE 04</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">Quality Testing</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-body-md text-body-md text-on-surface-variant pt-2 leading-relaxed opacity-80">
                      Continuous spectrophotometric analysis and pH monitoring guarantee every batch meets our strict pharmaceutical-grade tolerances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative group">
                <div className="absolute -left-[54px] top-1 h-6 w-6 rounded-full bg-surface border-2 border-outline-variant group-hover:bg-tertiary transition-colors duration-300"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <span className="font-label-md text-label-md text-outline tracking-widest block mb-2">PHASE 05</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">Hygienic Packaging</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-body-md text-body-md text-on-surface-variant pt-2 leading-relaxed opacity-80">
                      Sealed in environmentally conscious, UV-protected vessels within a clean-room environment to preserve ionization integrity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative group">
                <div className="absolute -left-[54px] top-1 h-6 w-6 rounded-full bg-primary border-2 border-primary shadow-[0_0_15px_rgba(176,198,255,0.8)] animate-pulse"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <span className="font-label-md text-label-md text-primary tracking-widest block mb-2">FINAL</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">Ready for Hydration</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
