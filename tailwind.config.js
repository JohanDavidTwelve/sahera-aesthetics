module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a', // Dark grey, almost black
        light: '#f8f9fa', // Light color (off-white)
        indigo: '#4B0082', // Indigo
        gold: {
          DEFAULT: '#FFD700', // Gold
          gradient: 'linear-gradient(45deg, #FFD700, #FFAA00)', // Gold gradient
        },
        silver: '#C0C0C0', // Silver
      },
    },
  },
  plugins: [],
}
