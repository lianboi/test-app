
var path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './client/app/index.js',
    vendor:['react', 'react-dom']
  },
  devtool: 'inline-source-map',
  plugins: [
    /*new HtmlWebpackPlugin({
      title: 'Output Management'
    })*/
    new ExtractTextPlugin("styles.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      '$': "jquery",
      'jQuery': "jquery",
      'window.jQuery': "jquery",
      'window.$': 'jquery'

    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js'}),
    new webpack.DefinePlugin({
      "require.specified": "require.resolve"
    })
  ],
  output: {
    path: path.join(__dirname ,'/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        exclude: [path.resolve(__dirname, 'node_modules')]
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }
    ]
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'client', 'app', 'Core'),
      components: path.resolve(__dirname, 'client', 'app', 'components'),
      utils: path.resolve(__dirname, 'client', 'app', 'utils')
    },
    extensions: ['.json', '.js', '.jsx', '.css'],
  }
};