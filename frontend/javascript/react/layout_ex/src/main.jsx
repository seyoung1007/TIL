import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Visual from "./components/Visual.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <Visual />
    <Content />
    <Footer />
  </StrictMode>,
);
