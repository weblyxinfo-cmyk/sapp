import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1D3A',
          2: '#112347',
          3: '#1E3A6E',
        },
        yellow: {
          DEFAULT: '#F5C200',
          dark: '#D9AB00',
        },
        gray: {
          bg: '#F2F4F8',
        },
        muted: '#6B7A99',
        border: '#E3E8F2',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '18px',
        icon: '8px',
      },
    },
  },
  plugins: [],
};
export default config;
