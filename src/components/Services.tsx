import {
  Monitor,
  Wifi,
  ShieldCheck,
  Wrench,
  Cloud,
  Laptop,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Computer Repair",
    description: "Diagnose and fix desktop and laptop issues quickly.",
  },
  {
    icon: Wifi,
    title: "Network Support",
    description: "Wi-Fi setup, connectivity troubleshooting and optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Security Solutions",
    description: "Virus removal, malware protection and security checks.",
  },
  {
    icon: Wrench,
    title: "Tech Troubleshooting",
    description: "Resolve software, hardware and system issues.",
  },
  {
    icon: Cloud,
    title: "Cloud & Email Setup",
    description: "Email configuration, backups and cloud services.",
  },
  {
    icon: Laptop,
    title: "Device Support",
    description: "Support for PCs, laptops and everyday technology.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-5xl font-bold mt-4">IT Support Made Simple</h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Professional IT support and digital solutions tailored for homes and
            small businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-blue-500
                  hover:bg-gradient-to-br
                  hover:from-white
                  hover:to-blue-50
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                <p className="text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
