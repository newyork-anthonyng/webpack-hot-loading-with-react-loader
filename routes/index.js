import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "../dist/react-loadable.json";

import express from "express";
const router = express.Router();

router.get("*", (req, res) => {
    let modules = [];

    const html = renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <App />
        </Loadable.Capture>
    );

    const bundles = getBundles(stats, modules);

    res.send(`
        <html>
            <body>
                <div id="app">${html}</div>
                <script src="manifest.js"></script>
                ${bundles.map(bundle => {
                    return `<script src="${bundle.file}"></script>`;
                }).join("\n")}
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
});

export default router;