const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    })
  ]
});