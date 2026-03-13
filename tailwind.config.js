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
        magenta: '#e83e8c',
        violet: '#7b2ff7',
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
        'drift-fast': 'drift-fast 8s ease-in-out infinite',
        'drift-fast-2': 'drift-fast-2 10s ease-in-out infinite',
        'drift-fast-3': 'drift-fast-3 9s ease-in-out infinite',
        'drift-fast-4': 'drift-fast-4 11s ease-in-out infinite',
        'drift-fast-5': 'drift-fast-5 7s ease-in-out infinite',
        'glyph-pulse': 'glyph-pulse 2.5s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 3s ease-in-out infinite',
        'marquee-quack': 'marquee 20s linear infinite',
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
        'drift-fast': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(80px, 60px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 30px) scale(0.95)' },
        },
        'drift-fast-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-60px, 80px) scale(1.15)' },
          '66%': { transform: 'translate(40px, -50px) scale(0.9)' },
        },
        'drift-fast-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(100px, -40px) scale(1.1)' },
        },
        'drift-fast-4': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-80px, -60px) scale(1.05)' },
          '66%': { transform: 'translate(50px, 40px) scale(1.15)' },
        },
        'drift-fast-5': {
          '0%, 100%': { transform: 'translate(0, 0) scale(0.8)' },
          '50%': { transform: 'translate(-120px, -80px) scale(1.2)' },
        },
        'glyph-pulse': {
          '0%, 100%': { transform: 'rotate(45deg) scale(1)', opacity: '0.5' },
          '50%': { transform: 'rotate(45deg) scale(1.4)', opacity: '1' },
        },
        'scroll-hint': {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-50%) translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateX(-50%) translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
};
