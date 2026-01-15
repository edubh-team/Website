"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, BookOpen, PenSquare, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/apply", label: "Apply", icon: PenSquare },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function FloatingDock() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === footer) {
            setFooterVisible(entry.isIntersecting);
          }
        }
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 80, opacity: 0, scale: 0.98 }}
        animate={{
          y: footerVisible ? 40 : 0,
          opacity: footerVisible ? 0 : 1,
          scale: footerVisible ? 0.96 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        className="pointer-events-none fixed inset-x-0 bottom-6 z-40 hidden justify-center md:flex"
      >
        <div
          className="pointer-events-auto dock-blur flex items-center gap-2 rounded-full px-3 py-2"
          style={{ pointerEvents: footerVisible ? "none" : "auto" }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-flex"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-[#1D1D1F] hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.nav>

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-white/90 px-4 py-4 backdrop-blur-md md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/main.png"
            alt="EduBh"
            width={28}
            height={28}
            className="h-7 w-7 rounded-2xl object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-[#1D1D1F]">
            EduBh
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#1D1D1F] backdrop-blur-xl"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-4 rounded-full bg-[#1D1D1F] transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-3 rounded-full bg-[#1D1D1F] transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-[#1D1D1F] transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-xl md:hidden"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            className="mx-4 mt-20 rounded-3xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-[#1D1D1F] hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
