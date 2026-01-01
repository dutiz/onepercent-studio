import SVG from "react-inlinesvg";

interface ValueCardProps {
  svg: string;
  title: string;
  children: string;
}

export default function ValueCard({ svg, title, children }: ValueCardProps) {
  return (
    <div className="w-1/2 mt-8">
      <div className="bg-gray-100 rounded-[29px] px-6 py-10">
        <div className="flex lg:flex-row flex-col justifty-center items-center gap-8">
          <div className="w-1/3">
            <SVG src={`/svg/${svg}.svg`} className="mx-auto" />
          </div>
          <div className="w-4/6">
            <h2 className="font-bold text-3xl text-gray-900">{title}</h2>
            <p className="mt-3 text-gray-500">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
