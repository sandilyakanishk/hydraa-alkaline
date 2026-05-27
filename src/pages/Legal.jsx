import { useEffect } from "react";

export default function Legal() {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-on-background selection:bg-white selection:text-black pt-[100px]">
      <main className="px-margin-mobile md:px-margin-desktop py-24 max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="font-headline-xl text-white editorial-text mb-4">LEGAL & TERMS</h1>
          <p className="font-body-lg text-white/50 font-light">
            Effective Date: May 2026. Please read these terms carefully before engaging with HYDRAA products or services.
          </p>
        </div>

        <div className="space-y-16">
          {/* Medical Disclaimer */}
          <section id="disclaimer" className="space-y-6">
            <h2 className="font-headline-lg text-white editorial-text text-2xl border-b border-white/10 pb-4">01 &mdash; MEDICAL & HEALTH DISCLAIMER</h2>
            <div className="space-y-4 font-body-md text-white/60 font-light leading-relaxed">
              <p>
                The statements made regarding HYDRAA products have not been evaluated by the Food and Drug Administration (FDA) or equivalent international regulatory bodies. Our products are not intended to diagnose, treat, cure, or prevent any disease, illness, or medical condition.
              </p>
              <p>
                HYDRAA is a premium hydration beverage, not a medical treatment. Information presented on this website, packaging, or promotional materials is for informational purposes only and is not meant as a substitute for or alternative to information from healthcare practitioners. Please consult your healthcare professional about potential interactions or other possible complications before using any product, especially if you have a pre-existing medical condition, are pregnant, or nursing.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="space-y-6">
            <h2 className="font-headline-lg text-white editorial-text text-2xl border-b border-white/10 pb-4">02 &mdash; PRIVACY POLICY</h2>
            <div className="space-y-4 font-body-md text-white/60 font-light leading-relaxed">
              <p>
                At HYDRAA, we prioritize your privacy as highly as we prioritize purity. We collect minimal necessary data (such as name, email, and shipping address) solely for the purpose of fulfilling your concierge orders, improving our services, and maintaining our partnership records.
              </p>
              <p>
                We do not sell, rent, or lease our customer lists to third parties. All transactional and personal information is encrypted and stored in secure, restricted-access environments. If you wish to have your data expunged from our records, please contact our concierge team directly.
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="space-y-6">
            <h2 className="font-headline-lg text-white editorial-text text-2xl border-b border-white/10 pb-4">03 &mdash; TERMS OF SERVICE</h2>
            <div className="space-y-4 font-body-md text-white/60 font-light leading-relaxed">
              <p>
                By accessing this website and purchasing HYDRAA products, you agree to be bound by these Terms of Service. All content on this site, including text, graphics, logos, and imagery, is the exclusive property of HYDRAA and is protected by international copyright laws.
              </p>
              <p>
                We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion, including, without limitation, if we believe that customer conduct violates applicable law or is harmful to our brand interests. Prices for our products are subject to change without notice.
              </p>
            </div>
          </section>

          {/* Lab Reports */}
          <section id="lab-reports" className="space-y-6">
            <h2 className="font-headline-lg text-white editorial-text text-2xl border-b border-white/10 pb-4">04 &mdash; LAB REPORTS & ASSURANCE</h2>
            <div className="space-y-4 font-body-md text-white/60 font-light leading-relaxed">
              <p>
                HYDRAA operates on complete transparency. Our water undergoes rigorous spectrophotometric analysis and pH monitoring. Independent third-party lab reports detailing our mineral composition, pH levels (verified 8.5+), and absence of heavy metals/micro-plastics are available upon request for our wholesale partners and concierge clients.
              </p>
              <p>
                Please contact <a href="mailto:source@hydraa.com" className="text-white hover:underline">source@hydraa.com</a> to request the latest batch analysis documentation.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
