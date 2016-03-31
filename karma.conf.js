const webpackConf = require('./webpack.config.js');
// webpackConf.module.postLoaders = [
//     {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'istanbul-instrumenter'
//     }
//     ];

module.exports = function(config) {
    config.set({
		'plugins' : [
            'karma-sourcemap-loader',
			'karma-webpack',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
		],
        // ... normal karma configuration
        frameworks: ['jasmine'],
        browsers: ['PhantomJS','Chrome'],

        files: [
            'app/tests/*test.js',
            'app/tests/**/*test.js',
        ],

        preprocessors: {
            // add webpack as preprocessor
            'app/tests/*test.js': ['webpack','sourcemap'],
            'app/tests/**/*test.js': ['webpack','sourcemap'],
        },

        webpack: {
            devtool: 'inline-source-map',
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
            module: webpackConf.module,
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        reporters: [ 'progress', 'coverage'],
        
    });
};
