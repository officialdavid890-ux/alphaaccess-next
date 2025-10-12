/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#FFE180",
          400: "#FFD700",
          900: "#4D3D10",
        },
        black: "#000000",
      },
    },
  },
  plugins: [],
};
