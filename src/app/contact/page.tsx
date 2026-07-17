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
    <div className="space-y-6">
      <section className="surface-card-strong px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
          <div className="space-y-4">
            <div className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Contact</span>
            </div>
            <h1 className="section-title">Contact EduBh</h1>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
              Speak to an EduBh advisor about programs, eligibility, and the right
              path for your goals.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="trust-pill">
              <strong>Email</strong>
              <span>support@edubh.com</span>
            </div>
            <div className="trust-pill">
              <strong>Call</strong>
              <span>+91 8240501323</span>
            </div>
            <div className="trust-pill">
              <strong>Noida</strong>
              <span>Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <section className="surface-card-strong p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="floating-field">
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="floating-input"
                placeholder="Full Name"
              />
              <label htmlFor="name" className="floating-label">
                Full Name
              </label>
            </div>

            <div className="floating-field">
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                suppressHydrationWarning
                className="floating-input"
                placeholder="Email"
              />
              <label htmlFor="contact-email" className="floating-label">
                Email
              </label>
            </div>

            <div className="floating-field">
              <textarea
                id="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                rows={5}
                className="floating-input resize-none"
                placeholder="Message"
              />
              <label htmlFor="message" className="floating-label">
                Message
              </label>
            </div>

            <div className="pt-2">
              <button type="submit" className="button-primary w-full text-sm sm:text-base">
                Send message
              </button>
              {submitted && (
                <p className="mt-3 rounded-[1.2rem] border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                  Message received. Our team will respond within one working day.
                </p>
              )}
            </div>
          </form>
        </section>

        <aside className="space-y-6">
          <div className="surface-card px-5 py-5 sm:px-6">
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Contact details
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-4 rounded-[1.4rem] bg-white/88 px-4 py-4 shadow-[0_12px_24px_rgba(16,32,58,0.06)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,93,245,0.1)] text-[var(--brand)]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Email</p>
                  <a
                    href="mailto:hello@edubh.in"
                    className="mt-1 inline-block text-[var(--muted)] hover:text-[var(--foreground)]"
                  >
                    support@edubh.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-[1.4rem] bg-white/88 px-4 py-4 shadow-[0_12px_24px_rgba(16,32,58,0.06)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,93,245,0.1)] text-[var(--brand)]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Phone</p>
                  <a
                    href="tel:+918240501323"
                    className="mt-1 inline-block text-[var(--muted)] hover:text-[var(--foreground)]"
                  >
                    +91 8240501323
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-[1.4rem] bg-white/88 px-4 py-4 shadow-[0_12px_24px_rgba(16,32,58,0.06)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,93,245,0.1)] text-[var(--brand)]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Address</p>
                  <p className="mt-1 text-[var(--muted)]">
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
