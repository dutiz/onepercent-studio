import SVG from "react-inlinesvg";

export default function ContactHeaderSection() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-12 ">
      <div className="w-7/12">
        <h1 className="font-extrabold text-center text-7xl text-gray-100">
          Get in touch today!
        </h1>
        <div className="mt-11 mx-14 p-8 bg-gray-50 rounded-[40px]">
          <div className="flex lg:flex-row flex-col justifty-center items-center gap-8 mt-12">
            <div className="w-1/2">
              <div className="inline-flex items-center">
                <SVG src="/svg/contact-mail-svg.svg" className="w-20 h-20" />
                <p className="ml-4 text-gray-900 text-2xl font-bold">Mail Us</p>
              </div>
            </div>
            <div className="w-1/2 text-end">
              <a
                href="mailto: uphigh@gmail.com"
                className="inline-block py-5 text-gray-900 text-2xl font-bold"
              >
                uphigh@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
