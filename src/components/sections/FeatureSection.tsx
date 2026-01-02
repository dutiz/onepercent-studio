import FeatureCard from "../FeatureCard";
export default function FeatureSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-12">
        <div className="w-full mb-12 text-center">
          <h3 className="inline-block px-9 py-6 text-lg bg-gray-200 rounded-[34px] text-blue-500 uppercase font-bold">
            Features
          </h3>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mb-50">
        <FeatureCard svg="secured-platform" title="Secured Platforms" link="/">
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
        <FeatureCard
          isColored
          svg="advanced-analytics"
          title="Advanced Analytics"
          link="/"
        >
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
        <FeatureCard
          svg="powerfull-automation"
          title="Powerful automation"
          link="/"
        >
          Contrary to popular belief, Lore Ipsum is not simply random text. It
          has roots in a piece.
        </FeatureCard>
      </div>
    </div>
  );
}
