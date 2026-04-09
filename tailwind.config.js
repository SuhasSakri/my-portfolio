/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f0ff',
          purple: '#b026ff',
          cyan: '#08f7fe',
          dark: '#0a0a0a',
          darker: '#050505',
          card: 'rgba(255, 255, 255, 0.03)',
        }
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(0, 240, 255, 0.5)',
        'neon-purple': '0 0 15px rgba(176, 38, 255, 0.5)',
        'neon-cyan': '0 0 15px rgba(8, 247, 254, 0.5)',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
