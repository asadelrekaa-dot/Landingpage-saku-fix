import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      id: "705:8891",
      title: "Simpel Abis",
      description: "Nyatet ga perlu lama, 10 detik udah kelar.",
      image: "/images/img_img_fun_desktoptablet_knp.png"
    },
    {
      id: "705:8906",
      title: "Data Aman",
      description: "Catatan kamu tersimpan rapi di cloud. Ganti HP pun, data kamu gak kemana-mana.",
      image: "/images/img_img_aman_desktoptablet_knp.png"
    },
    {
      id: "705:8896",
      title: "All-in-one app",
      description: "Semua fitur keuangan kamu, di satu app. Gak perlu pindah-pindah lagi.",
      image: "/images/img_img_allinone_de.png"
    },
    {
      id: "705:8901",
      title: "Gratis 100%",
      description: "Download, pakai, nikmatin. tanpa keluar sepeser rupiah.",
      image: "/images/img_img_gratis_desktoptablet_knp.png"
    }
  ];

  return (
    <section 
      id="kenapa-saku"
      className="w-full bg-background-main py-12 sm:py-16 md:py-20 lg:py-[108px]"
    >
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-[102px]">
        <div className="flex flex-col justify-start items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[74px] w-full">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-2xl font-bold leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-4xl text-center">
            <span className="text-text-primary">Kenapa Pakai </span>
            <span className="text-primary-DEFAULT">Saku</span>
            <span className="text-primary-DEFAULT">?</span>
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[28px] w-full">
            {benefits?.map((benefit) => (
              <div
                key={benefit?.id}
                className="flex flex-col justify-start items-center gap-3 sm:gap-4 lg:gap-[18px] bg-background-main border border-border-muted rounded-xl sm:rounded-2xl lg:rounded-xl p-5 sm:p-6 lg:p-lg shadow-[0px_4px_4px_#0000003f] hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-[120px] sm:w-[140px] lg:w-[168px]">
                  <img
                    src={benefit?.image}
                    alt={benefit?.title}
                    className="w-full h-auto"
                    width={168}
                    height={168}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-start items-center gap-2 lg:gap-[8px] w-full">
                  <h3 className="text-lg sm:text-lg md:text-md lg:text-md font-semibold leading-lg text-text-primary text-center">
                    {benefit?.title}
                  </h3>
                  <p className="text-base sm:text-base md:text-base lg:text-base font-normal leading-xl text-text-primary text-center w-full">
                    {benefit?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;