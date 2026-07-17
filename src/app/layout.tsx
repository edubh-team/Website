import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SiteFooter } from "@/components/ui/footer";
import { SiteHeader } from "@/components/ui/site-header";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EduBh - Industry-Ready Education",
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
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        <div className="site-shell min-h-screen">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-[-12rem] z-0 mx-auto h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(22,93,245,0.18),transparent_68%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-[-10rem] right-[-6rem] z-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(31,199,182,0.18),transparent_66%)] blur-3xl"
          />
          <SiteHeader />
          <div className="page-shell">
            <main className="section-stack">{children}</main>
          </div>
          <SiteFooter />
          <FloatingDock />
        </div>
      </body>
    </html>
  );
}
