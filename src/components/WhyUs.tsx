import { Zap, ShieldCheck, Headphones, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick diagnosis and resolution to minimize downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description: "Dependable solutions you can trust every time.",
  },
  {
    icon: Headphones,
    title: "Remote Assistance",
    description: "Get help without waiting for an on-site visit.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "Simple, effective fixes without unnecessary complexity.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Why RoJa IT Solutions?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            From IT support and troubleshooting to web development and digital
            solutions, we help individuals and businesses stay productive.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-400">IT</p>
            <p className="mt-2 text-slate-400">Support</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold text-blue-400">Web</p>
            <p className="mt-2 text-slate-400">Development</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold text-blue-400">Cloud</p>
            <p className="mt-2 text-slate-400">Solutions</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold text-blue-400">Tech</p>
            <p className="mt-2 text-slate-400">Consulting</p>
          </div>
        </div>

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
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon size={28} className="text-blue-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>

                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
