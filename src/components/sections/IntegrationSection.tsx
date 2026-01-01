import React from "react";
import SectionHeaderElement from "../SectionHeaderElement";
import FeatureCard from "../FeatureCard";

export default function IntegrationSection() {
  return (
    <div className="mx-auto max-w-7xl pt-45">
      <SectionHeaderElement colstyle="w-5/12" title="Integration">
        Connect all your tools and work efficiently.
      </SectionHeaderElement>
      <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 mt-12">
        <FeatureCard svg="integration" title="20+ integrations" link="#">
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
        <FeatureCard
          isColored
          svg="all-in-one"
          title="All-in-one platform"
          link="#"
        >
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
        <FeatureCard svg="advanced-charts" title="Advanced charts">
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
      </div>
    </div>
  );
}
