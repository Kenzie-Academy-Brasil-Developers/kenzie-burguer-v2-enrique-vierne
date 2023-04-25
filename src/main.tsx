import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/theme";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./components/Providers/userContext";
import { CartProvider } from "./components/Providers/cartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
    <ToastContainer
      position="top-left"
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
