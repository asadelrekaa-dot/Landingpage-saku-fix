import React from "react";
import Button from "../../components/ui/Button";

const FeaturesSection = () => {
  const features = [
    {
      id: "705:8919",
      number: "01",
      title: "Widget Cepat",
      description:
        "Catat langsung dari home screen, nggak perlu buka app dulu. Praktis banget!",
      image: "/images/img-widget-desktoptablet-fitur.png",
    },
    {
      id: "705:8927",
      number: "02",
      title: "AI Saku Insight",
      description:
        "Tanya keuanganmu ke AI dan langsung tau kebiasaan belanja kamu kemana aja.",
      image: "/images/img-AI-mobile-fitur.png",
    },
    {
      id: "705:8935",
      number: "03",
      title: "Budgeting",
      description:
        "Set budget tiap kategori biar nggak kebablasan. Keuangan aman, dompet nggak nangis di akhir bulan.",
      image: "/images/img_img_budget_desk.png",
    },
    {
      id: "705:8943",
      number: "04",
      title: "Notifikasi",
      description:
        "Sering lupa catat? Tenang, Saku bakal ingetin kamu biar kebiasaan finansialmu tetap on track!",
      image: "/images/img_img_notif_desktoptablet_fitur.png",
    },
  ];

  const renderCard = (feature) => (
    <div className="
  bg-[#F9F9F9]
  border
  border-[#A7A7A7]
  rounded-[24px]
  px-6
  pt-7
  pb-6
  flex
  items-center
  justify-between
  h-[220px]

  transition-all
  duration-300
  ease-out

  hover:scale-[1.05]
  hover:shadow-2xl
">
      <div className="flex-1">
        <div
          className={`w-[44px] h-[44px] rounded-full bg-[#5B9DFF] text-white flex items-center justify-center font-semibold text-[18px]
          ${
            feature.number === "03" || feature.number === "04"
              ? "mt-3"
              : ""
          }`}
        >
          {feature.number}
        </div>

        <h3 className="mt-4 text-[22px] font-semibold text-black leading-tight">
          {feature.title}
        </h3>

        <p className="mt-1 text-[16px] leading-7 text-gray-700">
          {feature.description}
        </p>
      </div>

      <img
        src={feature.image}
        alt={feature.title}
        className="w-[120px] ml-4 object-contain"
      />
    </div>
  );

  return (
    <section
      id="fitur-unggulan"
      className="w-full bg-[#EAF4FF] py-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-xl md:text-[48px] lg:text-[48px] font-bold mb-12 mt-0">
          <span className="text-black">Fitur Unggulan </span>
          <span className="text-[#5B9DFF]">Saku</span>
        </h2>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative h-[650px]">
          {/* Lingkaran */}
          <div
            className="
              pulse-circle
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[620px]
              h-[620px]
              rounded-full
              bg-[#CFE3FF]
            "
          />

          {/* HP Tengah + Maskot */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-30
            "
          >
            <img
              src="/images/img_img_phone_desktoptablet_hero.png"
              alt="Phone Center"
              className="w-[450px]"
            />
          </div>

          {/* Card 1 */}
          <div className="absolute top-[40px] left-[50px] w-[430px] z-40">
            {renderCard(features[0])}
          </div>

          {/* Card 2 */}
          <div className="absolute top-[40px] right-[50px] w-[430px] z-40">
            {renderCard(features[1])}
          </div>

          {/* Card 3 */}
          <div className="absolute bottom-[20px] left-[50px] w-[430px] z-40">
            {renderCard(features[2])}
          </div>

          {/* Card 4 */}
          <div className="absolute bottom-[20px] right-[50px] w-[430px] z-40">
            {renderCard(features[3])}
          </div>
        </div>

                {/* ================= MOBILE ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-300 rounded-2xl p-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#5B9DFF] text-white flex items-center justify-center font-semibold">
                {feature.number}
              </div>

              <h3 className="mt-3 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>

              <div className="w-full flex items-center justify-center mt-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
<div className="mt-16 lg:mt-20">
  <div
    className="
      relative
      w-full
      min-h-[220px]
      sm:min-h-[280px]
      lg:h-[330px]
      rounded-[24px]
      lg:rounded-[32px]
      overflow-hidden
    "
    style={{
      background:
        "linear-gradient(90deg, #8EC1FF 0%, #4E9CFF 45%, #005EDB 100%)",
    }}
  >
    {/* Pattern */}
    <img
      src="/images/img_bgillust_1.png"
      alt=""
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        opacity-30
        z-0
      "
    />

    {/* Content */}
    <div
      className="
        relative
        z-20
        h-full
        px-8
        py-10

        sm:px-10

        lg:px-14
        lg:py-8
      "
    >
      <div className="max-w-full lg:max-w-[420px]">
        <h2
          className="
            text-white
            font-bold
            text-[32px]
            sm:text-[40px]

            lg:text-[40px]
            leading-tight
          "
        >
          Download Saku Sekarang!
        </h2>

        <p
          className="
            mt-3
            text-white
            text-[15px]
            sm:text-[16px]

            lg:text-[16px]
            leading-relaxed
          "
        >
          Dulu nyatet keuangan tuh ribet. Sekarang? Cukup buka
          Saku, catat dalam 10 detik, dan kamu langsung tau uang
          kamu kemana. Gratis, gak ada alasan buat nunda.
        </p>

        <div className="mt-6">
          <button
            onClick={() => {
              console.log("Download clicked");
            }}
            className="
                mt-6
                flex
                items-center
                gap-2
                bg-[#FF962D]
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
              className="w-4 h-4"
            />
            Download Saku
          </button>
        </div>
      </div>
    </div>

    {/* HP - DESKTOP ONLY */}
    <img
      src="/images/Img-banner-mobile.png"
      alt="Phone"
      className="
        hidden lg:block
        absolute
        right-[60px]
        bottom-4
        w-[300px]
        z-20
        drop-shadow-2xl
      "
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default FeaturesSection;