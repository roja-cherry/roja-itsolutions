import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { CONTACT } from "../config/contact";

const openWhatsapp = () => {
  const message = encodeURIComponent(
    "Hi RoJa IT Solutions, I would like to know more about your services."
  );

  window.open(
    `https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=${message}`,
    "_blank"
  );
};

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Have a Problem or an Idea?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600 sm:text-lg">
            Whether you need help with a technical issue or want to build
            something for your business, tell us what you need and we'll
            figure out the best way to help.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Let's start with a conversation.
            </h3>

            <p className="mt-4 max-w-lg text-slate-600">
              You don't need to know exactly what solution you need. Just
              explain the problem or idea, and we'll help you understand the
              next step.
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
                transition
                hover:-translate-y-1
                hover:bg-green-600
                hover:shadow-lg
              "
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
              <ArrowRight size={18} />
            </button>

            {/* Contact Cards */}
            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Phone className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">Phone</h4>

                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-slate-600 hover:text-blue-600"
                    >
                      +966 54357 1468
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Mail className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">Email</h4>

                    <a
                      href="mailto:rojaitsolutions@gmail.com"
                      className="text-slate-600 hover:text-blue-600"
                    >
                      rojaitsolutions@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Small reassurance */}
            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-600">
                💡 Not sure what you need? That's okay. Tell us what's
                happening and we'll help you figure it out.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/rojaitsolutions@gmail.com"
            method="POST"
            className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Enquiry - RoJa IT Solutions"
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
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>

                <input
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
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
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
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Customer Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  What do you need help with?
                </label>

                <select
                  name="service"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                >
                  <option value="">Select a service</option>

                  <option value="Personal IT Support">
                    Personal IT Support
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Web & API Development">
                    Web & API Development
                  </option>

                  <option value="Business Automation">
                    Business Automation
                  </option>

                  <option value="AI Solutions">
                    AI Solutions
                  </option>

                  <option value="Other">Something else</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Tell us about it
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Describe your problem, project or idea..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
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
                  transition
                  hover:bg-blue-600
                "
              >
                Send Enquiry
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-slate-500">
                We'll review your request and get back to you.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}