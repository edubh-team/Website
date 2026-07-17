"use client";

import { useState } from "react";
import { Hero } from "@/components/ui/hero";
import { LogoTicker } from "@/components/ui/logo-ticker";
import { CourseShowcase } from "@/components/ui/course-showcase";
import { TestimonialsColumn } from "@/components/ui/testimonials";
import { CTABanner } from "@/components/ui/cta-banner";
import { PlacementPartners } from "@/sections/PlacementPartners";
import {
  ApplicationModal,
} from "@/components/ui/application-modal";
import type { LeadSource } from "@/components/ui/application-form";

export default function Home() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [leadSource, setLeadSource] = useState<LeadSource>("Apply Now");
  const [resetSignal, setResetSignal] = useState(0);

  function openApplicationModal(source: LeadSource) {
    setLeadSource(source);
    setResetSignal((value) => value + 1);
    setIsApplicationModalOpen(true);
  }

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <Hero onOpenApplicationModal={openApplicationModal} />
        <LogoTicker />
        <PlacementPartners />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.92fr)]">
          <CourseShowcase />
          <TestimonialsColumn />
        </div>
        <CTABanner onOpenApplicationModal={openApplicationModal} />
      </div>

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        leadSource={leadSource}
        resetSignal={resetSignal}
        onClose={() => setIsApplicationModalOpen(false)}
      />
    </>
  );
}
