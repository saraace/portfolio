module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["wordpress.saraace.com", "media.graphcms.com"]
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: "url-loader",
				options: {
					limit: 100000
				}
			}
		});
		return config;
	}
};
