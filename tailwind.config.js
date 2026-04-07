/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#b8860b',
          light: '#d4a017',
          dark: '#8b6508',
          muted: 'rgba(184, 134, 11, 0.12)',
        },
        coral: '#c0504d',
        surface: {
          DEFAULT: '#f5f3ef',
          deep: '#eae7e1',
          raised: '#ffffff',
          overlay: '#ede9e3',
        },
        neutral: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#cdc7bc',
          400: '#a39e94',
          500: '#7a756c',
          600: '#5c5850',
          700: '#3d3a35',
          800: '#2a2725',
          900: '#1a1816',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
