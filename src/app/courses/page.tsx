"use client";

import { Suspense, useMemo, useState } from "react";
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

function CoursesPageContent() {
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
      ug: filtered.filter((course) => course.category === "Undergraduate"),
      pg: filtered.filter((course) => course.category === "Postgraduate"),
      integrated: filtered.filter((course) => course.category === "Integrated"),
    };
  }, [filtered]);

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="surface-card-strong overflow-hidden px-6 py-8 sm:px-8 sm:py-10"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-4">
            <div className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Programs</span>
            </div>
            <h1 className="section-title text-balance">Explore programs</h1>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
              Curated undergraduate, postgraduate, and integrated programs from
              Manipal University, Jain University, and Sharda University Online.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="trust-pill">
              <strong>3</strong>
              <span>University partners</span>
            </div>
            <div className="trust-pill">
              <strong>{filtered.length}</strong>
              <span>Programs matched</span>
            </div>
            <div className="trust-pill">
              <strong>1</strong>
              <span>Unified application</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.06, type: "spring", stiffness: 120, damping: 18 }}
        className="surface-card px-5 py-5 sm:px-6"
      >
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="space-y-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Filter by level
            </p>
            <div className="flex flex-wrap gap-2">
              {levelOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setLevel(option.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    level === option.key
                      ? "bg-[linear-gradient(135deg,#165df5,#0d47c4)] text-white shadow-[0_12px_28px_rgba(22,93,245,0.22)]"
                      : "bg-white text-[var(--foreground)] shadow-[0_8px_18px_rgba(16,32,58,0.06)] hover:bg-[#eef3fa]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Filter by university
            </p>
            <div className="flex flex-wrap gap-2">
              {universityOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setUniversity(option.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    university === option.key
                      ? "bg-[linear-gradient(135deg,#165df5,#0d47c4)] text-white shadow-[0_12px_28px_rgba(22,93,245,0.22)]"
                      : "bg-white text-[var(--foreground)] shadow-[0_8px_18px_rgba(16,32,58,0.06)] hover:bg-[#eef3fa]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
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

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="space-y-4">
          <div className="h-6 w-40 rounded-full bg-slate-100" />
          <div className="h-24 rounded-3xl bg-slate-100" />
        </div>
      }
    >
      <CoursesPageContent />
    </Suspense>
  );
}
