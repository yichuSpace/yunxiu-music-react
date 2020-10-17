const sassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path')
const resolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/styles/index.scss'
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      '@api': resolve('src/api'),
      '@components': resolve('src/components'),
      '@routes': resolve('src/routes'),
      '@store': resolve('src/store'),
      '@style': resolve('src/styles'),
      '@utils': resolve('src/utils'),
      '@views': resolve('src/views')
    }
  },
  devServer: {
    port: 3000,
    hot: true
  }
}
