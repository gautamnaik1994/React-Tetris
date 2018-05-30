const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
	mode: 'development',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'React Stack',
			inject: true,
			favicon: 'src/images/favicon.png',
			template: './src/views/index.html',
		}),
		new ErrorOverlayPlugin(),
		new WebpackPwaManifest({
			name: 'React Tetris',
			short_name: 'React Tetris',
			description: 'Tetris Game',
			background_color: '#ffffff',
			icons: [
				{
					src: path.resolve('src/images/favicon.png'),
					sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
				},
				{
					src: path.resolve('src/images/favicon.png'),
					size: '1024x1024', // you can also use the specifications pattern
				},
			],
		}),
	],
	performance: {
		// hints: 'warning',
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 3,
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg|jpeg)$/,
				exclude: /fonts/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							fallback: 'file-loader',
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg|jpeg)$/,
				exclude: /fonts/,
				use: [
					{
						loader: 'file-loader',

						options: {
							outputPath: 'images/',
							name: '[name][hash].[ext]',
						},
					},
				],
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts/',
							name: '[name][hash].[ext]',
						},
					},
				],
			},
		],
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		historyApiFallback: true,
		port: 3000,
		// proxy: {
		//   '/auth/google': 'http://localhost:5000',
		// },

		// port: 4000
		// compress: true,
	},
	devtool: 'eval-source-map',
};
