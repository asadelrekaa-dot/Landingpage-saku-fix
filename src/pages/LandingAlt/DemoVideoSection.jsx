import React from 'react';

const DemoVideoSection = () => {
  return (
    <section className="w-full bg-background-main py-12 sm:py-16 md:py-16 lg:py-[72px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col justify-start items-center gap-10 sm:gap-14 md:gap-16 lg:gap-[78px] w-full">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold leading-3xl sm:leading-4xl lg:leading-4xl text-text-primary text-center">
            Demo Video
          </h2>

          {/* Video Placeholder */}
          <div className="w-full bg-background-tertiary rounded-lg sm:rounded-xl aspect-video max-w-full">
            {/* Placeholder for video - can be replaced with actual video embed */}
            <div className="w-full h-full flex items-center justify-center">
              <svg 
                className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;