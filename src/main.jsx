import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import { localTokenKey, reqTokenHederKey } from "./contstans.js";
import store from "./Store/index.js";

axios.defaults.baseURL = "https://nt-shopping-list.onrender.com/api";
axios.defaults.headers.common[reqTokenHederKey] =
  localStorage.getItem(localTokenKey);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
