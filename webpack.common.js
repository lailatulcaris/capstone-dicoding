const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

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
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
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
        {
          from: path.resolve(__dirname, 'src/public/images/icons'),
          to: path.resolve(__dirname, 'dist/images/icons'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://api1.simantappamekasan.com/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'travelin-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://api1.simantappamekasan.com/cultures/image'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'travelin-api-image1',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://api1.simantappamekasan.com/tours/image'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'travelin-api-image2',
          },
        },
      ],
    }),
  ],
};
