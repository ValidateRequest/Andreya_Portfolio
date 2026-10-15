export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#1c2124',
        surface: '#252b2f',
        'surface-2': '#2e353a',
        line: 'rgba(241, 239, 233, 0.14)',
        paper: '#f1efe9',
        muted: '#b0b6b5',
        teal: {
          DEFAULT: '#2db3a3',
          light: '#5fd3c4',
          deep: '#1f8378',
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
