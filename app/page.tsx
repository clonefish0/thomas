import { DemoBackgroundPaths } from "@/components/demo-background-paths";
import { ContentSections } from "@/components/content-sections";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <DemoBackgroundPaths />
      <ContentSections />
      <SiteFooter />
    </>
  );
}
