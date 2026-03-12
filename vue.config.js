const webpack = require('webpack')

module.exports = {
  publicPath: '/ci-ville2/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  }
}