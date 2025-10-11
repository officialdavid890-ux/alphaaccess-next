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
          400: '#FFD700', // Primary accent
          500: '#E6C200',
          600: '#D4AF37', // Refined gold tone
          700: '#A9892B',
          800: '#7E641F',
          900: '#4D3D10',
          950: '#261F08',
        },
        black: '#000000',
        dark: "#0B0B0B",
        slate: "#1A1A1A",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Matches your sci-fi/futuristic style
        inter: ['Inter', 'sans-serif'], // For clean supporting text
      },
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
        'luxury-dark': 'radial-gradient(circle at 20% 20%, #1A1A1A, #000000)',
      },
      boxShadow: {
        gold: '0 0 25px rgba(212, 175, 55, 0.4)',
        subtle: '0 0 15px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.8, boxShadow: '0 0 20px rgba(212,175,55,0.6)' },
          '50%': { opacity: 1, boxShadow: '0 0 35px rgba(212,175,55,1)' },
        },
      },
    },
  },
  plugins: [],
};
