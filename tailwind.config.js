/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#EAEAEF',
          text: '#18181B',
          secondary: '#55555C',
          surface: '#F6F6F9',
          surface2: '#DFDFE5',
          border: 'rgba(0, 0, 0, 0.09)',
          indigo: '#5E5CE6',
          silver: '#71717A',
          darkBg: '#08080A',
          darkText: '#F5F5F7',
          darkSecondary: '#A1A1A6',
          darkSurface: '#171719',
          darkSurface2: '#222225',
          darkBorder: 'rgba(255, 255, 255, 0.12)',
        },
        studio: {
          bg: 'var(--bg-page)',
          surface: 'var(--surface-1)',
          elevated: 'var(--surface-2)',
          card: 'var(--surface-card)',
          border: 'var(--border-subtle)',
          'border-hover': 'var(--border-hover)',
          text: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          accent: 'var(--accent)',
          indigo: '#5E5CE6',
          silver: '#71717A',
          lime: '#5E5CE6',
          copper: '#5E5CE6',
          cyan: '#5E5CE6',
          bone: '#EAEAEF',
          graphite: 'rgba(0, 0, 0, 0.09)',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        serif: [
          '"New York"',
          'Charter',
          'Georgia',
          'serif'
        ],
        mono: [
          '"SF Mono"',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Fira Code"',
          'monospace'
        ],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '22px',
        '3xl': '30px',
        '4xl': '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
        'apple-subtle': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'apple-float': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'apple-card': '0 12px 30px -10px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}