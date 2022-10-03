import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";

import "./assets/fonts/Proxima-Nova-Reg-It.otf";
import "./assets/fonts/Proxima-Nova-Sbold.otf";
import "./assets/fonts/Proxima-Nova-Light.otf";
import "./assets/fonts/ProximaNova-Regular.ttf";
import "./assets/fonts/Graphik-Medium.ttf";
import "./assets/fonts/Graphik-Semibold.ttf";
import "./styles/custom.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
