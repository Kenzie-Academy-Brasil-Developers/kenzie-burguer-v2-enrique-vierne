import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";

const App = () => (
  <>
    <GlobalStyles />
    <Router />
    <ToastContainer
    /* position="bottom-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" */
    />
  </>
);

export default App;
