"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ContactForm>(
    key: K,
    value: ContactForm[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <section className="glass-panel bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h1 className="text-lg font-semibold text-[#1D1D1F] sm:text-xl">
            Contact EduBh
          </h1>
          <p className="mt-2 text-sm text-[#86868B]">
            Speak to an EduBh advisor about programs, eligibility, and the right
            path for your goals.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-xs">
            <div>
              <label className="mb-1 block text-[#1D1D1F]">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-[#1D1D1F]">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                suppressHydrationWarning
                className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-[#1D1D1F]">Message</label>
              <textarea
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tell us how we can help"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1f3c88] px-5 py-2.5 text-xs font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
              >
                Send message
              </button>
              {submitted && (
                <p className="mt-2 text-[11px] text-emerald-600">
                  Message received. Our team will respond within one working day.
                </p>
              )}
            </div>
          </form>
        </section>
        <aside className="space-y-4">
          <div className="glass-panel bg-white p-5 text-xs text-[#86868B] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="mb-3 text-sm font-semibold text-[#1D1D1F]">
              Contact details
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Mail className="mt-[2px] h-4 w-4 text-blue-500" />
                <div>
                  <p className="font-medium text-[#1D1D1F]">Email</p>
                  <a
                    href="mailto:hello@edubh.in"
                    className="text-[#86868B] hover:text-[#1D1D1F]"
                  >
                    support@edubh.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-[2px] h-4 w-4 text-blue-500" />
                <div>
                  <p className="font-medium text-[#1D1D1F]">Phone</p>
                  <a
                    href="tel:+918240501323"
                    className="text-[#86868B] hover:text-[#1D1D1F]"
                  >
                    +91 8240501323
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-[2px] h-4 w-4 text-blue-500" />
                <div>
                  <p className="font-medium text-[#1D1D1F]">Address</p>
                  <p className="text-[#86868B]">
                    EduBh, Sector 18,
                    <br />
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <FAQAccordion />
        </aside>
      </div>
    </div>
  );
}
