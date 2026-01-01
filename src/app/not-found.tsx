import SVG from "react-inlinesvg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className=" my-37.5">
        <div className="mx-auto max-w-7xl">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
            <div className="w-1/2 text-center">
              <SVG src="/svg/404.svg" className="mx-auto" />
              <h1 className="mt-10 font-extrabold text-7xl text-gray-100">
                Page Not Found
              </h1>
              <p className="mt-5 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                congue pretium faucibus leo nisl nulla pharetra nullam.
              </p>
              <Link
                href="/"
                className="inline-block mt-8 px-14 py-6 bg-blue-500 rounded-[39px]"
              >
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
