import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 pt-20">
      {/* Background Blur */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 backdrop-blur-xs sm:text-sm">
            PRACTICAL TECHNOLOGY FOR BUSINESS
          </span>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Technology Solutions{" "}
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
              That Move Your Business Forward
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg md:text-xl">
            We build modern websites, automate repetitive work and create practical
            digital solutions for small and growing businesses.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="w-full rounded-2xl bg-slate-900 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-600 sm:w-auto"
            >
              Get Started
            </button>

            <button
              onClick={scrollToServices}
              className="w-full rounded-2xl border border-slate-300 bg-white/70 px-8 py-3.5 font-semibold text-slate-800 backdrop-blur-xs transition hover:bg-slate-100 sm:w-auto"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Value Highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-700 sm:gap-7 sm:text-sm md:text-base">
            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              Web Development
            </span>

            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              Business Automation
            </span>

            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              AI Solutions
            </span>

            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              IT Support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}