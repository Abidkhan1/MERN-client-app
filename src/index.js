import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import { reducerStore } from "./reducers/index.js";
import "./index.css";

ReactDOM.render(
  <Provider store={reducerStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
