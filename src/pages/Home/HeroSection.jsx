import React from "react";

const HeroSection = () => {
  return (
    <section
  className="
    relative
    w-full
    min-h-[calc(100vh-64px)]
    md:h-[580px]
    overflow-hidden
  "
>
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="Saku AppPromo Showreel.mp4" type="video/mp4" />
      </video>

      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#2F7AA8]/55" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 px-6 md:px-10 lg:px-16">
        <div className="flex h-full items-end pb-10 md:pb-12">
          <div className="max-w-[280px] md:max-w-[420px]">
            
            {/* TITLE */}
            <h1
              className="
                font-bold
                leading-none
                text-[48px]
                sm:text-[56px]
                lg:text-[64px]
              "
              style={{
                textShadow: "0 3px 12px rgba(0,0,0,.25)",
              }}
            >
              <span className="text-[#5D9DF6]">Saku</span>{" "}
              <span className="text-white">App</span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                text-white
                font-medium
                leading-[1.25]
                text-[16px]
                sm:text-[18px]
                lg:text-[22px]
              "
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,.2)",
              }}
            >
              Saku bantu kamu tau kemana duit pergi
              sebelum duitnya kabur duluan. Catat,
              pantau, tenang.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-6
                flex
                items-center
                gap-2
                bg-[#5D9DF6]
                text-white
                px-4
                py-2
                md:px-6
                md:py-3
                rounded-xl
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
                text-sm
                md:text-base
              "
            >
              <img
                src="/images/img_icons.svg"
                alt="download"
                className="w-4 h-4 md:w-5 md:h-5"
              />

              Download Saku
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;