export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-black">
            RoJa<span className="text-blue-600">IT</span>
          </h1>

          <p className="text-xs text-slate-500">Solutions</p>
        </div>

        <div className="hidden gap-8 md:flex">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
