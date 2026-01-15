"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import type { Course } from "@/data/courses";
import { CourseCategorySection } from "@/components/ui/course-category-section";
import { CourseDetailsModal } from "@/components/ui/course-details-modal";

type LevelFilter = "all" | "ug" | "pg" | "integrated";
type UniversityFilter = "all" | "manipal" | "jain" | "sharda";

const levelOptions: { key: LevelFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ug", label: "Undergraduate" },
  { key: "pg", label: "Postgraduate" },
  { key: "integrated", label: "Integrated" },
];

const universityOptions: { key: UniversityFilter; label: string }[] = [
  { key: "all", label: "All partners" },
  { key: "manipal", label: "Manipal University" },
  { key: "jain", label: "Jain University" },
  { key: "sharda", label: "Sharda University Online" },
];

export default function CoursesPage() {
  const searchParams = useSearchParams();

  const [level, setLevel] = useState<LevelFilter>(() => {
    const param = searchParams.get("level");
    return param === "ug" || param === "pg" || param === "integrated" || param === "all"
      ? param
      : "all";
  });
  const [university, setUniversity] = useState<UniversityFilter>("all");
  const [selected, setSelected] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesLevel =
        level === "all"
          ? true
          : level === "ug"
          ? course.category === "Undergraduate"
          : level === "pg"
          ? course.category === "Postgraduate"
          : course.category === "Integrated";

      const matchesUniversity =
        university === "all"
          ? true
          : university === "manipal"
          ? course.university === "Manipal University"
          : university === "jain"
          ? course.university === "Jain University"
          : course.university === "Sharda University Online";

      return matchesLevel && matchesUniversity;
    });
  }, [level, university]);

  const grouped = useMemo(() => {
    return {
      ug: filtered.filter((c) => c.category === "Undergraduate"),
      pg: filtered.filter((c) => c.category === "Postgraduate"),
      integrated: filtered.filter((c) => c.category === "Integrated"),
    };
  }, [filtered]);

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="space-y-3"
      >
        <h1 className="text-2xl font-semibold tracking-tight text-[#1D1D1F]">
          Explore programs
        </h1>
        <p className="max-w-2xl text-sm text-[#86868B]">
          Curated undergraduate, postgraduate, and integrated programs from
          Manipal University, Jain University, and Sharda University Online.
        </p>
      </motion.section>

      <motion.section
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.06, type: "spring", stiffness: 120, damping: 18 }}
        className="flex flex-wrap gap-4 rounded-3xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#86868B]">
            Level
          </span>
          {levelOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setLevel(option.key)}
              className={`inline-flex items-center rounded-full px-3 py-1 ${
                level === option.key
                  ? "bg-[#1f3c88] text-white"
                  : "bg-slate-100 text-[#1D1D1F] hover:bg-slate-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#86868B]">
            University
          </span>
          {universityOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setUniversity(option.key)}
              className={`inline-flex items-center rounded-full px-3 py-1 ${
                university === option.key
                  ? "bg-[#1f3c88] text-white"
                  : "bg-slate-100 text-[#1D1D1F] hover:bg-slate-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.div
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, type: "spring", stiffness: 120, damping: 20 }}
        className="space-y-8"
      >
        <CourseCategorySection
          title="Undergraduate (UG)"
          courses={grouped.ug}
          onSelect={setSelected}
        />
        <CourseCategorySection
          title="Postgraduate (PG)"
          courses={grouped.pg}
          onSelect={setSelected}
        />
        <CourseCategorySection
          title="Integrated Programs"
          courses={grouped.integrated}
          onSelect={setSelected}
        />
      </motion.div>

      <CourseDetailsModal course={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
