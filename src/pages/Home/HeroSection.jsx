import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#EAF3FC]"
      style={{
        backgroundImage: "url('/images/img_bgillustdesktophero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-[#5D9DF6]">Saku</span>
              <span className="text-black"> App</span>
            </h1>

            <p className="mt-4 max-w-md text-gray-700 text-lg leading-relaxed">
              Broke is not the vibe. Saku bantu kamu tau kemana duit
              pergi sebelum duitnya kabur duluan. Catat, pantau, tenang.
            </p>

            <button
              className="
                mt-8
                flex
                items-center
                gap-2
                bg-[#5D9DF6]
                text-white
                px-6
                py-3
                rounded-xl
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <img
                src="/images/img_icons.svg"
                alt="download"
                className="w-5 h-5"
              />
              Download Saku
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src="/images/img_img_phone_desktoptablet_hero.png"
              alt="Saku App"
              className="max-w-[520px] w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;