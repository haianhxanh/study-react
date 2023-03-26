import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./tutorial/09b-global-context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// using Global Context
root.render(
  <AppContext>
    <App />
  </AppContext>
);
