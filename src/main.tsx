import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/theme";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./components/Providers/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={2300}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ToastContainer />
  </React.StrictMode>
);
