import type { Metadata } from "next";
import { MessageSquareHeart, ShieldCheck, Sparkles } from "lucide-react";
import { FeedbackForm } from "@/components/ui/feedback-form";

export const metadata: Metadata = {
  title: "Share Feedback | EduBh",
  description:
    "Share your EduBh experience. One verified feedback submission is accepted per email address.",
};

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      <section className="surface-card-strong relative overflow-hidden px-6 py-9 sm:px-8 sm:py-12">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(31,199,182,0.2),transparent_68%)] blur-2xl"
        />
        <div className="relative max-w-3xl">
          <div className="eyebrow">
            <MessageSquareHeart className="h-4 w-4" />
            <span>Student Feedback</span>
          </div>
          <h1 className="section-title mt-5">
            Help us make EduBh better
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Share your honest experience with our programs, counselling, and
            student support. Your feedback helps us improve every learner
            journey.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)]">
        <section className="surface-card-strong p-5 sm:p-7">
          <FeedbackForm />
        </section>

        <aside className="space-y-5">
          <div className="surface-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-tight text-[var(--foreground)]">
              What should I share?
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <li>Program and university experience</li>
              <li>Admissions or counselling support</li>
              <li>Learning platform and faculty experience</li>
              <li>Suggestions that could help future students</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-emerald-200 bg-[linear-gradient(145deg,rgba(236,253,245,0.92),rgba(255,255,255,0.98))] p-6 shadow-[0_18px_46px_rgba(16,185,129,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-lg font-bold text-slate-950">
              One person, one feedback
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Email addresses are normalized and checked atomically before a
              submission is stored, preventing duplicate feedback.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
