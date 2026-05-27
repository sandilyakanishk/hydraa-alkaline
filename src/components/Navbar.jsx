import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-label-md text-label-md px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-primary font-bold border-b-2 border-primary pb-1 rounded-none bg-white/5"
        : "text-on-surface-variant hover:text-primary hover:backdrop-blur-[30px] hover:bg-white/5"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `font-label-md text-label-md block text-center px-8 py-4 rounded-xl transition-all duration-300 text-2xl ${
      isActive
        ? "text-white font-bold bg-white/10"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-[20px] border-b border-white/10 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <NavLink to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <img
              alt="HYDRAA Logo"
              className="h-8 md:h-10 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_e0Op7HAQ3gPhMvSQ7EnTgHfLPBKjQjL8hK55YUuk34UECyE6Pm7gNvlolLdFMzen0A7VpkJzpz32A2_5LP6OYcLTOqQ5BWXv2k7nwSVm3d2h-0zrflJYq8IT_cXOxu6QVjPU0Xi7ngc3TzDL32lRmHlKf2eC1vZSe0WLGm9TWvnUgDFVmN3aKrNEAKJv1igR0zHem9mob3dXjeb9gZ-K7ft08wnN9pCcjN3eR3sI15IXV0nBfs5lxVntqo_3YSEhq1pwuS9DGk-"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/products" className={linkClass}>Products</NavLink>
            <NavLink to="/benefits" className={linkClass}>Benefits</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/blogs" className={linkClass}>Blogs</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/partner"
              className="hidden md:flex bg-white/10 text-white font-label-md text-label-md px-6 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span>Become a Partner</span>
            </a>
            <a
              href="https://wa.me/916391862249"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_15px_rgba(10,87,197,0.4)] hover:shadow-[0_0_25px_rgba(176,198,255,0.6)] flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:text-primary transition-colors focus:outline-none z-[60] relative"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-[30px] flex flex-col items-center justify-center gap-6 animate-fade-in">
          {/* Close button top-right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>

          {/* Logo centered at top */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2">
            <img
              alt="HYDRAA Logo"
              className="h-8 object-contain opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_e0Op7HAQ3gPhMvSQ7EnTgHfLPBKjQjL8hK55YUuk34UECyE6Pm7gNvlolLdFMzen0A7VpkJzpz32A2_5LP6OYcLTOqQ5BWXv2k7nwSVm3d2h-0zrflJYq8IT_cXOxu6QVjPU0Xi7ngc3TzDL32lRmHlKf2eC1vZSe0WLGm9TWvnUgDFVmN3aKrNEAKJv1igR0zHem9mob3dXjeb9gZ-K7ft08wnN9pCcjN3eR3sI15IXV0nBfs5lxVntqo_3YSEhq1pwuS9DGk-"
            />
          </div>

          {/* Centered Nav Links */}
          <nav className="flex flex-col items-center gap-2 w-full px-8 overflow-y-auto max-h-[50vh]">
            <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/products" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Products</NavLink>
            <NavLink to="/benefits" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Benefits</NavLink>
            <NavLink to="/faq" className={mobileLinkClass} onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink to="/blogs" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Blogs</NavLink>
            <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink to="/legal" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Legal</NavLink>
          </nav>

          {/* WhatsApp CTA at bottom */}
          <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-[300px]">
            <a
              href="/partner"
              className="w-full flex justify-center items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/20 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              Become a Partner
            </a>
            <a
              href="https://wa.me/916391862249"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
