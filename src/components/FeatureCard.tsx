import SVG from "react-inlinesvg";

interface FeatureCardProps {
  isColored?: boolean;
  svg: string;
  title: string;
  children: string;
  link?: string;
}
export default function FeatureCard({
  isColored,
  svg,
  title,
  children,
  link,
}: FeatureCardProps) {
  return isColored ? (
    <div className="w-1/3 text-center">
      <div className="bg-gray-50 px-8 py-12 rounded-[40px]">
        <SVG src={`/svg/${svg}.svg`} className="w-full h-auto" />
        <h2 className="mt-12 text-3xl font-bold text-gray-800">{title}</h2>
        <p className="mt-6 text-xl text-gray-500">{children}</p>
        <a
          className="inline-block mt-11 font-bold text-blue-500 underline"
          href={link}
        >
          Learn More
        </a>
      </div>
    </div>
  ) : (
    <div className="w-1/3 text-center">
      <SVG src={`/svg/${svg}.svg`} className="w-full h-auto" />
      <h2 className="mt-12 text-3xl font-bold text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="mt-6 text-xl text-gray-500">{children}</p>
      <a
        className="inline-block mt-11 font-bold text-gray-800 dark:text-gray-100 underline"
        href={link}
      >
        Learn More
      </a>
    </div>
  );
}
