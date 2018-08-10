const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client/?http://172.31.22.163:8080',
    './jsx/app.jsx'
  ],
  output: {
    publicPath: __dirname + '/js/',
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}