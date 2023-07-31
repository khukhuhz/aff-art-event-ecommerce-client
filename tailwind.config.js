/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        sans: "'Open Sans', sans-serif",
      },
      fontSize: {
        md: "12px",
        base: "15px",
        lg: "17px",
        "5xl": "45px",
      },
    },
  },
  plugins: [],
};
