"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Product Manager, Bangalore",
    text: "EduBh and Amity gave me a portfolio of shipped features before graduation.",
    avatar: avatar1,
  },
  {
    name: "Ishita Verma",
    role: "Data Analyst, Gurgaon",
    text: "The Manipal AI track felt like working inside a real analytics team.",
    avatar: avatar2,
  },
  {
    name: "Rahul Singh",
    role: "Software Engineer, Pune",
    text: "Every semester had an industry mentor who actually reviewed our work.",
    avatar: avatar3,
  },
  {
    name: "Sara Mathew",
    role: "Marketing Strategist, Mumbai",
    text: "The capstone with a global SaaS company completely changed my career trajectory.",
    avatar: avatar4,
  },
];

export function TestimonialsColumn() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="surface-card px-5 py-6 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Outcomes
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Love from EduBh alumni
          </h2>
        </div>
        <div className="rounded-full border border-[rgba(109,132,170,0.16)] bg-white/80 px-4 py-2 text-sm text-[var(--muted)]">
          4.9/5 average satisfaction across 2000+ learners
        </div>
      </div>

      <div className="relative h-[380px] overflow-hidden rounded-[1.8rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,246,252,0.86))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <motion.div
          className="flex h-max flex-col gap-4"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {items.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              className="rounded-[1.55rem] border border-white/80 bg-white/92 p-4 shadow-[0_18px_32px_rgba(16,32,58,0.08)]"
            >
              <div className="mb-3 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-7 text-[var(--foreground)]">{t.text}</p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-2xl object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-[var(--foreground)]">{t.name}</p>
                  <p className="text-[var(--muted)]">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f1f6fc] via-[#f1f6fc]/88 to-transparent" />
      </div>
    </section>
  );
}
