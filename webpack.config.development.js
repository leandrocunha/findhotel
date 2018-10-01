const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config');

module.exports = merge(common, {
  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  mode: 'development',
});
