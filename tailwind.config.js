module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Global Colors
        primary: {
          DEFAULT: "var(--global-bg-primary)",
          light: "var(--global-bg-light)",
          foreground: "var(--global-text-white)"
        },
        secondary: {
          DEFAULT: "var(--global-bg-secondary)",
          foreground: "var(--global-text-primary)"
        },
        background: {
          main: "var(--global-bg-white)",
          light: "var(--global-bg-light)",
          tertiary: "var(--global-bg-tertiary)"
        },
        text: {
          primary: "var(--global-text-primary)",
          accent: "var(--global-text-accent)",
          muted: "var(--global-text-muted)",
          light: "var(--global-text-light)",
          white: "var(--global-text-white)"
        },
        border: {
          muted: "var(--global-border-muted)"
        },
        // Component-Specific Colors
        header: {
          background: "var(--header-bg)"
        },
        menu: {
          text: "var(--header-menu-text)"
        },
        button: {
          primary: {
            bg: "var(--button-primary-bg)",
            text: "var(--button-primary-text)"
          },
          secondary: {
            bg: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)"
          },
          accent: "var(--button-accent-text)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        link: {
          text: "var(--link-text)"
        }
      },
      // Typography Extensions
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)'
      },
      // Spacing Extensions
      spacing: {
        'xs': 'var(--margin-xs)',
        'sm': 'var(--margin-sm)',
        'md': 'var(--margin-md)',
        'base': 'var(--margin-base)',
        'lg': 'var(--margin-lg)',
        'xl': 'var(--margin-xl)',
        '2xl': 'var(--margin-2xl)',
        '3xl': 'var(--margin-3xl)',
        '4xl': 'var(--margin-4xl)',
        '5xl': 'var(--margin-5xl)',
        '6xl': 'var(--margin-6xl)',
        '7xl': 'var(--margin-7xl)',
        '8xl': 'var(--margin-8xl)',
        '9xl': 'var(--margin-9xl)',
        '10xl': 'var(--margin-10xl)',
        '11xl': 'var(--margin-11xl)',
        '12xl': 'var(--margin-12xl)',
        '13xl': 'var(--margin-13xl)',
        '14xl': 'var(--margin-14xl)'
      },
      padding: {
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'base': 'var(--padding-base)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
        '3xl': 'var(--padding-3xl)',
        '4xl': 'var(--padding-4xl)',
        '5xl': 'var(--padding-5xl)',
        '6xl': 'var(--padding-6xl)',
        '7xl': 'var(--padding-7xl)',
        '8xl': 'var(--padding-8xl)',
        '9xl': 'var(--padding-9xl)',
        '10xl': 'var(--padding-10xl)',
        '11xl': 'var(--padding-11xl)'
      },
      gap: {
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'base': 'var(--gap-base)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
        '6xl': 'var(--gap-6xl)',
        '7xl': 'var(--gap-7xl)',
        '8xl': 'var(--gap-8xl)',
        '9xl': 'var(--gap-9xl)',
        '10xl': 'var(--gap-10xl)',
        '11xl': 'var(--gap-11xl)',
        '12xl': 'var(--gap-12xl)',
        '13xl': 'var(--gap-13xl)',
        '14xl': 'var(--gap-14xl)',
        '15xl': 'var(--gap-15xl)'
      },
      // Border Extensions
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)'
      },
      borderWidth: {
        'sm': 'var(--border-width-sm)',
        'md': 'var(--border-width-md)'
      },
      // Layout Extensions
      maxWidth: {
        'container': 'var(--width-container)'
      }
    }
  },
  plugins: []
};