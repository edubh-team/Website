import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { BranchInquiryForm } from "@/components/ui/branch-inquiry-form";
import { getOfficeBySlug, offices } from "@/data/offices";

type OfficePageProps = {
  params: Promise<{ slug: string }>;
};

const universityPartners = [
  { name: "Sikkim Skills University" },
  { name: "Matrix University" },
  { name: "Manipal University Jaipur", logo: "/manipal.png" },
  { name: "Arka Jain University" },
  { name: "Jain University Bangalore", logo: "/jain.png" },
  { name: "Sharda University", logo: "/sharda.png" },
];

export function generateStaticParams() {
  return offices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: OfficePageProps): Promise<Metadata> {
  const { slug } = await params;
  const office = getOfficeBySlug(slug);

  if (!office) {
    return {
      title: "Office Not Found | EduBh",
    };
  }

  return {
    title: "Welcome to EDUBH " + office.city,
    description:
      "Visit the EDUBH " +
      office.city +
      " - " +
      office.officeName +
      " office page for address details, branch support, and admission guidance.",
  };
}

export default async function OfficeDetailsPage({ params }: OfficePageProps) {
  const { slug } = await params;
  const office = getOfficeBySlug(slug);

  if (!office) {
    notFound();
  }

  const branch = office.city + " - " + office.officeName;

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white px-6 py-10 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:px-8 md:px-12 md:py-14">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_72%)]" />
        <div className="absolute -left-16 top-20 h-48 w-48 rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            <MapPin className="h-4 w-4" />
            EDUBH Office - {office.officeName}
          </div>

          <div className="mt-10 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-b from-white to-blue-50 shadow-[0_18px_40px_rgba(37,99,235,0.12)] ring-1 ring-blue-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.3rem] bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Building2 className="h-8 w-8" />
            </div>
          </div>

          <h1 className="mt-8 text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Welcome to EDUBH{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              {office.city}
            </span>
          </h1>

          <p className="mt-5 max-w-4xl text-lg font-medium leading-8 text-slate-500">
            We are the official partner of Sikkim Skills University, Matrix
            University, Manipal University Jaipur, Arka Jain University, Jain
            University Bangalore, and Sharda University.
          </p>

          <div className="mt-6 inline-flex max-w-3xl items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-left shadow-sm">
            <MapPin className="h-5 w-5 shrink-0 text-blue-600" />
            <p className="text-sm font-medium leading-6 text-slate-700">
              {office.fullAddress}
            </p>
          </div>

          <div className="mt-10 w-full rounded-[2rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,247,214,0.95),rgba(255,255,255,0.98),rgba(255,247,214,0.95))] px-4 py-5 shadow-[0_14px_50px_rgba(245,158,11,0.1)]">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {universityPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex min-h-24 items-center justify-center rounded-[1.4rem] border border-white/80 bg-white/90 px-4 py-4 shadow-sm"
                >
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={44}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <p className="text-center text-sm font-extrabold uppercase tracking-wide text-slate-800">
                      {partner.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-4xl">
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-[3.25rem]">
              We are specialised in{" "}
              <span className="text-blue-700">
                Online BBA, BCA, BCOM, MBA, MCA, MCom
              </span>
              .
            </h2>
            <p className="mt-4 text-lg font-medium text-slate-500">
              Kindly get connected with us for admission guidance, program
              selection, and branch support.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#branch-form"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
            >
              Contact This Office
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <BranchInquiryForm branch={branch} />

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/70 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              <GraduationCap className="h-4 w-4" />
              Branch Details
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Office
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {branch}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Address
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                  {office.fullAddress}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {office.phone && (
                  <div className="rounded-[1.5rem] bg-slate-50 p-4">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Phone
                    </p>
                    <a
                      href={"tel:" + office.phone.replaceAll(" ", "")}
                      className="mt-2 block text-sm font-semibold text-slate-900 hover:text-blue-700"
                    >
                      {office.phone}
                    </a>
                  </div>
                )}

                {office.email && (
                  <div className="rounded-[1.5rem] bg-slate-50 p-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Email
                    </p>
                    <a
                      href={"mailto:" + office.email}
                      className="mt-2 block break-all text-sm font-semibold text-slate-900 hover:text-blue-700"
                    >
                      {office.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,rgba(239,246,255,1),rgba(255,255,255,1),rgba(243,244,246,1))] p-7 shadow-[0_20px_70px_rgba(37,99,235,0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Why Students Contact This Office
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-[1.25rem] bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                Admission help for UG and PG online programs
              </div>
              <div className="rounded-[1.25rem] bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                Guidance for eligibility, fees, and admission steps
              </div>
              <div className="rounded-[1.25rem] bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                Faster support from the EDUBH office you opened
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
