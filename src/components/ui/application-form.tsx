"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { courses } from "@/data/courses";
import { getUtmAttribution } from "@/lib/utm";
import { trackMetaPixelEvent } from "@/lib/meta-pixel";

export const leadSourceOptions = ["Apply Now", "Book a Free Call"] as const;
export type LeadSource = (typeof leadSourceOptions)[number];

const applicationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(16, "Phone number is too long"),
  state: z.string().min(1, "Select your state"),
  program: z.string().min(1, "Select a program of interest"),
  qualification: z.string().min(2, "Enter your current qualification"),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;

export const programOptions = [
  { value: "", label: "Select a program" },
  ...courses
    .slice()
    .sort((left, right) => {
      const byUniversity = left.university.localeCompare(right.university);
      if (byUniversity !== 0) {
        return byUniversity;
      }
      return left.title.localeCompare(right.title);
    })
    .map((course) => ({
      value: course.id,
      label: `${course.title} - ${course.university}`,
    })),
];

export const stateOptions = [
  { value: "", label: "Select your state" },
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Puducherry", label: "Puducherry" },
];

const initialValues: ApplicationFormValues = {
  fullName: "",
  email: "",
  phone: "",
  state: "",
  program: "",
  qualification: "",
};

type Status = "idle" | "success" | "error";

type ApplicationFormProps = {
  className?: string;
  leadSource: LeadSource;
  onSuccess?: () => void;
  resetSignal?: number;
};

export function ApplicationForm({
  className,
  leadSource,
  onSuccess,
  resetSignal = 0,
}: ApplicationFormProps) {
  const [form, setForm] = useState<ApplicationFormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ApplicationFormValues, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setForm(initialValues);
    setErrors({});
    setStatus("idle");
    setIsSubmitting(false);
    setRequestError(null);
    window.setTimeout(() => firstFieldRef.current?.focus(), 80);
  }, [leadSource, resetSignal]);

  const successMessage = useMemo(
    () =>
      "Application submitted successfully. An EduBh advisor will reach out within 24 hours.",
    [],
  );

  function handleChange<K extends keyof ApplicationFormValues>(
    key: K,
    value: ApplicationFormValues[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setRequestError(null);
    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = applicationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ApplicationFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ApplicationFormValues;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setRequestError(null);
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setRequestError(null);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...result.data,
          leadSource,
          utmAttribution: getUtmAttribution() ?? undefined,
        }),
      });

      const payload = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        setStatus("error");
        setRequestError(
          payload.error ?? "Please fix the highlighted fields before submitting again.",
        );
        return;
      }

      const selectedProgram =
        programOptions.find((option) => option.value === result.data.program)
          ?.label || result.data.program;
      trackMetaPixelEvent("Lead", {
        content_name: selectedProgram,
        content_category: "Course application",
      });
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
      setRequestError("Please fix the highlighted fields before submitting again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={className}>
      <AnimatePresence initial={false}>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="mb-4 rounded-[1.3rem] border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="mb-4 rounded-[1.3rem] border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-700"
          >
            {requestError ?? "Please fix the highlighted fields before submitting again."}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="space-y-4"
      >
        <input type="hidden" name="leadSource" value={leadSource} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="floating-field">
            <input
              ref={firstFieldRef}
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              className="floating-input"
              placeholder="Full Name"
              disabled={isSubmitting}
            />
            <label htmlFor="fullName" className="floating-label">
              Full Name
            </label>
            {errors.fullName && (
              <p className="field-message text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div className="floating-field">
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
              className="floating-input"
              placeholder="Email"
              disabled={isSubmitting}
            />
            <label htmlFor="email" className="floating-label">
              Email
            </label>
            {errors.email && (
              <p className="field-message text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="floating-field">
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(event) => handleChange("phone", event.target.value)}
              className="floating-input"
              placeholder="Phone"
              disabled={isSubmitting}
            />
            <label htmlFor="phone" className="floating-label">
              Phone
            </label>
            {errors.phone && (
              <p className="field-message text-red-600">{errors.phone}</p>
            )}
          </div>

          <div className="floating-field">
            <select
              id="state"
              value={form.state}
              onChange={(event) => handleChange("state", event.target.value)}
              className="floating-input"
              disabled={isSubmitting}
            >
              {stateOptions.map((option) => (
                <option key={option.value || "state-placeholder"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label htmlFor="state" className="floating-label">
              State
            </label>
            {errors.state && (
              <p className="field-message text-red-600">{errors.state}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="floating-field">
            <select
              id="program"
              value={form.program}
              onChange={(event) => handleChange("program", event.target.value)}
              className="floating-input"
              disabled={isSubmitting}
            >
              {programOptions.map((option) => (
                <option key={option.value || "placeholder"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label htmlFor="program" className="floating-label">
              Program Interest
            </label>
            {errors.program && (
              <p className="field-message text-red-600">{errors.program}</p>
            )}
          </div>

          <div className="floating-field">
            <input
              id="qualification"
              type="text"
              value={form.qualification}
              onChange={(event) => handleChange("qualification", event.target.value)}
              className="floating-input"
              placeholder="Current Qualification"
              disabled={isSubmitting}
            />
            <label htmlFor="qualification" className="floating-label">
              Current Qualification
            </label>
            {errors.qualification && (
              <p className="field-message text-red-600">{errors.qualification}</p>
            )}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary w-full text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-80"
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                <span>Submitting...</span>
              </>
            ) : (
              "Submit application"
            )}
          </button>
          <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
            By continuing, you agree to be contacted by EduBh advisors regarding
            your application.
          </p>
        </div>
      </motion.form>
    </div>
  );
}


