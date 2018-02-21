const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "webpack-hot-middleware/client",
        "./src/index.js"
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },

    module: {
        loaders: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
           template: "./src/devTemplate.html" 
        })
    ]
};