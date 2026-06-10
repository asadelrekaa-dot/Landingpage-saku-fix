import React from 'react';
import Button from '../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="w-full bg-background-main py-4 sm:py-12 md:py-16 lg:py-[106px]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-14">
        <div
          className="
            w-full
            rounded-xl sm:rounded-2xl
            overflow-hidden
            px-4 py-5
            sm:p-8
            lg:p-[46px]
          "
          style={{
            background:
              'linear-gradient(319deg, #54a4ff 0%, #6bacf7 50%, #0366d6 100%)',
          }}
        >
          <div className="flex flex-row lg:flex-row justify-between items-center gap-3 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col justify-start items-start w-[68%] sm:w-[60%] lg:w-[60%]">
              {/* Text Content */}
              <div className="flex flex-col justify-start items-start w-full">
                <h2 className="text-[13px] leading-[16px] sm:text-2xl md:text-4xl lg:text-2xl font-bold sm:leading-[50px] lg:leading-8 text-white text-left">
                  Download Saku Sekarang!
                </h2>

                <p className="mt-1.5 sm:mt-4 lg:mt-6 text-[8px] leading-[10px] sm:text-base md:text-lg lg:text-lg sm:leading-6 lg:leading-7 font-normal text-white text-left max-w-[180px] sm:max-w-none">
                  Catat keuangan? 10 detik doang. Buka Saku, langsung kelihatan
                  uang kamu kemana. Gratis. No excuses.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-4 sm:mt-8 lg:mt-[72px]">
                <Button
                  text="Download Saku"
                  text_font_size="text-[10px] sm:text-base"
                  text_font_weight="font-semibold"
                  text_line_height="leading-none sm:leading-base"
                  text_color="text-button-secondary-text"
                  fill_background_color="bg-button-secondary-bg"
                  border_border_radius="rounded-lg"
                  effect_box_shadow="shadow-[0px_4px_13px_#b8d8fd]"
                  padding="t=8px,r=14px,b=8px,l=14px"
                  leftImage={{
                    src: '/images/img_icons_blue_400.svg',
                    width: 16,
                    height: 16,
                  }}
                  rightImage={null}
                  layout_gap="gap-1.5 sm:gap-2"
                  layout_width="w-auto"
                  position="relative"
                  margin="m-0"
                  variant="primary"
                  size="sm"
                  onClick={() => {}}
                  className="w-auto min-w-[126px] sm:min-w-0 hover:scale-105 active:scale-95 transition-transform duration-200"
                />
              </div>
            </div>

            {/* Right Logo Image */}
            <div className="w-[45%] sm:w-[40%] lg:w-[34%] flex justify-end items-center">
            <img
              src="/images/img_logo_1_desktop_cta.png"
              alt="Saku Logo"
              className="w-[100px] sm:w-[220px] md:w-[280px] lg:w-full lg:max-w-[368px] h-auto drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)] object-contain"
              width={368}
              height={258}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;