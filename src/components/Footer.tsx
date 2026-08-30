export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              RoJa<span className="text-blue-500">IT</span>
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Websites, automation, AI and practical IT solutions for growing
              businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white">Services</h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#services" className="transition hover:text-blue-400">
                Web Development
              </a>

              <a href="#services" className="transition hover:text-blue-400">
                Business Automation
              </a>

              <a href="#services" className="transition hover:text-blue-400">
                AI Solutions
              </a>

              <a href="#services" className="transition hover:text-blue-400">
                IT Support
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white">RoJa IT Solutions</h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#services" className="transition hover:text-blue-400">
                Services
              </a>

              <a href="#portfolio" className="transition hover:text-blue-400">
                Portfolio
              </a>

              <a href="#how-we-work" className="transition hover:text-blue-400">
                How We Work
              </a>

              <a href="#pricing" className="transition hover:text-blue-400">
                Pricing
              </a>

              <a href="#about" className="transition hover:text-blue-400">
                Why RoJa
              </a>

              <a href="#contact" className="transition hover:text-blue-400">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:text-sm md:flex-row">
          <p>© {new Date().getFullYear()} RoJa IT Solutions. All rights reserved.</p>

          <p>
            Portfolio concept by RoJa IT Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}