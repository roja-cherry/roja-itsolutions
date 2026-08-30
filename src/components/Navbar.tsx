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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why RoJa", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-slate-950">
            RoJa<span className="text-blue-600">IT</span>
          </span>

          <span className="mt-1 text-xs font-semibold tracking-wide text-slate-500">
            Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={openWhatsapp}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-blue-600"
          >
            Get Support
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

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
