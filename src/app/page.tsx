import { Hero } from "@/components/ui/hero";
import { LogoTicker } from "@/components/ui/logo-ticker";
import { CourseShowcase } from "@/components/ui/course-showcase";
import { TestimonialsColumn } from "@/components/ui/testimonials";
import { CTABanner } from "@/components/ui/cta-banner";
import { PlacementPartners } from "@/sections/PlacementPartners";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <LogoTicker />
      <PlacementPartners />
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <CourseShowcase />
        <TestimonialsColumn />
      </div>
      <CTABanner />
    </div>
  );
}
