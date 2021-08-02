/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

__webpack_base_uri__ = 'http://localhost:8080';

module.exports = {
  entry: './src/index.js',
  target: 'web',
  output: {
    chunkLoading: false,
    wasmLoading: false,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
