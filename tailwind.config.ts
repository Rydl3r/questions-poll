import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-info': '#EAEEF7',
        'button-active': '#DCDFE6',
        'paper-info': '#FFF0F0',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(166deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A1 74.96%)',
      },
      borderColor: {
        light: '#E0E0E0',
      },
      colors: {
        dark: '#333',
        light: '#FBFBFF',
        violet: '#6A3AA2',
      },
      boxShadow: {
        'button-dark': '2px 2px 6px 0px #543C9740',
        'button-violet': '0px 4px 4px 0px #D8D6D640',
      },
    },
  },
  plugins: [],
};
export default config;
