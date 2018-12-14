import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./load.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import Counters from "./components/counters";
import Calender from "./components/calendar";

ReactDOM.render(<Calender />, document.getElementById("root"));

serviceWorker.unregister();
