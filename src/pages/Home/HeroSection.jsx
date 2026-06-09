import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full bg-primary-light overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_bgillustdesktophero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pt-4 sm:pt-6 md:pt-[18px]">
        <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-6 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[58%] mb-6 sm:mb-8 lg:mb-[18px]">
            <h1 className="text-[40px] sm:text-[52px] md:text-[65px] lg:text-3xl font-bold leading-[48px] sm:leading-[63px] md:leading-[79px] lg:leading-5xl text-left">
              <span className="text-primary-DEFAULT">Saku</span>
              <span className="text-text-primary"> App</span>
            </h1>

            <p className="text-base sm:text-lg md:text-md lg:text-lg font-normal leading-md sm:leading-xl md:leading-2xl lg:leading-2xl text-text-primary text-left w-full lg:w-1/2 mt-4 sm:mt-6 md:mt-[8px]">
              Broke is not the vibe. Saku bantu kamu tau kemana duit pergi sebelum duitnya kabur duluan. Catat, pantau, tenang.
            </p>

            <div className="mt-8 sm:mt-12 md:mt-14 lg:mt-14">
              <Button
                text="Download Saku"
                text_font_size="text-base"
                text_font_family="Inter"
                text_font_weight="font-semibold"
                text_line_height="leading-base"
                text_text_align="center"
                text_color="text-text-light"
                fill_background_color="bg-button-primary-bg"
                border_border_radius="rounded-lg"
                effect_box_shadow="shadow-[0px_4px_13px_#b8d8fd]"
                padding="t=12px,r=20px,b=12px,l=20px"
                leftImage={{
                  src: "/images/img_icons.svg",
                  width: 24,
                  height: 24
                }}
                rightImage={null}
                variant="primary"
                size="md"
                layout_gap="gap-2"
                layout_width="w-auto"
                position="relative"
                margin="m-0"
                onClick={() => {}}
                className="hover:scale-105 active:scale-95 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end items-start w-full lg:w-[42%]">
            <img
              src="/images/img_img_phone_desktoptablet_hero.png"
              alt="Saku App Interface Preview"
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[456px] h-auto"
              width={456}
              height={506}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;