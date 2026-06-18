import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./Test.jsx";
import Ex from "./Ex.jsx";
import Ex_01 from "./Ex_01.jsx";
import selectBox from "./selectBox.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Test />
    <Ex />
    <Ex_01 />
    <selectBox />
  </StrictMode>,
);
