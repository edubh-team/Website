"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, BookOpen, MessageSquareHeart, PenSquare, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/apply", label: "Apply", icon: PenSquare },
  { href: "/feedback", label: "Feedback", icon: MessageSquareHeart },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function FloatingDock() {
  const pathname = usePathname();
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
      className="pointer-events-none fixed inset-x-0 bottom-6 z-40 hidden justify-center xl:flex"
    >
      <div
        className="pointer-events-auto dock-blur flex items-center gap-2 rounded-full px-3 py-2"
        style={{ pointerEvents: footerVisible ? "none" : "auto" }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className="relative inline-flex">
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-[linear-gradient(135deg,#165df5,#0d47c4)] text-white shadow-[0_12px_28px_rgba(22,93,245,0.24)]"
                    : "text-[var(--foreground)] hover:bg-white/74"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

