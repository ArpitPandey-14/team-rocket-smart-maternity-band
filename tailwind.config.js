/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        health: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        navy: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#0B0F19',
        },
        accent: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          rose: '#F43F5E',
          mint: '#10B981',
          teal: '#14B8A6',
          amber: '#F59E0B',
        },
        surface: {
          base: '#FAFBFD',
          card: '#FFFFFF',
          muted: '#F1F5F9',
          border: 'rgba(226, 232, 240, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.06)',
        'glass-hover': '0 12px 40px 0 rgba(15, 23, 42, 0.12)',
        'glow-blue': '0 0 25px -5px rgba(14, 165, 233, 0.3)',
        'glow-rose': '0 0 25px -5px rgba(244, 63, 94, 0.3)',
        'glow-mint': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'card-soft': '0 2px 12px -2px rgba(0, 0, 0, 0.04), 0 4px 20px -2px rgba(0, 0, 0, 0.02)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
