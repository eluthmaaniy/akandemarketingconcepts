import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        heading: '#222325',
        body: '#404145',
        muted: '#62646A',
        line: '#E4E5E7',
        hover: '#1DBF73',
        accent: '#0F5533',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '0.875rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 6px 16px -4px rgb(0 0 0 / 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
