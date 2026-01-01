import Image from "next/image";

export default function AboutHeaderSection() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-29.25">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
          <div className="w-1/2text-center">
            <h1 className="font-extrabold text-6xl text-gray-100">
              About our company
            </h1>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-10">
          <div className="w-7/12">
            <Image
              src="/img/aboutheader-1.png"
              width={884}
              height={583}
              alt="aboutheader-1"
              className="w-full h-auto "
              priority
            />
          </div>
          <div className="w-1/3">
            <Image
              src="/img/aboutheader-2.png"
              width={476}
              height={580}
              alt="aboutheader-2"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-20 mb-32">
        <div className="flex lg:flex-row flex-col justifty-between items-center gap-8">
          <div className="w-1/3">
            <h1 className="text-gray-900 dark:text-gray-100 font-extrabold text-5xl">
              What we do
            </h1>
          </div>
          <div className="w-4/6">
            <p className="text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
              <br />
              <br /> Content here{"'"}, making it look like readable English.
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for {"'"}
              lorem ipsum{"'"} will uncover many web sites still in their
              infancy.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
