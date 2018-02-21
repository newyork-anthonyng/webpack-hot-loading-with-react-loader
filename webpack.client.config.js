const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [
        "./src/index.js"
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};