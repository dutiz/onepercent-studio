import Image from "next/image";

export default function HeaderSection() {
  return (
    <div
      style={{
        background: `url('./img/homeheader-bg.png') no-repeat center center / cover`,
        height: "1000px",
        zIndex: "-1",
      }}
      className="flex relative -mt-32 top-0 items-center"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
          <div className="w-1/2">
            <h1 className="font-extrabold text-7xl dark:text-gray-100">
              Build your audience and grow your brand
            </h1>
            <p className="mt-4 text-2xl dark:text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
            <button className="mt-12 px-12 py-6 text-white bg-blue-500 rounded-[40px]">
              Get Started
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src="/img/homeheader-img.png"
              width={770}
              height={584}
              alt="header-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
