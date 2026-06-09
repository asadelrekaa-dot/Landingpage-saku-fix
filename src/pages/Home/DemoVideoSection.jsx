import React from 'react';

const DemoVideoSection = () => {
  return (
    <section 
      id="showreel"
      className="w-full bg-background-main py-10 sm:py-12 md:py-16 lg:py-[72px]"
    >
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-[102px]">
        <div className="flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[78px] w-full">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-2xl font-bold leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-4xl text-text-primary text-center">
            Demo Video
          </h2>

          {/* Video Placeholder */}
          <div className="w-full bg-background-tertiary rounded-lg sm:rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-6">
                <svg 
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 text-gray-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <p className="text-base sm:text-lg text-gray-500">Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;