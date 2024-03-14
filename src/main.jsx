import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@emotion/react";

import App from "./App.jsx";
import { theme } from "./theme";
import { ContextProvider } from "./content/index.jsx";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ToastContainer />
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
