"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/courses";

export function CourseShowcase() {
  const featured = courses.slice(0, 4);

  return (
    <section className="surface-card px-5 py-6 sm:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Programs
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Featured for this admission cycle
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Industry-aligned courses from Manipal, Jain, and Sharda University
            Online.
          </p>
        </div>
        <Link href="/courses" className="button-secondary text-sm">
          View all programs
        </Link>
      </div>

      <div className="bento-grid">
        {featured.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative col-span-12 overflow-hidden rounded-[1.85rem] border border-white/70 bg-white/94 p-6 shadow-[0_18px_38px_rgba(16,32,58,0.08)] md:col-span-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(22,93,245,0.12),transparent_55%,rgba(31,199,182,0.12))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Link href={`/courses/${course.id}`} className="relative block space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="rounded-full border border-[rgba(109,132,170,0.16)] bg-[rgba(22,93,245,0.08)] px-3 py-1.5 font-semibold text-[var(--foreground)]">
                  {course.university}
                </span>
                <span className="rounded-full bg-[#eef3fa] px-3 py-1.5 font-medium text-[var(--muted)]">
                  {course.category}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                  {course.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
                  {course.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-[var(--muted)]">{course.duration}</p>
                <span className="button-ghost text-sm">View details</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
