import { Globe, Workflow, Bot, Headphones } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites designed to help businesses build credibility, reach customers and generate enquiries.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive tasks, reports and workflows to save time and reduce manual work.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Practical AI solutions designed around real business needs, from intelligent assistants to workflow automation.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description:
      "Reliable remote technical support for everyday software, computer and technology problems.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        group
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
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        hover:bg-gradient-to-br
        hover:from-white
        hover:to-blue-50/50
      "
    >
      <div>
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
          <Icon
            size={28}
            className="text-blue-600 transition-colors duration-300 group-hover:text-white"
            aria-hidden="true"
          />
        </div>

        <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>

      <div className="mt-8 h-1 w-10 rounded-full bg-slate-100 transition-all duration-300 group-hover:w-full group-hover:bg-blue-600" />
    </motion.div>
  );
}

export default function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Technology Solutions That Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Practical digital services designed to help small and growing
            businesses establish a solid online presence, automate manual work
            and leverage intelligent tools.
          </p>
        </motion.div>

        {/* 4 Core Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}