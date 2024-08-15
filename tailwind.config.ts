/** @type {import('tailwindcss').Config} */
import a from './src/assets/images/image-login/login-desktop.png'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-desktop': "url('/assets/images/image-login/login-desktop.png')",
        'login-tablet': "url('/assets/images/image-login/login-tablet.png')",
        'login-mobile': "url('/assets/images/image-login/login-mobile.png')",
      },
      screens: {
        'sm-bg': '495px',
        'md-bg': '805px',
        'lg-bg': '1024px',
      },
      colors: {
        primary: {
          lighter: '#BC97E2',
          light: '#E0E0E0',
          main: '#280F31',
          dark: '#4D2B8C',
          darker: '#FFFFFF',
        },
        secondary: {
          lighter: '#BC97E2',
          light: '#E0E0E0',
          main: '#280F31',
          dark: '#4D2B8C',
          darker: '#FFFFFF',
        },
        gray: {
          lighter: '#F9FAFB',
          light: '#F4F6F8',
          main: '#DFE3E8',
          dark: '#919EAB',
          darker: '#454F5C',
        },
        terciary: {
          lighter: '#E4F1F8',
          light: '#C1D9E5',
          main: '#57ADD9',
          dark: '#4E819C',
          darker: '#345769',
        },
        success: {
          lighter: '#DFEFE4',
          light: '#C2E4CE',
          main: '#62AC7D',
          dark: '#28854A',
          darker: '#1F6638',
        },
        warning: {
          lighter: '#F8F3E8',
          light: '#F0E4CB',
          main: '#D99031',
          dark: '#99752E',
          darker: '#664E1F',
        },
        error: {
          lighter: '#F7E5E1',
          light: '#EFC7BE',
          main: '#CC4728',
          dark: '#99351F',
          darker: '#662314',
        },
      },
      scale: {
        '98': '0.98',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.08s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cortex: {
          primary: '#280F31',
          secondary: '#4D2B8C',
          accent: '#BC97E2',
          neutral: '#E0E0E0',
          'base-100': '#FFFFFF',
          info: '#407fed',
          success: '#62AC7D',
          warning: '#D1A754',
          error: '#CC4728',
        },
      },
    ],
  },
};
