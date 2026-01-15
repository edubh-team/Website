"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Product Manager, Bangalore",
    text: "EduBh and Amity gave me a portfolio of shipped features before graduation.",
  },
  {
    name: "Ishita Verma",
    role: "Data Analyst, Gurgaon",
    text: "The Manipal AI track felt like working inside a real analytics team.",
  },
  {
    name: "Rahul Singh",
    role: "Software Engineer, Pune",
    text: "Every semester had an industry mentor who actually reviewed our work.",
  },
  {
    name: "Sara Mathew",
    role: "Marketing Strategist, Mumbai",
    text: "The capstone with a global SaaS company completely changed my career trajectory.",
  },
];

export function TestimonialsColumn() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="mb-10 space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#86868B]">
            Outcomes
          </p>
          <h2 className="mt-1 text-sm font-semibold tracking-tight text-[#1D1D1F]">
            Love from EduBh alumni
          </h2>
        </div>
        <div className="hidden text-[11px] text-[#86868B] sm:block">
          4.9/5 average satisfaction across 2000+ learners
        </div>
      </div>
      <div className="relative mt-2 h-[260px] overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:h-[320px]">
        <motion.div
          className="flex h-max flex-col gap-4"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {items.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              className="glass-panel flex flex-col gap-1 rounded-2xl border-gray-200 bg-white/90 p-3 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[#1D1D1F]">{t.text}</p>
              <div className="mt-2 text-[11px] text-[#86868B]">
                <span className="font-medium text-[#1D1D1F]">{t.name}</span>
                <span className="mx-1 text-[#86868B]">•</span>
                <span>{t.role}</span>
              </div>
            </article>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
}
