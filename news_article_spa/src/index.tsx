import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import "./styles/reset.css";

import "./assets/fonts/Proxima-Nova-Reg-It.otf";
import "./assets/fonts/Proxima-Nova-Sbold.otf";
import "./assets/fonts/Proxima-Nova-Light.otf";
import "./assets/fonts/ProximaNova-Regular.ttf";
import "./assets/fonts/Graphik-Medium.ttf";
import "./assets/fonts/Graphik-Semibold.ttf";
import "./styles/custom.scss";

import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
