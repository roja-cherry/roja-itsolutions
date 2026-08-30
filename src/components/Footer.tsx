export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">
              RoJa<span className="text-blue-500">IT</span>
            </h3>

            <p className="mt-3 max-w-sm text-slate-400">
              Practical IT, web and software solutions for individuals and
              small businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white">Services</h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="#services"
                className="transition hover:text-blue-400"
              >
                IT Support
              </a>

              <a
                href="#services"
                className="transition hover:text-blue-400"
              >
                Website Development
              </a>

              <a
                href="#services"
                className="transition hover:text-blue-400"
              >
                Web & API Development
              </a>

              <a
                href="#services"
                className="transition hover:text-blue-400"
              >
                Automation & AI
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white">RoJa IT Solutions</h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="#services"
                className="transition hover:text-blue-400"
              >
                Services
              </a>

              <a
                href="#about"
                className="transition hover:text-blue-400"
              >
                Why RoJa
              </a>

              <a
                href="#contact"
                className="transition hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} RoJa IT Solutions. All rights reserved.</p>

          <p>
            Built with technology. Focused on solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}