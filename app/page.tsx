import { DemoBackgroundPaths } from "@/components/demo-background-paths";
import { ContentSections } from "@/components/content-sections";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <DemoBackgroundPaths />
      <ContentSections />
      <TestimonialsSection />
      <FAQSection />
      <SiteFooter />
    </>
  );
}
