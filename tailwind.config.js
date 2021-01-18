const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        primary: colors.orange[600],
        rose: colors.rose,
        orange: colors.orange
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
