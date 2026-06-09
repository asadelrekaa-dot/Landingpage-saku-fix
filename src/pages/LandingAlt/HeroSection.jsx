import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="w-full bg-primary-light relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_bgillust_1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pt-3 sm:pt-4 pb-24 sm:pb-28 md:pb-32 lg:pb-[94px]">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0 w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-14 w-full lg:w-[58%]">
            {/* Heading */}
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-3xl font-bold leading-[48px] sm:leading-[60px] md:leading-[72px] lg:leading-5xl text-left">
              <span className="text-text-accent">Saku</span>
              <span className="text-text-primary"> App</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-md lg:text-lg font-normal leading-md sm:leading-xl lg:leading-2xl text-text-primary text-left w-full lg:w-[56%]">
              Broke is not the vibe. Saku bantu kamu tau kemana duit pergi sebelum duitnya kabur duluan. Catat, pantau, tenang.
            </p>

            {/* CTA Button */}
            <Button
              text="Download Saku"
              text_font_size="text-base sm:text-base"
              text_font_weight="font-semibold"
              text_line_height="leading-base"
              text_color="text-text-light"
              fill_background_color="bg-button-primary-bg"
              border_border_radius="rounded-lg"
              effect_box_shadow="shadow-[0px_4px_13px_#b8d8fd]"
              padding="t=12px,r=20px,b=12px,l=46px"
              leftImage={{
                src: "/images/img_icons.svg",
                width: 24,
                height: 24
              }}
              rightImage={null}
              layout_gap="gap-2"
              layout_width="w-auto"
              position="relative"
              margin="m-0"
              variant="primary"
              size="md"
              onClick={() => {}}
              className="w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform duration-200"
            />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[42%] flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src="/images/img_img_phone_desktoptablet_hero.png"
              alt="Saku App Phone Mockup"
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