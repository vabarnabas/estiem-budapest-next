/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#205d43",
        "darker-green": "#208c61",
        "soft-green": "#46b285",
        yellow: "#f9ce06",
        "soft-yellow": "#fbe47c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
