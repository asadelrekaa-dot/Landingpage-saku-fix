import React from 'react';

const DemoVideoSection = () => {
  return (
    <section
      id="showreel"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-transparent"
    >
      {/* Container utama diperlebar secara maksimal */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:gap-16">

          {/* Judul Teks Diperbesar */}
          <h2 className="text-4xl sm:text-5xl font-black text-center text-[#171717] tracking-tight">
            See How It <span className="text-[#54a4ff]">Works</span>
          </h2>

          {/* Pembungkus Video Diperbesar Maksimal ke 1200px */}
          <div className="w-full max-w-[1200px] bg-white/80 border border-slate-200/60 rounded-[32px] p-4 sm:p-6 shadow-[0_30px_70px_rgba(23,23,23,0.08)] backdrop-blur-md transform hover:scale-[1.01] transition-transform duration-300">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900" style={{ aspectRatio: '16/9' }}>
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
                preload="metadata"
                poster="/images/video-thumbnail.png"
              >
                <source
                  src="/Saku AppPromo Showreel.mp4"
                  type="video/mp4"
                />
                Browser Anda tidak mendukung video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;