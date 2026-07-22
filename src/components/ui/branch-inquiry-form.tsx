"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { trackMetaPixelEvent } from "@/lib/meta-pixel";

type BranchInquiryFormProps = {
  branch: string;
};

export function BranchInquiryForm({ branch }: BranchInquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackMetaPixelEvent("Contact", {
      content_name: branch,
      content_category: "Branch inquiry",
    });
    setSubmitted(true);
  }

  return (
    <div
      id="branch-form"
      className="rounded-[2rem] border border-white/70 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
        Connect With EDUBH
      </div>
      <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
        Contact {branch}
      </h3>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
        Share your details and our office will help you with admissions,
        counseling, and program selection.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="branch-name"
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
            >
              Full Name
            </label>
            <input
              id="branch-name"
              name="name"
              placeholder="Your full name"
              required
              className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="branch-email"
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
            >
              Email Address
            </label>
            <input
              id="branch-email"
              name="email"
              placeholder="you@example.com"
              type="email"
              required
              className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="branch-phone"
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
          >
            Phone Number
          </label>
          <input
            id="branch-phone"
            name="phone"
            placeholder="+91 80000 00000"
            type="tel"
            className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="branch-message"
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
          >
            Message
          </label>
          <textarea
            id="branch-message"
            name="message"
            placeholder={"I want to know more about admissions at " + branch + "."}
            rows={5}
            className="w-full resize-none rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-4 w-4" />
          Send Branch Inquiry
        </button>

        {submitted && (
          <p
            role="status"
            className="rounded-[1rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
          >
            Inquiry received. The {branch} office will contact you shortly.
          </p>
        )}
      </form>
    </div>
  );
}

