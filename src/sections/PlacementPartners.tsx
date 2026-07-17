"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Google", logo: "/placement/Google-logo.png" },
  { name: "Microsoft", logo: "/placement/microsoft-logo-microsoft-icon-transparent-free-png.png" },
  { name: "Amazon", logo: "/placement/amazon-logo.png" },
  { name: "Deloitte", logo: "/placement/Deloitte-logo.png" },
  { name: "KPMG", logo: "/placement/kpmg-logo.png" },
  { name: "Infosys", logo: "/placement/Infosys-logo.png" },
  { name: "TCS", logo: "/placement/TCS-logo.png" },
];

export function PlacementPartners() {
  const items = [...companies, ...companies, ...companies];

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="surface-card-dark overflow-hidden px-6 py-8 sm:px-8"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#93a8cc]">
            Placements
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Our Alumni Work At
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#c6d2e8]">
          Outcome-led programs shaped for ambitious learners and modern hiring expectations.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 p-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#081326] via-[#081326]/72 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#081326] via-[#081326]/72 to-transparent" />
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {items.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              whileHover={{ scale: 1.03, y: -2 }}
              className="group flex min-w-[210px] items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/96 px-6 py-5 shadow-[0_18px_36px_rgba(8,19,38,0.2)]"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.name === "Microsoft" || company.name === "KPMG" ? 160 : 120}
                height={company.name === "Microsoft" || company.name === "KPMG" ? 64 : 36}
                className={`${
                  company.name === "Microsoft" || company.name === "KPMG"
                    ? "h-16"
                    : "h-9"
                } w-auto grayscale opacity-55 transition-all group-hover:grayscale-0 group-hover:opacity-100`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
