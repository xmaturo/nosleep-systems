module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        slate: '#1e1e2f',
        accent: '#00f9ff',
        white: '#f9f9f9',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};