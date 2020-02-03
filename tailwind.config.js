const _ = require('lodash')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    rotate: {
      '1/4': '90deg',
      '1/2': '180deg',
      '3/4': '270deg'
    },
    extend: {
      colors: {
        yellow: {
          '400': '#fc9b0a'
        }
      }
    }
  },
  plugins: [
    function({ addUtilities, config, e }) {
      const rotateUtilities = _.map(config('theme.rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities)
    }
  ],
  variants: {}
}
