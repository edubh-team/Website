import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SiteFooter } from "@/components/ui/footer";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EduBh – Industry-Ready Education",
  description:
    "EduBh connects ambitious learners with top universities like Manipal, Jain, and Sharda University Online through industry-ready programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-[#f5f5f7] text-[#1D1D1F]`}
      >
        <div className="min-h-screen bg-[#f5f5f7]">
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/main.png"
                  alt="EduBh"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-2xl object-contain"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#86868B]">
                    EduBh
                  </p>
                  <p className="text-xs text-[#1D1D1F]">
                    Industry-Ready Education
                  </p>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-xs font-medium text-[#1D1D1F] md:flex">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <Link href="/courses" className="hover:text-blue-600">
                  Courses
                </Link>
                <Link href="/apply" className="hover:text-blue-600">
                  Apply
                </Link>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </nav>
              <div className="hidden text-[11px] text-[#86868B] md:block">
                Partnering with{" "}
                <span className="font-semibold text-[#1D1D1F]">
                  Manipal
                </span>
                ,{" "}
                <span className="font-semibold text-[#1D1D1F]">Jain</span>, and{" "}
                <span className="font-semibold text-[#1D1D1F]">
                  Sharda University Online
                </span>
              </div>
            </div>
          </header>
          <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-6xl flex-col px-4 pb-24 pt-10 md:px-8 md:pb-28 md:pt-12">
            <main className="flex-1 space-y-8">{children}</main>
          </div>
          <SiteFooter />
          <FloatingDock />
        </div>
      </body>
    </html>
  );
}
