import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT } from "../config/contact";

const openWhatsapp = () => {
  const message = encodeURIComponent(
    "Hi RoJa IT Solutions, I would like to discuss a project with you."
  );

  window.open(
    `https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=${message}`,
    "_blank"
  );
};

export default function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Tell us what you're trying to build, automate or improve. We'll help
            you find a practical solution.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Let's start with a conversation.
            </h3>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
              You don't need to have every detail figured out. Just describe your
              idea, problem or goal, and we'll discuss the right approach.
            </p>

            {/* WhatsApp CTA */}
            <button
              onClick={openWhatsapp}
              className="
                mt-8
                flex
                w-fit
                items-center
                gap-3
                rounded-2xl
                bg-green-500
                px-6
                py-4
                font-semibold
                text-white
                shadow-md
                transition
                hover:-translate-y-1
                hover:bg-green-600
                hover:shadow-lg
              "
            >
              <MessageCircle size={22} aria-hidden="true" />
              Chat on WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </button>

            {/* Contact Cards */}
            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Phone className="text-blue-600" size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Phone</h4>

                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      +966 54357 1468
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Mail className="text-blue-600" size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Email</h4>

                    <a
                      href="mailto:rojaitsolutions@gmail.com"
                      className="text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      rojaitsolutions@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Small reassurance */}
            <div className="mt-8 rounded-2xl bg-slate-50 p-5 border border-slate-100">
              <p className="text-sm text-slate-600">
                💡 Not sure which solution fits best? That's completely fine. Send
                us a message and we will guide you through the options.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/rojaitsolutions@gmail.com"
            method="POST"
            className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-xs sm:p-10"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Project Enquiry - RoJa IT Solutions"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Service Required */}
              <div>
                <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-slate-700">
                  What service are you interested in?
                </label>

                <select
                  id="contact-service"
                  name="service"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="AI Solutions">AI Solutions</option>
                  <option value="IT Support">IT Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Tell us about your project or requirement
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe what you want to build, automate or solve..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-900
                  py-4
                  font-semibold
                  text-white
                  shadow-md
                  transition
                  hover:bg-blue-600
                  hover:shadow-lg
                "
              >
                Send Enquiry
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <p className="text-center text-xs text-slate-500">
                We'll review your requirement and get back to you promptly.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}