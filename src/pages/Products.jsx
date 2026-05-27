import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsList = [
    {
      id: "the-daily",
      name: "The Daily",
      volume: "750ML",
      description: "The optimal volume for sustained hydration throughout your primary work cycle. Designed to sit elegantly on any desk.",
      chips: ["pH 8.5+", "Ionised", "Minerals"],
      image: `${import.meta.env.BASE_URL}daily-bg.jpg`,
      reverse: false
    },
    {
      id: "the-endurance",
      name: "The Endurance",
      volume: "1L",
      description: "Maximum capacity for intense physical training or extended travel. Uncompromising hydration reserves.",
      chips: ["pH 8.5+", "Electrolytes"],
      image: `${import.meta.env.BASE_URL}endurance-bg.jpg`,
      reverse: true
    },
    {
      id: "the-compact",
      name: "The Compact",
      volume: "500ML",
      description: "Premium beachside and outdoor hydration. Perfectly formatted 500ml Compact vessel designed to sustain biological equilibrium during travel, sport, and lifestyle exploration.",
      chips: ["pH 8.5+", "Compact Format", "Electrolytes"],
      image: `${import.meta.env.BASE_URL}compact-bg.jpg`,
      reverse: true,
      scale: true
    }
  ];

  const benefitsList = [
    { name: "Better Hydration", icon: "water_drop" },
    { name: "Smooth Taste", icon: "waves" },
    { name: "pH Balance", icon: "science" },
    { name: "Energy Support", icon: "bolt" },
    { name: "Detox Support", icon: "health_and_safety" }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-transparent to-transparent z-0"></div>

      <main className="pt-[100px] relative z-10">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center liquid-bg px-margin-mobile md:px-margin-desktop py-[120px]">
          <div className="max-w-container-max mx-auto text-center relative z-10">
            <img
              alt="HYDRAA Branding"
              className="mx-auto h-[40px] md:h-[60px] object-contain mb-8 opacity-80 mix-blend-screen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_e0Op7HAQ3gPhMvSQ7EnTgHfLPBKjQjL8hK55YUuk34UECyE6Pm7gNvlolLdFMzen0A7VpkJzpz32A2_5LP6OYcLTOqQ5BWXv2k7nwSVm3d2h-0zrflJYq8IT_cXOxu6QVjPU0Xi7ngc3TzDL32lRmHlKf2eC1vZSe0WLGm9TWvnUgDFVmN3aKrNEAKJv1igR0zHem9mob3dXjeb9gZ-K7ft08wnN9pCcjN3eR3sI15IXV0nBfs5lxVntqo_3YSEhq1pwuS9DGk-"
            />
            <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-6 tracking-tighter">
              Precision Formats
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-95 leading-relaxed">
              Engineered hydration for every phase of your day. High-alkaline, mineral-rich purity in forms designed for seamless integration into a high-performance lifestyle.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-[120px] max-w-container-max mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {productsList.map((product) => {
              if (product.id === "the-daily") {
                return (
                  <div
                    key={product.id}
                    className="relative rounded-xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-end p-8 md:p-12 group transition-all duration-500 shadow-xl border border-white/10"
                  >
                    {/* 16:9 Background Image */}
                    <img
                      src={product.image}
                      alt={`${product.name} ${product.volume} HYDRAA bottle.`}
                      className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Gradient Overlay for High Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-transparent z-0 pointer-events-none"></div>

                    {/* Info panel aligned to right over background */}
                    <div className="relative z-10 w-full md:w-1/2 space-y-6 text-left">
                      <div>
                        <h2 className="font-headline-lg text-headline-lg text-white mb-2">{product.name}</h2>
                        <p className="font-label-md text-label-md text-primary tracking-widest font-semibold">{product.volume}</p>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant opacity-95 leading-relaxed bg-background/35 backdrop-blur-[2px] p-4 rounded-lg">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.chips.map((chip, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 rounded-full border border-primary/30 text-primary font-label-md text-label-md bg-primary/10 backdrop-blur-sm shadow-sm font-semibold"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (product.id === "the-compact" || product.id === "the-endurance") {
                return (
                  <div
                    key={product.id}
                    className="relative rounded-xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center p-8 md:p-12 group transition-all duration-500 shadow-xl border border-white/10"
                  >
                    {/* 16:9 Background Image */}
                    <img
                      src={product.image}
                      alt={`${product.name} ${product.volume} HYDRAA bottle.`}
                      className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Gradient Overlay for High Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent z-0 pointer-events-none"></div>

                    {/* Info panel aligned to left over background */}
                    <div className="relative z-10 w-full md:w-1/2 space-y-6">
                      <div>
                        <h2 className="font-headline-lg text-headline-lg text-white mb-2">{product.name}</h2>
                        <p className="font-label-md text-label-md text-primary tracking-widest font-semibold">{product.volume}</p>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant opacity-95 leading-relaxed bg-background/35 backdrop-blur-[2px] p-4 rounded-lg">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.chips.map((chip, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 rounded-full border border-primary/30 text-primary font-label-md text-label-md bg-primary/10 backdrop-blur-sm shadow-sm font-semibold"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={product.id}
                  className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 group hover:bg-white/5 transition-all duration-500"
                >
                  {/* Image panel */}
                  <div className={`w-full md:w-1/2 h-[300px] md:h-[400px] relative flex items-center justify-center ${product.reverse ? "md:order-2" : "md:order-1"}`}>
                    <img
                      alt={`${product.name} ${product.volume} HYDRAA bottle.`}
                      className={`h-full object-contain filter drop-shadow-[0_0_30px_rgba(176,198,255,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out ${product.scale ? "scale-75 group-hover:scale-[0.8]" : ""}`}
                      src={product.image}
                      loading="lazy"
                    />
                  </div>

                  {/* Info panel */}
                  <div className={`w-full md:w-1/2 space-y-6 ${product.reverse ? "md:order-1" : "md:order-2"}`}>
                    <div>
                      <h2 className="font-headline-lg text-headline-lg text-white mb-2">{product.name}</h2>
                      <p className="font-label-md text-label-md text-primary tracking-widest font-semibold">{product.volume}</p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant opacity-85 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {product.chips.map((chip, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 rounded-full border border-primary/30 text-primary font-label-md text-label-md bg-primary/5 shadow-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-[120px] bg-surface-container-low/50 border-y border-outline-variant/30 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 100% 100%, rgba(10, 87, 197, 0.05) 0%, transparent 50%)" }}
          ></div>
          
          <div className="max-w-container-max mx-auto relative z-10">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-16 text-center">
              Biological Optimization
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {benefitsList.map((benefit, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-lg text-center flex flex-col items-center gap-4 hover:-translate-y-2 transition-all duration-300 group hover:bg-white/5"
                >
                  <span className="material-symbols-outlined text-primary text-[32px] group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold">{benefit.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-[160px] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="font-display-lg-mobile md:font-display-lg text-on-surface tracking-tighter leading-none">
              Ready to Elevate Your Hydration?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto opacity-90 leading-relaxed">
              Connect with our concierge team to establish your supply chain of precision hydration.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary-fixed hover:text-on-primary-container hover:shadow-[0_0_20px_rgba(176,198,255,0.4)] transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                <span>Contact via WhatsApp</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
