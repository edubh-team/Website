"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="mt-4">
      <div className="glass-panel relative overflow-hidden rounded-[28px] bg-white px-5 py-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:px-10 sm:py-8">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#1D1D1F] sm:text-3xl">
            Ready to become industry-ready?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-[#86868B] sm:text-sm">
            One unified application to access curated programs from Manipal,
            Jain, and Sharda University Online. No agents, no noise.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
            <Link href="/apply" className="inline-flex">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full bg-[#1f3c88] px-6 py-2.5 text-xs font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
              >
                Apply Now
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </motion.button>
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-slate-100 px-5 py-2 text-xs font-medium text-[#1D1D1F] backdrop-blur-xl hover:bg-slate-200"
            >
              Talk to an advisor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
