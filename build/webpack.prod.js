const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const pkgJson = require("../package.json");
const banner = pkgJson.name + ' v' + pkgJson.version + '\n' +
  '(c) 2017 ' + pkgJson.author + '\n' +
  'Released under the ' + pkgJson.license + ' License.';

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("production"),
      VERSION: JSON.stringify(pkgJson.version),
      NAME: JSON.stringify(pkgJson.name)
    })
  ]
});
