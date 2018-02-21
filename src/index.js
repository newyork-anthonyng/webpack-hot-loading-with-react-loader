import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loadable from "react-loadable";

let render;
if (process.env.NODE_ENV === "dev") {
  render = ReactDOM.render;
} else {
  render = ReactDOM.hydrate;

}

Loadable.preloadReady().then(() => {
  render(
    <App />,
    document.getElementById("app")  
  );
});