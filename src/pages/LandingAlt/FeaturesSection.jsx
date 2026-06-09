import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: '706:8985',
      number: '01',
      title: 'Widget Cepat',
      description: 'Catat langsung dari home screen, nggak perlu buka app dulu. Praktis banget!',
      image: '/images/img_img_budget_desk.png'
    },
    {
      id: '706:8978',
      number: '02',
      title: 'AI Saku Insight',
      description: 'Tanya keuanganmu ke AI dan langsung tau kebiasaan belanja kamu kemana aja.',
      image: '/images/img_img_budget_desk.png'
    },
    {
      id: '706:8994',
      number: '03',
      title: 'Budgeting',
      description: 'Set budget tiap kategori biar nggak kebablasan. Keuangan aman, dompet nggak nangis di akhir bulan.',
      image: '/images/img_img_budget_desk.png'
    },
    {
      id: '706:9001',
      number: '04',
      title: 'Notifikasi',
      description: 'Sering lupa catat? Tenang, Saku bakal ingetin kamu biar kebiasaan finansialmu tetap on track!',
      image: '/images/img_img_notif_desktoptablet_fitur.png'
    }
  ];

  return (
    <section className="w-full bg-background-main py-12 sm:py-16 md:py-16 lg:py-[52px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[52px]">
        <div className="flex flex-col justify-start items-center gap-10 sm:gap-14 md:gap-16 lg:gap-[72px] w-full">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold leading-3xl sm:leading-4xl lg:leading-4xl text-center">
            <span className="text-text-primary">Fitur Unggulan </span>
            <span className="text-text-accent">Saku</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[30px] w-full">
            {features?.map((feature, index) => (
              <div
                key={feature?.id}
                className="flex flex-row justify-start items-start bg-background-main border-md border-border-muted rounded-lg lg:rounded-lg p-4 sm:p-6 gap-4 sm:gap-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Left Content */}
                <div className="flex flex-col justify-start items-start gap-2 sm:gap-[10px] w-full">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center bg-button-primary-bg text-button-primary-text text-md sm:text-md font-semibold leading-lg rounded-sm sm:rounded-md px-2 py-2">
                    {feature?.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-xl font-semibold leading-3xl text-text-primary text-left">
                    {feature?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg lg:text-md font-normal leading-md text-text-primary text-left w-full lg:w-[92%]">
                    {feature?.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0 self-end">
                  <img
                    src={feature?.image}
                    alt={feature?.title}
                    className={`${index === 3 ? 'w-[120px] sm:w-[150px] lg:w-[202px]' : 'w-[100px] sm:w-[130px] lg:w-[174px]'} h-auto`}
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