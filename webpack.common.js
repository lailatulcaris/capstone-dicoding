const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('http://54.255.130.64:5000/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'travelin-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('http://54.255.130.64:5000/cultures/image'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'travelin-api-image1',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('http://54.255.130.64:5000/tours/image'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'travelin-api-image2',
          },
        },
      ],
    }),
  ],
};