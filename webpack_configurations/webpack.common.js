const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'PORTFOLIO',
			templateContent: `
				<!DOCTYPE html>
				<html id="html" lang="en">
					<head id="head">
						<meta id="meta_0" charset="UTF-8">

						<meta id="meta_1" name="application_name" content="Portfolio">

						<meta id="meta_2" name="description" content="A lot about me and the things I do!">

						<meta id="meta_3" name="author" content="Hrushikesh Joshi">

						<meta id="meta_4" name="keywords" content="">

						<meta id="meta_5" name="viewport" content="width=device-width, initial-scale=1.0">

						<meta id="meta_6" http-equiv="X-UA-Compatible" content="IE=edge">

						<link rel="icon" type="image/png" href="./images/LOGO_512.4da30a3b235036db6606.png">

						<title>
							Hrushikesh Joshi
						</title>
					</head>

					<body id="body" class="body">
						<div id="root" class="root"></div>
					</body>
				</html>
			`,
		}),
	],
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.mp3$/,
				type: 'asset/resource',
				generator: {
					filename: 'audios/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.mp4$/,
				type: 'asset/resource',
				generator: {
					filename: 'videos/[name].[contenthash][ext]',
				},
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
};
