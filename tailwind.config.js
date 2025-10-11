/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        dark: "#0B0B0B",
        slate: "#1A1A1A",
        accent: "#FFD700",
      },
    },
  },
  plugins: [],
};
