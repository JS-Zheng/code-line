const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname , '..')}),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    })
  ]
});