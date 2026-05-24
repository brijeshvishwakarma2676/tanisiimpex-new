/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EDF5',
          100: '#C5D1E8',
          200: '#9BB1D4',
          300: '#7191BF',
          400: '#4770AA',
          500: '#1B3F6B',
          600: '#163459',
          700: '#112947',
          800: '#0A2342',
          900: '#060F1C',
        },
        gold: {
          100: '#FDF3D0',
          200: '#FAE49F',
          300: '#F0C040',
          400: '#D4A017',
          500: '#B8860B',
          600: '#9A7009',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #060F1C 0%, #0A2342 40%, #1B3F6B 70%, #0A2342 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A017, #F0C040)',
        'navy-gradient': 'linear-gradient(135deg, #0A2342, #1B3F6B)',
        'dark-gradient': 'linear-gradient(180deg, #060F1C 0%, #0A2342 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(10, 35, 66, 0.08)',
        'card-hover': '0 12px 48px rgba(10, 35, 66, 0.18)',
        gold: '0 4px 24px rgba(212, 160, 23, 0.35)',
        'gold-lg': '0 8px 40px rgba(212, 160, 23, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
