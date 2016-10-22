var webpack = require("webpack");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var liveReloadOption = {
	appendScriptTag: true
};
var config = module.exports = {
	watch: true,
	devtool: 'source-map',
	entry: {
		app: ["./entry.js"]
	},
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loaders: ["style", "css"]},
		    { 
			  test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a valid name to reference
		      query: {
		        presets: ['es2015']
		      }
		    }
		]
	},
	devServer: {
	  hot: true
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new LiveReloadPlugin(liveReloadOption)
	]
};
// var WebpackDevServer = require("webpack-dev-server");

// // var config = require("./webpack.config.js");
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
// var compiler = webpack(config);
// var server = new WebpackDevServer(compiler, {
//   hot: true
// });
// server.listen(8080);