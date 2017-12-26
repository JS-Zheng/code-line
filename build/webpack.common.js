const path = require('path');

module.exports = {
  entry: './src/code-line.js',
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
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  }
};
