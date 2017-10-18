const path = require('path'), webpack = require('webpack');


//auto inject bundle plugin
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: './public/index.html',
//     filename: 'index.html',
//     inject: 'body'
// })

module.exports = {
    entry: {bundle:'./src/app/'},
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "[name].js"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3535
    }
    ,module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
            }
        }
            ,{ test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV','API_URL'])
    ]

};
