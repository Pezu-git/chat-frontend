/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');

// eslint-disable-next-line import/newline-after-import
const common = require('./webpack.common');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});
