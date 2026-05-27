import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-on-background selection:bg-white selection:text-black">
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none"
            src={`${import.meta.env.BASE_URL}hero-bg.mp4`}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-radial-vignette z-0 pointer-events-none"></div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center z-10 relative w-full h-full pt-32 pb-24">
            <div className="lg:col-span-6"></div>
            <div className="lg:col-span-6 flex flex-col items-start gap-12">
              <div>
                <h1 className="font-display-lg-mobile md:font-display-lg text-white editorial-text leading-[0.9]">
                  PRECISION<br />HYDRATION.
                </h1>
              </div>
              <p className="font-body-lg text-body-lg text-white/70 max-w-lg font-light leading-relaxed">
                We are pioneering a new era of biological wellness. Pharmaceutical-grade alkaline hydration, meticulously engineered for the modern high-performance lifestyle.
              </p>
              <div className="flex flex-wrap gap-6 mt-4">
                <Link
                  to="/products"
                  className="btn-primary px-10 py-4 font-label-md editorial-text flex items-center gap-4"
                >
                  DISCOVER FORMATS
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline px-10 py-4 font-label-md editorial-text flex items-center"
                >
                  CONCIERGE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section (Editorial Layout) */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop relative z-10 bg-background border-b border-white/5">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col lg:flex-row gap-32 justify-between">
              {/* Mission */}
              <div className="lg:w-5/12 flex flex-col gap-8">
                <span className="font-label-md text-white/40 editorial-text">01 &mdash; Mission</span>
                <h2 className="font-headline-lg text-white editorial-text leading-tight">
                  THE PUREST<br />BIO-AVAILABLE<br />SOLUTION.
                </h2>
                <p className="font-body-lg text-white/60 font-light leading-relaxed">
                  To engineer a hydration tool that transcends survival. We utilize advanced ionization to create water that actively contributes to bodily equilibrium and cellular health, uncompromising in purity.
                </p>
              </div>

              {/* Vision */}
              <div className="lg:w-5/12 flex flex-col gap-8 lg:mt-32">
                <span className="font-label-md text-white/40 editorial-text">02 &mdash; Vision</span>
                <h2 className="font-headline-lg text-white editorial-text leading-tight">
                  OPTIMIZATION<br />AS THE STANDARD.
                </h2>
                <p className="font-body-lg text-white/60 font-light leading-relaxed">
                  A future where peak biological performance is accessible. We envision a world where the science of water empowers individuals to perform, both visually and biologically, at their absolute peak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hydraa Section (Stark Minimal) */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop bg-[#080808]">
          <div className="max-w-container-max mx-auto">
            <div className="mb-32">
              <h2 className="font-headline-xl text-white editorial-text">THE HYDRAA DIFFERENCE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 border-t border-white/5 pt-16">
              {/* Feature 1 */}
              <div className="flex flex-col gap-8 pr-8">
                <span className="font-display-lg text-white/20 editorial-text">01</span>
                <div>
                  <h3 className="font-label-md text-white editorial-text mb-4">OPTIMIZED PH 8.5+</h3>
                  <p className="font-body-md text-white/50 font-light">
                    Precisely balanced alkaline hydration to neutralize acidic buildup and promote systemic equilibrium.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-8 pr-8 md:border-l md:border-white/5 md:pl-8">
                <span className="font-display-lg text-white/20 editorial-text">02</span>
                <div>
                  <h3 className="font-label-md text-white editorial-text mb-4">ADVANCED IONISATION</h3>
                  <p className="font-body-md text-white/50 font-light">
                    Micro-clustered molecules engineered for rapid cellular absorption and superior deep hydration.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-8 pr-8 md:border-l md:border-white/5 md:pl-8">
                <span className="font-display-lg text-white/20 editorial-text">03</span>
                <div>
                  <h3 className="font-label-md text-white editorial-text mb-4">PHARMACEUTICAL GRADE</h3>
                  <p className="font-body-md text-white/50 font-light">
                    Rigorous purification processes delivered at a standard that exceeds conventional luxury water brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Protocol Section (Typography Flow) */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop bg-background border-y border-white/5">
          <div className="max-w-3xl mx-auto mb-32 text-center">
            <h2 className="font-headline-xl text-white editorial-text mb-8">THE PROTOCOL</h2>
            <p className="font-body-lg text-white/60 font-light">
              A rigorous 6-step refinement process transforming source water into a high-performance hydration instrument.
            </p>
          </div>

          <div className="max-w-container-max mx-auto flex flex-col">
            {[
              { phase: "PHASE I", title: "MULTI-STAGE FILTRATION", desc: "Reverse osmosis and activated carbon strip away impurities, heavy metals, and micro-plastics at a microscopic level." },
              { phase: "PHASE II", title: "ELECTROLYSIS & IONISATION", desc: "Restructuring water molecules to separate acidic and alkaline components, increasing pH and reducing ORP for antioxidant properties." },
              { phase: "PHASE III", title: "MINERAL BALANCING", desc: "Essential electrolytes—calcium, magnesium, and potassium—are precisely reintroduced for optimal biological absorption." },
              { phase: "PHASE IV", title: "QUALITY ASSURANCE", desc: "Continuous spectrophotometric analysis guarantees every batch meets strict pharmaceutical-grade tolerances." },
              { phase: "PHASE V", title: "HYGIENIC PACKAGING", desc: "Sealed in UV-protected vessels within a clean-room environment to preserve ionization integrity." },
              { phase: "FINAL", title: "READY FOR HYDRATION", desc: "The ultimate tool for your physical optimization." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-baseline py-12 border-b border-white/5 group hover:bg-white/[0.01] transition-colors duration-500">
                <div className="md:w-1/4 mb-4 md:mb-0 pl-4 md:pl-8">
                  <span className="font-label-md text-white/40 editorial-text group-hover:text-white transition-colors duration-500">{step.phase}</span>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="font-headline-lg text-white editorial-text text-2xl">{step.title}</h3>
                </div>
                <div className="md:w-5/12 pr-4 md:pr-8">
                  <p className="font-body-md text-white/50 font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Become a Partner Section (Understated luxury CTA) */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop bg-[#030303] flex items-center justify-center text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-10">
            <span className="material-symbols-outlined text-[48px] text-white/20 font-light">handshake</span>
            <h2 className="font-headline-xl text-white editorial-text">ELEVATE YOUR ESTABLISHMENT</h2>
            <p className="font-body-lg text-white/60 font-light">
              HYDRAA partners with premium hospitality, fitness, and corporate entities. Provide your clientele with the pinnacle of hydration technology.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="btn-outline px-12 py-5 font-label-md editorial-text inline-flex items-center gap-3 tracking-[0.2em]"
              >
                BECOME A PARTNER
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
