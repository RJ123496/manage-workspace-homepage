/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: "var(--header-font-family)",
      },
      screens: {
        'ipad': '768px',
        'ipad-pro': '1024px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};