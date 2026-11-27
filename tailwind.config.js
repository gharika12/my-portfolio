/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core Theme: Midnight Blue + Electric Cyan
        midnight: {
          950: '#030712', // Deepest midnight void background
          900: '#060B18', // Deep midnight blue main canvas
          850: '#0A1128', // Rich midnight card background
          800: '#0E1738', // Elevated midnight container
          750: '#111E48', // Hover card surface
          700: '#17275A', // Midnight border & subtle element
          600: '#1F3478', // Lighter midnight accent
        },
        cyan: {
          DEFAULT: '#00F0FF',
          neon: '#00F0FF',
          electric: '#00F0FF',
          glow: '#00F0FF',
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          950: '#083344',
        },
        electric: {
          cyan: '#00F0FF',
          neon: '#00F0FF',
          blue: '#38BDF8',
          teal: '#2DD4BF',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],          // for headings
        heading: ['Poppins', 'sans-serif'],          // alias
        inter: ['Inter', 'sans-serif'],              // for body text and description
        body: ['Inter', 'sans-serif'],               // alias
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],    // for section headings
        section: ['Montserrat', 'sans-serif'],       // alias
        roboto: ['Roboto', 'sans-serif'],            // for skills and technical details
        tech: ['Roboto', 'sans-serif'],              // alias
        mono: ['Roboto Mono', 'monospace'],
        playfair: ['Playfair Display', 'serif'],     // for stylish name or special headings
        stylish: ['Playfair Display', 'serif'],      // alias
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.16) 0%, rgba(6, 182, 212, 0.09) 45%, rgba(3, 7, 18, 0) 70%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-cyan-sm': '0 0 15px -3px rgba(0, 240, 255, 0.35)',
        'glow-cyan-md': '0 0 25px -4px rgba(0, 240, 255, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)',
        'glow-cyan-lg': '0 0 35px -5px rgba(0, 240, 255, 0.65)',
        'card-midnight': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(0, 240, 255, 0.15)',
        'card-glow': '0 0 25px -3px rgba(0, 240, 255, 0.25), 0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-very-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
