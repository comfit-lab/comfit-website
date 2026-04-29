/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bcd1ff',
          300: '#8eb1ff',
          400: '#5b85ff',
          500: '#3b5dff',
          600: '#2540f5',
          700: '#1d31de',
          800: '#1d2bb3',
          900: '#1d2a8a',
        },
        accent: {
          400: '#67e8f9',
          500: '#06b6d4',
          600: '#0891b2',
        },
        ink: {
          950: '#05060f',
          900: '#0a0d1f',
          800: '#10142b',
          700: '#161b3a',
          600: '#1f2547',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          'sans-serif',
        ],
        display: [
          'Pretendard',
          'Inter',
          '-apple-system',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 50% 0%, rgba(59,93,255,0.18), transparent 60%)',
        'mesh-1':
          'radial-gradient(at 10% 0%, rgba(59,93,255,0.35) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(6,182,212,0.25) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(124,58,237,0.25) 0px, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91,133,255,0.25), 0 20px 60px -20px rgba(59,93,255,0.45)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -25px rgba(0,0,0,0.6)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
