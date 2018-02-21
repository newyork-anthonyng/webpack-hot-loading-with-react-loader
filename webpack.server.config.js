const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    context: path.resolve(__dirname, "routes"),

    entry: "./index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "indexRoute.js",
        libraryTarget: "commonjs2"
    },

    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },

    target: "node",

    externals: [nodeExternals()]
};