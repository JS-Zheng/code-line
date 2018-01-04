const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

var pkgJson = require("../package.json");
var banner = pkgJson.name + ' v' + pkgJson.version + '\n' +
  '(c) 2017 ' + pkgJson.author + '\n' +
  'Released under the ' + pkgJson.license + ' License.';

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
    new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '..'), exclude: ['code-line.esm.js']}),
    new UglifyJSPlugin(),
    new webpack.BannerPlugin(banner),
  ]
});