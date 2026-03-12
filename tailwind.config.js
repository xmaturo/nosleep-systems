/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,mdx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#fed172',
        ember: '#f3742b',
        rust: '#b83a14',
        wine: '#612e37',
        void: '#231650',
        cream: '#f5f0e8',
      },
      fontFamily: {
        display: ['"Dela Gothic One"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift 22s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        wiggle: 'wiggle 8s ease-in-out infinite',
        radiate: 'radiate 3s ease-in-out infinite',
        'pulse-border': 'pulse-border 4s ease-in-out infinite',
        'pulse-scale': 'pulse-scale 3s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0.3deg)' },
          '50%': { transform: 'rotate(0.3deg)' },
        },
        radiate: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
          '50%': { transform: 'scale(1.15)', opacity: 1 },
        },
        'pulse-border': {
          '0%, 100%': { borderColor: '#fed172' },
          '50%': { borderColor: '#f3742b' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
