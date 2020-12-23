const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        primary: colors.orange[600]
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {},
  plugins: [],
}
