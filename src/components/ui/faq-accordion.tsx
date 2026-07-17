"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  question: string;
  answer: string;
};

const items: Item[] = [
  {
    question: "Is EduBh an official partner of Manipal, Jain, and Sharda University Online?",
    answer:
      "EduBh works closely with partner universities to design industry-ready pathways, while all admissions and degrees are granted directly by the universities.",
  },
  {
    question: "Can I apply to multiple programs with one application?",
    answer:
      "Yes. A single EduBh application lets our advisors match you to multiple suitable programs based on your profile and preferences.",
  },
  {
    question: "Do you offer support for scholarships or financial aid?",
    answer:
      "EduBh advisors help you understand available scholarships, fee structures, and payment options. Final decisions are taken by the universities.",
  },
  {
    question: "Is the platform mobile friendly?",
    answer:
      "The entire experience is optimised for mobile and desktop with a focus on fast, distraction-free workflows.",
  },
];

export function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="surface-card px-5 py-5 sm:px-6">
      <div>
        <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          FAQs
        </h2>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          Answers to common questions from learners and parents.
        </p>
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const open = index === activeIndex;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/92 shadow-[0_14px_28px_rgba(16,32,58,0.06)]"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-[var(--foreground)]"
              >
                <span>{item.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef3fa] text-lg text-[var(--muted)]">
                  {open ? "-" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div className="border-t border-[rgba(109,132,170,0.12)] bg-[linear-gradient(180deg,rgba(22,93,245,0.04),rgba(255,255,255,0.92))] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
