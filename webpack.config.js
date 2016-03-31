const webpack = require('webpack');
module.exports = {
    entry:'./app/components/entry.js',
    output:{
        path:__dirname,
        filename:'./app/bundle.js',
    },
    devtool: 'inline-source-map',
    // historyApiFallback: true,
    // hot: true,
    // inline: true,
    // progress: true,
    // stats: 'errors-only',
    module: {
        loaders: [
        { 
            test: /\.scss$/, 
            loaders:['style', 'css', 'sass'],
            exclude: /(node_modules|bower_components)/,
        },
        // { 
        //     test: /\.css$/, 
        //     loader: "style!css",
        //     exclude: /(node_modules|bower_components)/,
        // },
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
        // {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
        ],
		// postLoaders: [
		// {
		// 	test: /\.js$/,
		// 	exclude: /(node_modules|bower_components)/,
		// 	loader: 'istanbul-instrumenter'
		// }
		// ]
    },
	// plugins: [
      // new webpack.HotModuleReplacementPlugin()
    // ]
    devServer:{
        proxy:{
            '/app/api/*':{
                target: "http://localhost:3000",
                secure: false,
                rewrite: function(req) {
                      req.url = req.url.replace(/^\/app/, '');
                }
            }
        }    
    }
    
}

