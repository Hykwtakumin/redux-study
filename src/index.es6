import "babel-polyfill"

require("insert-css")(require("./styl/index.styl"));

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
