"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle, Send, Star } from "lucide-react";
import { saveFeedback, type FeedbackData } from "@/lib/firebase-db";

type FeedbackFormState = {
  fullName: string;
  email: string;
  relationship: FeedbackData["relationship"];
  course: string;
  rating: number;
  message: string;
};

const initialState: FeedbackFormState = {
  fullName: "",
  email: "",
  relationship: "student",
  course: "",
  rating: 0,
  message: "",
};

const feedbackStorageKey = (email: string) =>
  "edubh-feedback-submitted:" + email.trim().toLowerCase();

export function FeedbackForm() {
  const [form, setForm] = useState<FeedbackFormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "submitted" | "duplicate" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FeedbackFormState>(
    key: K,
    value: FeedbackFormState[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status !== "submitting") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.rating < 1) {
      setStatus("error");
      setErrorMessage("Please select a rating before submitting.");
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please write at least 10 characters of feedback.");
      return;
    }

    const storageKey = feedbackStorageKey(form.email);

    if (window.localStorage.getItem(storageKey)) {
      setStatus("duplicate");
      setErrorMessage(
        "You have already submitted feedback with this email address.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const result = await saveFeedback({
      fullName: form.fullName,
      email: form.email,
      relationship: form.relationship,
      course: form.course,
      rating: form.rating,
      message: form.message,
    });

    if (result.success) {
      window.localStorage.setItem(storageKey, "true");
      setStatus("submitted");
      setForm(initialState);
      return;
    }

    if (result.duplicate) {
      window.localStorage.setItem(storageKey, "true");
      setStatus("duplicate");
    } else {
      setStatus("error");
    }

    setErrorMessage(
      result.error || "Unable to submit feedback. Please try again.",
    );
  }

  if (status === "submitted") {
    return (
      <div className="flex min-h-[430px] flex-col items-center justify-center rounded-[2rem] border border-emerald-200 bg-[linear-gradient(145deg,rgba(236,253,245,0.96),rgba(255,255,255,0.98))] px-6 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
          Thank you for your feedback
        </h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
          Your feedback was submitted successfully and will help us improve the
          EduBh learning experience.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="feedback-name"
            className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
          >
            Full Name
          </label>
          <input
            id="feedback-name"
            type="text"
            required
            minLength={2}
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your full name"
            className="w-full rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="feedback-email"
            className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
          >
            Email Address
          </label>
          <input
            id="feedback-email"
            type="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="feedback-relationship"
            className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
          >
            I am a
          </label>
          <select
            id="feedback-relationship"
            value={form.relationship}
            onChange={(event) =>
              updateField(
                "relationship",
                event.target.value as FeedbackFormState["relationship"],
              )
            }
            className="w-full rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="student">Current student</option>
            <option value="alumni">Alumni</option>
            <option value="applicant">Applicant</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="feedback-course"
            className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
          >
            Course or University
          </label>
          <input
            id="feedback-course"
            type="text"
            value={form.course}
            onChange={(event) => updateField("course", event.target.value)}
            placeholder="Optional"
            className="w-full rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Your Rating
        </legend>
        <div className="flex flex-wrap gap-2" role="radiogroup">
          {Array.from({ length: 5 }).map((_, index) => {
            const rating = index + 1;
            const selected = rating <= form.rating;

            return (
              <button
                key={rating}
                type="button"
                role="radio"
                aria-checked={form.rating === rating}
                aria-label={rating + " out of 5 stars"}
                onClick={() => updateField("rating", rating)}
                className={
                  "flex h-12 w-12 items-center justify-center rounded-2xl border transition " +
                  (selected
                    ? "border-amber-300 bg-amber-50 text-amber-400 shadow-[0_10px_22px_rgba(245,158,11,0.12)]"
                    : "border-slate-200 bg-white text-slate-300 hover:border-amber-200 hover:text-amber-300")
                }
              >
                <Star
                  className={"h-5 w-5 " + (selected ? "fill-current" : "")}
                />
              </button>
            );
          })}
          <span className="self-center pl-2 text-sm font-medium text-slate-500">
            {form.rating > 0 ? form.rating + " / 5" : "Select a rating"}
          </span>
        </div>
      </fieldset>

      <div className="space-y-2">
        <label
          htmlFor="feedback-message"
          className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
        >
          Your Feedback
        </label>
        <textarea
          id="feedback-message"
          required
          minLength={10}
          maxLength={1200}
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us about your experience with EduBh..."
          className="w-full resize-none rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
        <p className="text-right text-xs text-slate-400">
          {form.message.length} / 1200
        </p>
      </div>

      {(status === "duplicate" || status === "error") && (
        <p
          role="alert"
          className={
            "rounded-[1rem] border px-4 py-3 text-sm font-semibold " +
            (status === "duplicate"
              ? "border-amber-200 bg-amber-50 text-amber-700"
              : "border-red-200 bg-red-50 text-red-700")
          }
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="button-primary inline-flex w-full items-center justify-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "submitting" ? "Submitting..." : "Submit Feedback"}
      </button>

      <p className="text-center text-xs leading-6 text-slate-500">
        One feedback submission is allowed per email address.
      </p>
    </form>
  );
}
