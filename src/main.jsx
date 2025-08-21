import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FoodContextProvider from "./context/FoodContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </BrowserRouter>
);
