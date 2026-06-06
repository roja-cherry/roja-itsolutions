import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-bold">Let's Talk</h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Need technical support or have a project in mind? Reach out and
            we'll get back to you.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" />

                <div>
                  <h3 className="font-semibold">Phone</h3>

                  <a
                    href="tel:+919947658410"
                    className="text-slate-600 hover:text-blue-600"
                  >
                    +91 99476 58800
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />

                <div>
                  <h3 className="font-semibold">Email</h3>

                  <a
                    href="mailto:rojaitsolutions@gmail.com"
                    className="text-slate-600 hover:text-blue-600"
                  >
                    rojaitsolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919947658410?text=Hi%20RoJa%20IT%20Solutions,%20I%20need%20technical%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                rounded-3xl
                border
                border-slate-200
                p-6
                transition
                hover:border-green-500
                hover:bg-green-50
                hover:shadow-lg
              "
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="text-green-500" />

                <div>
                  <h3 className="font-semibold">WhatsApp</h3>

                  <p className="text-slate-600">
                    Quick Support Available
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/rojaitsolutions@gmail.com"
            method="POST"
            className="rounded-3xl border border-slate-200 p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Support Request - RoJa IT Solutions"
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

            <div className="space-y-6">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-blue-500 focus:outline-none"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-blue-500 focus:outline-none"
              />

              <select
                name="service"
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-blue-500 focus:outline-none"
              >
                <option>IT Support</option>
                <option>Computer Repair</option>
                <option>Website Development</option>
                <option>Cloud Solutions</option>
                <option>General Enquiry</option>
              </select>

              <textarea
                name="message"
                rows={6}
                required
                placeholder="How can we help?"
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-blue-500 focus:outline-none"
              />

              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-slate-900
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-600
                "
              >
                Request Support
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}