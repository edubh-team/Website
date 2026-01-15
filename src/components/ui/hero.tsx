"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mb-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-[#1D1D1F] shadow-sm backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Admissions open for 2025 cohorts</span>
        </motion.div>
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, type: "spring", stiffness: 110 }}
          className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight bg-gradient-to-r from-[#1D1D1F] via-[#1D1D1F] to-[#1f3c88] bg-clip-text text-transparent sm:text-5xl md:text-6xl"
        >
          EduBh – Industry-Ready Education
        </motion.h1>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12, type: "spring", stiffness: 110 }}
          className="max-w-xl text-balance text-sm leading-relaxed text-[#86868B] sm:text-base"
        >
          Curated programs from Manipal, Jain, and Sharda University Online,
          engineered with
          industry partners so you graduate with a portfolio, not just a
          degree.
        </motion.p>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18, type: "spring", stiffness: 110 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link href="/apply" className="inline-flex">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full bg-[#1f3c88] px-6 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            >
              Apply Now
              <span className="text-xs text-sky-100/80">Takes less than 3 minutes</span>
            </motion.button>
          </Link>
          <Link href="/courses" className="text-xs font-medium text-[#1f3c88] underline-offset-4 hover:underline">
            Browse all programs
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.6 }}
        className="relative h-[260px] md:h-[320px]"
      >
        <div className="glass-panel radial-surface absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-10 top-6 h-44 w-44 rounded-full border border-blue-200/70 bg-gradient-to-br from-white to-blue-50"
            style={{ boxShadow: "0 40px 120px rgba(15,23,42,0.1)" }}
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4">
              <img
                src="/manipal.png"
                alt="Manipal"
                className="h-6 w-auto object-contain opacity-90 grayscale transition-all hover:grayscale-0 hover:opacity-100"
              />
              <img
                src="/jain.png"
                alt="Jain"
                className="h-6 w-auto object-contain opacity-90 grayscale transition-all hover:grayscale-0 hover:opacity-100"
              />
              <img
                src="/sharda.png"
                alt="Sharda"
                className="h-6 w-auto object-contain opacity-90 grayscale transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute right-[-3rem] top-16 h-52 w-52 rounded-[32px] border border-gray-200 bg-white/90"
            animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-b from-white via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-xs text-[#86868B]">
            <div className="mb-1 text-[10px] uppercase tracking-[0.24em] text-[#86868B]">
              Partnered Universities
            </div>
            <p className="font-medium text-[#1D1D1F]">
              Manipal University
              <span className="mx-1 text-[#86868B]">•</span>
              Jain University
              <span className="mx-1 text-[#86868B]">•</span>
              Sharda University Online
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
