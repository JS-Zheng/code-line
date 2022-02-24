const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const pkgJson = require("../package.json");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("development"),
      VERSION: JSON.stringify(pkgJson.version),
      NAME: JSON.stringify(pkgJson.name)
    })
  ]
});
