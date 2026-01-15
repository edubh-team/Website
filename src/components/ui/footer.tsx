import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 w-full border-t border-gray-300 bg-white px-4 py-10 text-sm text-[#86868B] shadow-[0_-6px_30px_rgba(15,23,42,0.08)] md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
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
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-[#86868B]">
            EduBh partners with leading universities like Manipal, Jain, and
            Sharda University Online to deliver industry-ready learning
            experiences.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 md:max-w-xl md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#86868B]">
              Programs
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/courses" className="hover:text-[#1D1D1F]">
                  Postgraduate programs
                </Link>
              </li>
              <li>
                <Link href="/courses?level=ug" className="hover:text-[#1D1D1F]">
                  Undergraduate programs
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#1D1D1F]">
                  View all courses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#86868B]">
              Contact
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a href="mailto:support@edubh.in" className="hover:text-[#1D1D1F]">
                  support@edubh.com
                </a>
              </li>
              <li>
                <a href="tel:+91824051323" className="hover:text-[#1D1D1F]">
                  +91 8240501323
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D1D1F]">
                  Contact support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#86868B]">
              Legal
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/terms" className="hover:text-[#1D1D1F]">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#1D1D1F]">
                  Privacy policy
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#86868B]">
                  © 2025 EduBh
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
