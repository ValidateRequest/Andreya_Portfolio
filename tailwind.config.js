export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Theme Colors
        beige: {
          DEFAULT: '#E8DCCB',
          soft: '#F4ECE1',
          light: '#FAF6F0',
          dark: '#DAC7B1',
        },
        taupe: {
          DEFAULT: '#A58A72',
          light: '#BBA28C',
          deep: '#8C725C',
          dark: '#6E5540',
        },
        espresso: {
          DEFAULT: '#3B2D25',
          light: '#534035',
          soft: '#6E5D53',
          dark: '#261C16',
        },
        white: '#FFFFFF',

        // Semantic and legacy mappings
        ink: '#3B2D25',
        surface: '#FFFFFF',
        'surface-2': '#F4ECE1',
        line: 'rgba(165, 138, 114, 0.28)',
        paper: '#3B2D25',
        muted: '#736257',
        teal: {
          DEFAULT: '#A58A72',
          light: '#BBA28C',
          deep: '#8C725C',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
}
