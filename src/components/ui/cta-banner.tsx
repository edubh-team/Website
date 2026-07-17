"use client";

import { motion } from "framer-motion";
import type { LeadSource } from "@/components/ui/application-form";

type CTABannerProps = {
  onOpenApplicationModal: (leadSource: LeadSource) => void;
};

export function CTABanner({ onOpenApplicationModal }: CTABannerProps) {
  return (
    <section className="surface-card-dark relative overflow-hidden px-6 py-8 text-center sm:px-10 sm:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5rem] top-[-5rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(22,93,245,0.34),transparent_64%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(31,199,182,0.3),transparent_66%)] blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative"
      >
        <h2 className="section-title text-balance text-white">
          Ready to become industry-ready?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#c6d2e8] sm:text-base">
          One unified application to access curated programs from Manipal, Jain,
          and Sharda University Online. No agents, no noise.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => onOpenApplicationModal("Apply Now")}
            className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-[#0d47c4] shadow-[0_18px_34px_rgba(7,17,31,0.22)] transition hover:-translate-y-0.5"
          >
            Apply Now
          </button>
          <button
            type="button"
            onClick={() => onOpenApplicationModal("Book a Free Call")}
            className="inline-flex items-center rounded-full border border-white/18 bg-white/8 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
          >
            Book a Free Call
          </button>
        </div>
      </motion.div>
    </section>
  );
}
