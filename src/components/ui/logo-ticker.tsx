"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Manipal University", short: "Manipal" },
  { name: "Jain University", short: "Jain" },
  { name: "Sharda University Online", short: "Sharda" },
];

export function LogoTicker() {
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="mb-10">
      <div className="mb-3 flex items-center justify-between text-xs text-[#86868B]">
        <span>Trusted by leading universities</span>
        <span className="hidden sm:inline">Curated cohorts, small class sizes</span>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              className="group flex min-w-[180px] items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs text-[#86868B] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              {logo.name === "Manipal University" ? (
                <Image
                  src="/manipal.png"
                  alt="Manipal University"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-contain"
                />
              ) : logo.name === "Jain University" ? (
                <Image
                  src="/jain.png"
                  alt="Jain University"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-contain"
                />
              ) : logo.name === "Sharda University Online" ? (
                <Image
                  src="/sharda.png"
                  alt="Sharda University Online"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-contain"
                />
              ) : (
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-slate-200/60 to-white group-hover:from-blue-200/80" />
              )}
              <div className="text-left">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#1D1D1F]">
                  {logo.short}
                </div>
                <div className="text-[11px] text-[#86868B]">{logo.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
