import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from './reportWebVitals';/
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
// reportWebVitals();