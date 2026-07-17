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
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {title}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {courses.length} program{courses.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={courses.map((course) => course.id).join("-")}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {courses.map((course) => (
            <motion.article
              key={course.id}
              layout
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/94 p-5 shadow-[0_18px_34px_rgba(16,32,58,0.08)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(22,93,245,0.1),transparent_55%,rgba(31,199,182,0.12))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex rounded-full border border-[rgba(109,132,170,0.16)] bg-[rgba(22,93,245,0.08)] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      {course.university}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                        {course.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(22,93,245,0.12),rgba(31,199,182,0.14))]">
                    {universityLogos[course.university] && (
                      <Image
                        src={universityLogos[course.university]}
                        alt={course.university}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    )}
                  </div>
                </div>

                <div className="relative flex flex-wrap items-center justify-between gap-3 text-sm">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#eef3fa] px-3 py-1.5 text-[var(--foreground)]">
                      {course.category}
                    </span>
                    <span className="rounded-full bg-[#f6f8fc] px-3 py-1.5 text-[var(--muted)]">
                      {course.duration}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelect?.(course)}
                    className="button-ghost text-sm"
                  >
                    View details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
