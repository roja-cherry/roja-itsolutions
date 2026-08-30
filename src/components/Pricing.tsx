import { useState } from "react";
import { Check, Clock, Sparkles, ArrowRight, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type Currency = "INR" | "SAR";

interface Package {
  name: string;
  isPopular?: boolean;
  price: {
    INR: string;
    SAR: string;
  };
  description: string;
  delivery: string;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Starter",
    price: {
      INR: "₹15,000",
      SAR: "SAR 1,500",
    },
    description: "For businesses that need a professional online presence.",
    delivery: "5–7 days",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
      "1 revision round",
    ],
  },
  {
    name: "Business",
    isPopular: true,
    price: {
      INR: "₹30,000",
      SAR: "SAR 3,000",
    },
    description:
      "For businesses looking for a stronger digital presence and lead generation.",
    delivery: "7–14 days",
    features: [
      "Up to 8 pages",
      "Custom UI/UX",
      "Responsive design",
      "Animations/interactions",
      "Gallery or portfolio",
      "Lead-generation CTAs",
      "WhatsApp integration",
      "Basic performance optimization",
      "2 revision rounds",
      "Deployment assistance",
    ],
  },
  {
    name: "Premium",
    price: {
      INR: "₹50,000+",
      SAR: "SAR 5,000+",
    },
    description: "For businesses that need a highly customized website.",
    delivery: "2–4 weeks",
    features: [
      "Custom design",
      "Up to 12 pages",
      "Advanced interactions",
      "Custom components",
      "Advanced forms",
      "Third-party integrations",
      "Analytics",
      "SEO structure",
      "Performance optimization",
      "3 revision rounds",
      "Deployment",
      "Post-launch support",
    ],
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const reducedMotion = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
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
            Pricing
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Start with a package that fits your needs. Larger or more complex
            projects can be quoted separately.
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex items-center rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xs">
            <button
              onClick={() => setCurrency("INR")}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                currency === "INR"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={currency === "INR"}
            >
              India ₹
            </button>
            <button
              onClick={() => setCurrency("SAR")}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                currency === "SAR"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={currency === "SAR"}
            >
              Saudi SAR
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col justify-between rounded-3xl border bg-white p-8 transition-all duration-300 hover:shadow-2xl sm:p-10 ${
                pkg.isPopular
                  ? "border-blue-600 ring-2 ring-blue-600 shadow-lg lg:-translate-y-2"
                  : "border-slate-200 hover:-translate-y-1"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                    <Sparkles size={13} aria-hidden="true" />
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {pkg.name}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mt-6 border-b border-slate-100 pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                      {pkg.price[currency]}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Clock size={14} className="text-blue-600" aria-hidden="true" />
                    <span>Delivery: {pkg.delivery}</span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="mt-6 space-y-3.5 text-sm text-slate-700" aria-label={`${pkg.name} features`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA */}
              <div className="mt-8 pt-4">
                <button
                  onClick={scrollToContact}
                  className={`w-full rounded-2xl py-3.5 text-center text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    pkg.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600 shadow-md hover:shadow-lg"
                      : "bg-slate-900 text-white hover:bg-blue-600 focus-visible:outline-slate-900"
                  }`}
                >
                  Get Started with {pkg.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-slate-900">
            {currency === "INR"
              ? "Website maintenance is available from ₹2,000/month in India."
              : "Website maintenance is available from SAR 200/month in Saudi Arabia."}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Maintenance covers minor content updates, basic monitoring, deployment
            support and bug fixes. New features are quoted separately.
          </p>
        </div>

        {/* Custom Project Box */}
        <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h4 className="text-xl font-bold">Need something different?</h4>
              <p className="mt-2 text-sm text-slate-300">
                Automation and AI projects are quoted based on requirements.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Discuss Your Project
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Target Market Trust Positioning Banner */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-center sm:p-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-semibold text-blue-700">
              <Globe size={14} aria-hidden="true" />
              Serving businesses in India & Saudi Arabia
            </span>
            <p className="text-sm font-medium text-slate-700 sm:text-base">
              Remote-first digital solutions with straightforward communication
              and transparent pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

