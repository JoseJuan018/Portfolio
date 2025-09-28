/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.95rem',
        base: '1.15rem',   // antes era 1rem (16px)
        lg: '1.35rem',
        xl: '1.65rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
}