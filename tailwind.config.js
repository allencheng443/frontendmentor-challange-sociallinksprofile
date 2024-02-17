/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "hsl(var(--green))",
        gray: "hsl(var(--gray))",
        darkgray: "hsl(var(--darkgray))",
        offblack: "hsl(var(--offblack))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
