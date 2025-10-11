/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefine colors using a numerical scale for easier use of shades
        gold: {
          50: '#FFFBEA',
          200: '#FFF0B3',
          300: '#FFE180',
          400: '#FFD700', // Primary Accent
          600: '#D4AF37', // Deeper Gold
          700: '#A9892B',
          800: '#7E641F',
          900: '#4D3D10',
          950: '#261F08', // Used for dark gradients
        },
        // Dark Base Colors
        black: '#000000',
        dark: "#0B0B0B", 
        slate: "#1A1A1A", 
      },
      // Adding a radial gradient utility
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
