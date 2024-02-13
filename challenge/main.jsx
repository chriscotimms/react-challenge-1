import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Greeting name="oli" />
    <Shouter />
    <MouseTracker />
 
  </React.StrictMode>
);
