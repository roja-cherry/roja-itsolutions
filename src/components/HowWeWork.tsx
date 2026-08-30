import { MessageSquare, Compass, Code, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us What You Need",
    description: "Share your idea, problem or business requirement.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Plan the Solution",
    description: "We define the right approach, scope and timeline.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build & Test",
    description: "We develop, test and refine the solution with you.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We launch your project and remain available for support.",
  },
];

export default function HowWeWork() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="how-we-work" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Our Process
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            How We Work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From the first conversation to launch, we keep the process simple
            and transparent.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-blue-500
                  hover:shadow-xl
                  hover:bg-gradient-to-b
                  hover:from-white
                  hover:to-blue-50/40
                "
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black tracking-tight text-slate-300 transition-colors duration-300 group-hover:text-blue-600">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                      <Icon
                        size={22}
                        className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 h-1 w-10 rounded-full bg-slate-100 transition-all duration-300 group-hover:w-full group-hover:bg-blue-600" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

