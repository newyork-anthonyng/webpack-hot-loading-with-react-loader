import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

import express from "express";
const router = express.Router();

router.get("*", (req, res) => {
    const html = renderToString(<App />);

    res.send(`
        <html>
            <body>
                <div id="app">${html}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
});

export default router;