import React from "react";
import SVG from "react-inlinesvg";

interface ContactNumberCardProps {
  className: string;
  svg: string;
  city: string;
  children: string;
  number: string;
}
export default function ContactNumberCard({
  className,
  svg,
  city,
  children,
  number,
}: ContactNumberCardProps) {
  return (
    <div className="w-1/3 text-center">
      <div className="bg-white rounded-[30px] p-16">
        <SVG src={`/svg/${svg}.svg`} className="mx-auto w-21 h-21 " />
        <h3 className="mt-4 text-black font-extrabold text-3xl">{city}</h3>
        <p className="mt-2 text-extrabold text-gray-500">{children}</p>
        <a
          className={`inline-block mt-3 px-12 py-5 rounded-[40px] ${className} text-xl font-bold`}
        >
          {number}
        </a>
      </div>
    </div>
  );
}
