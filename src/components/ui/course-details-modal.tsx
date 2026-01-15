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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-xl"
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
            className="glass-panel relative w-full max-w-lg border border-gray-200 bg-white/95 p-5 text-xs text-[#1D1D1F]"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="mb-4 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#86868B]">
                  {course.university}
                </p>
                <h2 className="text-sm font-semibold leading-snug text-[#1D1D1F] sm:text-base">
                  {course.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-[#86868B] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-colors hover:text-[#1D1D1F]"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-[#1D1D1F]">
                {course.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-[#1D1D1F]">
                <Clock className="h-3 w-3" />
                <span>{course.duration}</span>
              </span>
            </div>

            <section className="max-h-[50vh] space-y-3 overflow-y-auto pr-1 text-[13px] leading-relaxed text-[#86868B]">
              <p>{course.description}</p>
              <div className="rounded-2xl border border-gray-200 bg-[#F5F5F7] px-3 py-3 text-[11px] text-[#4b4b50]">
                <p className="mb-1 font-medium text-[#1D1D1F]">What to expect</p>
                <p>
                  Rigorous academics paired with mentor-led guidance, portfolio-ready
                  work, and personalised support from the EduBh counselling team.
                </p>
              </div>
            </section>

            <footer className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4 text-[11px] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[#86868B]">
                Secure your seat with a guided application through EduBh.
              </p>
              <Link href="/apply" className="inline-flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f3c88] px-5 py-2 text-[11px] font-medium text-white shadow-[0_8px_30px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Apply now
                </button>
              </Link>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
