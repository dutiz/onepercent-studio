import PageTitleElement from "@/src/components/PageTitleElement";
import IntegrationSection from "@/src/components/sections/IntegrationSection";
import ProjectMindSection from "@/src/components/sections/ProjectMindSection";
import ServiceValuesSection from "@/src/components/sections/ServiceValuesSection";

export default function services() {
  return (
    <>
      <PageTitleElement title="Service">
        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
        ullamcorper sed pharetra sene.
      </PageTitleElement>
      <ServiceValuesSection />
      <IntegrationSection />
      <ProjectMindSection />
    </>
  );
}
