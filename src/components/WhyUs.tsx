import {
  MessageCircle,
  Target,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: MessageCircle,
    title: "Easy to Reach",
    description:
      "Have a problem or an idea? Start with a simple conversation and tell us what you need.",
  },
  {
    icon: Target,
    title: "Solution Focused",
    description:
      "We focus on solving the actual problem rather than adding unnecessary technology or complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Clear & Transparent",
    description:
      "Understand what needs to be done, what it will cost and what you can expect before we start.",
  },
  {
    icon: Headphones,
    title: "Remote Support",
    description:
      "Many technical issues can be diagnosed and resolved remotely, saving you time and unnecessary visits.",
  },
];

const capabilities = [
  {
    title: "Web Development",
    description: "Modern business websites",
  },
  {
    title: "Business Automation",
    description: "Workflow & task automation",
  },
  {
    title: "AI Solutions",
    description: "Intelligent business tools",
  },
  {
    title: "IT Support",
    description: "Everyday technology problems",
  },
];

export default function WhyUs() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-slate-950 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-400">
            Why RoJa
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Technology Should Make Life Easier
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Whether you need help fixing a technical problem or want to build
            something for your business, we focus on practical solutions that
            actually solve the problem.
          </p>
        </motion.div>

        {/* Capabilities */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <p className="text-xl font-bold text-blue-400 sm:text-2xl md:text-3xl">
                {capability.title}
              </p>

              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:bg-slate-900
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={28}
                    className="text-blue-400 transition-colors duration-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}