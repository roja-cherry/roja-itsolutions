export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h3 className="text-2xl font-bold">
              RoJa<span className="text-blue-500">IT</span>
            </h3>

            <p className="mt-2 text-slate-400">
              IT Support & Digital Solutions
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 RoJa IT Solutions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}