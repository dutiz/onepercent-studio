import SectionHeaderElement from "../SectionHeaderElement";
import ValueCard from "../ValueCard";

export default function ValueSection() {
  return (
    <div className="dark:bg-black py-28.75">
      <div className="mx-auto max-w-7xl my-28">
        <SectionHeaderElement colstyle="w-7/12" title="Our Values">
          The story and values behind our company
        </SectionHeaderElement>
        <div className="flex lg:flex-row flex-col justifty-center items-center gap-8">
          <ValueCard svg="innovation" title="Innovation">
            Long established fact that a readeed to will be distracted by the
            readable content of a page when looking at its layout
          </ValueCard>
          <ValueCard svg="team" title="Team work">
            Long established fact that a readeed to will be distracted by the
            readable content of a page when looking at its layout
          </ValueCard>
        </div>
        <div className="flex lg:flex-row flex-col justifty-center items-center gap-8">
          <ValueCard svg="excellence" title="Excellence">
            Long established fact that a readeed to will be distracted by the
            readable content of a page when looking at its layout
          </ValueCard>
          <ValueCard svg="responsibility" title="Responsibility">
            Long established fact that a readeed to will be distracted by the
            readable content of a page when looking at its layout
          </ValueCard>
        </div>
      </div>
      <hr />
    </div>
  );
}
