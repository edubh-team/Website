"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Google", logo: "/placement/Google-logo.png" },
  { name: "Microsoft", logo: "/placement/microsoft-logo.png" },
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
      className="py-24"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1D1D1F]">
          Our Alumni Work At
        </h2>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-4 py-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {items.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="group flex min-w-[180px] items-center justify-center rounded-2xl bg-[#F5F5F7] px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${
                  company.name === "Microsoft" || company.name === "KPMG"
                    ? "h-14"
                    : "h-10"
                } w-auto grayscale opacity-40 transition-all group-hover:grayscale-0 group-hover:opacity-100`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
