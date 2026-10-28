/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: 'var(--background)',
          900: 'var(--background)',
          800: 'var(--card)',
          700: 'var(--secondary)',
          600: 'var(--primary)',
          500: 'var(--accent)',
        },
        sage: {
          600: 'var(--primary)',
          500: 'var(--accent)',
          400: 'var(--sage)',
        },
        terracotta: {
          600: 'var(--terracotta)',
          500: 'var(--terracotta)',
          400: 'var(--terracotta)',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
