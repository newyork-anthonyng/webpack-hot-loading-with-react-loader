import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let render;
if (process.env.NODE_ENV === "dev") {
  render = ReactDOM.render;
} else {
  render = ReactDOM.hydrate;

}
render(
  <App />,
  document.getElementById("app")  
);