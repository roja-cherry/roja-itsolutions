import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "../config/contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openWhatsapp = () => {
    const message = encodeURIComponent(
      "Hi RoJa IT Solutions, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=${message}`,
      "_blank"
    );

    closeMenu();
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight">
            RoJa<span className="text-blue-600">IT</span>
          </span>

          <span className="mt-1 text-xs font-medium tracking-wide text-slate-500">
            Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Why RoJa
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>

          <button
            onClick={openWhatsapp}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Get Support
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#services"
              onClick={closeMenu}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Why RoJa
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </a>

            <button
              onClick={openWhatsapp}
              className="mt-2 rounded-xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Get Support
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}