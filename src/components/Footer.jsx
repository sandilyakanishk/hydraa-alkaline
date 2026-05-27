import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-gutter max-w-container-max mx-auto">
        
        {/* Brand details */}
        <div className="flex flex-col gap-6 mb-12 md:mb-0">
          <Link to="/" className="inline-block">
            <img
              alt="HYDRAA Logo"
              className="h-10 object-contain self-start"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_e0Op7HAQ3gPhMvSQ7EnTgHfLPBKjQjL8hK55YUuk34UECyE6Pm7gNvlolLdFMzen0A7VpkJzpz32A2_5LP6OYcLTOqQ5BWXv2k7nwSVm3d2h-0zrflJYq8IT_cXOxu6QVjPU0Xi7ngc3TzDL32lRmHlKf2eC1vZSe0WLGm9TWvnUgDFVmN3aKrNEAKJv1igR0zHem9mob3dXjeb9gZ-K7ft08wnN9pCcjN3eR3sI15IXV0nBfs5lxVntqo_3YSEhq1pwuS9DGk-"
            />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-80">
            Elevating human performance through advanced liquid structuring and pure alkaline source material.
          </p>
        </div>

        {/* Footer Link lists */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2">Navigation</span>
            <Link to="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link to="/products" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
              Products
            </Link>
            <Link to="/contact" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2">Legal</span>
            <Link to="/legal#privacy" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/legal#terms" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/legal#lab-reports" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
              Lab Reports
            </Link>
          </div>
        </div>
      </div>

      {/* Under footer */}
      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body-md text-body-md text-on-surface-variant text-sm opacity-60">
          © {new Date().getFullYear()} HYDRAA HYDRO-FUTURISM. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/hydra_alkalinewater?igsh=ODc3Mzl5Mzl1Zm10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors p-2 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a
            href="mailto:source@hydraa.com"
            className="text-on-surface-variant hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
