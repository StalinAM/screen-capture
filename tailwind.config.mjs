/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.label': {
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          margin: 'auto',
          content: "''",
          borderRadius: '50%',
          display: 'block',
          width: '20rem',
          height: '20rem',
          left: '-5rem',
          textAlign: 'center',
          transition: 'box-shadow 0.3s ease-out',
          zIndex: '-1'
        },
        '.check': {
          boxShadow: 'inset 0 0 0 10em #e0f2fe'
        }
      })
    })
  ]
}
