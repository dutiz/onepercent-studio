import React from "react";
import FeatureCard from "../FeatureCard";
import SectionHeaderElement from "../SectionHeaderElement";

export default function ServiceValuesSection() {
  return (
    <div className="mx-auto max-w-7xl pt-45 pb-37.5 border-b border-gray-200">
      <SectionHeaderElement colstyle="col-6" title="Our Values">
        Powerful features to advanced user analytics
      </SectionHeaderElement>
      <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 mt-12">
        <FeatureCard svg="secured-platform" title="Secured Platforms" link="#">
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
        <FeatureCard
          isColored
          svg="advanced-analytics"
          title="Advanced Analytics"
          link="#"
        >
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
        <FeatureCard
          svg="powerfull-automation"
          title="Powerful Automation"
          link="#"
        >
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
      </div>
    </div>
  );
}
