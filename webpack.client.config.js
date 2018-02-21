const path = require("path");
const webpack = require("webpack");
const ReactLoadablePlugin = require("react-loadable/webpack").ReactLoadablePlugin;

module.exports = {
    entry: {
        bundle: "./src/index.js"
    },  

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
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

    plugins: [
        new ReactLoadablePlugin({
            filename: "./dist/react-loadable.json"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        })
    ]
};