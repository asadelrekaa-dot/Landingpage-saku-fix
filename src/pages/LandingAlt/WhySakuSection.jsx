import React from 'react';

const WhySakuSection = () => {
  const benefits = [
    {
      id: '567:9341',
      image: '/images/img_img_fun_desktoptablet_knp.png',
      title: 'Simpel Abis',
      description: 'Nyatet ga perlu lama, 10 detik udah kelar.'
    },
    {
      id: '567:9342',
      image: '/images/img_img_aman_desktoptablet_knp.png',
      title: 'Data Aman',
      description: 'Catatan kamu tersimpan rapi di cloud. Ganti HP pun, data lo gak kemana-mana.'
    },
    {
      id: '567:9343',
      image: '/images/img_img_allinone_de.png',
      title: 'All-in-one app',
      description: 'Semua fitur keuangan kamu, di satu app. Gak perlu pindah-pindah lagi.'
    },
    {
      id: '567:9344',
      image: '/images/img_img_gratis_desktoptablet_knp.png',
      title: 'Gratis 100%',
      description: 'Download, pakai, nikmatin. tanpa keluar sepeser rupiah.'
    }
  ];

  return (
    <section className="w-full bg-background-main py-12 sm:py-16 md:py-20 lg:py-[108px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col justify-start items-center gap-10 sm:gap-14 md:gap-16 lg:gap-[74px] w-full">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold leading-3xl sm:leading-4xl lg:leading-4xl text-center">
            <span className="text-text-primary">Kenapa Pakai </span>
            <span className="text-text-accent">Saku</span>
            <span className="text-text-accent">?</span>
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-[30px] w-full">
            {benefits?.map((benefit) => (
              <div
                key={benefit?.id}
                className="flex flex-col justify-start items-center gap-4 lg:gap-[18px] bg-background-main border border-border-muted rounded-xl lg:rounded-xl p-4 shadow-[0px_4px_4px_#0000003f] hover:shadow-lg transition-shadow duration-300"
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
                <div className="flex flex-col justify-start items-center gap-2 w-full">
                  <h3 className="text-lg sm:text-md lg:text-md font-semibold leading-lg text-text-primary text-center">
                    {benefit?.title}
                  </h3>
                  <p className="text-base sm:text-base lg:text-base font-normal leading-xl text-text-primary text-center">
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

export default WhySakuSection;