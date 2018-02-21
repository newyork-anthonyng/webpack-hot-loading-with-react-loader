const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, "routes"),

    entry: {
        indexRoute: "./index.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "commonjs2"
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

    target: "node"
};