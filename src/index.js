import React from "react";
import ReactDOM from "react-dom";
import router from "./router.js";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styleSheets/sass/main.scss";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <div>
      {router}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{ zIndex: 19999 }}
      />
    </div>
  </Provider>,
  document.getElementById("root")
);
