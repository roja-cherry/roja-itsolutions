import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT } from "../config/contact";

export default function Hero() {
 const openWhatsapp = () => {
  const message = encodeURIComponent(
    "Hi RoJa IT Solutions, I would like to know more about your services."
  );

  window.open(
    `https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=${message}`,
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
          <span className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm">
            IT • Web • Software • Automation
          </span>

          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            Technology Solutions
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Without the Complexity
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-slate-700 sm:text-xl">
            For individuals and small businesses.
          </p>

          <p className="mx-auto mt-5 max-w-3xl px-4 text-base text-slate-600 sm:text-lg md:text-xl">
            From fixing everyday technology problems to building websites,
            software and business automation, RoJa IT Solutions helps you
            get more from technology.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={openWhatsapp}
              className="rounded-2xl bg-slate-900 px-8 py-3 font-medium text-white transition hover:scale-105 hover:bg-blue-600"
            >
              Talk to Us
            </button>

            <button
              onClick={scrollToServices}
              className="rounded-2xl border border-slate-300 bg-white/50 px-8 py-3 font-medium transition hover:bg-slate-50"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm font-medium text-slate-700 sm:flex-row sm:gap-7 sm:text-base">
            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              Remote IT support
            </span>

            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              Websites & software
            </span>

            <span className="flex items-center gap-2">
              <Check aria-hidden="true" size={18} className="text-blue-600" />
              Automation & AI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}