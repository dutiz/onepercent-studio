interface SectionHeaderElementProps {
  colstyle: string;
  title: string;
  children: string;
}

export default function SectionHeaderElement({
  colstyle,
  title,
  children,
}: SectionHeaderElementProps) {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
      <div className={`${colstyle} text-center font-bold`}>
        <h3 className="inline-block px-9 py-6 text-lg bg-gray-200 rounded-[34px] text-blue-500">
          {title}
        </h3>
        <h1 className="my-8 dark:text-white font-bold text-5xl ">{children}</h1>
      </div>
    </div>
  );
}
