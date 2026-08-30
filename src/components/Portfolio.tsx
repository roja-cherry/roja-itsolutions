import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  label: string;
};

const projects: Project[] = [
  {
    title: "Malabar Table",
    category: "Restaurant Website",
    description:
      "A premium, responsive restaurant website designed to showcase Kerala cuisine, create a strong digital presence and drive customer enquiries.",
    image: "/images/portfolio/malabar-table.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://malabar-table.vercel.app/",
    label: "Portfolio Concept",
  },
];

export default function Portfolio() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="portfolio" className="overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Websites Built to Make Businesses Stand Out
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            Explore a selection of digital experiences built with modern
            technology, thoughtful design and real business goals in mind.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-[1.16fr_.84fr]"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block min-h-72 overflow-hidden bg-slate-900 sm:min-h-96"
                aria-label={`View ${project.title} live demo`}
              >
                <img
                  src={project.image}
                  alt="Malabar Table restaurant website preview"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  <Code2 size={14} aria-hidden="true" /> Website preview
                </span>
              </a>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold text-blue-600">
                    {project.category}
                  </p>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {project.label}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 leading-7 text-slate-600">
                  {project.description}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  View Live Demo <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
