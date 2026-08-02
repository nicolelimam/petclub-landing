import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
          light: '#FDBA74',
          accent: '#FB923C',
        },
        cream: '#FFF7ED',
        warm: '#FFFBF5',
        surface: '#FFFFFF',
        'surface-hover': '#FFF1E6',
        border: '#FED7AA',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(249, 115, 22, 0.15)',
        glow: '0 0 40px rgba(249, 115, 22, 0.25)',
      },
    },
  },
}
export default config