import Image from "next/image";

export default function MissionSection() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl pt-28">
        <div className="flex lg:flex-row flex-col justifty-between items-center gap-8">
          <div className="w-1/2">
            <h1 className="font-extrabold text-gray-900 dark:text-gray-100 text-5xl">
              Our Mission
            </h1>
            <p className="mt-7 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu
              aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida
              in pharetra egestas. Ac id sagittis at morbi interdum nibh diam
              sagittis et. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu
              aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in
              pharetra egestas.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/img/mission-bg.png"
              width={760}
              height={378}
              alt="mission-bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}