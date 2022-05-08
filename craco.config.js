const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    },
    plugins: [
      new WindiCSSWebpackPlugin({
        virtualModulePath: 'src'
      })
    ]
  }
}
