/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        luxe: {
          dark: '#171717',
          black: '#0D0D0D',
          charcoal: '#242424',
          ivory: '#F6F2EA',
          cream: '#FAF8F5',
          sand: '#EFEBE4',
          sandDark: '#E2DCD2',
          gold: '#B89B5E',
          goldLight: '#D4C39E',
          goldDark: '#8F753C',
          forest: '#263327',
          olive: '#3A4739',
          muted: '#6B7280',
          mutedLight: '#9CA3AF',
          border: '#E8E2D6',
          darkBorder: '#2E2E2E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 30px 60px -15px rgba(23, 23, 23, 0.08)',
        'editorial-hover': '0 40px 80px -20px rgba(23, 23, 23, 0.16)',
        'dock': '0 25px 50px -12px rgba(23, 23, 23, 0.18)',
        'subtle': '0 4px 20px -2px rgba(23, 23, 23, 0.04)',
      }
    },
  },
  plugins: [],
}
