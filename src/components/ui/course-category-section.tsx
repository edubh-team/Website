"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Course } from "@/data/courses";
import Image from "next/image";

type Props = {
  title: string;
  courses: Course[];
  onSelect?: (course: Course) => void;
};

const universityLogos: Record<string, string> = {
  "Manipal University": "/manipal.png",
  "Jain University": "/jain.png",
  "Sharda University Online": "/sharda.png",
};

export function CourseCategorySection({ title, courses, onSelect }: Props) {
  if (!courses.length) {
    return null;
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-tight text-[#1D1D1F]">
          {title}
        </h2>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#86868B]">
          {courses.length} program{courses.length > 1 ? "s" : ""}
        </p>
      </div>
      <AnimatePresence initial={false}>
        <motion.div
          key={courses.map((c) => c.id).join("-")}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {courses.map((course) => (
            <motion.article
              key={course.id}
              layout
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3 text-xs">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#86868B]">
                    {course.university}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-[#1D1D1F]">
                    {course.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[11px] text-[#86868B]">
                    {course.description}
                  </p>
                  <p className="mt-2 text-[11px] text-[#86868B]">
                    {course.duration}
                  </p>
                </div>
                <div className="mt-1 h-9 w-9 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
                  {universityLogos[course.university] && (
                    <Image
                      src={universityLogos[course.university]}
                      alt={course.university}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="relative mt-4 flex items-center justify-between text-[11px]">
                <button
                  type="button"
                  onClick={() => onSelect?.(course)}
                  className="inline-flex items-center gap-1 text-[#1f3c88] underline-offset-4 hover:underline"
                >
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
