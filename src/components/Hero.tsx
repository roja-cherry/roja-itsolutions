import { motion } from "framer-motion";

export default function Hero() {
  const openWhatsapp = () => {
    window.open(
      "https://wa.me/919947658410?text=Hi%20RoJa%20IT%20Solutions,%20I%20need%20technical%20support.",
      "_blank"
    );
  };

  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      {/* Background Blur */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-slate-200 px-4 py-2 text-sm">
            Reliable IT Support
          </span>

          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl md:text-8xl">
            Your Personal
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              IT Department
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl px-4 text-base text-slate-600 sm:text-lg md:max-w-3xl md:text-xl">
            Fast computer troubleshooting, software support, networking
            solutions and technology assistance for homes and small businesses.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={openWhatsapp}
              className="rounded-2xl bg-slate-900 px-8 py-3 font-medium text-white transition hover:scale-105 hover:bg-blue-600"
            >
              Get Support
            </button>

            <button
              onClick={scrollToServices}
              className="rounded-2xl border border-slate-300 px-8 py-3 font-medium transition hover:bg-slate-50"
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-slate-600 md:flex md:justify-center md:gap-12">
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900 md:text-3xl">
                Fast
              </p>
              <p className="text-sm md:text-base">
                Response
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-slate-900 md:text-3xl">
                Remote
              </p>
              <p className="text-sm md:text-base">
                Support
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-slate-900 md:text-3xl">
                Affordable
              </p>
              <p className="text-sm md:text-base">
                Services
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}