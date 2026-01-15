import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type Params = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const course = courses.find((c) => c.id === params.id);
  if (!course) {
    return {
      title: "Course not found – EduBh",
    };
  }

  return {
    title: `${course.title} at ${course.university} – EduBh`,
    description: course.description,
  };
}

export default function CourseDetail({ params }: Params) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="sticky top-[56px] z-10 mb-4 flex items-center justify-between gap-4 border-b border-gray-200 bg-white/90 py-3 backdrop-blur-md md:top-[64px]">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#86868B]">
            {course.university}
          </p>
          <h1 className="text-lg font-semibold text-[#1D1D1F] md:text-xl">
            {course.title}
          </h1>
        </div>
        <Link href="/apply">
          <button className="rounded-full bg-[#1f3c88] px-5 py-2 text-xs font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
            Apply Now
          </button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section className="space-y-4 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#86868B]">
            Program overview
          </h2>
          <p className="text-sm leading-relaxed text-[#1D1D1F]">
            {course.description}
          </p>
          <div className="grid gap-3 text-xs text-[#86868B] sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#86868B]">
                Duration
              </p>
              <p className="mt-1 font-medium text-[#1D1D1F]">
                {course.duration}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#86868B]">
                Category
              </p>
              <p className="mt-1 font-medium text-[#1D1D1F]">
                {course.category}
              </p>
            </div>
          </div>
          <div className="mt-2 rounded-2xl bg-slate-50 px-4 py-4 text-xs text-[#86868B]">
            <p className="mb-1 font-medium text-[#1D1D1F]">Eligibility</p>
            <p>
              Undergraduate programs typically require 10+2 with a strong
              academic profile. Postgraduate programs require a relevant
              undergraduate degree. Final eligibility is confirmed by the
              university admissions team.
            </p>
          </div>
        </section>
        <aside className="space-y-4">
          <div className="glass-panel bg-white/90 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#86868B]">
              Program snapshot
            </h2>
            <dl className="space-y-3 text-xs text-[#86868B]">
              <div className="flex justify-between gap-4">
                <dt>University</dt>
                <dd className="font-medium text-[#1D1D1F]">
                  {course.university}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Category</dt>
                <dd className="font-medium text-[#1D1D1F]">
                  {course.category}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Duration</dt>
                <dd className="font-medium text-[#1D1D1F]">
                  {course.duration}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Fees</dt>
                <dd className="font-medium text-[#1D1D1F]">
                  Shared during counselling
                </dd>
              </div>
            </dl>
            <Link href="/apply" className="mt-4 inline-flex w-full">
              <button className="inline-flex w-full items-center justify-center rounded-full bg-[#1f3c88] px-5 py-2.5 text-xs font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                Start application
              </button>
            </Link>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white/90 p-4 text-xs text-[#86868B] backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <p className="mb-1 font-medium text-[#1D1D1F]">
              How EduBh supports you
            </p>
            <ul className="space-y-1.5">
              <li>Profile evaluation and course fitment</li>
              <li>Application review and essay guidance</li>
              <li>Scholarship and financial planning support</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
