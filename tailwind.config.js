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
          50: '#FFFBEA',
          200: '#FFF0B3',
          300: '#FFE180',
          400: '#FFD700', // main gold
          600: '#D4AF37', // deep accent gold
          700: '#A9892B',
          800: '#7E641F',
          900: '#4D3D10',
          950: '#261F08',
        },
        black: '#000000',
        dark: '#0B0B0B',
        slate: '#1A1A1A',
      },
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-glow': 'radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        gold: '0 0 25px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
