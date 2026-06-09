import React from 'react';

const Footer = () => {
  const linkSections = {
    links: [
      { id: '564:6736', label: 'Kenapa Saku?', href: '#kenapa-saku' },
      { id: '564:6737', label: 'Fitur Unggulan', href: '#fitur-unggulan' },
      { id: '564:6738', label: 'Showreel', href: '#showreel' },
    ],
    socialMedia: [
      { id: '564:6739', label: 'Youtube', href: 'https://youtube.com' },
      { id: '564:6740', label: 'Instagram', href: 'https://instagram.com' },
      { id: '564:6741', label: 'Tiktok', href: 'https://tiktok.com' },
    ],
  };

  return (
    <footer 
      className="w-full bg-footer-background"
      role="contentinfo"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 w-full">
          {/* Left Column - Logo and Description */}
          <div className="flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-[58px] w-full lg:w-[48%]">
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 w-full">
              {/* Logo */}
              <div className="w-[130px] sm:w-[150px] lg:w-[162px]">
                <img 
                  src="/images/img_footer_logo.png" 
                  alt="Saku App Logo"
                  className="w-full h-auto"
                  width={162}
                  height={56}
                />
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-md font-normal leading-md text-text-primary text-left w-full">
                Aplikasi pencatatan keuangan yang dirancang buat anak muda Indonesia biar gampang, nggak males-malesan, dan nyatet duit jadi lebih fun & effortless
              </p>
            </div>

            {/* Copyright */}
            <p className="text-xs font-normal leading-xs text-text-muted text-left">
              © 2026 Saku App. All rights reserved.
            </p>
          </div>

          {/* Right Column - Links and Social Media */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16 w-full lg:w-[32%]">
            {/* Links Section */}
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-[22px] w-full sm:w-[48%]">
              <h3 className="text-lg sm:text-xl md:text-lg font-bold leading-2xl text-text-primary">
                Links
              </h3>
              <ul className="flex flex-col justify-start items-start gap-3 sm:gap-[18px]" role="list">
                {linkSections?.links?.map((link) => (
                  <li key={link?.id} role="listitem">
                    <a
                      href={link?.href}
                      className="text-base sm:text-base font-normal leading-base text-link-text hover:text-primary-DEFAULT transition-colors duration-200"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-[22px] w-full sm:w-[48%]">
              <h3 className="text-lg sm:text-xl md:text-lg font-bold leading-2xl text-text-primary">
                Social Media
              </h3>
              <ul className="flex flex-col justify-start items-start gap-3 sm:gap-[18px]" role="list">
                {linkSections?.socialMedia?.map((link) => (
                  <li key={link?.id} role="listitem">
                    <a
                      href={link?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-base font-normal leading-base text-link-text hover:text-primary-DEFAULT transition-colors duration-200"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;