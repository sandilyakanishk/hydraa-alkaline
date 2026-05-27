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
    `font-label-md text-label-md block px-4 py-3 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-primary font-bold bg-white/10"
        : "text-on-surface-variant hover:text-primary hover:bg-white/5"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-[20px] border-b border-white/20 shadow-[0_0_15px_rgba(176,198,255,0.1)] transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <NavLink to="/" className="flex-shrink-0">
          <img
            alt="HYDRAA Logo"
            className="h-8 md:h-10 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_e0Op7HAQ3gPhMvSQ7EnTgHfLPBKjQjL8hK55YUuk34UECyE6Pm7gNvlolLdFMzen0A7VpkJzpz32A2_5LP6OYcLTOqQ5BWXv2k7nwSVm3d2h-0zrflJYq8IT_cXOxu6QVjPU0Xi7ngc3TzDL32lRmHlKf2eC1vZSe0WLGm9TWvnUgDFVmN3aKrNEAKJv1igR0zHem9mob3dXjeb9gZ-K7ft08wnN9pCcjN3eR3sI15IXV0nBfs5lxVntqo_3YSEhq1pwuS9DGk-"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/916391862249"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_15px_rgba(10,87,197,0.4)] hover:shadow-[0_0_25px_rgba(176,198,255,0.6)] flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden md:inline">WhatsApp CTA</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface p-2 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-margin-mobile py-4 flex flex-col gap-2 bg-background/95 backdrop-blur-[30px] absolute w-full left-0 shadow-lg animate-fade-in">
          <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
