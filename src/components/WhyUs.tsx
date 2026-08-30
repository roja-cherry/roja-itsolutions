import {
  MessageCircle,
  Target,
  ShieldCheck,
  Headphones,
} from "lucide-react";

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
    title: "IT Support",
    description: "Everyday technology problems",
  },
  {
    title: "Web Development",
    description: "Modern business websites",
  },
  {
    title: "Software",
    description: "Custom web & API solutions",
  },
  {
    title: "Automation & AI",
    description: "Smarter business workflows",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-400">
            Why RoJa
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technology Should Make Life Easier
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Whether you need help fixing a technical problem or want to build
            something for your business, we focus on practical solutions that
            actually solve the problem.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {capabilities.map((capability) => (
            <div key={capability.title} className="text-center">
              <p className="text-2xl font-bold text-blue-400 md:text-3xl">
                {capability.title}
              </p>

              <p className="mt-2 text-sm text-slate-400 md:text-base">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  p-8
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:bg-slate-900
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon size={28} className="text-blue-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}