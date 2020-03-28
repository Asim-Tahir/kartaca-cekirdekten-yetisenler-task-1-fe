// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV,
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: { appendTsSuffixTo: [/\.vue$/] }
			},
			{
				test: /\.s?(c|a)ss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.svg$/,
				loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
			},
		],
		plugins: [
			// make sure to include the plugin for the magic
			new VueLoaderPlugin()
		],
		resolve: {
			alias: {
				styles: path.resolve(__dirname, '../src/scss')
			}
		},
		devtool: process.env.NODE_ENV=='development' 
			?
			'eval-cheap-module-source-map' //'cheap-module-eval-source-map'
			:
			''
		//devtool: '#eval'
	}
}