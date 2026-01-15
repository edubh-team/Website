"use client";

import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(16, "Phone number is too long"),
  program: z.string().min(1, "Select a program of interest"),
  qualification: z.string().min(2, "Enter your current qualification"),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function ApplyPage() {
  const [form, setForm] = useState<ApplicationForm>({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationForm, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleChange<K extends keyof ApplicationForm>(
    key: K,
    value: ApplicationForm[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = applicationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ApplicationForm, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ApplicationForm;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
      <section className="space-y-5">
        <div>
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-[#1D1D1F] sm:text-3xl">
            One application. Multiple industry-ready programs.
          </h1>
          <p className="mt-2 max-w-xl text-sm text-[#86868B]">
            Tell us a bit about yourself and the kind of program you are
            looking for. EduBh advisors will match you with the right options at
            Manipal, Jain, and Sharda University Online.
          </p>
        </div>
        {status === "success" && (
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-100">
            Application submitted successfully. An EduBh advisor will reach out
            within 24 hours.
          </div>
        )}
        {status === "error" && (
          <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs text-red-100">
            Please fix the highlighted fields before submitting again.
          </div>
        )}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="glass-panel space-y-4 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Full Name
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(event) => handleChange("fullName", event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g. Aarav Sharma"
              />
              {errors.fullName && (
                <p className="mt-1 text-[11px] text-red-300">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-300">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="+91 80000 00000"
              />
              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-300">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Program Interest
              </label>
              <select
                value={form.program}
                onChange={(event) => handleChange("program", event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select a program</option>
                <option value="mba-amity">MBA – Amity University</option>
                <option value="btech-manipal">
                  B.Tech CSE – Manipal University
                </option>
                <option value="integrated-mba-amity">
                  Integrated BBA+MBA – Amity University
                </option>
                <option value="cert-ai-manipal">
                  Certification in AI & ML – Manipal University
                </option>
              </select>
              {errors.program && (
                <p className="mt-1 text-[11px] text-red-300">{errors.program}</p>
              )}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-200">
              Current Qualification
            </label>
            <input
              type="text"
              value={form.qualification}
              onChange={(event) =>
                handleChange("qualification", event.target.value)
              }
              className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="e.g. Final year B.Com, Working professional with 2 years experience"
            />
            {errors.qualification && (
              <p className="mt-1 text-[11px] text-red-300">{errors.qualification}</p>
            )}
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1f3c88] px-6 py-2.5 text-xs font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            >
              Submit application
            </button>
            <p className="mt-2 text-[11px] text-slate-500">
              By continuing, you agree to be contacted by EduBh advisors regarding
              your application.
            </p>
          </div>
        </motion.form>
      </section>
      <section className="relative h-[260px] md:h-[320px]">
        <div className="glass-panel radial-surface absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[-3rem] top-12 h-48 w-48 rounded-[40%] border border-blue-200/60 bg-white/90"
            animate={{ rotate: [0, 18, 0], y: [0, -12, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[-2rem] bottom-6 h-40 w-40 rounded-full border border-indigo-200/60 bg-white/90"
            animate={{ rotate: [0, -16, 0], y: [0, 10, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-b from-white via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-xs text-[#1D1D1F]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#86868B]">
              Designed for focus
            </p>
            <p className="mt-1 max-w-[14rem] text-slate-200">
              Distraction-free application experience optimised for mobile and
              desktop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
