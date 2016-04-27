import "babel-polyfill"

import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import {store} from "./store";

ReactDOM.render(<App store={store} />, document.getElementById("app"));
