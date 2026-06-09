import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: "705:8919",
      number: "01",
      title: "Widget Cepat",
      description: "Catat langsung dari home screen, nggak perlu buka app dulu. Praktis banget!",
      image: "/images/img_img_budget_desk.png"
    },
    {
      id: "705:8927",
      number: "02",
      title: "AI Saku Insight",
      description: "Tanya keuanganmu ke AI dan langsung tau kebiasaan belanja kamu kemana aja.",
      image: "/images/img_img_budget_desk.png"
    },
    {
      id: "705:8935",
      number: "03",
      title: "Budgeting",
      description: "Set budget tiap kategori biar nggak kebablasan. Keuangan aman, dompet nggak nangis di akhir bulan.",
      image: "/images/img_img_budget_desk.png"
    },
    {
      id: "705:8943",
      number: "04",
      title: "Notifikasi",
      description: "Sering lupa catat? Tenang, Saku bakal ingetin kamu biar kebiasaan finansialmu tetap on track!",
      image: "/images/img_img_notif_desktoptablet_fitur.png"
    }
  ];

  return (
    <section 
      id="fitur-unggulan"
      className="w-full bg-background-main py-8 sm:py-10 md:py-12 lg:py-[52px]"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[72px] w-full">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-2xl font-bold leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-4xl text-center">
            <span className="text-text-primary">Fitur Unggulan </span>
            <span className="text-primary-DEFAULT">Saku</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[28px] w-full max-w-container mx-auto px-4 sm:px-6 lg:px-[102px]">
            {features?.map((feature, index) => (
              <div
                key={feature?.id}
                className="flex flex-col sm:flex-row justify-start items-start bg-background-main border-md border-border-muted rounded-lg sm:rounded-xl lg:rounded-lg p-4 sm:p-5 lg:p-2xl hover:shadow-lg transition-shadow duration-300"
              >
                {/* Content */}
                <div className="flex flex-col justify-start items-start gap-2 sm:gap-3 lg:gap-sm w-full sm:w-[66%] mt-4 sm:mt-5 lg:mt-5">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center bg-button-primary-bg text-button-accent text-md sm:text-md font-semibold leading-lg rounded-sm sm:rounded-md px-2 py-2">
                    {feature?.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-xl font-semibold leading-[30px] sm:leading-[36px] md:leading-3xl lg:leading-3xl text-text-primary text-left mt-2 sm:mt-2 lg:mt-[10px]">
                    {feature?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-md lg:text-md font-normal leading-md text-text-primary text-left w-full sm:w-[94%]">
                    {feature?.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center sm:justify-end items-end w-full sm:w-[34%] mt-4 sm:mt-5 lg:mt-5">
                  <img
                    src={feature?.image}
                    alt={feature?.title}
                    className={`w-full max-w-[130px] sm:max-w-[145px] ${index === 3 ? 'lg:max-w-[202px]' : 'lg:max-w-[174px]'} h-auto`}
                    width={index === 3 ? 202 : 174}
                    height={244}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;