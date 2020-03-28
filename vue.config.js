module.exports = {
	configureWebpack: {
		devServer: {
			clientLogLevel: 'info',
			watchOptions: {
				aggregateTimeout: 300,
				poll: 1000,
				ignored: /node_modules/
			}
		},
	}
}