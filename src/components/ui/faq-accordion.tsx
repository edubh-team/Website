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
    <section className="mt-10 space-y-4">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#86868B]">
          FAQs
        </h2>
        <p className="mt-1 text-xs text-[#86868B]">
          Answers to common questions from learners and parents.
        </p>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => {
          const open = index === activeIndex;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(open ? null : index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-xs text-[#1D1D1F]"
              >
                <span>{item.question}</span>
                <span className="ml-3 text-base text-[#86868B]">
                  {open ? "–" : "+"}
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
                    <div className="border-t border-gray-200 bg-[#F5F5F7] px-4 py-3 text-xs text-[#86868B]">
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
