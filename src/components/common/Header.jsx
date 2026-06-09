import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: '327:5517', label: 'Kenapa Saku?', href: '#kenapa-saku' },
    { id: '327:5518', label: 'Fitur Unggulan', href: '#fitur-unggulan' },
    { id: '327:5519', label: 'Showreel', href: '#showreel' },
    { id: '327:5520', label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className="sticky top-0 left-0 z-[999] w-full bg-header-background shadow-[0_6px_14px_rgba(0,0,0,0.22)]"
      role="banner"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative flex flex-row justify-between items-center w-full">
          {/* Logo */}
          <a href="/" className="block w-[100px] sm:w-[130px] lg:w-[162px]">
            <img
              src="/images/img_header_logo.png"
              alt="Saku App Logo"
              className="w-full h-auto"
              width={162}
              height={56}
            />
          </a>

          {/* Hamburger Menu Icon - Mobile only */}
          <button
            type="button"
            className="block lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT rounded-md"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-menu-text"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 mt-4 lg:mt-0 w-full lg:w-auto bg-header-background lg:bg-transparent shadow-lg lg:shadow-none z-[998] justify-between items-start lg:items-center gap-4 lg:gap-8 p-6 lg:p-0 rounded-b-2xl lg:rounded-none`}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Menu Items */}
            <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-auto">
              {menuItems.map((item) => (
                <li key={item.id} role="none">
                  <a
                    href={item.href}
                    role="menuitem"
                    className="text-sm sm:text-base font-medium leading-sm text-menu-text text-left lg:text-center hover:text-primary-DEFAULT transition-colors duration-200 block py-2 lg:py-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Download Button */}
            <div className="w-full lg:w-auto mt-4 lg:mt-0">
              <Button
                text="Download Saku"
                text_font_size="text-base"
                text_font_family="Inter"
                text_font_weight="font-semibold"
                text_line_height="leading-base"
                text_text_align="center"
                text_color="text-text-light"
                fill_background_color="bg-button-primary-bg"
                border_border_radius="rounded-lg"
                effect_box_shadow="shadow-[0px_4px_13px_#b8d8fd]"
                padding="t=12px,r=20px,b=12px,l=20px"
                leftImage={{
                  src: '/images/img_icons.svg',
                  width: 24,
                  height: 24,
                }}
                rightImage={null}
                variant="primary"
                size="md"
                layout_gap="gap-2"
                layout_width="w-auto"
                position="relative"
                margin="m-0"
                className="w-full lg:w-auto hover:scale-105 active:scale-95 transition-transform duration-200"
                onClick={() => console.log('Download clicked')}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;