const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/code-line.js'],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  output: {
    filename: 'code-line.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'CodeLine',
    libraryTarget: "umd",
    libraryExport: 'default',
    clean: {
      keep: 'code-line.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ // applied from right to left (last to first configured).
          'style-loader', // creates style nodes from JS strings
          // importLoaders: Number of loaders applied before CSS loader
          {loader: 'css-loader', options: {importLoaders: 2}}, // translates CSS into CommonJS
          'postcss-loader', // To process CSS with PostCSS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/inline'
      }
    ]
  },
};
