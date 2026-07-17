"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, X } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/data/courses";

type CourseDetailsModalProps = {
  course: Course | null;
  onClose: () => void;
};

export function CourseDetailsModal({ course, onClose }: CourseDetailsModalProps) {
  useEffect(() => {
    if (!course) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [course, onClose]);

  return (
    <AnimatePresence>
      {course && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,17,31,0.44)] px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="surface-card-strong relative w-full max-w-2xl p-6 text-sm text-[var(--foreground)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="mb-5 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  {course.university}
                </p>
                <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {course.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(109,132,170,0.18)] bg-white text-[var(--muted)] shadow-[0_10px_24px_rgba(16,32,58,0.08)] transition-colors hover:text-[var(--foreground)]"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-[#eef3fa] px-3 py-1.5 text-[var(--foreground)]">
                {course.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#eef3fa] px-3 py-1.5 text-[var(--foreground)]">
                <Clock className="h-3.5 w-3.5" />
                <span>{course.duration}</span>
              </span>
            </div>

            <section className="max-h-[50vh] space-y-4 overflow-y-auto pr-1 text-sm leading-7 text-[var(--muted)]">
              <p>{course.description}</p>
              <div className="rounded-[1.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(22,93,245,0.08),rgba(255,255,255,0.9))] px-4 py-4">
                <p className="mb-2 font-semibold text-[var(--foreground)]">What to expect</p>
                <p>
                  Rigorous academics paired with mentor-led guidance, portfolio-ready
                  work, and personalised support from the EduBh counselling team.
                </p>
              </div>
            </section>

            <footer className="mt-6 flex flex-col gap-4 border-t border-[rgba(109,132,170,0.14)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                Secure your seat with a guided application through EduBh.
              </p>
              <Link href="/apply" className="button-primary text-sm">
                Apply now
              </Link>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
