'use client';
import React, { useEffect } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // const [uiHover, setUiHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* <SplashCursor hide={uiHover} /> */}
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
} 