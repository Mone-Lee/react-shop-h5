const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ssrConfig = require('webpack-project-builder/lib/webpack.ssr');

let ssrSetConfig = {
  output: {
		filename: 'static/[name]-server.js',
		libraryTarget: 'umd',
		publicPath: '/'
	},
  plugins: [
		new MiniCssExtractPlugin({
			filename: 'static/[name]_[contenthash:8].css'
		})
	]
}

module.exports = merge(ssrConfig, ssrSetConfig);