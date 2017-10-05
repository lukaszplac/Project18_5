const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

let env = process.env.NODE_ENV || 'development';
console.log('NODE_ENV:', env);

let plugins = [new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'index.html',
                inject: 'body'
            })];

if (env.trim() == 'production') {
plugins.push(
    new UglifyJSPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

//webpack.config.js
module.exports = {
    entry: (env !== 'production' ? [
        'webpack-dev-server/client?http://localhost:8080'
    ] : []).concat(['./client/index.js']),
	output: {
	  filename: './bundle.js',
	  path: path.resolve(__dirname, 'public')
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                //exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                    ]
            }
        ]
    },
	plugins: plugins
}
