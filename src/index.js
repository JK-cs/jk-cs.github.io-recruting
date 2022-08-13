import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
