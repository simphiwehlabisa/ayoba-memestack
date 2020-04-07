import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { memesReducer } from "./reducer";
import { Provider } from "react-redux";
const store = createStore(memesReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
