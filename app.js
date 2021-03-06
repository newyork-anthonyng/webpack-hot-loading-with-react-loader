const express = require("express");
const app = express();
const path = require("path");
const Loadable = require("react-loadable");

if (process.env.NODE_ENV === "dev") {
    const webpack = require("webpack");
    const config = require("./webpack.dev.config");
    const compiler = webpack(config);

    app.use(require("webpack-dev-middleware")(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler));
} else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    
    app.use(require("./dist/indexRoute").default);
}

Loadable.preloadAll().then(() => {
    app.listen(3000, () => {
        console.log("Server listening on 3000");
    })
});