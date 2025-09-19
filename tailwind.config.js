/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        havelock: ['"havelock-titling-variable"', 'sans-serif'],
        playfair: ['var(--font-playfair)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

