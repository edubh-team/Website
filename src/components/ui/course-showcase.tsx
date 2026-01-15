"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/courses";

export function CourseShowcase() {
  const featured = courses.slice(0, 4);

  return (
    <section className="mb-10 space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#86868B]">
            Programs
          </p>
          <h2 className="mt-1 text-sm font-semibold tracking-tight text-[#1D1D1F]">
            Featured for this admission cycle
          </h2>
          <p className="mt-1 text-xs text-[#86868B]">
            Industry-aligned courses from Manipal, Jain, and Sharda University
            Online.
          </p>
        </div>
        <Link
          href="/courses"
          className="text-xs font-medium text-[#1f3c88] underline-offset-4 hover:underline"
        >
          View all programs
        </Link>
      </div>
      <div className="bento-grid gap-4">
        {featured.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            className="group relative col-span-12 overflow-hidden rounded-3xl bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.06)] transition-all sm:p-6 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.16)] md:col-span-6"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="h-full w-full bg-gradient-to-br from-blue-50/50 via-transparent to-transparent" />
            </div>
            <Link href={`/courses/${course.id}`} className="relative block">
              <div className="mb-3 flex items-center justify-between gap-3 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-[#1D1D1F]">
                  {course.university}
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] text-[#86868B]">
                  {course.category}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-[#1D1D1F]">
                {course.title}
              </h3>
              <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-[#86868B]">
                {course.description}
              </p>
              <p className="text-[11px] text-[#86868B]">{course.duration}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
