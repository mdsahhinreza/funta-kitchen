import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
