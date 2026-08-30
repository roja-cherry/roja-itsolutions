import {
  Monitor,
  Wifi,
  Wrench,
  Settings,
  Globe,
  Code2,
  Workflow,
  Bot,
} from "lucide-react";

const personalServices = [
  {
    icon: Monitor,
    title: "PC & Laptop Support",
    description:
      "Fix slow systems, software issues, crashes, setup problems and everyday computer troubles.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Network Support",
    description:
      "Troubleshoot connectivity issues, improve Wi-Fi coverage and configure home networks.",
  },
  {
    icon: Wrench,
    title: "Technical Troubleshooting",
    description:
      "Get help diagnosing and resolving hardware, software and system-related problems.",
  },
  {
    icon: Settings,
    title: "Device & Software Setup",
    description:
      "Set up computers, applications, peripherals, backups and other everyday technology.",
  },
];

const businessServices = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to help small businesses build their online presence.",
  },
  {
    icon: Code2,
    title: "Web & API Development",
    description:
      "Custom web applications, REST APIs and software solutions tailored to your business needs.",
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
      "Explore practical AI solutions such as chatbots, intelligent assistants and AI-powered workflows.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        hover:bg-gradient-to-br
        hover:from-white
        hover:to-blue-50
      "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
        <Icon
          size={28}
          className="text-blue-600 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-wider text-blue-600">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Technology Solutions That Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From everyday technical support to websites, software and
            automation, we provide practical solutions for individuals and
            small businesses.
          </p>
        </div>

        {/* Personal IT Support */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Personal IT Support
            </h3>

            <p className="mt-2 text-slate-600">
              Get your everyday technology working the way it should.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {personalServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Business Solutions */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Business Technology Solutions
            </h3>

            <p className="mt-2 text-slate-600">
              Build, improve and automate the technology behind your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {businessServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}