import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// Register the service worker to make this a progressive web app
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
