/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './node_modules/@onrewind/ui/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.tsx',
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  presets: [require('@onrewind/ui/lib/origins.preset')],
  theme: {
    fontFamily: {
      title: ['graphik-regular', ...defaultTheme.fontFamily.sans],
      body: ['graphik-regular', ...defaultTheme.fontFamily.sans],
      sans: ['graphik-bold', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#f16305',
        secondary: 'var(--secondary)',
        background: '#FEFEFE',
        form: '#696969',
        facebook: '#1B74E4',
        error: '#ef4444',
      },
      width: {
        'min-1080': 'min(100%, 1080px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
