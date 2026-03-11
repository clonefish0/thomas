import { DemoBackgroundPaths } from "@/components/demo-background-paths";
import { StatsSection } from "@/components/stats-section";
import { MarqueeSection } from "@/components/ui/marquee-section";
import { ContentSections } from "@/components/content-sections";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { StickyCTA } from "@/components/ui/sticky-cta";

export default function Home() {
  return (
    <>
      <DemoBackgroundPaths />
      <AboutSection />
      <StatsSection />
      <MarqueeSection />
      <ContentSections />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <SiteFooter />
      <StickyCTA />
    </>
  );
}
