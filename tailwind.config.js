/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FEFCE8",
          100: "#FEF08A",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04"
        },
        ink: {
          DEFAULT: "#0a0a0a",
          900: "#0b0b0b",
          800: "#111111"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "ui-sans-serif", "Arial"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif"]
      },
      maxWidth: {
        wrap: "72rem",   // ~1152px
        text: "56rem"    // ~896px
      }
    }
  },
  plugins: []
};
