import SVG from "react-inlinesvg";

export default function ProjectMindSection() {
  return (
    <div className="mx-auto max-w-7xl my-50">
      <div
        style={{
          background: `url('/img/trial-bg.png') no-repeat center center / cover`,
        }}
      >
        <div className="rounded-[50px]">
          <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 px-16 py-12">
            <div className="w-1/2">
              <h1 className="text-gray-100 font-extrabold text-5xl">
                Have a project on your mind?
              </h1>
              <p className="mt-6 text-gray-100 text-2xl">
                It is a long established fact that a reader will be by the
                readable when looking at it layout.{" "}
              </p>
              <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 mt-7">
                <div className="w-8/12">
                  <input
                    type="text"
                    className="w-full px-9 py-6 bg-white bg-opacity-20 rounded-[39px] text-gray-100 placeholder-gray-100"
                    name="email"
                    placeholder="mail@domain.com"
                  />
                </div>
                <div className="w-1/3">
                  <button
                    type="submit"
                    className="px-8 py-6 bg-gray-100 text-blue-500 rounded-[39px]"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <SVG src="/svg/trial-svg.svg" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
