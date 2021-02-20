const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prodConfig = require('webpack-project-builder/lib/webpack.prod');

let prodSetConfig = {
  output: {
    filename: 'static/[name]_[chunkhash:8].js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/[name]_[contenthash:8].css',
    }),
  ]
}

module.exports = merge(prodConfig, prodSetConfig);