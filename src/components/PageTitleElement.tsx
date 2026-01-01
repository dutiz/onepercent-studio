interface PageTitleElementProps {
  title: string;
  children: string;
}

export default function PageTitleElement({
  title,
  children,
}: PageTitleElementProps) {
  return (
    <div className="mx-auto max-w-7xl pt-29.25">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
        <div className="w-1/2 text-center">
          <h1 className="font-extrabold text-6xl text-gray-100">{title}</h1>
          <p className="mt-4 text-gray-500">{children}</p>
        </div>
      </div>
    </div>
  );
}
