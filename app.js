const express = require("express");
const app = express();

if (process.env.NODE_ENV === "dev") {
    const webpack = require("webpack");
    const config = require("./webpack.dev.config");
    const compiler = webpack(config);

    app.use(require("webpack-dev-middleware")(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler));
}


app.listen(3000, () => {
    console.log("Server listening on 3000");
})