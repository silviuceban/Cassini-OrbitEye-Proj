/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        map: "url('/public/map.png')",
        selectedMap: "url('/public/selectedMap.png')",
      },
    },
  },
  plugins: [],
};
